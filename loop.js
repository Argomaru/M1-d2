//Loop Statement
// 1-5

// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)

//loop for
// for(init;comparator;modificator)
/* 
for(let i=1;i<6;i++){
    if(i%2==0){
        console.log(i)
    }
 } //hasilnya akan muncul bilangan genap
*/

//loop while
    //while(condition)
   /* 
let number = 1
while(number < 6) //condition
{
    //task
    console.log(number)
    number++
}
*/

// loop do while
//task jalan terlebih dahulu sebelum mengecheck task
/*
let nomer = 1
do
{
//task
console.log(nomer)
nomer++ //modificator
}while(nomer<6)//condition
*/

//nested for
/*
for(let j=1;j<=5;j++){
    //task
    for(let k=1;k<=5;k++){
        console.log(k)
    }
    console.log("ini pembatas---------------")
} 
*/


/*task pertama yang jalan adalah si variable j dia jalan pertama abis itu karena nilai j diabwah 5
maka dia jalanin si k sampai nilai si k sampai ke 5, setelah loop pertama dari k nilai j jadinya 2,
karena nilai masih dibawah 5 maka dia jalankan lagi si k, dan setelesah selesai k dicheck lagi nilai j
dan repeat lagi.*/

// const array = ["fransiscus","bernadus","jason","kristian"]
// console.log(array[1])
/*
continue = skip task ke modifier(increament, decreament)
break

*/


/*
for(let i=0;i < 5; i++){

    //skip jika angka 3
    if(i == 3){
        continue
    }
    //break ketika angka 4
    else if(i == 4){
        break
    }
    console.log(i)
}
*/

/*
if
else if//kondisi if pertama selesai maka langsung end

if
if
else
//kondisi if pertama kelar lanjut ke kondisi if kedua
*/
