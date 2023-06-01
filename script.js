var cancel = true;

function randomRgbColor() {
    let r = Math.floor(Math.random() * (255 + 1));
    let g = Math.floor(Math.random() * (255 + 1));
    let b = Math.floor(Math.random() * (255 + 1));
    return [r, g, b];
}

function cor() {
    if (cancel) {
        var box = document.getElementById("box");
        box.style.borderTop = Math.random() * (200 + 50) + "px solid";
        box.style.borderRight = Math.random() * (200 + 50) + "px solid";
        box.style.borderBottom = Math.random() * (200 + 50) + "px solid";
        box.style.borderLeft = Math.random() * (200 + 50) + "px solid   ";
        box.style.borderColor = "rgb(" + randomRgbColor() + ")" + " " + "rgb(" + randomRgbColor() + ")" + " " + "rgb(" + randomRgbColor() + ")" + " " + "rgb(" + randomRgbColor() + ")";
        box.style.backgroundColor = "rgb(" + randomRgbColor() + ")";
        setTimeout(() => { cor(); }, 250);
    }
}
function stop() {
    cancel = !cancel;
    if (document.getElementById('button_id').firstChild.data == "Stop") {
        document.getElementById('button_id').firstChild.data = "Continue";
    }
    else if (document.getElementById('button_id').firstChild.data == "Continue"){
        document.getElementById('button_id').firstChild.data = "Stop";
    }
    if (cancel) {
        cor();
    }
}