class Student {
    
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }


    getAge() {
        return this.age;
    }

    getName() {
        return this.name;
    }

    setAge(age) {
        this.age = age;
    }

    setName(name) {
        this.name = name;
    }
}

module.exports = Student 