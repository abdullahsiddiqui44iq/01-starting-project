import reactImage from "../assets/investment-calculator-logo.png";
export default function Header() {
  return (
    <header id="header">
      <img src={reactImage} alt="header Image" />
      <h1>Investment Calculator</h1>
    </header>
  );
}
