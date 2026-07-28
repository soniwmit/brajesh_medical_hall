import { MedicineItem } from '../types';

export const MEDICINES_DATABASE: MedicineItem[] = [
  // Tablets & Capsules
  {
    id: 'med-1',
    name: 'Dolo 650mg Tablet',
    brand: 'Micro Labs',
    category: 'Tablets',
    type: 'Tablet',
    price: 34,
    prescriptionRequired: false,
    inStock: true,
    dosageOrUsage: '1 tablet every 6 hours after meals as advised by doctor.',
    description: 'Paracetamol 650mg tablet for fast fever reduction and moderate pain relief.'
  },
  {
    id: 'med-2',
    name: 'Pantocid DSR Capsule',
    brand: 'Sun Pharma',
    category: 'Capsules',
    type: 'Capsule',
    price: 185,
    prescriptionRequired: true,
    inStock: true,
    dosageOrUsage: '1 capsule daily in the morning on an empty stomach.',
    description: 'Pantoprazole & Domperidone combination for severe acidity, GERD, and heartburn.'
  },
  {
    id: 'med-3',
    name: 'Becosules Z Capsule',
    brand: 'Pfizer',
    category: 'Vitamins',
    type: 'Capsule',
    price: 52,
    prescriptionRequired: false,
    inStock: true,
    dosageOrUsage: '1 capsule daily after breakfast.',
    description: 'B-Complex with Vitamin C and Zinc to boost energy, immunity & cure mouth ulcers.'
  },
  {
    id: 'med-4',
    name: 'Shelcal 500 Tablet',
    brand: 'Torrent Pharma',
    category: 'Vitamins',
    type: 'Tablet',
    price: 132,
    prescriptionRequired: false,
    inStock: true,
    dosageOrUsage: '1 tablet daily after lunch or dinner.',
    description: 'Calcium 500mg and Vitamin D3 supplement for bone strength and joint health.'
  },
  {
    id: 'med-5',
    name: 'Amoxyclav 625mg Tablet',
    brand: 'Mankind Pharma',
    category: 'Tablets',
    type: 'Tablet',
    price: 210,
    prescriptionRequired: true,
    inStock: true,
    dosageOrUsage: '1 tablet twice daily after food for 5 days.',
    description: 'Amoxicillin & Potassium Clavulanate antibiotic for throat, chest, and wound infections.'
  },
  {
    id: 'med-6',
    name: 'Telmikind 40mg Tablet',
    brand: 'Mankind Pharma',
    category: 'Tablets',
    type: 'Tablet',
    price: 85,
    prescriptionRequired: true,
    inStock: true,
    dosageOrUsage: '1 tablet daily in the morning as prescribed.',
    description: 'Telmisartan 40mg for managing high blood pressure and hypertension.'
  },
  {
    id: 'med-7',
    name: 'Glycomet SR 500mg Tablet',
    brand: 'USV Ltd',
    category: 'Diabetic Care',
    type: 'Tablet',
    price: 48,
    prescriptionRequired: true,
    inStock: true,
    dosageOrUsage: '1 tablet along with dinner as prescribed.',
    description: 'Metformin Sustained Release for type 2 diabetes blood sugar management.'
  },
  {
    id: 'med-8',
    name: 'Montair LC Tablet',
    brand: 'Cipla',
    category: 'Tablets',
    type: 'Tablet',
    price: 195,
    prescriptionRequired: true,
    inStock: true,
    dosageOrUsage: '1 tablet at bedtime.',
    description: 'Montelukast and Levocetirizine for allergic rhinitis, sneezing, and runny nose.'
  },

  // Syrups
  {
    id: 'med-9',
    name: 'Ascoril LS Expectorant 100ml',
    brand: 'Glenmark',
    category: 'Syrups',
    type: 'Syrup',
    price: 125,
    prescriptionRequired: false,
    inStock: true,
    dosageOrUsage: '10ml thrice daily or as prescribed.',
    description: 'Levosalbutamol, Ambroxol, and Guaiphenesin formula for productive cough and chest congestion.'
  },
  {
    id: 'med-10',
    name: 'Benadryl Cough Syrup 150ml',
    brand: 'Johnson & Johnson',
    category: 'Syrups',
    type: 'Syrup',
    price: 140,
    prescriptionRequired: false,
    inStock: true,
    dosageOrUsage: '10ml 3 to 4 times a day.',
    description: 'Classic dry cough and throat irritation relief syrup.'
  },
  {
    id: 'med-11',
    name: 'Aristozyme Liquid 200ml',
    brand: 'Aristo Pharmaceuticals',
    category: 'Syrups',
    type: 'Syrup',
    price: 135,
    prescriptionRequired: false,
    inStock: true,
    dosageOrUsage: '5ml to 10ml immediately after meals.',
    description: 'Fungal Diastase and Pepsin digestive enzyme syrup for indigestion, bloating, and gas.'
  },
  {
    id: 'med-12',
    name: 'Liv.52 Syrup 200ml',
    brand: 'Himalaya Wellness',
    category: 'Syrups',
    type: 'Syrup',
    price: 170,
    prescriptionRequired: false,
    inStock: true,
    dosageOrUsage: '2 teaspoonfuls twice daily before meals.',
    description: 'Ayurvedic liver care syrup for appetite stimulation and liver protection.'
  },

  // Medical Equipment & Devices
  {
    id: 'med-13',
    name: 'Omron HEM-7120 Digital BP Monitor',
    brand: 'Omron',
    category: 'Medical Equipment',
    type: 'Equipment',
    price: 1850,
    prescriptionRequired: false,
    inStock: true,
    dosageOrUsage: 'Wrap cuff on upper arm at heart level and press Start.',
    description: 'Fully automatic blood pressure monitor with Intellisense technology and 3-year warranty.'
  },
  {
    id: 'med-14',
    name: 'Accu-Chek Instant Glucometer Kit with 10 Strips',
    brand: 'Roche Diagnostics',
    category: 'Medical Equipment',
    type: 'Equipment',
    price: 1299,
    prescriptionRequired: false,
    inStock: true,
    dosageOrUsage: 'Insert test strip, touch blood drop to yellow border, read result in 4 seconds.',
    description: 'High accuracy blood glucose meter with target range indicator.'
  },
  {
    id: 'med-15',
    name: 'Dr. Trust Compressor Nebulizer',
    brand: 'Dr. Trust',
    category: 'Medical Equipment',
    type: 'Equipment',
    price: 1450,
    prescriptionRequired: false,
    inStock: true,
    dosageOrUsage: 'Pour doctor prescribed liquid medicine into chamber and attach mask.',
    description: 'Low noise compressor nebulizer for asthma, bronchitis, and respiratory relief.'
  },
  {
    id: 'med-16',
    name: 'Fingertip Pulse Oximeter LED',
    brand: 'Dr. Morepen',
    category: 'Medical Equipment',
    type: 'Equipment',
    price: 650,
    prescriptionRequired: false,
    inStock: true,
    dosageOrUsage: 'Insert finger and wait 5 seconds for SpO2 and Pulse rate.',
    description: 'Fast blood oxygen saturation and heart pulse rate monitor with OLED screen.'
  },

  // Protein & Health Supplements
  {
    id: 'med-17',
    name: 'Ensure Complete Nutrition Powder Chocolate 400g',
    brand: 'Abbott',
    category: 'Protein Supplements',
    type: 'Supplement',
    price: 690,
    prescriptionRequired: false,
    inStock: true,
    dosageOrUsage: 'Mix 6 scoops in 190ml lukewarm water or milk twice daily.',
    description: 'Balanced nutrition powder with 32 vital nutrients for adult strength and immunity.'
  },
  {
    id: 'med-18',
    name: 'Protinex Original Nutrition Powder 400g',
    brand: 'Danone',
    category: 'Protein Supplements',
    type: 'Supplement',
    price: 620,
    prescriptionRequired: false,
    inStock: true,
    dosageOrUsage: 'Mix 2-3 tablespoons in 200ml warm milk.',
    description: 'High protein nutrition powder with zero added sugar options for muscle strength.'
  },
  {
    id: 'med-19',
    name: 'Limcee 500mg Chewable Tablet (Box of 150)',
    brand: 'Abbott',
    category: 'Vitamins',
    type: 'Tablet',
    price: 105,
    prescriptionRequired: false,
    inStock: true,
    dosageOrUsage: 'Chew 1 tablet daily after food.',
    description: 'Pure Vitamin C chewable tablets for daily skin radiance and viral immunity.'
  },

  // Baby Care
  {
    id: 'med-20',
    name: 'Lactogen 1 Infant Formula 400g',
    brand: 'Nestle',
    category: 'Baby Products',
    type: 'Baby Product',
    price: 440,
    prescriptionRequired: false,
    inStock: true,
    dosageOrUsage: 'Follow scoop table on tin with boiled lukewarm water.',
    description: 'Spray dried infant formula with probiotics for babies up to 6 months.'
  },
  {
    id: 'med-21',
    name: 'Pampers All-in-One Baby Diapers (Large 42s)',
    brand: 'Pampers',
    category: 'Baby Products',
    type: 'Baby Product',
    price: 699,
    prescriptionRequired: false,
    inStock: true,
    dosageOrUsage: 'Wear as pants, change when wetness indicator turns blue.',
    description: 'Aloe vera lotion anti-rash tape diapers with 12-hour dry lock layer.'
  },
  {
    id: 'med-22',
    name: 'Himalaya Baby Massage Oil 200ml',
    brand: 'Himalaya Baby Care',
    category: 'Baby Products',
    type: 'Baby Product',
    price: 210,
    prescriptionRequired: false,
    inStock: true,
    dosageOrUsage: 'Gently massage whole body before baby bath.',
    description: 'Nourishing Olive Oil and Winter Cherry oil formula for baby skin and bones.'
  },

  // Skin Care & Ointments
  {
    id: 'med-23',
    name: 'Candid Dusting Powder 100g',
    brand: 'Glenmark',
    category: 'Skin Care',
    type: 'Skin Care',
    price: 145,
    prescriptionRequired: false,
    inStock: true,
    dosageOrUsage: 'Apply twice daily on affected skin area.',
    description: 'Clotrimazole 1% antifungal powder for prickly heat, sweat rash, and skin itching.'
  },
  {
    id: 'med-24',
    name: 'Betnovate N Cream 20g',
    brand: 'GSK',
    category: 'Skin Care',
    type: 'Skin Care',
    price: 52,
    prescriptionRequired: true,
    inStock: true,
    dosageOrUsage: 'Apply thin layer on affected area as directed by physician.',
    description: 'Betamethasone and Neomycin cream for inflammatory skin conditions.'
  },

  // Orthopedic & Surgical
  {
    id: 'med-25',
    name: 'Flamingo Elastic Knee Cap (Pair)',
    brand: 'Flamingo',
    category: 'Orthopedic Support',
    type: 'Orthopedic',
    price: 340,
    prescriptionRequired: false,
    inStock: true,
    dosageOrUsage: 'Wear on knee joint during walking or mild arthritis support.',
    description: 'Four-way stretch anatomical knee compression sleeves for joint stability.'
  },
  {
    id: 'med-26',
    name: 'Tynor Lumbar Sacral Belt (LS Belt)',
    brand: 'Tynor',
    category: 'Orthopedic Support',
    type: 'Orthopedic',
    price: 890,
    prescriptionRequired: false,
    inStock: true,
    dosageOrUsage: 'Wrap around lower back and secure with double pull elastic tabs.',
    description: 'Spinal back support belt for lower back pain, disc slip, and posture support.'
  },
  {
    id: 'med-27',
    name: 'Betadine Antiseptic Solution 100ml',
    brand: 'Win-Medicare',
    category: 'First Aid Supplies',
    type: 'Personal Care',
    price: 115,
    prescriptionRequired: false,
    inStock: true,
    dosageOrUsage: 'Clean wound area and apply with sterile cotton swab.',
    description: 'Povidone-Iodine 10% solution for wound dressing, cuts, and minor burns.'
  },
  {
    id: 'med-28',
    name: 'Sterile Surgical Gloves 7.5 (Box of 25 pairs)',
    brand: 'Kanam Latex',
    category: 'Surgical Items',
    type: 'Equipment',
    price: 450,
    prescriptionRequired: false,
    inStock: true,
    dosageOrUsage: 'Single use medical examination & surgical protection.',
    description: 'Pre-powdered sterile latex gloves for minor procedures and clinical care.'
  }
];
