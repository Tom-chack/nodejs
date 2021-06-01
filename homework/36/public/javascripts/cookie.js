// Name: Cookie
// Description: Cookie class makes working with cookies easier.
// Author: Artyom Chakhoyan
// License: MIT
// Version: 1.0.0

class Cookie {

    enabled = false;

    constructor(){
        this.enabled = this.check();
        console.log( ( this.enabled ? 'Cookies are enabled' : 'Cookies are disabled') );
        this.delete('cTest');
    }

    check(){
        this.set('cTest', '1');
        return navigator.cookieEnabled && this.get('cTest');
    }

    get(name) {
        let regexp = new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)");
        let matches = document.cookie.match( regexp );
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }

    set(name, value, options = {}) {
        let valueSameSite = ( location.protocol !== 'https:' ) ? 'lax' : 'None';
        options = { path: '/', SameSite: valueSameSite };
        if (options.expires && options.expires instanceof Date) {
            options.expires = options.expires.toUTCString();
        }
        let cookieItem = encodeURIComponent(name) + "=" + encodeURIComponent(value);
        for (let key in options) {
            cookieItem += "; " + key;
            let value = options[key];
            if ( value !== true ) cookieItem += "=" + value;
        }
        document.cookie = cookieItem;
    }

    delete(name) {
        this.set(name, "", {'max-age': -1} );
    }

}