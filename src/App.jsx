import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 0.07,
    duration: 10,
  });

  const isValidInput = userInput.duration >= 1;

  const handleChange = (e) => {
    setUserInput({ ...userInput, [e.target.name]: +e.target.value });
  };

  // function handleChange(event){
  //     setUserInput(prevUserInput => {
  //         console.log(userInput);
  //         return {
  //             ...prevUserInput,
  //             [event.target.name]: event.target.value
  //         }
  //     });
  // }  
  return (
    <>
      <Header />
      <UserInput onChange={handleChange} userInput={userInput}/>
      {!isValidInput && <p className="center">Please input a valid input data</p>}
      {isValidInput && <Results userInput={userInput}/>}
    </>
  );
}

export default App;
