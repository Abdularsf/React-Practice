import "./index.css";
import { useState } from "react";


export const RegistrationForm = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const handleInputChange = (e) =>{
        const[name,value] = e.target;
        switch(name){}
    }

    return (
        <>
            <form>
                <div className="container">
                    <h1>Sign up</h1>
                    <p>Please fill in this form to create an account.</p>
                    <label htmlFor="firstName">
                        First Name
                    </label>
                    <input
                        type="text"
                        name="firstName"
                        placeholder="Enter First Name"
                        value={firstName}
                        onChange={handleInputChange}
                        required
                    />
                    <label htmlFor="lastName">
                        Last Name
                    </label>
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Enter Last Name"
                        value={lastName}
                        onChange={handleInputChange}
                        required
                    />

                    <label htmlFor="email">
                        <b>Email</b>
                    </label>
                    <input
                        type="text"
                        placeholder="Enter Email"
                        name="email"
                        required
                        value={email}
                        onChange={handleInputChange}

                    />

                    <label htmlFor="password">
                        <b>Password</b>
                    </label>
                    <input
                        type="password"
                        placeholder="Enter Password"
                        name="password"
                        required
                        value={password}
                        onChange={handleInputChange}

                    />

                    <label htmlFor="phone">
                        <b>Phone Number</b>
                    </label>

                    <input
                        type="phone"
                        name="phone"
                        placeholder="9876543211"
                        required
                        value={phoneNumber}
                        onChange={handleInputChange}

                    />

                    <p>
                        By creating an account you agree to our
                        <a href="#" style={{ color: "dodgerblue" }}>
                            Terms & Privacy
                        </a>
                    </p>

                    <div className="clearfix">
                        <button type="submit" className="btn">
                            Sign Up
                        </button>
                    </div>

                </div>
            </form>

            <section
                className="summary"
                style={{ textAlign: "center", marginTop: "30px" }}
            >
            </section>
        </>
    )
}

// export const RegistrationForm = () => {

//     // const handleInputChange = (e) => {

//     const [firstName, setFirstName] = useState("");
//     const [lastName, setLastName] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [phoneNumber, setPhoneNumber] = useState("");

//     const handleInputChange = (e) => {

//         const { name, value } = e.target

//         switch (name) {
//             case "firstName":
//                 setFirstName(value)
//                 break
//             case "lastName":
//                 setLastName(value)
//                 break
//             case "email":
//                 setEmail(value)
//                 break
//             case "password":
//                 setPassword(value)
//                 break
//             case "phone":
//                 setPhoneNumber(value)
//                 break
//         }
//     }

//     const handleFormSubmit = (event) =>{
//         event.preventDefault();

//         const form = {
//             firstName,
//             lastName,
//             email,
//             password,
//             phoneNumber
//         }
//     }

//     return (
//         <>
//             <form onSubmit={handleFormSubmit}>
//                 <div className="container">
//                     <h1>Sign Up</h1>
//                     <p>Please fill in this form to create an account.</p>

//                     <label htmlFor="firstName">
//                         <b>First Name</b>
//                     </label>
//                     <input
//                         type="text"
//                         name="firstName"
//                         placeholder="Enter firstName"
//                         required
//                         value={firstName}
//                         onChange={handleInputChange}
//                     />

//                     <label htmlFor="lastName">
//                         <b>Last Name</b>
//                     </label>
//                     <input
//                         type="text"
//                         name="lastName"
//                         placeholder="Enter lastName"
//                         required
//                         value={lastName}
//                         onChange={handleInputChange}

//                     />

//                     <label htmlFor="email">
//                         <b>Email</b>
//                     </label>
//                     <input
//                         type="text"
//                         placeholder="Enter Email"
//                         name="email"
//                         required
//                         value={email}
//                         onChange={handleInputChange}

//                     />

//                     <label htmlFor="password">
//                         <b>Password</b>
//                     </label>
//                     <input
//                         type="password"
//                         placeholder="Enter Password"
//                         name="password"
//                         required
//                         value={password}
//                         onChange={handleInputChange}

//                     />

//                     <label htmlFor="phone">
//                         <b>Phone Number</b>
//                     </label>

//                     <input
//                         type="phone"
//                         name="phone"
//                         placeholder="9876543211"
//                         required
//                         value={phoneNumber}
//                         onChange={handleInputChange}

//                     />

//                     <p>
//                         By creating an account you agree to our
//                         <a href="#" style={{ color: "dodgerblue" }}>
//                             Terms & Privacy
//                         </a>
//                     </p>

//                     <div className="clearfix">
//                         <button type="submit" className="btn">
//                             Sign Up
//                         </button>
//                     </div>
//                 </div>
//             </form>

//             <section
//                 className="summary"
//                 style={{ textAlign: "center", marginTop: "30px" }}
//             >
//                 <p>
//                     Hello, my name is
//                     <span>
//                         {firstName} {lastName}
//                     </span>
//                     . My email address is <span>{email}</span> and my phone number is
//                     <span>{phoneNumber}</span>.
//                 </p>
//             </section>
//         </>
//     );
// };
// }