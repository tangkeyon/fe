(function (window) {
    var name = "";

    function setName(cname) {
        name = cname;
    }

    function getName() {
        return name;
    }
    /* 绑定在window上可以直接调用 */
    window.module2 = {
        "setName": setName,
        "getName": getName
    }
})(window)  //传入window是为了在代码压缩的时候不会出错
