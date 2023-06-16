let sections=document.querySelectorAll("section")
let navlinks=document.querySelectorAll("header .navbar a")
let menuBtn=document.getElementById("menu-icon")
menuBtn.addEventListener("click",showMenuBtn)
function showMenuBtn(e){
e.target.style.display="none"
navlinks.forEach((n)=>{
    n.style.display="flex"
    n.style.flexDirection="column"
})

}
console.log(navlinks[0].offsetHeight)

window.addEventListener("scroll",m);
function m(){
sections.forEach(sec=>{
let top=window.scrollY
let offset=sec.offsetTop-100
let height=sec.offsetHeight
let id=sec.getAttribute("id")
console.log(id)


if(top>=offset&&top<offset+height){
    navlinks.forEach(nav=>{
nav.classList.remove("active")
document.querySelector(`header .navbar a[href*=`+id+`]`).classList.add("active")
    })
}

}




)


}