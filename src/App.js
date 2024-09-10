import React, { useState } from 'react';
import './App.css';
import loveGif from './lovegif.gif'; 

function App() {
  const [yesButtonSize, setYesButtonSize] = useState(16); 
  const [noButtonText, setNoButtonText] = useState("No");
  const [noClickCount, setNoClickCount] = useState(0);
  const [showContent, setShowContent] = useState(true);

  const noResponses = [
    "Serious ah va", "Poda pota, please", "enaku vera yaaru irukhanga", "Ego ahhh", 
    "Please purinjiko", "Dei unaku vera enna vazhi", "Enna mela cheat panra", "Adingu", 
    "Un veetuku vandhuduven"
  ];

  const handleNoClick = () => {
    setYesButtonSize(yesButtonSize + 20); 
    if (noClickCount < 9) {
      setNoButtonText(noResponses[noClickCount]);
      setNoClickCount(noClickCount + 1);
    } else {
      setNoButtonText("Un veetuku vandhuduven");
    }
  };

  const handleYesClick = () => {
    setShowContent(false); 
  };

  if (!showContent) {
    return <div className="centered">
      <div>
      <img src={loveGif} alt="lovegif" />
      </div>
      <div>
       <p>AWW BABY! YAY!</p>
       </div>
    </div>;
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>Will you be my Valentine?</p>
        <div style={{ display: 'inline-block'}}>
          <button className="yes-button" style={{ fontSize: `${yesButtonSize}px` }} onClick={handleYesClick}>Yes</button>
          <button className="no-button" onClick={handleNoClick}>{noButtonText}</button>
        </div>
      </header>
  </div>
  );
}

export default App;
