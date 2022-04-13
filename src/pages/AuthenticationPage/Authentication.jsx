import SignUpForm from "../../components/SignUpForm/SignUpForm";
import SignInForm from "../../components/SignInForm/SignInForm";

import "./Authentication.scss";

const Authentication = () => {
  return (
    <div className='forms'>
      <SignInForm className='sign-in-form' />
      <SignUpForm className='sign-up-form' />
    </div>
  );
};

export default Authentication;
