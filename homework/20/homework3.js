//3.Գրել ծրագիր, որը կկարդա homework3.txt ֆայլի պարունակությունը, տեքստից կհեռացնի
// ,-ները և կգրի replace.txt ֆայլում: Հեռացնել homework3.txt ֆայլը։

const {access, readFile, writeFile, unlink} = require('fs');

access('homework3.txt', (e)=>{
    if( !e ){
        readFile('homework3.txt', 'utf-8', (e, data)=>{
            if(!e){
               let text = data.toString().replace(/\,/g, '');
               writeFile('replace.txt', text, (e)=>{
                   if(e) {
                       console.log(e.message);
                   } else {
                       unlink('homework3.txt', (e)=>{
                           if(e) console.log(e.message);
                       });
                   }
               });
            }
        });
    } else {
        console.log(e.message);
    }
})
