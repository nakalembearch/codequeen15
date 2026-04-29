const mainheading = document.querySelector("#main-heading");
console.log(mainheading);

const introParagraph = document.querySelector(".intro-paragraph");
console.log(introParagraph);

const allParagraphs = document.querySelectorAll(".intro-paragraph");
console.log(allParagraphs);

//selecting the second paragraph options
const secondParagraph  = allParagraphs[1];
console.log(secondParagraph);

const secondParagraphByNthChild = document.querySelector("p:nth-child(2)");
console.log(secondParagraphByNthChild);


//using getElementById
const mainheadingById = document.getElementById("main-heading");
console.log(mainheadingById);

const introParagraphByClassName = document.getElementsByClassName("intro-paragraph");
console.log(introParagraphByClassName);

//manipulating DOM
mainheading.textContent = "Hello I changed DOM";
mainheading.style.color ="red";
mainheading.style.fontsize="54px";
mainheading.style.fonttype ="calibri";

const changeButton = document.querySelector("#change-paragraph");
changeButton.addEventListener("click",function(){
    secondParagraph.textContent = "God with me";
    secondParagraph.style.color = "purple";
    secondParagraph.style.fontsize = "24px";
})