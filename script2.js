
///intilisation of songs
let myprogressBar =document.getElementById('myprogressBar');
let audioElement= new Audio('songs/10.mp3');
let masterplay=document.getElementById('masterplay');
let gif=document.getElementById('gif');
let songitems=Array.from(document.getElementsByClassName('songitem'));
let songIndex=0;
let songs=[
    
    {songName:"let me love you",filepath:"songs/1.mp3" ,coverPath:"covers/1.jpg"   },
    {songName:" Alone",filepath:"songs/2.mp3" ,coverPath:"covers/2.jpg"   },
    {songName:"Unstoppable",filepath:"songs/3.mp3" ,coverPath:"covers/3.jpg"   },
    {songName:"Darkside",filepath:"songs/4.mp3" ,coverPath:"covers/4.jpg"   },
    {songName:"Don't say good bye",filepath:"songs/5.mp3" ,coverPath:"covers/5.jpg"   },
    {songName:"hall of fame ",filepath:"songs/6.mp3" ,coverPath:"covers/6.jpg"   },
    {songName:"in to your  arms ",filepath:"songs/7.mp3" ,coverPath:"covers/7.jpg"   },
    {songName:"love me like you do ",filepath:"songs/8.mp3" ,coverPath:"covers/8.jpg"   },
    {songName:"peaky blinder",filepath:"songs/9.mp3" ,coverPath:"covers/9.jpg"   },
    {songName:"worriyo mortals",filepath:"songs/10.mp3" ,coverPath:"covers/10.jpg"   },
];

songitems.forEach((element,i)=>{
    console.log(element,i);
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
})





masterplay.addEventListener('click',()=>{
    if(audioElement.paused||audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})
audioElement.addEventListener('timeupdate',()=>{
    //console.log('timeupdate');
    progress= parseInt((audioElement.currentTime/audioElement.duration)*100)
  //console.log(progress);
  myprogressBar.value=progress;
})

myprogressBar.addEventListener('change',()=>{
    audioElement.currentTime=myprogressBar.value*audioElement.duration/100;
})
const makeAllplays=()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
              element.classList.remove('fa-pause-circle');
              element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
      makeAllplays();
   // this is targeted location  index = parseInt(e.target.id);
      e.target.classList.remove('fa-play-circle');
      e.target.classList.add('fa-pause-circle');
      audioElement.src='songs/6.mp3';
      audioElement.currentTime=0;
      audioElement.play();
      masterplay.classList.remove('fa-play-circle');
      masterplay.classList.add('fa-pause-circle');
    })
})