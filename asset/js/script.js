function onOptionButtonChangeForLogin(event,method){
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




}