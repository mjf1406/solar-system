/** @format */
import Image from "next/image";

export default function Home() {
    return (
        <div className="relative min-h-screen overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-[-1] bg-black">
                <Image
                    src="/img/home/solar-system.webp"
                    alt="Solar System"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    className="opacity-70 transform rotate-90" // rotate as needed so the sun is at the top
                />
                {/* <div className="absolute inset-0 bg-gray-900 opacity-30" /> */}
            </div>

            {/* Main Content */}
            <div className="relative z-10 flex flex-col min-h-screen">
                {/* Hero Section */}
                <header className="flex-grow flex flex-col items-center justify-center text-center px-4 sm:px-0">
                    <h1 className="text-4xl sm:text-6xl font-bold text-white mb-4">
                        Explore the Universe
                    </h1>
                    <p className="text-lg sm:text-2xl text-gray-200 max-w-2xl">
                        Journey through the cosmos and discover the beauty of
                        our solar system. Scroll down to see the planets drift
                        by.
                    </p>
                </header>

                {/* Features Section */}
                <section className="py-16">
                    <div className="max-w-5xl mx-auto px-4">
                        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-8">
                            Features
                        </h2>
                        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                            <div className="bg-gray-800 bg-opacity-70 p-6 rounded-lg shadow-lg">
                                <h3 className="text-xl font-semibold text-white mb-2">
                                    Interactive Planets
                                </h3>
                                <p className="text-gray-300">
                                    Watch the planets rotate and orbit as you
                                    scroll.
                                </p>
                            </div>
                            <div className="bg-gray-800 bg-opacity-70 p-6 rounded-lg shadow-lg">
                                <h3 className="text-xl font-semibold text-white mb-2">
                                    Cosmic Themes
                                </h3>
                                <p className="text-gray-300">
                                    Enjoy a stunning layout inspired by the
                                    mysteries of space.
                                </p>
                            </div>
                            <div className="bg-gray-800 bg-opacity-70 p-6 rounded-lg shadow-lg">
                                <h3 className="text-xl font-semibold text-white mb-2">
                                    Fully Static
                                </h3>
                                <p className="text-gray-300">
                                    Built entirely with static pages for blazing
                                    performance.
                                </p>
                            </div>
                            {/* Add more feature cards as needed */}
                        </div>
                    </div>
                </section>
                <section className="py-16">
                    <div className="max-w-5xl mx-auto px-4">
                        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-8">
                            Features
                        </h2>
                        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                            <div className="bg-gray-800 bg-opacity-70 p-6 rounded-lg shadow-lg">
                                <h3 className="text-xl font-semibold text-white mb-2">
                                    Interactive Planets
                                </h3>
                                <p className="text-gray-300">
                                    Watch the planets rotate and orbit as you
                                    scroll.
                                </p>
                            </div>
                            <div className="bg-gray-800 bg-opacity-70 p-6 rounded-lg shadow-lg">
                                <h3 className="text-xl font-semibold text-white mb-2">
                                    Cosmic Themes
                                </h3>
                                <p className="text-gray-300">
                                    Enjoy a stunning layout inspired by the
                                    mysteries of space.
                                </p>
                            </div>
                            <div className="bg-gray-800 bg-opacity-70 p-6 rounded-lg shadow-lg">
                                <h3 className="text-xl font-semibold text-white mb-2">
                                    Fully Static
                                </h3>
                                <p className="text-gray-300">
                                    Built entirely with static pages for blazing
                                    performance.
                                </p>
                            </div>
                            {/* Add more feature cards as needed */}
                        </div>
                    </div>
                </section>
                <section className="py-16">
                    <div className="max-w-5xl mx-auto px-4">
                        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-8">
                            Features
                        </h2>
                        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                            <div className="bg-gray-800 bg-opacity-70 p-6 rounded-lg shadow-lg">
                                <h3 className="text-xl font-semibold text-white mb-2">
                                    Interactive Planets
                                </h3>
                                <p className="text-gray-300">
                                    Watch the planets rotate and orbit as you
                                    scroll.
                                </p>
                            </div>
                            <div className="bg-gray-800 bg-opacity-70 p-6 rounded-lg shadow-lg">
                                <h3 className="text-xl font-semibold text-white mb-2">
                                    Cosmic Themes
                                </h3>
                                <p className="text-gray-300">
                                    Enjoy a stunning layout inspired by the
                                    mysteries of space.
                                </p>
                            </div>
                            <div className="bg-gray-800 bg-opacity-70 p-6 rounded-lg shadow-lg">
                                <h3 className="text-xl font-semibold text-white mb-2">
                                    Fully Static
                                </h3>
                                <p className="text-gray-300">
                                    Built entirely with static pages for blazing
                                    performance.
                                </p>
                            </div>
                            {/* Add more feature cards as needed */}
                        </div>
                    </div>
                </section>
                <section className="py-16">
                    <div className="max-w-5xl mx-auto px-4">
                        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-8">
                            Features
                        </h2>
                        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                            <div className="bg-gray-800 bg-opacity-70 p-6 rounded-lg shadow-lg">
                                <h3 className="text-xl font-semibold text-white mb-2">
                                    Interactive Planets
                                </h3>
                                <p className="text-gray-300">
                                    Watch the planets rotate and orbit as you
                                    scroll.
                                </p>
                            </div>
                            <div className="bg-gray-800 bg-opacity-70 p-6 rounded-lg shadow-lg">
                                <h3 className="text-xl font-semibold text-white mb-2">
                                    Cosmic Themes
                                </h3>
                                <p className="text-gray-300">
                                    Enjoy a stunning layout inspired by the
                                    mysteries of space.
                                </p>
                            </div>
                            <div className="bg-gray-800 bg-opacity-70 p-6 rounded-lg shadow-lg">
                                <h3 className="text-xl font-semibold text-white mb-2">
                                    Fully Static
                                </h3>
                                <p className="text-gray-300">
                                    Built entirely with static pages for blazing
                                    performance.
                                </p>
                            </div>
                            {/* Add more feature cards as needed */}
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="py-6 bg-black bg-opacity-80">
                    <div className="max-w-4xl mx-auto text-center">
                        <p className="text-sm text-gray-400">
                            &copy; {new Date().getFullYear()} Cosmic Web. All
                            rights reserved.
                        </p>
                    </div>
                </footer>
            </div>
        </div>
    );
}
