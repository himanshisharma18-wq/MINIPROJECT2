let userscore =0 ;
let compscore= 0;

const choices = document.querySelectorAll(".choice") ;

const msg = document.querySelector("#msg") ;

const scoreuser = document.querySelector("#user-score") ;
const scorecomp = document.querySelector("#comp-score") ;





//winner fun
const winner = (userwin ,userchoice,compchoice) =>{ 
if(userwin){ 
    userscore++ ;
    scoreuser.innerText = userscore ;

console.log("user is a winner!, you win");
msg.innerText= `YOU WIN , YOUR'S ${userchoice} BEATS ${compchoice}`;
msg.style.backgroundColor = "green";


}else{
    compscore++ ;
     scorecomp.innerText = compscore ;
    console.log("computer is winner ,you loose!");
    msg.innerText= `YOU LOST , ${compchoice} BEATS YOUR'S ${userchoice}  `;
    msg.style.backgroundColor = "#B03921";
}
}

//draw fun
const draw =() =>{
console.log("match was draw");
msg.innerText = `match is drawed ! play again` ;
}


//compchoice fun
const gencompchoice = () =>{
let options =["rock","paper","scissors"] ;
 let indx = Math.floor(Math.random()*3) ;
  return options[indx] ;
}


//playgame fun
const  playgame=(userchoice) =>{
console.log(userchoice) ;
//genrate random choice by comp
 let compchoice = gencompchoice() ;
console.log(` choice was clicked by computer ${compchoice}`) ;


if( compchoice=== userchoice ){
    draw() ;
}else{
    userwin =true ;
    if(compchoice==="rock"){
      userwin=  userchoice==="scissors"?false:true ;
     
    }
    if(compchoice==="paper"){
      userwin=  userchoice==="rock"?false:true ;
    }
    if(compchoice==="scissors"){
      userwin=  userchoice==="paper"?false:true ;
    }
}

winner(userwin ,userchoice,compchoice) ;
}



choices.forEach((choice) => {
    choice.addEventListener( "click" ,() =>{
        // console.log(choice) ;
        const choiceid = choice.getAttribute("id") ;

       const userchoice = choiceid ;
        console.log(` choice was clicked by user ${choiceid}`) ;
       playgame(userchoice) ;
    });

});


