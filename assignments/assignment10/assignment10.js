document.body.innerHTML = "<h1>ASSIGNMENT 10</h1>";
let companyData=
//Q2
  [
    {"companyName": "Tech Stars",
    "website": "www.techstars.site",
    "employees": [
       //Q1
      {
        "name": "Sam",
        "department": "Tech",
        "designation": "Manager",
        "salary": ["40000"],
        "raiseEligible": "true"
      },
      {
        "name": "Mary",
        "department": "Finance",
        "designation": "Trainee",
        "salary": ["18500"],
        "raiseEligible": "true"
      },
      {
        "name": "Bill",
        "department": "HR",
        "designation": "Executive",
        "salary":["21200"],
        "raiseEligible": "false"
      },
      //Q3
      {
        "name": "Anna",
        "department": "Tech",
        "designation": "Executive",
        "salary": ["25600"],
        "raiseEligible": "true"
      }
    ]
   }
  ]
  console.log (JSON.stringify(companyData))

//Q4
var totalSalaries = companyData[0].employees.reduce((a, b)=> {
    return a+ parseInt(b.salary[0])
 }, 0);
 console.log(totalSalaries);

//Q5

//if employee is raise eligible add 10% to their salary

companyData[0].employees.forEach(function (employees){
    if (employees.raiseEligible === "true") {
          employees.salary*=1.10
    }
    if (employees.raiseEligible === "true") {
        employees.raiseEligible = "false"
    }
  }
);
console.log (JSON.stringify(companyData))

//Q6

//var str = '{"employees":[{"name": "Sam","department": "Tech","designation": "Manager", "salary": ["40000"],"raiseEligible": "true"}]}'
//var obj = JSON.parse(str);
//obj['employees'].push({"wfh":"false"});
//str = JSON.stringify(obj);



companyData[0].employees.forEach(function (employees){
    if (["Anna", "Sam"].includes(employees.name)) {
        let obj = employees
    
        obj['wfh'] = 'true';
    }
    else {
        let obj = employees

        obj['wfh'] = 'false';
    }
    
});
console.log (JSON.stringify(companyData))