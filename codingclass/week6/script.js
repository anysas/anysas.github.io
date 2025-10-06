const topHeading = document.querySelector("h1");
// console.log(topHeading);
// console.log(topHeading.textContent);
topHeading.textContent = "This is my new top heading";
topHeading.style.color = "red";

const header = document.querySelector("header");
console.log(header);
console.log(header.textContent);
console.log(header.innerHTML);
header.innerHTML += "<h1>Top heading </h1>";

const allParas = document.querySelectorAll("p");
// console.log(allParas);
// console.log(topHeading.textContent);
for (let i = 0; i < allParas.length; i++) {
  //   console.log(allParas[i].textContent);
  allParas[i].style.border = "1px solid blue";
  allParas[i].style.backgroundColor = "beige";
}

const mySubheading = document.querySelectory("#first-subheading");
// console.log(mySubheading);
// console.log(mySubheading.textContent);

const allSubHeading = document.querySelector("h2");
// console.log(allSubHeading);
for (let i = 0; i < allSubHeadings.length; i++) {
  //   console.log(allSubheadings[i].textContent);
}
