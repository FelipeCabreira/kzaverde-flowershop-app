import { NextApiRequest } from "next";
import {
  validateAdminKey,
  extractApiKey,
  requireAuth,
  getClientIp,
} from "@/lib/auth";

const makeReq = (headers: Record<string, string | string[]> = {}, remoteAddress = "127.0.0.1"): NextApiRequest => ({
  headers,
  socket: { remoteAddress } as any,
} as unknown as NextApiRequest);

describe("validateAdminKey", () => {
  beforeEach(() => {
    process.env.ADMIN_API_KEY = "secret-key-123";
  });

  afterEach(() => {
    delete process.env.ADMIN_API_KEY;
  });

  it("returns true for a valid key", () => {
    expect(validateAdminKey("secret-key-123")).toBe(true);
  });

  it("returns false for an incorrect key", () => {
    expect(validateAdminKey("wrong-key")).toBe(false);
  });

  it("returns false when no key is provided", () => {
    expect(validateAdminKey(undefined)).toBe(false);
  });

  it("returns false when ADMIN_API_KEY env var is not set", () => {
    delete process.env.ADMIN_API_KEY;
    expect(validateAdminKey("secret-key-123")).toBe(false);
  });
});

describe("extractApiKey", () => {
  it("extracts x-api-key from headers", () => {
    const req = makeReq({ "x-api-key": "my-key" });
    expect(extractApiKey(req)).toBe("my-key");
  });

  it("returns first value when header is an array", () => {
    const req = makeReq({ "x-api-key": ["first-key", "second-key"] });
    expect(extractApiKey(req)).toBe("first-key");
  });

  it("returns undefined when header is missing", () => {
    const req = makeReq({});
    expect(extractApiKey(req)).toBeUndefined();
  });
});

describe("requireAuth", () => {
  beforeEach(() => {
    process.env.ADMIN_API_KEY = "secret-key-123";
  });

  afterEach(() => {
    delete process.env.ADMIN_API_KEY;
  });

  it("returns true when correct key is in headers", () => {
    const req = makeReq({ "x-api-key": "secret-key-123" });
    expect(requireAuth(req)).toBe(true);
  });

  it("returns false when key is wrong", () => {
    const req = makeReq({ "x-api-key": "wrong-key" });
    expect(requireAuth(req)).toBe(false);
  });

  it("returns false when header is missing", () => {
    const req = makeReq({});
    expect(requireAuth(req)).toBe(false);
  });
});

describe("getClientIp", () => {
  it("returns forwarded IP when x-forwarded-for header is set", () => {
    const req = makeReq({ "x-forwarded-for": "203.0.113.1" });
    expect(getClientIp(req)).toBe("203.0.113.1");
  });

  it("returns the first IP when x-forwarded-for contains multiple IPs", () => {
    const req = makeReq({ "x-forwarded-for": "203.0.113.1, 10.0.0.1, 172.16.0.1" });
    expect(getClientIp(req)).toBe("203.0.113.1");
  });

  it("falls back to socket.remoteAddress when header is missing", () => {
    const req = makeReq({}, "192.168.1.100");
    expect(getClientIp(req)).toBe("192.168.1.100");
  });

  it("returns unknown when remoteAddress is unavailable", () => {
    const req = { headers: {}, socket: {} } as unknown as NextApiRequest;
    expect(getClientIp(req)).toBe("unknown");
  });
});
