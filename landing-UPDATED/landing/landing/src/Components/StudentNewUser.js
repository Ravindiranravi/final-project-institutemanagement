// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import './StudentNewUser.css';

// const StudentNewUser = () => {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [confirmPassword, setConfirmPassword] = useState('');
//     const [contact, setContact] = useState('');
//     const [gender, setGender] = useState('');
//     const [dob, setDob] = useState('');
//     const [address, setAddress] = useState('');
//     const [qualification, setQualification] = useState('');
//     const [interests, setInterests] = useState('');
//     const [dateOfJoin, setDateOfJoin] = useState(new Date().toISOString().split('T')[0]);
//     const [step, setStep] = useState(1);
//     const [showPopup, setShowPopup] = useState(false); // New state for popup visibility
//     const [errors, setErrors] = useState({});
//     const navigate = useNavigate();

//     const validateStep1 = () => {
//         const errors = {};
//         const nameRegex = /^[a-zA-Z\s]{3,30}$/;
//         const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//         const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

//         if (!name || !nameRegex.test(name)) {
//             errors.name = 'Full Name should be 3-30 characters long and contain only letters and spaces';
//         }
//         if (!email) {
//             errors.email = 'Email is required';
//         } else if (!emailRegex.test(email)) {
//             errors.email = 'Invalid email address';
//         }
//         if (!password) {
//             errors.password = 'Password is required';
//         } else if (!passwordRegex.test(password)) {
//             errors.password = 'Password must be at least 6 characters long, include letters, numbers, and special characters';
//         }
//         if (password !== confirmPassword) {
//             errors.confirmPassword = 'Passwords must match';
//         }

//         return errors;
//     };

//     const validateStep2 = () => {
//         const errors = {};
//         const contactRegex = /^\d{10}$/;

//         if (!contact || !contactRegex.test(contact)) {
//             errors.contact = 'Contact must be exactly 10 digits';
//         }
//         if (!gender) {
//             errors.gender = 'Gender is required';
//         }
//         if (!dob) {
//             errors.dob = 'Date of birth is required';
//         }
//         if (!address) {
//             errors.address = 'Address is required';
//         }

//         return errors;
//     };

//     const validateStep3 = () => {
//         const errors = {};
//         if (!qualification) {
//             errors.qualification = 'Qualification is required';
//         }
//         if (!interests) {
//             errors.interests = 'Interests are required';
//         }
//         return errors;
//     };

//     const handleNext = () => {
//         let validationErrors;
//         if (step === 1) {
//             validationErrors = validateStep1();
//         } else if (step === 2) {
//             validationErrors = validateStep2();
//         } else if (step === 3) {
//             validationErrors = validateStep3();
//         }

//         if (Object.keys(validationErrors).length === 0) {
//             setStep(step + 1);
//             setErrors({});
//         } else {
//             setErrors(validationErrors);
//         }
//     };

//     const handlePrevious = () => {
//         setStep(step - 1);
//     };

//     const handleSubmit = async (event) => {
//         event.preventDefault();

//         const validationErrors = { ...validateStep1(), ...validateStep2(), ...validateStep3() };

//         if (Object.keys(validationErrors).length > 0) {
//             setErrors(validationErrors);
//             return;
//         }

//         try {
//             await axios.post('http://localhost:5078/api/Student/Register', {
//                 studentId: 0,
//                 username: name,
//                 password: password,
//                 email: email,
//                 contact: contact,
//                 gender: gender,
//                 dateOfBirth: dob,
//                 address: address,
//                 qualification: qualification,
//                 interestToStudy: interests,
//                 dateOfJoin: dateOfJoin
//             });

//             // Show the popup
//             setShowPopup(true);

//             // Automatically hide the popup after 1 second and navigate to login
//             setTimeout(() => {
//                 setShowPopup(false);
//                 navigate("/signin");
//             }, 1000);
//         } catch (error) {
//             console.error('Error during registration:', error);
//             alert('An error occurred during registration.');
//         }
//     };

//     return (
//         <div className="form-container">
//             <h1>Student Registration</h1>
            
//             {/* Show the popup when registered successfully */}
//             {showPopup && <div className="popup">Registered Successfully!</div>}
            
//             <form onSubmit={handleSubmit}>
//                 {step === 1 && (
//                     <>
//                         <label htmlFor="name">Name:</label>
//                         <input
//                             type="text"
//                             id="name"
//                             value={name}
//                             onChange={(e) => setName(e.target.value)}
//                             className={errors.name ? 'input-error' : ''}
//                         />
//                         {errors.name && <p className="error">{errors.name}</p>}

//                         <label htmlFor="email">Email:</label>
//                         <input
//                             type="email"
//                             id="email"
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                             className={errors.email ? 'input-error' : ''}
//                         />
//                         {errors.email && <p className="error">{errors.email}</p>}

//                         <label htmlFor="password">Password:</label>
//                         <input
//                             type="password"
//                             id="password"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                             className={errors.password ? 'input-error' : ''}
//                         />
//                         {errors.password && <p className="error">{errors.password}</p>}

