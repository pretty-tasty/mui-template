import { User, DashboardStats } from '../types';

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'admin',
    status: 'active',
    createdAt: '2024-01-15T10:30:00Z',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2'
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    role: 'user',
    status: 'active',
    createdAt: '2024-01-14T14:20:00Z',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2'
  },
  {
    id: '3',
    name: 'Mike Johnson',
    email: 'mike.johnson@example.com',
    role: 'moderator',
    status: 'inactive',
    createdAt: '2024-01-13T09:15:00Z',
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2'
  },
  {
    id: '4',
    name: 'Sarah Wilson',
    email: 'sarah.wilson@example.com',
    role: 'user',
    status: 'active',
    createdAt: '2024-01-12T16:45:00Z',
    avatar: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2'
  },
  {
    id: '5',
    name: 'David Brown',
    email: 'david.brown@example.com',
    role: 'user',
    status: 'active',
    createdAt: '2024-01-11T11:30:00Z',
    avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2'
  },
];

export const mockDashboardStats: DashboardStats = {
  totalUsers: 1247,
  activeUsers: 892,
  totalRevenue: 45678.90,
  monthlyGrowth: 12.5,
};

// Simulate API delay
export const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const fetchUsers = async (): Promise<User[]> => {
  await delay(800);
  return mockUsers;
};

export const fetchUser = async (id: string): Promise<User | undefined> => {
  await delay(500);
  return mockUsers.find(user => user.id === id);
};

export const createUser = async (userData: Omit<User, 'id' | 'createdAt'>): Promise<User> => {
  await delay(1000);
  const newUser: User = {
    ...userData,
    id: Date.now().toString(),
    createdAt: new Date().toISOString(),
  };
  mockUsers.push(newUser);
  return newUser;
};

export const updateUser = async (id: string, userData: Partial<User>): Promise<User> => {
  await delay(800);
  const index = mockUsers.findIndex(user => user.id === id);
  if (index === -1) {
    throw new Error('User not found');
  }
  mockUsers[index] = { ...mockUsers[index], ...userData };
  return mockUsers[index];
};

export const deleteUser = async (id: string): Promise<void> => {
  await delay(600);
  const index = mockUsers.findIndex(user => user.id === id);
  if (index === -1) {
    throw new Error('User not found');
  }
  mockUsers.splice(index, 1);
};

export const fetchDashboardStats = async (): Promise<DashboardStats> => {
  await delay(600);
  return mockDashboardStats;
};