import React, { useEffect } from 'react';
import MapImg from '../../images/img/map.png';
import Rider from '../../images/img/rider.png';
import RiderHelmet from '../../images/img/helmet.png';
import "./OrderComp.css";

const OrderComplete = (props) => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const { flat, road } = props.deliveryDetails;

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-8">
                    <img className="img-fluid" src={MapImg} alt="" 
                    // style={{width: "100%", height: "auto"}}
                    />
                </div>
                <div className="col-md-4 pl-md-5">
                    <div className="bg-light p-3 rounded">
                        <img className="w-25 ml-5" src={Rider} alt="" />
                        <div className="bg-white  rounded p-3 my-3">
                            <div>
                                <h5>Your Location</h5>
                                <p>{flat}, {road}</p>
                            </div>
                            <div>
                                <h5>Shop Address</h5>
                                <p>CruiseCoast Avenue, opp W.White Str.</p>
                            </div>
                        </div>
                        <h1>09:00</h1>
                        <p>Estimated Delivery</p>

                        <div className="bg-white rounded p-3 d-flex">
                            <img className="w-25 mr-2" src={RiderHelmet} alt="" />
                            <div>
                                <h6>Xkolz</h6>
                                <p>Your Rider</p>
                            </div>
                        </div>

                        {/* <a href="mailto:xkodesolutions@gmail.com">
                            <button className="btn btn-block my-3 btn-danger">Contact</button>
                            </a> */}

                        <a href="tel:+2348106010198"><button className="btn btn-block my-3 btn-danger"
                        style={{
                            backgroundColor: 'white',
                            color: '#126D3A',
                            border: '2px solid green',
                            transition: 'background-color 0.3s, color 0.3s' // Add transition for smooth effect
                        }}
                        onMouseOver={(e) => {
                            e.target.style.backgroundColor = 'green'; // Change background color on hover
                            e.target.style.color = 'white';           // Change text color on hover
                        }}
                        onMouseOut={(e) => {
                            e.target.style.backgroundColor = 'white'; // Restore background color on mouse out
                            e.target.style.color = 'green';           // Restore text color on mouse out
                        }}
                        >Call Now</button></a>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderComplete; 