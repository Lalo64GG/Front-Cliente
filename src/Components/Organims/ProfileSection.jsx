import React from "react";
import { UserData } from "../Molecules/UserData";
import { UserImageProfile } from "../Atoms/UserImage";

export const ProfileSection = () => {
  return (
    <section
      className="w-[320px] overflow-y-auto max-h-[100%] relative"
      style={{
        background:
          "linear-gradient(180deg, #212529 0%, rgba(33, 37, 41, 0.00) 100%) ",
        backgroundColor: "#010409",
      }}
    >


      <div className=" relative">
        <div>
          <img src="/img/fondo_default.svg" alt="" />
        </div>
        <UserImageProfile/>
      </div>

      <div className=" px-3">
        <UserData/>
      </div>

    </section>
  );
};
