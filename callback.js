 function primero(segundo){
   setTimeout(function(){
      console.log("PRIMERO");
      segundo();
   }, 3000)
    
 }

 function segundo(){
    console.log("SEGUNDO");
 }

 primero(segundo);