import React, { useEffect, useState, useRef } from 'react'
import './index.scss'
import { Form, Input, Button, Checkbox, Row, Col, message, Tabs } from 'antd';
import {checkUserLogin } from '../../request/api'
// import { withRouter } from 'react-router-dom'
// import { AliOss } from "@library/const"
import { UserOutlined, LockOutlined } from '@ant-design/icons';
const { TabPane } = Tabs;
// const bg = AliOss + "/img/bg.jpg"
// const bg = require("../../static/images/login_bg.png")
// const logo = AliOss + "/img/logo.jpg"

const interval = 300
const effective = 300

const Login = () => {

    const [countFlag, setCountFlag] = useState(false) // 倒计时开关
    const [count, setCount] = useState(300) // 5分钟倒计时
    const [check, setCheck] = useState(false) // 是否自动登录
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    let userRef = useRef()
    let passRef = useRef()
    useEffect(() => {
        // 自动登录
        if (localStorage.getItem('user')) {
            // props.history.push({
            //     pathname: '/'
            // })
        }
    }, [])

    // useEffect(() => {
    //     if (username) {
    //         localStorage.setItem("username", username)
    //     }
    // }, [username])

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
        // if (countFlag) {

        //     let _count = count - 1
        //     setCount(_count)
        //     // alert(_count)
        // }
        var us_input = document.getElementById("_input1")
        var ps_input =  document.getElementById("_input2")
        ps_input.addEventListener("keydown",handleEvt)
        us_input.addEventListener("keydown",handleEvt)
    }, [])

    const handleEvt = (e) => {
        
        console.log("_username _is ",userRef)
        console.log('password is',passRef)
        if(e.keyCode == 13){
            console.log("13_username _is ",username)
            console.log('1333_password is',password)
            // _login(_u)
            // _verify()
            // console.log("username is ",username)
            // console.log('password is',password)
        }
    }


    // 登录校验
    const _verify = (_username,_password) => {
        console.log("_username is ",_username)
        console.log('_password is',_password)
        if (_username && _password) {
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
                username: _username,
                password: _password
            }

            const result = await checkUserLogin(
                params
            )

            if (result.success) {
                // 存身份
                localStorage.setItem('user', JSON.stringify(result.data))
                message.success('登录成功')
                // setTimeout(() => {
                //     props.history.push({
                //         pathname: '/'
                //     })
                // }, 300)
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
                    <input onChange={e => { setUsername(e.target.value) }} id="_input1" ref={userRef}/>
                </div>
                <div className='col'>
                    <div>密码：</div>
                    <input onChange={e => { setPassword(e.target.value) }} type="password" ref={passRef}/>
                </div>
                {/* <div className='col'>
                    <button>登录</button>
                </div> */}
            </main>
        </div>
    </>
}

export default Login