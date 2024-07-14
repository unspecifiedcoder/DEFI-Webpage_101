import Heading from "../components/Heading";
import QAComponent, { QAProps } from "../components/Q&A";

const questions: QAProps[] = [
    {
        question: "What is Ozone Protocol?",
        answer: "Ozone Protocol is a decentralized aggregation layer that enables seamless cross-chain transactions with enhanced security and privacy.",
    },
    {
        question: "How does Ozone ensure security?",
        answer: "Ozone employs cutting edge FROST signature scheme and powerful slashing mechanics which ensures authorities decentralized and malacious actors are punished.",
    },
    {
        question: "What is the FROST Algorithm?",
        answer: "The FROST Algorithm is a cutting-edge technology used by Ozone to ensure decentralizing authorithy, fastest transaction speeds in the market.",
    },
    {
        question: "How does Ozone handle liquidity?",
        answer: "Ozone relies on \"LOCK AND MINT\" and atomic swaps as its primary bridging tecchniques.Additionally, incentivizing users to rebalance liquidity through lower fees.",
    },
    {
        question: "What are dark pools?",
        answer: "Dark pools in Ozone protect transaction data even from the platform itself, ensuring maximum privacy.",
    },
    {
        question: "How does Ozone handle staking?",
        answer: "Participants can stake Ozone tokens to join the network, earn rewards, and ensure economic security.",
    },
    {
        question: "What are the revenue models for Ozone?",
        answer: "Ozone generates revenue through transaction fees, aggregation as a service, yield farming, flash loans, back running, and community activities.",
    },
    {
        question: "How is governance handled in Ozone?",
        answer: "Ozone operates a Decentralized Autonomous Organization (DAO) where significant Ozone token holders can vote on protocol decisions.",
    },
];

export default function FAQSection() {
    return (
        <section className="w-full col gap-4">
            <Heading
                className="text-center"
                heading="FAQs"
                subHeading="Frequently Asked Questions"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 place-items-start mt-6">
                {questions.map((prop, i) => (
                    <QAComponent key={i} {...prop} />
                ))}
            </div>

            {/* <div className="flex flex-row flex-wrap mt-6">
                {questions.map((prop, i) => (
                    <div key={i} className="flex-[100%] md:flex-[50%]">
                        <QAComponent {...prop} />
                    </div>
                ))}
            </div> */}
        </section>
    );
}
