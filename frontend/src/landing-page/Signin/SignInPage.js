import { SignIn } from '@clerk/clerk-react';

const SignInPage = () => {
  return (
    <div className="container mt-5 d-flex justify-content-center">
      <SignIn path="/signin" routing="path" signUpUrl="/signup" />
    </div>
  );
};

export default SignInPage;
