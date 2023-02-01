/*const arr =[1,2,3,4]
const arr2= arr.map((value,index,array)=>{
console.log(value,index,array)
return value + index;
})
//console.log(arr2)
//array filter method
let arr3=[23,24,25,30,49,3,5]
const a2=arr3.filter((a)=>{
    return a>10
})
console.log(a2,arr3)*/
/*const arr4 =[1,2,5,6,6,7]
 const reduce_func =(a1,a2)=>{
return a1+a2;
 }
 const newarr4=arr4.reduce(reduce_func)
 console.log(newarr4)*/


/*
const data =[{
    id:1,
    name:"Ahad",
    class:10,
 
  },
  {
     id:2,
     name:"samad",
     class:11,
  
   },
   {
     id:3,
     name:"Aman",
     class:12,
  
   },
 ];
 const newData= data.map(  (cvalue,i) =>{ 
  
   console.log(cvalue,i)
   return cvalue + i
 })

 console.log(newData)*/

/*const arr =[5,6,7,8,9]

const output = arr.map( (x) =>{
    return x.toString(2);
})
 
console.log(output)*/
/*const arr3=[23,24,25,30,49,3,5]
const a2=arr3.filter((a)=>{
    return a<10
})
console.log(a2,arr3)*/



const pobj1 = new Promise((resolve,reject) =>{
    setTimeout(()=>{
    let roll_no=[1,2,3,5,6]
    resolve(roll_no1)
    reject("errror while loading")
    },3000)
});
pobj1.then((rollno)=>{
    console.log(rollno)
}).catch((error)=>{
    console.log(error)
})