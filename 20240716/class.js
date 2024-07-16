class Person {
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }

    greet() {
        return `Hello, my name is ${this.name}`;
    }
}

// 인스턴스 생성
const person = new Person('John Doe', 30, 'john.doe@example.com');
const person2 = new Person('SBH', 25, 'john.doe@example.com');

// 속성 접근 및 메서드 호출
console.log(person.name);  // John Doe
console.log(person2.name); 
console.log(person.greet()); // Hello, my name is John Doe