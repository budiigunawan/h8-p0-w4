function checkAB(num) {
    var posA = [];
    var posB = [];
    
    for (var i = 0; i < num.length; i++) {
        if (num[i] === 'a') {
            posA.push(i);
        }
        else if (num[i] === 'b') {
            posB.push(i);
        }
    }

    for (var a = 0; a < posA.length; a++) {
        for (var b = 0; b < posB.length; b++) {
            if (posA[a]-posB[b] == 4 || posA[a]-posB[b] == -4) {
                return true;
            }
        }
    }

    return false;
}
  
  // TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false