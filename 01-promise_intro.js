let tugas = "ambil laundry";

// * Promise sederhana (object instance tanpa parameter)

// * DECLARE PROMISE
const janjiSofyan = new Promise((resolve, reject) => {
    if(tugas){
        resolve("Saya menjalankan janji - result"); //  1 param
    }
    else{
        reject("Saya melanggar janji - err"); // 1 param
    }
});

// * HANDLE PROMISE
janjiSofyan
    .then((data) => {
        console.log(data);
        console.log({ data });
    }).catch((err) => {
        console.log(err);
        console.log({ err });
    });

// * PROMISE dari function (promise yang punya parameter)

const janjiSofyan2 = function (tugas){
    return new Promise((resolve, reject) => {
        if(tugas){
            resolve("Saya menjalankan janji - result");
        }
        else{
            reject("Saya melanggar janji - err");
        }
    });
}

janjiSofyan2("Beli Buah")
    .then((data) => {
        console.log(data);
        console.log({ data });
    }).catch((err) => {
        console.log(err);
        console.log({ err });
    });

// * PROMISE tanpa param (tidak pasti / delay)

const gatcha = new Promise((success, failed) => {
    let cek = Math.ceil(Math.random() * 5);
    console.log("Loading...");
    setTimeout(()=>{
        if(cek === 1){
            failed("Maaf anda belum beruntung");
        }
        else if(cek === 2){
            failed("Maaf coba lagi..");
        }
        else if(cek === 3){
            success("Dapat hadiah blender..");
        }
        else if(cek === 4){
            success("Dapat hadiah sepeda..");
        }
        else if(cek === 5){
            success("Dapat hadiah motor..");
        }
        else{
            failed("Maaf anda belum beruntung");
        }
    }, 2000);
});
    
gatcha
    .then((hasilSuccess)=> {
        console.log(hasilSuccess, "===then");
    }).catch((hasilFailed)=> {
        console.log(hasilFailed, "===catch");
    })

// * PROMISE CHAINING

const todoSofyan = function (todo){
    return new Promise((resolve, reject) => {
        if(todo){
            resolve(todo);
        }
        else{
            reject("no todo");
        }
    });
}

// let angka = 20;

todoSofyan("beli jus")
    .then((data) => {
        console.log(data);
        // kondisi
        return todoSofyan(`${data+angka}, beli baju`);
    })
    .then((data) => { // beli jus, beli baju
        // loop array
        console.log(data);
        return todoSofyan(`${data}, beli buah`);
    })
    .then((data) => { // beli jus, beli baju, beli buah
        console.log(data);
        return todoSofyan(`${data}, beli hp`);
    })
    .then((data) => {
        console.log(data);
        // return todoSofyan(data);
    })
    .catch((err) => {
        console.log(err);
    });

// * PROMISE HELL ( DIHINDARI )

todoSofyan("beli jus")
    .then((data) => {
        console.log(data);
        todoSofyan(`${data}, beli baju`)
            .then((data) => {
                console.log(data);
                todoSofyan(`${data}, beli buah`)
                    .then((data) => {
                        console.log(data);
                        todoSofyan(`${data}, beli buah`)
                        .then((data) => {
                            console.log(data);
                            todoSofyan(`${data}, beli hp`);
                        })
                        .catch((err) => {
                            console.log(err);
                        });
                    })
            })   
    })
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    });
