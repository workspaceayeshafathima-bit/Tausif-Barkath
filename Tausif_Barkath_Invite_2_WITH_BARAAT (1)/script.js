const videos=[...document.querySelectorAll('video')];
const audio=document.getElementById('nasheed');
function startMedia(){videos.forEach(v=>v.play().catch(()=>{})); if(audio){audio.volume=.72;audio.play().catch(()=>{});}}
const io=new IntersectionObserver(entries=>entries.forEach(e=>{const v=e.target;if(e.isIntersecting)v.play().catch(()=>{});else v.pause();}),{threshold:.08});
videos.forEach(v=>io.observe(v));
['pointerdown','touchstart','wheel','keydown','scroll'].forEach(t=>window.addEventListener(t,startMedia,{passive:true,once:true}));
addEventListener('load',()=>videos.forEach(v=>v.play().catch(()=>{})));
