

/*
_writableState: WritableState {
    objectMode: false,
    highWaterMark: 16384,
    finalCalled: false,
    needDrain: false,
    ending: false,
    ended: false,
    finished: false,
    destroyed: false,
    decodeStrings: true,
    defaultEncoding: 'utf8',
    length: 0,
    writing: false,
    corked: 0,
    sync: true,
    bufferProcessing: false,
    onwrite: [Function: bound onwrite],
    writecb: null,
    writelen: 0,
    afterWriteTickInfo: null,
    buffered: [],
    bufferedIndex: 0,
    allBuffers: true,
    allNoop: true,
    pendingcb: 0,
    prefinished: false,
    errorEmitted: false,
    emitClose: true,
    autoDestroy: true,
    errored: null,
    closed: false
}
*/

const util = require('util');
const {Writable, Readable} = require('stream');

const outStream = new Writable({
    //objectMode: true,
    highWaterMark: 1024,
    write(chunk, encoding, callback){
        console.log( chunk.toString() + ' ' + callback );
        callback();
    }
});
//process.stdin.pipe(outStream);


const inStream = new Readable({
    highWaterMark: 1024,
    read(size){
        console.log(size);
    }
});

inStream.push('ASDFG');
inStream.push('\n');
inStream.push('ZXCVB');
inStream.push(null);

inStream.pipe(process.stdout);

console.log( util.inspect(outStream, { compact: false, depth: 5, breakLength: 80 }, null, true ) );
console.log( util.inspect(inStream, { compact: false, depth: 5, breakLength: 80 }, null, true ) );