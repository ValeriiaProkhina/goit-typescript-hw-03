class Key {
    private signature: number;

    public getSignature(): number {
        return this.signature = Math.random()
    }
}
class Person {
    constructor(private key: Key) { 
        this.key = key;
    }
    public getKey(): Key {
        return this.key;
    }
}
abstract class House {
    protected door: boolean;
    protected key: Key;
    protected tenants: Person[] = [];
    constructor(key: Key) {
        this.door = false;
        this.key = key;
    }
    public comeIn(tenant: Person): void {
        if (this.door) {
            this.tenants.push(tenant);
        };
   }
  abstract openDoor(key: Key): void;
}

class MyHouse extends House {
    constructor(key: Key) {
        super(key)
    }
    openDoor(key: Key): void {
        if (this.key.getSignature() === key.getSignature()) {
            this.door = true;
            console.log("The door is open!");
        } else {
            console.log("Wrong key, the door is closed!");
            
        }
    }
}
const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};