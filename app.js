let menubtn = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menubtn.addEventListener("click", ()=>{
 
    navbar.classList.toggle('active');

})

window.onscroll = () =>{
    navbar.classList.remove('active')
}
