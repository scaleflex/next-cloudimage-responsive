function Usage() {
  return (
    <section className="usage-section">
      <div className="usage-content container-fluid">
        <h2>How it works</h2>
        <p>
          <span>
            The plugin smartly detects the width of the image's container and pixel ratio density of your device
            to load the exact image size you'll need. Images are processed via Cloudimage.io service,
            which offers comprehensive automated image optimization solutions.
            {' '}

          </span>
          <br />
          <span>
            Upon upload, Cloudimage's resizing servers will automatically download your origin image from
            the origin server, resize and deliver it to your user via lightning-fast Content Delivery Networks (CDNs).
            Once the image is resized in the format of your choice, Cloudimage sends it again to a CDN, which
            in turn delivers it rocket fast to your visitors, responsively across various screen sizes.
          </span>
          <br />
          <span>
            Find out more about
            <strong>
              <a
                href="https://www.cloudimage.io/en/home"
                target="_blank"
                rel="noreferrer"
              >
                Cloudimage.io.
              </a>
            </strong>
          </span>
        </p>
      </div>
    </section>
  );
}

export default Usage;
