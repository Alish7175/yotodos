import React, {useState} from "react";
import {
  Typography, 
  Box, 
  AppBar,
  Toolbar,
  Button
} from '@mui/material';




export default function Navbar() {
  const [logged , setLogged] = useState(true);
  const logBtn = logged ? "Login" :  "Logout";
  return (
    <Box sx={{ flexGrow: 1, mb: 2}}  >
      <AppBar position='static' sx={{background: '#3f51b5'}}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontSize: 30 }}>
            YOTODOS
          </Typography>
          <Button disabled={true} color="info" variant="contained"  sx={{ fontSize: 20  }}>{logBtn}</Button>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}
