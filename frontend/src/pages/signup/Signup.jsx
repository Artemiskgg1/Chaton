import GenderCheckbox from "./GenderCheckbox";
import logo from "../../assets/chaton2.png";
function Signup() {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto bg-zinc-800">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <div>
          <img src={logo} alt="chaton-logo" className="mb-4 mx-auto w-44" />
        </div>
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Sign Up
          <span className="text-purple-500"> Chaton</span>
        </h1>
        <form>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full input input-bordered  h-10"
            />
          </div>
          <div>
            <label className="label p-2 ">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="johndoe"
              className="w-full input input-bordered h-10"
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
            />
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full input input-bordered h-10"
            />
          </div>
          <GenderCheckbox />
          <div className="justify-center items-center flex mt-2 ">
            Already have an account?
            <a
              href="#"
              className="hover:underline hover:text-purple-500 text-base font-semibold "
            >
              Login
            </a>
          </div>
          <div>
            <div className="justify-center items-center flex ">
              <button className="btn btn-primary btn-sm mt-2 bg-purple-500 hover:bg-purple-600 hover:border-purple-600 border-purple-500">
                Sign Up
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
