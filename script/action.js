document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector(".bright");
    const body = document.body;
    const LIGHT_CLASS = "light";
    const DARK_CLASS = "dark";
    const lightIcon = document.querySelector(".light");
    const darkIcon = document.querySelector(".dark");
    
    // 초기 상태 설정
    body.classList.add(DARK_CLASS);
    darkIcon.style.display = "none";
    
    button.addEventListener("click", function () {
        if (body.classList.contains(DARK_CLASS)) {
            body.classList.replace(DARK_CLASS, LIGHT_CLASS);
            darkIcon.style.display = "block";
            lightIcon.style.display = "none";
        } else {
            body.classList.replace(LIGHT_CLASS, DARK_CLASS);
            darkIcon.style.display = "none";
            lightIcon.style.display = "block";
        }
    });
});