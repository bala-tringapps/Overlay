document.getElementById('image').style.display='none';
document.getElementById('sprite_img').style.display='none';
function bala() {
    setTimeout(function(){
         document.getElementById('image').style.display='block'; 
         document.getElementById('sprite_img').style.display = 'block';
        }, 2000);
  }
var close = document.getElementById('sprite_img');
close.addEventListener('click',function(){
    document.getElementById('image').style.display = 'none';
    document.getElementById('sprite_img').style.display = 'none';

})
bala();