function module() {
    var name = "";
    var age = 0;

    function setName(cname) {
        name = cname;
    }

    function getName() {
        return name;
    }

    return {
        "setName": setName,
        "getName": getName
    };
}