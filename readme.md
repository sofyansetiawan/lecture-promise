## LECTURE PROMISE

- Promise adalah instance object dari class Promise.
- Recap Callback
- **Promise** --`Janji` (Asyncromous)
  - Cek di MDN
  - Condition untuk Promise (`Diuji`)
    - Jika terpenuhi dan Jika tidak terpenuhi
  - State
    - Analoginya: Pesan di restoran atau gofood
    - **pending** - Merupakan kondisi awal, ketika kita Berjanji, belum terpenuhi / ditolak.
    - **fulfilled** - Merupakan kondisi dimana Promise sudah terpenuhi
    - **rejected** - Merupakan kondisi dimana Promise gagal terpenuhi.
  - Callback vs Promise
    - Menempatkan callback pada object Promise
- Cara membuat Promise
  - Deklarasi Promise (**resolve**, **reject**)
    - resolve() -- Promise sudah terpenuhi (berhasil / terpenuhi)
    - reject() -- Promise tidak terpenuhi (gagal / ditolak)
      - resolve dan reject ini adalah *CALLBACK* !
      - resolve dan reject ini hanya menerima 1 parameter saja
      - Dijalankan hanya salah 1. Jika resolve maka tidak reject dan sebaliknya
      - Ketika tidak menemukan resolve atau reject == pending
    - Promise dengan tanpa parameter
    - Promise dengan parameter
      - return promise
  - Cara pakai / handle Promise
    - Ketika tidak di handle maka error `UnhandledPromiseRejectionWarning`
    - Chaining **then()** -- **catch()**
      - then -- menangkap resolve
      - catch -- menangkap reject
      - then bisa multiple chaining, catch hanya butuh 1 di akhir
    - Penulisan -- sequential / synchronous, proses didalamnya -- asynchronous
      - Tidak menjorok ke dalam seperti pyramid of doom
  - **Promise Chaining**
    - Sama-sama me-return new promise dan akan di-passing ke parameter selanjutnya
    - Jika tidak di return promise / sebuah data yang di return maka **undefined** di then() berikutnya
  - **Promise Hell** (avoid it)
  - Mengubah Callback menjadi Promise
    - Promise readFile (**fs.readFilePromise**) Cek di Dokumentasi
      - Membaca 3 file JSON
    - Promise **pool.query** Cek di Dokumentasi
      - Bulk insert dengan promise

