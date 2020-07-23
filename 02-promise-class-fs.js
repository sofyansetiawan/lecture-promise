const fs = require("fs");

let namaFile = "data.json";
let namaFile2 = "data2.json";


function bacaFile(namaFile){
    return new Promise((resolve, reject) => {
        fs.readFile(namaFile, "utf-8", (err, data) => {
            if(err){
                reject(err.message);
            }
            else{
                resolve(data);
            }
        });
    });
}

let data1 = [];

bacaFile(namaFile)
    .then((data) => {
        data1 = data;
        return bacaFile(namaFile2);
    })
    .then((data2) => {
        console.log(data1);
        console.log(data2);
    })
    .catch((err) => {
        console.log(err);
    })