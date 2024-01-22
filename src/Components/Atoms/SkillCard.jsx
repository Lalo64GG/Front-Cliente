import React from "react";

export const SkillCard = ({ skill, percentage }) => {
  return (
    <div className="bg-[#475E976B] p-4 rounded-[15px] mb-4 flex items-center">
      <img className="mr-3" src="/img/people.svg" alt="Habilidad 1" />
      <div className="flex-1">
        <h3 className="text-[#E0E4EC] text-[13px] font-[700] mb-2">
          { skill }
        </h3>
        <div className="relative">
          <div className="bg-[#2B3B50] h-3 w-40 rounded-full mb-2">
            <div
              className=" h-full w-[145px] rounded-full absolute left-0"
              style={{
                background:
                  "var(--Gradient-Flubber, linear-gradient(270deg, #2FEA9B 15.5%, #7FDD53 85.5%))",
              }}
            ></div>
          </div>
          <div className="text-[#60F853B2] text-xs absolute left-[160px] top-[6px] transform translate-x-2/4 -translate-y-2/4">
            { percentage }
          </div>
        </div>
      </div>
    </div>
  );
};
