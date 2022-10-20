import React, { useState, useEffect } from "react"
import { Logo, FormRow } from "../components"
import Wrapper from "../assets/wrappers/RegisterPage"
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from "react-redux"
import { registerUser, loginUser } from "../features/user/userSlice";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
}

function Register() {
  const [values, setValues] = useState(initialState)

  const { isLoading, user } = useSelector((store) => store.user)
  const dispatch = useDispatch()
  // console.log(isLoading, user)


  const handleChange = (e) => {
    const value = e.target.name
    const name = e.target.value
    setValues({ ...values, [value]: name })
     
  }

  const onSubmit = (e) => {
    e.preventDefault()
    console.log("submit")
    const { name, email, password, isMember } = values
    if (!email || !password || (!isMember && !name)) {
      toast.error("please fill out all fields")
      return
    }
    if (isMember) {
      dispatch(loginUser({ email: email, password: password }))
      return
    }
    dispatch(registerUser({ name, email, password }))
  }



  const toggleMember = () => {
    console.log("toggle")
    setValues({ ...values, isMember: !values.isMember })

  }

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        <h3>{values.isMember ? "Login" : "Register"}</h3>
        {!values.isMember && (
          <FormRow
            type="text"
            name="name"
            value={values.name}
            handleChange={handleChange}
          />
        )}

        <FormRow
          type="email"
          name="email"
          value={values.email}
          handleChange={handleChange}
        />

        <FormRow
          type="password"
          name="password"
          value={values.password}
          handleChange={handleChange}
        />

        <button disabled={isLoading} className="btn btn-block">Submit</button>
        <p>
          {values.isMember ? "Not a member yet?" : "Already a member?"}

          <button type='button' onClick={toggleMember} className="member-btn">
            {values.isMember ? "Register" : "Login"}
          </button>
        </p>
      </form>
    </Wrapper>
  )
}

export default Register


// import { useState, useEffect } from 'react';
// import { Logo, FormRow } from '../components';
// import Wrapper from '../assets/wrappers/RegisterPage';
// import { toast } from 'react-toastify';
// import { useDispatch, useSelector } from 'react-redux';
// import { loginUser, registerUser } from '../features/user/userSlice';
// import { useNavigate } from 'react-router-dom';

// const initialState = {
//   name: '',
//   email: '',
//   password: '',
//   isMember: true,
// };

// function Register() {
//   const [values, setValues] = useState(initialState);
//   const { user, isLoading } = useSelector((store) => store.user);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const name = e.target.name;
//     const value = e.target.value;

//     setValues({ ...values, [name]: value });
//   };
//   const onSubmit = (e) => {
//     console.log('submit');
//     e.preventDefault();
//     const { name, email, password, isMember } = values;
//     if (!email || !password || (!isMember && !name)) {
//       toast.error('Please fill out all fields');
//       return;
//     }
//     if (isMember) {
//       dispatch(loginUser({ email: email, password: password }));
//       return;
//     }
//     dispatch(registerUser({ name, email, password }));
//   };

//   const toggleMember = () => {
//     console.log('toggle')
//     setValues({ ...values, isMember: !values.isMember });
//   };
  

//   return (
//     <Wrapper className='full-page'>
//       <form className='form' onSubmit={onSubmit}>
//         <Logo />
//         <h3>{values.isMember ? 'Login' : 'Register'}</h3>
//         {/* name field */}
//         {!values.isMember && (
//           <FormRow
//             type='text'
//             name='name'
//             value={values.name}
//             handleChange={handleChange}
//           />
//         )}
//         {/* email field */}
//         <FormRow
//           type='email'
//           name='email'
//           value={values.email}
//           handleChange={handleChange}
//         />
//         {/* password field */}
//         <FormRow
//           type='password'
//           name='password'
//           value={values.password}
//           handleChange={handleChange}
//         />
//         <button type='submit' className='btn btn-block' disabled={isLoading}>
//           {isLoading ? 'loading...' : 'submit'}
//         </button>
       
//         <p>
//           {values.isMember ? 'Not a member yet?' : 'Already a member?'}
//           <button type='button' onClick={toggleMember} className='member-btn'>
//             {values.isMember ? 'Register' : 'Login'}
//           </button>
//         </p>
//       </form>
//     </Wrapper>
//   );
// }
// export default Register;
