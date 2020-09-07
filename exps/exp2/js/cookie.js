const accept = document.querySelector(`button[name="Aceitar"]`);

if(typeof accept !== undefined)
    accept.addEventListener(`click`, function(){
        setCookie(true);
    });

const fechar = document.querySelector(`button[name="close"]`);

if (typeof fechar !== undefined)
    fechar.addEventListener(`click`, function() {
        hideCookieMsg();
    });

function getCookie () {
    const cookies = document.cookie;
    if(cookies.search("cookie=accepted") == -1) {
        hideCookieMsg();
    }
}

function setCookie ( accepted ) {
    if(accepted) {
        document.cookie = `cookie=accepted`;
    }
    
    hideCookieMsg();
}

function unsetCookie() {
    console.log(document.cookie);
}

function hideCookieMsg(){
    const warning = document.querySelector(`.warning`);
    if(warning.getAttribute(`style`)){
        warning.removeAttribute(`style`);
    } else {
        warning.setAttribute(`style`, `display: none`);
    }
}

// function setMessage(msg){
//     const text = document.querySelector(`.warning__text`);
    
//     text.innerHTML = msg;
// }

getCookie();
