class student{
    constructor(studentId,studentName){
        this.id = studentId;
        this.name = studentName;
        this.school = 'bb high school';
    }
};

const student1 = new student('121','sahid');
const student2 = new student('122','ashraf');

// console.log(student1, student2);
console.log(student1.id, student2.id);
