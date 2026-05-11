# Skill: new-api-route

Create a new Next.js API route in the KzaVerde project.

## Inputs
- Resource name (e.g., `orders`, `categories`)
- HTTP methods to support (GET / POST / PUT / DELETE)
- Whether write operations require authentication
- Response shape

## Rules
1. File: `pages/api/<resource>/index.ts` or `pages/api/<resource>/[id].ts`
2. Every route must have a `@swagger` JSDoc block above the handler
3. All write methods (POST, PUT, DELETE) must call `requireAuth(req)` from `lib/auth`
4. Unauthorized writes: call `logSecurityEvent(...)` then return 401
5. Response envelope always: `{ success: boolean, data?: any, error?: string, message?: string }`
6. Return 405 for unsupported methods
7. Import data helpers from `lib/db`

## Template
```ts
import type { NextApiRequest, NextApiResponse } from "next";
import { getAllProducts, getProductById } from "../../../lib/db"; // adjust path
import {
  requireAuth,
  logSecurityEvent,
  getClientIp,
} from "../../../lib/auth";

type ResponseData = any;

/**
 * @swagger
 * /api/<resource>:
 *   get:
 *     summary: Get all <resource>
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   type: array
 *   post:
 *     summary: Create a <resource>
 *     security:
 *       - ApiKeyAuth: []
 *     responses:
 *       201:
 *         description: Created
 *       401:
 *         description: Unauthorized
 */
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>,
) {
  if (req.method === "GET") {
    try {
      const data = []; // fetch from lib/db
      return res.status(200).json({ success: true, data, count: data.length });
    } catch {
      return res.status(500).json({ success: false, error: "Failed to fetch" });
    }
  }

  if (req.method === "POST") {
    if (!requireAuth(req)) {
      logSecurityEvent({
        type: "UNAUTHORIZED_API_ACCESS",
        method: "POST",
        endpoint: "/api/<resource>",
        ip: getClientIp(req),
        status: 401,
        message: "Unauthorized POST attempt",
      });
      return res.status(401).json({ success: false, error: "Unauthorized." });
    }
    try {
      const { name } = req.body;
      if (!name) {
        return res.status(400).json({ success: false, error: "Missing required fields" });
      }
      // create via lib/db
      return res.status(201).json({ success: true, data: {}, message: "Created" });
    } catch {
      return res.status(500).json({ success: false, error: "Failed to create" });
    }
  }

  return res.status(405).json({ success: false, error: "Method not allowed" });
}
```

## Auth helpers reference (lib/auth)
- `requireAuth(req)` → boolean — checks `x-api-key` header
- `logSecurityEvent({ type, method, endpoint, ip, status, message })`
- `getClientIp(req)` → string
- `extractApiKey(req)` → string | null
