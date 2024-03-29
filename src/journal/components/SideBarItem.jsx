
import {  ListItem, ListItemIcon, ListItemButton, Grid, ListItemText } from '@mui/material'
import { TurnedInNot } from '@mui/icons-material';
import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { setActiveNote } from '../../store/journal';


export const SideBarItem = ({title='',date, body, id, imageUrls=[]}) => {

  const newTitle = useMemo(()=>{
    return title.length>17 ? title.substring(0,17) + '...' : title
  })

  const dispatch = useDispatch()

  const onSelectNote = () => {
    dispatch(setActiveNote({title, body, date,id,imageUrls}))
  }
  
  return (
    
            <ListItem key={id} disablePadding >
            <ListItemButton onClick={onSelectNote}>
                <ListItemIcon>
                <TurnedInNot />
                </ListItemIcon>
                <Grid container>
                <ListItemText primary={newTitle} />
                <ListItemText
                    secondary={body}
                />
                </Grid>
            </ListItemButton>
            </ListItem>

  )
}
