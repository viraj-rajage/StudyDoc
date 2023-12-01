const showdiv = document.getElementById("menu_icon");
const closediv = document.getElementById("close_navi_menu");
const mydiv = document.getElementById("respo_navigation_div_prime"); 
const primediv = document.getElementById("top_secton_respo_nav");

showdiv.addEventListener("click",()=>{
    mydiv.style.display = "block";
    
});
 
closediv.addEventListener("click",()=>{
   mydiv.style.display = "none";
    
}); 
function openPage(page) {
    document.getElementById("myFrame").src = page;
}
function openPage2(page) {
    document.getElementById("myFrame2").src = page;
}