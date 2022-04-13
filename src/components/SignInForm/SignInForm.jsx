import { useState } from "react";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import Button from "../Button/Button";
import FormInput from "../FormInput/FormInput";
import "./SignInForm.scss";

const formFieldsValues = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(formFieldsValues);
  const { email, password } = formFields;

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();

    // Creating user document
    await createUserDocumentFromAuth(user);

    console.log("Login Successfully!");
  };

  // Reset the form fields
  const resetFormFields = () => {
    setFormFields(formFieldsValues);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await signInAuthUserWithEmailAndPassword(
        email,
        password,
      );
      console.log("Login Successfully!");
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/user-not-found":
          alert("User not found!");
          break;
        case "auth/wrong-password":
          alert("Incorrect password!");
          break;
        default:
          console.log("error in sign in using email and pass!", error.message);
      }
    }
  };

  return (
    <div className='sign-in-container'>
      <h2>Already have an acount?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Email'
          type='email'
          value={email}
          onChange={handleChange}
          name='email'
          required
        />
        <FormInput
          label='Password'
          type='password'
          value={password}
          onChange={handleChange}
          name='password'
          required
        />

        <div className='buttons'>
          <Button type='submit'>Sign In</Button>
          <Button type='button' buttonType='google' onClick={logGoogleUser}>
            Sign in with Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
