import { BackgroundImg } from '../../../src';


function BackgroundSection() {
  const codeblock = `
  <BackgroundImg
    src="ameen-fahmy.jpg"
    params="func=crop"
  >
    ...your content...
  </BackgroundImg>
  `;

  const copyTextToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  const copyBackgroundCode = (event) => {
    const copyButton = event.currentTarget.getElementsByTagName('p')[0];

    copyTextToClipboard(codeblock);
    copyButton.innerHTML = 'Copied';

    setTimeout(() => {
      copyButton.innerHTML = 'Copy';
    }, 500);
  };

  return (
    <BackgroundImg
      className="background-images-section"
      src="BG+image.jpg"
      params="ci_info=0"
    >
      <div className="images-content">
        <h2>Use with background images</h2>
        <div className="images-code-wrapper">
          <div
            role="button"
            tabIndex="0"
            className="copy-wrapper"
            onClick={copyBackgroundCode}
          >
            <img
              src="https://scaleflex.cloudimg.io/v7/assets/cloudimage-responsive-assets/copy-icon.svg"
              alt="copy"
            />
            <p>Copy</p>
          </div>
          <pre className="code">
            {codeblock}
          </pre>
        </div>
      </div>
    </BackgroundImg>
  );
}

export default BackgroundSection;
