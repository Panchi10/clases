window.onload =function(){
    const bottonplay=document.querySelector("button")
    const audio=document.querySelector("audio")
    const sigue=document.querySelector("#siguiente")
    bottonplay.onclick=function(){
        if(audio.paused){audio.play();bottonplay.textContent="pause"
        
        }else{audio.pause();bottonplay.textContent="play"}
    
    }
        

}








