import logo from "../../assets/chaton2.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import useLogin from "../../hooks/useLogin.js";
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { loading, login } = useLogin();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  };
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto bg-zinc-800">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <img src={logo} alt="chaton-logo" className="mb-4 mx-auto w-44" />
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login
          <span className=" text-purple-500"> Chaton</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              className="w-full input input-bordered h-10"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="justify-center items-center flex mt-2 ">
            Don't have an account?
            <Link
              to="/signup"
              className="hover:underline hover:text-purple-500 text-base font-semibold "
            >
              Register
            </Link>
          </div>
          <div className="justify-center items-center flex ">
            <button
              className="btn btn-primary btn-sm mt-2 bg-purple-500 hover:bg-purple-600 hover:border-purple-600 border-purple-500"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Login"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
