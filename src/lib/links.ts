import { primaryPhone, type Phone } from "./content";

export function telHref(phone: Phone) {
  return `tel:${phone.tel}`;
}

export function whatsappHref(text?: string) {
  const phone = primaryPhone();
  if (!phone.whatsapp) return telHref(phone);

  const message = encodeURIComponent(
    text ?? "שלום, אשמח להזמין מהפינה החמה",
  );
  return `https://wa.me/${phone.whatsapp}?text=${message}`;
}

export function mapsEmbedSrc(query: string) {
  return `https://maps.google.com/maps?q=${encodeURIComponent(query)}&hl=he&z=17&output=embed`;
}
