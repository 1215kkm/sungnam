$('header').load('include/header.html', function(){
        
    $(document).ready(function () {
        let $button = $(".bright");
        let $body = $("body");
        let $lightIcon = $(".light");
        let $darkIcon = $(".dark");
        const LIGHT_CLASS = "light";
        const DARK_CLASS = "dark";
    
        // 초기 상태 설정
        $body.addClass(DARK_CLASS);
        $darkIcon.hide();
    
        // 버튼 클릭 이벤트 추가
        $button.on("click", function () {
            if ($body.hasClass(DARK_CLASS)) {
                $body.removeClass(DARK_CLASS).addClass(LIGHT_CLASS);
                $darkIcon.show();
                $lightIcon.hide();
            } else {
                $body.removeClass(LIGHT_CLASS).addClass(DARK_CLASS);
                $darkIcon.hide();
                $lightIcon.show();
            }
        });
    });
    

    $("h1").on("click", function() {
        $(this).toggleClass('on')
        /* const $hamma2 = $(".hamma2");
        const $hamma3 = $(".hamma3");
        const $hamma4 = $(".hamma4");

        if (isAnimating) {
            clearInterval(animationInterval);
            isAnimating = false;
        } else {
            isAnimating = true;
            animationInterval = setInterval(function() {
                const currentD2 = $hamma2.attr("d");
                const currentD3 = $hamma3.attr("d");
                const currentD4 = $hamma4.attr("d");
                const newD2 = currentD2 === newDValue2 ? originalDValue2 : newDValue2;
                $hamma2.attr("d", newD2);
                const newD3 = currentD3 === newDValue3 ? originalDValue3 : newDValue3;
                $hamma3.attr("d", newD3);
                const newD4 = currentD4 === newDValue4 ? originalDValue4 : newDValue4;
                $hamma4.attr("d", newD4);
            }, 200);
        } */
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
                diagonalIndex = (29 - row) - col;
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
})





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



$(document).ready(function() {
    function animateOnScroll() {
        $(".nameAni").each(function() {
            let $this = $(this);
            let offsetTop = $this.offset().top; // 요소의 위치
            let windowHeight = $(window).height(); // 현재 창 높이
            let scrollTop = $(window).scrollTop(); // 현재 스크롤 위치

            if (scrollTop + windowHeight > offsetTop + 100) { 
                // 스크롤 내릴 때 실행
                if (!$this.hasClass("animated")) {
                    $this.removeClass("animated-reset").addClass("animated");
                    let text = $this.data("original-text") || $this.text(); // 원래 텍스트 저장
                    $this.data("original-text", text);
                    $this.empty();
                    
                    $.each(text.split(""), function(i, char) {
                        let letter = $("<span>")
                            .text(char)
                            .addClass("animated-text")
                            .css("animation-delay", (i * 0.1) + "s"); // 0.1초씩 지연

                        $this.append(letter);
                    });
                }
            } else {
                // 스크롤 올릴 때 애니메이션 취소
                if ($this.hasClass("animated")) {
                    $this.removeClass("animated").addClass("animated-reset").empty().text($this.data("original-text"));
                }
            }
        });

        $(".className").each(function() {
            let $this = $(this);
            let offsetTop = $this.offset().top; // 요소의 위치
            let windowHeight = $(window).height(); // 현재 창 높이
            let scrollTop = $(window).scrollTop(); // 현재 스크롤 위치

            if (scrollTop + windowHeight > offsetTop + 100) { 
                // 스크롤 내릴 때 실행
                if (!$this.hasClass("animated")) {
                    $this.removeClass("animated-reset").addClass("animated");
                    let text = $this.data("original-text") || $this.text(); // 원래 텍스트 저장
                    $this.data("original-text", text);
                    $this.empty();
                    
                    $.each(text.split(""), function(i, char) {
                        let letter = $("<span>")
                            .text(char)
                            .addClass("animated-text")
                            .css("animation-delay", (i * 0.1) + "s"); // 0.1초씩 지연

                        $this.append(letter);
                    });
                }
            } else {
                // 스크롤 올릴 때 애니메이션 취소
                if ($this.hasClass("animated")) {
                    $this.removeClass("animated").addClass("animated-reset").empty().text($this.data("original-text"));
                }
            }
        });

        $(".major").each(function() {
            let $this = $(this);

            $('#section1 ul li').mouseenter(function(){
                if (!$this.hasClass("animated")) {
                    $this.removeClass("animated-reset").addClass("animated");
                    let text = $this.data("original-text") || $this.text(); // 원래 텍스트 저장
                    $this.data("original-text", text);
                    $this.empty();
                    
                    $.each(text.split(""), function(i, char) {
                        let letter = $("<span>")
                            .text(char)
                            .addClass("animated-major")
                            .css("animation-delay", (i * 0.02) + "s"); // 0.1초씩 지연

                        $this.append(letter);
                    });
                }
            }).mouseleave(function(){
                if ($this.hasClass("animated")) {
                    $this.removeClass("animated").addClass("animated-reset").empty().text($this.data("original-text"));
                }
            })
        });
    }

    // 페이지 로드 시 실행
    animateOnScroll();

    // 스크롤 이벤트 감지
    $(window).on("scroll", function() {
        animateOnScroll();
    });
});




$('footer').load('include/footer.html', function(){})







//subpage 

//우리반 플레이버튼

$(document).ready(function(){
    $('.btn_play').click(function(event){
        event.preventDefault();
        
        let $audio = $(this).siblings('audio')[0];
        let $icon = $(this).find('svg');
        
        if ($audio.paused) {
            $audio.play();
            $icon.addClass('playing');
        } else {
            $audio.pause();
            $audio.currentTime = 0;
            $icon.removeClass('playing');
        }
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