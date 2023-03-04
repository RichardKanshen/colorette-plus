function getDefault(defColor, defBrightness) {
    const defaultBoxID = "color5";
    const defaultBox = document.getElementById(defaultBoxID);
    defaultBox.classList.add("default");
    defaultBox.style.backgroundColor = defColor;
}
