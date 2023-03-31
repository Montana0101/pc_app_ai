// 阿里oss静态地址前缀
export const AliOss = "https://shbd.oss-cn-beijing.aliyuncs.com/%E5%AE%98%E7%BD%91%E5%90%8E%E5%8F%B0"

const getProxyUrl = () => {
    let env = process.env.NODE_ENV
    let url = 'http://101.43.49.47:8880'
    if(env == 'dev'){
        url = 'http://localhost:8880'
    }else if(env == 'prod'){
        url = 'http://101.43.49.47:8880'
    }
    return url
}

export const proxy_url =getProxyUrl();

export const chatgpt_url = "https://www.jslifhr.com/ai" // 代理转发
export const stalediffusion = 'https://stablediffusionapi.com/api' 

export const statediffusionKey = "wndRxdRuD26yDj15l8NL1w0uyZXKWpyX2sQLF9kGVwCpCbWJqNORItZFqgbL" // 
// export const chatgpt_url = "http://43.156.50.241:5000"
// export const proxy_url = 'http://101.43.49.47:8880'
export const ThemeColor = "#51AA52";

export const CutLine = "1px solid rgba(0,0,0,0.1)";