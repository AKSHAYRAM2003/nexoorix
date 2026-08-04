const SITE_URL = "https://www.nexoorix.com";

/**
 * JsonLd — Injects structured data into the document head.
 * Includes:
 *  - Organization schema: tells Google "Nexoorix" is a real brand
 *  - WebSite schema: enables Google Sitelinks Searchbox in search results
 */
export default function JsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Nexoorix",
    url: SITE_URL,
    logo: `${SITE_URL}/assets/iamges/loop.png`,
    description:
      "Nexoorix engineers custom software solutions and AI-driven automation systems tailored to solve complex operational challenges. We specialize in translating intricate business requirements into resilient, high-speed digital products that eliminate manual workflows, accelerate productivity, and empower modern enterprises to operate at peak efficiency.",
    foundingDate: "2024",
    sameAs: [
      "https://github.com/AKSHAYRAM2003/nexoorix",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: "akshayhr.work@gmail.com",
    },
    offers: {
      "@type": "Offer",
      description:
        "Custom software development, AI automation, business process automation, and digital transformation consulting.",
    },
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Nexoorix",
    url: SITE_URL,
    description:
      "Nexoorix — AI Automation & Custom Software Solutions",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}
