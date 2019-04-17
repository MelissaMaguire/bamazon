var connection = require("./connection");
var inquirer = require("inquirer");

function getAll(){
    connection.query('SELECT * FROM products', function (error, results) {
      if (error) throw error;
      results.forEach(({product_name, department_name, price, stock_quantity}) => {
          console.log(`name : ${product_name}`);
          console.log(`type : ${department_name}`);
          console.log(`price : ${price}`);
          console.log(`stock : ${stock_quantity}`);
          console.log(`=============================================================`)
      })
      askUser();
    });

}

function askUser(){
    inquirer.prompt([
        {
            type: "input",
            name: "ID",
            message: "Please submit the ID of your item"
        },
        {
            type: "input",
            name: "count",
            message: "How many?"
        }
    ]).then(results => {
        console.log(results);
    }).catch(err => {
        console.error(err);
    })

    connection.end();
}

getAll()

