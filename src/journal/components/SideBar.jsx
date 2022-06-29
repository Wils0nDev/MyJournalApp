

import { TurnedInNot } from '@mui/icons-material'
import { Drawer,Box, Toolbar, Typography, Divider, List, ListItem, ListItemIcon, ListItemButton, Grid, ListItemText } from '@mui/material'

export const SideBar = ({drawerWidth = 240}) => {
  return (
    <Box
        component='nav'
        sx={{width:{sm:drawerWidth}, flexShrink: {sm:0 }}}
    >
    <Drawer
        variant='permanent'
        open={true}
        sx={{
            display: {xs:'block'},
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth}
        }}
    >
      <Toolbar>
        <Typography variant='h6' noWrap component='div' >
          Wilson Vasquez
        </Typography>
      </Toolbar>

      <Divider />

      <List>
        {
          ['Enero','Febrero','Marzo','Abril'].map(mes=>(
              <ListItem key={mes} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <TurnedInNot />
                    </ListItemIcon>
                    <Grid container>
                      <ListItemText primary={mes} />
                      <ListItemText secondary={'Quis ea labore dolor quis eiusmod adipisicing ut.'} />
                    </Grid>
                  </ListItemButton>
              </ListItem>
          ))
        }
      </List>

    </Drawer>

    </Box>
  )
}
