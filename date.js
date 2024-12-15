// let okk=()=>{
//  let ans=new Date();

//  let ans2=ans.getFullYear()
//  let ans3=ans.getMonth()
//  let ans4=ans.getDay()
//  let ans5=ans.getHours()
//  let ans6=ans.getMinutes()
//  let ans7=ans.getSeconds()
//  let ans8=ans.getMilliseconds()
//  console.log(ans8)

// }
// // okk()
// let okk=()=>{
//  let ans= new date ()
//   let arr=["january","february","march","april","may", "janu","july","august","sep","opt","nov","dec"]
//   let mou=arr[date.getMonth()]
//   console.log(mou)

// }
// okk()

//  let run=()=>{
// let inp=document.querySelector("#inp").value;
// let show=document.querySelector("#show")

// let date= new Date()
// let cyear=date.getFullYear();
//  show.innerHTML=`your age is now ${cyear-inp}` 
//  show.style,color="red"


//  }

let run=()=>{

    let show=document.querySelector("#show")

let new1= new Date()
let good=new1.getHours()

if(good <12 ){
    show.innerHTML="good morning"

}
else if ( good12=>18){
    show.innerHTML="good evening"
}

else if ( good >12){
    show.innerHTML="good night"
}

  






}



