import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Results({ userInput }) {
  const res=calculateInvestmentResults(userInput);
   const initialInvestment =  res[0].valueEndOfYear - res[0].interest - res[0].annualInvestment;
  console.log(res);
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {calculateInvestmentResults(userInput).map((result, index) => {
          const totalInterest = result.valueEndOfYear - result.annualInvestment * result.year - initialInvestment;
          const totalAmountInvested = result.valueEndOfYear - totalInterest;
          return (
            <tr key={index}>
              <td>{result.year}</td>
              <td>{formatter.format(result.valueEndOfYear)}</td>
              <td>{formatter.format(result.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(result.totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
