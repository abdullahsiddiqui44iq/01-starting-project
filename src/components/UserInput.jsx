import { useState } from "react";

export default function UserInput({ onChange, userInput }) {
  
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="Initial investment">Initial Investment</label>
          <input
            type="number"
            required
            name="initialInvestment"
            value={userInput.initialInvestment}
            onChange={onChange}
            />
        </p>
        <p>
          <label htmlFor="Annual investment">Annual Investment</label>
          <input
            type="number"
            required
            name="annualInvestment"
            value={userInput.annualInvestment}
            onChange={onChange}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="Initial investment">Expected Return</label>
          <input
            type="number"
            required
            name="expectedReturn"
            value={userInput.expectedReturn}
            onChange={onChange}
          />
        </p>
        <p>
          <label htmlFor="Initial investment">Duration</label>
          <input
            type="number"
            required
            name="duration"
            value={userInput.duration}
            onChange={onChange}
          />
        </p>
      </div>
    </section>
  );
}
