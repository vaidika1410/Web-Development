class Student{

    constructor(name, section){
        this.name = name;
        this.section = section;
    }

    greeting(name) {
        this.name = name;
        return `hello from ${this.name}`;
    }
}

let student1 = new Student("student1", "A");
console.log(student1)

class NewStudent extends Student{
    newStudent(newStudent) {
        this.newStudent = newStudent
        return `${this.name} studies ${this.newStudent}`;
    }
}

let a = new NewStudent("Judo", "B");
console.log(a)