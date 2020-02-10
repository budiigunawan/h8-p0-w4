function cariMedian(arr) {
    var indeks = Math.floor(arr.length/2);

    //sort arr
    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[i] < arr[j]) {
                var tukar = arr[i];
                arr[i] = arr[j];
                arr[j] = tukar;
            }
        }
    }
    
    if (arr.length % 2 == 1) {
        return arr[indeks];
    }    
    else {
        return (arr[indeks-1] + arr[indeks])/2;
    }
}
  
// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 6
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5