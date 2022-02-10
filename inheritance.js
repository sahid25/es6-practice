class Parent {
    constructor(){
        this.fatherName = 'whatever';
    }
}


class Child extends Parent {
    constructor(theName){
        super();
        this.ChildName = theName;
    }
    getThis(){
        return this.ChildName + ' ' + this.fatherName;
    }
};

const baby = new Child('jhon');
// console.log(baby);

console.log(baby.getThis());