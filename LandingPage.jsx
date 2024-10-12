import { useState } from "react";
import "./App.css";
import travel from "./assets/travel.svg";
import guest from "./assets/guest.svg";
import expense from "./assets/expense.svg";
import data from "./assets/data.svg";
import business from "./assets/business.svg";
import billing from "./assets/billing.svg";
import wallet from "./assets/wallet.svg";
import automate from "./assets/automate.svg";
import offers from "./assets/offers.svg";
import getstarted from "./assets/getstarted.svg";
import { Bounce, Slide } from "react-awesome-reveal";
import back from "./assets/front2.svg";
import front from "./assets/front.svg";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const [customerOpen, setCustomerOpen] = useState(true);
  const [merchantOpen, setMerchantOpen] = useState(false);
  const [businessOpen, setBusinessOpen] = useState(false);
  const navigate = useNavigate();

  const handleCustomerOpen = () => {
    setCustomerOpen(true);
    setMerchantOpen(false);
    setBusinessOpen(false);
  };

  const handleMerchantOpen = () => {
    setCustomerOpen(false);
    setMerchantOpen(true);
    setBusinessOpen(false);
  };

  const handleBusinessOpen = () => {
    setCustomerOpen(false);
    setMerchantOpen(false);
    setBusinessOpen(true);
  };

  return (
    <>
      {/* <div className="h-screen w-screen" style={{backgroundColor: "#6D38C3"}}>
           <div className='pt-1'>
           <div className='h-14 mt-10 w-5/6 mx-auto bg-white rounded-full'></div>
           <div className='relative mt-28 h-[calc(100vh-212px)]'>
           <p className='mt-10 absolute text-7xl w-1/3 text-white font-bold left-40'>Tranxact with ease for all your needs</p>
           <div className='absolute bottom-0 right-0'>
             <div>
           <img className='' style={{height: "780px"}} src={img} alt="" />
           <img className='absolute top-3' style={{right: "44%", height: "680px"}} src={mobile} alt="" />
           </div>
           </div>
           <button className='absolute bottom-1/2 left-40 bg-white text-[#6D28C3] rounded-lg py-3 px-8 shadow-xl'>App Coming Soon!</button>
           <img className='absolute bottom-32 left-80 h-64' src={line} alt="" />
           <div className='absolute bottom-0 w-screen'>
           <img src={scrolldown} className='mx-auto' alt="" />
           </div>
           </div>
           </div>
   
         </div>
         */}
      <div className="h-fit relative overflow-hidden">
        <button
          onClick={() => window.location.reload()}
          className="h-32 w-1/3 cursor-pointer mx-auto absolute top-0 left-1/3 z-50"
        ></button>
        <img className="w-screen" src={front} alt="" />
        <button
          className="absolute h-20 bottom-0 w-36 cursor-pointer"
          onClick={() =>
            scrollBy({
              top: window.innerHeight,
              behavior: "smooth",
            })
          }
          style={{ left: "46%" }}
        ></button>
      </div>
      <Slide triggerOnce={true}>
        <div>
          <nav>
            <ul className="text-lg text-gray-500 flex justify-center gap-64 w-screen mx-auto  mt-28">
              <li
                onClick={handleCustomerOpen}
                className={`${
                  customerOpen ? "bg-[#6D38C3] text-white" : ""
                } border-[#6D38C3] cursor-pointer rounded-full px-8 border-2 hover:bg-[#6D38C3] hover:text-white py-3`}
              >
                Customer
              </li>
              <li
                onClick={handleMerchantOpen}
                className={`${
                  merchantOpen ? "bg-[#6D38C3] text-white" : ""
                } border-[#6D38C3] cursor-pointer rounded-full px-8 border-2 hover:bg-[#6D38C3] hover:text-white py-3`}
              >
                Merchant
              </li>
              <li
                onClick={handleBusinessOpen}
                className={`${
                  businessOpen ? "bg-[#6D38C3] text-white" : ""
                } border-[#6D38C3] cursor-pointer rounded-full px-8 border-2 hover:bg-[#6D38C3] hover:text-white py-3`}
              >
                Business
              </li>
            </ul>
          </nav>

          <p className="w-1/2 text-5xl mx-auto text-center mt-28 font-semibold">
            Your one-stop solutions for all your needs!
          </p>
          <p className="text-gray-500 w-fit mx-auto text-lg mt-6">
            We have got your back
          </p>

          <div className="flex gap-8 mt-16 justify-center">
            <div>
              <Bounce>
                {customerOpen ? (
                  <img
                    className="hover:scale-105 transition-all"
                    src={travel}
                    alt=""
                  />
                ) : (
                  ""
                )}
              </Bounce>
              <Bounce>
                {merchantOpen ? (
                  <img
                    className="hover:scale-105 transition-all"
                    src={business}
                    alt=""
                  />
                ) : (
                  ""
                )}
              </Bounce>
              <Bounce>
                {" "}
                {businessOpen && (
                  <img
                    className="hover:scale-105 transition-all"
                    src={automate}
                    alt=""
                  />
                )}
              </Bounce>
            </div>

            <div>
              <Bounce>
                {" "}
                {customerOpen && (
                  <img
                    className="hover:scale-105 transition-all"
                    src={guest}
                    alt=""
                  />
                )}
              </Bounce>
              <Bounce>
                {" "}
                {merchantOpen && (
                  <img
                    className="hover:scale-105 transition-all"
                    src={data}
                    alt=""
                  />
                )}
              </Bounce>
              <Bounce>
                {" "}
                {businessOpen && (
                  <img
                    className="hover:scale-105 transition-all"
                    src={wallet}
                    alt=""
                  />
                )}
              </Bounce>
            </div>
          </div>
          <div className="w-fit mx-auto mt-8">
            <Bounce>
              {" "}
              {customerOpen && (
                <img
                  className="hover:scale-105 transition-all"
                  src={expense}
                  alt=""
                />
              )}
            </Bounce>
            <Bounce>
              {" "}
              {merchantOpen && (
                <img
                  className="hover:scale-105 transition-all"
                  src={billing}
                  alt=""
                />
              )}
            </Bounce>
            <Bounce>
              {" "}
              {businessOpen && (
                <img
                  className="hover:scale-105 transition-all"
                  src={offers}
                  alt=""
                />
              )}
            </Bounce>
          </div>
        </div>
      </Slide>
      <Slide triggerOnce={true}>
        <div className="mt-20 relative">
          <img src={getstarted} alt="" />
        </div>
      </Slide>
      <Slide triggerOnce={true}>
        <div className="w-fit relative mt-20 mx-auto">
          <img src={back} alt="" />
          <button
            className="absolute w-32 h-6 bottom-1/3 right-1/4"
            onClick={() => navigate("/tnc")}
          ></button>
          <button
            className="absolute w-52 h-6"
            style={{ bottom: "30%", right: "20%" }}
            onClick={() => navigate("/refundAndCancellationPolicy")}
          ></button>
          <button
            className="absolute w-8 h-8"
            style={{ bottom: "7%", left: "9.5%" }}
            onClick={() => {
              window.open("https://www.facebook.com/getxipper", "_blank");
            }}
          ></button>
          <button
            className="absolute w-8 h-8"
            style={{ bottom: "7%", left: "12.5%" }}
          ></button>
          <button
            className="absolute w-8 h-8"
            style={{ bottom: "7%", left: "15.5%" }}
            onClick={() => {
              window.open("https://www.x.com/getxipper", "_blank");
            }}
          ></button>
          <button
            className="absolute w-8 h-8"
            onClick={() => {
              window.open("https://www.linkedin.com/company/xipper/", "_blank");
            }}
            style={{ bottom: "7%", left: "18.5%" }}
          ></button>
        </div>
      </Slide>
    </>
  );
};

export default LandingPage;
