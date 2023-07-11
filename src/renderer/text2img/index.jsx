import React, { useEffect, useState } from "react";
import "./index.scss";
import { Input, Button, showLoading } from "antd";
import { fetchText2Img } from "../../request/api";
import { statediffusionKey } from "request/env";

const Text2ImgModule = () => {
    const img = "https://lifankeji.oss-cn-hangzhou.aliyuncs.com/crm/%E7%AB%8B%E5%B8%86/logo.png"
    const [question, setQuestion] = useState("")
    const [list, setList] = useState([{
        msg: "Hi，这里是图像生成AI，请输入关于生成图片的描述关键词，例如：男性、中年、白皮肤、背景在家等，建议使用智能会话生成英文描述后再使用该功能",
        type: 0,
        img: null
    }])

    // 打开新窗口
// const openDefaultBrowser = function (url) {
//     var exec = require('child_process').exec;
//     console.log(process.platform)
//     switch (process.platform) {
//       case "darwin":
//         exec('open ' + url);
//         break;
//       case "win32":
//         exec('start ' + url);
//         break;
//       default:
//         exec('xdg-open', [url]);
//     }
//   }


    const _submit = async function () {
        let params = {
            key: statediffusionKey,
            prompt: question,
            width: "512",
            height: "512",
            samples: "1",
            num_inference_steps: "20",
            seed: null,
            guidance_scale: "7.5",
            safety_checker: "yes",
            webhook: null,
            track_id: null
        }
        let _list = JSON.parse(JSON.stringify(list))
        _list.push({
            type: 1,
            msg: question,
            img: null
        })
        setList(_list)
        const res = await fetchText2Img(params)
        console.log("text2img接口返回", res)
        if (res.success) {
            let _list1 = JSON.parse(JSON.stringify(_list))
            let img = res.data.output[0]
            _list1.push({
                type: 0,
                msg: null,
                img: img
            })
            setList(_list1)
        }
    }

    return (
        <div class="content">
            <div class="text2img_layout">
            <i className="top"></i><i className="bottom"></i>
                {
                    list.map((item, index) => {
                        return <div class="ui_col">
                            {item.type == 0 ? (index == 0 ? <div class="ui_col_left">
                                <img src={img} className="logo" />
                                <div class="ui_col_text">
                                    <text>{item.msg}</text>
                                </div>
                            </div> : <div class="ui_col_left">
                                <img src={img} className="logo" />
                                <div class="ui_col_text">
                                    <img src={item.img} style={{width:300,height:300,borderRadius:"0 !important"}} />
                                    <a src={item.img} onClick={()=>{}}>
                                     <span style={{color:"#80344c"}}>图片链接</span>: <span>{item.img}</span></a>
                                </div>
                            </div>) :
                                <div class="ui_col_right">
                                    <text class="ui_col_text">{item.msg}</text>
                                </div>}
                        </div>
                    })
                }
            </div>

            <div class="tabbar">
                <div class="tabbar_left">
                    <Input placeholder="请输入咨询内容" onChange={e => { setQuestion(e.target.value) }} />
                </div>
                <Button type="primary" onClick={() => _submit()}>提交</Button>
            </div>
        </div>

    )
}

export default Text2ImgModule