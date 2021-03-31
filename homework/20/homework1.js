//1. Գրել ծրագիր որը կստեղծի ֆայլ Ձեր համակարգչի user անունով
// և այդ ֆայլում գրել համակարգչի userinfo-ն:

const {userInfo} = require('os');

const { accessSync,
        mkdirSync,
        access,
        mkdir,
        constants,
        writeFile,
        writeFileSync,
        open } = require('fs');

let dir = './files';
let filepath = dir + '/' + userInfo().username + '.txt';
let content = JSON.stringify(userInfo());

// Tip!
// fs.exists() is deprecated!!! Use fs.access(), fs.stat() or fs.accessSync(), fs.statSync() instead.
// https://nodejs.org/api/fs.html#fs_fs_exists_path_callback

//#######################################################
// Synchronous -----------------------------------------

try {
    accessSync(dir);
} catch (e){
    mkdirSync(dir);
}

try{
    writeFileSync(filepath, content);
} catch (e) {
    console.log(e)
}


// #####################################################
// Asynchronous ----------------------------------------

access(dir, constants.F_OK | constants.W_OK, (err) => {
    if (err) {

        // checks if the ./files/ directory doesn't exist, if so, creates it. Error codes: https://nodejs.org/api/errors.html#errors_common_system_errors
        console.log( err.code === 'ENOENT' ? dir + ' directory does not exist' : dir + ' directory is read-only');

        mkdir( dir, (e) =>{
           if(!e){
               console.log( dir + ' directory is created!');
               writeFile(filepath, content, (e) => {
                   if(e) {
                       console.log(e.message);
                   } else {
                       console.log( filepath + ' file is created!');
                   }
               });
           }  else{
               console.log(e.message);
           }
        });
    }
    else {

        console.log(dir + ' directory exists (F_OK), and it is writable (W_OK)');

        access(filepath, (e) => {
            if(e){
                // checks if the file doesn't exist in ./files/ folder, if so, creates it.
                if(e.code === 'ENOENT'){
                    writeFile(filepath, content, (e) => {
                        if(e) {
                            console.log(e.message);
                        } else {
                            console.log(filepath + ' file is crated');
                        }
                    });
                } else{
                    console.log(e.message)
                }
            } else {
                console.log(filepath + ' file was already crated');
            }
        });
    }
});


/////////////////////////////////////////////////////////////////
// The recommended way to check file existence and accessibility
// --------------------------------------------------------------
// Do not use fs.access() to check for the accessibility of a file before calling fs.open(), fs.readFile() or fs.writeFile().
// Doing so introduces a race condition, since other processes may change the file's state between the two calls.
// Instead, user code should open/read/write the file directly and handle the error raised if the file is not accessible.

/*
open( filepath, 'wx', (err, fd) => {
    if(!err){
        writeFile(fd, content, (e) => {
            if(e) console.log(e);
        });
    } else {
        console.log('Error from open() method:' + err.message); //EEXIST: file already exists
    }
});
*/