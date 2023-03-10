import React from "react";
import IMG from "../assets/jumbotron.jpeg";
import cuci from "../assets/cuci.png";
import masker from "../assets/masker.png";
import jarak from "../assets/jarak.png";

const Footer = () => {
  return (
    <>
      <div className="lg:mx-[174px] bg-bg-mempelai pt-10 pb-5">
        <footer>
          <img
            src={IMG}
            alt="IMG"
            className="lg:h-[300px] lg:w-[300px] h-[250px] w-[250px] rounded-[50%] object-cover m-auto"
          />
          <div className="text-center">
            <p className="font-mempelai">Me & Mine</p>
            <p className="font-secondary text-[25px] text-[#696969] my-4 lg:my-8">
              Atas kehadiran dan doa restunya, kami ucapkan terimakasih.
            </p>
            <p className="font-secondary text-[30px] text-primary">
              PROTOKOL KESEHATAN
            </p>
          </div>
          <div className="flex justify-center items-center my-12 lg:gap-0 lg:mx-0 gap-2 mx-2">
            <div className="lg:px-16">
              <img
                src={cuci}
                alt=""
                className="lg:h-[150px] lg:w-[150px] w-[100px] h-[100px] lg:hover:scale-125 duration-300"
              />
              <p className="text-center font-secondary my-3 lg:my-6">
                Cuci Tangan
              </p>
            </div>
            <div className="lg:px-16 lg:ml-0 ml-4">
              <img
                src={masker}
                alt=""
                className="lg:h-[150px] lg:w-[150px] w-[100px] h-[100px] lg:hover:scale-125 duration-300"
              />
              <p className="text-center font-secondary my-3 lg:my-6">
                Gunakan Masker
              </p>
            </div>
            <div className="lg:px-16">
              <img
                src={jarak}
                alt=""
                className="lg:h-[150px] lg:w-[150px] w-[100px] h-[100px] lg:hover:scale-125 duration-300"
              />
              <p className="text-center font-secondary my-3 lg:my-6">
                Jaga Jarak
              </p>
            </div>
          </div>
        </footer>
      </div>
      <div className="bg-[#2E2F3A] h-[40vh] font-footer text-center pt-8">
        <p>Copyright Abdul-Majid-Abdalah ?? 2023</p>
        <p>Abadikan Moment Spesial</p>
        <p>- All Rights Reserved -</p>
        <button className="bg-slate-200 text-primary hover:bg-primary hover:text-white px-4 py-2 rounded-lg mt-8 duration-200">
          <i className="icofont-instagram mr-2"></i>
          @abdulmajidabdalah_
        </button>
      </div>
    </>
  );
};

export default Footer;
