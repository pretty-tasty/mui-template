import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Tabs,
  Tab,
  Chip,
  Badge,
  Avatar,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import { ExpandMore, ExpandLess } from '@mui/icons-material';
import { Home, Settings, PersonStanding as Person, Mail } from 'lucide-react';
import { StyledCard } from '../../../components/styled';

export const DataDisplaySection: React.FC = () => {
  const [tabValue, setTabValue] = React.useState(0);
  const [expandedAccordion, setExpandedAccordion] = React.useState<string | false>('panel1');

  const handleAccordionChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpandedAccordion(isExpanded ? panel : false);
  };

  return (
    <StyledCard>
      <Box sx={{ p: 3 }}>
        <Typography variant="h5" gutterBottom>
          Data Display
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          Components for displaying data and content
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
              Cards
            </Typography>
            <Box sx={{ mb: 4 }}>
              <Card sx={{ mb: 2 }}>
                <CardContent>
                  <Typography variant="h6" component="div">
                    Basic Card
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    This is a basic card with some content and actions.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Learn More</Button>
                  <Button size="small">Share</Button>
                </CardActions>
              </Card>
            </Box>

            <Typography variant="h6" gutterBottom>
              Lists
            </Typography>
            <Box sx={{ mb: 4 }}>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <Home size={20} />
                  </ListItemIcon>
                  <ListItemText primary="Home" secondary="Navigate to home page" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Person size={20} />
                  </ListItemIcon>
                  <ListItemText primary="Profile" secondary="Manage your profile" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Settings size={20} />
                  </ListItemIcon>
                  <ListItemText primary="Settings" secondary="Application settings" />
                </ListItem>
              </List>
            </Box>

            <Typography variant="h6" gutterBottom>
              Chips & Badges
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 2 }}>
              <Chip label="Default" />
              <Chip label="Primary" color="primary" />
              <Chip label="Secondary" color="secondary" />
              <Chip label="Success" color="success" />
              <Chip label="Error" color="error" />
              <Chip label="Warning" color="warning" />
              <Chip label="Info" color="info" />
            </Box>
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', mb: 4 }}>
              <Badge badgeContent={4} color="primary">
                <Mail size={24} />
              </Badge>
              <Badge badgeContent={99} color="secondary">
                <Mail size={24} />
              </Badge>
              <Badge badgeContent={1000} max={999} color="error">
                <Mail size={24} />
              </Badge>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
              Avatars
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
              <Avatar>H</Avatar>
              <Avatar sx={{ bgcolor: 'primary.main' }}>N</Avatar>
              <Avatar sx={{ bgcolor: 'secondary.main' }}>OP</Avatar>
              <Avatar
                alt="Remy Sharp"
                src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2"
              />
            </Box>

            <Typography variant="h6" gutterBottom>
              Accordions
            </Typography>
            <Box sx={{ mb: 4 }}>
              <Accordion 
                expanded={expandedAccordion === 'panel1'} 
                onChange={handleAccordionChange('panel1')}
              >
                <AccordionSummary 
                  expandIcon={expandedAccordion === 'panel1' ? <ExpandLess /> : <ExpandMore />}
                >
                  <Typography>Accordion 1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion 
                expanded={expandedAccordion === 'panel2'} 
                onChange={handleAccordionChange('panel2')}
              >
                <AccordionSummary 
                  expandIcon={expandedAccordion === 'panel2' ? <ExpandLess /> : <ExpandMore />}
                >
                  <Typography>Accordion 2</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Pellentesque habitant morbi tristique senectus.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Box>

            <Typography variant="h6" gutterBottom>
              Tabs
            </Typography>
            <Box sx={{ mb: 4 }}>
              <Tabs value={tabValue} onChange={(_, newValue) => setTabValue(newValue)}>
                <Tab label="Tab One" />
                <Tab label="Tab Two" />
                <Tab label="Tab Three" />
              </Tabs>
              <Box sx={{ p: 2, border: 1, borderColor: 'divider', borderTop: 0 }}>
                {tabValue === 0 && <Typography>Content for Tab One</Typography>}
                {tabValue === 1 && <Typography>Content for Tab Two</Typography>}
                {tabValue === 2 && <Typography>Content for Tab Three</Typography>}
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>
              Table
            </Typography>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Role</TableCell>
                    <TableCell>Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>John Doe</TableCell>
                    <TableCell>john@example.com</TableCell>
                    <TableCell>Admin</TableCell>
                    <TableCell>
                      <Chip label="Active" color="success" size="small" />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Jane Smith</TableCell>
                    <TableCell>jane@example.com</TableCell>
                    <TableCell>User</TableCell>
                    <TableCell>
                      <Chip label="Active" color="success" size="small" />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Mike Johnson</TableCell>
                    <TableCell>mike@example.com</TableCell>
                    <TableCell>Moderator</TableCell>
                    <TableCell>
                      <Chip label="Inactive" color="default" size="small" />
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </Box>
    </StyledCard>
  );
};