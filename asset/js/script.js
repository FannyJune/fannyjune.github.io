function onOptionButtonChangeForLogin(event,method){
    $('.switching_form').css({display:'none'});

   switch(method){
    case 'card':
        console.log('card');
        $('#card_form').css({display:'inline-block'});
    break;
    case 'venmo':
        console.log('venmo');
        $('#venmo_form').css({display:'inline-block'});
    break;
    case 'paypal':
        console.log('PAYPAL');
        $('#paypal_form').css({display:'inline-block'});
    break;
   }




}