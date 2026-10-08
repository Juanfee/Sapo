import { useState } from 'react';

import Hero from './components/Hero/Hero';
import Timeline from './components/Timeline/Timeline';
import FinalMessage from './components/Final/Final';
import './App.css';

function App() {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const previousStep = () => {
    setCurrentStep((prev) => prev - 1);
  };

  return (
    <main className="main">
      {currentStep === 0 && <Hero />}

      {currentStep === 1 && <Timeline />}

      {currentStep === 2 && <FinalMessage />}
      <div className="navigation">
        {currentStep > 0 && <button onClick={previousStep}>←</button>}

        {currentStep < 2 && <button onClick={nextStep}>→</button>}
      </div>
    </main>
  );
}

export default App;
