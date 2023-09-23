

// script creating

function newColor()
{
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    let rgb = "rgb(" + red + "," + green + "," + blue + ")";

    document.body.style.backgroundColor = rgb;
    document.getElementById("rgb").innerHTML = rgb;
}


