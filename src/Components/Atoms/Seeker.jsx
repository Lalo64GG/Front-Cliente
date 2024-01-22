import React from "react";

export const Seeker = ({ section, messages }) => {
  return (
    <div style={{ marginLeft: "25px", marginTop: "21px", height: "110px" }}>
      <p
        style={{ fontWeight: "700", fontSize: "20px", display: "inline-block" }}
      >
        {section}
      </p>

      {messages && (
        <p
          className="text-[#0099F7]"
          style={{
            display: "inline-block",
            marginLeft: "5px",
            fontSize: "13px",
            fontWeight: "600",
          }}
        >
          {`(${messages})`}
        </p>
      )}

   

      <div style={{ position: "relative" }}>
        <input
          type="text"
          style={{
            height: "40px",
            width: "271px",
            marginTop: "9px",
            paddingLeft: "50px",
          }}
          placeholder="Search here..."
          className="flex-1 bg-[#2A2F34] placeholder-[10px]  focus:outline-none focus:shadow-outline rounded-lg py-2 px-4 block appearance-none leading-5 fontSize:'21px"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          style={{
            position: "absolute",
            left: "10px",
            top: "50%",
            transform: "translateY(-50%)",
            marginRight: "12px",
          }}
        >
          <path
            d="M11 20C15.9706 20 20 15.9706 20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20Z"
            stroke="#F7F8F8"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.9299 20.6898C19.4599 22.2898 20.6699 22.4498 21.5999 21.0498C22.4499 19.7698 21.8899 18.7198 20.3499 18.7198C19.2099 18.7098 18.5699 19.5998 18.9299 20.6898Z"
            stroke="#F7F8F8"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};
