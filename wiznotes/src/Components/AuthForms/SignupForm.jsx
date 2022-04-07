import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Textfields, Button, Toast } from '..';
import { SignupFormDetail } from '../../GeneralFunctions';
import { HiEye } from 'react-icons/hi';
import { RiEyeCloseFill } from 'react-icons/ri';
import { emailRegex, passwordRegex } from '../../RegexForValidation/Validation';
import axios from 'axios';
import './AuthForms.css';
import { useNavigate } from "react-router-dom";

const defaultForm = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
}

const SignupForm = () => {

  let navigate = useNavigate();
  const [form, setForm] = useState(defaultForm)
  const [submitMode, setSubmitMode] = useState(false)
  const [checkPassword, setCheckPassword] = useState(false)
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState({
    email: {
      isError: false, 
      errorMessage: "Enter a valid mail",
    }, password: {
      isError: false, 
      errorMessage: "Password must contain minimum eight characters, at least one uppercase letter, one lowercase letter and one number",
    }, confirmPassword: {
      isError: false,
      errorMessage: "Password does not match",
    }
  })

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if(name==="password") {
      setCheckPassword(value)
    }
    const validateError = validateForm(name, value);
    setError((prevValue) => ({
      ...prevValue,
      [name]: {
        ...prevValue[name],
        isError: validateError
      }
    }));
    setForm({...form, [name]: value})
  }
  
  const SubmitHandler = async(event) => {
    event.preventDefault();
    try {
      const res = await axios.post(`/api/auth/signup`, {
        firstName: form.firstName,
        lastName: form.lastName,
        email: form.email,
        password: form.password,
      });
      if(res.status===201){
        setForm(defaultForm);
        Toast("Successfully signed up", "success")
        navigate("../login", { replace: true });
      } 
    } catch (error) {
      Toast("Could not signed up, try again later.", "error")
      console.error(error);
    }
  }

  const validateForm = (name, value) => {
    switch (name) {
      case "email":
        return !emailRegex.test(value);
      case "password":
        return !passwordRegex.test(value); 
      case "confirmPassword": 
        return checkPassword !== value;
      default:
        return false;
    }
  };

  useEffect(() => {
    let flag = false;
    Object.entries(error).forEach((i) => {
      if (i[1].isError) {
        flag = true;
      }
    });
    setSubmitMode(flag);
  }, [error]);

 const SignupFormData = SignupFormDetail(form);

  return (
    <div className="main centered">
        <form className="auth-card" onSubmit={(e)=>SubmitHandler(e)}>
            <h2 className="text-header align-header">Sign Up</h2>
            <div className="dis-flex form-fields">
              <div className="dis-flex name-fields">
                {SignupFormData.map(({label, name, type, value})=>
                  <Textfields label={label}
                              name={name}
                              type={type}
                              value={value}
                              onChange={(e)=>handleChange(e)} required/>)}
              </div>              
              <Textfields label={"Email"} name={"email"} type={"email"} value={form.email} onChange={(e)=>handleChange(e)} required/>             
              <div className="password-fields">
                <Textfields label={"Password"} name="password" type={showPassword ? "text" : "password"} value={form.password} onChange={(e)=>handleChange(e)} required/> 
                {showPassword ? 
                    <HiEye className="eye-icon" onClick={()=>setShowPassword(!showPassword)}/> : <RiEyeCloseFill className="eye-icon" onClick={()=>setShowPassword(!showPassword)}/>}
              </div>   
              <div className="password-fields">
                <Textfields label={"Confirm Password"} name="confirmPassword" type={showConfirmPassword ? "text" : "password"} value={form.confirmPassword} onChange={(e)=>handleChange(e)} required/> 
                {showConfirmPassword ? 
                    <HiEye className="eye-icon" onClick={()=>setShowConfirmPassword(!showConfirmPassword)}/> : <RiEyeCloseFill className="eye-icon" onClick={()=>setShowConfirmPassword(!showConfirmPassword)}/>}
              </div>            
            </div>
            {error.email.isError && <div className="error-message centered"><b>{error.email.errorMessage}</b></div>}
            {error.password.isError && <div className="error-message centered"><b>{error.password.errorMessage}</b></div>}
            {error.confirmPassword.isError && <div className="error-message centered"><b>{error.confirmPassword.errorMessage}</b></div>}
            <div className="centered">
                <Button text="Sign up" 
                        size="large"
                        disabled={submitMode} 
                        buttonborder={true} 
                        errorButton={submitMode}
                        type="submit" />
            </div>
            <h4 className="centered">Already have an account?<Link to="/login" className="text-black hover-red">{" "}Login</Link></h4>
        </form>
    </div>
  )
}

export { SignupForm };