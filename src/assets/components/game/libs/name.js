const first = [ "Marquis", "Samir", "Adrien", "Joyce", "Pierce", "Juliette", "Kelton", "Jacob", "Isiah", "Lindsay", "Kian", "Jordyn", "Jaquan", "Anya", "Wayne", "Khalil" ]
const last = [ "Mills", "Mercer", "Reeves", "Hines", "Sanford", "Irwin", "Koch", "Hinton", "Estes", "Jackson", "Lowe", "Guerra", "Pineda", "Franco", "Cowan", "Krause" ]

const generate = () => {
  return first[Math.floor(Math.random() * first.length)] + " " + last[Math.floor(Math.random() * last.length)]
}

export default generate