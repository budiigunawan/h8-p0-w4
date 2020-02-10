function fpb(angka1, angka2) {
    var hasiltemp = 0;
    var hasilAkhir = 0;

    for (let i = 1; i < angka1; i++) {
        if (angka1 % i == 0) {
            hasiltemp = i;
        }

        if (angka2 % hasiltemp == 0) {
            hasilAkhir = hasiltemp;
        }
    }

    return hasilAkhir;
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1