/**
 * Lightweight bridge between the product cards / featured product and the
 * order form. Clicking "Request pricing" dispatches a prefill event and
 * smooth-scrolls to the form, which fills in the matching fields.
 */
export type Prefill = {
  printerBrand?: string;
  cartridge?: string;
  requestType?: string;
  note?: string;
};

export const PREFILL_EVENT = "tnt:prefill";

export function requestPricing(detail: Prefill = {}) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent<Prefill>(PREFILL_EVENT, { detail }));
  document
    .getElementById("order")
    ?.scrollIntoView({ behavior: "smooth", block: "start" });
}
