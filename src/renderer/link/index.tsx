import React from "react";
import "./index.scss";
import CopyImg from "../../../assets/logos/copy.png";

var { exec } = window.require('child_process')

const data = [
    {
        img: CopyImg,
        name: "Copy.ai",
        desc: "人工智能营销文案和内容创作工具",
        link: "https://www.copy.ai/",
        content:"Copy.ai的主要特点之一是其先进的 AI 技术，该技术使用自然语言处理和机器学习算法来生成根据你的特定需求量身定制的高质量内容。无论你需要帮助制作吸引人的标题、撰写产品说明，还是起草整篇博文或文章，Copy.ai 都可以提供帮助。2023年3月8日，Copy.ai推出了Chat功能，类似于ChatGPT但内置提供了很多开箱即用的prompts提示供用户使用。"
    }
]

const LinkCModule = () => {
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
                    data.map((item) => {
                        return <li>
                            <div className="_col_left" onClick={() => { openLink(item.link) }}>
                                <img src={CopyImg} />
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
                                {/* <div className="panel-body single my-4 ">
                                    <p>Copy.ai的主要特点之一是其先进的 AI 技术，该技术使用自然语言处理和机器学习算法来生成根据你的特定需求量身定制的高质量内容。无论你需要帮助制作吸引人的标题、撰写产品说明，还是起草整篇博文或文章，Copy.ai 都可以提供帮助。2023年3月8日，Copy.ai推出了Chat功能，类似于ChatGPT但内置提供了很多开箱即用的prompts提示供用户使用。</p>
                                  
                                        <p>基本计划是完全免费的，包括访问平台的所有基本功能，包括基本语言模型和数量有限的免费撰写，每月可以免费撰写2000个单词。</p>
                                        <p>付费计划年版为每月36美元，并提供更高级的功能，包括访问更高级的语言模型、无限制输出文字数量、25个种类的语言输出。</p>
                               
                                </div> */}
                            </div>
                        </li>
                    })
                }
            </ul>
        </div>
    )
}

export default LinkCModule