import React from "react";
import { UserSkill } from "./UserSkill";
import { UserGallery } from "./UserGallery";
import { UserNetworks } from "../Atoms/UserNetworks";
import { UserMoreInformatiom } from "../Atoms/UserMoreInformatiom";

export const UserData = () => {
  return (
    <>
    <UserNetworks/>
    <UserMoreInformatiom/>
    <UserSkill/>
    <UserGallery/>
    </>
    
  );
};
