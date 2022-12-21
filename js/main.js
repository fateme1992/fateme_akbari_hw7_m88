// --------------- SOLUTION 1 -----------

// let userData = [];

// for (let i = 0; i < personData.length; i++) {
//     userData.push({
//         ...personData[i],
//         ...(additionalPersonData.find((itmInner) => itmInner.uid === personData[i].uid))
//     }
//     );
// }

// console.log(userData);


// --------------- SOLUTION 2 -----------

let userData = personData.map(item => {
  const obj = additionalPersonData.find(element => element.uid === item.uid);
  return { ...item, ...obj };
});
console.log(userData);


// ---------------  create new array -----------
console.log("---------- READ FUNCTION -----------");

function read() {

  return userData.map(element => console.log(element))
}

read(userData)

// ---------------  create new array -----------
console.log("---------- CREAT FUNCTION -----------");

// function createNewObject(object) {

//   let newUserData = JSON.parse(JSON.stringify(userData));

//   for (let i = 0; i < newUserData.length; i++) {
//     if (newUserData[i]["uid"] === object.uid) return alert("you can not add this object")
//   }

//   newUserData.splice(newUserData.length, 0, object)
//   return (alert("you create new array of object"),newUserData);

// }

// console.log("old array:", userData, "new array:", createNewObject({
//   uid: 10,
//   firstName: 'Fateme',
//   lastName: 'Akbari',
//   position: 'Back-End Develope',
//   city: 'Teharn',
// }));

// ---------------  update element of array -----------
console.log("---------- UPDATE FUNCTION -----------");
// function update(object) {
//   let updateUserData = userData.map(object => ({ ...object }))

//   let updateUserDataIndex = updateUserData.findIndex(obj => obj.uid === object.uid)
  
//   if (updateUserDataIndex === -1) return alert("this object not exist in userdata")
//   updateUserData[updateUserDataIndex] = object


//   return updateUserData
// }
// console.log("old array:", userData, "new array:", update({
//   uid: 20,
//   firstName: 'Fateme',
//   lastName: 'Akbari',
//   position: 'Back-End Develope',
//   city: 'Teharn',
// }));

// ---------------  remove element of array -----------
console.log("---------- REMOVE FUNCTION -----------");


function removeElement(object) {
  let updateUserData = userData.map(object => ({ ...object }))

  let updateUserDataIndex = updateUserData.findIndex(obj => obj.uid === object.uid)
  updateUserData.splice(updateUserDataIndex, 1)
  return (alert("you remove object from userdata"),updateUserData);
}

console.log("old array:", userData, "new array:", removeElement({
  uid: 3,

}));