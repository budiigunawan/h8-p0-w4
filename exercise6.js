function digitPerkalianMinimum(angka) {
    var faktor = [];
    
    for (var i = 1; i <= angka; i++) {
        var cek = false;
        
        for (var j = 0; j < faktor.length; j++) {
            if (i == faktor[j][1]) {
                cek = true;
            }
        }

        if (!cek) {
            if (angka % i == 0) {
                faktor[j] = [];
                faktor[j].push(String(i), String(angka/i))
            }
        }
    }

    var hasil = 0;

    for (var a = 0; a < faktor.length; a++) {
        var temp = 0;
        for (var b = 0; b < faktor[a].length; b++) {
            temp += faktor[a][b].length;
        }

        if (hasil == 0 || temp < hasil) {
            hasil = temp;
        }
    }

    return hasil;
}
  
  // TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2