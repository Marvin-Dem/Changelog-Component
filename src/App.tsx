const dataArray = [
    {
        date: "September 3, 2024",
        event: "Announcing Projects on Frontend Roadmap",
    },
    {
        date: "August 28, 2024",
        event: "Build your learning habits with learning streaks",
    },
    { date: "August 25, 2024", event: "Git and GitHub Roadmap" },
    {
        date: "August 22, 2024",
        event: "Submit your Project Solution and get feedback",
    },
    { date: "August 15, 2024", event: "Backend Project Ideas" },
    { date: "August 10, 2024", event: "Redis Roadmap" },
    {
        date: "August 1, 2024",
        event: "Changelog Page to help you stay in the loop",
    },
];

export default function App() {
    return (
        <div className="border-2 border-black rounded-lg flex flex-col items-center justify-center gap-y-4">
            <h1 className="text-5xl">Changelog</h1>
            <p className="text-gray-400 text-lg">
                Here's everything we have shipped in the past few days
            </p>
            <div className="text-lg flex flex-col">
                {dataArray.map((dataArray) => (
                    <div className="grid grid-cols-12" key={dataArray.date}>
                        <div className="text-gray-500 col-span-4 text-right py-2">
                            {dataArray.date}
                        </div>
                        <div className="flex items-center justify-center relative">
                            <div className="w-3 h-3 bg-black rounded-full absolute"></div>
                            <div className="w-0.5 h-full bg-black"></div>
                        </div>
                        <div className="col-span-7 py-2">{dataArray.event}</div>
                    </div>
                ))}
            </div>
            <button className="bg-black rounded-lg text-white p-2 px-6 hover:bg-gray-700">
                Visit complete Changelog
            </button>
        </div>
    );
}
