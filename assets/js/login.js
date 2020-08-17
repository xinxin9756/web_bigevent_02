// 入口函数
$(function() {
    // 1.点击去注册账号，隐藏登陆区域，显示注册区域
    $("#link_reg").on('click', function() {
            $('.login-box').hide();
            $('.reg-box').show();
        })
        // 2.点击去登录，隐藏注册区域，显示登陆区域
    $("#link_login").on('click', function() {
        $('.login-box').show();
        $('.reg-box').hide();
    })
})