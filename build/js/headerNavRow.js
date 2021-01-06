const Content=document.querySelector('.wrap');
const blockLinks= document.querySelector('.b-nav-link');
const navRow=()=>{
    if (Content.offsetWidth>1140){
        if(blockLinks.classList[1]=='link_none'){
            blockLinks.classList.remove('link_none');
            blockLinks.classList.add('link_block');
        }
    }else{
        if(blockLinks.classList[1]=='link_block'){
            blockLinks.classList.remove('link_block');
            blockLinks.classList.remove('r-flex');
            blockLinks.classList.add('link_none');
        }
    }
}
navRow();
window.addEventListener('resize',function(){
    navRow();
});