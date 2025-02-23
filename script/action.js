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





function updateMenuLayout() {
    let menu = $("nav.menu");

    if (window.innerWidth > window.innerHeight) {
        // 가로 모드 → 메뉴 가로 정렬
        menu.addClass("horizontal");
    } else {
        // 세로 모드 → 기존 상태 유지
        menu.removeClass("horizontal");
    }
}

/* pc에서만 menu의 가로세로모드

function updateMenuLayout() {
    let menu = $("nav.menu");

    // 화면 너비가 860px 이하일 때만 적용
    if (window.innerWidth <= 860) {
        if (window.innerWidth > window.innerHeight) {
            // 가로 모드 → 메뉴 가로 정렬
            menu.addClass("horizontal");
        } else {
            // 세로 모드 → 기존 상태 유지
            menu.removeClass("horizontal");
        }
    } else {
        // 860px 초과일 경우 원래 상태 유지
        menu.removeClass("horizontal");
    }
} 
    
*/

// 페이지 로드 시 한 번 실행
updateMenuLayout();

// 화면 크기 변경될 때마다 업데이트
$(window).on("resize", function () {
    updateMenuLayout();
});




$('.hamburger').click(function(){
    $('.menu_box').toggleClass('on');
    $('.hamburger').toggleClass('on');
    $('.menuwrap').fadeToggle();

    if ($('.hamburger').hasClass('on')) {
        $('body').css('overflow', 'hidden'); // 화면 스크롤 막기
    } else {
        $('body').css('overflow', 'auto'); // 스크롤 다시 활성화
    }
})
// 메뉴 외부 클릭 시 닫기
$('.menuwrap').click(function() {
    $('.menu_box').removeClass('on');
    $('.hamburger').removeClass('on');
    $('.menuwrap').fadeOut();
    $('body').css('overflow', 'auto'); // 스크롤 다시 활성화
});

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

    // 10x30 = 300개의 span 생성
    for (let i = 0; i < 300; i++) {
        $bgSpan.append("<span></span>");
    }

    // 햄버거 버튼 클릭 시 대각선 반짝이기
    $(".hamburger").on("click", function () {
        let blinkDirection;

        if ($(this).hasClass("lefthand")) {
            blinkDirection = "left-bottom";  // 좌측 하단 → 우측 상단 (↗️)
        } else if ($(this).hasClass("righthand")) {
            blinkDirection = "right-bottom"; // 우측 하단 → 좌측 상단 (↖️)
        } else {
            blinkDirection = "right-top";    // 우측 상단 → 좌측 하단 (↙️) (기본)
        }

        $(".bg_span span").each(function (index) {
            let col = index % 10;  // 열 (가로)
            let row = Math.floor(index / 10);  // 행 (세로)
            let diagonalIndex;

            if (blinkDirection === "left-bottom") {
                // 좌측 하단 → 우측 상단 (↗️)
                diagonalIndex = (29 - row) + col;
            } else if (blinkDirection === "right-bottom") {
                // 우측 하단 → 좌측 상단 (↖️)
                diagonalIndex = (9 - row) - col;
            } else {
                // 우측 상단 → 좌측 하단 (↙️) (기본)
                diagonalIndex = (9 - col) + row;
            }

            let delay = (diagonalIndex + 9) * 0.015; // 음수 방지 & 딜레이 적용

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