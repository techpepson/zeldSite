import { headerTypes, landImagesInt, landPageStylesInt } from '../../../types/compoTypes/interfaces';
import { cctv, codeImg, saleImg, barGraph, commandPrompt } from "../../../../public/LandImg/landImg";
import { stats } from '../../../components/stats';


export const headerStyles: headerTypes = {
    logoStyles: `flex flex-row text-2xl font-normal`,
    buttonStyles: `text-sm gap-3 text-normal flex`,
    headerStyle: `md:flex md:justify-between md:place-items-center`,
    centerBody: `relative container`,
    hideHeader: `max-md:hidden`
}

export const landPageStyles: landPageStylesInt = {
    centerText: `flex justify-center items-center flex-col`,
    centerBottomText: `flex justify-center place-items-center flex-col text-center`,
    largeText: `sm:text-4xl md:text-5xl text-center text-wrap text-3xl`,
    smallText: `text-sm text-center`,
    mediumText: `md:text-2xl max-sm:text-xl max-[360px]:text-[10px] text-center`,
    mediumTextLeft: `md:text-2xl max-sm:text-xl max-[360px]:text-xl mb-2 align-middle`,
    bottomTextSize: `md:text-4xl max-sm:text-2xl text-2xl text-center max-[154px]:mt-10`,
    centerParagraph: `text-center max-w-max`,
    roundImage: `w-[3rem] h-[3rem] rounded-full max-[360px]:w-[2rem] max-[360px]:h-[2rem] max-[320px]:hidden`,
    buttonStyle: `flex justify-center items-center text-md mt-4`,
    benefitStyle: `flex justify-center text-sm mt-4 border rounded-full items-center`,
    landWorks: `flex gap-5 flex-wrap items-center justify-center mt-10 max-w-auto`,
    landWorksImg: `flex w-[20rem] h-[20rem] rounded-md`,
    bgStyles: `bg-no-repeat bg-blend-multiply h-[200px] w-auto bg-right-top`,
    gridStyles: `mt-20 grid grid-cols-2 max-sm:grid-cols-1`,
    statsStyles: `flex flex-col text-center items-center`,
    statsStylesRow: `grid items-center text-center grid-cols-2 max-sm:grid-cols-1 max-sm:gap-5 gap-1`,
    statsStylesContainer: `flex align-middle place-content-center mt-10 max-sm:gap-10`
}

export const landImages: landImagesInt = [
    {
        image: "camera",
        src: cctv,
    },
    {
        image: "code",
        src: codeImg,
    },
    {
        image: "sale",
        src: saleImg,
    },
    {
        image: "graph",
        src: barGraph,
    },
    {
        image: "command",
        src: commandPrompt
    }
]