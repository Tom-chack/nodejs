
window.onload = () =>{

    let cookie = new Cookie();

    let fieldPhoto = document.getElementById('fieldPhoto');
    let userPhoto = document.getElementById('userPhoto');

    if( fieldPhoto && userPhoto){
        fieldPhoto.addEventListener('change', (e)=>{
            let src = URL.createObjectURL(fieldPhoto.files[0]);
            userPhoto.src = src;
        });
    
        let savePhoto = document.getElementById('savePhoto');
        savePhoto.addEventListener('click', (e) => {
            let form = new FormData();
            form.append('photo', fieldPhoto.files[0]);
            fetch('/auth/update', {
                method: 'POST',
                headers: {
                    'Authorization': "Bearer " + cookie.get('x-access')
                },
                body: form
            })
            .then( res => res.json())
            .then( data => {
                userPhoto.src = data.photo;
                fieldPhoto.value = '';
            })
            .catch( e => {
                alert(e.message);
            });

        });
    
    }


    const loginForm = document.getElementById('loginForm');

    if( loginForm ){
        loginForm.addEventListener('submit', (e)=>{
            e.preventDefault();
            let formData = {
                email: loginForm.elements['email'].value,
                password: loginForm.elements['password'].value
            }
            fetch('/auth/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
            .then( res => res.json() )
            .then( tokens => {
                if( tokens.access === cookie.get('x-access') ){
                    window.location.assign('/auth/account');
                } else {
                    alert('Cookie error. Authorization failed.');
                }
            })
            .catch(e =>{
                alert(e.message);
            })
        })
    }
    
    const regForm = document.getElementById('regForm');

    if( regForm ){
        regForm.addEventListener('submit', (e)=>{

            e.preventDefault();
    
            let formData = {
                username: regForm.elements['username'].value,
                email: regForm.elements['email'].value,
                password: regForm.elements['password'].value,
                photo: 'default.png'
            }
    
            console.log(regForm);
        
        
            fetch('/auth/create', {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify(formData)
            })
            .then( res => res.json() )
            .then( data => {
                window.location.assign('/');
            })
            .catch(e => {
                alert(e);
            })
        })
    }

   


    


}