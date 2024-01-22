import styles from "./InvestmentForm.module.css";
import { useState } from "react";

const InvestmentForm = (props) => {
  const [savings, savingsHandler] = useState("");
  const [contribution, contributionHandler] = useState("");
  const [returns, returnsHandler] = useState("");
  const [duration, durationHandler] = useState("");

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const formInput = {
      "current-savings": savings,
      "yearly-contribution": contribution,
      "expected-return": returns,
      duration: duration,
    };
    savingsHandler("");
    contributionHandler("");
    durationHandler("");
    returnsHandler("");
    props.calculator(formInput);
  };

  const resetHandler = () => {
    savingsHandler("");
    contributionHandler("");
    durationHandler("");
    returnsHandler("");
  };

  const savingsChangeHandler = (e) => {
    savingsHandler(e.target.value);
  };
  const contributionChangeHandler = (e) => {
    contributionHandler(e.target.value);
  };
  const returnsChangeHandler = (e) => {
    returnsHandler(e.target.value);
  };
  const durationChangeHandler = (e) => {
    durationHandler(e.target.value);
  };

  return (
    <form className={styles.form} onSubmit={formSubmitHandler}>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id={styles["current-savings"]}
            onChange={savingsChangeHandler}
            value={savings}
            required
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id={styles["yearly-contribution"]}
            onChange={contributionChangeHandler}
            value={contribution}
            required
          />
        </p>
      </div>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id={styles["expected-return"]}
            onChange={returnsChangeHandler}
            value={returns}
            required
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id={styles.duration}
            onChange={durationChangeHandler}
            value={duration}
            required
          />
        </p>
      </div>
      <p className={styles.actions}>
        <button
          type="reset"
          className={styles["buttonAlt"]}
          onClick={resetHandler}
        >
          Reset
        </button>
        <button type="submit" className={styles.button}>
          Calculate
        </button>
      </p>
    </form>
  );
};

export default InvestmentForm;
