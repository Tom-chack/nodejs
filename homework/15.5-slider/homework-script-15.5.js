
// HTML file: index-15.5.html

// 5.Ունենք HTML,CSS,Bootstrap,JavaScript, jQuery, Node.JS զանգված:
// Գրել ծրագիր որով այցելու կարող է թերթել այս ցանկի բոլոր անդամներ երբ սեղմի առաջ կամ հետ գնալու կոճակներ,
// կամ ծրագիրը ավտոմատ 3 վարկյան մեկ փոխի:
// Էջը բացելիս պետք է երևա զանգված առաջին անդամը, երբ առաջ գնալով հասնենք վերջին անդամին (Node.JS)
// դրանից հետո առաջ սեղմելիս երևա կրկին առաջին անդամը, իսկ երբ առաջին անդամից հետ ուզենք գնանք երևա
// զանգվածի վերջին անդամը (Նկ. Home5.jpg):

let items = ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'jQuery', 'Node.JS'];
show.innerText = items[0];

function slide( type = 'next', items = [] ){
    let move = 0;
    let index = +show.dataset.index;

    move = (type == 'next') ? index+1 : ( index === 0  ? items.length-1 : index-1 );

    if( items[move] && items[move].length ){
        show.innerText = items[move];
        show.dataset.index = move;
    } else {
        show.innerText = items[0];
        show.dataset.index = 0;
    }
}

prev.onclick = () => { slide('prev', items) }
next.onclick = () => { slide('next', items) }
setInterval(slide, 5000, 'next', items);