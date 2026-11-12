
// التأكد من تحميل الصفحة قبل تشغيل الأكواد

document.addEventListener("DOMContentLoaded", () => {

    // ===== زر الوضع الليلي والنهاري =====

    const themeBtn = document.querySelector("#theme-btn");

    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("light");

        if (document.body.classList.contains("light")) {
            themeBtn.textContent = "🌙 تفعيل الوضع الليلي";
        } else {
            themeBtn.textContent = "☀️ تفعيل الوضع النهاري";
        }

    });


    // ===== زر CSS: تغيير لون العنوان =====

    const cssBtn = document.querySelector("#css-btn");
    const cssDemo = document.querySelector("#css-demo");
    const colorName = document.querySelector("#color-name");

    cssBtn.addEventListener("click", () => {

        cssDemo.style.color = "purple";
        colorName.textContent = "purple";

    });


    // ===== زر JavaScript: تغيير النص =====

    const jsBtn = document.querySelector("#js-btn");
    const jsDemo = document.querySelector("#js-demo");

    jsBtn.addEventListener("click", () => {

        jsDemo.textContent = "Hello, JS!";

    });


    // ===== بطاقات Frontend و Backend =====

    const cards = document.querySelectorAll(".fb-card");

    cards.forEach((card) => {

        card.addEventListener("click", () => {

            const example = card.querySelector(".example");

            example.classList.toggle("hidden");

        });

    });

});
