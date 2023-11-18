const data = [
    { name: "john", age: 24, profession: "developer" },
    { name: "jane", age: 27, profession: "admin" },
  ];
  
  // 1. Print Developers
  function printDeveloper() {
    data.forEach((person) =>{
        if(person.profession === 'developer'){
            console.log(person);
        }
    });
  }
  
  // 2. Add Data
  function addData() {
    const name = prompt("Enter a person name");
    const age = parseInt(prompt("Enter a person age"));
    const profession = prompt("Enter a person profession");

    const newArrData = {name: name, age: age, profession: profession};
          data.push(newArrData);
          console.log(data);
  }
  
  // 3. Remove Admins
  function removeAdmin() {
    for (let i = 0; i < data.length; i++) {
        if (data[i].profession === "admin") {
          data.splice(i, 1);
        }
      }
      console.log("Remove Admin: ", data);
  }
  
  // 4. Concatenate Array
  function concatenateArray() {
    const dummyArr = [
      {name: "deva", age: 23, profession: "software"},
      {name: "parm", age: 26, profession: "analyst"}
    ];
    const result = data.concat(dummyArr);
   console.log("Concate Array: ", result);
  }
  
  // 5. Average Age
  function averageAge() {
    let sum = data.reduce((acc,curr) => acc + curr.age, 0);
    let average_age = sum / data.length;
    console.log("Average age: ", average_age);

  }
  
  // 6. Age Check
  function checkAgeAbove25() {
    // use some keyword for just check atleast 1
    const person = data.some(person => person.age > 25);
    console.log("At least one person isAbove25: " ,person);
  }
  
  // 7. Unique Professions
  function uniqueProfessions() {
    const profession = new Set(data.map((person) => person.profession));
    console.log("Unique Professions: " , ...profession);
  }
  
  // 8. Sort by Age
  function sortByAge() {
    const sortedAge = data.sort((a, b) => a.age - b.age);
    console.log("Sorted By Age: ", sortedAge);
  }
  
  // 9. Update Profession
  function updateJohnsProfession() {
    let update = data.find(person => person.name === 'john');
        if(update){
          update.profession = "manager";
        }
        console.log("Update the John Profession: ", update);
    }
  
  // 10. Profession Count
  function getTotalProfessions() {
    let totalDeveloper = data.filter(person => person.profession === 'developer');
    let totalAdmin = data.filter(person => person.profession === 'admin');
    console.log(`Total developer Count: ${totalDeveloper.length}, Total Admin Count: ${totalAdmin.length}`);
  }