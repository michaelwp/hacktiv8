/**
 * =======
 * MatchIn
 * =======
 * 
 * [Description]
 * matchIn merupakan sebuah function yang menerima data berupa object pelamar ( @applicant )
 * dan mengembalikan sebuah array berisi perusahaan apa saja yang memenuhi kualifikasi
 * pelamar tersebut dan skill apa saja yang sesuai dengan kebutuhan perusahaan yang dilamar
 * 
 * Berikut adalah data dari masing-masing perusahaan:
 * | Company Name | Required Skills                         | Job Experience (years) |
 * | ------------ | --------------------------------------- | ---------------------- |
 * | PT XYZ       | XML, Kotlin, PHP, C++, Javascript, HTML |            4           |
 * | PT ABC       | Python, HTML, PHP                       |            3           |
 * | PT HIJ       | C++, Javascript                         |            2           |
 * | PT KLM       | Golang, Javascript, JQuery              |            2           |
 * | PT JKL       | Python, HTML, PHP                       |            8           |
 * 
 * Adapaun kriteria minimal yang dibutuhkan pelamar untuk memenuhi kualifikasi adalah:
 * 1. Memiliki minimal 2 skill yang sama dengan perusahaan
 * 2. Memiliki pengalaman kerja yang sama/lebih besar dari perusahaan
 * 
 * [Example]
 *  @applicant = {
 *    name: 'Yusuf',
 *    skills: ['Javascript', 'C++'],
 *    experience: 2
 *  }
 *   
 * Penjelasan:
 * 1. Tidak masuk PT XYZ => pengalaman < 4 tahun
 * 2. Tidak masuk PT ABC => tidak memiliki skill yang cocok dan pengalaman < 3 tahun
 * 3. Masuk PT HIJ => memiliki skill yang cocok (C++, javascript) dan pengalaman 2 tahun
 * 4. Tidak masuk PT KLM => hanya memiliki skill javascript
 * 5. Tidak masuk PT JKL => hanya memiliki skill HTML dan pengalaman < 8 tahun
 * 
 * Maka:
 * @output = [
 *   {
 *     companyName: 'PT HIJ',
 *     matchedSkills: ['C++', 'Javascript']
 *   }
 * ]
 * 
 * [Rules]
 * 1. DILARANG menggunakan built in function apapun kecuali .push() dan .unshift()
 * 2. Skill dalam key matchedSkills tidak perlu berurut sesuai test case selama skill yang cocok sesuai
 */


function matchIn(applicant) {
  // Write your code here
}

var applicant1 = {
  name: 'Alpha',
  skills: ['Android', 'Kotlin', 'XML', 'Python', 'PHP'],
  experience: 5
}
console.log(matchIn(applicant1))
// [
//   { companyName: 'PT XYZ', matchedSkills: [ 'XML', 'kotlin', 'PHP' ] },
//   { companyName: 'PT ABC', matchedSkills: [ 'python', 'PHP' ] },
// ]

var applicant2 = {
  name: 'Beta',
  skills: ['PHP', 'HTML', 'CSS', 'JQuery', 'Python'],
  experience: 1
}
console.log(matchIn(applicant2))
// You are unqualified!

var applicant3 = {
  name: 'Charlie',
  skills: ['HTML', 'Photoshop', 'CSS', 'Javascript'],
  experience: 7
}
console.log(matchIn(applicant3))
// [
//   { companyName: 'PT XYZ', matchedSkills: [ 'javascript', 'HTML' ] }
// ]

var applicant4 = {
  name: 'Delta',
  skills: ['Python', 'PHP', 'C++', 'Javascript'],
  experience: 3
}
console.log(matchIn(applicant4))
// [
//   { companyName: 'PT ABC', matchedSkills: [ 'python', 'PHP' ] },
//   { companyName: 'PT HIJ', matchedSkills: [ 'C++', 'javascript' ] }
// ]