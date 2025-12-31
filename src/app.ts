import inquirer from "inquirer";

async function bootstrap() {
  console.log("Application is starting...");
  inquirer
    .prompt([
      {
        type: "password",
        name: "password",
        message: "Enter your password",
        mask: "*",
      },
    ])
    .then((answers) => {
      console.log("Password entered:", answers.password);
    });
}

bootstrap();
