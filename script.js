const data = [
    { name: "john", age: 24, profession: "developer" },
    { name: "jane", age: 27, profession: "admin" },
  ];
  
  // 1. Print Developers
  function printDeveloper() {
    data.forEach((people) =>{
        if(people.profession === 'developer'){
            console.log(`${people.name} is a ${people.profession}, age ${people.age}`);
        }
    });
  }
  
  // 2. Add Data
  function addData() {
    const name = prompt("Enter a person name");
    const age = parseInt(prompt("Enter a person age"));
    const profession = prompt("Enter a person profession");

    const newArrData = {
        name: name,
        age: age,
        profession: profession
    };
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
      console.log(data);
  }
  
  // 4. Concatenate Array
  function concatenateArray() {
    const arr1 = ["deva","Software",950000,"Full Time"];
    const arr2 = ["parm","Data Analyst",550000,"Part Time"];
    console.log(arr1.concat(arr2));
  }
  
  // 5. Average Age
  function averageAge() {
    let total = 0;
    for(let person of data){
        total += person.age;
    }
    let average_age = total / data.length;
    console.log(average_age);

  }
  
  // 6. Age Check
  function checkAgeAbove25() {
    // use find keyword for just check atleast 1
    const person = data.find(person => person.age > 25);
    if(person){
        console.log(`${person.name} is older than 25`);
    }
  }
  
  // 7. Unique Professions
  function uniqueProfessions() {
    const profession = [...new Set(data.map((person) => person.profession))];
    console.log(profession);
  }
  
  // 8. Sort by Age
  function sortByAge() {
    const sortedAge = data.sort((a, b) => a.age - b.age);
    console.log(sortedAge);
  }
  
  // 9. Update Profession
  function updateJohnsProfession() {
    for(let person of data){
        if(person.name === "john"){
            person.profession = "manager";
        }
    }
    console.log(data);
  }
  
  // 10. Profession Count
  function getTotalProfessions() {
    let totalDeveloper = 0;
    let totalAdmin = 0;
    for(let person of data){
        if(person.profession === "developer"){
            totalDeveloper++;
        }else if(person.profession === "admin"){
            totalAdmin++;
        }
    }
    console.log("DeveloperCount",totalDeveloper);
    console.log("AdminCount",totalAdmin);
  }