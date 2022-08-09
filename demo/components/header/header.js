function Header() {
  return (
    <header className="header">
      <div className="header-logo">
        <a href="https://www.scaleflex.com/en/home" target="_blank" rel="noreferrer">
          <img
            width={170}
            height={43}
            src="https://scaleflex.cloudimg.io/v7/demo/cloudimage-responsive-demo/Logo.svg"
            alt="scaleflex logo"
          />
        </a>
        <a
          className="cloud-img-title"
          href="https://github.com/scaleflex/next-cloudimage-responsive"
          target="_blank"
          rel="noreferrer"
        >
          Next.js Cloudimage Responsive
        </a>
      </div>
      <div className="navbar">
        <a
          className="git-button"
          href="https://github.com/scaleflex/next-cloudimage-responsive"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="github-icons"
            width={20}
            height={17}
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
