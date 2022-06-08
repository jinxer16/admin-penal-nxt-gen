import React,{useState} from 'react'
import './HomePage.css'
export default function HomePage() {

    let [changeColor, setChangeColor] = useState("transparent")
    return (
        <div className='' style={{ backgroundColor: "#1B1E30", height: "500px" }}>
            <section className="pt-5 pb-5 sidebar " >
                <div className="">
                    {/* <div className="row justify-content-center mb-5">
                        <h1>Admin Penal</h1>
                    </div> */}
                </div>
                <div className="">
                    <div className="row justify-content-center">
                        <div className=" col-lg-6 col-md-8">
                            <h2 style={{ fontSize: '40px', fontWeight: '700' }} className='text-white'>Daily</h2>
                            <ul className="nav nav-tabs mt-5" role="tablist">
                                <li className="nav-item tab-heading">
                                    <a className="nav-link  nav-link1" data-toggle="tab" href="#tabs-1" role="tab">Poineer</a>
                                </li>
                                <li className="nav-item tab-heading">
                                    <a className="nav-link nav-link2" data-toggle="tab" href="#tabs-2" role="tab">Advanced</a>
                                </li>
                                <li className="nav-item tab-heading">
                                    <a className="nav-link nav-link3" data-toggle="tab" href="#tabs-3" role="tab">Hero</a>
                                </li>
                            </ul>
                            <div className="tab-content">
                                <div className="tab-pane active " id="tabs-1" role="tabpanel">
                                    <div className="services-block-three mt-2 d-flex flex-column align-items-center justify-content-center" >
                                        {/* <span> */}
                                            <div className="padding-15px-bottom col-lg-6 col-10">
                                                <input type="text" placeholder="Daily percentage" className="form-control " />
                                                </div>
                                            <div className="row d-flex justify-content-center">
                                                <div className="col-lg-8 mt-3">
                                                    <button className="button-19" role="button">Submit</button>

                                                </div>
                                            </div>
                                        {/* </span> */}
                                    </div>
                                </div>
                                <div className="tab-pane" id="tabs-2" role="tabpanel">

                                    <div className="services-block-three mt-2">
                                        <span>
                                            <div >
                                                <input type="text" placeholder="Type request" className="form-control " />                                    </div>
                                            <div className="row justify-content-center">
                                                <div className="col-lg-4 mt-3">
                                                    <button className="button-19" role="button">Submit</button>

                                                </div>
                                            </div>
                                        </span>
                                    </div>
                                </div>
                                <div className="tab-pane" id="tabs-3" role="tabpanel">
                                    <div className="services-block-three mt-2">
                                        <span>
                                            <div >
                                                <input type="text" placeholder="Type request" className="form-control " />                                    </div>
                                            <div className="row justify-content-center">
                                                <div className="col-lg-4 mt-3">
                                                    <button className="button-19" role="button">Submit</button>

                                                </div>
                                            </div>
                                        </span>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}
