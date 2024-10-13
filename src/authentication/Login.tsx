import { ChangeEvent, FormEvent, useState } from "react";
import {
  Button,
  Divider,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
type SignInDetailsType = {
  email: string;
  password: string;
};
function Login() {
  const theme = useTheme();
  const [signInDetails, setSignInDetails] = useState<SignInDetailsType>({
    email: "",
    password: "",
  });
  const [isError, setIsError] = useState(false);

  const handleValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignInDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSignIn = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let errorCount = 0;
    for (let key in signInDetails) {
      if (!signInDetails[key as keyof typeof signInDetails]) {
        setIsError(true);
        errorCount++;
      }
    }
    if (!errorCount && signInDetails.email.includes("@")) {
      console.log("ready to login");
    } else {
      console.log("not ready to login");
    }
  };

  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="border py-5 px-4 rounded flex items-center flex-col">
        <Typography variant="h6" color={"primary"}>
          Login
        </Typography>
        <Divider sx={{ width: "100%" }} />
        <div className="flex flex-col items-center gap-3 w-[30vw] pt-3">
          <form
            className="flex flex-col items-center gap-3 w-full"
            onSubmit={handleSignIn}
          >
            <TextField
              name="email"
              value={signInDetails.email}
              onChange={handleValueChange}
              label="Email"
              type="email"
              error={isError && !signInDetails.email}
              helperText={
                isError && !signInDetails.email ? "Email required" : null
              }
            />
            <TextField
              name="password"
              value={signInDetails.password}
              onChange={handleValueChange}
              label="Password"
              type={showPassword ? "text" : "password"}
              error={isError && !signInDetails.password}
              helperText={
                isError && !signInDetails.password ? "Password required" : null
              }
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <IconButton
                      onClick={() => {
                        setShowPassword((prev) => !prev);
                      }}
                    >
                      {showPassword ? (
                        <VisibilityOffIcon />
                      ) : (
                        <RemoveRedEyeIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Button type="submit" fullWidth color="success">
              {" "}
              create
            </Button>
          </form>
          <div className="flex gap-2 justify-start w-full mt-3">
            <Typography variant="body2">Create account </Typography>
            <Link to={"/sign-in"}>
              <Typography variant="body2" color={"primary"}>
                sign in
              </Typography>
            </Link>
          </div>
          <div className="w-full h-10 relative flex items-center justify-center">
            <Divider sx={{ width: "100%" }} />
            <span
              style={{ backgroundColor: theme.palette.background.paper }}
              className="absolute letf-[50%] border circle p-2 rounded-full w-9 h-9 flex justify-center items-center"
            >
              or
            </span>
          </div>
          <Button
            sx={(theme) => ({
              backgroundColor: theme.palette.background.paper,
              color: theme.palette.grey.A700,
              "&:hover": {
                backgroundColor: theme.palette.grey[300], // Change this to the desired hover color
              },
            })}
            className="text-sm font-semibold shadow flex gap-2 justify-center flex-row border rounded p-2 w-full"
          >
            Sign with google{" "}
            <img className="h-5 w-5" src="/icons/Google_Icon-.webp" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Login;
