import Heading from "../components/Heading";
import { SectionProps } from "../types";

const tags = [
    "Interoperability",
    "Limitless Liquidity",
    "Censorship Resistance",
    "Fast Transactions",
    "Secure and Private",
    "Dark Pools Integration",
];

export default function AboutSection() {
    return (
        <section className="w-full flex flex-col-reverse md:flex-row-reverse items-center">
            <div className="text md:w-1/2 col gap-4 my-2">
                <Heading
                    className="max-w-[90%]"
                    heading="About Us"
                    subHeading="Discover the Future of Decentralized Finance with Ozone Protocol"
                />
                <span className="text-app_gray/80 leading-8 text-xl">
                    Ozone Protocol revolutionizes cross-chain transactions by providing a decentralized aggregation layer that ensures privacy, security, and limitless liquidity. Our advanced FROST algorithm guarantees the fastest transaction speeds, while dark pools integration protects transaction data even from the platform itself.
                </span>
                <div className="row gap-2">
                    {tags.map((tag, i) => (
                        <button
                            key={i}
                            className="rounded-full px-4 py-3 bg-white/20 hover:bg-white/30"
                        >
                            {tag}
                        </button>
                    ))}
                </div>
            </div>
            <div className="md:w-1/2 my-2 h-full">
                <img
                    src="/assets/robo.jpg"
                    alt="Ozone Protocol Logo"
                    className="object-contain max-w-[80%] max-h-[90%] mx-auto"
                />
            </div>
        </section>
    );
}
