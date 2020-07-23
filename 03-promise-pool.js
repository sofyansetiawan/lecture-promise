let data1 = JSON.parse(/*fs.readFile*/);

const { Pool } = require("pg");

const pool = new Pool({ /* config */})

arrData = []

data1.forEach(element => {
    arrData.push(`('${element.name}', '${element.name}')`);
});

// * Output
// [
//     `('${element.name}', '${element.name}')`,
//     `('${element.name}', '${element.name}')`,
//     `('${element.name}', '${element.name}')`
// ]

const insert1 = `
    INSERT INTO "namatable" ("nama", "alamat") 
    VALUES ${arrData.join(",")};
`;

// * create insert2 and insert3

pool.query(insert1)
    .then((res) => {
        console.log("Success Add data1");
        return pool.query(insert2)
    })
    .then((res) => {
        console.log("Success Add data2");
        return pool.query(insert3);
    })
    .then((res) => {
        console.log("Success Add data3");
        pool.end();
    })
    .catch((e) => {
        console.log(e);
        pool.end();
    })

// * MODEL - CONTROLLER => CALLBACK to Promise?? check DECLARE & HANDLE Promise
