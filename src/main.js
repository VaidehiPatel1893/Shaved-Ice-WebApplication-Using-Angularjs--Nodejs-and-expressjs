// Header Scroll
setTimeout(function(){
    let nav = document.querySelector(".navbar");
    window.onscroll = function () {
        if(document.documentElement.scrollTop > 20){
            nav.classList.add("header-scrolled");
        }else{
            nav.classList.remove("header-scrolled");
        }
    } 
    
    // nav hide 
    let navBar = document.querySelectorAll(".nav-link");
    let navCollapse = document.querySelector(".navbar-collapse.collapse");
    navBar.forEach(function (a){
        a.addEventListener("click", function(){
            navCollapse.classList.remove("show");
        })
    })
    
    }, 2000);
    
    document.addEventListener("DOMContentLoaded",()=>{
        function counter(id,start,end,duration) {
            let obj=document.getElementById(id),
            current =start,
            range=end-start,
            increment=end>start?1:-1,
            step=Math.abs(Math.floor(duration/range)),
            timer=setInterval(()=>{
                current+=increment;
                obj.textContent=current;
                if(current==end){
                    clearInterval(timer);
                }
            },step);
        }
        counter("count1",0,1000,3000);
        counter("count2",0,500,2500);
        counter("count3",0,50,3000);
        counter("count4",0,5,3000);
    
    })