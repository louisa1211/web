<script>
    var currentSlide = 1;

    function showSlide(slideNumber) {
        // ���éҦ��ۿO��
        var slides = document.querySelectorAll('.slide');
        slides.forEach(function (slide) {
            slide.style.display = 'none';
        });

        // ��ܫ��w���ۿO��
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