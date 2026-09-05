import businessJson from "../../content/business.json";
import copyJson from "../../content/copy.json";
import menuJson from "../../content/menu.json";

export const business = businessJson;
export const copy = copyJson;
export const menu = menuJson;

export type NavItem = (typeof business.nav)[number];
export type Phone = (typeof business.phones)[number] & {
  whatsapp?: string;
};
export type HoursRow = (typeof business.hours)[number];
export type MenuItem = (typeof menu.categories)[number]["items"][number];
export type MenuCategory = (typeof menu.categories)[number];

export function primaryPhone() {
  return business.phones.find((phone) => phone.primary) ?? business.phones[0];
}

export function featuredItems() {
  const byId = new Map(
    menu.categories.flatMap((category) =>
      category.items.map((item) => [item.id, item] as const),
    ),
  );

  return menu.featuredIds
    .map((id) => byId.get(id))
    .filter((item): item is MenuItem => Boolean(item));
}

export function formatPrice(price: number) {
  return `${price} ₪`;
}

export function hoursLabel(row: HoursRow) {
  if (row.closed) return "סגור";
  if (row.note && row.closes) return `${row.note} עד ${row.closes}`;
  if (row.opens && row.closes) return `${row.opens}–${row.closes}`;
  return row.note ?? "";
}
