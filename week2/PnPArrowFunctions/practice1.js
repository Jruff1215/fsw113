//CLO1: Javascript:

var temp = () => 104

/*console.log(typeoftemp)
the "typeoftemp" was not defined
*/

console.log(temp())

//the result was 104

//CLO2: Javascript:

var temp = multiplier => 104 * multiplier

console.log(temp(2))

//the result was 204

//CLO3: Javascript:

var temp = (multiplier, divider) => 104 * multiplier/divider

console.log(temp(3,6))

//the value was 52

//CLO4: Javascript:

var temp = (multiplier, divider) => { // block

let result = 104 * multiplier

if (result) {
    
    result = 104/divider
    }
    return result
}

console.log(temp(3,6))

//the result was 17.333333333333332

//CLO5: Javascript:

/*var clickButton = function ('click', function() {
    
    console.log(this)
})

the result was unexpected string 'click'*/

//CLO6: Javascript:

var clickButton = function() {
    console.log(this)
}

clickButton()

//the result was true

//CLO7: Javascript:

var clickButton = () => {
    console.log(this)
}

clickButton()

//the result was true

//CLO8: Javascript:

var person = {

    name: 'David Smith',

    age: 56,

    details: function (){
        
        console.log(this)
    }
}

person.details()

//the result was 'David Smith', age 56, function: details

//CLO9: Javascript:

/*var person = {

    name: 'David Smith',

    age: 56,

    details () => {
        
        console.log(this)
    }
}

person.details()

the result was an unexpected token "=>"*/

//CLO10: Javascript:

/*var temp = () 

=> 100

console.log(temp)

unexpected token "=>"*/