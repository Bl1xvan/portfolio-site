const projectlinks = document.querySelectorAll(".project-link");
const togglebtn = document.getElementsByClassName("toggle-btn")[0];
const navbarlist = document.getElementsByClassName("navbarlist")[0];


projectlinks.forEach(link =>{
    let readme = link.children[0].children[0];
    let fadein = link.children[0].children[0].children[0];
    link.addEventListener("mouseover", function(){
        readme.style.visibility="visible";
        fadein.setAttribute("class", "readme-fadein");
    });
    link.addEventListener("mouseleave", function(){
        readme.style.visibility="hidden";
        fadein.removeAttribute("class", "readme-fadein");
    });
});

togglebtn.addEventListener("click", () => {
navbarlist.classList.toggle("active");
togglebtn.classList.toggle("active");
})



