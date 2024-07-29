import React, { useState } from 'react';
import './forms.css';
import { auth ,googleProvider} from '../firebaseAuth';
import { createUserWithEmailAndPassword,signInWithPopup} from "firebase/auth";

export default function Forms() {
  const [email, setEmail] = useState({Email: "", password : "", Username: ""});
  // const [password, setPassword] = useState('');
   async function SignIn(){
          try{
            await signInWithPopup(auth,googleProvider)
          } 
          catch(err){
            alert(err)
          } 
   }
  function SignUp(e) {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail({...email,Email:value})
      console.log(`${email.Email}`)
          } else if (name === 'password') {
            console.log(`${email.password}`)
            setEmail({...email,password: value})
          }

 }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let name = "abdul ahad"
      await createUserWithEmailAndPassword(auth, email.Email ,email.password,name);
      alert("SignUp Succesfull");
      setEmail({});
      // Update the entry state after successful registration
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
    <div className='main_div'>

      <div className='forms_div'>
      Sign Up
      <form onSubmit={handleSubmit} className='form'>
        <label for="email">Enter email</label>
        <input
          type="email"
          name="email"
          placeholder='Enter Email'
          onChange={SignUp}
          value={email.Email}
          className='form_inputs'
        />
        <br/>
        <label for="password">Enter Password</label>
        <input
          type="password"
          name="password"
          placeholder='Password'
          onChange={SignUp}
          value={email.password}
          className='form_inputs'

        />
        <br/>
        <button type='submit'className='form_button'>
         Sign Up
        </button><br/>
        <button onClick={SignIn} className='form_button'>LogIn With Google</button>

      </form>
      </div>
      </div>
    </>
  );
}
