const uname = document.querySelector('.uname');
const email = document.querySelector('.email');
const phone = document.querySelector('.pn');
const pass1 = document.querySelector('.pass1');
const pass2 = document.querySelector('.pass2');
const err = document.querySelector('.err');

function check(){
//Getting the values
  if(true){
      if(uname.value ===''){
          err.innerHTML = "Please Fill username"
          uname.focus();
          return false;
      }
      if(email.value ===''){
        err.innerHTML = "Please Fill email"
        email.focus();
        return false;
    }
    if(phone.value ==='' ){
        err.innerHTML = "Invalid Phone Number"
        phone.focus();
        return false;
    }
    if(phone.value.length<10 ){
        err.innerHTML = "Invalid Phone Number"
        phone.focus();
        return false;
    }
    if(pass1.value===''){
        err.innerHTML = "Please Fill Password"
        pass1.focus();
        return false;
    }
    if(pass2.value===''){
        err.innerHTML = "Please Fill Password"
        pass2.focus();
        return false;
    }
    if(pass1.value != pass2.value){
        err.innerHTML = "Password Not matched"
        pass1.focus();
        return false;
    }
  }
  else{
  //
  }
}
