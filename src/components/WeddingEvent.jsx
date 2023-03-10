import React from "react";

const WeddingEvent = () => {
  return (
    <>
      <div
        className="bg-primary h-[120px] flex justify-center items-center font-pasangan lg:text-[80px] text-5xl leading-relaxed text-white"
        id="event"
      >
        <p>Our Wedding Event</p>
      </div>
      <div className="bg-bg-main lg:mx-[174px] bg-center bg-cover bg-no-repeat py-[30px]">
        <div className="bg-bg-mempelai lg:mx-[80px] mx-6 px-2 flex justify-center rounded-lg shadow-lg shadow-primary">
          <div className="font-secondary text-center py-10">
            <h1 className="font-mempelai">Akad Nikah</h1>
            <div className="lg:text-[26px] text-[18px] py-1">
              <p>Minggu, 29 Januari 2023</p>
              <p>Pukul 09.00 WIB</p>
              <p>Kp. Cimanggu Hilir RT/RW 03/01</p>
              <p>Desa Curugkembar</p>
              <p>Kec. Curugkembar Kab. Sukabumi</p>
            </div>
            <div className="font-secondary text-center pb-10 lg:py-10">
              <h1 className="font-mempelai">Resepsi</h1>
              <div className="lg:text-[26px] text-[18px] py-1">
                <p>Minggu, 29 Januari 2023</p>
                <p>Pukul 11.00 WIB s/d Selesai</p>
                <p>Kp. Cimanggu Hilir RT/RW 03/01</p>
                <p>Desa Curugkembar</p>
                <p>Kec. Curugkembar Kab. Sukabumi</p>
              </div>
            </div>
            <button className="bg-primary px-6 py-2 rounded-md font-secondary text-white">
              <i className="icofont-location-pin"></i>
              Klik Map
            </button>
          </div>
        </div>
        <p className="font-secondary text-center text-[50px] leading-[50px] text-primary py-[50px]">
          LIVE STREAMING
        </p>
        <div className="text-center">
          <i className="icofont-instagram icofont-5x text-primary"></i>
        </div>
        <div className="flex justify-center mt-10">
          <button className="bg-primary px-6 py-2 rounded-md font-secondary text-white">
            <i className="icofont-instagram pr-2"></i>
            @mine07
          </button>
        </div>
      </div>
      <div className="bg-primary h-[30px] border-double border-4 border-white"></div>
    </>
  );
};

export default WeddingEvent;
