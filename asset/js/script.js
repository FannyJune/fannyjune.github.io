/* function onPaymentChange(event,method) {
    $('.switching_form').css({display:'none'});
       switch(method){
            case 'visa':
                console.log('visa');
                break;
            case 'venmo':
                console.log('venmo');
                $('#venmo_form').css({display:'inline-block'});
                break;
            case 'paypal':
                console.log('PAYPAL');
                break;
       }
    } */


function menuClickIndex(x) {

    menuClick(x);
    var mainImage = document.querySelector('.main-image');
    var mainText = document.querySelector('.main-text');

    var m1 = document.querySelector('#menu1');
    var m2 = document.querySelector('#menu2');
    var m3 = document.querySelector('#menu3');

    var m1Sub = document.querySelector('#menu1_sub');
    var m2Sub = document.querySelector('#menu2_sub');
    var m3Sub = document.querySelector('#menu3_sub');

    if (x) {
        mainImage.style.display = "none";
        mainText.style.display = "none";

        m1.style.display = "inherit";
        m2.style.display = "inherit";
        m3.style.display = "inherit";

        m1Sub.style.display = "none";
        m2Sub.style.display = "none";
        m3Sub.style.display = "none";
    } else {
        mainImage.style.display = "inherit";
        mainText.style.display = "inherit";

        m1.style.display = "none";
        m2.style.display = "none";
        m3.style.display = "none";

        m1Sub.style.display = "inherit";
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
