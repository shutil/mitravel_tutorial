
export default function HeroSection() {
    return(
        <div className="container mx-auto px-4 lg:px-5 ht">
            <div className="grid grid-cols-2 lg:grid-cols-4 lg:h-full items-center gap-10">
                <div className="col-span-2">
                    <div>
                        <p className="text-6xl lg:text-7xl xl:text-8xl font-bold">Mother Earth Hosts Our Travels</p>
                    </div>
                    <div className="mt-10">
                        <p className="text-gray-500 font-light">The state of Utha in the Unted States is home to lots of beautiful National Parks, & Bryce Canyon National Park ranks as three of the most magnificent & awe inspiring. </p>
                    </div>
                    <div className="mt-10">
                        <button className="bg-[#73AEBB] text-md px-8 py-3 rounded font-semibold text-white">Learn More</button>
                    </div>
                </div>
                <div className="col-span-2 ml-auto">
                    <div className="grid grid-cols-2 gap-6">
                        <img className="mt-auto rounded-xl ml-auto lg:h-[85%] shadow" src="https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80"/>
                        <img className="lg:h-[100%] mt-auto rounded-xl shadow" src="https://images.unsplash.com/photo-1444021465936-c6ca81d39b84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80" />
                    </div>
                    <div className="grid grid-cols-2 mt-6 gap-6">
                        <img className="rounded-xl ml-auto lg:h-[60%] shadow" src="https://images.unsplash.com/photo-1431965400057-a84b80cfdbff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80" />
                        <img className="rounded-xl lg:h-[80%] shadow" src="https://images.unsplash.com/photo-1443926818681-717d074a57af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80" />
                    </div>
                </div>
            </div>
        </div>
    )
};
