
const Pricing = () => {
    return (
        <div id="pricing" className="w-full text-white my-24">
            <div className="w-full h-[800px] bg-slate-900 mix-blend-overlay absolute"></div>
            <div className="max-w-[1240px] mx-auto py-12">
                <div className="text-center py-8 text-slate-300 relative">
                    <h2 className="text-3xl uppercase">Pricing</h2>
                    <h3 className="text-5xl font-bold text-white py-8">The right price for your research.</h3>
                    <p className="text-3xl">Remember, the right price is not only about cost but
                        also about the value your research brings. </p>
                </div>

                <div className="grid md:grid-cols-2 ">
                    <div className="bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative">
                        <span className="uppercase px-3 py-1 bg-indigo-400 rounded-2xl text-sm">Databases</span>
                        <br />
                        <div className="pt-4">
                            <span className=" text-sm">Starting at</span>
                        </div>
                        <div>
                            <p className="text-6xl font-bold py-4 flex">$9<span className="text-xl text-slate-500 flex flex-col justify-end">/month</span></p>
                        </div>
                        <p className="text-xl py-8 text-slate-500">Fully managed and maintained </p>
                        <div className="text-2xl ">
                            <p className="flex py-4"><span className="w-8 mr-5 text-green-600"></span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-green-600">
                                <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
                            </svg>
                            Managed MySQL, and Managed Databases</p>
                            <p className="flex py-4"><span className="w-8 mr-5 text-green-600"></span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-green-600">
                                <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
                            </svg>
                            Managed MongoDB, Kafka, PostgreSQL.</p>
                            <p className="flex py-4"><span className="w-8 mr-5 text-green-600"></span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-green-600">
                                <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
                            </svg>
                      
                            Worry-free setup, maintenance, and easy migration</p>
                            <p className="flex py-4"><span className="w-8 mr-5 text-green-600"></span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-green-600">
                                <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
                            </svg>
                            Free daily backups and more!</p>
                            <p className="flex py-4"><span className="w-8 mr-5 text-green-600"></span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-green-600">
                                <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
                            </svg>
                            Automated failover, and more!</p>

                            <button className="w-full py-4 my-4 ">Get Started</button>
                        </div>

                    </div>
                    <div className="bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative">
                        <span className="uppercase px-3 py-1 bg-purple-400 rounded-2xl text-sm">Kubernetes</span>
                        <div className="pt-4">
                            <span className=" text-sm">Starting at</span>
                        </div>
                        <div>
                            <p className="text-6xl font-bold py-4 flex">$19<span className="text-xl text-slate-500 flex flex-col justify-end">/month</span></p>
                        </div>
                        <p className="text-xl py-8 text-slate-500">Simple, managed Kubernetes</p>
                        <div className="text-2xl ">
                            <p className="flex py-4"><span className="w-8 mr-5 text-green-600"></span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-green-600">
                                <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
                            </svg>
                            Simple, managed Kubernetes built for scale.</p>
                            <p className="flex py-4"><span className="w-8 mr-5 text-green-600"></span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-green-600">
                                <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
                            </svg>
                            Free control plane and bandwidth allowance.</p>
                            <p className="flex py-4"><span className="w-8 mr-5 text-green-600"></span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-green-600">
                                <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
                            </svg>
                            Automate to peak performance</p>
                            <p className="flex py-4"><span className="w-8 mr-5 text-green-600"></span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-green-600">
                                <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
                            </svg>
                            optimize to peak performance.</p>
                            <p className="flex py-4"><span className="w-8 mr-5 text-green-600"></span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-green-600">
                                <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
                            </svg>
                                Easy to configure cluster settings</p>

                            <button className="w-full py-4 my-4 ">Get Started</button>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default Pricing