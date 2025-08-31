import { useRef } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function Signin() {
  const usernameRef = useRef<HTMLInputElement>();
  const passwordRef = useRef<HTMLInputElement>();
  const navigate = useNavigate();

  async function signin() {
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;

    if (!username || !password) {
      alert("Please fill in both fields!");
      return;
    }

    try {
      const response = await axios.post(`${BACKEND_URL}/api/v1/signin`, { username, password });
      const jwt = response.data.token;
      localStorage.setItem("token", jwt);
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      alert("Signin failed. Please check your credentials.");
    }
  }

  return (
    <div className="h-screen w-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white rounded-2xl shadow-lg p-10 w-full max-w-md">
       
        <h1 className="text-2xl font-bold text-center mb-6">Welcome Back</h1>

        
        <div className="space-y-4 w-10">
          <Input reference={usernameRef} placeholder="Username" />
          <Input reference={passwordRef} placeholder="Password"  />
        </div>

        <div className="mt-6">
          <Button
            onClick={signin}
            loading={false}
            variant="primary"
            text="Sign In"
            fullWidth={true}
          />
        </div>

        <p className="mt-4 text-center text-sm text-gray-500">
          Don't have an account?{" "}
          <span
            className="text-blue-500 cursor-pointer hover:underline"
            onClick={() => navigate("/signup")}
          >
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
}
