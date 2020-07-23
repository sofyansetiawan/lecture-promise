let data1 = JSON.parse(/*fs.readFile*/);

const { Pool } = require("pg");

const pool = new Pool({ /* config */})

arrData = []

data.forEach(element => {
    arrData.push(`('${element.name}', '${element.name}')`);
});

// [
//     `('${element.name}', '${element.name}')`,
//     `('${element.name}', '${element.name}')`,
//     `('${element.name}', '${element.name}')`
// ]

const insert = `
    INSERT INTO "namatable" ("nama", "alamat") 
    VALUES ${arrData.join(",")};
`


pool.query(insert1)
    .then(()=>{
        console.log("Success Add data1");
        return pool.query(insert2)
    })
    .then(()=>{
        console.log("Success Add data2");
        return pool.query(insert2);
    })
    .then(()=>{
        console.log("Success Add data3");
        pool.end();
    })

// * MODEL - CONTROLLER => CALLBACK to Promise?? check DECLARE & HANDLE Promise