import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";

const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [errorMessage, setErrorMessage] = useState("");
  const [isOtpModalOpen, setIsOtpModalOpen] = useState(false);
  const [email, setEmail] = useState("");

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("/api/check-email", {
        email: data.email,
      });
      if (response.data.isRegistered) {
        setEmail(data.email);
        setIsOtpModalOpen(true);
      } else {
        setErrorMessage("Email is not registered");
      }
    } catch (error) {
      console.error(error);
      setErrorMessage("Something went wrong. Please try again later.");
    }
  };

  const handleOtpSubmit = (otp) => {
    console.log("OTP submitted: ", otp);
    setIsOtpModalOpen(false);
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Forgot Password</h2>
      <p className="text-sm mb-4">
        Enter your email address to reset your password.
      </p>

      {errorMessage && (
        <div className="text-red-500 text-sm mb-4">{errorMessage}</div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                message: "Invalid email address",
              },
            })}
            className="mt-2 p-2 w-full border border-gray-300 rounded-md"
          />
          {errors.email && (
            <span className="text-red-500 text-xs mt-1">
              {errors.email.message}
            </span>
          )}
        </div>

        <div>
          <button
            type="submit"
            className="w-full py-2  bg-black text-white rounded-md hover:bg-gray-800 transition"
          >
            Send Reset Link
          </button>
        </div>
      </form>

      <div className="mt-4 text-center">
        <p className="text-sm">
          Remembered your password?{" "}
          <a href="/signin" className="text-blue-600 hover:underline">
            Sign In
          </a>
        </p>
      </div>

      {isOtpModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-md w-96">
            <h3 className="text-xl font-bold mb-4">Enter OTP</h3>
            <p className="text-sm mb-4">
              We have sent an OTP to {email}. Please enter it below to reset
              your password.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const otp = e.target.otp.value;
                handleOtpSubmit(otp);
              }}
            >
              <div>
                <label htmlFor="otp" className="block text-sm font-medium">
                  OTP
                </label>
                <input
                  type="text"
                  id="otp"
                  name="otp"
                  required
                  className="mt-2 p-2 w-full border border-gray-300 rounded-md"
                />
              </div>

              <div className="mt-4">
                <button
                  type="submit"
                  className="w-full py-2  bg-black text-white rounded-md hover:bg-gray-800 transition"
                >
                  Verify OTP
                </button>
              </div>
            </form>

            <div className="mt-4 text-center">
              <button
                onClick={() => setIsOtpModalOpen(false)}
                className="w-full py-2  bg-black text-white rounded-md hover:bg-gray-800 transition"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ForgotPassword;
