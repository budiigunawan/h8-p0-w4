function changeMe(arr) {

    if (arr.length == 0) {
        console.log('""');
    }
    
    else {
    ///untuk tiap baris
    for (var i = 0; i < arr.length; i++) {
        console.log(`${i+1}. ${arr[i][0]} ${arr[i][1]}:`);
        var obj = {};

        /// untuk isian objek
        for (var j = 0; j <= 3; j++) {
            if (j == 0) {
                obj.firstName = arr[i][j];
            }
            else if (j == 1) {
                obj.lastName = arr[i][j];
            }
            else if (j == 2) {
                obj.gender = arr[i][j];
            }
            else {
                if (typeof arr[i][j] === 'number') {
                    obj.age = 2020 - arr[i][j]
                }
                else {
                    obj.age = 'Invalid Birth Year'
                }
            }
        }

        console.log(obj);
    }
    }
}
  
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 38 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  changeMe([]); // ""