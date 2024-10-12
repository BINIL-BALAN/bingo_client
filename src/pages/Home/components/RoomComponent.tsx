import { Button, Card, TextField, Typography } from "@mui/material";
import React, { ChangeEvent, useState } from "react";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
function RoomComponent() {
  const [roomId, setRoomId] = useState("");
  const [helperText, setHelperText] = useState("");
  const handleIdChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (value.length < 5) {
      setHelperText("Atleast 5 characters");
    } else {
      setHelperText("Valid room id");
    }
    setRoomId(value);
  };
  return (
    <Card className="w-[50%]">
      <div className="p-4 flex flex-col gap-2">
        <Typography variant="body1" color="initial">
          Create room
        </Typography>
        <div className="flex flex-row gap-2 items-start pt-2">
          <TextField
            label="Enter room id"
            onChange={handleIdChange}
            helperText={
              roomId.length < 5 ? (
                <span className="text-yellow-500">
                  {helperText}{" "}
                  {helperText != "" && <SentimentDissatisfiedIcon />}
                </span>
              ) : (
                <span className="text-green-500">{helperText} {helperText != "" && <SentimentSatisfiedAltIcon />}</span>
              )
            }
          />
          <Button sx={{paddingY:"8px"}} disabled={roomId.length < 5}>create</Button>
        </div>
        <div className="flex justify-end pt-4">
            <Button variant="text">use existing room</Button>
        </div>
      </div>
    </Card>
  );
}

export default RoomComponent;
