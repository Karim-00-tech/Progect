const lights = document.querySelectorAll('.light');
let delay = 0;

lights.forEach((light, index) => {
    setTimeout(() => {
        light.style.opacity = 0; // انطفاء الضوء
    }, delay);
    delay += 1000; // تأخير كل ضوء بمقدار ثانية
});

