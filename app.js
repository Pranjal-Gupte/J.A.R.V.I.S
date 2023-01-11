const microphoneButton = document.getElementById("microphoneButton");

microphoneButton.addEventListener("click", () => {
    window.open(`http://127.0.0.1:5500/mic/index1.html`, "", "width=380px,height=390px");
});