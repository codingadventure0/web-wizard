import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section about">
          <h2>Ishwar.dev</h2>
          <p>Building the future, one line of code at a time.</p>
        </div>

        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">Skills</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>

        <div className="footer-section social">
          <div className="social-icons">
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="/icons8-linkedin-50.png">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} ishwar . Built with React + Vite +
          Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
