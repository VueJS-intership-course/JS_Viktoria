// Write a probram with a mother class animal. Inside it define a name and an age variables,
//  and set_value() method.
// Then create two bases variables Zebra and Dolphin which write a message telling the age,
//  the name and giving some extra information (e.g. place of origin).

class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    set_value(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Zebra extends Animal {
    constructor(name, age, placeOfOrigin) {
        super(name, age);
        this.placeOfOrigin = placeOfOrigin;
    }

    getInfo() {
        return `Hi I am  ${this.name}. I am ${this.age} years old and I am from ${this.placeOfOrigin}.`;
    }
}

class Dolphin extends Animal {
    constructor(name, age, placeOfOrigin) {
        super(name, age);
        this.placeOfOrigin = placeOfOrigin;
    }

    getInfo() {
        return `Hi I am ${this.name}. I am ${this.age} years old and I am from ${this.placeOfOrigin}.`;
    }
}

const zebra1 = new Zebra('Zebra1', 3, 'Africa');
const dolphin1 = new Dolphin('Dolphin1', 6, 'Pacific Ocean');

console.log(zebra1.getInfo());
console.log(dolphin1.getInfo());
