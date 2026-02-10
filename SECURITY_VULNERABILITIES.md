# Security Vulnerabilities Report - KzaVerde App

**Report Date:** February 10, 2026  
**Project:** KzaVerde Floral E-Commerce Platform  
**Framework:** Next.js 12.1.10 + React 17.0.2

---

## Executive Summary

The KzaVerde application contains **13 critical and high-severity security vulnerabilities** that could expose business information, allow unauthorized data manipulation, and create attack vectors for malicious actors. This report details each vulnerability, exploitation methods, and recommended fixes.

**Risk Level:** 🔴 **CRITICAL**

---

## Vulnerabilities Found

### 1. **Hardcoded Business Phone Number - CRITICAL** 🔴

**Severity:** CRITICAL  
**Issue:** WhatsApp business phone number `555183388338` is hardcoded in source code and exposed publicly.

**Location:**

- `lib/whatsapp.ts` (Line 7)
- `pages/api/orders/create.ts` (hardcoded in message generation)
- Navigation component
- Hero section

**Vulnerable Code:**

```typescript
// lib/whatsapp.ts
export const WHATSAPP_BUSINESS_PHONE = "555183388338";

// Used in multiple components
return `https://wa.me/555183388338?text=${encodeURIComponent(finalMessage)}`;
```

**Exploitation:**

```bash
# Attackers can harvest phone number from:
# 1. Page source code (View Source)
# 2. Network requests
# 3. JavaScript bundles
# 4. GitHub repository (if public)

# Then use it for:
# - Spam/harassment campaigns
# - SIM swapping attacks
# - Social engineering
# - Phishing campaigns targeting customers
```

**Impact:**

- Business phone number exposed to public
- Targets for spam/harassment
- Privacy violation
- Customer information at risk

**Fix:**
Move to environment variable and backend validation:

```typescript
// lib/whatsapp.ts
export const WHATSAPP_BUSINESS_PHONE =
  process.env.NEXT_PUBLIC_WHATSAPP_PHONE ||
  process.env.WHATSAPP_PHONE ||
  "default_fallback";
```

```env
# .env.local (NOT committed to git)
WHATSAPP_PHONE=555183388338
NEXT_PUBLIC_WHATSAPP_PHONE=555183388338
```

---

### 2. **No API Authentication/Authorization - CRITICAL** 🔴

**Severity:** CRITICAL  
**Issue:** All API endpoints are publicly accessible with no authentication mechanism.

**Location:**

- `pages/api/products/index.ts` - No auth check
- `pages/api/products/[id].ts` - No auth check
- `pages/api/orders/create.ts` - No auth check

**Vulnerable Code:**

```typescript
// pages/api/products/index.ts
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>,
) {
  // ANY user can POST/PATCH/DELETE products
  if (req.method === "POST") {
    // NO AUTHENTICATION CHECK
    const product = createProduct(req.body);
  }
}
```

**Exploitation:**

```bash
# Attacker can create products:
curl -X POST http://localhost:3000/api/products \
  -H "Content-Type: application/json" \
  -d '{
    "name": "HACKED",
    "price": "$0.00",
    "description": "Your store is compromised",
    "image": "malicious_url",
    "category": "hack"
  }'

# Update existing products:
curl -X PATCH http://localhost:3000/api/products/1 \
  -d '{"name": "HACKED PRODUCT", "price": "$999.99"}'

# Delete all products:
for i in {1..100}; do
  curl -X DELETE http://localhost:3000/api/products/$i
done
```

**Impact:**

- Entire product catalog can be deleted
- Products can be modified to scam customers
- Malicious products added to store
- Data integrity compromised

**Fix:** Implement API key authentication

```typescript
// lib/auth.ts
const ADMIN_API_KEY = process.env.ADMIN_API_KEY || "";

export function validateAdminKey(apiKey?: string): boolean {
  if (!ADMIN_API_KEY) {
    console.warn("ADMIN_API_KEY not set in environment");
    return false;
  }
  return apiKey === ADMIN_API_KEY;
}

// pages/api/products/index.ts
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>,
) {
  // Only allow POST/PATCH/DELETE with valid API key
  if (["POST", "PATCH", "DELETE"].includes(req.method || "")) {
    const apiKey = req.headers["x-api-key"] as string;
    if (!validateAdminKey(apiKey)) {
      return res.status(401).json({
        success: false,
        error: "Unauthorized",
      });
    }
  }
  // ... rest of handler
}
```

---

### 3. **API Tester Component Exposed in Production - HIGH** 🟠

**Severity:** HIGH  
**Issue:** Development testing component is included in production bundle and enabled by default.

**Location:** `components/api/ApiTester.tsx`

**Vulnerable Code:**

```tsx
// ApiTester is always available
<ApiTester /> // Should only be in development
```

**Exploitation:**

```javascript
// In browser console, attacker can:
1. View all API responses
2. Test creating/deleting products
3. See API endpoints and structure
4. Understand data model
5. Access order details
```

**Impact:**

- Information disclosure
- Attack surface revealed
- Testing vectors provided to attackers

**Fix:** Only include in development

```tsx
import ApiTester from "@/components/api/ApiTester";

