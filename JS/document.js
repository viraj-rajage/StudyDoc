const show_div = document.getElementById("show_div_content");
const show_btn = document.getElementById("list");
const close_div_btn = document.getElementById("close_document_div");


show_btn.addEventListener("click",()=>{
  show_div.style.display = "block";  
  close_div_btn.style.display = "block";
  show_btn.style.display = "none";
}); 

close_div_btn.addEventListener("click",()=>{
  show_div.style.display = "none";  
  close_div_btn.style.display = "none";
  show_btn.style.display = "block";
}); 
 
function loadPage(pageUrl) {
  const iframe = document.getElementById("reflection_work07");
  iframe.src = pageUrl;
}



function filter(){
    var filtervalue,input,ul,li,i;
    input = document.getElementById('sea');
    filtervalue = input.value.toUpperCase();
    ul = document.getElementById('menu'); 
    li=ul.getElementsByTagName('li');
    for(i=0;i<li.length;i++){
      var a = li[i].getElementsByTagName('a')[0]; 
      if(a.innerHTML.toUpperCase().indexOf(filtervalue)> -1){
        li[i].style.display = ""; 
        
      }
      else{
        li[i].style.display = "none"; 
        
    }
  }
}