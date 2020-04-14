const fs = require('fs');
const util = require('util');
const {Observable} = require('rxjs')
var a = 5;
var b = 6;
const contents = fs.readFileSync('./myfile.txt');
console.log(contents);
const asyncfile = util.promisify(fs.readFile);

(async function () {
    try {
        const filedata = await asyncfile('./myfile.txt');
        console.log(filedata)
        var res = await getNumber()
        getData().subscribe(res=>{
            console.log(res);
        })
        console.log(res)
        console.log(a);
        console.log(b)
    }catch(e){
        console.log(e.message)
    }
    
})()


function getNumber() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Seucc")
        }, 2000)
    })
}

function getData(){
    return new Observable(observer=>{
        setInterval(()=>{
            observer.next("100")
        },2000)
    })
}