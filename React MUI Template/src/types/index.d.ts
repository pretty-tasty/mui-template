export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user' | 'moderator';
  status: 'active' | 'inactive';
  createdAt: string;
  avatar?: string;
}

export interface DashboardStats {
  totalUsers: number;
  activeUsers: number;
  totalRevenue: number;
  monthlyGrowth: number;
}

export interface TableColumn {
  field: string;
  headerName: string;
  width?: number;
  flex?: number;
  sortable?: boolean;
  filterable?: boolean;
}

export interface NavItem {
  id: string;
  label: string;
  path: string;
  icon: React.ReactNode;
  children?: NavItem[];
}

export interface FormFieldProps {
  name: string;
  label: string;
  required?: boolean;
  helperText?: string;
  placeholder?: string;
}

export interface ComponentGallerySection {
  id: string;
  title: string;
  description: string;
  component: React.ComponentType;
}