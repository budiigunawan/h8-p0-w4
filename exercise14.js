function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    var hasil = [];

    if (arrPenumpang.length == 0) {
         return hasil;
    }
    else {
        ///looping untuk index luar arrPenumpang
        for (var i = 0; i < arrPenumpang.length; i++) {
            //membuat objek baru
            var obj = {
                penumpang : arrPenumpang[i][0],
                naikDari : arrPenumpang[i][1],
                tujuan : arrPenumpang[i][2],
                bayar : 0
            }

            //mencari tarif
            var awal = 0;
            var tujuan = 0;

            for (var a = 0; a < rute.length; a++) {
                if (arrPenumpang[i][1] == rute[a]) {
                    awal = a;
                }
            }

            for (var t = 0; t < rute.length; t++) {
                if (arrPenumpang[i][2] == rute[t]) {
                    tujuan = t;
                }
            }

            var tarif = (tujuan - awal) * 2000;
            obj.bayar = tarif;

            ///push obj ke array hasil
            hasil.push(obj);
        }
        return hasil;
    }
}
  
  //TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
console.log(naikAngkot([])); //[]