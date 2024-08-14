const readline = require("readline");
const query = require("./test_helper");
const { exit } = require("process");

const Interface1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

Interface1.question(
  "Which type of Operation you want to perform [ Login, Register ]  ===> ",
  (option) => {
    let optionValue = option.toLocaleLowerCase();

    const Interface = {
      login: () => {
        Interface1.question("Enter email : ", (email) => {
          Interface1.question("Enter the password : ", (password) => {
            if (email == "" && password == "") {
              console.log("Please enter the valid email and password");
            } else {
              query.login({
                email,
                password,
              });
            }
            Interface1.close();
          });
        });
      },

      register: () => {
        Interface1.question("Enter name : ", (name) => {
          Interface1.question("Enter the email : ", (email) => {
            Interface1.question("Enter the password : ", (password) => {
              if (email == "" && password == "" && name == "") {
                console.log("Please enter the valid name, email and password");
              } else {
                query.register({
                  name,
                  email,
                  password,
                });
              }
              Interface1.close();
            });
          });
        });
      },

      select: () => {
        Interface1.question("Enter the key name : ", (keyName) => {
          Interface1.question(
            `Enter ${keyName} to find the record : `,
            (value) => {
              console.log("response ==> ", query.select(keyName, value));
              Interface1.close();
            }
          );
        });
      },

      // update: () => {
      //   Interface1.question("Enter the key name to update : ", (keyName) => {
      //     Interface1.question(
      //       `Enter ${keyName} to find the record and update : `,
      //       (value) => {
      //         console.log("response ==> ", query.select(keyName, value));
      //         Interface1.question('Enter new Name : ', (newName)=>{

      //           Interface1.question('Enter new Salary : ', (Newsalary)=>{
      //               if(newName=='' && Newsalary==''){
      //                   console.log('Please fill upated value');
      //                   exit()
      //               }
      //               query.update({
      //                   id,
      //                   name:newName,
      //                   salary:Newsalary
      //               })
      //           })
      //       })

      //       }

      //     );
      //   });
      // },

      update: () => {
        Interface1.question("Enter the id ==> ", (id) => {
          Interface1.question("Enter name : ", (name) => {
            Interface1.question("Enter salary : ", (salary) => {
              let data = {
                id,
                name: name,
                salary: salary,
              };

              console.log("Data ==> ", data);
              console.log(query.update(id, data));
              exit();
            });
          });
        });
      },

      delete: () => {
        Interface1.question("Enter the id ==> ", (id) => {
          console.log(query.delete(id));
          exit();
        });
      },

      read: () => {
        console.log("All data read ==>");
        console.log(query.read());
        exit();
      },
    };

    if (Interface[optionValue]) {
      Interface[optionValue]();
    } else {
      console.log("Inavlid Option");
      Interface1.close();
    }
  }
);
