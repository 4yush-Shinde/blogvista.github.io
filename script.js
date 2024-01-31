document.addEventListener("DOMContentLoaded", function () {
    const header = document.getElementById("changingHeader");
    let colorIndex = 0;

    function changeBackgroundColor() {
        const colors = ["lightcoral", "lightblue", "lightgreen"];
        header.style.backgroundColor = colors[colorIndex];
        colorIndex = (colorIndex + 1) % colors.length;
    }

        setInterval(changeBackgroundColor, 2000);
});
