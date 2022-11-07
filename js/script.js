// 1. Mostrar en consola la secuencia de Fibonacci

const fibonacci = (limit) => {
    const fib = [0, 1];
    for (let i = 2; i < limit; i++) {
        fib[i] = fib[i - 1] + fib[i - 2]
    }
    return fib;
}

const fibSerie = fibonacci (17);

console.log ("Numeros del 0 al 1000:" + fibSerie)

const numerosPares = fibSerie.filter(i =>  i % 2 === 0)
console.log("Numeros pares del 0 al 1000:" + numerosPares)

const numerosImpares = fibSerie.filter(i =>  i % 2 === 1)
console.log("Numeros impares del 0 al 1000:" + numerosImpares)

//2. Del siguiente arreglo de strings retornar otro arreglo con todo a mayúsculas

const marvelCharactersNames = [
    'Iron Man',
    'Captain America',
    'Thor',
    'Hulk',
    'Black Widow',
    'Hawkeye',
    'Black Panther',
    'Wolverine',
    'Captain Marvel',
    'Doctor Strange'
]

const marvelUpper = marvelCharactersNames.map((names) => {
    return names.toUpperCase ()
})

console.log (marvelCharactersNames)
console.log (marvelUpper)

//3. Del siguiente arreglo de objetos, retornar otro arreglo con los personajes que tengan height: 5.11

const marvelCharacters = [
    {
      name: "Iron Man",
      realName: "Tony Stark",
      height: 6.2,
      weight: 200,
      power: 100,
      intelligence: 100,
      speed: 100,
      strength: 100,
      agility: 100,
      durability: 100,
      energyProjection: 100,
      fightingSkills: 100,
    },
    {
      name: "Captain America",
      realName: "Steve Rogers",
      height: 6.2,
      weight: 200,
      power: 100,
      intelligence: 100,
      speed: 100,
      strength: 100,
      agility: 100,
      durability: 100,
      energyProjection: 100,
      fightingSkills: 100,
    },
    {
      name: "Thor",
      realName: "Thor Odinson",
      height: 6.2,
      weight: 200,
      power: 100,
      intelligence: 100,
      speed: 100,
      strength: 100,
      agility: 100,
      durability: 100,
      energyProjection: 100,
      fightingSkills: 100,
    },
    {
      name: "Hulk",
      realName: "Bruce Banner",
      height: 6.2,
      weight: 200,
      power: 100,
      intelligence: 100,
      speed: 100,
      strength: 100,
      agility: 100,
      durability: 100,
      energyProjection: 100,
      fightingSkills: 100,
    },
    {
      name: "Black Widow",
      realName: "Natasha Romanoff",
      height: 5.11,
      weight: 125,
      power: 100,
      intelligence: 100,
      speed: 100,
      strength: 100,
      agility: 100,
      durability: 100,
      energyProjection: 100,
      fightingSkills: 100,
    },
    {
      name: "Hawkeye",
      realName: "Clint Barton",
      height: 5.11,
      weight: 125,
      power: 100,
      intelligence: 100,
      speed: 100,
      strength: 100,
      agility: 100,
      durability: 100,
      energyProjection: 100,
      fightingSkills: 100,
    },
    {
      name: "Black Panther",
      realName: "T'Challa",
      height: 6.0,
      weight: 200,
      power: 100,
      intelligence: 100,
      speed: 100,
      strength: 100,
      agility: 100,
      durability: 100,
      energyProjection: 100,
      fightingSkills: 100,
    },
    {
      name: "Wolverine",
      realName: "James Howlett",
      height: 5.3,
      weight: 200,
      power: 100,
      intelligence: 100,
      speed: 100,
      strength: 100,
      agility: 100,
      durability: 100,
      energyProjection: 100,
      fightingSkills: 100,
    },
    {
      name: "Captain Marvel",
      realName: "Carol Danvers",
      height: 6.2,
      weight: 200,
      power: 100,
      intelligence: 100,
      speed: 100,
      strength: 100,
      agility: 100,
      durability: 100,
      energyProjection: 100,
      fightingSkills: 100,
    },
    {
      name: "Doctor Strange",
      realName: "Stephen Strange",
      height: 6.2,
      weight: 200,
      power: 100,
      intelligence: 100,
      speed: 100,
      strength: 100,
      agility: 100,
      durability: 100,
      energyProjection: 100,
      fightingSkills: 100,
    },
  ]

const valorBuscado = 5.11

const charactersHeight = marvelCharacters.filter (character => character.height === valorBuscado)
console.log(charactersHeight)


