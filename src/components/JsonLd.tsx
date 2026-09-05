import { business } from "@/lib/content";

export function JsonLd() {
  const phone = business.phones[0];
  const data = {
    "@context": "https://schema.org",
    "@type": "Bakery",
    name: business.name,
    alternateName: business.nameEn,
    description: business.tagline,
    telephone: phone.tel,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.street,
      addressLocality: business.address.city,
      postalCode: business.address.zip,
      addressCountry: "IL",
    },
    servesCuisine: "Israeli bakery",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
