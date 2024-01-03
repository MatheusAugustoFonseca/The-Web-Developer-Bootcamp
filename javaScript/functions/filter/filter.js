function validUserNames(usernames) {
  // your code here
  usernames.filter((name) => {
      console.log(name.length < 10)
  })
}


validUserNames(["Matheus", "Mas", "Maaaaatheus", "Maaaaaaaaaatheus", "Maaaaaaaaatheus", "Maaaaaatheus", "Mat"])