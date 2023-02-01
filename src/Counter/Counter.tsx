import { useState } from 'react';

function Counter(): JSX.Element {
  // переменная состояния
  const [num, setNum] = useState(0);
  const [step, setStep] = useState(1);

  const handleMinusClick = (): void => {
    setNum(num - step);
  };
  const handlePlusClick = (): void => {
    setNum(num + step);
  };
  const handleStepChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setStep(Number(event.target.value));
  };

  return (
    <div>
      <div>
        <button onClick={handleMinusClick}>-</button> {num}{' '}
        <button onClick={handlePlusClick}>+</button>
      </div>
      <input value={step} onChange={handleStepChange} />
    </div>
  );
}

export default Counter;
