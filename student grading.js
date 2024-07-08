//write a function that prompts the user to input student marks. The input should be between 0 and 100. The output 
//should correspond the correct grade, as shown below: 
  //      A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less than 40.

 let maths= 65
 let grade
if(maths>=0 && maths<=100){
    if(maths<40){
        grade="E"
    }else if(maths<49){
        grade="D"
    }else if(maths<59){
        grade="C"
    }else if(maths<79){
        grade="B"
    }else if(maths>79){
        grade="A"
    }
}else{
    console.log("incorrect mark")
}
console.log(grade)