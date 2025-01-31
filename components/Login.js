import { Fugaz_One } from "next/font/google";
import Button from "./Button";

const fugaz = Fugaz_One({
  variable: "--font-fugaz-one",
  subsets: ["latin"],
  weight: ["400"],
});

const Login = () => {
  return (
    <div className="flex flex-col flex-1 justify-center items-center gap-4">
      <h3 className={`text-4xl sm:text-5xl md:text-6xl  ${fugaz.className}`}>
        Log In / Register
      </h3>
      <p>You&apos;re one step away!</p>
      <input
        className="w-full outline-0 focus:bg-indigo-50 max-w-[400px] mx-auto px-4 py-2 sm:py-3 border border-solid border-indigo-400 duration-200  hover:border-indigo-600 focus:border-indigo-600  rounded-full "
        placeholder="Email"
        type="email"
      />
      <input
        className="w-full max-w-[400px] outline-0  focus:bg-indigo-50 mx-auto px-4 py-2 sm:py-3 border border-solid border-indigo-400 duration-200 hover:border-indigo-600 focus:border-indigo-600  rounded-full "
        placeholder="Password"
        type="password"
      />
      <div className="max-w-[400px] w-full mx-auto">
        <Button text="Submit" full />
      </div>
      <p className="text-center">
        Don&#39;t have an account?{" "}
        <span className="text-indigo-500 cursor-pointer hover:font-semibold duration-200">
          Sign up
        </span>
      </p>
    </div>
  );
};

export default Login;
