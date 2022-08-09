function Footer({ footerRef }) {
  return (
    <section className="footer" ref={footerRef}>
      <div className="accordion-wrapper">
        <div>
          <div className="filerobot-accordion">
            <button
              data-accordion="2"
              type="button"
            >
              Info
            </button>
            <img
              data-accordion="2"
              src="https://scaleflex.cloudimg.io/v7/assets/cloudimage-responsive-assets/down-arrow-icon.png"
              alt="down-arrow"
            />
          </div>
          <div className="accordion-content" data-accordion-content="2">
            <div className="footer-info-content">
              <a
                href="https://github.com/scaleflex/next-cloudimage-responsive"
                target="_blank"
                rel="noreferrer"
              >
                View GitHub
              </a>
              <a
                href="https://github.com/scaleflex/next-cloudimage-responsive/issues/"
                target="_blank"
                rel="noreferrer"
              >
                Current Issues
              </a>
              <a
                href="https://github.com/scaleflex/next-cloudimage-responsive#table_of_contents"
                target="_blank"
                rel="noreferrer"
              >
                Documentation
              </a>
            </div>
          </div>
        </div>
        <div>
          <div className="filerobot-accordion">
            <button
              type="button"
              data-accordion="1"
            >
              Filerobot
            </button>
            <img
              data-accordion="1"
              src="https://scaleflex.cloudimg.io/v7/assets/cloudimage-responsive-assets/down-arrow-icon.png"
              alt="down-arrow"
            />
          </div>
          <div className="accordion-content" data-accordion-content="1">
            <div className="footer-filerobot-content">
              <a
                href="https://scaleflex.cloudimg.io/v7/plugins/filerobot-widget/demo/index.html?func=proxy&fmaw_path=/"
                target="_blank"
                rel="noreferrer"
              >
                Filerobot Media Asset Widget
              </a>
              <a
                href="https://scaleflex.github.io/filerobot-image-editor/"
                target="_blank"
                rel="noreferrer"
              >
                Filerobot Image Editor
              </a>
              <a
                href="https://scaleflex.github.io/js-cloudimage-responsive/"
                target="_blank"
                rel="noreferrer"
              >
                Cloudimage Responsive
              </a>
              <a
                href="https://scaleflex.github.io/js-cloudimage-360-view/"
                target="_blank"
                rel="noreferrer"
              >
                Cloudimage 360 view
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="navbar">
        <a
          className="github"
          href="https://github.com/scaleflex/next-cloudimage-responsive"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://scaleflex.cloudimg.io/v7/assets/cloudimage-responsive-assets/github-icon.svg"
            alt="github-icon"
          />
          <p>GitHub</p>
        </a>
      </div>
      <div className="footer-logo">
        <a href="https://www.scaleflex.com/en/home" target="_blank" rel="noreferrer">
          <img src="https://scaleflex.cloudimg.io/v7/demo/cloudimage-responsive-demo/Logo.svg" alt="scaleflex-logo" />
        </a>
        <p>
          Made with ❤ by the
          <span>
            <a href=" https://scaleflex.com/en/home" target="_blank"> Scaleflex </a>
          </span>
          team, the guys behind
          <span>
            {' '}
            <a
              href=" https://cloudimage.io/en/home"
              target="_blank"
            >
              Cloudimage.io
            </a>

          </span>
          . Powered by
          <span>
            {' '}
            <a href="https://filerobot.com/en/home" target="_blank" rel="noreferrer">Filerobot</a>
          </span>
          . All rights reserved.
        </p>
        <div className="footer-blur-circle" />
      </div>
      <div className="footer-wrapper">
        <div className="footer-info">
          <p>Info</p>
          <div className="footer-info-content">
            <a
              href="https://github.com/scaleflex/next-cloudimage-responsive"
              target="_blank"
              rel="noreferrer"
            >
              View GitHub
            </a>
            <a
              href="https://github.com/scaleflex/next-cloudimage-responsive/issues/"
              target="_blank"
              rel="noreferrer"
            >
              Current Issues
            </a>
            <a
              href="https://github.com/scaleflex/next-cloudimage-responsive#table_of_contents"
              target="_blank"
              rel="noreferrer"
            >
              Documentation
            </a>
          </div>
        </div>
        <div className="footer-filerobot">
          <h4>Filerobot UI Family</h4>
          <div className="footer-filerobot-content">
            <a
              href="https://scaleflex.cloudimg.io/v7/plugins/filerobot-widget/demo/index.html?func=proxy&fmaw_path=/"
              target="_blank"
              rel="noreferrer"
            >
              Filerobot Media Asset Widget
            </a>
            <a
              href="https://scaleflex.github.io/filerobot-image-editor/"
              target="_blank"
              rel="noreferrer"
            >
              Filerobot Image Editor
            </a>
            <a
              href="https://scaleflex.github.io/js-cloudimage-responsive/"
              target="_blank"
              rel="noreferrer"
            >
              Cloudimage Responsive
            </a>
            <a
              href="https://scaleflex.github.io/js-cloudimage-360-view"
              target="_blank"
              rel="noreferrer"
            >
              Cloudimage 360 view
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
