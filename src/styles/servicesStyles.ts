import { servicesHeaderStyles } from "../types/servicesPageTypes";

export const servicesHeader: servicesHeaderStyles = {
  animateStyling: `flex`,
  flexCol: `flex flex-col gap-3`,
  floatingImgStyles: `lg:flex max-lg:flex max-lg:flex-col lg:justify-around max-lg:items-center max-lg:justify-center max-lg:gap-10`,
  floatingImg: `border-none w-[15rem] h-[15rem] max-[1280px]:w-[11rem] max-[1280px]:h-[11rem] rounded-full transform rotate-[40deg] max-[265px]:w-[5rem] max-[265px]:h-[5rem]`,
  workStyles: `flex flex-col justify-center items-center gap-5`,
  workStylesHeader: `flex flex-col justify-center items-center gap-5 text-center`,
  workStylesImg: `w-[40rem]`,
  solidImg: `w-[20rem] rounded-md`,
  coreServices: `lg:flex max-lg:flex max-lg:flex-col lg:justify-around max-lg:gap-5`,
  centerText: `flex flex-col items-center gap-3`,
  paraStyle: `text-justify max-w-[50ch] max-[1280px]:max-w-[40ch]`,
  buttonStart: `flex justify-start`,
  mediumText: `sm:text-lg md:text-xl lg:text-2xl`,
  smallText: `max-md:text-md lg:text-md`,
  largeText: `lg:text-2xl max-sm:text-xl max-lg:text-xl`,
  centerSmallScreen: `max-lg:flex max-lg:flex-col max-lg:justify-center max-lg:items-center`,
};
