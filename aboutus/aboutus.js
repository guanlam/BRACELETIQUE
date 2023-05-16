function toggleText() {
    var points =
        document.getElementById("points");
    var showMoreText =
        document.getElementById("morecontent1");

    var buttonText =
        document.getElementById("show-more");
    if (points.style.display === "none") {
        showMoreText.style.display = "none";
        points.style.display = "inline";
        buttonText.innerHTML = "Show More";
    } else {
        showMoreText.style.display = "inline";
        points.style.display = "none";
        buttonText.innerHTML = "Show Less";
    }
}