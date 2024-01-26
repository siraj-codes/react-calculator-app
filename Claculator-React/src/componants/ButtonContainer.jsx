import styles from "./ButtonContainer.module.css";
let Buttons = [
  "C",
  "1",
  "2",
  "3",
  "4",
  "+",
  "-",
  "5",
  "6",
  "7",
  "*",
  "=",
  "8",
  "9",
  "0",
  ".",
];
const ButtonContainer = ({ onButtonClick }) => {
  return (
    <div className={styles.buttonsContainer}>
      {Buttons.map((values) => (
        <button
          key={values}
          className={styles.button}
          onClick={() => onButtonClick(values)}
        >
          {values}
        </button>
      ))}
    </div>
  );
};

export default ButtonContainer;
