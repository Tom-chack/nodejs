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