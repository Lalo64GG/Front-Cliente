import { useState } from "react";
export const CardMessage = ({ name, id, onClick, url}) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleSelect = () => {
    setIsSelected(!isSelected);

    onClick(id);
  };

  return (
    <div
      className={`cursor-pointer ${
        isSelected ? "selected-card bg-gradient-to-br from-[#373A43]" : "none"
      }`}
      style={{
        width: "287px",
        height: "61px",
        marginLeft: "16px",
        marginTop: "5px",
        borderRadius: "9px",
        overflow: "hidden",
      }}
      onClick={handleSelect}
    >
      <div className="md:flex">
        {/* Foto de perfil redonda */}
        <div className="flex" style={{ marginLeft: "8px", marginTop: "13px" }}>
          <img
            className="h-[35px] w-[35px] object-cover rounded-[35px]"
            src={ url }
            alt=""
          />
        </div>
        {/* Contenido de la card */}
        <div style={{ marginTop: "13px", marginLeft: "11px" }}>
          <div
            className=" text-white"
            style={{ fontSize: "13px", fontWeight: "500" }}
          >
            {name}
          </div>
          <p
            className="block mt-1 text-lg leading-tight font-medium text-[#ADB5BD]"
            style={{ fontSize: "12px", fontWeight: "500" }}
          >

          </p>
        </div>
        <div className="relative w-[20px] h-[20px] mt-21 ml-33">
          <div
            className="border border-[#577587] w-full h-full rounded-[6px] flex items-center justify-center"
            style={{ marginTop: "21px", marginLeft: "33px" }}
          >
            <p className="text-white">3</p>
          </div>
        </div>
      </div>
    </div>
  );
};