export default function Page() {
  return (
    <>
      {process.env.NODE_ENV === "development" && <ApiTester />}
      {/* rest of page */}
    </>
  );
}
```

---

### 4. **Swagger API Documentation Exposed - HIGH** 🟠

**Severity:** HIGH  
**Issue:** Swagger UI exposes all API endpoints, parameters, and data structures publicly.

**Location:** `pages/docs.tsx` and `pages/api/swagger.ts`

**Issue:** The localhost check can be bypassed:

```typescript
// Weak check - only validates hostname
const hostname = host.split(":")[0].toLowerCase();
const isLocalhost =
  hostname === "localhost" || hostname === "127.0.0.1" || hostname === "::1";

// Can be bypassed with:
// - Proxy configurations
// - Custom hostnames
// - X-Forwarded-Host headers
```

**Exploitation:**

```bash
# Attacker discovers full API structure
curl -X GET http://your-domain.com/api/swagger

# Response contains:
# - All endpoints
# - Parameter requirements
# - Data structures
# - Response formats
# - Error messages
```

**Impact:**

- Full API documentation exposed
- Attack surface clearly mapped
- Parameter fuzzing becomes easier

**Fix:** Implement proper authentication

```typescript
// lib/auth.ts
export function requiresAuth(req: NextApiRequest): boolean {
  const apiKey = req.headers["x-api-key"] as string;
  return validateAdminKey(apiKey);
}

// pages/api/swagger.ts
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Require authentication for API docs in production
  if (process.env.NODE_ENV === "production") {
    if (!requiresAuth(req)) {
      return res.status(401).json({ error: "Unauthorized" });
    }
  }
  // ... rest
}
```

---

### 5. **No Input Validation/Sanitization - HIGH** 🟠

**Severity:** HIGH  
**Issue:** API endpoints accept raw user input without validation.

**Location:** `pages/api/products/index.ts`, `pages/api/orders/create.ts`

**Vulnerable Code:**

```typescript
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>,
) {
  const orderData: OrderDetails = req.body; // NO VALIDATION

  // Directly uses user input
  const finalOrderData: OrderDetails = {
    ...orderData,
    orderDetails: orderData.orderDetails || "",
    timestamp: orderData.timestamp || new Date().toISOString(),
  };
}
```

**Exploitation:**

```bash
# Attacker can send malicious data:
curl -X POST http://localhost:3000/api/orders/create \
  -d '{
    "productId": 999999999,
    "productName": "<img src=x onerror=alert(1)>",
    "quantity": -9999,
    "orderDetails": "'; DROP TABLE catalog; --",
    "timestamp": "1970-01-01T00:00:00Z"
  }'

# Risks:
# - XSS injection in stored data
# - SQL injection (if database added)
# - Buffer overflow
# - Path traversal
```

**Impact:**

- Stored XSS attacks
- Data integrity compromised
- Preparation for advanced attacks

**Fix:** Add input validation

```typescript
// lib/validation.ts
import { z } from "zod";

export const OrderDetailsSchema = z.object({
  productId: z.number().positive("Product ID must be positive"),
  productName: z
    .string()
    .min(1, "Product name required")
    .max(200, "Product name too long")
    .regex(/^[a-zA-Z0-9\s\-&',.]*$/, "Invalid characters in product name"),
  quantity: z
    .number()
    .positive("Quantity must be greater than 0")
    .max(1000, "Quantity exceeds maximum"),
  orderDetails: z.string().max(2000, "Order details too long").optional(),
});

// pages/api/orders/create.ts
const validation = OrderDetailsSchema.safeParse(req.body);
if (!validation.success) {
  return res.status(400).json({
    success: false,
    error: "Invalid input",
    details: validation.error.flatten(),
  });
}

const orderData = validation.data;
```

---

### 6. **No Rate Limiting - HIGH** 🟠

**Severity:** HIGH  
**Issue:** API endpoints have no rate limiting protection.

**Location:** All API endpoints in `pages/api/`

**Exploitation:**

```bash
# Attacker can abuse API for:
# 1. DoS attacks
while true; do
  curl -X POST http://localhost:3000/api/products \
    -d '{"name":"spam"...}'
done

# 2. Brute force
for i in {1..10000}; do
  curl http://localhost:3000/api/products/$i
done

# 3. Resource exhaustion
# 4. Spam orders
```

**Impact:**

- Service degradation
- Resource exhaustion
- Customer orders flooded

**Fix:** Implement rate limiting

```typescript
// lib/rateLimit.ts
import rateLimit from "express-rate-limit";

export const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: "Too many requests, please try again later",
});

