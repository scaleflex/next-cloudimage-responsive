function Sizes() {
  return (
    <section className="numbers-section container-fluid">
      <div className="numbers-section-title">
        <h2>Let's look at the numbers!</h2>
        <p>
          Using an example of our original image stored via CDN with 6240x4160 px resolution and 8.7mb size:
          <a
            target="_blank"
            href="https://scaleflex.cloudimg.io/v7/demo/redcharlie.jpg"
            rel="noreferrer"
          >
            https://scaleflex.cloudimg.io/v7/demo/redcharlie.jpg,
          </a>
          let's explore in the table below, what size and resolution will be loaded depending on the image's container.
        </p>
      </div>
      <div className="images-dimensions-table">
        <div className="table-header">
          <p>Container size</p>
          <p>Pixel Ratio Density</p>
          <p>Calculated Width</p>
          <p>Result: Dimensions | Size | Link</p>
        </div>
        <div className="table-row">
          <p className="content"><span className="yellow-color">400 px</span></p>
          <div className="content">
            <p>1</p>
            <p>2</p>
          </div>
          <div className="content">
            <p>400 px</p>
            <p>800 px</p>
          </div>
          <div className="content">
            <p>
              400 x 267 | 42.3 kb |
              {' '}
              <a target="_blank" href="https://scaleflex.cloudimg.io/v7/demo/redcharlie.jpg?w=400" className="cyan-color" rel="noreferrer">Link</a>
            </p>
            <p>
              800 x 533 | 159 kb |
              {' '}
              <a target="_blank" href="https://scaleflex.cloudimg.io/v7/demo/redcharlie.jpg?w=800" className="cyan-color" rel="noreferrer">Link</a>
            </p>
          </div>
        </div>
        <div className="table-row">
          <p className="content"><span className="yellow-color">570 px</span></p>
          <div className="content">
            <p>1</p>
            <p>2</p>
          </div>
          <div className="content">
            <p>600 px</p>
            <p>1200 px</p>
          </div>
          <div className="content">
            <p>
              600 x 400 | 91.5 kb |
              {' '}
              <a target="_blank" href="https://scaleflex.cloudimg.io/v7/demo/redcharlie.jpg?w=600" className="cyan-color" rel="noreferrer">Link</a>
            </p>
            <p>
              1200 x 800 | 337 kb |
              {' '}
              <a target="_blank" href="https://scaleflex.cloudimg.io/v7/demo/redcharlie.jpg?w=1200" className="cyan-color" rel="noreferrer">Link</a>
            </p>
          </div>
        </div>
        <div className="table-row">
          <p className="content"><span className="yellow-color">720 px</span></p>
          <div className="content">
            <p>1</p>
            <p>2</p>
          </div>
          <div className="content">
            <p>800 px</p>
            <p>1600 px</p>
          </div>
          <div className="content">
            <p>
              800 x 533 | 159 kb |
              {' '}
              <a target="_blank" href="https://scaleflex.cloudimg.io/v7/demo/redcharlie.jpg?w=800" className="cyan-color" rel="noreferrer">Link</a>
            </p>
            <p>
              1600 x 1066 | 569 kb |
              {' '}
              <a target="_blank" href="https://scaleflex.cloudimg.io/v7/demo/redcharlie.jpg?w=1600" className="cyan-color" rel="noreferrer">Link</a>
            </p>
          </div>
        </div>
        <div className="table-row">
          <p className="content"><span className="yellow-color">1170 px</span></p>
          <div className="content">
            <p>1</p>
            <p>2</p>
          </div>
          <div className="content">
            <p>1200 px</p>
            <p>2400 px</p>
          </div>
          <div className="content">
            <p>
              1200 x 800 | 337 kb |
              {' '}
              <a target="_blank" href="https://scaleflex.cloudimg.io/v7/demo/redcharlie.jpg?w=1200" className="cyan-color" rel="noreferrer">Link</a>
            </p>
            <p>
              2400 x 1600 | 1.2 mb |
              {' '}
              <a target="_blank" href="https://scaleflex.cloudimg.io/v7/demo/redcharlie.jpg?w=2400" className="cyan-color" rel="noreferrer">Link</a>
            </p>
          </div>
        </div>
      </div>
      <p className="table-text">
        * The plugin rounds up the container width to the next possible value which can be divided
        by 100 (configurable) without the remainder. It's done for caching reasons so that we don't cache images
        that are different by 1px, but only 100px, 200px, and 300px...
      </p>
    </section>
  );
}


export default Sizes;
