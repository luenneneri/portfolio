  function setColor() {
    window.setTimeout("setColor()", 10000); // 5000 milliseconds delay

    let colorArray = ["--blue", "--yellow", "--dark", "--green", "--purple", "--pink"];
    let arrLength = colorArray.length;
    let randomNum = Math.random() * arrLength; //index
    let color = colorArray[Math.floor(randomNum)];

    document.getElementById('coffee').style.backgroundColor = "var(" + color + ")";

    const borderTop = document.getElementById('top');
    const borderBottom = document.getElementById('bottom');
    const borderLeft = document.getElementById('left');
    const borderRight = document.getElementById('right');

    borderTop.style.backgroundColor = "var(" + color + ")";
    borderBottom.style.backgroundColor = "var(" + color + ")";
    borderLeft.style.backgroundColor = "var(" + color + ")";
    borderRight.style.backgroundColor = "var(" + color + ")";

    if (color === "--purple" || color === "--dark" || color === "--pink") {
      document.getElementById('coffee').style.color = "white";
      document.getElementById('coffee').getElementsByTagName('a').style.color = "white";
    } else {
      document.getElementById('coffee').style.color = "black";
      document.getElementById('coffee').getElementsByTagName('a').style.color = "black";
    }
  }
