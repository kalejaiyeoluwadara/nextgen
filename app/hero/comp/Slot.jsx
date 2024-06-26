import Image from "next/image";
import React from "react";

function Slot({ img, title, sub }) {
  return (
    <div className="flex flex-col w-[478px] text-black gap-[20px] border-[1px] hover:border-gray-600 transition-all border-gray-300 rounded-[20px] p-[32px]  ">
      <div className="h-[48px] w-[48px] bg-pr2 rounded-[8px] flex items-center justify-center  ">
        <Image className="object-cover  " src={img} />
      </div>
      <div>
        <h5>{title}</h5>
        <p className="text-[16px]">{sub}</p>
      </div>
    </div>
  );
}

export default Slot;
