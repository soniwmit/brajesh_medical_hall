import React, { useEffect } from 'react';
import { BUSINESS_INFO, FAQS } from '../data/siteData';
import { PageView } from '../types';

interface SEOHeadProps {
  currentPage: PageView;
  selectedCategory?: string;
}

export const SEOHead: React.FC<SEOHeadProps> = ({ currentPage, selectedCategory }) => {
  const pageTitles: Record<PageView, string> = {
    home: `${BUSINESS_INFO.name} | Best Pharmacy & Medical Store in Paliganj, Bihar`,
    about: `About Us | ${BUSINESS_INFO.name} - Trusted Local Chemist in Paliganj`,
    services: `Pharmacy Services | Medicine Delivery & Healthcare Essentials - Paliganj`,
    gallery: `Store Gallery | Photos of ${BUSINESS_INFO.name} Paliganj`,
    contact: `Contact Us | Phone, WhatsApp & Address - ${BUSINESS_INFO.name} Paliganj`,
  };

  const pageDescriptions: Record<PageView, string> = {
    home: `${BUSINESS_INFO.name} in Devi Sthan Road, Paliganj, Bihar 801110. Genuine medicines, OTC products, surgical items, baby care & fast WhatsApp order support. Call 09693110570.`,
    about: `Learn about ${BUSINESS_INFO.name}'s mission, 10+ year local story, experienced pharmacy staff, and commitment to genuine medicines in Paliganj, Bihar.`,
    services: `Explore pharmacy services: prescription medicines, OTC drugs, diabetic care, BP monitors, baby products, surgical supplies, and health supplements in Paliganj.`,
    gallery: `Browse store photos of ${BUSINESS_INFO.name}, medicine shelves, medical equipment display, and customer care facilities at Devi Sthan Road, Paliganj.`,
    contact: `Get store directions, opening hours, phone number 09693110570, WhatsApp ordering, and map location of ${BUSINESS_INFO.name} in Paliganj, Bihar.`,
  };

  const title = pageTitles[currentPage] || pageTitles.home;
  const description = pageDescriptions[currentPage] || pageDescriptions.home;
  const baseUrl = 'https://brajesh-medical-hall.vercel.app';
  const canonicalUrl = `${baseUrl}/${currentPage === 'home' ? '' : currentPage}`;

  useEffect(() => {
    document.title = title;

    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // Update keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute(
      'content',
      'Brajesh Medical Hall, Pharmacy in Paliganj, Medical Store Devi sthan road, Chemist Paliganj Bihar 801110, Genuine Medicines Paliganj, WhatsApp Medicine Delivery Paliganj, Surgical Items Paliganj, Baby Care Products Paliganj, BP Monitor Paliganj, Diabetic Medicines Paliganj'
    );
  }, [title, description]);

  // JSON-LD Pharmacy Local Business Schema
  const pharmacySchema = {
    '@context': 'https://schema.org',
    '@type': 'Pharmacy',
    '@id': `${baseUrl}/#pharmacy`,
    name: BUSINESS_INFO.name,
    image: `${baseUrl}/brajesh_store_front.jpg`,
    telephone: BUSINESS_INFO.phone,
    email: BUSINESS_INFO.email,
    url: canonicalUrl,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Devi sthan road, Near Devi Sthan Temple',
      addressLocality: 'Paliganj',
      addressRegion: 'Bihar',
      postalCode: '801110',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 25.3952136,
      longitude: 84.8037142,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '07:00',
        closes: '22:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Sunday'],
        opens: '08:00',
        closes: '21:00',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: BUSINESS_INFO.googleRating,
      reviewCount: BUSINESS_INFO.totalReviews,
      bestRating: '5',
      worstRating: '1',
    },
    priceRange: '₹',
    paymentAccepted: 'Cash, Credit Card, UPI, PhonePe, Google Pay, Paytm',
    currenciesAccepted: 'INR',
    description: BUSINESS_INFO.tagline,
  };

  // FAQ Schema
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  // Breadcrumb Schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: `${baseUrl}/`,
      },
      ...(currentPage !== 'home'
        ? [
            {
              '@type': 'ListItem',
              position: 2,
              name: currentPage.charAt(0).toUpperCase() + currentPage.slice(1),
              item: canonicalUrl,
            },
          ]
        : []),
    ],
  };

  return (
    <>
      {/* Open Graph Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="business.business" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content={BUSINESS_INFO.name} />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pharmacySchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
};
