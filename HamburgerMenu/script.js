document.addEventListener("DOMContentLoaded",()=>{
    const hamburgerMenu = document.querySelector(".hamburger")
    const navItems = document.querySelector(".nav-items")
    
    hamburgerMenu.addEventListener("click", ()=>{
        navItems.classList.toggle("show")
    })
}
)


document.addEventListener("DOMContentLoaded", () => {
    const text = "Web Developer";
    const animatedText = document.querySelector(".animated-text");
    let index = 0;

    const typeEffect = () => {
        if (index < text.length) {
            animatedText.textContent += text[index];
            index++;
            setTimeout(typeEffect, 150);
        }
        else{
            setTimeout(()=>{
                animatedText.textContent=""
                index=0
                typeEffect()
            },1000)
        }
    };


    animatedText.textContent = "";
    typeEffect();
});
