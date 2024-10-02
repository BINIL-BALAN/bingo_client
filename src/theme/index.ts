import { createTheme } from "@mui/material";

export const theme = createTheme({
   components:{
    MuiButton:{
        defaultProps:{size:"small",variant:"contained"}
    },
    MuiTextField:{
        defaultProps:{variant:"outlined",size:"small",fullWidth:true}
    },
    MuiAppBar:{
        defaultProps:{
            // sx:{backgroundColor:"#3c3c3c"}
        }
    }
   },
   
});

export default theme;
