// 5.Գրել ծրագիր , որը կկարդա homeworks.txt պարունակությունը, 5 պահանջները regexp տեղադրել p թեգերի մեջ և ուղարկել 
// բրաուրզեր երբ հացում գա server  նաև բրաուզեր ուղարկել script կոդ որը այս 5 p թեգեր մեկ վաjրկայն պարբերությամբ 
// կսկսեն հայտնվել 1-5 հաջորդականությամբ:

const http = require('http');
const {readFileSync} = require('fs');

http.createServer( (req, res) => {

    let text = readFileSync('./homeworks.txt', {encoding:'utf8'});
    let html = text.split('\n\r').map( row => '<p hidden>' + row + '</p>' ).join('\n');

    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.write('<!doctype html><html><body><div id="homeworks">' + html + '</div></body></html>');
    res.end(script());

}).listen(8007);

function script(){
    return `<script>
                let elem = 0; 
                let interval = window.setInterval(() => {
                    let homeworks = document.getElementById('homeworks');
                    let elements = homeworks.children;
                    if( elem >= elements.length ){
                        window.clearInterval(interval);
                    } else {
                        elements[elem].hidden = false;
                        elem++;
                    }
                }, 1000);
            </script>`;
}