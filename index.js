window.onload = function() {
    if(Kernal.isLogin()) {
        initUserInfo();
    }
    // 设置监听器，点击搜索按钮后，执行对应函数
    document.getElementById('search-btn').addEventListener('click', function() {
        search();
    });

    $("#input").keypress(function(event) {
        if(event.which == 13) {
            search();
        }
    })

    /*document.onkeydown = function (event) {
        var e = event || window.event;
        if(e && e.keyCode == 13)
        {
            search();
        }
    }*/

    // TODO: 在此为 top-right 元素设置监听器
    document.getElementById('top-right').addEventListener("click",function() {
        clickLogin();
    });
}

function search() {
    /*var str = document.getElementById('input').value;
    if(str == "")
        alert("请输入搜索内容");
    else
        alert(str);*/
    var str = document.getElementById('input').value;
    if(str == "")
        window.location.href="https://www.baidu.com/";
    else
        window.location.href="https://www.baidu.com/s?wd="+str;
}

function clickLogin() {
    if(!Kernal.isLogin()) {
        login();
    }
    else {
        logout();
    }
}

function initUserInfo() {
    // TODO: 修改页面显示错误的 bug，另外注意图片路径是否正确
    var username = Kernal.getUserName();
    console.log(username);
    var content = '<div id="user">\
                        <span id="user-img">\
                            <img src="../img/user.jpg" />\
                        </span>\
                        <span id="name">\
                            ' + username +'\
                        </span>\
                    </div>';
    document.getElementById('top-right').innerHTML = content;
    document.getElementById('name').textContent=username;
}

// ============================================================ 你不需要去关注的代码

function login() {
    Kernal.login();
    location.reload();
}

function logout() {
    Kernal.logout();
    location.reload();
}