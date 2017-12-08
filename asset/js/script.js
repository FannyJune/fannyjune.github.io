window.onload = function () {
    var mainImage = document.querySelector('.main-image');
    var mainText = document.querySelector('.main-text');
    var m1Sub = document.querySelector('#menu1_sub');

    if (mainImage && mainText && m1Sub && detectmob()) {
        mainImage.style.display = "none";
        mainText.style.display = "none";
        m1Sub.style.display = "none";
    }
};        

function menuClickIndex(x) {
    menuClick(x);
    var mainImage = document.querySelector('.main-image');
    var mainText = document.querySelector('.main-text');

    var m1 = document.querySelector('#menu1');
    var m1m = document.querySelector('#menu1_mobile');
    var m2 = document.querySelector('#menu2');
    var m3 = document.querySelector('#menu3');

    var m1Sub = document.querySelector('#menu1_sub');
    var m2Sub = document.querySelector('#menu2_sub');
    var m3Sub = document.querySelector('#menu3_sub');

    if (x) {
        if (detectmob()) {
            m1m.style.display = "inherit";
        } else {
            m1.style.display = "inherit";
        }
        mainImage.style.display = "none";
        mainText.style.display = "none";

        m2.style.display = "inherit";
        m3.style.display = "inherit";

        m1Sub.style.display = "none";
        m2Sub.style.display = "none";
        m3Sub.style.display = "none";
    } else {
        if (!detectmob()) {
            mainImage.style.display = "inherit";
            mainText.style.display = "inherit";
            m1Sub.style.display = "inherit";
        } else {
            m1m.style.display = "none";
            m1Sub.style.display = "none";
        }
        m1.style.display = "none";
        m2.style.display = "none";
        m3.style.display = "none";

        m2Sub.style.display = "inherit";
        m3Sub.style.display = "inherit";
    }
}

function menuClick(x) {
    var menutext = document.querySelector('#menu');
    var xbutton = document.querySelector('#xmenu');

    if (x) {
        menutext.style.display = "none";
        xbutton.style.display = "inherit";

    } else {
        menutext.style.display = "inherit";
        xbutton.style.display = "none";
    }
}

function detectmob() { 
    if( navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i)
    ){
        return true;
    }
    else {
        return false;
    }
}

function onOptionButtonChangeForLogin(event,method){
    $('.switching_form').css({display:'none'});

   switch(method){
    case 'card':
        $('.subform').css({display:'none'});
        $('#card_form').css({display:'inline-grid'});
        $('.check').css({background: 'none'});
        $('#cardradio').css({background: '#ffffff'});
    break;
    case 'venmo':
        $('.subform').css({display:'none'});
        $('#venmo_form').css({display:'inline-block'});
        $('.check').css({background: 'none'});
        $('#venmoradio').css({background: '#ffffff'});
    break;
    case 'paypal':
        $('.subform').css({display:'none'});
        $('#paypal_form').css({display:'inline-block'});
        $('.check').css({background: 'none'});
        $('#paypalradio').css({background: '#ffffff'});
    break;
   }
}