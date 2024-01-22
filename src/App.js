import logo from "./assets/investment-calculator-logo.png";
import InvestmentForm from "./components/InvestmentForm";
import InvestmentResults from "./components/InvestmentResults";
import Header from "./components/Header";

function App() {
  const calculateHandler = (userInput) => {
    let currentSavings = +userInput["current-savings"]; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput["yearly-contribution"]; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];

    const yearlyData = [];
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  };

  return (
    <div>
      <Header />

      <InvestmentForm calculator={calculateHandler} />

      {yearlyData === undefined ? (
        <p>No data given</p>
      ) : (
        <InvestmentResults data={yearlyData} />
      )}
    </div>
  );
}

export default App;
