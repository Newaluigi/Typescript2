interface User {
  name: string;
  age: number;
}

const prettyPrintWilder = (users: User[]): void => {
  users.map((user: User) => {
    console.log(`${user.name} is ${user.age} years old`);
  });
};

const wilders: User[] = [];

const user1 = { name: "Pierre", age: 23 };

const user2 = { name: "Paul", age: 33 };

const user3 = { name: "Jacques", age: 25 };

wilders.push(user1);

wilders.push(user2);

wilders.push(user3);

prettyPrintWilder(wilders);
