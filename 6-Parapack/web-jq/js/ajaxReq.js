var baseUrl = "http://www.api.com"; // 更改自己的API地址

// 地址管理
var interfaceApi = {
  login: '/user/login',
}

// 请求方法
var ajaxApi = {
  login: function(name,pwd){
    new ajaxRequest({
      url: interfaceApi.loginApi,
      param: {
        name: name,
        pwd: pwd
      },
      callBack: function (res) {
        console.log(res);
      }
    })
  }
};

window.ajaxApi = ajaxApi;