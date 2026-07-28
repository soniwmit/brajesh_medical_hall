import { BusinessInfo, CategoryItem, FAQItem, GalleryItem, ServiceItem, Testimonial } from '../types';

import heroBannerImg from '../assets/images/brajesh_hero_banner_1785223826560.jpg';
import storeFrontImg from '../assets/images/brajesh_store_front_1785223850595.jpg';
import pharmacistShelvesImg from '../assets/images/brajesh_pharmacist_shelves_1785223864159.jpg';

export const BUSINESS_INFO: BusinessInfo = {
  name: 'Brajesh Medical Hall',
  category: 'Pharmacy | Medical Store',
  tagline: 'Your Trusted Medical Store for Genuine Medicines & Healthcare Needs',
  location: 'Devi sthan road, Paliganj, Bihar 801110',
  fullAddress: 'Devi sthan road, Near Devi Sthan Temple, Paliganj, Patna District, Bihar - 801110, India',
  phone: '09693110570',
  rawPhone: '09693110570',
  whatsapp: '09693110570',
  rawWhatsapp: '919693110570',
  email: 'brajeshmedicalpaliganj@gmail.com',
  openingHours: [
    { days: 'Monday - Saturday', timing: '07:00 AM - 10:00 PM' },
    { days: 'Sunday', timing: '08:00 AM - 09:00 PM' },
    { days: 'Emergency Service', timing: '24/7 Call & WhatsApp Assistance' },
  ],
  googleMapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3604.283811802951!2d84.8037142!3d25.3952136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398d35003b3003eb%3A0x8e833f4a38df48!2sPaliganj%2C%20Bihar%20801110!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
  googleMapDirectionsUrl: 'https://maps.google.com/?q=Brajesh+Medical+Hall+Devi+sthan+road+Paliganj+Bihar+801110',
  googleRating: 4.9,
  totalReviews: 184,
};

export const HERO_IMAGES = {
  banner: heroBannerImg,
  storeFront: storeFrontImg,
  pharmacist: pharmacistShelvesImg,
};

