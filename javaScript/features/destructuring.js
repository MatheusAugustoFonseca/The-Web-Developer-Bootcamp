const person = {
  name: 'Matheus',
  age: 32,
  email: 'matheus.com',
  city: 'Salvador'
}

const {age, name: userName} = person

console.log(age, userName);

// You can destruct objects