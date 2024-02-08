let image1 = document.querySelector(".image1");
let movingText1 = document.querySelector("#Smartwatch");

image1.addEventListener("mousemove",(e) => {
    image1.style.transform = "scale(1.1)"
    movingText1.style.marginLeft = e.clientX + "px";
    movingText1.style.marginTop = e.clientY + "px";
    movingText1.style.display = "inline-block";

    // console.log(e);
});
console.log(movingText1);

image1.addEventListener("mouseleave",() =>{
    movingText1.style.display = "none";
    image1.style.transform = "scale(1)"

});


// ---------------------------------------------------------------------------------------

let image2 = document.querySelector(".image2");
let movingText2 = document.querySelector("#CameraFilm");
   image2.addEventListener("mousemove",(e) => {
    image2.style.transform = "scale(1.1)"
    movingText2.style.marginLeft = e.clientX + "px";
    movingText2.style.marginTop = e.clientY + "px";
    movingText2.style.display = "inline-block";

    // console.log(e);
});
   console.log(movingText2);

image2.addEventListener("mouseleave",() =>{
    movingText2.style.display = "none";
    image2.style.transform = "scale(1)"

});
// -------------------------------------------------------------------------------------------------------
let image3 = document.querySelector(".image3");
let movingText3 = document.querySelector("#Coffee");
   image3.addEventListener("mousemove",(e) => {
    image3.style.transform = "scale(1.1)"
    movingText3.style.marginLeft = e.clientX + "px";
    movingText3.style.marginTop = e.clientY + "px";
    movingText3.style.display = "inline-block";

    // console.log(e);
});
   console.log(movingText3);

image3.addEventListener("mouseleave",() =>{
    movingText3.style.display = "none";
    image3.style.transform = "scale(1)"

});
// -------------------------------------------------------------------------------------------------------
let image4 = document.querySelector(".image4");
let movingText4 = document.querySelector("#phone");
   image4.addEventListener("mousemove",(e) => {
    image4.style.transform = "scale(1.1)"
    movingText4.style.marginLeft = e.clientX + "px";
    movingText4.style.marginTop = e.clientY + "px";
    movingText4.style.display = "inline-block";

    // console.log(e);
});
   console.log(movingText4);

image4.addEventListener("mouseleave",() =>{
    movingText4.style.display = "none";
    image4.style.transform = "scale(1)"

});
// -------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------
let image5 = document.querySelector(".image5");
let movingText5 = document.querySelector("#keyboad");
   image5.addEventListener("mousemove",(e) => {
    image5.style.transform = "scale(1.1)"
    movingText5.style.marginLeft = e.clientX + "px";
    movingText5.style.marginTop = e.clientY + "px";
    movingText5.style.display = "inline-block";

    // console.log(e);
});
   console.log(movingText5);

image5.addEventListener("mouseleave",() =>{
    movingText5.style.display = "none";
    image5.style.transform = "scale(1)"

});
// -------------------------------------------------------------------------------------------------------
let image6 = document.querySelector(".image6");
let movingText6 = document.querySelector("#wristwatch");
   image6.addEventListener("mousemove",(e) => {
    image6.style.transform = "scale(1.1)"
    movingText6.style.marginLeft = e.pageX + "px";
    movingText6.style.marginTop = e.pageY + "px";
    movingText6.style.display = "inline-block";

    // console.log(e);
});
   console.log(movingText6);

image6.addEventListener("mouseleave",() =>{
    movingText6.style.display = "none";
    image6.style.transform = "scale(1)"

});