export const WHY_CHOOSE_US_ITEMS = [
  {
    title: '100% Genuine Medicines',
    desc: 'Directly sourced from verified pharmaceutical distributors with authentic batch tracking.',
    icon: 'ShieldCheck',
  },
  {
    title: 'Experienced Staff',
    desc: 'Knowledgeable pharmacists ready to advise on dosage, storage & prescription details.',
    icon: 'UserCheck',
  },
  {
    title: 'Affordable Prices',
    desc: 'Best prices on generic & brand-name medicines, healthcare items, and surgical goods.',
    icon: 'Tag',
  },
  {
    title: 'Fast Service',
    desc: 'Quick in-store pickup and priority WhatsApp medicine order processing for local residents.',
    icon: 'Zap',
  },
  {
    title: 'Prescription Medicines',
    desc: 'Complete range of doctor-prescribed antibiotics, chronic care & specialized treatments.',
    icon: 'FileText',
  },
  {
    title: 'Healthcare Products',
    desc: 'Wide variety of personal hygiene, nutrition, wellness, and orthopedic support items.',
    icon: 'HeartPulse',
  },
  {
    title: 'Trusted Local Pharmacy',
    desc: 'Serving the Paliganj & surrounding Bihar communities with dedication for years.',
    icon: 'Building2',
  },
  {
    title: 'Easy WhatsApp Support',
    desc: 'Send prescription photos on WhatsApp & get fast confirmation & home assistance.',
    icon: 'MessageSquare',
  },
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'medicine-sales',
    title: 'Medicine Sales',
    description: 'Complete array of prescription & over-the-counter (OTC) medicines for all illnesses.',
    iconName: 'Pill',
    category: 'Core Pharmacy',
    features: ['Branded & Generic Options', 'Strict Temperature Controlled Storage', 'Expiration Date Guarantee'],
  },
  {
    id: 'prescription-medicines',
    title: 'Prescription Medicines',
    description: 'Careful dispensing of doctor prescriptions with exact dosage advice and usage guidance.',
    iconName: 'FileText',
    category: 'Prescription',
    features: ['Prescription Verification', 'Refill Alerts via WhatsApp', 'Generic Alternatives Available'],
  },
  {
    id: 'otc-medicines',
    title: 'OTC Medicines',
    description: 'Safe remedies for common cold, fever, pain relief, digestive health, and allergies.',
    iconName: 'Sparkles',
    category: 'General Care',
    features: ['Quick Relief Solutions', 'Top Doctor Recommended Brands', 'Affordable Multipacks'],
  },
  {
    id: 'baby-care-products',
    title: 'Baby Care Products',
    description: 'Premium baby food, diapers, mild skin creams, baby wipes, and pediatric essentials.',
    iconName: 'Baby',
    category: 'Maternal & Child Care',
    features: ['Hygienic & Hypoallergenic', 'Trusted Brands like Lactogen & Cerelac', 'Diapering & Bathing Needs'],
  },
  {
    id: 'personal-care-products',
    title: 'Personal Care Products',
    description: 'Skincare, hair care, oral hygiene, soaps, antiseptics, and daily grooming items.',
    iconName: 'Sparkle',
    category: 'Personal Wellness',
    features: ['Dermatologist Tested', 'Top Cosmetic Brands', 'Hygienic Personal Essentials'],
  },
  {
    id: 'diabetic-care',
    title: 'Diabetic Care',
    description: 'Glucometers, test strips, lancets, insulin accessories, sugar-free supplements & snacks.',
    iconName: 'Activity',
    category: 'Chronic Care',
    features: ['Accu-Chek & Contour Strips', 'Insulin Cooling Pouches', 'Diabetic Foot Cream & Socks'],
  },
  {
    id: 'blood-pressure-monitor',
    title: 'Blood Pressure Monitor',
    description: 'Digital BP monitors, pulse oximeters, thermometers, and daily health tracking devices.',
    iconName: 'Heart',
    category: 'Diagnostics',
    features: ['Omron & Dr. Trust Certified', 'In-Store Free BP & Sugar Checks', 'Warranty Assistance'],
  },
  {
    id: 'first-aid-supplies',
    title: 'First Aid Supplies',
    description: 'Comprehensive first aid kits, bandages, antiseptic liquids, cotton, tapes, and burn creams.',
    iconName: 'Cross',
    category: 'Emergency Care',
    features: ['Emergency Ready Kits', 'Sterilized Bandages & Gauze', 'Antiseptics like Dettol & Savlon'],
  },
  {
    id: 'surgical-items',
    title: 'Surgical Items',
    description: 'Hospital grade surgical gloves, masks, IV sets, syringes, catheters, and dressing materials.',
    iconName: 'Syringe',
    category: 'Surgical Care',
    features: ['ISO Certified Supplies', 'Bulk Rates for Local Clinics', 'Sterile Single-Use Equipment'],
  },
  {
    id: 'health-supplements',
    title: 'Health Supplements',
    description: 'Multivitamins, calcium, fish oil, immunity boosters, and protein powders for all ages.',
    iconName: 'Apple',
    category: 'Nutrition',
    features: ['FSSAI Approved Brands', 'Protein Powders for Seniors & Youth', 'Vitamin D3 & B12 Care'],
  },
  {
    id: 'medical-devices',
    title: 'Medical Devices',
    description: 'Nebulizers, steam inhalers, hot water bags, heating pads, and digital weighing scales.',
    iconName: 'Stethoscope',
    category: 'Equipment',
    features: ['High Reliability Brands', 'Respiratory Relief Devices', 'Demonstration & Usage Advice'],
  },
  {
    id: 'home-care-products',
    title: 'Home Care Products',
    description: 'Adult diapers, underpads, bed pans, walker aids, wheel chairs, and patient recovery tools.',
    iconName: 'Home',
    category: 'Elderly Care',
    features: ['Comfort & Hygiene Focused', 'Mobility Support Equipment', 'Discreet Packaging'],
  },
];

