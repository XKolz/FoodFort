import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Logo from '../../images/logo2.png';
import './SignUp.css';
import { useAuth } from './useAuth';
import Glogo from "./glogo.png"

const SignUp = () => {

    const [returningUser, setReturningUser] = useState(true);
    const { register, handleSubmit, watch, errors } = useForm();

    const auth = useAuth();

    const onSubmit = data => {
        if (returningUser) {
            if (data.email && data.password) {
                auth.signIn(data.email, data.password);
            }
        } else {
            if (data.name && data.email && data.password && data.confirm_password) {
                auth.signUp(data.email, data.confirm_password, data.name)
            }
        }

    }

    return (
        <div className="sign-up"
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            minHeight: '100vh',
                            overflow: 'hidden' 
                            }}>
            <div className="container" style={{}}>
                    <div className="logo" 
                            style={{ position: 'absolute', top: '10px', left: '10px' }}>
                                    <Link to="/">
                                        <img src={Logo} alt="" style={{ width: '90px', height: 'auto' }}/>
                                    </Link>
                    </div>

                                {/* <div className="logo text-center py-4">
                                    <Link to="/">
                                        <img src={Logo} alt="" style={{ width: '250px', height: 'auto' }}/>
                                    </Link>
                                </div> */}
                {
                    returningUser ?

                        <form onSubmit={handleSubmit(onSubmit)} className="py-3" style={{ marginTop: '50px' }}>

                                <div>
                                    <h1 className='lead text-center py-0' style={{ fontWeight: 'bold', color: 'green', fontSize: '28px', margin: '0' }}>
                                        Welcome back!
                                    </h1>
                                    <h2 className='' style={{ whiteSpace: '', fontSize: '11px', textAlign: 'center', margin: '10', padding: '0',marginBottom: '25px' }}>
                                        Hello Friend! It's been awhile, fill your details to get back into your account.
                                    </h2>
                                </div>


                            {
                                auth.user != null && <p className="text-danger">* {auth.user.error}</p>
                            }

                            <div className="form-group">
                                <input
                                    name="email"
                                    className="form-control"
                                    ref={register({ required: true })}
                                    placeholder="Email"
                                    style={{ background: 'white', border: '2px solid lightgray',}}
                                />
                                {
                                    errors.email && <span className="error">Email is required</span>
                                }
                            </div>

                            <div className="form-group">
                                <input
                                    type="password"
                                    name="password"
                                    className="form-control"
                                    ref={register({ required: true })}
                                    placeholder="Password"
                                    style={{ background: 'white', border: '2px solid lightgray'}}
                                />
                                {
                                    errors.password && <span className="error">Password is required</span>
                                }
                            </div>
                                    <label style={{ display: 'flex', alignItems: 'center' }}>
                                        <input
                                            type="checkbox"
                                            name="rememberMe"
                                            // value={rememberMe}
                                            // onChange={() => setRememberMe(!rememberMe)}
                                            style={{ marginRight: '5px' }} // Adjust margin as needed
                                        />
                                        Remember Me
                                    </label>
                                                <div>
                                                    <label 
                                                    // onClick={() => setReturningUser(false)}
                                                    style={{
                                                        float: 'right',     // Move it to the right
                                                        color: 'red',       // Make it red
                                                        cursor: 'pointer',  // Change cursor to pointer
                                                        marginTop: '-33px',
                                                    }}>
                                                        Forgot password?
                                                    </label>
                                                </div>

                                <div className="form-group">
                                    <button
                                        className="btn btn-danger btn-block"
                                        type="submit"
                                        style={{
                                            background: "#D8F8E6", // Set the background color to light green
                                            color: "green", // Set the font color to green
                                            // Add any other inline styles you want for your button
                                            border: "none", // Remove the button border
                                            padding: "10px 20px", // Adjust padding as needed
                                            borderRadius: "5px", // Add rounded corners if desired
                                            cursor: "pointer", // Add a pointer cursor on hover
                                            fontWeight: "bold",
                                            marginTop: "30px" // Add margin-top to bring the button down
                                        }}
                                    >
                                        Log In
                                    </button>
                                </div>

                                                            <div className='text-center my-0' style={{ display: 'flex', alignItems: 'center' , marginTop: ""}}>
                                                                    <label style={{ flex: '1', borderBottom: '1px solid black', marginTop: "15px" }}></label>
                                                                    <label style={{ margin: '0 10px', marginTop: "10px" }}>OR</label>
                                                                    <label style={{ flex: '1', borderBottom: '1px solid black', marginTop: "15px" }}></label>
                                                                    </div>


                                    <button
                                            className='btn btn-success btn-block'
                                            onClick={auth.signInWithGoogle}
                                            style={{
                                                backgroundColor: 'white',  // Set button background color to white
                                                color: 'green',           // Set text color to green
                                                border: '2px solid green', // Set border to green
                                                fontWeight: "bold",
                                                display: "flex",          // Use flexbox to align content
                                                alignItems: "center",     // Center items vertically within the button
                                                justifyContent: "center", // Center items horizontally within the button
                                                marginTop: '25px'    
                                            }}
                                        >
                                            <div style={{ display: "flex", alignItems: "center" }}>
                                                <img
                                                    src={Glogo} // Replace with the actual URL to the Google logo image
                                                    alt="Google Logo"
                                                    style={{ marginRight: '10px', width: '15px' }} // Adjust spacing between the logo and text
                                                />
                                                Log in with Google
                                            </div>
                                    </button>


                            {/* <div className="option text-center my-3">
                                <label
                                    onClick={() => setReturningUser(false)}
                                >
                                    Create a new Account
                                     </label>
                            </div> */}
                                <div className="option text-center my-3"
                                    style={{
                                        position: 'absolute', top: '10px', right: '10px', 
                                        maxWidth: '100%', // Set a maximum width to make it responsive
                                    }}>
                                        <label className="option label"
                                            // onClick={() => setReturningUser(false)}
                                            style={{
                                            marginRight: '5px',
                                            color: 'black',
                                            fontSize: '12px', 
                                            }}
                                        >
                                            Don't have an account?
                                        </label>
                                                <button className="option button"
                                                onClick={() => setReturningUser(false)}
                                                    style={{
                                                    background: '#126D3A', color: 'white', border: 'none',
                                                    padding: '8px 16px', // Adjust padding for mobile
                                                    borderRadius: '10px', cursor: 'pointer', fontWeight: 'bold',
                                                    fontSize: '12px', // Adjust font size for mobile
                                                    }}
                                                >
                                                    Sign up
                                                </button>
                                </div>

                        </form>

                        :

                        <form onSubmit={handleSubmit(onSubmit)} className="py-5" style={{ marginTop: '50px' }}>

                                <div>
                                    <h1 className='lead text-center py-0' style={{ fontWeight: 'bold', color: 'green', fontSize: '28px', margin: '0' }}>
                                        Welcome to Foodfort
                                    </h1>
                                    <h2 className='' style={{ whiteSpace: '', fontSize: '11px', textAlign: 'center', margin: '10', padding: '0',marginBottom: '25px' }}>
                                        Let's get you set up. Healthy and sumptuous meals awaits you!!!
                                    </h2>
                                </div>

                            {
                                auth.user != null && <p className="text-danger">* {auth.user.error}</p>
                            }

                            <div className="form-group">
                                <input
                                    name="name"
                                    className="form-control"
                                    ref={register({
                                        required: "Name is required",
                                        // pattern: {
                                        //     value: /^(?=^.{6,20}$)^[a-zA-Z-]+\s[a-zA-Z-]+\s[a-zA-Z-]+$/i,
                                        //     message: "Name must be 6 - 20 characters & Max 3 words"
                                        // }
                                    })}
                                    placeholder="Full Name"
                                    style={{ background: 'white', border: '2px solid lightgray',}}
                                />
                                <span className="error">
                                    {errors.name && errors.name.message}
                                </span>
                            </div>

                            <div className="form-group">
                                <input
                                    name="email"
                                    className="form-control"
                                    ref={register({
                                        required: "Email is required",
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                            message: "Invalid email address"
                                        }
                                    })}
                                    placeholder="Email"
                                    style={{ background: 'white', border: '2px solid lightgray',}}
                                />
                                <span className="error">
                                    {errors.email && errors.email.message}
                                </span>
                            </div>

                            <div className="form-group">
                                <input
                                    type="password"
                                    name="password"
                                    className="form-control"
                                    ref={register({
                                        required: "Password is required",
                                        pattern: {
                                            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/i,
                                            message: "Minimum eight characters, at least one uppercase letter, one lowercase letter and one number"
                                        }
                                    })}
                                    placeholder="Password"
                                    style={{ background: 'white', border: '2px solid lightgray',}}
                                />
                                <span className="error">
                                    {errors.password && errors.password.message}
                                </span>
                            </div>

                            <div className="form-group">
                                <input
                                    type="password"
                                    name="confirm_password"
                                    className="form-control"
                                    ref={register({
                                        validate: (value) => value === watch('password')
                                    })}
                                    placeholder="Confirm Password"
                                    style={{ background: 'white', border: '2px solid lightgray',}}
                                />
                                {
                                    errors.confirm_password && <span className="error">Passwords don't match.</span>
                                }
                            </div>

                            <div className="form-group">
                                <button
                                    className="btn btn-danger btn-block"
                                    type="submit"
                                    style={{
                                        background: "#D8F8E6", // Set the background color to light green
                                        color: "green", // Set the font color to green
                                        // Add any other inline styles you want for your button
                                        border: "none", // Remove the button border
                                        padding: "10px 20px", // Adjust padding as needed
                                        borderRadius: "5px", // Add rounded corners if desired
                                        cursor: "pointer", // Add a pointer cursor on hover
                                        fontWeight: "bold",
                                        marginTop: "30px" // Add margin-top to bring the button down
                                    }}
                                >
                                    Sign Up
                                </button>
                                <div className='text-center my-0' style={{ display: 'flex', alignItems: 'center' , marginTop: "25px"}}>
                                                                    <label style={{ flex: '1', borderBottom: '1px solid black', marginTop: "30px" }}></label>
                                                                    <label style={{ margin: '0 10px', marginTop: "25px" }}>OR</label>
                                                                    <label style={{ flex: '1', borderBottom: '1px solid black', marginTop: "30px" }}></label>
                                                                    </div>


                                    <button
                                            className='btn btn-success btn-block'
                                            onClick={auth.signInWithGoogle}
                                            style={{
                                                backgroundColor: 'white',  // Set button background color to white
                                                color: 'green',           // Set text color to green
                                                border: '2px solid green', // Set border to green
                                                fontWeight: "bold",
                                                display: "flex",          // Use flexbox to align content
                                                alignItems: "center",     // Center items vertically within the button
                                                justifyContent: "center", // Center items horizontally within the button
                                                marginTop: '25px'    
                                            }}
                                        >
                                            <div style={{ display: "flex", alignItems: "center" }}>
                                                <img
                                                    src={Glogo} // Replace with the actual URL to the Google logo image
                                                    alt="Google Logo"
                                                    style={{ marginRight: '10px', width: '15px' }} // Adjust spacing between the logo and text
                                                />
                                                Sign up with Google
                                            </div>
                                    </button>
                            </div>

                            <div className="option text-center my-3"style={{
                                        position: 'absolute', top: '10px', right: '10px', 
                                        maxWidth: '100%', // Set a maximum width to make it responsive
                                    }}>
                                <label
                                    // onClick={() => setReturningUser(true)}
                                    style={{
                                        marginRight: '5px',
                                        color: 'black',
                                        fontSize: '12px', 
                                        }}
                                >
                                    Already Have an Account
                                </label>
                                <button className="option button"
                                                onClick={() => setReturningUser(true)}
                                                    style={{
                                                    background: '#126D3A', color: 'white', border: 'none',
                                                    padding: '8px 16px', // Adjust padding for mobile
                                                    borderRadius: '10px', cursor: 'pointer', fontWeight: 'bold',
                                                    fontSize: '12px', // Adjust font size for mobile
                                                    }}
                                                >
                                                    Log in
                                                </button>
                            </div>

                            {/* <div className="option text-center my-3">
                                <label
                                    onClick={() => setReturningUser(true)}
                                >
                                    Already Have an Account
                                </label>
                            </div> */}
                        </form>
                }
            </div>
        </div>
    );
};

export default SignUp;