const videos=[...document.querySelectorAll('video')];
const audio=document.getElementById('nasheed');
const startTime=37;
const endTime=160;
let audioStarted=false;

function startMedia(){
  videos.forEach(v=>v.play().catch(()=>{}));
  if(audio){
    audio.volume=.72;
    if(!audioStarted){audio.currentTime=startTime;audioStarted=true;}
    audio.play().catch(()=>{});
  }
}

if(audio){
  audio.addEventListener('timeupdate',()=>{
    if(audio.currentTime>=endTime){
      audio.currentTime=startTime;
      audio.play().catch(()=>{});
    }
  });
  audio.addEventListener('loadedmetadata',()=>{
    if(audio.duration>startTime) audio.currentTime=startTime;
  });
  audio.addEventListener('ended',()=>{
    audio.currentTime=startTime;
    audio.play().catch(()=>{});
  });
}

const io=new IntersectionObserver(entries=>entries.forEach(e=>{
  const v=e.target;
  if(e.isIntersecting)v.play().catch(()=>{});
  else v.pause();
}),{threshold:.08});
videos.forEach(v=>io.observe(v));

['pointerdown','touchstart','wheel','keydown','scroll'].forEach(t=>window.addEventListener(t,startMedia,{passive:true,once:true}));
addEventListener('load',()=>{
  videos.forEach(v=>v.play().catch(()=>{}));
  if(audio){audio.currentTime=startTime;audio.play().catch(()=>{});}
});
