import React, { useState } from 'react';
import EmailVerification from './forgot';
import OtpVerification from './otp-verification';
import ResetPassword from './reset-password';

const Forgot = () => {
  const nextPage = () => setStep((prev) => prev + 1);

  const steps = [
    <EmailVerification onSubmit={nextPage} />,
    <OtpVerification onSubmit={nextPage} />,
    <ResetPassword onSubmit={nextPage} />,
  ];

  const [step, setStep] = useState(0);
  if (step < 3) {
    return steps[step];
  }
  return <div>Ngu lòn</div>;
};

export default Forgot;
