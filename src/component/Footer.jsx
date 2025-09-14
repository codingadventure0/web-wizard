import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-heading">
        <div>
          <h3>Ishwar.dev</h3>
        </div>

        <div>
          <p>Building the future, one line of code at a time.</p>
        </div>
      </div>

      <div className="footer-link">
        <a href="">Project</a>
        <a href="">Skills</a>
        <a href="">Contact</a>

        <div className="social-icons">
          <a href="#">
            <img src="/icons8-insta-50.png" alt="Instagram" />
          </a>
          <a href="./icons8-linkedin-50.png">
            <img src="/icons8-linkedin-50.png" alt="LinkedIn" />
          </a>
          <a href="#">
            <img src="icons8-github-50.png" alt="github" />
          </a>
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
