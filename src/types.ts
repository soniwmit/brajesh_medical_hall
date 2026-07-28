export type PageView = 'home' | 'about' | 'services' | 'gallery' | 'contact';

export interface BusinessInfo {
  name: string;
  category: string;
  tagline: string;
  location: string;
  fullAddress: string;
  phone: string;
  rawPhone: string;
  whatsapp: string;
  rawWhatsapp: string;
  email: string;
  openingHours: {
    days: string;
    timing: string;
  }[];
  googleMapEmbedUrl: string;
  googleMapDirectionsUrl: string;
  googleRating: number;
  totalReviews: number;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  category: string;
  features: string[];
  image?: string;
}

export interface CategoryItem {
  id: string;
  name: string;
  description: string;
  itemCount: number;
  iconName: string;
  popularItems: string[];
}

export interface MedicineItem {
  id: string;
  name: string;
  brand: string;
  category: string;
  type: 'Tablet' | 'Capsule' | 'Syrup' | 'Injection' | 'Equipment' | 'Supplement' | 'Baby Product' | 'Skin Care' | 'Personal Care' | 'Diabetic Care' | 'Orthopedic';
  price: number;
  prescriptionRequired: boolean;
  inStock: boolean;
  dosageOrUsage: string;
  description: string;
}

export interface Testimonial {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  comment: string;
  verifiedCustomer: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Store Front' | 'Medicine Shelves' | 'Products' | 'Medical Equipment' | 'Customers' | 'Surgical';
  imageUrl: string;
  caption: string;
}

export interface WhatsAppOrderFormData {
  customerName: string;
  mobileNumber: string;
  email: string;
  address: string;
  medicineName: string;
  hasPrescription: boolean;
  prescriptionFile?: File | null;
  message: string;
  preferredDeliveryTime: string;
}
