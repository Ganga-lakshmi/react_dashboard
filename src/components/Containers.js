
import React from 'react';
import ReactPlayer from "react-player";
import {Link} from "react-router-dom";
import { Navbar, Nav,Button } from "react-bootstrap";
import { IoIosAperture ,IoIosPin} from 'react-icons/io';
import {FcStart} from 'react-icons/fc';
import {FaFacebook,FaInstagram,FaClipboardCheck} from 'react-icons/fa';
import contain  from'../assets/img1.jpg';
import contain2 from'../assets/img2.png';
import contain3 from'../assets/img3.png';
import contain4 from'../assets/img4.png';
import contain5 from'../assets/img5.png';
import contain6 from'../assets/img6.png';
import contain7 from'../assets/img7.png';
import contain8 from'../assets/img8.png';
import contain9 from'../assets/img9.png';
import contain10 from'../assets/img10.png';
import contain11 from'../assets/img11.png';

export const Containers = () => 
    {
        const onButtonClick = () => {
            // using Java Script method to get PDF file
            fetch('SamplePDF.pdf')
            .then(response => {
                response.blob().then(blob => {
                    // Creating new object of PDF file
                    const fileURL = window.URL.createObjectURL(blob);
                    // Setting various property values
                    let alink = document.createElement('a');
                    alink.href = fileURL;
                    alink.download = 'SamplePDF.pdf';
                    alink.click();
                })
            })
        }
        return (
            <>

                <div className="row">
                    <div className="col-sm-8">
                        {/* col-sm-8 */}
                       
                        <div className="card">

                                 <ReactPlayer
                                  url="https://youtu.be/biGcDeB2PbQ"/>
                            <div className="btn-nav">
                            <Button variant="link"><IoIosPin/> Mumbai,Maharashtra</Button>
                            <Button variant="link"><IoIosAperture/>https://letzrent.com</Button>
                            <Button variant="link"><FaFacebook/><FcStart/><FaInstagram/></Button>

                            </div>

                            
                        </div>
                        <br />
                        {/* navbar */}
                        <div className="btn-nav">
                            <Button variant="btn btn-primary"><FaClipboardCheck/>Pitch</Button>{' '}
                            <Button variant="btn btn-light"><FaClipboardCheck/>Details</Button>{''}
                            <Button variant="btn btn-light"><FaClipboardCheck/>Updates</Button>{' '}
                            <Button variant="btn btn-light"><FaClipboardCheck/>Comments(2)</Button>{' '}

                        </div>
                        {/* second container */}
                        <div className="card">

                            <ul className="list-group list-group-flush">
                                
                            <div className="btn-nav ">
                                <h4 className="btn card-title">DECK</h4>
                                <Button variant="btn btn-primary" onClick={onButtonClick}>Download Pitch Deck</Button></div>
                                <li className="list-group-item ">
                                </li>
                                    

                                    


                                <h6 className="card-title"> 10 Seconds Pitch</h6>
                                <li className="list-group-item">Online search, compare & booking platform for self-drive cars, charter flights, living space & more that rewards users</li>
                                <h6 className="card-title"> Deck info</h6>
                                <li className="list-group-item"><h3>Letzrents</h3></li>
                                <h4 className="card-title"> Highlights</h4>
                                <li className="list-group-item">
                                    <ul className="ul-list">
                                        <li>Running profitable pilot in Bengaluru.</li>
                                        <li>20k+ registered users, 4.2 app rating and 10k+ social media following </li>
                                        <li>Company is projecting 100cr+ transaction volume in 5 years</li>
                                        <li>Founder with the marketing expertise of 17+ years in Reliance, Naaptol, Tv9 and Zee and more</li>
                                        <li>GenZ CTO and co-founder.</li>
                                        <li>Expansion is easy and the untapped customer base is huge.</li>
                                        <li>Been in news articles, already making buzz.</li>
                                    </ul>
                                </li>
                                <h6 className="card-title">Traction</h6>
                                <li className="list-group-item">
                                <img
                                src={contain2}
                                alt="Profile" height={350} width={100}
                                className="card-img-top"
                                style={{ marginTop: "0%"}} /></li>

                                {/* image 3 */}
                                <h6 className="card-title">Smarter Way To Rent</h6>
                                <li className="list-group-item">
                                <img
                                src={contain3}
                                alt="Profile" height={350} width={100}
                                className="card-img-top"
                                style={{ marginTop: "0%"}} /></li>
                                {/* image 4 */}
                                <h6 className="card-title">Customers Want Low Prices</h6>
                                <p className="card-title">To get low prices 85% of the consumers check at least 2 data points (Source: BCG Consumer Trends). In various sectors information centred buying has been made more efficient by companies like MMT for Travel, Policy bazaar for Insurance, Myntra or Shopperstop for Lifestyle products. However for rental products, there is no one & to fill this need and make the process efficient we launched LetzRent, hoping to have a first-mover advantage and dominate the market in the coming future.</p>
                                <li className="list-group-item">
                                <img
                                src={contain4}
                                alt="Profile" height={150} width={100}
                                className="card-img-top"
                                style={{ marginTop: "0%"}} /></li>
                                 {/* content */}
                                <h6 className="card-title"> Single KYC</h6>
                                <li className="list-group-item"><p className="card-title">Renting is a KYC dependent process, every time a customer books a service from a different service provider he/she will have to get a new KYC done. With Letzrent, the hassle of multiple KYC gets removed and with a single KYC, customers can rent from multiple brands.</p></li>
                                
                                {/* image 5 */}
                                <h6 className="card-title">Vast Selection</h6>
                                <p className="card-title">Being an aggregator Letzrent offers more options than category leaders..</p>
                                <li className="list-group-item">
                                <img
                                src={contain5}
                                alt="Profile" height={220} width={100}
                                className="card-img-top"
                                style={{ marginTop: "0%"}} /></li>
                                {/* image6 */}
                              <p className="card-title"> Why Renting?</p>
                                <li className="list-group-item">
                                    <ol className="ul-list">
                                        <li> Demographic Twist: Commitment phobic millennials prefer an asset lite life with a bias toward renting rather than buying.</li>
                                        <li> Flexibility: Renting allows people to upgrade or change assets easily. </li>
                                        <li> Convenience: With the rental customers dispense with the headache of down payment, maintenance, insurance etc.</li>
                                    </ol>
                                <img
                                src={contain6}
                                alt="Profile" height={350} width={100}
                                className="card-img-top"
                                style={{ marginTop: "0%"}} /></li>


                                {/* image 7 */}
                                <h6 className="card-title">Market Size</h6>
                                <li className="list-group-item">
                                <img
                                src={contain7}
                                alt="Profile" height={300} width={100}
                                className="card-img-top"
                                style={{ marginTop: "0%"}} /></li>

                                {/* image 8 */}
                                <h6 className="card-title">Competitors</h6>
                                <li className="list-group-item">
                                <img
                                src={contain8}
                                alt="Profile" height={300} width={100}
                                className="card-img-top"
                                style={{ marginTop: "0%"}} /></li>

                                {/* image 9 */}
                                <h6 className="card-title">Feedback:People love us</h6>
                                <li className="list-group-item">
                                <img
                                src={contain9}
                                alt="Profile" height={300} width={100}
                                className="card-img-top"
                                style={{ marginTop: "0%"}} /></li>

                                {/* image 10 */}
                                <h6 className="card-title">Future and growth</h6>
                                <h6 className="card-title">Launch : P2P Self <br /> Drive Car Rental</h6>
                                <p className="card-title">Uber for Self Drive <br/> Car Rental</p>
                                <li className="list-group-item">
                                <img
                                src={contain10}
                                alt="Profile" height={350} width={100}
                                className="card-img-top"
                                style={{ marginTop: "0%"}} /></li>

                                 {/* image 11 */}
                                 <h6 className="card-title">Core Team</h6>
                                 <li className="list-group-item">
                                <img
                                src={contain11}
                                alt="Profile" height={150} width={100}
                                className="card-img-top"
                                style={{ marginTop: "0%"}} /></li>
                               
                               {/* end--- */}
                               <h6 className="card-title">Documents for Investors</h6>
                               <li className="list-group-item">
                                    <ul className="ul-list">
                                        <li><Button variant="link" onClick={onButtonClick}>Due Diligence Report</Button></li>
                                        <li><Button  variant="link" onClick={onButtonClick}>Certificate of Incorporation</Button></li>


                                     </ul>
                            </li>
                            </ul>
                            {/* <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div> */}

                        </div>
                    </div>
                         {/* RIGHT CONTAINER */}
                    <div className="col-sm-4">
                        {/* col-sm-4 */}
                        <div className="card">

                            <ul className="list-group list-group-flush">
                                <h3 className="card-title1">₹ 0</h3>
                                <li className="list-group-item "><p className="ptag">0 % of minimum goal raised</p></li>
                            </ul>

                            <ul className="list-group list-group-flush">
                                <h3 className="card-title"> 0</h3>
                                <li className="list-group-item">Total Investors</li>
                            </ul>


                            <ul className="list-group list-group-flush">
                                <h3 className="card-title"> 0 Days</h3>
                                <li className="list-group-item">Left to Invest</li>
                            </ul>

                            <div className="card-body">
                                <center><a href="#" className="btn btn-danger">Campaign Expired</a>
                                    <p className="ptag">₹ 1000 Minimum Investment</p></center>
                            </div>

                        </div>
                        <br />

                        {/* rightside second container */}
                        <h2>Deal Terms</h2>
                        <p>Perks you will receive for Investing Letzrent</p>
                        <div className="card">
                            <h3 className="card-title1">2000</h3>
                            <p className="card-title">Invest</p>
                            <p className="card-title">• LetzRent Premium Apparel (T-shirts & Coffee Mug) • Early access to new features & promotions</p>
                            <p className="card-title">TNC : Limited to the first 100</p>

                            <div className="card-body">
                                <center><a href="#" className="btn btn-primary invest">Invest </a></center>
                            </div>

                        </div>
                        <br />
                        {/* rightside third container */}
                        <div className="card">
                            <h3 className="card-title1">₹ 5000</h3>
                            <p className="card-title">Invest</p>
                            <p className="card-title">• LetzRent Premium Apparel (T-shirts & Coffee Mug) • Early access to new features & promotions</p>
                            <p className="card-title">TNC : Limited to the first 100</p>

                            <div className="card-body">
                                <center><a href="#" className="btn btn-primary invest">Invest </a></center>
                            </div>

                        </div>
                        <br />
                        {/* rightside fourth container */}
                        <div className="card">
                            <h3 className="card-title1">₹ 10000</h3>
                            <p className="card-title">Invest</p>
                            <p className="card-title"> Exclusive interest in owning equity with an investment of above ₹40,00,000 • LetzRent Weekend Experience: Flight & Hotel on us • In-Person dinner with Co-Founder in Whitefield, Bangalore • One-</p>
                            <p className="card-title">on-one 30 minute video call with Co-Founders • Invite to exclusive LetzRent team chat • LetzRent Premium Apparel Box (T-shirts, Sweatshirts & additional Swag) • Early access to new features & promotions</p>
                            <p className="card-title">TNC : Equity benefits with voting rights(open for discussion of term sheet). Limited to the first 5 investors.</p>


                            <div className="card-body">
                                <center><a href="#" className="btn btn-primary invest">Invest </a></center>
                            </div>

                        </div>
                        <br />

                        {/* rightside fifth container */}
                        <div className="card">
                            <h3 className="card-title1">₹ 25000</h3>
                            <p className="card-title">Invest</p>
                            <p className="card-title">• Exclusive interest in owning equity with an investment of ₹3,00,000 — ₹10,00,000 • One-on-one 30 minute video call with Co-Founders • Invite to</p>
                            <p className="card-title">exclusive LetzRent team chat • LetzRent Premium Apparel Box (T-shirts, Sweatshirts & additional Swag) • Early access to new features & promotions</p>
                            <p className="card-title">TNC : Equity benefits with no voting rights. Limited to the first 5 investors.</p>


                            <div className="card-body">
                                <center><a href="#" className="btn btn-primary invest">Invest </a></center>
                            </div>

                        </div>
                        <br />

                        {/* rightside 6th container */}
                        <div className="card">
                            <h3 className="card-title1">₹ 50000</h3>
                            <p className="card-title">Invest</p>
                            <p className="card-title">• Exclusive interest in owning equity with an investment of ₹11,00,000 — ₹30,00,000 • In-Person dinner with Co-Founder in Whitefield, Bangalore • One-on-one 30 minute video call with Co-</p>
                            <p className="card-title">Founders • Invite to exclusive LetzRent team chat • LetzRent Premium Apparel Box (T-shirts, Sweatshirts & additional Swag) • Early access to new features & promotions</p>
                            <p className="card-title">TNC : Equity benefits with no voting rights. Limited to the first 5 investors.</p>


                            <div className="card-body">
                                <center><a href="#" className="btn btn-primary invest">Invest </a></center>
                            </div>

                        </div>
                        <br />

                        {/* rightside 7th container */}
                        <div className="card">
                            <h3 className="card-title1">₹ 100000</h3>
                            <p className="card-title">Invest</p>
                            <p className="card-title">• Exclusive interest in owning equity with an investment of ₹11,00,000 — ₹30,00,000 • In-Person dinner with Co-Founder in Whitefield, Bangalore • One-on-one 30 minute video call with Co-</p>
                            <p className="card-title">Founders • Invite to exclusive LetzRent team chat • LetzRent Premium Apparel Box (T-shirts, Sweatshirts & additional Swag) • Early access to new features & promotions</p>
                            <p className="card-title">TNC : Equity benefits with no voting rights. Limited to the first 5 investors.</p>


                            <div className="card-body">
                                <center><a href="#" className="btn btn-primary invest">Invest </a></center>
                            </div>

                        </div>
                        <br />

                    </div>

                </div>


            </>




        );
    }
