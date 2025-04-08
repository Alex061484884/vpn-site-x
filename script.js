
function downloadApp() {
    window.location.href = "https://example.com/vpn-shield.apk";
}
const ru = {
    subtitle: "Безопасность. Анонимность. Свобода.",
    description: "Надёжный VPN-сервис для Android",
    downloadBtn: "Скачать APK",
    howToInstall: "Как установить?",
    f1Title: "Полная конфиденциальность",
    f1Text: "Ваш IP-адрес остаётся скрытым от всех.",
    f2Title: "Быстрые сервера",
    f2Text: "Никаких лагов — только скорость.",
    f3Title: "Без рекламы",
    f3Text: "Приложение без раздражающих баннеров.",
    s1Title: "Шаг 1",
    s1Text: "Скачайте файл <strong>VPN Shield.apk</strong> по кнопке выше или через QR-код ниже.",
    s2Title: "Шаг 2",
    s2Text: "Разрешите установку из неизвестных источников в настройках Android.",
    s3Title: "Шаг 3",
    s3Text: "Откройте APK-файл и следуйте инструкциям на экране.",
    qrTitle: "Сканируй и скачай",
    qrNote: "QR ведёт на страницу загрузки VPN",
    videoTitle: "Видеоурок по установке",
    footerLink: "Инструкция",
};
const en = {
    subtitle: "Security. Anonymity. Freedom.",
    description: "Reliable VPN service for Android",
    downloadBtn: "Download APK",
    howToInstall: "How to install?",
    f1Title: "Full Privacy",
    f1Text: "Your IP address stays hidden.",
    f2Title: "Fast Servers",
    f2Text: "No lags – only speed.",
    f3Title: "No Ads",
    f3Text: "No annoying banners inside.",
    s1Title: "Step 1",
    s1Text: "Download <strong>VPN Shield.apk</strong> using the button or QR code below.",
    s2Title: "Step 2",
    s2Text: "Allow unknown sources in Android settings.",
    s3Title: "Step 3",
    s3Text: "Open the APK file and follow the instructions.",
    qrTitle: "Scan & Download",
    qrNote: "QR leads to the VPN download page",
    videoTitle: "Installation Video Guide",
    footerLink: "Instructions",
};
let currentLang = 'ru';
function toggleLang() {
    const dict = currentLang === 'ru' ? en : ru;
    for (const key in dict) {
        const el = document.getElementById(key);
        if (el) el.innerHTML = dict[key];
    }
    currentLang = currentLang === 'ru' ? 'en' : 'ru';
    document.querySelector('.lang-toggle').textContent = currentLang.toUpperCase();
}
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.2 });
document.querySelectorAll('.scroll-show').forEach(el => observer.observe(el));
