import React, { useEffect, useState, useRef } from 'react'
import './index.scss'
import { Form, Input, Button, Checkbox, Row, Col, message, Tabs } from 'antd';
import {checkUserLogin } from '../../request/api'
// import { AliOss } from "@library/const"
import { useNavigate } from 'react-router-dom';

const Login = (props) => {
    const [countFlag, setCountFlag] = useState(false) // 倒计时开关
    const [count, setCount] = useState(300) // 5分钟倒计时
    const [check, setCheck] = useState(false) // 是否自动登录

    const navigate = useNavigate()
    let userRef = useRef()
    let passRef = useRef()

    var username = ""
    var password = ""

    useEffect(() => {
        // 自动登录
        if (localStorage.getItem('user')) {
            navigate("/");
        }
    }, [])

    useEffect(() => {
        if (count < 300) {
            setTimeout(() => {
                let _count = count - 1
                setCount(_count)
            }, 1000)
            if (count == 1) {
                setCount(300)
                setCountFlag(false)
            }
        }

    }, [count])

    useEffect(() => {
        document.body.addEventListener("keydown",handleEvt)
        // console.log("打印下propssss",props)
        console.log("都不是基本都是的骄傲",props)
    }, [])

    const handleEvt = (e) => {
        if(e.keyCode == 13){
            _login()
        }
    }

    // 登录校验
    const _verify = () => {
        console.log("_username is ",username)
        console.log('_password is',password)
        if (username && password) {
            return true
        } else {
            message.warning("用户名和密码不能为空!")
            return false
        }
    }

    // 自动登录
    const _remeber = (e) => {
        if (e.target.checked) {
            setCheck(true)
            localStorage.setItem('auto', 1)
        } else {
            localStorage.setItem('auto', 0)
        }
    }

    const _login = async () => {
        // 用户名密码
        if (_verify()) {
            let params = {
                username: username,
                password: password
            }

            const result = await checkUserLogin(
                params
            )

            if (result.success) {
                // 存身份
                localStorage.setItem('user', JSON.stringify(result.data))
                message.success('登录成功')
                setTimeout(() => {
                    // props.history.push({
                    //     pathname: '/'
                    // })
                    navigate("/");
                }, 300)
            } else {
                message.warning(result.message )
            }
        }
    }

    return <>
        <div className='login-page'>
            <main>
                <div className='col'>
                    <div>账号：</div>
                    <input onChange={e => { 
                        username = e.target.value
                     }} id="_input1" ref={userRef}/>
                </div>
                <div className='col'>
                    <div>密码：</div>
                    <input onChange={e => { password = e.target.value }} type="password" ref={passRef}/>
                </div>
                {/* <div className='col'>
                    <button>登录</button>
                </div> */}
            </main>
        </div>
    </>
}

export default Login