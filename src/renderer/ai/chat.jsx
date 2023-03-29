import React, { useEffect, useState } from "react";
import "./chat.css";
import { Input, Button, showLoading } from "antd";
import { fetchChatGPT } from "../../request/api";

const ChatModule = () => {
    const img = "https://lifankeji.oss-cn-hangzhou.aliyuncs.com/crm/%E7%AB%8B%E5%B8%86/logo.png"
    const [question, setQuestion] = useState("")
    const [list, setList] = useState([{
        msg: "Hi，这里是AI人工智能，请输入您的问题",
        type: 0
    }])

    const _submit = async function () {
        let params = {
            data: question,
        }
        let _list = JSON.parse(JSON.stringify(list))
        _list.push({
            type: 1,
            msg: question
        })
        setList(_list)
        const res = await fetchChatGPT(params)
        console.log("chatGPT接口返回", res)
        if (res.success) {
            let _list1 = JSON.parse(JSON.stringify(_list))
            let str = res.data
            _list1.push({
                type: 0,
                msg: str
            })
            setList(_list1)
        }
    }

    return (
        <div class="content">
            <div class="chat_layout">
                {
                    list.map((item, index) => {
                        return <div class="chat_col">
                            {item.type == 0 ? <div class="chat_col_left">
                                <img src={img} />
                                <div class="chat_col_text">
                                    <text>{item.msg}</text>
                                </div>
                            </div> :
                                <div class="chat_col_right">
                                    <text class="chat_col_text">{item.msg}</text>
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

export default ChatModule