export const FEATURED_CATEGORIES: CategoryItem[] = [
  { id: 'tablets', name: 'Tablets', description: 'Pain relievers, antibiotics, BP & diabetic pills', itemCount: 350, iconName: 'Pill', popularItems: ['Paracetamol 650', 'Amoxicillin 500', 'Telmisartan 40', 'Metformin 500'] },
  { id: 'capsules', name: 'Capsules', description: 'Gastro-resistant, multivitamins & antacids', itemCount: 220, iconName: 'PillBottle', popularItems: ['Pantoprazole DSR', 'Rabeprazole DSR', 'Multivitamin Gold', 'Lycopene'] },
  { id: 'syrups', name: 'Syrups', description: 'Cough formulas, digestive enzymes & tonics', itemCount: 180, iconName: 'FlaskConical', popularItems: ['Ascoril LS', 'Benadryl', 'Aristozyme', 'Liv 52'] },
  { id: 'injection', name: 'Injections', description: 'Sterile vials, pre-filled syringes & IV fluids', itemCount: 95, iconName: 'Syringe', popularItems: ['Tetanus Toxoid', 'Ceftriaxone 1g', 'Pantoprazole 40mg', 'NS / RL Fluids'] },
  { id: 'equipment', name: 'Medical Equipment', description: 'BP monitors, oximeters, nebulizers & glucometers', itemCount: 45, iconName: 'Stethoscope', popularItems: ['Omron BP Monitor', 'Beurer Nebulizer', 'Accu-Chek Instant', 'Pulse Oximeter'] },
  { id: 'protein', name: 'Protein Supplements', description: 'Nutrition for gym, recovery & pregnant mothers', itemCount: 60, iconName: 'Dumbbell', popularItems: ['Ensure Complete', 'Protinex Original', 'Prohance D', 'Mama Protinex'] },
  { id: 'vitamins', name: 'Vitamins & Minerals', description: 'Immunity support, B-complex, Calcium & Iron', itemCount: 140, iconName: 'Sun', popularItems: ['Becosules Z', 'Shelcal 500', 'Neurobion Forte', 'Limcee 500'] },
  { id: 'skincare', name: 'Skin Care', description: 'Antifungal creams, moisturizers & medicated soaps', itemCount: 110, iconName: 'Smile', popularItems: ['Derma KEM', 'Candid Powder', 'Cetaphil Cleanser', 'Betnovate N'] },
  { id: 'baby', name: 'Baby Products', description: 'Baby formula, diapers, rash cream & lotions', itemCount: 90, iconName: 'Baby', popularItems: ['Lactogen 1/2', 'Pampers Diapers', 'Himalaya Baby Lotion', 'Sebamed Cream'] },
  { id: 'hygiene', name: 'Personal Hygiene', description: 'Sanitizers, feminine hygiene & oral care', itemCount: 130, iconName: 'Shield', popularItems: ['Whisper Ultra', 'Dettol Handwash', 'Sensodyne Paste', 'Betadine Gargle'] },
  { id: 'ortho', name: 'Orthopedic Support', description: 'Knee caps, lumbar belts & ankle binders', itemCount: 55, iconName: 'Activity', popularItems: ['Flamingo Knee Cap', 'Tynor Lumbar Belt', 'Cervical Collar', 'Ankle Support'] },
  { id: 'diabetic', name: 'Diabetic Care', description: 'Test strips, sugar substitutes & foot lotions', itemCount: 75, iconName: 'Heart', popularItems: ['Accu-Chek Strips', 'Sugar Free Gold', 'OneTouch Verio', 'Foot Care Cream'] },
];

