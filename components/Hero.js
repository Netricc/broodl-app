import { Fugaz_One } from "next/font/google";
import Button from "./Button";
import Calendar from "./Calendar";
const fugaz = Fugaz_One({
  variable: "--font-fugaz-one",
  subsets: ["latin"],
  weight: ["400"],
});

const Hero = () => {
  return (
    <div className="py-4 md:py-10 flex flex-col gap-4 sm:gap-8">
      <h1
        className={
          "text-5xl  sm:text-6xl  md:text-7xl  text-center  " + fugaz.className
        }
      >
        <span className="textGradient">Broodl</span>
        helps you track you
        <span className="textGradient">daily</span>
        mood!
      </h1>

      <p className="text-lg w-full mx-auto max-w-[600px]  sm:text-xl md:text-2xl text-center">
        Create your mood record and see how you feel on{" "}
        <span className="font-semibold">every day of every year.</span>
      </p>
      <div className="grid w-fit mx-auto grid-cols-2 gap-4">
        <Button text="Sign Up" />
        <Button text="Login" dark />
      </div>
      <Calendar />
    </div>
  );
};

export default Hero;
