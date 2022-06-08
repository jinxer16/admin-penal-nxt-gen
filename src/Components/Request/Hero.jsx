import React from 'react'
import { FiSend } from "react-icons/fi";

export default function Hero() {
    return (
        <div className=''>

            <div className="row d-flex justify-content-end">
                <div className="col-lg-12 " >

                    <div className="" >
                        <div className="row d-flex justify-content-end" >
                            <div className="col-lg-3 d-flex justify-content-end">
                                {/* <input type="text" placeholder="Search" class="form-control " /> */}
                                {/* <button class="button-1 btn-size" role="button">Search</button> */}
                                <input type="text" class="searchTerm" placeholder="Search"></input>
                                <button type="submit" class="searchButton">
                                    <i class="fa fa-search"></i>
                                </button>
                            </div>
                        </div>
                        <div className="row justify-content-center" >
                            <div className=" col-lg-10 col-md-5 mt-5" >


                                <div className="tab-content mt-5" >
                                    <h2 style={{ fontSize: '45px', fontWeight: '800' }} className='text-white'>Hero</h2>
                                    <div className="tab-pane active" id="tabs-1" role="tabpanel" >
                                        <div class=" table-responsive py-5">
                                            <table class="table table-bordered ">
                                                <thead class="th-style">
                                                    <tr>
                                                        <th scope="col">#</th>
                                                        <th scope="col">Email</th>
                                                        <th scope="col">Adress</th>
                                                        <th scope="col">Amount</th>
                                                        <th scope="col">Send</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th className='text-white' scope="row">1</th>
                                                        <td className='text-white'>Mark</td>
                                                        <td className='text-white'>Otto</td>
                                                        <td className='text-white'>@mdo</td>
                                                        <td className=' text-center'><button class="btn-size  " role="button">Send <FiSend /></button></td>
                                                    </tr>
                                                    <tr>
                                                        <th className='text-white' scope="row">2</th>
                                                        <td className='text-white'>Jacob</td>
                                                        <td className='text-white'>Thornton</td>
                                                        <td className='text-white'>@fat</td>
                                                        <td className=' text-center'><button class="btn-size  " role="button">Send <FiSend /></button></td>

                                                    </tr>

                                                </tbody>
                                            </table>
                                        </div>

                                    </div>


                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
