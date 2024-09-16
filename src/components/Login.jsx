import { useNavigate } from "react-router-dom";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import "../Styles/Login.css";


const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="login-container">
      <div className="login-content">
        <h1 className="login-title">Welcome Back</h1>
        <p className="login-description">
          Please sign in to access your dashboard and manage your preferences.
        </p>
        <div className="auth-buttons">
          <SignedOut>
            <SignInButton>
              <button className="signin-btn">Sign In</button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <button
              className="navigate-btn"
              onClick={() => navigate("/home")}
            >
              Go to Dashboard
            </button>
            <UserButton className="user-btn">Profile</UserButton>
          </SignedIn>
        </div>
      </div>
    </div>
  );
};

export default Login;
