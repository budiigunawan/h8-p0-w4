function highestScore (students) {
    var hasil = {};

    if (students.length == 0) {
        return hasil;
    }
    else {
        ///membuat objek
        for (var i = 0; i < students.length; i++) {
            hasil[students[i].class] = {
                name : students[i].name,
                score : students[i].score
            };
        }

        ///mencari nilai tertinggi
        for (var j = 0; j < students.length; j++) {
            if (students[j].score > hasil[students[j].class].score) {
                hasil[students[j].class].score = students[j].score;
                hasil[students[j].class].name = students[j].name;
            }
        }

        return hasil;
    }
}

// TEST CASE
console.log(highestScore([
    {
      name: 'Dimitri',
      score: 90,
      class: 'foxes'
    },
    {
      name: 'Alexei',
      score: 85,
      class: 'wolves'
    },
    {
      name: 'Sergei',
      score: 74,
      class: 'foxes'
    },
    {
      name: 'Anastasia',
      score: 78,
      class: 'wolves'
    }
  ]));
// {
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }

console.log(highestScore([
    {
      name: 'Alexander',
      score: 100,
      class: 'foxes'
    },
    {
      name: 'Alisa',
      score: 76,
      class: 'wolves'
    },
    {
      name: 'Vladimir',
      score: 92,
      class: 'foxes'
    },
    {
      name: 'Albert',
      score: 71,
      class: 'wolves'
    },
    {
      name: 'Viktor',
      score: 80,
      class: 'tigers'
    }
  ]));
  
  // {
  //   foxes: { name: 'Alexander', score: 100 },
  //   wolves: { name: 'Alisa', score: 76 },
  //   tigers: { name: 'Viktor', score: 80 }
  // }

console.log(highestScore([])); //{}