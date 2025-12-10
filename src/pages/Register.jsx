import RegisterForm from "../components/features/auth/RegisterForm";
import { useRegister } from "../hooks/auth/useRegister";
import { useState } from "react";
import Abt2 from "../assets/Abt2.svg";

export default function Register() {
    const { handleRegister, loading, error } = useRegister();
    const [successMessage, setSuccessMessage] = useState("");

    const onSubmit = async (values) => {
        const response = await handleRegister(values);
        if (response.success) {
            setSuccessMessage("Your account has been created successfully!");
        } else {
            alert(response.error || "Registration failed. Please try again.");
        }
    };

    return (
        <div className="register-page">
         <div className="image-container">
                <img src={Abt2} alt="Register" className="register-image" />
                <div className="image-text">
                <h1>Create Account</h1>
                    <p>Join Us & Enjoy Fresh, Authentic Meals Delivered Cleanly & Fast!</p>
                </div>
            </div>
            <RegisterForm onSubmit={onSubmit} loading={loading} error={error} />
            {successMessage && <p className="success-message">{successMessage}</p>}

            <p>
                Already have an account? <a href="/login">Login here</a>.
            </p>
        </div>
    );
}