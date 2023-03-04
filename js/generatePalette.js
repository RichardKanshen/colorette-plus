function getDefault(defColor, defBrightness) {
    const defaultBoxID = "color" + defBrightness;
    const defaultBox = document.getElementById(defaultBoxID);
    console.log(defColor);
    console.log(defBrightness);
    defaultBox.classList.add("default");
    defaultBox.style.backgroundColor = defColor;
}
