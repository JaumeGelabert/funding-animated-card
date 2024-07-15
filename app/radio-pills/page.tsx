import CustomPill from "@/components/custom/CustomPill";

const data = [
  "Barcelona",
  "Madrid",
  "New York",
  "Lisbon",
  "Paris",
  "London",
  "Berlin",
  "Rome",
  "Tokyo",
  "Sydney",
  "Santorini",
  "Positano",
  "Minsk",
  "Valencia",
  "Santander",
  "San Francisco",
  "Los Angeles"
];

export default function Page() {
  return (
    <div className="container mt-20 flex flex-col justify-center items-center">
      <div className="w-[600px] flex flex-col justify-start items-start gap-6">
        <p className="font-medium">Which places you wanna visit?</p>
        <div className="flex flex-wrap flex-row max-w-[550px] gap-2">
          {data.map((city) => (
            <CustomPill city={city} />
          ))}
        </div>
      </div>
    </div>
  );
}
