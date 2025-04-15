/** @format */

import { APP_NAME } from "@/lib/constants";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "../ui/accordion";

export default function FAQ() {
    return (
        <div className="w-full mx-auto mt-20">
            <div className=" px-4 max-w-7xl flex flex-col justify-center items-center mx-auto">
                <div className="mx-auto mb-10 max-w-2xl text-center lg:mb-14">
                    <h2
                        id="faq"
                        className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0"
                    >
                        FAQ
                    </h2>
                    <p className="mt-1 text-muted-foreground">
                        Got questions? We&apos;ve got answers.
                    </p>
                </div>
                <Accordion
                    type="single"
                    collapsible
                    className="w-full max-w-2xl"
                >
                    <AccordionItem value="item-1">
                        <AccordionTrigger>It&apos;s free!</AccordionTrigger>
                        <AccordionContent>
                            {APP_NAME} will be free for as long as it costs me
                            nothing to host it. I do accept donations if you
                            feel so inclined. Click{" "}
                            <a
                                className="link"
                                href="#donate"
                            >
                                here
                            </a>{" "}
                            to donate.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger>
                            Where do I submit feature requests and offer
                            suggestions?
                        </AccordionTrigger>
                        <AccordionContent>
                            Feature requests and suggestions can be submitted{" "}
                            <a
                                href="#"
                                className="underline"
                            >
                                COMING SOON
                            </a>
                            .
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                        <AccordionTrigger>
                            Where do I submit feedback?
                        </AccordionTrigger>
                        <AccordionContent>
                            High-quality feedback discusses the issue like you
                            are speaking with your doctor. The developers for{" "}
                            <a
                                className="underline"
                                href="https://playruneterra.com/en-sg/news/dev/giving-feedback-like-a-game-dev/"
                            >
                                Legends of Runeterra put it best
                            </a>{" "}
                            when they said,{" "}
                            <i>
                                “Describe your experience the way you might
                                explain how you&apos;re feeling to a doctor
                                (without all the personal information).”
                            </i>{" "}
                            Feedback, both positive and negative, can be
                            submitted{" "}
                            <a
                                href="#"
                                className="underline"
                            >
                                COMING SOON
                            </a>
                            .
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    );
}
