function getDefault(defColor, defBrightness) {
    const defaultBrightness = defBrightness;
    const defaultBoxID = "color" + defaultBrightness;
    const defaultBox = document.getElementById(defaultBoxID);
    defaultBox.classList.add("default");
    defaultBox.style.backgroundColor = defColor;
}
