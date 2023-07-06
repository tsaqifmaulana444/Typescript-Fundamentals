import { Animals, Mammals } from "./classes/animal.js"

// variables
let num: number
let character: string
let rich: boolean

num = 14
character = "siapa saja"
rich = false

console.log(num, rich)

// arrays
let personName: string[] = []
personName = ["Andi", "Simatupang"]

let lines: number[] = []
lines = [1, 2, 3]
lines.push(4)

let data: any[] = []
data = ["abc", "xyz", 20]

lines.forEach((line: number) => {
  console.log(line)
})

// objects
let info: {
  personName: string
  age: number
} = {
  personName: "Michael Nasution",
  age: 20,
}

console.log(info.personName, info.age)

// functions
const sayHello: Function = () => {
  console.log("this is an asynchronous function")
}

const summary = (a: number, b: number) => {
  return console.log(a + b)
}

sayHello()
summary(2, 5)

// class
const dog = new Animals("siber husky", "anywhere", 10)
const dog2 = new Mammals("chihuahua", "anywhere", 10, true)

console.log(dog2.confirm())

// enums
enum categories {
  fiction,
  nonFiction,
}
const book: { bookName: string, genre: categories } = {
  bookName: "malin kundang",
  genre: categories.fiction,
}
console.log(book.genre)

// tuples
let tup: [string, number, boolean] = ["Joe", 25, true]
tup[0] = "Weah"
tup.forEach((items: any) => {
  console.log(items)
})
