import Heading from "../components/Heading";

const roadmapSteps = [
    { title: "1.Bitcoin and Ethereum", subtitle: "Mainchain" },
    { title: "2.Bitcoin and Ethereum", subtitle: "Layer 2 Chains" },
    { title: "3.Memecoins", subtitle: "" },
    { title: "4.BRC 20", subtitle: "Ordinals and Runes" },
    { title: "5.Aggregation", subtitle: "as a Service" },
];

export default function RoadmapSection() {
    return (
        <section className="w-full flex flex-col items-center">
            <Heading heading="Roadmap" subHeading="Our Journey" />
            <div className="roadmap-container">
                {roadmapSteps.map((step, index) => (
                    <div className="roadmap-step" key={index}>
                        <div className="step-content">
                            <h3>{step.title}</h3>
                            {step.subtitle && <p>{step.subtitle}</p>}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
