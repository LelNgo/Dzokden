const translations = {
    en:{
        home: "HOME",
        podcasts : "PODCASTS",
        contact: "CONTACT",
        welcome: "Everything in samsara is impermanent. So is our website",
        notification: "Come back Mid 2025 for a New improved Illusory Experience",
        button: 'ENGLISH'
    },
    vi:{
        home: "NHÀ",
        podcasts : "PODCASTS",
        contact: "LIÊN HỆ",
        welcome: "Mọi thứ trong vòng luân hồi đều vô thường. Trang web của chúng tôi cũng vậy",
        notification: "Hãy quay lại vào giữa năm 2025 để trải nghiệm Ảo giác được cải tiến mới",
        button: 'TIENG VIET'
    }

    
};


let currentLang = 'en';

function changelang(lang){
    currentLang = lang;

    document.querySelectorAll('[data-needed-translation]').forEach(element => {
        const key = element.getAttribute('data-needed-translation');

        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    })
}

document.querySelectorAll('.language-list a').forEach(link =>{
    link.addEventListener('click', (e) =>{
        e.preventDefault();
        const lang = link.getAttribute('data-lang');
        changelang(lang);
    });
});


changelang('en');




 