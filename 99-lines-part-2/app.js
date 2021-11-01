let friends = ["Aaron", "Zach", "Kody", "Fred", "James"];
let button = document.querySelector("button");

button.addEventListener("click", sing);

function sing() {
  for (let i = 0; i < friends.length; i++) {
    let div = document.createElement("div");
    document.body.appendChild(div);
    div.className = "friends";
    let h3 = document.createElement("h3");
    div.appendChild(h3);
    h3.textContent = friends[i];
    lyrics(friends[i], h3);
  }
}
function lyrics(friend, div) {
  for (let j = 99; j > 0; j--) {
    let p = document.createElement("p");
    div.appendChild(p);
    let s = "s";
    let lines = j - 1 + " lines";
    if (j === 1) {
      s = "";
      lines = "no more lines";
    } else if (j === 2) {
      lines = "1 more line";
    }
    let text = j + " line" + s + " of code in the file, " + j + " line" + s + " of code, " + friend + " strikes one out, clears it all out, " + lines + " of code in the file";
    p.textContent = text;
  }
}
