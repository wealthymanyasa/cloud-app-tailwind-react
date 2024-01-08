
const Hero = () => {
    return (
        <div className="w-full h-screen flex flex-col justify-between bg-slate-200 ">

            <div className="grid md:grid-cols-2 m-auto max-w-[1240px]">
                <div className="flex flex-col justify-center md:items-start w-full px-2 py-8">
                    <p className="text-2xl">Unique Sequencing & Production</p>
                    <h1 className="py-3 text-5xl md:text-7xl font-bold"><span className="text-indigo-600">Cloud</span> Manage<span className="text-indigo-600">ment</span></h1>
                    <p className="text-2xl">This is our tech brand</p>
                    <button className="py-3 px-6 sm:w-[60%] my-4">Get Started</button>
                </div>
                <div>
                    <img src="/obertboy.png" className="w-full" alt="heroimage" />
                </div>


            </div>
            {/* <div className="flex justify-center items-center relative">

                <div className="absolute flex flex-col py-8 md:min-w-[760px] bottom-[-35%] 
                mx-1 md:left-1/2 transform md:translate-x-1/2 bg-zinc-200
                border border-slate-300 rounded-xl text-center shadow-xl">
                    <p>Data Services</p>
                    <div className="flex justify-between flex-wrap px-4">
                        <p className="flex py-2 px-4 text-slate-500"><span className="h-6 text-indigo-600">Icon </span>App Security</p>
                        <p className="flex py-2 px-4 text-slate-500"><span className="h-6 text-indigo-600">Icon </span>Dashboard Design</p>
                        <p className="flex py-2 px-4 text-slate-500"><span className="h-6 text-indigo-600">Icon </span>Cloud Data</p>
                        <p className="flex py-2 px-4 text-slate-500"><span className="h-6 text-indigo-600">Icon </span>API</p>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default Hero