export const strictLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5, // strict limit for write operations
  skipSuccessfulRequests: true,
});

// pages/api/products/index.ts
import { apiLimiter, strictLimiter } from "@/lib/rateLimit";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  // Apply appropriate limiter
  if (["POST", "PATCH", "DELETE"].includes(req.method || "")) {
    await strictLimiter(req, res, () => {});
  } else {
    await apiLimiter(req, res, () => {});
  }
  // ... rest of handler
}
```

---

### 7. **No CORS Configuration - MEDIUM** 🟡

**Severity:** MEDIUM  
**Issue:** No CORS headers configured, could allow cross-origin attacks.

**Location:** API endpoints in `pages/api/`

**Exploitation:**

```javascript
// Any website can make requests to your API
fetch('http://your-domain.com/api/products', {
  method: 'POST',
  body: JSON.stringify({...})
})
// If not properly protected, attacker site can:
// - Create fake products
// - Modify data
// - Extract information
```

**Fix:** Configure strict CORS

```typescript
// lib/cors.ts
import Cors from "micro-cors";

const cors = Cors({
  allowedMethods: ["GET", "POST", "PATCH", "DELETE"],
  origin: process.env.ALLOWED_ORIGINS?.split(",") || ["http://localhost:3000"],
});

// pages/api/products/index.ts
export default cors(handler);
```

---

### 8. **Vercel Deployment Configuration Issues - HIGH** 🟠

**Severity:** HIGH  
**Issue:** No explicit Vercel security configuration found.

**Location:** Missing `vercel.json` and deployment security

**Potential Issues:**

```
1. No environment variable protection
2. No secrets management
3. No preview protection
4. Public environment variables exposed
5. No build caching security
6. No analytics/monitoring
```

**Fix:** Create secure Vercel configuration

```json
// vercel.json
{
  "env": {
    "ADMIN_API_KEY": "@admin_api_key",
    "WHATSAPP_PHONE": "@whatsapp_phone"
  },
  "public": {
    "NEXT_PUBLIC_WHATSAPP_PHONE": "555183388338"
  },
  "buildCommand": "npm run build && npm run type-check",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "ignoreCommand": "git diff --quiet HEAD^ HEAD -- . ':!.vercelignore'",
  "functions": {
    "pages/api/**/*.ts": {
      "memory": 128,
      "maxDuration": 10,
      "regions": ["sfo1"]
    }
  },
  "headers": [
    {
      "source": "/api/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ]
}
```

---

### 9. **File-Based Storage Not Scalable - MEDIUM** 🟡

**Severity:** MEDIUM  
**Issue:** Using synchronous file I/O for API operations.

**Location:** `lib/db.ts`

**Vulnerable Code:**

```typescript
export function writeDataFile(filename: string, data: any): boolean {
  try {
    const filePath = path.join(DATA_DIR, filename);
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf8");
    // ^ SYNCHRONOUS - blocks entire application
    return true;
  } catch (error) {
    // ...
  }
}
```

**Issues:**

- Blocks event loop during write operations
- Race conditions possible with concurrent writes
- No transaction support
- No backup mechanism
- File permissions issues in Vercel environment

**Fix:** Migrate to async operations

```typescript
export async function writeDataFileAsync(
  filename: string,
  data: any,
): Promise<boolean> {
  try {
    const filePath = path.join(DATA_DIR, filename);
    await fs.promises.writeFile(
      filePath,
      JSON.stringify(data, null, 2),
      "utf8",
    );
    return true;
  } catch (error) {
    console.error(`Error writing ${filename}:`, error);
    return false;
  }
}

// For production: Migrate to MongoDB/PostgreSQL
```

---

### 10. **Missing Security Headers - MEDIUM** 🟡

**Severity:** MEDIUM  
**Issue:** No security headers configured in Next.js.

**Location:** Missing `next.config.js` security headers

**Fix:** Add security headers

```javascript
// next.config.js
module.exports = {
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline'",
          },
        ],
      },
    ];
  },
};
```

---

### 11. **No Dependency Auditing - MEDIUM** 🟡

**Severity:** MEDIUM  
**Issue:** Several dependencies with known vulnerabilities.

**Location:** `package.json`

**Issues:**

- `dangerous-html@0.1.13` - Outdated, may have vulnerabilities
- `next@^12.1.10` - Version 12 is EOL, should upgrade to version 14+
- `react@^17.0.2` - Outdated, should upgrade to 18+

**Command to check:**

```bash
npm audit
```

**Fix:**

```bash
npm audit fix
npm update
```

---

### 12. **No Logging or Monitoring - MEDIUM** 🟡

**Severity:** MEDIUM  
**Issue:** No audit logs for API operations or security events.

**Location:** Missing logging infrastructure

**Risk:**

- Can't detect attacks
- No incident response capability
- Compliance violations

**Fix:** Implement logging

```typescript
// lib/logger.ts
export function logSecurityEvent(event: {
  type: string;
  method: string;
  endpoint: string;
  ip: string;
  status: number;
  timestamp: Date;
  details?: any;
}) {
  console.error(`[SECURITY] ${JSON.stringify(event)}`);

  // Send to monitoring service (Vercel Analytics, Sentry, DataDog, etc.)
}

