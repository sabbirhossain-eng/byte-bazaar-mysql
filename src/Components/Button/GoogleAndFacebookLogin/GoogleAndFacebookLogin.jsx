import Button from "@mui/material/Button";
import { SvgIcon } from "@mui/material";

function GoogleIcon() {
  return (
    <SvgIcon>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="2443"
        height="2500"
        preserveAspectRatio="xMidYMid"
        viewBox="0 0 256 262"
        id="google"
      >
        <path
          fill="#4285F4"
          d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
        ></path>
        <path
          fill="#34A853"
          d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
        ></path>
        <path
          fill="#FBBC05"
          d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
        ></path>
        <path
          fill="#EB4335"
          d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
        ></path>
      </svg>
    </SvgIcon>
  );
}
function FacebookIcon() {
  return (
    <SvgIcon>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1024 1024"
        id="facebook"
      >
        <path
          fill="#1877f2"
          d="M1024,512C1024,229.23016,794.76978,0,512,0S0,229.23016,0,512c0,255.554,187.231,467.37012,432,505.77777V660H302V512H432V399.2C432,270.87982,508.43854,200,625.38922,200,681.40765,200,740,210,740,210V336H675.43713C611.83508,336,592,375.46667,592,415.95728V512H734L711.3,660H592v357.77777C836.769,979.37012,1024,767.554,1024,512Z"
        ></path>
        <path
          fill="#fff"
          d="M711.3,660,734,512H592V415.95728C592,375.46667,611.83508,336,675.43713,336H740V210s-58.59235-10-114.61078-10C508.43854,200,432,270.87982,432,399.2V512H302V660H432v357.77777a517.39619,517.39619,0,0,0,160,0V660Z"
        ></path>
      </svg>
    </SvgIcon>
  );
}
const GoogleAndFacebookLogin = () => {
  const handleGoogleSignIn = () => {
    // Your logic for Google sign-in
    console.log("Google Sign In");
  };

  const handleFacebookSignIn = () => {
    // Your logic for Facebook sign-in
    console.log("Facebook Sign In");
  };

  return (
    <div className="flex flex-col gap-4 mx-auto mb-2">
      {/* Google Sign In Button */}
      <Button
        variant="outlined"
        startIcon={<GoogleIcon />}
        onClick={handleGoogleSignIn}
        sx={{
          textTransform: "none",
          color: "#000000",
          backgroundColor: "#e5e7e9",
          border: "none",
          transition: "background-color 0.3s ease",
          "&:hover": {
            backgroundColor: "#f8f9f9",
            border: "none",
          },
        }}
      >
        Sign in with Google
      </Button>

      {/* Facebook Sign In Button */}
      <Button
        variant="outlined"
        startIcon={<FacebookIcon />}
        onClick={handleFacebookSignIn}
        sx={{
          textTransform: "none",
          color: "#000000",
          backgroundColor: "#e5e7e9",
          border: "none",
          transition: "background-color 0.3s ease",
          "&:hover": {
            backgroundColor: "#f8f9f9 ",
            border: "none",
          },
        }}
      >
        Sign in with Facebook
      </Button>
    </div>
  );
};

export default GoogleAndFacebookLogin;
