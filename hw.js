
    

// number of words  with more then 3 
 
    
function morethen3() {
    


let wrds = ["dog", "home", "child", "pig", "mom"]
for (let index = 0; index < wrds.length; index++) {
  if  (wrds[index].length > 3) 
{
        console.log(wrds[index])
    }
}
}

// sum of all letters
function sumletters() {
    

let wrds = ["dog", "home", "child", "pig", "mom"]
let sumwords = 0
for (let index = 0; index < wrds.length; index++)
 
{ sumwords += wrds[index].length}
console.log(sumwords);
}

// choose 1 word
function howmany() {
    

let wrds = ["dog", "home", "child", "pig", "mom", "dog"]
 for (let index = 0; index < wrds.length; index++)
{if (wrds[index]=== "dog") { console.log(wrds[index]);
    
}}}



// numbers sum 

function sumnambers() {
    

let ar = [33, "dog", 7, 23, "mom", "home", 2, "girl", 45];
let sumNum = 0;
let index = 0;

while (index < ar.length) {
    if (typeof ar[index] === 'number') {
      sumNum += ar[index];
    }
    index++;
  }
  
  console.log(sumNum);
}
//    version 2


//   for (let index = 0; index < ar.length; index++) {
//    if (typeof ar[index]=== 'number') {
//     sumNum+= ar[index]
//    } console.log(sumNum);
//   }
  
//the smallest
function smallest(params) {
  

let tr = [6,8,5,17,2,25]
let minval = tr[0]
for (index = 0; index < tr.length; index++) {
    if (tr[index] < minval) {
        minval = tr[index];
    }
}  console.log("the smallest in tr is  "+ minval);
}
//the biggest
function biggest() {
  

let tr = [6,8,5,17,2,25]
let index = 0
let maxval = tr[0]
while (index < tr.length) {
    if (tr[index] > maxval) {
        maxval = tr[index]; 
    }
    index++
}
console.log("the biggest in tr is " + maxval);
}

// avarage

function avarage() {
  

let tr = [6,8,5,17,2,25]
let sumnum = 0
let avarage = tr.length
for (let index = 0; index < tr.length; index++) { 
    sumnum += tr[index];
    
} console.log(sumnum / avarage );
}

//avarage below 17
function under17() {
  

let tr = [6,8,5,17,2,25]
let sumnum = 0
for (let index = 0; index < tr.length; index++) {
    if (tr[index] < 17) {
       sumnum += tr[index];
    }
    
}
console.log(sumnum);
}



