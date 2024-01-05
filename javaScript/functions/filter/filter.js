function validUserNames(usernames) {
  const filtered = usernames.filter((name) => {
      return (name.length < 10)
  })
  return console.log(filtered)
}


validUserNames(["Matheus", "Mas", "Maaaaatheus", "Maaaaaaaaaatheus", "Maaaaaaaaatheus", "Maaaaaatheus", "Mat"])