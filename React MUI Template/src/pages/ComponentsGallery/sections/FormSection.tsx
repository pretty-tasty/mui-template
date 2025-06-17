import React from 'react';
import { useForm } from 'react-hook-form';
import {
  Box,
  Typography,
  Grid,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Checkbox,
  FormControlLabel,
  Radio,
  RadioGroup,
  Switch,
  Slider,
  Button,
} from '@mui/material';
import { StyledCard } from '../../../components/styled';

export const FormSection: React.FC = () => {
  const { control } = useForm();

  return (
    <StyledCard>
      <Box sx={{ p: 3 }}>
        <Typography variant="h5" gutterBottom>
          Form Components
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          Various form inputs and controls
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
              Text Fields
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, mb: 4 }}>
              <TextField
                label="Standard"
                variant="outlined"
                placeholder="Enter text"
              />
              <TextField
                label="Required"
                variant="outlined"
                required
                helperText="This field is required"
              />
              <TextField
                label="Error State"
                variant="outlined"
                error
                helperText="This field has an error"
              />
              <TextField
                label="Disabled"
                variant="outlined"
                disabled
                defaultValue="Disabled field"
              />
              <TextField
                label="Multiline"
                variant="outlined"
                multiline
                rows={3}
                placeholder="Enter multiple lines of text"
              />
            </Box>

            <Typography variant="h6" gutterBottom>
              Select Fields
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, mb: 4 }}>
              <FormControl fullWidth>
                <InputLabel>Country</InputLabel>
                <Select label="Country" defaultValue="">
                  <MenuItem value="us">United States</MenuItem>
                  <MenuItem value="ca">Canada</MenuItem>
                  <MenuItem value="uk">United Kingdom</MenuItem>
                  <MenuItem value="de">Germany</MenuItem>
                </Select>
              </FormControl>
              
              <FormControl fullWidth>
                <InputLabel>Multiple Select</InputLabel>
                <Select
                  label="Multiple Select"
                  multiple
                  defaultValue={[]}
                  renderValue={(selected) => (selected as string[]).join(', ')}
                >
                  <MenuItem value="option1">Option 1</MenuItem>
                  <MenuItem value="option2">Option 2</MenuItem>
                  <MenuItem value="option3">Option 3</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
              Checkboxes & Radio Buttons
            </Typography>
            <Box sx={{ mb: 4 }}>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Default checked"
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Default unchecked"
              />
              <FormControlLabel
                control={<Checkbox disabled />}
                label="Disabled"
              />
              <FormControlLabel
                control={<Checkbox indeterminate />}
                label="Indeterminate"
              />
              
              <Typography variant="subtitle2" sx={{ mt: 3, mb: 1 }}>
                Radio Group
              </Typography>
              <RadioGroup defaultValue="option1">
                <FormControlLabel value="option1" control={<Radio />} label="Option 1" />
                <FormControlLabel value="option2" control={<Radio />} label="Option 2" />
                <FormControlLabel value="option3" control={<Radio />} label="Option 3" />
                <FormControlLabel value="disabled" control={<Radio />} label="Disabled" disabled />
              </RadioGroup>
            </Box>

            <Typography variant="h6" gutterBottom>
              Switches & Sliders
            </Typography>
            <Box sx={{ mb: 4 }}>
              <FormControlLabel
                control={<Switch defaultChecked />}
                label="Default checked"
              />
              <FormControlLabel
                control={<Switch />}
                label="Default unchecked"
              />
              <FormControlLabel
                control={<Switch disabled />}
                label="Disabled"
              />
              
              <Typography variant="subtitle2" sx={{ mt: 3, mb: 2 }}>
                Slider
              </Typography>
              <Slider
                defaultValue={30}
                marks
                min={0}
                max={100}
                valueLabelDisplay="auto"
              />
              
              <Typography variant="subtitle2" sx={{ mt: 2, mb: 2 }}>
                Range Slider
              </Typography>
              <Slider
                defaultValue={[20, 60]}
                marks
                min={0}
                max={100}
                valueLabelDisplay="auto"
              />
            </Box>

            <Button variant="contained" fullWidth>
              Submit Form
            </Button>
          </Grid>
        </Grid>
      </Box>
    </StyledCard>
  );
};