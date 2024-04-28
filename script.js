
var fontControl = document.querySelector(".fontControl")
var themeControl = document.querySelector(".themeControl")
var resetControl = document.querySelector(".resetControl")
var mainText = document.querySelector(".mainText")
var logo = document.querySelector(".logo")
var labels = document.querySelectorAll(".label")
var banner = document.querySelector(".banner")

function LoadLess () {
    const fontSize = localStorage.getItem("fontSize")
   const resetColor = localStorage.getItem("resetControl")
   const logoColor = localStorage.getItem("logo")
   const bannerColor = localStorage.getItem("banner")
   const labelsColor = localStorage.getItem("labels")

console.log( fontSize , resetColor, logoColor, bannerColor, labelsColor);
    if ( fontSize || resetColor || logoColor || bannerColor || labelsColor) {
        resetControl.value = resetColor
        logo.value = logoColor
        banner.value = bannerColor
        labels.forEach(label => {
            label.value = labelsColor
        })
        mainText.value = fontSize
        banner.style.backgroundColor = bannerColor
        resetControl.style.backgroundColor = resetColor
        logo.style.color = logoColor
        labels.forEach(label => {
            label.style.color = labelsColor
        });

        mainText.style.fontSize = fontSize
    }
    if(!bannerColor){
        console.log("ok");
    }
}

fontControl.addEventListener("change" , (e) => {
    mainText.style.fontSize = e.target.value
    // console.log(e.target.value);
    localStorage.setItem("fontSize" , e.target.value)
})

themeControl.addEventListener("change" , (e) => {
    banner.style.backgroundColor = e.target.value
    resetControl.style.backgroundColor = e.target.value
    logo.style.color = e.target.value
    labels.forEach(label => {
        label.style.color = e.target.value;
    });

    localStorage.setItem("resetControl" , e.target.value)
    localStorage.setItem("logo" , e.target.value)
    localStorage.setItem("banner" , e.target.value)
    localStorage.setItem("labels" , e.target.value)

})

resetControl.addEventListener("click" , () => {
    localStorage.removeItem("resetControl")
    localStorage.removeItem("logo")
    localStorage.removeItem("banner")
    localStorage.removeItem("labels")
    localStorage.removeItem("fontSize")
})
LoadLess()