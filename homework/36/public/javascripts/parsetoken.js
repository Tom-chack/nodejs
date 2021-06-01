// Parses token and return any part you want
// Parts:  header, payload, signature
// Example:  let currentUserid = parseToken( cookie.get('x-access'), 'payload', 'userid' )
function parseToken( token, param = 'payload', payloadParam = '' ){
    try {
        let part = 0;
        if( param === 'header' ){
            part = 0;
        } else if( param === 'payload' ){
            part = 1;
        } else {
            part = 2;
        }
        let parsedToken = JSON.parse(atob(token.split('.')[part]));
        if( param === 'payload' && payloadParam in parsedToken ){
            return parsedToken[ payloadParam ];
        }
        return parsedToken;
    } catch (e) {
        return null;
    }
}