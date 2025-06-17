import React, { useEffect, useState } from 'react';
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  LinearProgress,
} from '@mui/material';
import {
  Users,
  UserCheck,
  DollarSign,
  TrendingUp,
} from 'lucide-react';
import { StyledCard } from '../../components/styled';
import { LoadingSpinner } from '../../components/common/LoadingSpinner';
import { DashboardSkeleton } from '../../components/common/SkeletonLoaders';
import { DashboardStats } from '../../types';
import { fetchDashboardStats } from '../../services/mockData';
import { formatCurrency, formatNumber } from '../../utils/formatters';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  color: string;
  change?: number;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon, color, change }) => (
  <StyledCard>
    <CardContent>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box>
          <Typography color="text.secondary" gutterBottom variant="body2">
            {title}
          </Typography>
          <Typography variant="h4" component="h2" fontWeight="bold">
            {value}
          </Typography>
          {change !== undefined && (
            <Box display="flex" alignItems="center" mt={1}>
              <TrendingUp size={16} color={change >= 0 ? '#39936B' : '#C41608'} />
              <Typography
                variant="body2"
                color={change >= 0 ? 'success.main' : 'error.main'}
                sx={{ ml: 0.5 }}
              >
                {change >= 0 ? '+' : ''}{change}%
              </Typography>
            </Box>
          )}
        </Box>
        <Box
          sx={{
            backgroundColor: color,
            borderRadius: 2,
            p: 1.5,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {icon}
        </Box>
      </Box>
    </CardContent>
  </StyledCard>
);

export const Dashboard: React.FC = () => {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadStats = async () => {
      try {
        const data = await fetchDashboardStats();
        setStats(data);
      } catch (error) {
        console.error('Failed to load dashboard stats:', error);
      } finally {
        setLoading(false);
      }
    };

    loadStats();
  }, []);

  if (loading) {
    return <DashboardSkeleton />;
  }

  if (!stats) {
    return (
      <Box textAlign="center" py={4}>
        <Typography variant="h6" color="error">
          Failed to load dashboard data
        </Typography>
      </Box>
    );
  }

  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom fontWeight="bold">
        Dashboard
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        Welcome back! Here's what's happening with your application today.
      </Typography>

      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Total Users"
            value={formatNumber(stats.totalUsers)}
            icon={<Users size={24} color="white" />}
            color="rgba(17, 40, 179, 0.1)"
            change={8.2}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Active Users"
            value={formatNumber(stats.activeUsers)}
            icon={<UserCheck size={24} color="white" />}
            color="rgba(57, 147, 107, 0.1)"
            change={5.7}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Total Revenue"
            value={formatCurrency(stats.totalRevenue)}
            icon={<DollarSign size={24} color="white" />}
            color="rgba(0, 122, 204, 0.1)"
            change={12.3}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Monthly Growth"
            value={`${stats.monthlyGrowth}%`}
            icon={<TrendingUp size={24} color="white" />}
            color="rgba(204, 120, 0, 0.1)"
            change={stats.monthlyGrowth}
          />
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <StyledCard>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Activity Overview
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                Your application performance over the last 30 days.
              </Typography>
              <Box sx={{ mt: 3 }}>
                <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                  <Typography variant="body2">User Engagement</Typography>
                  <Typography variant="body2" fontWeight="bold">87%</Typography>
                </Box>
                <LinearProgress
                  variant="determinate"
                  value={87}
                  sx={{ height: 8, borderRadius: 4, mb: 2 }}
                />
                
                <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                  <Typography variant="body2">Server Performance</Typography>
                  <Typography variant="body2" fontWeight="bold">94%</Typography>
                </Box>
                <LinearProgress
                  variant="determinate"
                  value={94}
                  sx={{ height: 8, borderRadius: 4, mb: 2 }}
                  color="success"
                />
                
                <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                  <Typography variant="body2">Response Time</Typography>
                  <Typography variant="body2" fontWeight="bold">76%</Typography>
                </Box>
                <LinearProgress
                  variant="determinate"
                  value={76}
                  sx={{ height: 8, borderRadius: 4 }}
                  color="warning"
                />
              </Box>
            </CardContent>
          </StyledCard>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <StyledCard>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Quick Actions
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                Common tasks and shortcuts
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
                <Box
                  sx={{
                    p: 2,
                    borderRadius: 2,
                    backgroundColor: 'grey.50',
                    cursor: 'pointer',
                    '&:hover': { backgroundColor: 'grey.100' },
                  }}
                >
                  <Typography variant="subtitle2">Add New User</Typography>
                  <Typography variant="caption" color="text.secondary">
                    Create a new user account
                  </Typography>
                </Box>
                <Box
                  sx={{
                    p: 2,
                    borderRadius: 2,
                    backgroundColor: 'grey.50',
                    cursor: 'pointer',
                    '&:hover': { backgroundColor: 'grey.100' },
                  }}
                >
                  <Typography variant="subtitle2">View Reports</Typography>
                  <Typography variant="caption" color="text.secondary">
                    Access detailed analytics
                  </Typography>
                </Box>
                <Box
                  sx={{
                    p: 2,
                    borderRadius: 2,
                    backgroundColor: 'grey.50',
                    cursor: 'pointer',
                    '&:hover': { backgroundColor: 'grey.100' },
                  }}
                >
                  <Typography variant="subtitle2">System Settings</Typography>
                  <Typography variant="caption" color="text.secondary">
                    Configure application settings
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </StyledCard>
        </Grid>
      </Grid>
    </Box>
  );
};