//                         <label htmlFor="confirmPassword">Confirm Password:</label>
//                         <input
//                             type="password"
//                             id="confirmPassword"
//                             value={confirmPassword}
//                             onChange={(e) => setConfirmPassword(e.target.value)}
//                             className={errors.confirmPassword ? 'input-error' : ''}
//                         />
//                         {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}

//                         <button type="button" onClick={handleNext}>Next</button>
//                     </>
//                 )}
//                 {step === 2 && (
//                     <>
//                         <label htmlFor="contact">Contact Number:</label>
//                         <input
//                             type="tel"
//                             id="contact"
//                             value={contact}
//                             onChange={(e) => setContact(e.target.value)}
//                             className={errors.contact ? 'input-error' : ''}
//                         />
//                         {errors.contact && <p className="error">{errors.contact}</p>}

//                         <label htmlFor="gender">Gender:</label>
//                         <select
//                             id="gender"
//                             value={gender}
//                             onChange={(e) => setGender(e.target.value)}
//                             className={errors.gender ? 'input-error' : ''}
//                         >
//                             <option value="">Select Gender</option>
//                             <option value="male">Male</option>
//                             <option value="female">Female</option>
//                             <option value="other">Other</option>
//                         </select>
//                         {errors.gender && <p className="error">{errors.gender}</p>}

//                         <label htmlFor="dob">Date of Birth:</label>
//                         <input
//                             type="date"
//                             id="dob"
//                             value={dob}
//                             onChange={(e) => setDob(e.target.value)}
//                             className={errors.dob ? 'input-error' : ''}
//                         />
//                         {errors.dob && <p className="error">{errors.dob}</p>}

//                         <label htmlFor="address">Address:</label>
//                         <textarea
//                             id="address"
//                             value={address}
//                             onChange={(e) => setAddress(e.target.value)}
//                             className={errors.address ? 'input-error' : ''}
//                         />
//                         {errors.address && <p className="error">{errors.address}</p>}

//                         <button type="button" onClick={handlePrevious}>Previous</button>
//                         <button type="button" onClick={handleNext}>Next</button>
//                     </>
//                 )}
//                 {step === 3 && (
//                     <>
//                         <label htmlFor="qualification">Qualification:</label>
//                         <select
//                             id="qualification"
//                             value={qualification}
//                             onChange={(e) => setQualification(e.target.value)}
//                             className={errors.qualification ? 'input-error' : ''}
//                         >
//                             <option value="">Select Qualification</option>
//                             <option value="B.E EEE">B.E EEE</option>
//                             <option value="B.E ECE">B.E ECE</option>
//                             <option value="B.E CSE">B.E CSE</option>
//                             <option value="B.E Civil Engineering">B.E Civil Engineering</option>
//                             <option value="B.Tech IT">B.Tech IT</option>
//                             <option value="B.E Mechanical Engineering">B.E Mechanical Engineering</option>
//                             <option value="B.Tech Chemical Engineering">B.Tech Chemical Engineering</option>
//                             <option value="B.E Aeronautical Engineering">B.E Aeronautical Engineering</option>
//                             <option value="B.E Biomedical Engineering">B.E Biomedical Engineering</option>
//                             <option value="B.Sc">B.Sc</option>
//                             <option value="B.Com">B.Com</option>
//                             <option value="B.A">B.A</option>
//                             <option value="MBA">MBA</option>
//                             <option value="MCA">MCA</option>
//                             <option value="M.Tech">M.Tech</option>
//                             <option value="M.E">M.E</option>
//                         </select>
//                         {errors.qualification && <p className="error">{errors.qualification}</p>}

//                         <label htmlFor="interests">Interests:</label>
//                         <input
//                             type="text"
//                             id="interests"
//                             value={interests}
//                             onChange={(e) => setInterests(e.target.value)}
//                             className={errors.interests ? 'input-error' : ''}
//                         />
//                         {errors.interests && <p className="error">{errors.interests}</p>}

//                         <button type="button" onClick={handlePrevious}>Previous</button>
//                         <button type="submit">Submit</button>
//                     </>
//                 )}
//             </form>
//         </div>
//     );
// };

// export default StudentNewUser;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './StudentNewUser.css';