export const WORKING_PROCESS = [
  {
    step: '01',
    title: 'Visit Store or Message',
    desc: 'Walk into our Devi Sthan Road store or connect via WhatsApp/Call from home.',
    icon: 'Store',
  },
  {
    step: '02',
    title: 'Share Prescription',
    desc: 'Hand over doctor prescription or upload a clear photo on WhatsApp.',
    icon: 'UploadCloud',
  },
  {
    step: '03',
    title: 'Get Verified Medicines',
    desc: 'Our experienced staff checks batch, expiry, and prepares your order accurately.',
    icon: 'CheckCircle2',
  },
  {
    step: '04',
    title: 'Easy Payment & Receipt',
    desc: 'Pay conveniently via UPI, QR code, cash, or card with an itemized GST bill.',
    icon: 'CreditCard',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    author: 'Rameshwar Prasad Singh',
    location: 'Paliganj Town',
    rating: 5,
    date: '12 July 2026',
    comment: 'Brajesh Medical Hall is the most dependable pharmacy in Paliganj. All medicines are 100% genuine and fresh. The owner and staff are very polite and helpful.',
    verifiedCustomer: true,
  },
  {
    id: '2',
    author: 'Sunita Devi',
    location: 'Devi Sthan Road',
    rating: 5,
    date: '28 June 2026',
    comment: 'I sent my mother\'s prescription photo on WhatsApp, and within 10 minutes they kept all medicines packed and ready. Excellent fast service!',
    verifiedCustomer: true,
  },
  {
    id: '3',
    author: 'Dr. Alok Kumar',
    location: 'Paliganj Sub-Division Hospital Road',
    rating: 5,
    date: '15 May 2026',
    comment: 'As a medical practitioner, I appreciate Brajesh Medical Hall for keeping cold-chain vaccines and chronic disease medicines stored at proper temperatures.',
    verifiedCustomer: true,
  },
  {
    id: '4',
    author: 'Manish Verma',
    location: 'Chandhar, Paliganj',
    rating: 5,
    date: '02 May 2026',
    comment: 'They have complete baby products like Lactogen and Pampers at genuine rates. Very convenient store location near Devi Sthan.',
    verifiedCustomer: true,
  },
  {
    id: '5',
    author: 'Priya Kumari',
    location: 'Ranipur, Bihar',
    rating: 5,
    date: '18 April 2026',
    comment: 'Got my father\'s Omron BP monitor and diabetic test strips at a very fair price compared to Patna market. Highly recommended!',
    verifiedCustomer: true,
  },
  {
    id: '6',
    author: 'Sanjay Yadav',
    location: 'Bikram Road, Paliganj',
    rating: 5,
    date: '10 March 2026',
    comment: 'Great store for surgical items and emergency first aid. Always available when needed and staff explains dosage clearly.',
    verifiedCustomer: true,
  },
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Are all medicines sold at Brajesh Medical Hall genuine and authentic?',
    answer: 'Yes, 100%! All our medicines, surgical items, and health supplements are directly procured from authorized pharmaceutical distributors. We strictly verify batch codes, manufacturing dates, and maintaining cold-chain storage.',
    category: 'Authenticity',
  },
  {
    id: 'faq-2',
    question: 'Can I order medicines through WhatsApp by sending my prescription photo?',
    answer: 'Yes! Simply click the WhatsApp order button on our website, upload or attach your prescription image along with your name and address. Our team will verify and confirm stock and price immediately.',
    category: 'Ordering',
  },
  {
    id: 'faq-3',
    question: 'What are the store opening hours for Brajesh Medical Hall in Paliganj?',
    answer: 'We are open Monday to Saturday from 07:00 AM to 10:00 PM, and Sunday from 08:00 AM to 09:00 PM. For emergency medical requirements, our phone lines are available 24/7.',
    category: 'Timings',
  },
  {
    id: 'faq-4',
    question: 'Do you offer home delivery of medicines in Paliganj?',
    answer: 'Yes, we provide quick local medicine delivery and store pickup assistance for customers living in and around Paliganj town and Devi Sthan Road.',
    category: 'Delivery',
  },
  {
    id: 'faq-5',
    question: 'Which payment options are accepted at your store?',
    answer: 'We accept Cash, PhonePe, Google Pay, Paytm, UPI QR codes, and major debit/credit cards. You receive an itemized printed bill with GST for every purchase.',
    category: 'Payment',
  },
  {
    id: 'faq-6',
    question: 'Do you sell surgical instruments, blood pressure monitors and diabetic supplies?',
    answer: 'Yes, we stock digital BP monitors, Omron glucometers, test strips, nebulizers, pulse oximeters, steam inhalers, surgical gloves, syringes, and orthopedic braces.',
    category: 'Products',
  },
  {
    id: 'faq-7',
    question: 'Can I get generic medicine alternatives to save costs?',
    answer: 'Yes, upon request our qualified pharmacist can guide you with equivalent generic formula medicines approved by CDSCO/WHO-GMP that share the exact same active pharmaceutical ingredient at lower prices.',
    category: 'Medicines',
  },
  {
    id: 'faq-8',
    question: 'Is a doctor’s prescription mandatory for buying medicines?',
    answer: 'Prescriptions are required for Schedule H & H1 controlled medicines, antibiotics, and specialized psychiatric/chronic condition drugs as per Indian Drug Laws. OTC items like basic fever tablets, antacids, first aid & supplements do not require a prescription.',
    category: 'Policy',
  },
  {
    id: 'faq-9',
    question: 'Do you offer free blood pressure or blood sugar tests at the store?',
    answer: 'Yes! We offer complimentary basic Blood Pressure checks and quick digital Blood Sugar monitoring assistance for regular senior citizen customers.',
    category: 'Services',
  },
  {
    id: 'faq-10',
    question: 'How can I reach Brajesh Medical Hall from Paliganj bus stand?',
    answer: 'We are conveniently located on Devi Sthan Road near Devi Sthan Temple, Paliganj, Bihar 801110. It is just a 2-minute walk or auto ride from the main Paliganj market square.',
    category: 'Location',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  { id: 'g1', title: 'Brajesh Medical Hall Store Front', category: 'Store Front', imageUrl: storeFrontImg, caption: 'Clean, modern exterior view on Devi Sthan Road, Paliganj.' },
  { id: 'g2', title: 'Organized Medicine Shelves', category: 'Medicine Shelves', imageUrl: heroBannerImg, caption: 'Temperature-monitored, systematically labeled medicine inventory.' },
  { id: 'g3', title: 'Experienced Pharmacist Consultation', category: 'Customers', imageUrl: pharmacistShelvesImg, caption: 'Friendly guidance on prescription dosage and medicine usage.' },
  { id: 'g4', title: 'Medical Equipment & Monitors', category: 'Medical Equipment', imageUrl: heroBannerImg, caption: 'Digital BP monitors, Nebulizers, Oximeters & Glucometer kits.' },
  { id: 'g5', title: 'Baby Care & Nutrition Corner', category: 'Products', imageUrl: storeFrontImg, caption: 'Trusted baby food formulas, diapers, and pediatric supplements.' },
  { id: 'g6', title: 'Sterile Surgical Supplies', category: 'Surgical', imageUrl: pharmacistShelvesImg, caption: 'Bandages, surgical gloves, IV sets, and first aid kits.' },
];

export const STORE_TIMELINE = [
  { year: 'Est. 2012', title: 'Foundation of Brajesh Medical Hall', description: 'Started with a vision to provide authentic, affordable medicines to Paliganj residents.' },
  { year: '2016', title: 'Expansion into Surgical & Diagnostics', description: 'Added digital BP monitors, nebulizers, and surgical tools for local clinics & families.' },
  { year: '2020', title: 'Pandemic Emergency Service', description: 'Served 24/7 during critical lockdowns ensuring continuous oxygen concentrators, masks & essential drugs.' },
  { year: '2023', title: 'Modern Store Renovation', description: 'Upgraded to air-conditioned cold storage, digital billing & enhanced customer consultation lounge.' },
  { year: '2026', title: 'WhatsApp Instant Order Launch', description: 'Empowering local patients with fast digital prescription upload and instant phone assistance.' },
];
