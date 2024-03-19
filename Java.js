<script>
    var currentSlide = 1;

    function showSlide(slideNumber) {
        // 隱藏所有幻燈片
        var slides = document.querySelectorAll('.slide');
        slides.forEach(function (slide) {
            slide.style.display = 'none';
        });

        // 顯示指定的幻燈片
        var currentSlide = document.getElementById('slide' + slideNumber);
        if (currentSlide) {
            currentSlide.style.display = 'block';
        }
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1) <= 0 ? 7 : (currentSlide - 1);
        showSlide(currentSlide);
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) > 7 ? 1 : (currentSlide + 1);
        showSlide(currentSlide);
    </script>