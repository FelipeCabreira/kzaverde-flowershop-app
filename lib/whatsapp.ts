/**
 * WhatsApp integration utilities for KzaVerde
 */

import { WhatsAppOrderParams } from "@/types/product";

/**
 * Get WhatsApp business phone from environment variables
 * Falls back to default if not configured
 */
export function getWhatsAppPhone(): string {
  return (
    process.env.NEXT_PUBLIC_WHATSAPP_PHONE ||
    process.env.WHATSAPP_PHONE ||
    "555183388338" // Default fallback (should be configured in .env)
  );
}

const WHATSAPP_BUSINESS_PHONE = getWhatsAppPhone();

export { WHATSAPP_BUSINESS_PHONE };

/**
 * Generate a WhatsApp link with a pre-filled order message
 * @param params - Order parameters including product name, quantity, and custom details
 * @returns WhatsApp URL with encoded message
 */
export function generateWhatsAppOrderLink(params: WhatsAppOrderParams): string {
  const baseMessage =
    `Olá! Gostaria de fazer um pedido:\n\n` +
    `• Produto: ${params.productName}\n` +
    `• Quantidade: ${params.quantity}`;

  const detailsSection = params.orderDetails.trim()
    ? `\n\n• Detalhes do pedido:\n${params.orderDetails}`
    : "";

  const message =
    baseMessage +
    detailsSection +
    `\n\nPor favor, confirme a disponibilidade e forneça mais detalhes.`;

  const encodedMessage = encodeURIComponent(message);

  return `https://wa.me/${params.phone}?text=${encodedMessage}`;
}

/**
 * Generate a catalog link for WhatsApp Business
 * @returns WhatsApp catalog URL
 */
export function getWhatsAppCatalogLink(): string {
  return `https://wa.me/c/${WHATSAPP_BUSINESS_PHONE}`;
}

/**
 * Generate a simple chat link to WhatsApp Business
 * @param message - Optional pre-filled message
 * @returns WhatsApp chat URL
 */
export function getWhatsAppChatLink(message?: string): string {
  if (message) {
    return `https://wa.me/${WHATSAPP_BUSINESS_PHONE}?text=${encodeURIComponent(message)}`;
  }
  return `https://wa.me/${WHATSAPP_BUSINESS_PHONE}`;
}
