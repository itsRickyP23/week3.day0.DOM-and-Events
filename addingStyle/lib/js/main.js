let rightBackground = document.querySelector(".right_side");
rightBackground.style["background-color"] = "#d3c26f";

let championNames = document.getElementsByClassName("name");
for (i = 0; i < championNames.length; i++) {
  championNames[i].style["text-shadow"] = "-6px 5px yellow";
}