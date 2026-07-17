'use client';

// next-image-export-optimizer's <ExportedImage>, aliased Image so usages are unchanged.
import Image from 'next-image-export-optimizer';
import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <div className="container translate-y-[-100px] md:flex py-6 gap-7 h-fit">
      <Image
        className="w-full md:w-[390px] md:h-[663.09px]"
        src="/assets/images/alishia-allred.jpg"
        width={390}
        height={663.09}
        alt="Alishia Marie Allred"
        priority
      />
      <div className="bg-white flex-1 p-3 md:p-[30px] flex mt-7 md:mt-0 flex-col">
        <h4 className="font-black text-lg">MY MISSION STATEMENT</h4>
        <div className="flex-1 flex justify-center items-center">
            <p className="my-20 md:m-auto font-inter text-[21px] text-center">
            Empowering individuals with tailored guidance and resources to unlock their vision and maximize their impact.
            </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
