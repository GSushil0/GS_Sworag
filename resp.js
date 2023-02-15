burger= document.querySelector('.burger')
navbar= document.querySelector('.navbar')
navlist= document.querySelector('.nav-list')
rightNav= document.querySelector('.rightNav')


burger.addEventLister('click', ()=>{
    rightNav.classList.toggle('v-v-class-resp');
    navlist.classList.toggle('v-v-class-resp');
    navbar.classList.toggle('h-nav-resp');
})