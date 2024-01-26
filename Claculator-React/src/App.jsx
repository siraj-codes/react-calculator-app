import styles from "./App.module.css";
import Display from "./componants/display";
import ButtonContainer from "./componants/ButtonContainer";
import { useState } from "react";

function App() {
  const [calVal, setcalVal] = useState("");

  const onButtonClick = (ButtonText) => {
    if (ButtonText === "C") {
      setcalVal(" ");
    } else if (ButtonText === "=") {
      const calculation = eval(calVal);
      setcalVal(calculation);
    } else {
      const newDisplayValue = calVal + ButtonText;
      setcalVal(newDisplayValue);
    }
  };

  return (
    <div className={styles.calculator}>
      <Display displayValue={calVal}></Display>
      <ButtonContainer onButtonClick={onButtonClick}></ButtonContainer>
    </div>
  );
}

export default App;

// import "bootstrap/dist/css/bootstrap.min.css";
