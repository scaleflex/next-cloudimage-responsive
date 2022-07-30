import { Img } from '../../src';


function Crop() {
  return (
    <section className="crop-images-section">
      <div className="crop-images-wrapper container-fluid">
        <h2>Crop images, your way</h2>
        <p className="crop-section-title">
          Resize your browser window to see how it works.
        </p>
        <div className="crop-options">
          <div className="crop-options-content">
            <h3>Original Image</h3>
            <p>Resize your browser's window to see how it works.</p>
            <Img
              src="shayna-douglas-VibRcV8tMDM-unsplash.jpg"
              params="func=fit&w=400&h=400&bg_colour=f2f7fa"
            />
            <pre className="original-image-code-block">
              &lt;
              <strong className="code-yellow-color">Img</strong>
              <span className="code-yellow-color">src</span>
              ="
              <strong className="code-blue-color">https://scaleflex.cloudimg.io/v7/demo/cloudimage-responsive-demo/shayna-douglas-VibRcV8tMDM-unsplash.jpg</strong>
              "
              {'/>'}
              {' '}
            </pre>
          </div>
          <div className="crop-options-content">
            <h3>Simple Crop</h3>
            <p>
              A simple crop cuts the same part from every side.
            </p>
            <Img
              src="shayna-douglas-VibRcV8tMDM-unsplash.jpg"
              params="func=crop&w=400&h=400"
            />
            <pre className="original-image-code-block">
              &lt;
              <span className="code-yellow-color">Img</span>
              <span className="code-yellow-color">src</span>
              ="
              <span className="code-blue-color">unsplash.jpg</span>
              "
              <span className="code-yellow-color">ci-params</span>
              ="func=crop&w=400&h=400"
              /&gt;
            </pre>
          </div>
          <div className="crop-options-content">
            <h3>Auto Crop</h3>
            <p>
              Artificial intelligence finds the main object and smartly crops the image to ensure
              it turns out strictly in the center.
            </p>
            <Img
              src="shayna-douglas-VibRcV8tMDM-unsplash.jpg"
              params="w=400&h=400&func=crop&gravity=auto"
            />
            <pre className="original-image-code-block">
              <span className="code-yellow-color">&lt;Img</span>
              <span className="code-yellow-color">src</span>
              ="
              <span className="code-blue-color">unsplash.jpg</span>
              "
              <span className="code-yellow-color">ci-params</span>
              ="func=crop&w=400&h=400&gravity=auto"
              /&gt;
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Crop;
