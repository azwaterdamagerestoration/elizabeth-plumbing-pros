export type AnalyticsEvent =
  | "header_call_click"
  | "hero_call_click"
  | "emergency_section_call_click"
  | "mobile_sticky_call_click"
  | "footer_call_click"
  | "final_cta_call_click"
  | "service_card_click"
  | "location_card_click"
  | "sidebar_blog_call_click"
  | "inline_blog_cta_click";

export function trackEvent(eventName: AnalyticsEvent, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;

  const eventPayload = {
    event: eventName,
    timestamp: new Date().toISOString(),
    ...params,
  };

  // Push to GTM dataLayer if present
  if (Array.isArray((window as unknown as { dataLayer?: unknown[] }).dataLayer)) {
    (window as unknown as { dataLayer: unknown[] }).dataLayer.push(eventPayload);
  }

  // Call gtag if present
  if (typeof (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag === "function") {
    (window as unknown as { gtag: (...args: unknown[]) => void }).gtag("event", eventName, params);
  }

  if (process.env.NODE_ENV === "development") {
    console.log(`[Analytics Event] ${eventName}:`, params);
  }
}
