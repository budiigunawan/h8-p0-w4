function urutkanAbjad(str) {
    ///masukkin ke arr
    var arr = [];

    for (var i = 0; i < str.length; i++) {
        arr.push(str[i]);
    }

    ///sort ascending arr
    for (var a = 1; a < arr.length; a++) {
        for (var b = 0; b < a; b++) {
            if (arr[a] < arr[b]) {
                var temp = arr[a];
                arr[a] = arr[b];
                arr[b] = temp;
            }
        }
    }

    ///masukkin ke hasil
    var hasil = '';
    for (var j = 0; j < arr.length; j++) {
        hasil += arr[j];
    }
    
    return hasil;
}
  
  // TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'
