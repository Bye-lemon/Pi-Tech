
function addEvent(ele,type,callback){
    if(ele.addEventListener){
        ele.addEventListener(type,callback,false)
    }else if(ele.attachEvent){
        ele.attachEvent("on"+type,callback)
    }
}
function getEle(name){
    var method = name.charAt(0)==='.'?'getElementsByClassName':'getElementById';
    return document[method](name.substr(1));
}
function func(){
    var wrapper = getEle('#wrapper');
    var bottomWrapper =getEle('.bottom')[0];
    var topWrapper = getEle('.top')[0];
    var handle = getEle('.handle')[0];
    var cls = wrapper.className;
    var skew = 1000;
    var delta = 0;

    addEvent(wrapper,'mousemove',function(ev){
        var e = ev||window.event;
        delta=(e.clientX-window.innerWidth/2)*0.5;
        handle.style.left=e.clientX+delta+'px';
        topWrapper.style.width=e.clientX+skew+delta+'px';
    })
}

addEvent(document,'DOMContentLoaded',func);

