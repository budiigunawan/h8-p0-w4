function cariModus(arr) {
    var hitung = [];
    
    for (var i = 0; i < arr.length; i++) {
        var cek = false;

        for (var h = 0; h < hitung.length; h++) {
            if (arr[i] === hitung[h][0]) {
                hitung[h][1]++
                cek = true;
            }
        }

        if (!cek) {
            hitung[h] = [];
            hitung[h].push(arr[i],1);
        }
    }

    ///sort///
    for (var a = 1; a < hitung.length; a++) {
        for (var b = 0; b < a; b++) {
            if (hitung[a][1] > hitung[b][1]) {
                var tukar = hitung[a];
                hitung[a] = hitung[b];
                hitung[b] = tukar;
            }
        }
    }

    if (hitung[0][1] == 1 || hitung[0][1] === arr.length) {
        return -1
    }
    else {
        return hitung[0][0];
    }
}
  
// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1