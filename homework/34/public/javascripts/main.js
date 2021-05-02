
window.onload = function() {

    if( localStorage.getItem(`_tocken`) ){
        viewProfile()
    } else {
        viewLogin();
    }

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

    if( ~location.href.indexOf('/profile') ){
        let userId = parseToken('userid');
        let currentId = location.href.split('/').pop();
        if( userId == currentId ){
            viewEditButtons()
        }
    }

}