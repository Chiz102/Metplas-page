export interface Category {
  id: number;
  name: string;
  slug: string;
  category_type: 'equipos' | 'insumos' | 'servicios' | 'innovacion';
  description: string;
  icon: string;
  image?: string;
  subcategories?: SubCategory[];
  subcategories_count?: number;
}

export interface SubCategory {
  id: number;
  name: string;
  slug: string;
  description: string;
  image?: string;
  products?: Product[];
  products_count?: number;
}

export interface Product {
  id: number;
  name: string;
  slug: string;
  short_description: string;
  description: string;
  specifications: Record<string, string>;
  image?: string;
  gallery: string[];
  is_featured: boolean;
  order: number;
}

export interface ContactMessage {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  subject: string;
  message: string;
}

export interface CompanyInfo {
  name: string;
  slogan?: string;
  description?: string;
  about_us?: string;
  mission?: string;
  vision?: string;
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  logo?: string;
  facebook?: string;
  instagram?: string;
  linkedin?: string;
}

