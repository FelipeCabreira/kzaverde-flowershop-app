import {
  getWhatsAppPhone,
  generateWhatsAppOrderLink,
  getWhatsAppCatalogLink,
  getWhatsAppChatLink,
} from "@/lib/whatsapp";

const TEST_PHONE = "555183388338";

describe("getWhatsAppPhone", () => {
  it("returns NEXT_PUBLIC_WHATSAPP_PHONE when set", () => {
    process.env.NEXT_PUBLIC_WHATSAPP_PHONE = "5511999999999";
    expect(getWhatsAppPhone()).toBe("5511999999999");
    delete process.env.NEXT_PUBLIC_WHATSAPP_PHONE;
  });

  it("falls back to WHATSAPP_PHONE when NEXT_PUBLIC is not set", () => {
    delete process.env.NEXT_PUBLIC_WHATSAPP_PHONE;
    process.env.WHATSAPP_PHONE = "5511888888888";
    expect(getWhatsAppPhone()).toBe("5511888888888");
    delete process.env.WHATSAPP_PHONE;
  });

  it("returns hardcoded default when no env vars are set", () => {
    delete process.env.NEXT_PUBLIC_WHATSAPP_PHONE;
    delete process.env.WHATSAPP_PHONE;
    expect(getWhatsAppPhone()).toBe(TEST_PHONE);
  });
});

describe("generateWhatsAppOrderLink", () => {
  const baseParams = {
    phone: TEST_PHONE,
    productName: "Buquê 6 Rosas",
    quantity: 1,
    orderDetails: "",
  };

  it("returns a valid wa.me URL", () => {
    const link = generateWhatsAppOrderLink(baseParams);
    expect(link).toMatch(/^https:\/\/wa\.me\//);
    expect(link).toContain(TEST_PHONE);
  });

  it("includes the product name in the message", () => {
    const link = generateWhatsAppOrderLink(baseParams);
    expect(decodeURIComponent(link)).toContain("Buquê 6 Rosas");
  });

  it("includes quantity in the message", () => {
    const link = generateWhatsAppOrderLink({ ...baseParams, quantity: 3 });
    expect(decodeURIComponent(link)).toContain("3");
  });

  it("includes order details when provided", () => {
    const link = generateWhatsAppOrderLink({
      ...baseParams,
      orderDetails: "Entregar na manhã",
    });
    expect(decodeURIComponent(link)).toContain("Entregar na manhã");
  });

  it("omits order details section when empty", () => {
    const link = generateWhatsAppOrderLink({ ...baseParams, orderDetails: "" });
    expect(decodeURIComponent(link)).not.toContain("Detalhes do pedido");
  });

  it("includes shipping address when provided", () => {
    const link = generateWhatsAppOrderLink({
      ...baseParams,
      shippingAddress: "Rua das Flores, 123",
    });
    expect(decodeURIComponent(link)).toContain("Rua das Flores, 123");
  });

  it("omits shipping section when address is empty", () => {
    const link = generateWhatsAppOrderLink({ ...baseParams, shippingAddress: "" });
    expect(decodeURIComponent(link)).not.toContain("Endereço de entrega");
  });
});

describe("getWhatsAppCatalogLink", () => {
  it("returns a wa.me/c/ catalog URL", () => {
    const link = getWhatsAppCatalogLink();
    expect(link).toMatch(/^https:\/\/wa\.me\/c\//);
  });

  it("contains a phone number", () => {
    const link = getWhatsAppCatalogLink();
    expect(link.replace("https://wa.me/c/", "")).toBeTruthy();
  });
});

describe("getWhatsAppChatLink", () => {
  it("returns a plain chat link when no message is given", () => {
    const link = getWhatsAppChatLink();
    expect(link).toMatch(/^https:\/\/wa\.me\//);
    expect(link).not.toContain("?text=");
  });

  it("returns a link with encoded message when message is given", () => {
    const link = getWhatsAppChatLink("Olá, quero saber mais!");
    expect(link).toContain("?text=");
    expect(decodeURIComponent(link)).toContain("Olá, quero saber mais!");
  });
});
