function changeMe(arr) {
  // you can only write your code here!
  var thisYears= new Date().getFullYear()
  var num=1
  var person = {}

  for (var i =0; i < arr.length; i++){
    person.firstName = arr[i][0]
    person.lastName = arr[i][1]
    person.gender = arr[i][2]

    if (arr[i][3] > thisYears || !arr[i][3]){
      person.age = 'Invalid Birth Year'
    }
    else {
      person.age = thisYears - arr[i][3]
    }
    console.log(num + '. ' + person.firstName + ' ' + person.lastName)
    num++
    console.log(person)
  }
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""