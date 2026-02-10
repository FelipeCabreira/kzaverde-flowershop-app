/**
 * Authentication and Authorization utilities
 */
import { NextApiRequest } from "next";

/**
 * Validates admin API key from request headers
 */
export function validateAdminKey(apiKey?: string): boolean {
  const validKey = process.env.ADMIN_API_KEY;

  if (!validKey) {
    console.warn("⚠️  ADMIN_API_KEY not set in environment variables");
    return false;
  }

  if (!apiKey) {
    return false;
  }

  return apiKey === validKey;
}

/**
 * Extract API key from request headers
 */
export function extractApiKey(req: NextApiRequest): string | undefined {
  const header = req.headers["x-api-key"];
  if (Array.isArray(header)) {
    return header[0];
  }
  return header;
}

/**
 * Middleware to check authentication on protected endpoints
 */
export function requireAuth(req: NextApiRequest): boolean {
  const apiKey = extractApiKey(req);
  return validateAdminKey(apiKey);
}

/**
 * Get client IP address from request (handles proxies)
 */
export function getClientIp(req: NextApiRequest): string {
  const forwarded = req.headers["x-forwarded-for"];
  if (typeof forwarded === "string") {
    return forwarded.split(",")[0];
  }
  return req.socket.remoteAddress || "unknown";
}

/**
 * Log security events for monitoring
 */
export interface SecurityEvent {
  type: string;
  method?: string;
  endpoint?: string;
  ip?: string;
  status?: number;
  apiKey?: string;
  message?: string;
  timestamp?: Date;
  details?: any;
}

export function logSecurityEvent(event: SecurityEvent): void {
  const logEntry = {
    timestamp: event.timestamp || new Date().toISOString(),
    type: event.type,
    endpoint: event.endpoint,
    method: event.method,
    status: event.status,
    ip: event.ip,
    message: event.message,
  };

  console.error(`[SECURITY EVENT] ${JSON.stringify(logEntry)}`);

  // TODO: Send to external logging service
  // - Sentry
  // - Datadog
  // - LogRocket
  // - Vercel Analytics
}
