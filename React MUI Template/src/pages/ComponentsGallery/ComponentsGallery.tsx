import React from 'react';
import {
  Box,
  Typography,
  Container,
} from '@mui/material';
import { ComponentsGallerySkeleton } from '../../components/common/SkeletonLoaders';
import { ButtonSection } from './sections/ButtonSection';
import { TypographySection } from './sections/TypographySection';
import { FormSection } from './sections/FormSection';
import { FeedbackSection } from './sections/FeedbackSection';
import { DataDisplaySection } from './sections/DataDisplaySection';

export const ComponentsGallery: React.FC = () => {
  const [loading, setLoading] = React.useState(true);

  // Simulate loading
  React.useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <ComponentsGallerySkeleton />;
  }

  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom fontWeight="bold">
        Components Gallery
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        Comprehensive showcase of all MUI components with custom styling and theming
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <ButtonSection />
        <TypographySection />
        <FormSection />
        <DataDisplaySection />
        <FeedbackSection />
      </Box>
    </Box>
  );
};