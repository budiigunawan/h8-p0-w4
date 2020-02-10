function tukarBesarKecil(kalimat) {
    var hasil = '';
    var besar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var kecil = 'abcdefghijklmnopqrstuvwxyz';
    

    for (let i = 0; i < kalimat.length; i++) {
      var alfabet = false;

      for (let j = 0; j < besar.length; j++) {
        if (kalimat[i] === besar[j]) {
          hasil += kecil[j];
          alfabet = true;
        }
      }

      for (let k = 0; k < kecil.length; k++) {
        if (kalimat[i] === kecil[k]) {
          hasil += besar[k];
          alfabet = true;
        }
      }

      if (!alfabet) {
        hasil += kalimat[i];
      }
    }

    return hasil;
}
  
  // TEST CASES
  console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
  console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
  console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
  console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
  console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"