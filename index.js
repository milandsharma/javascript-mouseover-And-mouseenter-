const logo = document.querySelector("#logo");
const share = document.querySelector(".share");
logo.addEventListener("mouseover", function(){
    share.style.visibility = "visible";
})
logo.addEventListener("mouseleave", function(){
    share.style.visibility = "hidden";
})