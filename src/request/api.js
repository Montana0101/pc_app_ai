// import { fetchGadget } from "./util";
import { proxy_url, chatgpt_url } from "./env";

const project = "";
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

// chatgpt
export const fetchChatGPT = (params) => {
  return fetch(chatgpt_url + '/chatgpt', {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify(params),
  })
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      return res;
    });
}

// 登录 >> 用户名密码
export const checkUserLogin = (params) => {
  // let { name, password } = params;
  const url = `${project}/user/login`;
  return fetchGadget(url, "POST", params);
};


// 用户管理 >> 添加用户
export const addUser = (params) => {
  const url = `${project}/user`;
  return fetchGadget(url, "POST", params);
};

// 用户管理 >> 编辑用户
export const putUser = (params) => {
  const url = `${project}/user`;
  return fetchGadget(url, "PUT", params);
};

// 用户管理 >> 删除用户
export const delUser = (id) => {
  const url = `${project}/user/${id}`;
  return fetchGadget(url, "DELETE");
};

// 用户管理 >> 用户列表
export const getUsers = (page, size) => {
  const url = `${project}/user/list?page=${page}&size=${size}`;
  return fetchGadget(url, "GET");
};


// 招聘管理 >> 招聘列表
export const getRecruits = (page, size) => {
  const url = `${project}/recruit/list?page=${page}&size=${size}`;
  return fetchGadget(url, "GET");
};

// 招聘管理 >> 招聘详情
export const getRecruitDetail = (id) => {
  const url = `${project}/recruit/detail?id=${id}`;
  return fetchGadget(url, "GET");
}

// 招聘管理 >> 添加 / 编辑招聘信息
export const addRecruit = (params) => {
  const url = `${project}/recruit`;
  return fetchGadget(url, "POST", params);
};

// 招聘管理 >> 删除招聘信息
export const delRecruit = (id) => {
  const url = `${project}/recruit/${id}`;
  return fetchGadget(url, "DELETE");
};

// 企业管理 >> 企业列表
export const getCompany = (params) => {
  const { page, size, companyName = "", status = "" } = params;
  const url = `${project}/company/list?page=${page}&size=${size}&companyName=${companyName}&status=${status}`;
  return fetchGadget(url, "GET");
};

// 企业管理 >> 添加企业
export const addCompany = (params) => {
  const url = `${project}/company`;
  return fetchGadget(url, "POST", params);
};

// 企业管理 >> 编辑企业
export const editCompany = (params) => {
  const url = `${project}/company`;
  return fetchGadget(url, "PUT", params);
};

// 企业管理 >> 删除企业
export const delCompany = (id) => {
  const url = `${project}/company/${id}`;
  return fetchGadget(url, "DELETE");
};


// 人才管理 >> 意向用户 >> 列表
export const getPotential = (params) => {
  const { page, size, phone, realName, identityId, sex, source } = params;
  const url = `${project}/potential/list?page=${page}&size=${size}&phone=${phone}&` +
    `realName=${realName}&identityId=${identityId}&sex=${sex}&source=${source}`;
  return fetchGadget(url, "GET");
};

// 人才管理 >> 意向用户 >> 增加
export const addPotential = (params) => {
  const url = `${project}/potential`;
  return fetchGadget(url, "POST", params);
};

// 人才管理 >> 意向用户 >> 增加
export const putPotential = (params) => {
  const url = `${project}/potential`;
  return fetchGadget(url, "PUT", params);
};

// 人才管理 >> 意向用户 >> 导出
export const exportPotential = (params) => {
  const { page, size, phone, realName, identityId, sex, source } = params;
  const url = `${project}/potential/export?phone=${phone}&` +
    `realName=${realName}&identityId=${identityId}&sex=${sex}&source=${source}`;
  // return fetchGadget(url, "GET");
  window.open(proxy_url + url)
};

// 人才管理 >> 意向用户 >> 短信通知
export const sendMessage = (params) => {
  const url = `${project}/sms/message`
  return fetchGadget(url, "POST", params)
}


