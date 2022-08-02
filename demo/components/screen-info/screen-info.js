import { useEffect, useState } from 'react';


function ScreenInfo({ footerRef }) {
  const [screenWidth, setScreenWidth] = useState(0);
  const [dpr, setDpr] = useState(0);
  const [styles, setStyles] = useState({});

  const checkElementVisibility = (boundryElement) => {
    const rect = boundryElement.getBoundingClientRect();
    const offset = 250;

    return rect.bottom - offset <= window.innerHeight;
  };

  const hideWindowBoxSize = () => {
    const isFooterSectionVisible = checkElementVisibility(footerRef.current);

    if (isFooterSectionVisible) {
      setStyles({ transform: 'translateX(336px)' });
    } else {
      setStyles({ transform: 'translate(0)' });
    }
  };

  const updateScreenWidth = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    setScreenWidth(window.innerWidth);
    setDpr(window.devicePixelRatio);

    window.addEventListener('scroll', hideWindowBoxSize);
    window.addEventListener('resize', updateScreenWidth);

    return () => {
      window.removeEventListener('resize', updateScreenWidth);

      window.removeEventListener('scroll', hideWindowBoxSize);
    };
  }, []);

  return (
    <div className="device-pixel-ratio" style={styles}>
      <div className="label">
        Your device pixel ratio:
        <div className="window-width-box">
          <span>{dpr}</span>
        </div>
      </div>
      <div className="label">
        Your device width:
        <div className="window-width-box">
          <span>
            {screenWidth}
            px
          </span>
        </div>
      </div>
    </div>
  );
}

export default ScreenInfo;
