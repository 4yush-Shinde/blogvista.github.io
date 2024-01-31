document.addEventListener("DOMContentLoaded", function () {
    const header = document.getElementById("changingName");
    let colorIndex = 0;

    function changeTextColor() {
        const colors = ["#000000","#db416d", "#de9746", "#b4e25e", "#41a3db", "#4150db", "#8941db", "#db41c9", "#de3c6a"];
        header.style.color = colors[colorIndex];
        colorIndex = (colorIndex + 1) % colors.length;
    }

    // Change text color every second
    setInterval(changeTextColor, 300);
});
