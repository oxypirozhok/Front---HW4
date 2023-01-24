'use strict';

//1) Написать скрипт, который выводит списки с товарами в интерфейс (на основе массива с объектами).Внизу каждого списка выводится итоговая сумма товара. А так же в самом конце выводится итоговая сумма и количество всех товаров.
// const cars = [

//     {
    
//     title: "BMW",
    
//     price: "40000",
    
//     count: "15"
    
//     },
    
//     {
    
//     title: "Toyota",
    
//     price: "20000",
    
//     count: "13"
    
//     },
    
//     {
    
//     title: "Ford",
    
//     price: "30000",
    
//     count: "20"
    
//     },
    
//     {
    
//     title: "Chevrolet",
    
//     price: "60000",
    
//     count: "9"
    
//     },
    
//     {
    
//     title: "Volkswagen",
    
//     price: "30000",
    
//     count: "13"
    
//     },
    
//     ]
//     const body = document.querySelector('body');

//     function carList (arr) {

//     for  (let key in arr){
//       let list = document.createElement('ul');
  
//       let title = document.createElement('li');
//   title.innerText = arr[key].title;
  
//   let price = document.createElement('li');
//   price.innerText = arr[key].price;
  
//   let count = document.createElement('li');
//   count.innerText = arr[key].count;
  
//   let sum = document.createElement('li');
//   sum.innerText = `The ${arr[key].count} cars cost: ${ arr[key].price * arr[key].count}$`;
 
  
//   list.append(title, price, count, sum);
//   body.append(list);

// }
// } 

//     function sumTotal (arr){
//         let sum = 0;
//         for (let key in arr){ 
//           sum += cars[key].price * cars[key].count; 
//         } 

//         let sumTotal = document.createElement('p');
//         sumTotal.innerText = `Amount is: ${sum}$`;

//         body.append(sumTotal);

//       }

//     function totalCount (arr){
//         let sum = 0;
//         for (let key in arr){
//             sum += +cars[key].count;
//         } 
        
//         let totalCount = document.createElement('p');
//         totalCount.innerText = `Total number of cars is: ${sum}`;

//         body.append(totalCount);

//       }


//     carList(cars);
//     sumTotal(cars);
//     totalCount(cars);
    
    
//2)Напишите скрипт, который выводит в интерфейс следующую таблицу(html должен быть пустым, все элементы создаются строго с помощью скриптов):


const founders = [

{
  zero : 'No',
  first : '1',
  second : '2' ,
  third : '3',
  fourth : '4',
},
{
  zero : 'Full Name' ,
  first : 'Bill Gates',
  second : 'Steve Jobs' ,
  third : 'Larry Page',
  fourth : 'Mark Zuckerberg',
  
},
{
  zero : 'Founder',
  first : 'Founder of Microsoft',
  second : 'Founder of Apple' ,
  third : 'Founder of Google',
  fourth : 'Founder of Facebook',
},
{
  zero : 'Salary',
  first : '1000',
  second : '1200' ,
  third : '1100',
  fourth : '1300',
},
]

const body = document.querySelector('body');

let table = document.createElement('table');

table.classList.add("table");



let tr0 = document.createElement('tr')
let tr1 = document.createElement('tr');

let tr2 = document.createElement('tr');
let tr3 = document.createElement('tr');
let tr4 = document.createElement('tr');

for (let key in founders){
  let th = document.createElement('th');
  th.innerText = founders[key].zero;
  
  tr0.append(th);
} 

for (let key in founders){
  let td = document.createElement('td');
  td.innerText = founders[key].first;
  td.classList.add("td");
  
  tr1.append(td);
} 


for (let key in founders){
  let td = document.createElement('td');
  td.innerText = founders[key].second;
  td.classList.add("td");
  
  tr2.append(td);
}
for (let key in founders){
  let td = document.createElement('td');
  td.innerText = founders[key].third;
  td.classList.add("td");
  
  tr3.append(td);
}
for (let key in founders){
  let td = document.createElement('td');
  td.innerText = founders[key].fourth;
  td.classList.add("td");
  
  tr4.append(td);
}


table.append(tr0,tr1,tr2,tr3,tr4);
body.append(table);


