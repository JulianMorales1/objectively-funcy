// Your code here.
function getFirstName(objectFirstName){
  let nameFirst = objectFirstName.firstName

  return nameFirst
}  

function getLastName(objectLastName){
  let nameLast = objectLastName.lastName

  return nameLast
}

function getFullName(objectName){
  let nameFull = objectName.firstName + " " + objectName.lastName

  return nameFull
}

function setFirstName(objectChange, objectRename){

  objectChange.firstName = objectRename
  
  return objectRename
}

function setAge(objectAge, objectNewAge){
  objectAge.age = objectNewAge

  return objectNewAge
}

function giveBirthday(birthdayAge){

  if(birthdayAge.age === undefined){
    birthdayAge.age = 1
  }
  else {
    birthdayAge.age = birthdayAge.age + 1
  }
}

function marry(spouseOne, spouseTwo){
  spouseOne.married = true
  spouseTwo.married = true
  spouseOne.spouseName = spouseTwo.firstName + " " + spouseTwo.lastName
  spouseTwo.spouseName = spouseOne.firstName + " " + spouseOne.lastName
}

function divorce(spouseOne,spouseTwo){
  spouseOne.married = false
  spouseTwo.married = false
  delete spouseOne.spouseName
  delete spouseTwo.spouseName 
}




// Our code here. Don't touch!
if (typeof getFirstName === 'undefined') {
  getFirstName = undefined
}

if (typeof getLastName === 'undefined') {
  getLastName = undefined
}

if (typeof getFullName === 'undefined') {
  getFullName = undefined
}

if (typeof setFirstName === 'undefined') {
  setFirstName = undefined
}

if (typeof setAge === 'undefined') {
  setAge = undefined
}

if (typeof giveBirthday === 'undefined') {
  giveBirthday = undefined
}

if (typeof marry === 'undefined') {
  marry = undefined
}

if (typeof divorce === 'undefined') {
  divorce = undefined
}


module.exports = {
  getFirstName,
  getLastName,
  getFullName,
  setFirstName,
  setAge,
  giveBirthday,
  marry,
  divorce,
}
