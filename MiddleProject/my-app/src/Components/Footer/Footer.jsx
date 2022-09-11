import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';
import { Typography } from "@material-ui/core";
import './Footer.css'

export default function Footer() {
  return (
    <footer>
      <Box
        px={{ xs: 3, sm: 10, md: 10, lg: 10 }}
        py={{ xs: 5, sm: 6, md: 6, lg: 6 }}
        mt={2}
        bgcolor="text.primary"
        color="white"
      >
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} s={4} md={4} lg={4}>
              <Box borderBottom={1}>Help</Box>
              <Box>
                <Link href="/" color="inherit">
                  Contact
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Support
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Privacy
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} s={4} md={4} lg={4}>
              <Box borderBottom={1}>Account</Box>
              <Box>
                <Link href="/" color="inherit">
                  Register
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Login
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} s={4} md={4} lg={4}>
              <Box borderBottom={1}>Messeges</Box>
              <Box>
                <Link href="/" color="inherit">
                  Backup
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  History
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Roll
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Container>
        <Box textAlign="center" pt={{ xs: 5, sm: 10, md: 10, lg: 10 }}>
         <Link href="/" color="inherit" style={{ textDecoration: 'none'}}> <span style={{ marginRight: 5}}>
            {" "}
            <InstagramIcon />{" "}
          </span> </Link>
         <Link href="/" color="inherit" style={{ textDecoration: 'none' }}> <span style={{ marginRight: 5 }}>
            {" "}
            <TwitterIcon />{" "}
          </span> </Link>
         
         <Link href="/" color="inherit" style={{ textDecoration: 'none' }}> <span style={{ marginRight: 5 }}>
            {" "}
            <WhatsAppIcon />{" "}
          </span></Link>
        <Link href="/" color="inherit" style={{ textDecoration: 'none' }}>  <span style={{ marginRight: 5 }}>
            {" "}
            <FacebookIcon />{" "}
          </span></Link>
        </Box>
        <Box textAlign="center" pt={{ xs: 3, sm: 3, md: 3, lg: 3 }} >
        <Typography><span className="phone-icon"><PhoneIcon /> </span> 050-839-2929 </Typography> 
        </Box>
        <Box textAlign="center" pt={{ xs: 3, sm: 3, md: 3, lg: 3 }}>
          Hava Ve Adam &reg; {new Date().getFullYear()}
        </Box>
      </Box>
    </footer>
  );
}
