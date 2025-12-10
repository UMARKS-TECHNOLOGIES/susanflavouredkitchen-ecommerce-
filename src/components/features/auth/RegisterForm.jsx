import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../../utils/validation/register";
import propTypes from "prop-types";

export default function RegisterForm({ onSubmit, loading, error }) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(registerSchema),
    });

    return (
        <section>

            <form onSubmit={handleSubmit(onSubmit)} className="register-form">

                <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input
                        type="text"
                        id="name"
                        {...register("name")}
                        placeholder="Enter your full name"
                    />
                    {errors.name && <p className="error-message">{errors.name.message}</p>}
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                        type="email"
                        id="email"
                        {...register("email")}
                        placeholder="Enter your email"
                    />
                    {errors.email && <p className="error-message">{errors.email.message}</p>}
                </div>

                <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                        type="text"
                        id="phone"
                        {...register("phone")}
                        placeholder="Enter your phone number"
                    />
                    {errors.phone && <p className="error-message">{errors.phone.message}</p>}
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        {...register("password")}
                        placeholder="Enter your password"
                    />
                    {errors.password && <p className="error-message">{errors.password.message}</p>}
                </div>

                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        {...register("confirmPassword")}
                        placeholder="Confirm your password"
                    />
                    {errors.confirmPassword && (
                        <p className="error-message">{errors.confirmPassword.message}</p>
                    )}
                </div>

                {error && <p className="error-message form-error">{error}</p>}

                <button
                    type="submit"
                    className="submit-button"
                    disabled={loading}
                >
                    {loading ? "Registering..." : "Create Account"}
                </button>
            </form>
        </section>
    );
}

RegisterForm.propTypes = {
    onSubmit: propTypes.func.isRequired,
    loading: propTypes.bool,
    error: propTypes.string,
};
