// Change a flex-direction with col in row

const bTitleContent=document.querySelector('.wrap');
const titleContent= document.querySelector('#b-title__content');
const titleControl= document.querySelector('.b-title__control');

const colInRow=()=>{
    if (bTitleContent.offsetWidth>768){
        if(titleContent.classList[1]=='c-flex'){
            titleContent.classList.remove('c-flex');
            titleContent.classList.add('r-flex');
        }
    }else{
        if(titleContent.classList[1]=='r-flex'){
            titleContent.classList.remove('r-flex');
            titleContent.classList.add('c-flex');
        }
    }
}

colInRow();
window.addEventListener('resize',colInRow);


