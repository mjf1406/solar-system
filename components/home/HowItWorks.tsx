/** @format */

import { APP_NAME, LEVELS } from "@/lib/constants";
import Link from "next/link";

export default function HowItWorks() {
    return (
        <div className="w-full mx-auto mt-20">
            <div className="px-4 max-w-xl flex flex-col justify-center items-center mx-auto">
                <div className="mx-auto mb-10 max-w-2xl text-center lg:mb-8">
                    <h2
                        id="how-it-works"
                        className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0"
                    >
                        How It Works
                    </h2>
                    <p className="mt-1 text-muted-foreground">
                        Learn all about the site and how to get your students to
                        use it effectively.
                    </p>
                </div>
                <h3 className="text-xl font-semibold mb-3">The Levels</h3>
                <p>
                    All content has 8 different reading levels, each tailored to
                    a different grade:
                </p>
                <ul className="text-left ml-8 self-start">
                    {LEVELS.map((level) => (
                        <li
                            key={level.grade}
                            className=""
                        >
                            Grade {level.grade} = {level.name}
                        </li>
                    ))}
                </ul>
                <br />
                <p>
                    When I first started differentiating seriously using RAZ
                    Kids levels and sharing my resources with the rest of my
                    team in grade 5, one of my colleagues noticed that some kids
                    would be embarrassed and/or sad if they saw their level,
                    knew it was low compared to the class, and could see others
                    picking higher levels than them. That very same colleague
                    suggested we stop using their RAZ levels, and instead use
                    words that are seemingly unrelated to their RAZ/reading
                    level on the surface to avoid hurt feelings.
                </p>
                <h3 className="text-xl font-semibold mb-3 mt-8">
                    The Secret Pages
                </h3>
                <p>
                    All content comes with a page that displays all the levels
                    to the student. So, if you want your students to pick the
                    level that they think is best for them, send them something
                    like this link:{" "}
                    <Link
                        className="link"
                        href={
                            "https://diffster.vercel.app/content/solar-system/mercury"
                        }
                    >
                        https://diffster.vercel.app/content/solar-system/mercury
                    </Link>
                    . It is strongly recommended that you use this method when
                    sending {APP_NAME} content to your students. Because this is
                    strongly recommended, as opposed to the below, the below
                    method is intentionally not easily accessible.
                </p>
                <br />
                <p>
                    You can pick a single level for your students to read,
                    should you choose to do so. For example, if you only want to
                    let your students read the Growing level, then you would
                    send them something like this:{" "}
                    <Link
                        className="link"
                        href={
                            "https://diffster.vercel.app/content/solar-system/mercury/growing"
                        }
                    >
                        https://diffster.vercel.app/content/solar-system/mercury/growing
                    </Link>
                    . If you do elect to pick the levels for each student, I
                    suggest you send the level that you picked for each student
                    privately. Even though this option is not easily accessible,
                    I thought it should at least be made available as it&apos;s
                    essentially free, in both time and money, to make available,
                    but not easily accessible. Making it easily accessible would
                    require more time that I want to devote to making content
                    and other websites.
                </p>
            </div>
        </div>
    );
}
