import type { NextApiRequest, NextApiResponse } from "next";
import { getSwaggerSpec } from "../../lib/swagger";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const host = req.headers.host || "";
  const hostname = host.split(":")[0].toLowerCase();
  const isLocalhost =
    hostname === "localhost" || hostname === "127.0.0.1" || hostname === "::1";

  if (!isLocalhost) {
    res.status(404).json({ success: false, error: "Not found" });
    return;
  }

  const spec = getSwaggerSpec();
  res.setHeader("Cache-Control", "s-maxage=1, stale-while-revalidate");
  res.status(200).json(spec);
}
