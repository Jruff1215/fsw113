//CLO1: Javascript:

{let studentArray = Array(10)

console.log(studentArray.length)

//the result was 10

console.log(studentArray)


//the result was "[10 empty string]"*/
}

//CLO2: Javascript:

{let studentArray = Array.of(10)

console.log(studentArray.length)

//the result was 1

console.log(studentArray)

//the result was "[10]"

}

//CLO3: Javascript:

{let grades = [90, 98, 78, 99]

let studentGrades = Array.from(grades, g => g * 110);

console.log(studentGrades.length)
, 
// the result was 4

console.log(studentGrades)

//the result was [9900, 10780, 8580, 10890]
}

//CLO4: Javascript:

{let grades = [90, 98, 78, 99]

    let studentGrades = Array.from(grades, function(g){

        return g * this.percentageIncrement
    },{percentageIncrement:1.10});

    console.log(studentGrades)

    //the result was [ 99.00000000000001, 107.80000000000001, 85.80000000000001, 108.9 ]
}

//CLO5: Javascript:

{
  let grades = [90, 98, 78, 99]
  
  let studentGrades = Array.from(grades, g=>{
      return g * this.percentageIncrement
  }, {percentageIncrement:1.10});

  console.log(studentGrades)

  //the result was [NaN, NaN, NaN, NaN]
}

//CLO6: Javascript:

{
let grades = [90, 98, 78, 99]

let studentGrades = grades.find(v=> v==90)

console.log(studentGrades)

// the result was 90
}

//CLO7: Javascript:

{
    let grades = [90, 98, 78, 99]

let studentGrades = grades.find(v => v >= 90)

console.log(studentGrades)

//the result was 90
}

//CLO8: Javascript:

{
    let grades = [90, 98, 78, 99]

let studentGrades = grades.map(v => v * .090)

console.log(studentGrades)

/* the result was [8.1, 8.82, 7.02, 8.91] after 
removing the space between 0 and 9 but with the 
space between the 0 and 9 it came out as an error...
missing ) after argument list*/
}

//CLO9: Javascript:

{
  let grades = [90, 98, 78, 99]
  
  let studentGrades = grades

  console.log(studentGrades)

/* the result was unexpected token "..." for the 3 dots
in front of grades after removing the 3 dots the result
was [90, 98, 78, 99] */
}

//CLO10: Javascript:

{
    let student = {name: 'John Masson'}
    let adjunct = {name: 'Dave Larson'}
    let people = new Map()

    people.set(student, "Student")
    people.set(adjunct, "Adjunct")

    console.log(people)

/* the result was Map(2) {
    {name: 'John Masson'} => 'Student',
    {name: 'David Larson} => 'Adjunct'
}*/
}

//CLO11: Javascript:

{let student = {name: 'John Masson'}
    let adjunct = {name: 'Dave Larson'}
    let people = new Map()

    people.set(student, "Student")
    people.set(adjunct, "Adjunct")

    people.delete(student)

    console.log(people)

    /*the result was Map(1) { 
        {name: 'Dave Larson'} => 'Adjunct'
    }*/
}

//CLO12: Javascript:

{let student = {name: 'John Masson'}
    let adjunct = {name: 'Dave Larson'}
    let people = new Map()

    people.set(student, "Student")
    people.set(adjunct, "Adjunct")

    people.clear()

    console.log(people)

    //the result was Map(0) {}
}

//CLO13: Javascript:

{let student = {name: 'John Masson'}
    let adjunct = {name: 'Dave Larson'}
    let people = new Map()

    people.set(student, "Student")
    people.set(adjunct, "Adjunct")

    let result = people.has(student);

    console.log(result)

    //the result was true
}

//CLO14: Javascript:

{let student = {name: 'John Masson'}
    let adjunct = {name: 'Dave Larson'}
    let people = new Map()

    people.set(student, "Student")
    people.set(adjunct, "Adjunct")

    let result = people.keys(student)

    console.log(result)

    /* [Map Iterator] {
        {name: 'John Masson'},
        {name: 'Dave Larson'}
    }*/
}

//CLO15: Javascript:

{let student = {name: 'John Masson'}
    let adjunct = {name: 'Dave Larson'}
    let people = new Map()

    people.set(student, "Student")
    people.set(adjunct, "Adjunct")

    let result = people.values(student);

    console.log(result)

// the result was [Map Iterator] {'Student', 'Adjunct'}
}

//CLO16: Javascript:

{let student = {name: 'John Masson'}
    let adjunct = {name: 'Dave Larson'}
    let people = new WeakMap()

    people.set(student, "Student")
    people.set(adjunct, "Adjunct")

    ladjunct = null

    console.log(people.size)
    console.log(people.size)

/*the first result was undefined... after waiting 5 min 
it was the same*/
}

//CLO17: Javascript:
{let student = {name: 'John Masson'}
    let adjunct = {name: 'Dave Larson'}
    let people = new Set()

    people.add(student)
    people.add(adjunct)

    people.add(adjunct)

    console.log(people.size)

    //The result was 2
}

//CLO17: Javascript:

{let students =[ {name: 'John Masson'}, 
{name: 'Don Vasco'}, 
{name: 'Mary Landley'}]
let people = new Set(students)

console.log(people.has({name: 'Dave Vasco'}))

//the first result was an unexpected identifier the 
//string wasn't closed..will close string and attempt again.
//the result was false.
}