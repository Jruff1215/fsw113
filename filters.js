let cars = [
    {
      "color": "purple",
      "type": "minivan",
      "registration": new Date('2017-01-03'),
      "capacity": 7
    },
    {
      "color": "red",
      "type": "station wagon",
      "registration": new Date('2018-03-03'),
      "capacity": 5
    },
    {
      "color": "blue",
      "type": "camaro",
      "registration": new Date('2019-05-15'),
      "capacity": 4
    },
    {
      "color": "green",
      "type": "jeep",
      "registration": new Date('2020-08-11'),
      "capacity": 5
    },
    {
      "color": "red",
      "type": "monte carlo",
      "registration": new Date('2020-12-15'),
      "capacity": 4
    },
    {
        "color": "burgundy",
        "type": "impala",
        "registration": new Date('2018-06-24'),
        "capacity": 5
    },
    {
        "color": "gray",
        "type": "altima",
        "registration": new Date('2017-04-22'),
        "capacity": 4
    },
    {
        "color": "blue",
        "type": "mustang",
        "registration": new Date('2022-01-24'),
        "capacity": 4
    },
    {
        "color": "green",
        "type": "optima",
        "registration": new Date('2019-02-11'),
        "capacity": 5
    },
    {
        "color": "yellow",
        "type": "volvo",
        "registration": new Date('2021-05-10'),
        "capacity": 7
    },
  ]

/*{
    let redCars = cars.filter(function (e) {
    return e.color === "red";
});

console.log(redCars)
}

{
    let carCapacity = cars.filter(function (e) {
        return e.capacity === 5;
    });

console.log(carCapacity)
}

{
    let collection = cars.filter(function (e) {
    return e.type;
});

console.log(collection)
}*/

{let redCars = cars.filter(car => car.color === "red")

  console.log(redCars)
}

{
    let carCapacity = cars.filter(car => car.capacity === 5 );

    console.log(carCapacity)
}

{
    let collection = cars.filter(car => car.type);
    
    console.log(collection)
} 

let carColors = cars.filter((car) => car.color === 'red' || car.color === 'green')

console.log(carColors)