document.querySelector('.navbar-toggler').addEventListener('click',function (){
    document.querySelector('.navWrapper').style.display='block';
    setTimeout(function (){
        document.querySelector('.mobileNav').style.right='0'

    },100)
})
document.querySelector('.btn-close').addEventListener('click',function (){
    document.querySelector('.mobileNav').style.right='-1000px';
    setTimeout(function (){
        document.querySelector('.navWrapper').style.display='none';
    },100)

})

let lightModeBtn=document.getElementById('lightModeBtn');
let darkModeBtn=document.getElementById('darkModeBtn');
lightModeBtn.addEventListener('click',function (){
    document.querySelector('body').style.backgroundColor='#fff';
})

darkModeBtn.addEventListener('click',function (){
    document.querySelector('body').style.backgroundColor='#111';
})