const DataArray = [
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
        <div>
            <div>Changelog</div>
            <div>Here's everything we have shipped in the past few days</div>
            <div>
                {DataArray.map((DataArray) => (
                    <div>
                        {DataArray.date} {DataArray.event}
                    </div>
                ))}
            </div>
            <button>Visit complete Changelog</button>
        </div>
    );
}
