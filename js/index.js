// 登录
function login() {
    if (document.getElementById('username').value == '') {
        alert("用户名不可为空, 请重新输入!");
        return false;
    };
    if (document.getElementById('password').value == '') {
        alert("密码不可为空, 请重新输入!");
        return false;
    };
    alert('登录成功!');
}

// 注册
function register() {
     if (document.getElementById('username').value == '') {
        alert("用户名不可为空, 请重新输入!");
        return false;
    };
    if (document.getElementById('password1').value == '') {
        alert("密码不可为空, 请重新输入!");
        return false;
    };
    if (document.getElementById('password2').value == '') {
        alert("密码不可为空, 请重新输入!");
        return false;
    };if (document.getElementById('tel').value == '') {
        alert("联系方式不可为空, 请重新输入!");
        return false;
    };
    alert('注册成功!');
}

// 添加
function insert() {
    if (document.getElementById('book_id').value == '') {
        alert("书籍编号不可为空, 请重新输入!");
        return false;
    };
    if (document.getElementById('book_name').value == '') {
        alert("书籍名称不可为空, 请重新输入!");
        return false;
    };
    alert('添加成功!');
}

// 删除
function deletes() {
     if (document.getElementById('book_id').value == '') {
        alert("书籍编号不可为空, 请重新输入!");
        return false;
    };
    alert('删除成功!');
}

// 修改
function update() {
    if (document.getElementById('book_id').value == '') {
        alert("书籍编号不可为空, 请重新输入!");
        return false;
    };
    if (document.getElementById('book_name').value == '') {
        alert("书籍名称不可为空, 请重新输入!");
        return false;
    };
    alert('修改成功!');
}

Date.prototype.format = function(format) {
    var args = {
        "M+": this.getMonth() + 1,
        "d+": this.getDate(),
        "h+": this.getHours(),
        "m+": this.getMinutes(),
        "s+": this.getSeconds(),
        "q+": Math.floor((this.getMonth() + 3) / 3),
        "S": this.getMilliseconds()
    };
    if (/(y+)/.test(format))
        format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var i in args) {
        var n = args[i];
        if (new RegExp("(" + i + ")").test(format))
            format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? n : ("00" + n).substr(("" + n).length));
    }
    return format;
};

// 回调函数
function getNowFormatDate() {
    var time = new Date().format("yyyy-MM-dd hh:mm:ss");
    document.getElementById('time').innerHTML = time;
}

if (document.getElementById('time')) {
    window.setInterval("getNowFormatDate()", 1000);
}