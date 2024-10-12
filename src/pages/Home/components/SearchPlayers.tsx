import { Button, List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
function SearchPlayers() {
  return (
    <List
    sx={{ width: "100%", bgcolor: "background.paper" }}
    component="nav"
    aria-labelledby="nested-list-subheader"
  >

   {Array(10).fill(null).map((_,index:number)=>
       <>
        <ListItem secondaryAction={
          <span>
            <Button color="success" variant="text">
               add
            </Button>
          </span>
        }>
      
        <ListItemIcon>
          <AccountCircleIcon />
          </ListItemIcon>
        <ListItemText primary="Sent mail" />
      </ListItem>
       </>)
   }

  </List>
  )
}

export default SearchPlayers
