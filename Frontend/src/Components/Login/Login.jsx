import { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/mira-logo.svg";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isCreateAccount, setIsCreateAccount] = useState(false);
  const navigate = useNavigate();

  const handleCreateAccount = () => {
    setIsCreateAccount(true);
    setShowPassword(false);
  };

  const handleSignIn = () => {
    setIsCreateAccount(false);
    setShowPassword(false);
  };

  return (
    <main className="login-page">
      {/* =========================
			    LEFT BRANDING SECTION
			========================= */}

      <section className="brand-section" aria-label="About Mira">
        <Link to="/" className="brand-logo">
          <img src={logo} alt="Mira" className="mira-logo" />
        </Link>

        <div className="brand-content">
          <p className="eyebrow">A MARKETPLACE THAT GETS YOU</p>

          <h1>
            Good finds
            <br />
            start here.
          </h1>

          <p className="brand-description">
            Join a joyful community of shoppers and local sellers across the
            Philippines.
          </p>
        </div>

        <blockquote className="testimonial">
          <p>“Mira makes discovering small local shops feel effortless.”</p>

          <cite>Andrea, Quezon City</cite>
        </blockquote>

        <div className="large-circle" aria-hidden="true" />

        <div className="yellow-circle" aria-hidden="true" />
      </section>

      {/* =========================
			    RIGHT AUTH SECTION
			========================= */}

      <section className="login-section" aria-labelledby="login-heading">
        <div className="login-container">
          {/* =================================================
					    CREATE ACCOUNT PANEL
					================================================= */}

          {isCreateAccount ? (
            <div className="auth-panel">
              <p className="login-eyebrow">JOIN MIRA</p>

              <h2 id="login-heading">Create your account</h2>

              <p className="login-subtitle">Good things are waiting for you.</p>

              <form onSubmit={(event) => event.preventDefault()}>
                {/* EMAIL */}

                <div className="form-group">
                  <label htmlFor="signup-email">Email or phone number</label>

                  <input
                    id="signup-email"
                    name="email"
                    type="text"
                    autoComplete="username"
                    placeholder="you@example.com"
                  />
                </div>

                {/* FULL NAME */}

                <div className="form-group">
                  <label htmlFor="full-name">Full name</label>

                  <input
                    id="full-name"
                    name="fullName"
                    type="text"
                    autoComplete="name"
                    placeholder="Your full name"
                  />
                </div>

                {/* PASSWORD */}

                <div className="form-group">
                  <label htmlFor="signup-password">Password</label>

                  <div className="password-wrapper">
                    <input
                      id="signup-password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      autoComplete="new-password"
                      placeholder="At least 8 characters"
                    />

                    <button
                      type="button"
                      className="password-toggle"
                      onClick={() => setShowPassword((visible) => !visible)}
                      aria-label={
                        showPassword ? "Hide password" : "Show password"
                      }
                    >
                      {showPassword ? "Hide" : "Show"}
                    </button>
                  </div>
                </div>

                {/* PASSWORD STRENGTH */}

                <div className="password-strength">
                  <span className="active" />
                  <span />
                  <span />
                  <span />
                </div>

                <p className="password-hint">
                  Use 8+ characters with a number and symbol
                </p>

                {/* TERMS */}

                <label className="terms">
                  <input type="checkbox" name="terms" />

                  <span>I agree to the Terms & Privacy Policy</span>
                </label>

                {/* CREATE ACCOUNT BUTTON */}

                <button className="sign-in-button" type="submit">
                  Create account
                  <span aria-hidden="true">→</span>
                </button>
              </form>

              {/* DIVIDER */}

              <div className="divider">
                <span />

                <p>or continue with</p>

                <span />
              </div>

              {/* SOCIAL BUTTONS */}

              <div className="social-buttons">
                <button className="social-button" type="button">
                  <span className="google-icon">G</span>
                  Google
                </button>

                <button className="social-button" type="button">
                  <span className="apple-icon">●</span>
                  Apple
                </button>
              </div>

              {/* SWITCH TO SIGN IN */}

              <p className="create-account">
                Already have an account?
                <button
                  type="button"
                  className="switch-button"
                  onClick={handleSignIn}
                >
                  Sign in
                </button>
              </p>
            </div>
          ) : (
            /* =================================================
						   SIGN IN PANEL
						================================================= */

            <div className="auth-panel">
              <p className="login-eyebrow">WELCOME BACK</p>

              <h2 id="login-heading">Sign in to Mira</h2>

              <p className="login-subtitle">
                Enter your details to pick up where you left off.
              </p>

              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  navigate("/");
                }}
              >
                {/* EMAIL */}

                <div className="form-group">
                  <label htmlFor="email">Email or phone number</label>

                  <input
                    id="email"
                    name="email"
                    type="text"
                    autoComplete="username"
                    placeholder="you@example.com"
                  />
                </div>

                {/* PASSWORD */}

                <div className="form-group">
                  <label htmlFor="password">Password</label>

                  <div className="password-wrapper">
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      autoComplete="current-password"
                      placeholder="Enter your password"
                    />

                    <button
                      type="button"
                      className="password-toggle"
                      onClick={() => setShowPassword((visible) => !visible)}
                      aria-label={
                        showPassword ? "Hide password" : "Show password"
                      }
                    >
                      {showPassword ? "Hide" : "Show"}
                    </button>
                  </div>
                </div>

                {/* REMEMBER / FORGOT PASSWORD */}

                <div className="login-options">
                  <label className="remember">
                    <input type="checkbox" name="remember" />

                    <span>Remember me</span>
                  </label>

                  <a className="forgot-password" href="/forgot-password">
                    Forgot password?
                  </a>
                </div>

                {/* SIGN IN BUTTON */}

                <button className="sign-in-button" type="submit">
                  Sign in
                  <span aria-hidden="true">→</span>
                </button>
              </form>

              {/* DIVIDER */}

              <div className="divider">
                <span />

                <p>or continue with</p>

                <span />
              </div>

              {/* SOCIAL BUTTONS */}

              <div className="social-buttons">
                <button className="social-button" type="button">
                  <span className="google-icon">G</span>
                  Google
                </button>

                <button className="social-button" type="button">
                  <span className="apple-icon">●</span>
                  Apple
                </button>
              </div>

              {/* SWITCH TO CREATE ACCOUNT */}

              <p className="create-account">
                New to Mira?
                <button
                  type="button"
                  className="switch-button"
                  onClick={handleCreateAccount}
                >
                  Create an account
                </button>
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Login;
