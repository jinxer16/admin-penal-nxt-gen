import React from 'react'
import './Users.css'
export default function Request() {
    return (
        <div className=''>

            <div className="row d-flex justify-content-end align-items-center" style={{ height: "500px" }}>
                <div className="col-lg-12  " >

                    <div className="" >
                        <div className="row d-flex justify-content-end" >
                            <div className="col-lg-3 d-flex justify-content-end">
                                {/* <input type="text" placeholder="Search" class="form-control " /> */}
                                {/* <button class="button-1 btn-size" role="button">Search</button> */}
                                <input type="text" className="searchTerm" placeholder="Search"></input>
                                <button type="submit" className="searchButton">
                                    <i className="fa fa-search"></i>
                                </button>
                            </div>
                        </div>
                        <div className="row justify-content-center" >
                            <div className=" col-lg-10  mt-5 col-10" >
                                {/* <h2 className='text-start'>Daily</h2> */}
                                <ul className="nav nav-tabs" role="tablist" >
                                    <li className="nav-item tab-heading">
                                        <a className="nav-link active " data-toggle="tab" href="#tabs-1" role="tab">Poineer</a>
                                    </li>
                                    <li className="nav-item tab-heading">
                                        <a className="nav-link" data-toggle="tab" href="#tabs-2" role="tab">Advanced</a>
                                    </li>
                                    <li className="nav-item tab-heading">
                                        <a className="nav-link" data-toggle="tab" href="#tabs-3" role="tab">Hero</a>
                                    </li>


                                </ul>

                                <div className="tab-content" >
                                    <div className="tab-pane active" id="tabs-1" role="tabpanel" >
                                        <div class=" table-responsive py-5">
                                            <table class="table table-bordered ">
                                                <thead class="th-style">
                                                    <tr>
                                                        <th scope="col">#</th>
                                                        <th scope="col">Email</th>
                                                        <th scope="col">Adress</th>
                                                        <th scope="col">Amount</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th className='text-white' scope="row">1</th>
                                                        <td className='text-white'>Mark</td>
                                                        <td className='text-white'>Otto</td>
                                                        <td className='text-white'>@mdo</td>
                                                    </tr>
                                                    <tr>
                                                        <th className='text-white' scope="row">2</th>
                                                        <td className='text-white'>Jacob</td>
                                                        <td className='text-white'>Thornton</td>
                                                        <td className='text-white'>@fat</td>
                                                    </tr>

                                                </tbody>
                                            </table>
                                        </div>

                                    </div>
                                    <div className="tab-pane" id="tabs-2" role="tabpanel">

                                        <div class=" table-responsive py-5">
                                            <table class="table table-bordered ">
                                                <thead class="th-style">
                                                    <tr>
                                                        <th scope="col">#</th>
                                                        <th scope="col">Email</th>
                                                        <th scope="col">Adress</th>
                                                        <th scope="col">Amount</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th className='text-white' scope="row">1</th>
                                                        <td className='text-white'>Mark</td>
                                                        <td className='text-white'>Otto</td>
                                                        <td className='text-white'>@mdo</td>
                                                    </tr>
                                                    <tr>
                                                        <th className='text-white' scope="row">2</th>
                                                        <td className='text-white'>Jacob</td>
                                                        <td className='text-white'>Thornton</td>
                                                        <td className='text-white'>@fat</td>
                                                    </tr>

                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="tab-pane" id="tabs-3" role="tabpanel">
                                        <div class=" table-responsive py-5">
                                            <table class="table table-bordered ">
                                                <thead class="th-style">
                                                    <tr>
                                                        <th scope="col">#</th>
                                                        <th scope="col">Email</th>
                                                        <th scope="col">Adress</th>
                                                        <th scope="col">Amount</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th className='text-white' scope="row">1</th>
                                                        <td className='text-white'>Mark</td>
                                                        <td className='text-white'>Otto</td>
                                                        <td className='text-white'>@mdo</td>
                                                    </tr>
                                                    <tr>
                                                        <th className='text-white' scope="row">2</th>
                                                        <td className='text-white'>Jacob</td>
                                                        <td className='text-white'>Thornton</td>
                                                        <td className='text-white'>@fat</td>
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
