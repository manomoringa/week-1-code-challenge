//Write a program that takes the speed of a car as input e.g 80. If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70),
// it should give the driver one demerit point and print the total number of demerit points.
  // > For example, if the speed is 80, it should print: “Points: 2”. If the driver gets more than 12 points, the function should print: “License suspended”.

  let speed=200
  let speedlimit=70
  let speedover=0
  let demeritpoints=0
  if(speed>speedlimit){
    speedover=speed-speedlimit
    demeritpoints=speedover/5
    console.log(demeritpoints)
    if(demeritpoints>12){console.log("license suspended")}
    
  }else{console.log("ok")
    
  }
