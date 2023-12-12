// function changeColor(color) {
//     document.getElementById('paragraph').style.color = color;
// }

// function changeFontSize(fontSize) {
//     document.getElementById('paragraph').style.fontSize = fontSize + 'px';
// }

// function changeFont(font) {
//     document.getElementById('paragraph').style.fontFamily = font;
// }

function changeColor(color) {
    $('#paragraph').css('color', color);
}

function changeFontSize(fontSize) {
    $('#paragraph').css('font-size', fontSize + 'px');
}

function changeFont(font) {
    $('#paragraph').css('font-family', font);
}