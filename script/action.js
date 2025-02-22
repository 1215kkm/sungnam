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


$('.hamburger').click(function(){
    $('.menu_box').toggleClass('on');
    $('.hamburger').toggleClass('on');
    $('.menuwrap').fadeToggle();
})

$(document).ready(function () {
    let startX = 0;

    $(document).on("touchstart", function (event) {
        startX = event.touches[0].clientX; // 터치 시작 위치 저장
    });

    
    $(window).on("scroll", function () {
        
        let scrollY = $(window).scrollTop();
        const screenWidth = $(window).width();
        let hamburger = $(".hamburger");

            if (scrollY > 100) {
                // 터치 시작 위치를 기준으로 왼쪽/오른쪽 스크롤 판단
                if (startX < screenWidth / 2) {
                    // 왼쪽에서 스크롤 시작 → 왼손잡이
                    hamburger.removeClass("righthand").addClass("lefthand");
                } else {
                    // 오른쪽에서 스크롤 시작 → 오른손잡이
                    hamburger.removeClass("lefthand").addClass("righthand");
                }
            } else {
                // 스크롤이 100px 이하이면 원래 자리로 돌아감
                hamburger.removeClass("lefthand righthand").css("top", "");
            }
    })
});


$(document).ready(function () {
    let $bgSpan = $(".bg_span");

    // 5x5 = 25개의 span 생성
    for (let i = 0; i < 300; i++) {
        $bgSpan.append("<span></span>");
    }

    // 햄버거 버튼 클릭 시 span이 반짝이는 효과 적용
    $(".hamburger").on("click", function () {
        $(".bg_span span").each(function (index) {
            let row = Math.floor(index / 30);  // 행 번호
            let delay = row * 0.04;  // 위에서 아래로 순차적 딜레이 적용

            $(this).css("animation-delay", delay + "s");
            $(this).addClass("active");

            // 애니메이션 끝나면 클래스 제거
            setTimeout(() => {
                $(this).removeClass("active");
            }, 1200);
        });
    });
});


document.addEventListener('touchstart', function() {
    try {
        let stylesheets = document.styleSheets;
        for (let i = 0; i < stylesheets.length; i++) {
            let rules = stylesheets[i].cssRules || stylesheets[i].rules;
            for (let j = 0; j < rules.length; j++) {
                if (rules[j].selectorText && rules[j].selectorText.includes(':hover')) {
                    stylesheets[i].deleteRule(j);
                }
            }
        }
    } catch (e) {}
}, { once: true });