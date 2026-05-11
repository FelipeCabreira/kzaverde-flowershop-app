---
mode: agent
tools:
  - codebase
  - editFiles
  - createFiles
description: Create a new Next.js API route with Swagger docs and optional auth
---

Create a new Next.js API route for KzaVerde.

Ask me (or use context) for:
- Resource name (e.g., `categories`, `orders`)
- HTTP methods to support
- Whether write operations need authentication

Create the file at `pages/api/<resource>/index.ts`:

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
export default function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  if (req.method === "GET") {
    try {
      return res.status(200).json({ success: true, data: [], count: 0 });
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
      return res.status(201).json({ success: true, data: {}, message: "Created successfully" });
    } catch {
      return res.status(500).json({ success: false, error: "Failed to create" });
    }
  }

  return res.status(405).json({ success: false, error: "Method not allowed" });
}
```

Mandatory: Swagger JSDoc block above handler. See `pages/api/products/index.ts` as the reference.
Response envelope must always include `success: boolean`.
