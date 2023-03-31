import React, { useEffect, useState, useRef } from 'react'
import './index.scss'
import { Form, Input, Button, Checkbox, Row, Col, message, Tabs } from 'antd';
// import {checkUserLogin } from '@library/api'
// import { withRouter } from 'react-router-dom'
// import { AliOss } from "@library/const"
import { UserOutlined, LockOutlined } from '@ant-design/icons';
const { TabPane } = Tabs;
// const bg = AliOss + "/img/bg.jpg"
// const bg = require("../../static/images/login_bg.png")
// const logo = AliOss + "/img/logo.jpg"

const interval = 300
const effective = 300

const Login = (props) => {
    const formRef = useRef()

    const [countFlag, setCountFlag] = useState(false) // 倒计时开关
    const [count, setCount] = useState(300) // 5分钟倒计时
    const [check, setCheck] = useState(false) // 是否自动登录

    const [captcha, setCaptcha] = useState(null)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [checked, setChecked] = useState(true)
    const [action, setAction] = useState(1) // 1默认用户名密码 2手机号验证码

    useEffect(() => {
        // 自动登录
        if (localStorage.getItem('auto') == 1 && localStorage.getItem('user')) {
            props.history.push({
                pathname: '/'
            })
        }
    }, [])

    useEffect(() => {
        if (username) {
            localStorage.setItem("username", username)
        }
    }, [username])

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
        if (countFlag) {

            let _count = count - 1
            setCount(_count)
            // alert(_count)
        }
    }, [countFlag])

    const _onValuesChange = (cut, all) => {
        setUsername(all.username)
        setPassword(all.password)
    }

    // 登录校验
    const _verify = () => {
        if (username && password) {
            return true
        } else {
            message.warn('请核对用户名和密码')
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
            // const result = await checkUserLogin(
            //     params
            // )

            // if (result.success) {
            //     // 存身份
            //     // localStorage.setItem('authCode', data.result.authCode)
            //     localStorage.setItem('user', JSON.stringify(result.data))
            //     message.success('登录成功')
            //     setTimeout(() => {
            //         props.history.push({
            //             pathname: '/'
            //         })
            //     }, 300)
            // } else {
            //     message.error(result.message )
            // }
        }
    }


    return <>
        <div className='login-page'>
            <main>
                <div className='col'>
                    <div>账号：</div>
                    <input onChange={e => { setUsername(e.target.value) }} />
                </div>
                <div className='col'>
                    <div>密码：</div>
                    <input onChange={e => { setPassword(e.target.value) }} type="password" />
                </div>
            </main>
        </div>
    </>
}

export default Login