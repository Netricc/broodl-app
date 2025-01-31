import { Fugaz_One } from "next/font/google";
import Calendar from "./Calendar";
const fugaz = Fugaz_One({
  variable: "--font-fugaz-one",
  subsets: ["latin"],
  weight: ["400"],
});

const Dashboard = () => {
  const statuses = {
    num_days: 14,
    time_remaining: "13:14:26",
    date: new Date().toDateString(),
  };

  const moods = {
    "&*@#$": "😭",
    Sad: "😢",
    Existing: "😐",
    Good: "😊",
    Elated: "😍",
  };

  return (
    <div className="flex flex-col flex-1 gap-8 sm:-12 md:gap-16">
      <div className="grid grid-cols-3 bg-indigo-50 text-indigo-500  p-4 gap-4 rounded-lg">
        {Object.keys(statuses).map((status, statusIndex) => {
          return (
            <div
              key={statusIndex}
              className="p-4 flex flex-col gap-1 sm:gap-2 sm:mx-auto"
            >
              <p className="font-medium uppercase text-xs sm:text-sm">
                {status.replaceAll("_", " ")}
              </p>
              <p
                className={`text-base sm:text-lg truncate  ${fugaz.className}`}
              >
                {statuses[status]}
              </p>
            </div>
          );
        })}
      </div>
      <h4
        className={`text-4xl sm:text-5xl md:text-6xl text-center ${fugaz.className}`}
      >
        How do you <span className="textGradient">feel</span> today?
      </h4>

      <div className="flex items-stretch flex-wrap gap-4">
        {Object.keys(moods).map((mood, moodIndex) => {
          return (
            <button
              className={`p-4 px-5 rouned-2xl purpleShadow flex flex-col gap-2 items-center duration-200 bg-indigo-50 hover:bg-indigo-100 text-center flex-1`}
              key={moodIndex}
            >
              <p className="text-4xl sm:text-5xl md:text-6xl">{moods[mood]}</p>
              <p
                className={`text-indigo-500 text-xs sm:text-sm md:text-base ${fugaz.className}`}
              >
                {mood}
              </p>
            </button>
          );
        })}
      </div>
      <Calendar />
    </div>
  );
};

export default Dashboard;
