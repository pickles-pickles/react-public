import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__socials">
          <a
            href="https://github.com/pickles-pickles"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="footer__icon"
          >
            <i className="fa fa-github" />
          </a>

          <a
            href="https://www.linkedin.com/in/chris-georgakopoulos-web-dev"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="footer__icon"
          >
            <i className="fa fa-linkedin" />
          </a>

          <a
            href="mailto:c.georgak727@gmail.com"
            aria-label="Email"
            className="footer__icon"
          >
            <i className="fas fa-envelope" />
          </a>

          <a
            href="https://drive.google.com/file/d/1sUmc_BFLvq_Fn4NnfuJ8OU-oXyqM_cIk/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Resume"
            className="footer__icon"
          >
            <i className="fas fa-file-alt" />
          </a>
        </div>

        <p className="footer__copyright">
          © 2026 Chris Georgakopoulos
        </p>
      </div>
    </footer>
  );
};

export default Footer;