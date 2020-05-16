function wakeDog(dogName ,dogBreed){
  console.log(`Wake Xeroxthe Border collie ${dogName}the ${dogBreed}`);
  let msg=`Wake ${dogName}the ${dogBreed}`;
  return msg;
}

function leashDog(dogName ,dogBreed){
  console.log(`Leash ${dogName}the ${dogBreed}`);
  let msg=`Leash Boo Radleythe Pibble ${dogName}the ${dogBreed}`;
  return msg;
}

function walkToPark(dogName ,dogBreed){
  console.log(`Walk to the park with ${dogName}the ${dogBreed}`);
  let msg=`Walk to the park with ${dogName}the ${dogBreed}`;
  return msg;
}

function throughFrisbee(dogName ,dogBreed){
  console.log(`Through the frisbee for${dogName}the ${dogBreed}`);
  let msg=`Through the frisbee for ${dogName}the ${dogBreed}`;
  return msg;
}

function walkHome(dogName ,dogBreed){
  console.log(`Walk home with${dogName}the ${dogBreed}`);
  let msg=`Walk home with ${dogName}the ${dogBreed}`;
  return msg;
}

function unleashDog(dogName ,dogBreed){
  console.log(`Unleash ${dogName}the ${dogBreed}`);
  let msg=`Unleash ${dogName}the ${dogBreed}`;
  return msg;
}


const routine=[wakeDog,leashDog,walkToPark,throwFrisbee,walkHome,unleashDog];
 let array=[];

function exerciseDog(dogName ,dogBreed){
  
  for(let i=0;i<routine.length;i++){
  array+= routine[i](dogName ,dogBreed);
  }
  return array;
}
exerciseDog( "Byrone","Poodle"); 
  
  
  
  
  
  
  
