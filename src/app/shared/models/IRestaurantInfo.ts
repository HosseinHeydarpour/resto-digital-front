export interface Address {
  street?: string;
  city?: string;
  state?: string;
  zipCode?: string;
}

export interface MenuItem {
  name: string;
  description?: string;
  price: number;
  imageUrl?: string;
}

export interface Category {
  name: string;
  items: MenuItem[];
}

export interface Menu {
  name: string;
  description?: string;
  categories: Category[];
}

export interface IRestaurant {
  _id?: string; // MongoDB ID
  name?: string;
  mobileNumber?: string;
  landLine?: string[];
  address?: Address;
  owner?: string; // User ID
  staff?: string[]; // Array of User IDs
  isActive?: boolean;
  socialMedia?: string[];
  workingHours?: string;
  menus?: Menu[];
  createdAt?: string; // from timestamps
  updatedAt?: string; // from timestamps
}
