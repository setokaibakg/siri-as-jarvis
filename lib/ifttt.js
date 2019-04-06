module.exports.setup = async (key) => {
    this.key=key;
}
module.exports.GET = async (eventname) => {
    let url = "https://maker.ifttt.com/trigger/" + String(eventname) + "/with/key/" + String(this.key);
    let req = new Request(url);
    let stringReturn = await req.loadString();
    //console.log(stringReturn);
    if (stringReturn.match(/Congratulations/i)) {
        return true;
    } else {
        return false;
    }
}
module.exports.POST = async (eventname, value1, value2, value3) => {
    value1 = typeof value1 === typeof undefined ? "": value1;
    value2 = typeof value2 === typeof undefined ? "" : value2;
    value3 = typeof value3 === typeof undefined ? "" : value3;
    let json_object = {
        "value1": value1,
        "value2": value2,
        "value3": value3
    };
    let jheaders = {
        "content-type": "application/json",
        "charset": "utf-8"
    };
    let url = "https://maker.ifttt.com/trigger/" + String(eventname) + "/with/key/" + String(this.key);
    let req = new Request(url);
    req.method = 'POST';
    req.headers = jheaders;
    req.body = JSON.stringify(json_object);
    let stringReturn = await req.loadString();
    //console.log(stringReturn);
    if (stringReturn.match(/Congratulations/i)) {
        return true;
    } else {
        return false;
    }
}