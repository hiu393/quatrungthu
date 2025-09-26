document.addEventListener('DOMContentLoaded', () => {
  const yesBtn = document.getElementById('yesBtn');
  const noBtn = document.getElementById('noBtn');
  const bgMusic = document.getElementById('bgMusic');

  // nếu bạn muốn auto play nhạc (trên một số trình duyệt, user phải tương tác mới được bật nhạc)
  bgMusic.play().catch(err => {
    console.log('Không thể tự bật nhạc: ', err);
  });

  yesBtn.addEventListener('click', () => {
    const x = Math.random() * (window.innerWidth - yesBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - yesBtn.offsetHeight);
    yesBtn.style.left = x + 'px';
    yesBtn.style.top = y + 'px';
    yesBtn.style.position = 'absolute';
  });

  noBtn.addEventListener('click', () => {
    // bạn có thể dùng alert hoặc hiển thị phần tử div riêng
    alert('V thì thôi nhé 😢');
  });
});
