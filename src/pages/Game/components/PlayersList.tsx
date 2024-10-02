import React from "react";
import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText, Paper, Typography } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import PersonIcon from '@mui/icons-material/Person';
function PlayersList() {
  return (
    <Paper elevation={3} className="w-full h-full p-3">
      <div className="flex justify-between items-center p-2">
        <Typography variant="h6" color={"default"}>
          Online <FiberManualRecordIcon color="success" />
        </Typography>
        <Typography>Room id: abc124</Typography>
      </div>
      <Divider />
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        <ListItem secondaryAction={<Typography color={"primary"}>Filling</Typography>}>
          <ListItemAvatar>
            <Avatar>
              <PersonIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Player name" />
        </ListItem>
      </List>
    </Paper>
  );
}

export default PlayersList;
