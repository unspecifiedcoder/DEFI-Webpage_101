import Button from "../components/Button";

export default function MainSection() {
    const handleGetStartedClick = () => {
        window.location.href = "https://ozoneprotocol.medium.com/introducing-ozone-protocol-revolutionizing-cross-chain-liquidity-and-privacy-in-defi-c5c629258abf";
    };

    const handleJoinDiscordClick = () => {
        window.location.href = "https://discord.com/invite/mPFCf6d7";
    };

    return (
        <section className="w-full flex flex-col md:flex-row center gap-8">
            <div className="text md:w-1/2 col gap-8">
                <h1 className="md:text-8xl text-5xl font-redzone">
                    Unlock Seamless Cross-Chain Transactions.
                </h1>
                <span className="text-app_gray leading-8 text-xl">
                    Ozone Protocol enables fast, secure, and private transactions across multiple blockchains, providing limitless liquidity and advanced interoperability.
                </span>
                <div className="row gap-4">
                    <Button onClick={handleGetStartedClick}>Get Started</Button>
                    <Button outline={true} onClick={handleJoinDiscordClick}>Join Discord</Button>
                </div>
            </div>
            <div className="relative md:w-1/2 col gap-4 center">
                <img
                    src="/assets/oo.png"
                    alt="ozone_logo"
                    className="w-[86%] h-[70%] object-contain"
                />
            </div>
        </section>
    );
}
