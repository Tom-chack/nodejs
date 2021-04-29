
function submitRegsiter(){

    formRegister.addEventListener('submit', (event)=>{

        let form = event.target;
        event.preventDefault();
        let register = {
            username: form.elements['username'].value,
            email: form.elements['email'].value,
            password: form.elements['password'].value
        }
        fetch('/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(register)
        })
        .then( res => res.json() )
        .then( res => {
            let {error, success} = res;
            if( error ){
                viewRegister({message: error});
            } else {
                viewLogin({message:"You've been successfully registered, please login."});
            }
        }).catch(e => {
            viewRegister({message: e.message});
        })

    });

}

function submitLogin(){

    formLogin.addEventListener('submit', (event)=>{

        let form = event.target;
        event.preventDefault();
        let login = {
            email: btoa(form.elements['email'].value),
            password: btoa(form.elements['password'].value)
        }
        fetch('/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(login)
        });

    });
}