import type { NextApiRequest, NextApiResponse } from "next";
import { getSwaggerSpec } from "../../lib/swagger";
import { requireAuth, getClientIp, logSecurityEvent } from "../../lib/auth";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Allow in development environment
  if (process.env.NODE_ENV === "development") {
    const spec = getSwaggerSpec();
    res.setHeader("Cache-Control", "s-maxage=1, stale-while-revalidate");
    res.status(200).json(spec);
    return;
  }

  // In production, require authentication
  if (!requireAuth(req)) {
    const ip = getClientIp(req);
    logSecurityEvent({
      type: "UNAUTHORIZED_SWAGGER_ACCESS",
      endpoint: "/api/swagger",
      ip: ip,
      status: 403,
      message: "Unauthorized Swagger specification access attempt",
    });
    res.status(403).json({ error: "Forbidden" });
    return;
  }

  const spec = getSwaggerSpec();
  res.setHeader("Cache-Control", "s-maxage=1, stale-while-revalidate");
  res.status(200).json(spec);
}
