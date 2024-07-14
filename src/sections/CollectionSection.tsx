import Button from "../components/Button";
import Heading from "../components/Heading";

const handleGetStartedClick = () => {
    window.location.href = "https://ozoneprotocol.medium.com/";
};

const benefits = [
    {
        title: "Decentralized Governance",
        description:
            "Ozone Protocol empowers its community through decentralized governance. Stakeholders have a say in the protocol’s development and decisions.",
    },
    {
        title: "Community Engagement",
        description:
            "We value our community and foster active participation through regular events, AMAs, and feedback loops to ensure our protocol evolves to meet user needs.",
    },
    {
        title: "Innovative Technologies",
        description:
            "Ozone Protocol leverages cutting-edge technologies, including Layer 2 scaling solutions, to ensure high throughput and minimal latency.",
    },
    {
        title: "Future Vision",
        description:
            "Our vision is to build a sustainable and inclusive digital economy. We are constantly innovating to stay ahead of industry trends and provide long-term value.",
    },
];

export default function CollectionSection() {
    return (
        <section className="w-full flex flex-col md:flex-row gap-4 items-center">
            <div className="flex-[1] text-start col gap-4 items-start pr-4">
                <Heading heading="Ozone Protocol" subHeading="Innovations & Community" />
                <span className="text-app_gray/80">
                    Discover how Ozone Protocol is revolutionizing the blockchain space with its unique features and active community engagement.
                </span>
                <Button outline onClick={handleGetStartedClick}>Learn More</Button>
            </div>
            <div className="flex-[2] flex flex-col gap-4">
                {benefits.map((benefit, index) => (
                    <div key={index} className="bg-white/10 p-4 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-bold">{benefit.title}</h3>
                        <p className="text-app_gray/80">{benefit.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
