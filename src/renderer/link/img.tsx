import React from "react";
import "./index.scss";
import CopyImg from "../../../assets/logos/copy.png";
import JasperImg from "../../../assets/logos/jasper.png";
import HeyFridayImg from "../../../assets/logos/heyfriday.png";
import XiyuLogo from "../../../assets/logos/xiyu.png";
import EffiditLogo from "../../../assets/logos/effidit.png"
import WenxinLogo from "../../../assets/logos/wenxin.png";
import NewBingLogo from "../../../assets/logos/new-bing-icon.png";
import MjLogo from "../../../assets/logos/midjourney-icon.png";
import PhotoroomLogo from "../../../assets/logos/photoroom-icon.png";
import StableLogo from "../../../assets/logos/stability-ai-icon.png";
var { exec } = window.require('child_process')

const data = [
    {
        img: WenxinLogo,
        name: "文心一格",
        desc: "AI艺术和创意辅助平台",
        link: "https://yige.baidu.com/",
        content: "百度旗下图像生成工具，AI艺术和创意辅助平台"
    },
    {
        img: NewBingLogo,
        name: "Bing Image",
        desc: "人工智能营销文案和内容创作工具",
        link: "https://cn.bing.com/create",
        content: "微软必应推出的基于DALL·E的AI图像生成工具"
    },
    {
        img: MjLogo,
        name: "Midjourney",
        desc: "AI图像和插画生成工具",
        link: "https://www.midjourney.com/home/?callbackUrl=%2Fapp%2F",
        content:"Midjourney 由一群对人工智能和创造力充满热情的研究人员和工程师于 2022 年创立，他们受到OpenAI 的 ，v5模型或许是世界最强的 ! (国外)"
    },
    {
        img: StableLogo,
        name: "StableDiffusion",
        desc: "文本到图像生成AI",
        link: "https://stablediffusionweb.com/",
        content: "文心一言借鉴了stable diffusion的AI文生图模型 (国外)"
    },

    {
        img: PhotoroomLogo,
        name: "PhotoRoom",
        desc: "免费的AI图片背景移除和添加",
        link: "https://www.photoroom.com/background-remover",
        content: "免费的AI图片背景移除和添加（国外）"
    },

]

const ImgLinkCModule = () => {
    const openLink = (url: string) => {
        // var exec = window.require('child_process').exec;
        console.log(process.platform)
        switch (process.platform) {
            case "darwin":
                exec('open ' + url);
                break;
            case "win32":
                exec('start ' + url);
                break;
            default:
                exec('xdg-open', [url]);
        }
    }

    return (
        <div className="link_layout">
            <ul>
                {
                    data.map((item,index) => {
                        return <li key={index}>
                            <div className="_col_left" onClick={() => { openLink(item.link) }}>
                                <img src={item.img} />
                                <div className="_content">
                                    <div className="_title">{item.name}</div>
                                    <div>{item.desc}</div>
                                </div>
                            </div>
                            <div className="_col_right_img">
                                <i className="top"></i><i className="bottom"></i>
                                <div>
                                    <p>{item.content}</p>
                                </div>
                            </div>
                        </li>
                    })
                }
            </ul>
        </div>
    )
}

export default ImgLinkCModule