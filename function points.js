function points (arr){
    let pointTotal=0;
    arr.forEach(element => {
      x=parseInt(element[0]);
      y=parseInt(element[2]);
      if (x>y){
        pointTotal=pointTotal+3;
      } else if (x===y){
        pointTotal=pointTotal+1;
      }
    });
    return pointTotal;
}


points(['3:3','7:5']);