import React from "react";

const Skills = () => {
  return (
    <section className="container py-10">
        <h2 className="text-3xl font-bold pb-10 text-center">Achievements</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        <div className="card bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="https://media.licdn.com/dms/image/C562DAQHITfgFZBKdKQ/profile-treasury-image-shrink_800_800/0/1629311110292?e=1675260000&v=beta&t=zECtcrl4rtYJG43EWBPfUsVjF3hM4rOA1ZSHeJszoZ8"
              alt="Rina Ciputra"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center px-10">
            <h2 className="card-title">Rina Ciputra</h2>
            <p>Partnership dan wawancara eksklusif bersama Ibu Rina Ciputra; Founder Ciputra Group.</p>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="https://media.licdn.com/dms/image/C562DAQHRXI1Uj4k1ug/profile-treasury-image-shrink_800_800/0/1629311297392?e=1675260000&v=beta&t=clVhsdfRsz7Rr_ShkxV04R225-CIBt0y1XwZ1KwqQ2w"
              alt="KEMENDIKBUD RI"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center px-10">
            <h2 className="card-title">KEMENDIKBUD RI</h2>
            <p>Partnership dan wawancara eksklusif bersama Dr. Harry Widianto; KEMENDIKBUD RI.</p>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="https://media.licdn.com/dms/image/C562DAQHcjbuFAl9olw/profile-treasury-image-shrink_800_800/0/1629311219243?e=1675260000&v=beta&t=BGcdGUG_8KrKDuHCtqXKM8CxRcpT0tINMRync3X-43s"
              alt="Radio Sonora"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center px-10">
            <h2 className="card-title">Radio Sonora</h2>
            <p>Memberikan konten edukatif mengenai barang seni Asia pada Radio Sonora secara live.</p>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="https://media.licdn.com/dms/image/C562DAQHYnZGHjhQWng/profile-treasury-image-shrink_800_800/0/1661828433422?e=1675260000&v=beta&t=7TJN8Ifex0X-4pZZAYN09TqrtBWWWSSkBVEUQiKTjzo"
              alt="Eksibisi"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center px-10">
            <h2 className="card-title">Eksibisi</h2>
            <p>Melakukan dan memimpin beberapa eksibisi nasional dan internasional</p>
          </div>
        </div>


      </div>
    </section>
  );
};

export default Skills;