const StudentNewUser = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [contact, setContact] = useState('');
    const [gender, setGender] = useState('');
    const [dob, setDob] = useState('');
    const [address, setAddress] = useState('');
    const [qualification, setQualification] = useState('');
    const [interests, setInterests] = useState('');
    const [dateOfJoin, setDateOfJoin] = useState(new Date().toISOString().split('T')[0]); // Default to today's date
    const [step, setStep] = useState(1);

    const [errors, setErrors] = useState({});

    const navigate = useNavigate();

    const validateStep1 = () => {
        const newErrors = {};
        if (!name) newErrors.name = 'Name is required.';
        if (!email || !/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Valid email is required.';
        if (!password || password.length < 6) newErrors.password = 'Password must be at least 6 characters long.';
        if (password !== confirmPassword) newErrors.confirmPassword = 'Passwords must match.';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const validateStep2 = () => {
        const newErrors = {};
        if (!contact || !/^\d{10}$/.test(contact)) newErrors.contact = 'Contact number must be 10 digits.';
        if (!gender) newErrors.gender = 'Gender is required.';
        if (!dob) newErrors.dob = 'Date of Birth is required.';
        if (!address) newErrors.address = 'Address is required.';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const validateStep3 = () => {
        const newErrors = {};
        if (!qualification) newErrors.qualification = 'Qualification is required.';
        if (!interests) newErrors.interests = 'Interests to Study is required.';
        if (!dateOfJoin) newErrors.dateOfJoin = 'Date of Join is required.';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleNext = () => {
        let isValid = false;
        if (step === 1) {
            isValid = validateStep1();
        } else if (step === 2) {
            isValid = validateStep2();
        } else if (step === 3) {
            isValid = validateStep3();
        }

        if (isValid) {
            setStep(step + 1);
        }
    };

    const handlePrevious = () => {
        setStep(step - 1);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (validateStep1() && validateStep2() && validateStep3()) {
            try {
                await axios.post('https://localhost:7256/api/Student', {
                    studentId: 0,
                    username: name,
                    password: password,
                    email: email,
                    contact: contact,
                    gender: gender,
                    dateOfBirth: dob,
                    address: address,
                    qualification: qualification,
                    interestToStudy: interests,
                    dateOfJoin: dateOfJoin
                });

                navigate("/");
            } catch (error) {
                console.error('Error during registration:', error);
                alert('An error occurred during registration.');
            }
        }
    };

    return (
        <div className="form-container">
            <h1>Student Registration</h1>
            <form onSubmit={handleSubmit}>
                {step === 1 && (
                    <>
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            className={errors.name ? 'error' : ''}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        {errors.name && <div className="error-message">{errors.name}</div>}

                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            className={errors.email ? 'error' : ''}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {errors.email && <div className="error-message">{errors.email}</div>}

                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            className={errors.password ? 'error' : ''}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {errors.password && <div className="error-message">{errors.password}</div>}

                        <label htmlFor="confirmPassword">Confirm Password:</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            className={errors.confirmPassword ? 'error' : ''}
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        {errors.confirmPassword && <div className="error-message">{errors.confirmPassword}</div>}

                        <button type="button" onClick={handleNext}>Next</button>
                    </>
                )}
                {step === 2 && (
                    <>
                        <label htmlFor="contact">Contact Number:</label>
                        <input
                            type="tel"
                            id="contact"
                            className={errors.contact ? 'error' : ''}
                            value={contact}
                            onChange={(e) => setContact(e.target.value)}
                        />
                        {errors.contact && <div className="error-message">{errors.contact}</div>}

                        <label htmlFor="gender">Gender:</label>
                        <select
                            id="gender"
                            className={errors.gender ? 'error' : ''}
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                        >
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                        {errors.gender && <div className="error-message">{errors.gender}</div>}

                        <label htmlFor="dob">Date of Birth:</label>
                        <input
                            type="date"
                            id="dob"
                            className={errors.dob ? 'error' : ''}
                            value={dob}
                            onChange={(e) => setDob(e.target.value)}
                        />
                        {errors.dob && <div className="error-message">{errors.dob}</div>}

                        <label htmlFor="address">Address:</label>
                        <textarea
                            id="address"
                            className={errors.address ? 'error' : ''}
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                        {errors.address && <div className="error-message">{errors.address}</div>}

                        <button type="button" onClick={handlePrevious}>Previous</button>
                        <button type="button" onClick={handleNext}>Next</button>
                    </>
                )}
                {step === 3 && (
                    <>
                        <label htmlFor="qualification">Qualification:</label>
                        <input
                            type="text"
                            id="qualification"
                            className={errors.qualification ? 'error' : ''}
                            value={qualification}
                            onChange={(e) => setQualification(e.target.value)}
                        />
                        {errors.qualification && <div className="error-message">{errors.qualification}</div>}

                        <label htmlFor="interests">Interests to Study:</label>
                        <textarea
                            id="interests"
                            className={errors.interests ? 'error' : ''}
                            value={interests}
                            onChange={(e) => setInterests(e.target.value)}
                        />
                        {errors.interests && <div className="error-message">{errors.interests}</div>}

                        <label htmlFor="dateOfJoin">Date of Join:</label>
                        <input
                            type="date"
                            id="dateOfJoin"
                            className={errors.dateOfJoin ? 'error' : ''}
                            value={dateOfJoin}
                            onChange={(e) => setDateOfJoin(e.target.value)}
                        />
                        {errors.dateOfJoin && <div className="error-message">{errors.dateOfJoin}</div>}

                        <button type="button" onClick={handlePrevious}>Previous</button>
                        <button type="submit">Register</button>
                    </>
                )}
            </form>
        </div>
    );
};

export default StudentNewUser;


