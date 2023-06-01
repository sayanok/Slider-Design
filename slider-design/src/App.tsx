import React, { useState } from "react";

const App: React.FC = () => {
  const images = ["labradorite.jpg", "drop.jpg", "gardenquartz.jpg", "sonzai.jpg", "sonzaikoumaru.jpg"];
  const [currentNumber, setCurrentNumber] = useState(0);

  function onClickHandler(buttonType: string) {
    if (buttonType === "previous") {
      currentNumber === 0 ? setCurrentNumber(images.length - 1) : setCurrentNumber(currentNumber - 1);
    } else {
      currentNumber + 1 === images.length ? setCurrentNumber(0) : setCurrentNumber(currentNumber + 1);
    }
  }

  return (
    <>
      <p>かわいい指輪ですねぇ</p>
      <img src={`/images/` + images[currentNumber]} width="500" alt="かわいい指輪"></img>
      <button onClick={() => onClickHandler("previous")}>previous</button>
      <button onClick={() => onClickHandler("next")}>next</button>
    </>
  );
};

export default App;
