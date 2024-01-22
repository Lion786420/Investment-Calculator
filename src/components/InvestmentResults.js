import styles from "./InvestmentResults.module.css";

const InvestmentResults = (props) => {
  return (
    <table className={styles.result}>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {props.results.map((result) => (
          <tr>
            <td>{result.year}</td>
            <td>{result.savingsEndOfYear}</td>
            <td>{result.yearlyInterest}</td>
            <td>
              {result.savingsEndOfYear -
                result.initialInvestment -
                result.yearlyContribution * result.year}
            </td>
            <td>
              {result.yearlyContribution * result.year +
                result.initialInvestment}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default InvestmentResults;
