import { calculateInvestmentResults } from "../util/investment";

export default function Results({ userInput }) {
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Initial Investment</th>
          <th>Annual Investment</th>
          <th>Interest Earned</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {calculateInvestmentResults(userInput).map((result, index) => {
          return (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{result.initialInvestment}</td>
              <td>{result.annualInvestment}</td>
              <td>{result.interestEarned}</td>
              <td>{result.total}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
