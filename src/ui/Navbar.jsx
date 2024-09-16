import {
  SignInButton,
  SignUpButton,
  UserButton,
  useUser,
} from "@clerk/clerk-react";
import "../Styles/Navbar.css";

const Navbar = () => {
  const { isSignedIn } = useUser();

  return (
    <nav className="navbar">
      <a href="/" className="logo-link">
        <div className="logo">
          <div className="seeds">
            {/* Map to create seed elements */}
            {Array.from({ length: 5 }, (_, index) => (
              <div key={index} className="seed"></div>
            ))}
          </div>
        </div>
      </a>
      <div className="nav-links">
        {isSignedIn ? (
          // Show the UserButton for user settings, logout, etc.
          <UserButton />
        ) : (
          <>
            <SignInButton mode="modal">
              <button className="nav-btn login-btn">Login</button>
            </SignInButton>
            <SignUpButton mode="modal">
              <button className="nav-btn signup-btn">Sign Up</button>
            </SignUpButton>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
