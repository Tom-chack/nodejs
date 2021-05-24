
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
                viewLogin({message: "You've been successfully registered, please login."});
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
            email: form.elements['email'].value,
            password: form.elements['password'].value
        }
        fetch('/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(login)
        })
        .then( res => res.json() )
        .then( res => {
            let {error, tocken, user} = res;
            if( error ){
                viewLogin({message: error});
            } else {
                //Save tocken in localstorage
                tocken = tocken.split(' ')[1];
                localStorage.setItem('_tocken', tocken);
                window.location.href = '/profile/' + user._id;
            }
        }).catch(e => {
            viewLogin({message: e.message});
        })

    });
}

function updatePhoto(){
    
    let fieldPhoto = document.querySelector('#fieldPhoto');
    let userPhoto = document.querySelector('#userPhoto');
    fieldPhoto.addEventListener('change', (e) =>{
        let src = URL.createObjectURL(fieldPhoto.files[0]);
        userPhoto.src = src;
    });

    let savePhoto = document.querySelector('#savePhoto');
    savePhoto.addEventListener('click', (e)=>{
        let form = new FormData();
        form.append('photo', fieldPhoto.files[0]);

        fetch('/update', {
            method: 'POST',
            headers: {
                //'Content-Type': 'application/json', // no json for form submit
                'Authorization': "Bearer " + localStorage.getItem('_tocken')
            },
            body: form
        })
        .then( res => res.json() )
        .then( data => {
            userPhoto.src = data.photo;
        })
        .catch( error => {
            alert(error.message);
        });
    });
}