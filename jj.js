const audio = document.getElementById("audioPlayer");
audio.src = config.music;
const volumeSlider = document.getElementById("volumeRange");
volumeSlider.addEventListener("input", () => {
  audio.volume = volumeSlider.value;
});
audio.volume = volumeSlider.value;
if (!localStorage.getItem('visited')) {
  // هذه أول زيارة لهذا الزائر
  // زيادة عدد المشاهدات على السيرفر (أو حفظ في مكان مشترك)
  
  // مثال: تحديث العداد عبر API أو زيادة المتغير المحلي
  increaseViewCount(); 

  // وضع علامة أنه تم زيارة الموقع
  localStorage.setItem('visited', 'true');
}

function increaseViewCount() {
  // هنا ضع كود زيادة العداد في السيرفر أو بأي طريقة تستخدمها
  console.log('تم زيادة العداد مرة واحدة فقط لكل زائر');
}
const socialList = document.getElementById("socialMediaList");
config.social.forEach(s => {
  const box = document.createElement("a");
  box.href = s.link;
  box.target = "_blank";
  box.className = "social-box";
  box.style.background = s.color;

  box.innerHTML = `
    <div class="social-content">
      <div class="social-title">تابعنا على ${s.name}</div>
      <div class="social-desc">${s.desc}</div>
    </div>
    <div class="social-btn">تابعنا الآن</div>
  `;
  socialList.appendChild(box);
});
