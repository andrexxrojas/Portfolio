let currentMode = document.querySelector(".mode")
let darkMode = true;
let contact = document.getElementById("contact-text");

const tl = gsap.timeline({defaults: {duration: 0.2, ease: "power1.out"}})

let changingMode =
    tl.to(currentMode, {
        y: 10,
        opacity: 0
    })
    tl.to(currentMode, {
        y:0,
        opacity: 1
    })


function changeMode(){
    if(!changingMode.isActive()){
        if(darkMode === true){
            document.documentElement.style.setProperty("--background-color", "#EBDDCF");
            document.documentElement.style.setProperty("--primary-color", "#121212");
            changingMode.restart();
            currentMode.innerText = "Light";
            darkMode = false;
        }else{
            document.documentElement.style.setProperty("--background-color", "#121212");
            document.documentElement.style.setProperty("--primary-color", "#EBDDCF");
            changingMode.restart();
            currentMode.innerText = "Dark";
            darkMode = true;
        }
    }
}


function copyText(){
    var email = "jayandrerojas@gmail.com";

    navigator.clipboard.writeText(email);

    alert("Email has been copied to clipboard");
}