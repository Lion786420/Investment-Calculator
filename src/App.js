import InvestmentForm from "./components/InvestmentForm";
import InvestmentResults from "./components/InvestmentResults";
import Header from "./components/Header";
import { useState } from "react";
import styles from "./index.module.css";

function App() {
  const [results, updateYearlyData] = useState(null);
  const calculateHandler = (userInput) => {
    let currentSavings = +userInput["current-savings"];
    let initialInvestment = currentSavings;
    const yearlyContribution = +userInput["yearly-contribution"]; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];

    const yearlyData = [];
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
        initialInvestment: initialInvestment,
      });
    }
    updateYearlyData(yearlyData);
  };

  return (
    <div>
      <Header />

      <InvestmentForm calculator={calculateHandler} />

      {results === null ? (
        <p className={styles.empty}>No data given</p>
      ) : (
        <InvestmentResults results={results} />
      )}
    </div>
  );
}

export default App;
