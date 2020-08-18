// 开发环境服务器地址
var baseURL = 'http://ajax.frontend.itheima.net'
    // // 测试环境服务器地址
    // var baseURL = 'http://ajax.frontend.itheima.net/'
    // // 生产环境服务器地址
    // var baseURL = 'http://ajax.frontend.itheima.net/'



// 拦截所有ajax的请求：grt/post/ajax

// ajaxPrefilter拦截请求然后直行此函数

$.ajaxPrefilter(function(params) {
    // 凭借对应环境的服务器地址
    params.url = baseURL + params.url;
    alert(params.url);
})