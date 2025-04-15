/** @format */
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LEVELS } from "@/lib/constants";

const content = {
    Beginning: {
        heading: "Beginning",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim suscipit quas dolores optio rerum, iusto, quae quos assumenda illo aut dolor sed eaque sequi perferendis quibusdam culpa veniam! Praesentium, nesciunt? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet dolores iusto non iste doloremque? Nam animi, ipsa laborum earum provident dolores tempora eos accusamus quae sed quasi perspiciatis ex. Odit? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet dolores iusto non iste doloremque? Nam animi, ipsa laborum earum provident dolores tempora eos accusamus quae sed quasi perspiciatis ex. Odit?",
    },
    Growing: {
        heading: "Growing",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim suscipit quas dolores optio rerum, iusto, quae quos assumenda illo aut dolor sed eaque sequi perferendis quibusdam culpa veniam! Praesentium, nesciunt? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet dolores iusto non iste doloremque? Nam animi, ipsa laborum earum provident dolores tempora eos accusamus quae sed quasi perspiciatis ex. Odit?",
    },
    Improving: {
        heading: "Improving",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim suscipit quas dolores optio rerum, iusto, quae quos assumenda illo aut dolor sed eaque sequi perferendis quibusdam culpa veniam! Praesentium, nesciunt? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet dolores iusto non iste doloremque? Nam animi, ipsa laborum earum provident dolores tempora eos accusamus quae sed quasi perspiciatis ex. Odit?",
    },
    Rising: {
        heading: "Rising",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim suscipit quas dolores optio rerum, iusto, quae quos assumenda illo aut dolor sed eaque sequi perferendis quibusdam culpa veniam! Praesentium, nesciunt? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet dolores iusto non iste doloremque? Nam animi, ipsa laborum earum provident dolores tempora eos accusamus quae sed quasi perspiciatis ex. Odit?",
    },
    Flourishing: {
        heading: "Flourishing",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim suscipit quas dolores optio rerum, iusto, quae quos assumenda illo aut dolor sed eaque sequi perferendis quibusdam culpa veniam! Praesentium, nesciunt? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet dolores iusto non iste doloremque? Nam animi, ipsa laborum earum provident dolores tempora eos accusamus quae sed quasi perspiciatis ex. Odit?",
    },
    Soaring: {
        heading: "Soaring",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim suscipit quas dolores optio rerum, iusto, quae quos assumenda illo aut dolor sed eaque sequi perferendis quibusdam culpa veniam! Praesentium, nesciunt? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet dolores iusto non iste doloremque? Nam animi, ipsa laborum earum provident dolores tempora eos accusamus quae sed quasi perspiciatis ex. Odit?",
    },
    Excelling: {
        heading: "Excelling",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim suscipit quas dolores optio rerum, iusto, quae quos assumenda illo aut dolor sed eaque sequi perferendis quibusdam culpa veniam! Praesentium, nesciunt? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet dolores iusto non iste doloremque? Nam animi, ipsa laborum earum provident dolores tempora eos accusamus quae sed quasi perspiciatis ex. Odit?",
    },
    Mastering: {
        heading: "Mastering",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim suscipit quas dolores optio rerum, iusto, quae quos assumenda illo aut dolor sed eaque sequi perferendis quibusdam culpa veniam! Praesentium, nesciunt? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet dolores iusto non iste doloremque? Nam animi, ipsa laborum earum provident dolores tempora eos accusamus quae sed quasi perspiciatis ex. Odit?",
    },
};

export default function Home() {
    return (
        <div className="max-w-2xl w-full flex flex-col gap-2 py-5 px-2 md:px-5">
            <h1 className="text-4xl font-semibold">Content</h1>
            <Tabs
                defaultValue={LEVELS[0].name}
                className="w-full"
            >
                <TabsList className="dark:bg-background ">
                    {LEVELS.map((item) => (
                        <TabsTrigger
                            key={item.name}
                            value={item.name}
                            className="rounded-b-none"
                        >
                            {item.name}
                        </TabsTrigger>
                    ))}
                </TabsList>
                {LEVELS.map((item) => (
                    <TabsContent
                        key={item.name}
                        value={item.name}
                        className="bg-background dark:bg-muted w-full mx-auto -mt-3 p-5 -ml-5 rounded-2xl"
                    >
                        <p>{content[item.name as keyof typeof content].text}</p>
                    </TabsContent>
                ))}
            </Tabs>
        </div>
    );
}
