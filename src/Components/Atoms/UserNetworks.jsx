import { Image } from "./Image"

export const UserNetworks = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-8">
    <h1 className="text-[#fff] text-[20px] font-[700]">
        Luis Daniel
    </h1>
    <span className="text-[#ADB5BDBF] text-[12px] font-[600]">Front-End Developer</span>

    <div className="flex">
        <a href=""><Image src= {"/img/GitHub.svg"} /></a>
        <a href=""><Image src= {"/img/LinkedIn.svg"} /></a>
        <a href=""><Image src = {"/img/Instagram.svg"} /></a>
    </div>
</div>
  )
}
