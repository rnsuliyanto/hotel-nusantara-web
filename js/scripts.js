document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll untuk tautan dengan href yang diawali dengan #
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Menambahkan animasi pada formulir
    const bookingForm = document.getElementById('booking-form');
    const paymentForm = document.getElementById('payment-form');
    const registrationForm = document.getElementById('registration-form');
    const loginLink = document.getElementById('login-now'); // Link "Masuk sekarang"

    if (bookingForm) {
        bookingForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Mencegah pengiriman formulir default
            bookingForm.classList.add('submitted');
            setTimeout(() => {
                bookingForm.classList.remove('submitted');
                alert('Formulir pemesanan telah dikirim!');
                window.location.href = 'payment.html'; // Halaman pembayaran
            }, 1000); // Delay untuk menampilkan animasi
        });
    }

    if (paymentForm) {
        paymentForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Mencegah pengiriman formulir default
            paymentForm.classList.add('submitted');
            setTimeout(() => {
                paymentForm.classList.remove('submitted');
                alert('Pembayaran Anda berhasil diproses! Terima kasih telah memilih Hotel Nusantara.');
                window.location.href = 'index.html'; // Kembali ke halaman utama
            }, 1000); // Delay untuk menampilkan animasi
        });
    }

    if (registrationForm) {
        registrationForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Mencegah form dikirim secara default

            // Menampilkan alert
            alert('Selamat bergabung di Hotel Nusantara!');

            // Mengalihkan ke halaman index.html segera
            window.location.href = 'index.html';
        });
    }

    if (loginLink) {
        loginLink.addEventListener('click', function (event) {
            event.preventDefault(); // Mencegah navigasi default

            // Menampilkan alert "Coming Soon"
            alert('Fitur login akan datang segera!');
        });
    }

    // Menambahkan efek fade-in untuk elemen dengan kelas 'fadein'
    const fadeinElements = document.querySelectorAll('.fadein');
    fadeinElements.forEach((element, index) => {
        element.style.opacity = 0;
        element.style.transform = 'translateY(20px)';
        setTimeout(() => {
            element.style.transition = 'opacity 1s ease-in-out, transform 1s ease-in-out';
            element.style.opacity = 1;
            element.style.transform = 'translateY(0)';
        }, index * 300); // Efek dimulai dengan jeda waktu untuk setiap elemen
    });

    // Mengatur drag-to-scroll untuk carousel
    const carouselWrapper = document.querySelector('.carousel-wrapper');
    let isDragging = false;
    let startX;
    let scrollLeft;

    if (carouselWrapper) {
        carouselWrapper.addEventListener('mousedown', (e) => {
            isDragging = true;
            startX = e.pageX - carouselWrapper.offsetLeft;
            scrollLeft = carouselWrapper.scrollLeft;
        });

        carouselWrapper.addEventListener('mouseleave', () => {
            isDragging = false;
        });

        carouselWrapper.addEventListener('mouseup', () => {
            isDragging = false;
        });

        carouselWrapper.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            e.preventDefault();
            const x = e.pageX - carouselWrapper.offsetLeft;
            const walk = (x - startX) * 2; // Sesuaikan kecepatan scroll
            carouselWrapper.scrollLeft = scrollLeft - walk;
        });
    }

    // Menangani tampilan formulir berdasarkan metode pembayaran yang dipilih
    const paymentMethodSelect = document.getElementById('payment-method');
    const creditCardForm = document.getElementById('credit-card-form');
    const bankTransferForm = document.getElementById('bank-transfer-form');
    const paypalForm = document.getElementById('paypal-form');

    if (paymentMethodSelect) {
        paymentMethodSelect.addEventListener('change', () => {
            creditCardForm.style.display = paymentMethodSelect.value === 'credit-card' ? 'block' : 'none';
            bankTransferForm.style.display = paymentMethodSelect.value === 'bank-transfer' ? 'block' : 'none';
            paypalForm.style.display = paymentMethodSelect.value === 'paypal' ? 'block' : 'none';
        });
    }
});
