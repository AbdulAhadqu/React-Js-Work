import React, { useState } from 'react';
import './Registration_f.css';

function Registration_form(){
const [email, setEmail]= useState('');
const [password, setPassword]=useState('');
function SetPassword (){
    
}
  function onChange (e){
const {name , value}= e.target;
if (name='email')
{
    setEmail(value);
}else if (name ='password'){
    setPassword(value);
}
  }
 
 
 return<>
     <div className='main_div'>
     <div className="login">
      <div className="Page_text">
        <p className="text_">
          Explore the best restaurant and reserve your table easily
        </p>
      </div>

      <div className="login_box">
        <div className="login_form">
          <form action="" className="form">
              <div className="Create_acc formChild"><h3 className="text1">Create Account</h3></div>
              <div className="name_input formChild">
                <div className="firstname ">
                <svg width="20" height="18" className="svg1" calviewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.38462 4.15385C5.38462 3.33229 5.6553 2.52919 6.16245 1.84609C6.66959 1.163 7.39042 0.630589 8.23377 0.316195C9.07712 0.0017998 10.0051 -0.0804602 10.9004 0.0798169C11.7957 0.240094 12.6181 0.63571 13.2636 1.21664C13.909 1.79756 14.3486 2.53771 14.5267 3.34347C14.7048 4.14924 14.6134 4.98444 14.2641 5.74346C13.9147 6.50247 13.3232 7.15121 12.5642 7.60765C11.8052 8.06408 10.9128 8.30769 10 8.30769C8.77592 8.30769 7.60198 7.87006 6.73643 7.09106C5.87088 6.31206 5.38462 5.25552 5.38462 4.15385ZM17.6923 18H2.30769C1.69565 18 1.10868 17.7812 0.675907 17.3917C0.243131 17.0022 0 16.4739 0 15.9231C0 14.2706 0.729393 12.6858 2.02772 11.5173C3.32605 10.3488 5.08696 9.69231 6.92308 9.69231H13.0769C14.913 9.69231 16.6739 10.3488 17.9723 11.5173C19.2706 12.6858 20 14.2706 20 15.9231C20 16.4739 19.7569 17.0022 19.3241 17.3917C18.8913 17.7812 18.3043 18 17.6923 18Z" fill="#5F6165"/>
                  </svg>

                   <input type="text" placeholder="First Name"  name="Firstname" className="name"  />
                  </div>
                 <div className="lastname">
                  <svg width="20" height="18" className="svg1" calviewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.38462 4.15385C5.38462 3.33229 5.6553 2.52919 6.16245 1.84609C6.66959 1.163 7.39042 0.630589 8.23377 0.316195C9.07712 0.0017998 10.0051 -0.0804602 10.9004 0.0798169C11.7957 0.240094 12.6181 0.63571 13.2636 1.21664C13.909 1.79756 14.3486 2.53771 14.5267 3.34347C14.7048 4.14924 14.6134 4.98444 14.2641 5.74346C13.9147 6.50247 13.3232 7.15121 12.5642 7.60765C11.8052 8.06408 10.9128 8.30769 10 8.30769C8.77592 8.30769 7.60198 7.87006 6.73643 7.09106C5.87088 6.31206 5.38462 5.25552 5.38462 4.15385ZM17.6923 18H2.30769C1.69565 18 1.10868 17.7812 0.675907 17.3917C0.243131 17.0022 0 16.4739 0 15.9231C0 14.2706 0.729393 12.6858 2.02772 11.5173C3.32605 10.3488 5.08696 9.69231 6.92308 9.69231H13.0769C14.913 9.69231 16.6739 10.3488 17.9723 11.5173C19.2706 12.6858 20 14.2706 20 15.9231C20 16.4739 19.7569 17.0022 19.3241 17.3917C18.8913 17.7812 18.3043 18 17.6923 18Z" fill="#5F6165"/>
                    </svg>

                   <input type="text" placeholder="Last Name" name="Secondname"className="name" />
                  
                  </div>
                  </div>
                  <div className="email formChild">
                    <svg width="22" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21.7995 4H4.19951C2.98951 4 2.01051 4.9 2.01051 6L1.99951 18C1.99951 19.1 2.98951 20 4.19951 20H21.7995C23.0095 20 23.9995 19.1 23.9995 18V6C23.9995 4.9 23.0095 4 21.7995 4ZM21.3595 8.25L13.5825 12.67C13.2305 12.87 12.7685 12.87 12.4165 12.67L4.63951 8.25C4.36451 8.09 4.19951 7.82 4.19951 7.53C4.19951 6.86 5.00251 6.46 5.62951 6.81L12.9995 11L20.3695 6.81C20.9965 6.46 21.7995 6.86 21.7995 7.53C21.7995 7.82 21.6345 8.09 21.3595 8.25Z" fill="#5F6165"/>
                      </svg>
                      
                  <input type="email" placeholder="Enter your Email" className="inputs" name="Email"/>
                </div>
                <div className="password formChild">
                  <svg width="22" height="20" viewBox="0 0 22 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.3333 8.01221V6.01221C18.3333 4.42091 17.5607 2.89478 16.1854 1.76957C14.8102 0.644348 12.9449 0.012207 11 0.012207C9.05508 0.012207 7.18982 0.644348 5.81455 1.76957C4.43928 2.89478 3.66667 4.42091 3.66667 6.01221V8.01221C2.6951 8.01458 1.76415 8.33141 1.07715 8.89351C0.390142 9.4556 0.00290167 10.2173 0 11.0122V18.0122C0 19.6035 0.772617 21.1296 2.14788 22.2548C3.52315 23.3801 5.38841 24.0122 7.33333 24.0122H14.6667C16.6116 24.0122 18.4769 23.3801 19.8521 22.2548C21.2274 21.1296 22 19.6035 22 18.0122V11.0122C21.9971 10.2173 21.6099 9.4556 20.9229 8.89351C20.2358 8.33141 19.3049 8.01458 18.3333 8.01221ZM6.11111 6.01221C6.11111 4.95134 6.62619 3.93393 7.54303 3.18378C8.45988 2.43363 9.70339 2.01221 11 2.01221C12.2966 2.01221 13.5401 2.43363 14.457 3.18378C15.3738 3.93393 15.8889 4.95134 15.8889 6.01221V8.01221H6.11111V6.01221ZM12.2222 18.0122C12.2222 18.2774 12.0935 18.5318 11.8642 18.7193C11.635 18.9069 11.3242 19.0122 11 19.0122C10.6758 19.0122 10.365 18.9069 10.1358 18.7193C9.90655 18.5318 9.77778 18.2774 9.77778 18.0122V14.0122C9.77778 13.747 9.90655 13.4926 10.1358 13.3051C10.365 13.1176 10.6758 13.0122 11 13.0122C11.3242 13.0122 11.635 13.1176 11.8642 13.3051C12.0935 13.4926 12.2222 13.747 12.2222 14.0122V18.0122Z" fill="#5F6165"/>
                    </svg>
                    
                  <input type="password" placeholder="Password" className="inputs" name="password"/>
                </div>
                <div className="con_password formChild">
                  <svg width="22" height="20" viewBox="0 0 22 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.3333 8.01221V6.01221C18.3333 4.42091 17.5607 2.89478 16.1854 1.76957C14.8102 0.644348 12.9449 0.012207 11 0.012207C9.05508 0.012207 7.18982 0.644348 5.81455 1.76957C4.43928 2.89478 3.66667 4.42091 3.66667 6.01221V8.01221C2.6951 8.01458 1.76415 8.33141 1.07715 8.89351C0.390142 9.4556 0.00290167 10.2173 0 11.0122V18.0122C0 19.6035 0.772617 21.1296 2.14788 22.2548C3.52315 23.3801 5.38841 24.0122 7.33333 24.0122H14.6667C16.6116 24.0122 18.4769 23.3801 19.8521 22.2548C21.2274 21.1296 22 19.6035 22 18.0122V11.0122C21.9971 10.2173 21.6099 9.4556 20.9229 8.89351C20.2358 8.33141 19.3049 8.01458 18.3333 8.01221ZM6.11111 6.01221C6.11111 4.95134 6.62619 3.93393 7.54303 3.18378C8.45988 2.43363 9.70339 2.01221 11 2.01221C12.2966 2.01221 13.5401 2.43363 14.457 3.18378C15.3738 3.93393 15.8889 4.95134 15.8889 6.01221V8.01221H6.11111V6.01221ZM12.2222 18.0122C12.2222 18.2774 12.0935 18.5318 11.8642 18.7193C11.635 18.9069 11.3242 19.0122 11 19.0122C10.6758 19.0122 10.365 18.9069 10.1358 18.7193C9.90655 18.5318 9.77778 18.2774 9.77778 18.0122V14.0122C9.77778 13.747 9.90655 13.4926 10.1358 13.3051C10.365 13.1176 10.6758 13.0122 11 13.0122C11.3242 13.0122 11.635 13.1176 11.8642 13.3051C12.0935 13.4926 12.2222 13.747 12.2222 14.0122V18.0122Z" fill="#5F6165"/>
                    </svg>
                  <input type="password" placeholder="Confirm password" className="inputs" name="Cofirm_password"/>
                </div>
                  <div className="recap formChild">
                    
                    <div className="ch-recapcha">
                      <input type="checkbox" />
                    </div>
                    <div ><p className="text-recapcha">I'm not a robot</p></div>
                    <div className="img-recapcha">
                        <img className="image-recap" src="png-transparent-recaptcha-wordmark-hd-logo-thumbnail.png" alt="recaptcha"/></div>
                   
                
                  </div>
                  <div className="Checkbox_div formChild">
                    <div className="checkbox_div">
                  <input type="checkbox" className="checkbox" />
                </div>
                  <p className="checkbox_text">By registering, I confirm that I have read and agree to the Meowoof.ie's Terms and Conditions, that I am 18 years of age or older, and that I agree to receive email communications.</p>
                </div>
               <button className="reg_button formChild " type="submit">Registered</button>
               <p className="Already">Already have an account? <span><a href='https://drive.google.com/drive/folders/12VlU4S4PfEjaHVjK0y-_bPdJqg2melbg' target="_blank" >Log In here.</a></span></p>
          </form>
              
        </div>
      </div>
    </div>
    </div>
    </>
}
export default Registration_form;