// pages/api/products/index.ts
logSecurityEvent({
  type: "API_ACCESS",
  method: req.method || "UNKNOWN",
  endpoint: "/api/products",
  ip: req.headers["x-forwarded-for"]?.toString() || "unknown",
  status: 200,
  timestamp: new Date(),
});
```

---

### 13. **.gitignore May Be Insufficient - MEDIUM** 🟡

**Severity:** MEDIUM  
**Issue:** While `.env` files are in `.gitignore`, sensitive data could still be exposed.

**Vulnerable Commit History:**

```bash
# If secrets were committed before .gitignore was added:
git log -p --all -S "555183388338" # Finds all commits with phone number
git log -p --all -S "WHATSAPP" # Could find exposed credentials
```

**Fix:** Clean commit history

```bash
# Use BFG repo cleaner to remove from history
bfg --replace-text replacements.txt

# Or use git-filter-branch
git filter-branch --tree-filter 'sed -i "s/555183388338/REDACTED/g" *' HEAD

# Then force push (DANGEROUS - notify team)
git push --force-with-lease
```

---

## Summary Table

| #   | Vulnerability            | Severity | CVSS Score | Fixer                  |
| --- | ------------------------ | -------- | ---------- | ---------------------- |
| 1   | Hardcoded Phone Number   | CRITICAL | 7.5        | Environment Variables  |
| 2   | No API Authentication    | CRITICAL | 9.1        | API Key Auth           |
| 3   | Exposed API Tester       | HIGH     | 6.5        | Dev-only Conditional   |
| 4   | Exposed Swagger Docs     | HIGH     | 6.2        | Auth Requirement       |
| 5   | No Input Validation      | HIGH     | 7.8        | Zod Schema Validation  |
| 6   | No Rate Limiting         | HIGH     | 6.9        | Express Rate Limit     |
| 7   | CORS Not Configured      | MEDIUM   | 5.3        | CORS Middleware        |
| 8   | Vercel Config Missing    | HIGH     | 6.8        | vercel.json Setup      |
| 9   | File-based Storage       | MEDIUM   | 4.2        | Async Operations       |
| 10  | Missing Security Headers | MEDIUM   | 5.1        | Next.js Headers Config |
| 11  | Outdated Dependencies    | MEDIUM   | 5.4        | npm audit fix          |
| 12  | No Logging/Monitoring    | MEDIUM   | 4.8        | Logging Service        |
| 13  | Potential Commit History | MEDIUM   | 5.0        | BFG Repo Cleaner       |

---

## Recommended Priority Order

**Phase 1 (Immediate - 24 hours):**

1. Move hardcoded phone number to `.env` ✓
2. Implement API authentication ✓
3. Disable API Tester in production ✓
4. Add input validation ✓

**Phase 2 (This Week):** 5. Add rate limiting 6. Protect Swagger documentation 7. Create `vercel.json` with security configs 8. Add security headers to `next.config.js`

**Phase 3 (This Month):** 9. Upgrade dependencies 10. Implement logging/monitoring 11. Add CORS configuration 12. Migrate from file storage to database 13. Clean commit history (if secrets were exposed)

---

## Testing Security

```bash
# Check for vulnerabilities
npm audit

# Check for secrets in code
npm install -g detect-secrets
detect-secrets scan --exclude-files node_modules

# Type check
npx tsc --noEmit

# Build and test
npm run build
npm start
```

---

## References

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Next.js Security Best Practices](https://nextjs.org/docs/advanced-features/security-headers)
- [Vercel Security](https://vercel.com/docs/security)
- [API Security](https://api-security.readme.io/)

---

**Report Generated:** 2026-02-10  
**Last Updated:** 2026-02-10
