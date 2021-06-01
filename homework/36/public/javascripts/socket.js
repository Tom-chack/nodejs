

if( location.pathname === '/auth/account' ){

    let cookie = new Cookie();

    const startChat = document.querySelector('#startChat');
    const endChat = document.querySelector('#endChat');
    const messageForm = document.querySelector('#messageForm');
    const params = new URLSearchParams(location.search);

    window.socket;

    if( params.get('room') ){
        startChat.innerText = 'General';
        const room = params.get('room') || 'general';
        socket = io({
            transport: ["websocket", "polling"],
            autoConnect: true, //connects automatically
            query: 'room=' + room,
            auth: { token: cookie.get('x-access') }
        }); 
        startChat.addEventListener('click', (e) => {
            window.location.assign('/auth/account/?room=general');
        });
    } else {
        endChat.hidden = true;
        messageForm.hidden = true;
        socket = io({
            transport: ["websocket", "polling"],
            autoConnect: false,  //wairs for socket.connect();
            query: 'room=general'
        }); 
        startChat.addEventListener('click', (e) => {
            socket.auth = { token: cookie.get('x-access') };
            socket.connect();
            startChat.innerText = 'General';
            endChat.hidden = false;
            messageForm.hidden = false;
        });
    }
    
    const formText = document.querySelector('#_form textarea');
    const formButton = document.querySelector('#_form button');
    const onlineUsers = document.querySelector('#online');
    const chatbox = document.querySelector('#chatbox');
    
    formButton.addEventListener('click', (e) => {
        if(formText.value){
            socket.emit('new message', formText.value);
            formText.value = '';
        }
    });
    
    // Messaging ...........................................
    socket.on('new message', (data) =>{
        if( data.text ){
    
            let noMessages = document.querySelector('#noMessages');
            if( noMessages ) noMessages.remove();
            
            let message = `
                <div class="_message border-bottom-1 mb-2 p-1" data-id="${data.userid}" style="background-color: #fff;">
                    <span class="meta"><small><b>${data.username}:</b> ${data.date}</small> | <small><b>room: ${data.room}</b></small></span>
                    <span class="text-secondary d-block border-top mt-1 pt-1"> &gt; ${data.text}</span>
                </div>`;
                
            chatbox.insertAdjacentHTML('beforeend', message);
            chatbox.scrollTo(0, chatbox.scrollHeight);
        }
    });
    
    // Online user status ...................................
    socket.on('new online', (users) =>{
        if( users.length > 0 ){
            let onlineUserHTML = '';
            let noUsers = document.querySelector('#noUsers');
            if(noUsers) noUsers.remove();
            for( let user of users){
                onlineUserHTML += `<div data-id="${user._id}">User: ${user.username}</div>`;
            }
            onlineUsers.innerHTML = onlineUserHTML;
        }
    });

}



