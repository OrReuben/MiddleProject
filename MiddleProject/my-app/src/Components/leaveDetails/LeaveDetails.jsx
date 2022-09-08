import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

import "./LeaveDetails.css"

const theme = createTheme();
const options = [
    
    { label: "Wedding", value: "Wedding" },
    { label: "Bar mizva", value: "Bar mizva" },
    { label: "Bat mizva", value: "Bat mizva" },
    { label: "Else", value: "Else" },
  ];
export default function SignInSide() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <div className='LeaveDetailsSection'>
        <ThemeProvider theme={theme}>
          <Grid container component="main" sx={{ height: '40vh' ,width:'60vw'}}>
        <div className='allC'>
          <div class="fit gilroy ltr font-22 bolder line-2h5 space-55 auto text pos-rel l-1 cf7-main-title">NOW, LET'S TALK!<div class="underline cyan-bg ul-m pos-abs behind"></div></div>
            
        <div className='buttomC'>

            <CssBaseline />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square sx={{ color: 'white', bgcolor:'#cfdef300'}}>
              <Box
                sx={{
                    my: 1,
                    mx: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}  >
                
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }} >
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      name="fullName"
                      label="Full name"
                      type="text"
                      id="fullName"
                      autoComplete="current-fullName"
                      variant="standard"
                    />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    variant="standard"
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="Tel"
                    label="Tel"
                    type="number"
                    id="tel"
                    autoComplete="current-tel"
                    variant="standard"
                  />
                    

                       <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Event</InputLabel>
                          <Select
                         labelId="demo-simple-select-label"
                         id="demo-simple-select"
                         label="Event"
                         >
                             {options.map((item) => (
                            <MenuItem key={item.value} value={item.value}>
                            {item.label}
                            </MenuItem>
                        ))}
                             </Select>
                            </FormControl>
                    <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="message"
                    label="message"
                    type="text"
                    id="message"
                    autoComplete="current-message"
                    variant="standard"
                  />
                  <Button
                    type="submit"
                    
                    variant="contained"
                    sx={{ mt: 3, mb: 2 ,float:'left',fontSize:'15px',fontWeight:'700',borderRadius:'25px',border:'solid 1px #3aa1e0',padding:'3px 30px',bgcolor:'#3aa1e000',color:'black'}}
                    
                  >
                    Send
                  </Button>
                  
                </Box>
                
              </Box>
            </Grid>

            
            <div>

                <Typography component="h1" variant="h1" sx={{ color: 'white', bgcolor:'#cfdef300' ,fontFamily: 'gilroy,sans-serif' ,fontweight: '700',webkittextstrokewidth: '1' ,webkittextstrokecolor: 'green'}}>
                   Leave <br></br> your <br /> details  
                    </Typography>
                    <div>
                    <div class="flex flex cf-social">
                    <a href="https://il.linkedin.com/company/digitouch" target="_blank" class="round border social flex align-items justify no-underline"><img src="https://cdn-user-icons.flaticon.com/78671/78671793/1662638150436.svg?token=exp=1662639051~hmac=a053ca3dbe862a856e986bd7c1e1b31f" width="16" height="16" alt="Linkedin" data-lazy-src="/wp-content/themes/Digitouch/assets/images/linkedin.svg" data-ll-status="loaded" class="entered lazyloaded"/><noscript><img src="/wp-content/themes/Digitouch/assets/images/linkedin.svg" width="16" height="16" alt="Linkedin"/></noscript></a>
                    <a href="https://www.instagram.com/digitouch_group/" target="_blank" class="round border social flex align-items justify no-underline"><img src="https://cdn-user-icons.flaticon.com/78671/78671793/1662638316821.svg?token=exp=1662639218~hmac=04f6b4a76cf8e98ea6233a12b8b5fc4c" width="16" height="16" alt="Instagram" data-lazy-src="/wp-content/themes/Digitouch/assets/images/insta.svg" data-ll-status="loaded" class="entered lazyloaded"/><noscript><img src="/wp-content/themes/Digitouch/assets/images/insta.svg" width="16" height="16" alt="Instagram"/></noscript></a>
                    <a href="https://www.facebook.com/digitouch.co.il/" target="_blank" class="round border social flex align-items justify no-underline"><img src="https://cdn-user-icons.flaticon.com/78671/78671793/1662638365627.svg?token=exp=1662639267~hmac=166064af243f1a2698426c48ef557b5f" width="16" height="16" alt="Facebook" data-lazy-src="/wp-content/themes/Digitouch/assets/images/facebook.svg" data-ll-status="loaded" class="entered lazyloaded"/><noscript><img src="/wp-content/themes/Digitouch/assets/images/facebook.svg" width="16" height="16" alt="Facebook"/></noscript></a>
                    </div>
                    </div>
            </div>
        </div>
        </div>
        

     
          </Grid>
        </ThemeProvider>
    </div>
      );

}