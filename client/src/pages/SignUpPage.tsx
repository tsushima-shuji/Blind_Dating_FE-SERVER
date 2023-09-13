import NoHeaderFooterLayout from 'components/layout/NoHeaderFooterLayout';
import { IntroductionForm } from 'components/sign-up/introduction/IntroductionForm';
import PersonalityTestForm from 'components/sign-up/personality-test/PersonalityTestForm';
import { ProfileDetailsForm } from 'components/sign-up/profile-details/ProfileDetailsForm';
import { ProfileForm } from 'components/sign-up/profile/ProfileForm';
import { YourInterestForm } from 'components/sign-up/your-interest/YourInterestForm';
import { useState } from 'react';

export type SignUpAllValues = {
  [key: string]: string | string[] | (boolean | null)[];
};

type Step =
  | 'profileForm'
  | 'profileDetailsForm'
  | 'personalityTestForm'
  | 'yourInterestForm'
  | 'introduction';

function SignUpPage() {
  const [step, setStep] = useState<Step>('profileForm');
  const [signUpAllValues, setSignUpAllValues] = useState<SignUpAllValues>({});

  return (
    <NoHeaderFooterLayout>
      <>
        {step === 'profileForm' && (
          <ProfileForm
            onNext={() => setStep('profileDetailsForm')}
            setSignUpAllValues={setSignUpAllValues}
          />
        )}
        {step === 'profileDetailsForm' && (
          <ProfileDetailsForm
            onNext={() => setStep('personalityTestForm')}
            setSignUpAllValues={setSignUpAllValues}
          />
        )}
        {step === 'personalityTestForm' && (
          <PersonalityTestForm
            onNext={() => setStep('yourInterestForm')}
            setSignUpAllValues={setSignUpAllValues}
          />
        )}
        {step === 'yourInterestForm' && (
          <YourInterestForm
            onNext={() => setStep('introduction')}
            setSignUpAllValues={setSignUpAllValues}
          />
        )}
        {step === 'introduction' && (
          <IntroductionForm
            setSignUpAllValues={setSignUpAllValues}
            signUpAllValues={signUpAllValues}
          />
        )}
      </>
    </NoHeaderFooterLayout>
  );
}

export default SignUpPage;
