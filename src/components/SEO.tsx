import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalPath?: string;
  image?: string;
  type?: string;
  schema?: object;
}

const DEFAULT_TITLE = "Auto & Agricultural Engine Spare Parts Manufacturer India | Singhal Industrial Corporation";
const DEFAULT_DESC = "Singhal Industrial Corporation (KOMODO Engine Parts) - Premier ISO 9001:2015 manufacturer & exporter of Cylinder Liners, Pistons, Gaskets, Air Compressor Kits & Engine Components in Agra, India since 1966. Serving 45+ export markets.";
const DEFAULT_KEYWORDS = "auto spare parts India, cylinder liners manufacturer, piston exporter India, engine parts manufacturer Agra, diesel engine spare parts, KOMODO engine parts, Singhal Industrial Corporation, tractor spare parts India, air compressor repair kits, gaskets manufacturer";
const BASE_URL = "https://indiasparepart.com";
const DEFAULT_IMAGE = "https://indiasparepart.com/images/komodo_logo.jpeg";

export function SEO({
  title,
  description = DEFAULT_DESC,
  keywords = DEFAULT_KEYWORDS,
  canonicalPath = "",
  image = DEFAULT_IMAGE,
  type = "website",
  schema
}: SEOProps) {

  const fullTitle = title 
    ? `${title} | Singhal Industrial Corporation (indiasparepart.com)`
    : DEFAULT_TITLE;

  const canonicalUrl = `${BASE_URL}${canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`}`;

  useEffect(() => {
    // 1. Update Title
    document.title = fullTitle;

    // 2. Update Meta Description
    let metaDescription = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = description;

    // 3. Update Meta Keywords
    let metaKeywords = document.querySelector<HTMLMetaElement>('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.name = 'keywords';
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.content = keywords;

    // 4. Update Canonical Link
    let linkCanonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.rel = 'canonical';
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.href = canonicalUrl;

    // 5. Helper to set meta property (OpenGraph & Twitter)
    const setMetaProperty = (property: string, content: string) => {
      let meta = document.querySelector<HTMLMetaElement>(`meta[property="${property}"]`) ||
                 document.querySelector<HTMLMetaElement>(`meta[name="${property}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        if (property.startsWith('og:')) {
          meta.setAttribute('property', property);
        } else {
          meta.setAttribute('name', property);
        }
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    setMetaProperty('og:title', fullTitle);
    setMetaProperty('og:description', description);
    setMetaProperty('og:url', canonicalUrl);
    setMetaProperty('og:image', image);
    setMetaProperty('og:type', type);

    setMetaProperty('twitter:title', fullTitle);
    setMetaProperty('twitter:description', description);
    setMetaProperty('twitter:image', image);

    // 6. Inject Schema JSON-LD if provided
    let scriptSchema = document.getElementById('dynamic-jsonld-schema') as HTMLScriptElement | null;
    if (schema) {
      if (!scriptSchema) {
        scriptSchema = document.createElement('script');
        scriptSchema.id = 'dynamic-jsonld-schema';
        scriptSchema.type = 'application/ld+json';
        document.head.appendChild(scriptSchema);
      }
      scriptSchema.text = JSON.stringify(schema);
    } else if (scriptSchema) {
      scriptSchema.remove();
    }

    return () => {
      // Cleanup dynamic schema on unmount if needed
    };
  }, [fullTitle, description, keywords, canonicalUrl, image, type, schema]);

  return null;
}
