function Header() {
  return (
    <header className="header">
      <div className="header-logo">
        <a href="https://www.scaleflex.com/en/home" target="_blank" rel="noreferrer">
          <img src="https://scaleflex.cloudimg.io/v7/demo/cloudimage-responsive-demo/Logo.svg" alt="scaleflex logo" />
        </a>
        <a
          className="cloud-img-title"
          href="https://github.com/scaleflex/js-cloudimage-responsive"
          target="_blank"
          rel="noreferrer"
        >
          JS Cloudimage Responsive
        </a>
      </div>
      <div className="navbar">
        <a
          className="stars-button"
          href="https://github.com/scaleflex/js-cloudimage-responsive/stargazers"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="github-icons"
            src="https://scaleflex.cloudimg.io/v7/assets/cloudimage-responsive-assets/star-icon.svg"
            alt="star"
          />
          <img
            className="stars-numbers"
            src="https://img.shields.io/github/stars/scaleflex/js-cloudimage-responsive?logo=none&style=social"
            alt="star-img"
          />
        </a>
        <a
          className="git-button"
          href="https://github.com/scaleflex/js-cloudimage-responsive"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="github-icons"
            src="https://scaleflex.cloudimg.io/v7/assets/cloudimage-responsive-assets/github-icon.svg"
            alt="github-icon"
          />
          GitHub
        </a>
      </div>
    </header>
  );
}

export default Header;
