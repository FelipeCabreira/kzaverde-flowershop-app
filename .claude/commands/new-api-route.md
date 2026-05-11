Create a new Next.js API route for the KzaVerde project.

**Arguments:** $ARGUMENTS
(Provide: resource name, HTTP methods to support, whether writes need auth, response shape)

## What to do

1. Determine file path:
   - Collection: `pages/api/<resource>/index.ts`
   - Single item: `pages/api/<resource>/[id].ts`
2. Create the handler with a `@swagger` JSDoc block + method branching:

```ts
import type { NextApiRequest, NextApiResponse } from "next";
import { requireAuth, logSecurityEvent, getClientIp } from "../../../lib/auth";

type ResponseData = any;

/**
 * @swagger
 * /api/<resource>:
 *   get:
 *     summary: Get all <resource>
 *     responses:
 *       200:
 *         description: Success
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
export default function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  if (req.method === "GET") {
    try {
      return res.status(200).json({ success: true, data: [] });
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
      return res.status(401).json({ success: false, error: "Unauthorized. Provide valid x-api-key header." });
    }
    try {
      // validate + create
      return res.status(201).json({ success: true, data: {}, message: "Created successfully" });
    } catch {
      return res.status(500).json({ success: false, error: "Failed to create" });
    }
  }

  return res.status(405).json({ success: false, error: "Method not allowed" });
}
```

## Rules
- Swagger JSDoc is mandatory — see `pages/api/products/index.ts` for reference
- All write operations must call `requireAuth(req)` and log failures with `logSecurityEvent`
- Response envelope: `{ success, data?, error?, message?, count? }`
- Import data helpers from `lib/db`
- Depth-correct relative imports based on `pages/api/<resource>/` nesting
