#! /usr/bin/env node
import inquirer from"inquirer";
import chalk from "chalk";

// creat class
class Student {
    name:string
    constructor(n:string){
        this.name=n
    }

}

class Person{
    students:Student[]=[]
    addStudent(obj:Student){
        this.students.push(obj)
    }
}

const persons=new Person()

const programStart =async(persons:Person)=>{
    do{
    console.log(chalk.italic.cyan('*****OOOOOOOOOOOOOOOOOO*****'));
    console.log(chalk.bold.magentaBright('*****WELL COME*****'));
    console.log(chalk.italic.cyan('*****OOOOOOOOOOOOOOOOOO*****'));
    const ans =await inquirer.prompt({
        name:'select',
        type:'list',
        message:"whom you like to interact with?",
        choices:['staff',"student",'exit']
    })
    if(ans.select=='staff'){
        console.log(chalk.bold.greenBright('You have access to staff,you can feel free to say any thing!'));
    }
    else if(ans.select =="student"){
        const ans =await inquirer.prompt({
            name:'student',
            type:'input',
            message:"Kindly enter the student name you want to interact with:"
        })
        const student=persons.students.find(val=> val.name == ans.student)
        if(!student){
            const name =new Student(ans.student)
            persons.addStudent(name)
            console.log(chalk.bold.greenBright(`hellow i am ${name.name}. Nice to meet you!`));
            console.log(chalk.bold.redBright("new student added"));
            console.log(chalk.bold.redBright("current student list"));
            console.log(persons.students);
        }
        else {
            console.log(chalk.bold.greenBright(`hello i am ${student.name}.it is nice to see you again!`))
            console.log(chalk.bold.redBright("existing student list:"));
            console.log(persons.students);
        } 
    }
    else if(ans.select=='exit'){
        console.log(chalk.italic.bgBlue("Exiting the program..."));
        process.exit();
    }
    }
    while(true);
}
programStart(persons);