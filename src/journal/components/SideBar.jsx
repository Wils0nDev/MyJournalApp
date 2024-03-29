

import { TurnedInNot } from '@mui/icons-material'
import { Drawer,Box, Toolbar, Typography, Divider, List, ListItem, ListItemIcon, ListItemButton, Grid, ListItemText } from '@mui/material'
import { useSelector } from 'react-redux';
import { SideBarItem } from './SideBarItem';

export const SideBar = ({drawerWidth = 240}) => {

  const {displayName} = useSelector(state => state.auth)
  const {notes} = useSelector(state => state.journal)




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
            notes.map(note=>(
              <SideBarItem   key={note.id}  {...note} />
            ))
          }
      </List>

    </Drawer>

    </Box>
  )
}
