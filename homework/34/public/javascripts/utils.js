function parseToken( param = 'payload' ){
    let token = localStorage.getItem('_tocken');
    try {
        let part = 0;
        if( param == 'header' ){
            part = 0;
        } else if( param == 'userid' || param == 'payload'){
            part = 1;
        } else {
            part = 2;
        }
        let parsedToken = JSON.parse(atob(token.split('.')[part]));
        if( param == 'userid' ) {
            return parsedToken['sub'];
        }
        return parsedToken;
    } catch (e) {
        return null;
    }
}