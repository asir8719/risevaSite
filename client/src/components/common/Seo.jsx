import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const siteName = "Riseva";
const siteDescription =
  "Riseva builds custom websites, web applications, mobile apps, AI solutions, and trains future-ready developers.";

const pageMetadata = {
  "/": {
    title: "Custom Software Development, Web Apps & Training",
    description: siteDescription,
    type: "website",
  },
  "/about": {
    title: "About Riseva | Custom Software Development",
    description:
      "Learn how Riseva helps businesses turn ideas into powerful, scalable digital products through custom software development.",
  },
  "/services": {
    title: "Web, Mobile, AI & Software Development Services",
    description:
      "Explore Riseva's end-to-end web development, mobile app, e-commerce, AI, automation, and developer training services.",
  },
  "/technologies": {
    title: "Technology & Digital Solutions | Riseva",
    description:
      "Discover Riseva's capabilities in web and app development, AI automation, digital marketing, video, and scalable technology solutions.",
  },
  "/team": {
    title: "Our Team | Riseva",
    description:
      "Meet the people behind Riseva, a team creating practical digital products and technology solutions for growing businesses.",
  },
  "/careers": {
    title: "Careers at Riseva | Join Our Team",
    description:
      "Explore career opportunities at Riseva and help build websites, apps, digital products, marketing campaigns, and creative experiences.",
  },
  "/contact": {
    title: "Contact Riseva | Start a Digital Project",
    description:
      "Talk to Riseva about your next website, app, AI solution, software product, or developer training project.",
  },
  "/clients": {
    title: "Clients & Projects | Riseva",
    description:
      "See how Riseva works with businesses to deliver thoughtful software, web, mobile, and digital solutions.",
  },
  "/testimonials": {
    title: "Client Testimonials | Riseva",
    description:
      "Read what clients say about working with Riseva on digital products, software development, and technology projects.",
  },
  "/privacy-policy": {
    title: "Privacy Policy | Riseva",
    description:
      "Read Riseva's privacy policy to understand how we collect, use, and protect information submitted through our website.",
  },
};

const upsertMeta = (attribute, key, content) => {
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
};

const upsertLink = (rel, href) => {
  let element = document.head.querySelector(`link[rel="${rel}"]`);
  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", rel);
    document.head.appendChild(element);
  }
  element.setAttribute("href", href);
};

const Seo = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const normalizedPathname = pathname === "/" ? "/" : pathname.replace(/\/$/, "");
    const metadata = pageMetadata[normalizedPathname] || {
      title: "Page Not Found | Riseva",
      description: "The page you requested could not be found on the Riseva website.",
      noindex: true,
    };
    const siteUrl = (import.meta.env.VITE_SITE_URL || window.location.origin).replace(/\/$/, "");
    const canonicalUrl = `${siteUrl}${normalizedPathname}`;
    const title = `${metadata.title} | ${siteName}`;
    const imageUrl = `${siteUrl}/favicon.svg`;

    document.title = title;
    upsertMeta("name", "description", metadata.description);
    upsertMeta("name", "robots", metadata.noindex ? "noindex, nofollow" : "index, follow");
    upsertMeta("name", "theme-color", "#050b12");
    upsertMeta("property", "og:type", metadata.type || "website");
    upsertMeta("property", "og:site_name", siteName);
    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", metadata.description);
    upsertMeta("property", "og:url", canonicalUrl);
    upsertMeta("property", "og:locale", "en_IN");
    upsertMeta("property", "og:image", imageUrl);
    upsertMeta("name", "twitter:card", "summary");
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", metadata.description);
    upsertMeta("name", "twitter:image", imageUrl);
    upsertLink("canonical", canonicalUrl);

    let structuredData = document.head.querySelector('script[data-seo="structured-data"]');
    if (!structuredData) {
      structuredData = document.createElement("script");
      structuredData.type = "application/ld+json";
      structuredData.dataset.seo = "structured-data";
      document.head.appendChild(structuredData);
    }
    structuredData.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: siteName,
      url: siteUrl,
      logo: imageUrl,
      email: "riseva.tech5587@gmail.com",
      sameAs: [
        "https://www.instagram.com/risevaofficial",
        "https://www.linkedin.com/in/riseva-tech-6421053a8/",
      ],
    });
  }, [pathname]);

  return null;
};

export default Seo;