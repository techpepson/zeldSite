import { headerTypes, landImagesInt, landPageStylesInt } from '../../../types/compoTypes/interfaces';
import { cctv, codeImg, saleImg, barGraph, commandPrompt } from "../../../../public/LandImg/landImg";


export const headerStyles: headerTypes = {
    logoStyles: `flex flex-row text-2xl font-normal`,
    buttonStyles: `text-sm gap-3 text-normal flex`,
    headerStyle: `md:flex md:justify-between md:place-items-center`,
    centerBody: `relative container`,
    hideHeader: `max-md:hidden`
}

export const landPageStyles: landPageStylesInt = {
    centerText: `flex justify-center place-items-center flex-col`,
    largeText: `sm:text-4xl md:text-5xl text-center text-wrap text-3xl`,
    smallText: `text-sm`,
    mediumText: `text-2xl text-center`,
    centerParagraph: `text-center max-w-max`,
    roundImage: `w-[3rem] h-[3rem] rounded-full`,
    buttonStyle: `flex justify-center place-items-center text-md mt-4`,
    landWorks: `flex gap-5 flex-wrap items-center justify-center mt-10 max-w-auto`,
    landWorksImg: `flex w-[20rem] h-[20rem] rounded-md`
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