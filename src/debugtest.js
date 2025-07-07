const items = [
  { name: "Apple", price: 1200 },
  { name: "Grape", price: 3400 },
  { name: "Mango", price: 2900 },
  { name: "Pineapple", price: 3800 }
];

for ( const item of items ) {
  if (item.price >= 3000 ){
    console.log(item.name)
  }  
}

// const result = items
//   .filter (item => item.price >= 3000)
//   .map (item >= item.name);

// console.log(result); 

const user = {
  name: "Makuro",
  age: 37,
  job: "Engineer"
};

for (const key in user) {
  console.log(`${key}: ${user[key]}`);
}


class Car {
    constructor(color) {
      this.color = color;
      this.speed = 0;
    }
  
    drive() {
      this.speed += 10;
      console.log(`走行中：${this.speed}km/h`);
    }
  
    stop() {
      this.speed = 0;
      console.log("停止しました");
    }
  }
  
const myCar = new Car("赤");
myCar.drive(); // 走行中：10km/h
myCar.stop();  // 停止しました
