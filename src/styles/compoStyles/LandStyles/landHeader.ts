import { headerTypes, landImagesInt, landPageStylesInt } from '../../../types/compoTypes/interfaces';
import { cctv, codeImg, saleImg, barGraph, commandPrompt } from "../../../../public/LandImg/landImg";

export const headerStyles: headerTypes = {
    logoStyles: `flex flex-row text-2xl font-normal`,
    buttonStyles: `md:text-sm md:gap-3 md:text-normal flex`,
    buttonStylesCol: `max-md:flex max-md:flex-col max-md:gap-5`,
    headerStyle: `flex md:justify-between md:items-center`,
    headerStyleCol: `max-md:flex max-md:flex-col max-md:gap-5`,
    hideCol: `max-md:hidden`,
    centerBody: `relative container`,
    hideBars: `md:hidden mt-5`,
    rightNavs: `flex justify-end flex`,
    scrollStyles: `fixed right-0 top-[50%] z-[999]`,
    scrollUp: ``
    // absoluteHeader: `max-md:absolute`,
}

export const landPageStyles: landPageStylesInt = {
    centerText: `flex justify-center items-center flex-col`,
    centerBottomText: `flex justify-center place-items-center flex-col text-center`,
    largeText: `sm:text-4xl md:text-5xl text-center text-wrap text-3xl`,
    smallText: `text-sm text-center`,
    mediumText: `md:text-2xl max-sm:text-xl max-[360px]:text-[1.2rem] leading-[1.75rem] text-center`,
    mediumTextLeft: `md:text-2xl max-sm:text-xl max-[360px]:text-xl mb-2 align-middle`,
    bottomTextSize: `md:text-4xl max-sm:text-2xl text-2xl text-center max-[154px]:mt-10`,
    centerParagraph: `text-center max-w-max`,
    roundImage: `w-[2.5rem] h-[2.5rem] rounded-full max-[360px]:w-[1.5rem] max-[360px]:h-[1.5rem] max-[320px]:hidden`,
    buttonStyle: `flex justify-center items-center text-md mt-4`,
    benefitStyle: `flex  justify-center items-center text-sm mt-4 border rounded-full`,
    landWorks: `flex gap-5 flex-wrap items-center justify-center mt-10 max-w-auto`,
    landWorksImg: `flex w-[20rem] h-[20rem] rounded-md`,
    bgStyles: `bg-no-repeat bg-blend-multiply h-[200px] w-auto bg-right-top`,
    gridStyles: `mt-20 grid grid-cols-2 max-sm:grid-cols-1`,
    statsStyles: `flex flex-col text-center items-center`,
    statsStylesRow: `grid text-center grid-cols-2 max-sm:grid-cols-1 max-sm:gap-5 gap-3`,
    statsStylesContainer: `flex align-middle place-content-center mt-10 max-sm:gap-10`,
    lineBreakStyles: `max-[770px]:hidden`
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