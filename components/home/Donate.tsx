/** @format */

import KofiDonation from "../third-party-brands/KofiButton";
import PatreonDonation from "../third-party-brands/PatreonButton";

export default function Donate() {
    return (
        <div className="w-full flex flex-col items-center justify-center mt-24">
            <div className="mx-auto mb-10 max-w-2xl text-center lg:mb-8">
                <h2
                    id="faq"
                    className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0"
                >
                    Donate
                </h2>
                <p className="mt-1 text-muted-foreground">
                    Show your support by subscribing to my Patreon or buying me
                    a tea 😁
                </p>
            </div>
            <div className="flex flex-col justify-center items-center gap-5 max-w-lg">
                <div>
                    I have spent a lot of time on this website. If you and/or
                    your students have gotten any use out of it, please consider
                    donating via any of the below methods.
                </div>
                <div className="flex gap-5 justify-center items-center flex-wrap">
                    <KofiDonation />
                    <PatreonDonation />
                </div>
            </div>
        </div>
    );
}
