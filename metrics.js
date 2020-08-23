function submit(){    
    let answer =  document.querySelector(".answer")
    let box1 = document.querySelector("#num").value
    let opt1 = document.querySelector("#sel1").value
    let opt2 = document.querySelector("#sel2").value

  if(opt1===opt2){      // equal selected unit
      answer.innerHTML = box1 + opt1;
  }
  else if(opt1==="cm" && opt2==="m" ){     // centimeter to meter
      let ans = box1/100;  
      answer.innerHTML = ans + "meter";
  }
  else if(opt1==="cm" && opt2==="km"){      // centimeter to kilometer
      let ans = box1/100000;
      answer.innerHTML = ans + opt2
  }
  else if(opt1==="cm" && opt2==="mile"){       // centimeter to mile
    let ans = box1/160200;
    answer.innerHTML = ans + opt2
}
else if(opt1==="m" && opt2==="cm"){      //meter to centimeter
    let ans = box1*100;
    answer.innerHTML = ans + opt2
}
else if(opt1==="m" && opt2==="km"){         //meter to kilometer
    let ans = box1/1000;
    answer.innerHTML = ans + opt2
}
else if(opt1==="m" && opt2==="mile"){     //meter to mile
    let ans = box1/1602;
    answer.innerHTML = ans + opt2
}

else if(opt1==="km" && opt2==="cm"){  //kilometer to centimeter
    let ans = box1*100000;
    answer.innerHTML = ans + opt2;
}

else if(opt1==="km" && opt2==="m"){     //kilometer to meter
    let ans = box1*1000;
    answer.innerHTML = ans + opt2;
}

else if(opt1==="km" && opt2==="mile"){    //kilometer to mile
    let ans = box1/1.602;
    answer.innerHTML = ans + opt2;
}

else if(opt1==="mile" && opt2==="cm"){    //mile to centimeter
    let ans = box1*160200;
    answer.innerHTML = ans + opt2;
}

else if(opt1==="mile" && opt2==="m"){    //mile to meter
    let ans = box1*1602;
    answer.innerHTML = ans + opt2;
}

else if(opt1==="mile" && opt2==="km"){    // mile to kilometer
    let ans = box1*1.6;
    answer.innerHTML = ans + opt2;
}
}
