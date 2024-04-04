/*        
        let score=0;
        score=100;
        console.log("Your bill amount is RS." +score);
     let name=prompt("what is your name");
    console.log('hi',name)
    
let namr= prompt("how many tickets you have");
console.log(Number(namr)*7)

let a="viki";
let b="is a ";
let c= "goood boy"
let msg=a+" "+b+" "+ c +" heheh";
let ng='${a} ${b} livwa in ${c}'
console.log(msg)
console.log(ng)
   let mstg = 'haapy   birthday'
     console.log(mstg)
     let vi='viki is good "boy"'
     console.log(vi)
let anil=5
let ball=95
  let msg='you have ${anil} items in your cart. your bill amount is ${ball}';
  console.log(msg)
let arr=[5,8,10,7,9,11]
console.log(arr.length)
let city=["chenai","madurai","planai","upt"]
console.log(city[1])

let mar=[1,2,'a','bun']
console.log(mar)
console.log(mar[1])

let matrix=[[1,2,3],[3,5,6],[6,4,7]]
console.log(matrix[2][2])

let array=['a','e','i','o','u']
array.push('f')
console.log(array)
console.log(array.pop())
console.log(array)


console.log(array.shift())
console.log(array)
console.log(array.unshift('t'))
console.log(array)

console.log(array)
//removing element
array.splice(2,1)
console.log(array)


array.splice(1,3,'r','f','d')
console.log(array)


let first=[1,2,3,4]
let second=[2,34,5,2]
let joiner=[first,second]
console.log(joiner)

joiner=first.concat(second)
console.log(joiner)



let mm=[5,8,10,7,9,11]
mm.splice(3,5,17,19,111)
console.log(mm)
mm.unshift(100)
console.log(mm)
mm.splice(6,7,200)
console.log(mm)
mm.push(1000)
console.log(mm)
mm.slice(4,0)
console.log(mm)
mm.splice(mm.length/2,0,0)
console.log(mm)



//objects
let text={
  name:'viki',
  age:24,
  place:"upt",
  dimesnions:{
    length:3,
    breadth:3.5,
    quantity:3
  },
  buy:function(){
    console.log('item added to cart')
  },
  addtolist:function(){
    console.log('item added to list')
  }
  //murugan  yenna kapatthu vanthu please aiyya
}
text.buy()

console.log(text)
console.log(text.dimesnions.length)

text.age=34
console.log(text.age)
text.returnale=true


let item=new Object()
item.name='arun'
item.age=67
item.place='vpm'
console.log(item)

//dot notation
console.log(item.age)
//Bracket Notation
console.log(item['place'])


for(let i=0;i<=5;i++)
{
  console.log("hello")
}



let i=0
while(i>=1)
{
  console.log(i)
  i--
}

i=10
do{
  console.log(i)
  i--;
}while(i>=1)

for(let i=10;i>=1;i--){
  if(i%2!=0)
  
  {
  console.log(i)
  continue
}
}
while(true){
let nn=Number(prompt('enter a no'))
if(!isNaN(nn))
    break;
}

let Array=['apple','bnana','pine']
for(i=0;i<Array.length;i++)
{
  console.log(Array[i])
}

for(let fruit of Array)
console.log(fruit)

item={
  name:"vikki",
  age:24,
  price:2344
}
for (let key in item)
{
  console.log(item[key])
}


function findProduct(a,b){
  return a*b
}
console.log(findProduct(2,3))
console.log(typeof findProduct)

let volume=function(l,b,h){
  return l*b*h
}
console.log(volume(2,3,4))

//arrow function

let volu=(l,b,h) =>{return l*b*h}
console.log(volu(3,3,2))


let area=(a) =>{return a*a*a}
console.log(area(2))

//array

array=['vigneshwar` ','ideas','2it']
array.forEach(print)

function print(arra){
  console.log(arra.toUpperCase())

}

console.log('hi')
console.log('bye')
console.log('tata')
//murugan thunai
setTimeout(()=>console.log('step1'),2000)
setTimeout(()=>console.log("step 2"),1000)
setTimeout(()=>console.log("step 4"),10000)

//murugan thunai
//setInterval(()=>console.log('bye'),5000)
let priceUSD=[20,30,40]
let priceINR=priceUSD.map(x=>x*2)
console.log(priceINR)

//MYSET
let arr=[1,2,3,3,42,2,5,6,1]
let mySet1=new Set(arr)
console.log(arr)
console.log(mySet1)

//MYSET ADD
let mySet2=new Set()
mySet2.add(3)
mySet2.add(5)
mySet2.add('anil')
mySet2.add('viki')
console.log(mySet2)

console.log(mySet2.has(3))
console.log(mySet2.delete(7))
console.log(mySet2)
console.clear()



//maps
let map1=new Map()
map1.set('a',1)
map1.set('b',2)
map1.set('r',3)
console.log(map1)
console.log(map1.has('a'))
console.log(map1.has('b'))

for(let k of map1.keys()){
  console.log(k)
}


try{
 no=prompt("enter a number")
 if(no==='')
    throw "Cannot be Empty"
 if(isNaN(no))
    throw "Enter a valid Number"
 console.log(no)

}
catch(error)
{
  console.log(error)
}
finally{
  console.log('bye23')
}

*/

let ca=new Promise((resolve,reject)=>{
  let booking=true
  if(booking)
     resolve(45)
  else
    reject()

})

ca
.then((ss)=> console.log("thansk buddy " +ss)

)
.catch(()=>console.log("dont wooyy budyyd"))













































