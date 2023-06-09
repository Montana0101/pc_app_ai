import React from "react";
import "./index.scss";
import CopyImg from "../../../assets/logos/copy.png";
import JasperImg from "../../../assets/logos/jasper.png";
import HeyFridayImg from "../../../assets/logos/heyfriday.png";
import XiyuLogo from "../../../assets/logos/xiyu.png";
import EffiditLogo from "../../../assets/logos/effidit.png"
var { exec } = window.require('child_process')

const data = [
    {
        img: XiyuLogo,
        name: "奚语",
        desc: "一键生成电商营销文案",
        link: "https://chuangyi.taobao.com/pages/aiCopy",
        content: "阿里旗下智能文案工具，一键生成营销文案，电商场景悉数覆盖"
    },
    {
        img: HeyFridayImg,
        name: "HeyFriday",
        desc: "国内团队推出的智能AI写作工具",
        link: "https://www.heyfriday.cn/home",
        content: "Friday 是一款线上AI文本内容生成工具,根据提示告诉 Friday 你的想法，她就能帮你生成、改写、续写出完整的，高质量的公众号文章、邮件或营销广告等"
    },
    {
        img: EffiditLogo,
        name: "Effidit",
        desc: "腾讯AI Lab开发的智能创作助手",
        link: "https://www.jasper.ai/",
        content: "智能创作助手 Effidit（Efficient and Intelligent Editing）是由腾讯 AI Lab 开发的一个研究性原型系统，探索用 AI 技术提升写作者的写作效率和创作体验"
    },
    {
        img: CopyImg,
        name: "Copy.ai",
        desc: "人工智能营销文案和内容创作工具",
        link: "https://www.copy.ai/",
        content: "Copy.ai的主要特点之一是其先进的 AI 技术，该技术使用自然语言处理和机器学习算法来生成根据你的特定需求量身定制的高质量内容。无论你需要帮助制作吸引人的标题、撰写产品说明，还是起草整篇博文或文章，Copy.ai 都可以提供帮助（国外）"
    },
    {
        img: JasperImg,
        name: "Jasper",
        desc: "AI文字内容创作工具",
        link: "https://www.jasper.ai/",
        content: "Jasper（原Jarvis）是国外最受欢迎的AI写作软件工具之一，因其丰富的的模板和强大的智能写作功能而广受欢迎。你可以使用 Jasper 创建博客、文章、书、剧本、帖子和任何其他内容。只需选择一个话题，填写关键词和细节，Jasper将为你自动写作内容（国外）"
    },

]

const TextLinkCModule = () => {
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
                            <div className="_col_right">
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

export default TextLinkCModule