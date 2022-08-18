// 1.....................................................
// let myArray = [12.0 , 13.6 , 14.5 , 17 , 45.09];
// let result=[];
// function trueValues(myArray){
//     for( let item of myArray){
//         item=String(item);
//         if(item.indexOf(".") === -1){
//             result.push(item);
//         };
//     };
//     return(result);
// };

// console.log(trueValues(myArray));
// 2.....................................................
// let obj = {
//     a:1,
//     b:2,
//     c:3,
//     d:4,
// }

// let result = [];
// function objToArray(obj){
//     for(let item of Object.entries(obj)){
//         result.push(item);
//     };
//     return(result);
// };

// console.log(objToArray(obj));
// 3..........................................................
// let array1 = [1,0,2,3,4];
// let array2 = [3,5,6,7,8,13];
// let result = [];

// function sumToArray(array1 , array2){
//     let minimum = (array1>array2)? array1.length : array2.length ;
//     let x = Math.abs(array1.length-array2.length);
//     for(let j=0 ; j<x; j++){
//         array1.push(0);
//     };
//     for(let i=0 ; i<minimum ; i++){
//         result.push(array1[i]+array2[i]);
//     };
//     return(result);
// };

// console.log(sumToArray(array1,array2));
// 4...................................................
// let str = "john";
// let s="" , result=[];

// function subsetString(str){
//     str = str.split("");
   
//     for(let j=0 ; j=str.length ; j++){
//         let s="";
//         for(let i=0 ;i<str.length; i++){   
//             s=s+str[i];
//             result.push(s);
//         };
//         str.shift();
//     };
//     return(result);
// }

// console.log(subsetString(str));
// 5...............................................
// let input = 025468;
// let x="";

// function  insertSymbol(input){
//     input=String(input);
//     for(let item in input){
//         if(input[item]%2==0 && input[Number(item)+1]%2==0){
//             x=x+input[item]+"-";
//         }else{
//             x=x+input[item];
//         };
//     };
//     return(x)
// };

// console.log(insertSymbol(input));
// 6...............................................
// let input = [[[2,3],4],['food'],[4,5],[3,[6]],[9]];
// let s = 0;
// let Ary=[];

// function nestedObject(input){
//     for(let item in input){
//         let x = typeof(input[item]);
//         if(x == "object"){
//             console.log(nestedObject(input[item]));
//         }else{
//             Ary.push(input[item]);
//         };
//     };
//     return(Ary);
// };


// function numberOfInteger(){
//     let myArray = nestedObject(input);
//     for(let elem of myArray){
//         if(typeof(elem)==="number"){
//             s=s+1;
//         };
//     };
//     return(s);
// };

// console.log(numberOfInteger());


