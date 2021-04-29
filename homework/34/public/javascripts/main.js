
window.onload = function() {

    

    if( navLogin ){
        navLogin.onclick = function(event){
            event.preventDefault();
            viewLogin()
        }
    }

    if( navRegister ){
        navRegister.onclick = function(event){
            event.preventDefault();
            viewRegister();

        }
    }


}