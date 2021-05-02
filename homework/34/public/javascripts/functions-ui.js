//Global variables
_main = document.getElementById('main');

function viewLogin( args = {message:''} ){
    let view = `
    <form id="formLogin" class="w-75 float-right">
        <h3 class="text-right">Login</h3>
        <p>${args.message}</p>
        <hr><br>
        <div class="form-group">
            <label for="username">Email:</label>
            <input type="text" class="form-control" id="email" placeholder="Enter email" name="email">
        </div>
        <div class="form-group">
            <label for="pwd">Password:</label>
            <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="password">
        </div>
        <div class="form-group form-check d-none">
            <label class="form-check-label">
                <input class="form-check-input" type="checkbox" name="remember"> Remember me
            </label>
        </div>
        <button type="submit" class="btn btn-primary w-100">Login</button>
    </form>
    <div style="clear:both"></div>`;
    
    _main.innerHTML = view;
    submitLogin();
}

function viewRegister( args = {message:''} ){
    let view = `
            <form id="formRegister" class="w-75 float-right">
                <h3 class="text-right">Register</h3>
                <p>${args.message}</p>
                <hr><br>
                <div class="form-group">
                    <label for="username">Username:</label>
                    <input type="text" class="form-control" id="username" placeholder="Enter username" name="username">
                </div>
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="email" class="form-control" id="email" placeholder="Enter email" name="email">
                </div>
                <div class="form-group">
                    <label for="pwd">Password:</label>
                    <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="password">
                </div>
                <div class="form-group form-check d-none">
                    <label class="form-check-label">
                        <input class="form-check-input" type="checkbox" name="remember"> Remember me
                    </label>
                </div>
                <button type="submit" class="btn btn-primary w-100">Register</button>
            </form>
            <div style="clear:both"></div>`;

    _main.innerHTML = view;
    submitRegsiter();
}

function viewProfile(){
    let view = '';
    fetch('/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': "Bearer " + localStorage.getItem(`_tocken`)
        }
    })
    .then( res => res.json() )
    .then( data => {
        const {user} = data;
        if( user.hasOwnProperty('username') ){
            if( !location.href.includes( '/profile/' + user._id ) ){
                location.href = '/profile/' + user._id;
            }
        } else {
            view = '<h3>Profile is not found</h3>';
            _main.innerHTML = view;
        }
    })
    .catch( error => {
        alert(error.message);
    });

    
}

function viewEditButtons(){
    let view = `
        <label for="fieldPhoto">Change Photo: </label> 
        <input type="file" name="photo" id="fieldPhoto" class="border" style="width:200px;"/>
        <button class="btn btn-outline-secondary btn-sm" style="padding:2px 10px;vertical-align: top;">Save</button>
        `;
    let editPhoto = document.querySelector('#profileInfo ._edit');
    editPhoto.innerHTML = view;
}