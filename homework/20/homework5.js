//5.Գրել ծրագիր որ կկարդա Homework5 պապկայի ֆայլերը,  կստեղծի newDir պապկա և այնտեղ կտեղափոխի այն
// ֆայլերը իրենց պարունակություններով որոնք 1kB մեծ են :

const {readdir, access, stat, mkdir, rename} = require('fs');

access('./newDir', e => {
    if(!e){
        mkdir('./newDir', e =>{
            if(e) console.log(e.message);
        });
    }
});

readdir('./Homework5', (e, files) => {
    files.forEach( file => {
        stat( './Homework5/' + file, (e, stats) =>{
            if(!e){
                if( stats.size > 1024 ){
                    rename( './Homework5/' + file, './newDir/' + file, e => {
                        if(e) console.log(e.message);
                    });
                }
            } else {
                console.log(e.message);
            }
        })
    })

})