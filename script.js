const kinolar = {
    "1": { nomi: "James Bond: Spektr", link: "https://tomosha.uz/tags/jangari/" },
    "2": { nomi: "Agent 007: O'lim vaqti emas", link: "https://tomosha.uz/tags/jangari/" },
    "3": { nomi: "Kingsman 2: Oltin halqa", link: "https://tomosha.uz/tags/jangari/" },
    "4": { nomi: "Born evolutsiyasi 1", link: "https://tomosha.uz/tags/jangari/" },
    "5": { nomi: "Qizil topshiriq", link: "https://uzbek-tilida.com/jangari/" },
    "6": { nomi: "Dedpul 3: Dedpul va Rosomoxa", link: "https://uzbek-tilida.com/jangari/" },
    "7": { nomi: "Halokat Patruli", link: "https://uzbek-tilida.com/jangari/" },
    "8": { nomi: "Ram ko'prigi", link: "https://tomosha.uz/tags/jangari/" },
    "9": { nomi: "Argayl: Super josus", link: "https://tomosha.uz/tags/jangari/" },
    "10": { nomi: "Greyxaund", link: "https://tomosha.uz/tags/jangari/" },
    "11": { nomi: "Qora hayot", link: "https://uzbek-tilida.com/jangari/" },
    "12": { nomi: "Qora beva", link: "https://tomosha.uz/tags/jangari/" },
    "13": { nomi: "Venom", link: "https://tomosha.uz/tags/jangari/" },
    "14": { nomi: "Joker", link: "https://tomosha.uz/tags/jangari/" },
    "15": { nomi: "Aquaman", link: "https://tomosha.uz/tags/jangari/" },
    "16": { nomi: "Adolat ligasi", link: "https://tomosha.uz/tags/jangari/" },
    "17": { nomi: "Wonder Woman", link: "https://tomosha.uz/tags/jangari/" },
    "18": { nomi: "Shazam!", link: "https://tomosha.uz/tags/jangari/" },
    "19": { nomi: "Qasoskorlar: Abadiyat jangi", link: "https://tomosha.uz/tags/jangari/" },
    "20": { nomi: "Qasoskorlar: Yakuniy jang", link: "https://tomosha.uz/tags/jangari/" },
    "21": { nomi: "Kapitan Marvel", link: "https://tomosha.uz/tags/jangari/" },
    "22": { nomi: "Qora Pantera", link: "https://tomosha.uz/tags/jangari/" },
    "23": { nomi: "Doktor Strenj", link: "https://tomosha.uz/tags/jangari/" },
    "24": { nomi: "Tor: Ragnarok", link: "https://tomosha.uz/tags/jangari/" },
    "25": { nomi: "Ant-Man va O'rgimchak", link: "https://tomosha.uz/tags/jangari/" },
    "26": { nomi: "Galaktika qo'riqchilari 2", link: "https://tomosha.uz/tags/jangari/" },
    "27": { nomi: "Kapitan Amerika: Qishki askar", link: "https://tomosha.uz/tags/jangari/" },
    "28": { nomi: "Temir odam 3", link: "https://tomosha.uz/tags/jangari/" },
    "29": { nomi: "Qo'rquv", link: "https://uzmovi.me/kino/tarfilm/273-qorquv-qorq-va-xayratlan-qorqish-ujas-qorqinchli-daxshat-janrda-uzbek-tilida-ozbekcha-tarjima-kino-2018-full-hd-skachat.html" },
    "30": { nomi: "Qo'rqinchli tun", link: "https://uzmovi.bot/qorqinchli-filmlar/" },
    "31": { nomi: "Iblis", link: "https://tomosha.uz/tags/qorqinchli/" },
    "32": { nomi: "Paranormal hodisalar", link: "https://uzmovi.bot/qorqinchli-filmlar/" },
    "33": { nomi: "O'liklar armiyasi", link: "https://uzmovi.bot/qorqinchli-filmlar/" },
    "34": { nomi: "Qarg'ish", link: "https://uzmovi.bot/qorqinchli-filmlar/" },
    "35": { nomi: "Xellouin", link: "https://uzmovi.bot/qorqinchli-filmlar/" },
    "36": { nomi: "Qora ko'zlar", link: "https://uzmovi.bot/qorqinchli-filmlar/" },
    "37": { nomi: "O'liklar kitobi", link: "https://uzmovi.bot/qorqinchli-filmlar/" },
    "38": { nomi: "Jinlar ovchisi", link: "https://uzmovi.bot/qorqinchli-filmlar/" },
    "39": { nomi: "Qora marosim", link: "https://uzmovi.bot/qorqinchli-filmlar/" },
    "40": { nomi: "O'liklar shahri", link: "https://uzmovi.bot/qorqinchli-filmlar/" },
    "41": { nomi: "Sirli orol", link: "https://tomosha.uz/tags/sarguzasht/" },
    "42": { nomi: "Yo'qolgan shahar", link: "https://tomosha.uz/tags/sarguzasht/" },
    "43": { nomi: "Jumanji: Yangi daraja", link: "https://tomosha.uz/tags/sarguzasht/" },
    "44": { nomi: "Shang-Chi va o'n xalqa afsonasi", link: "https://tomosha.uz/tags/sarguzasht/" },
    "45": { nomi: "Qahramon Gundala", link: "https://tomosha.uz/tags/sarguzasht/" },
    "46": { nomi: "Jannatga yo'l", link: "https://tomosha.uz/tags/sarguzasht/" },
    "47": { nomi: "O'rgimchak odam: Uyga qaytish", link: "https://tomosha.uz/tags/sarguzasht/" },
    "48": { nomi: "Zavqli sarguzashtlar", link: "https://uzbek-tilida.com/tarjima-kinolar/683-zavqli-sarguzashtlar-uzbek-tilida.html" },
    "49": { nomi: "Ostonadagi dushman", link: "https://tomosha.uz/tags/uzbek%20tilida/" },
    "50": { nomi: "Paddington 3: Paddington Peruda", link: "https://uzmovi.bot/" }
};

function kinoQidir() {
    let kod = document.getElementById("kinoKodni").value;
    let natija = document.getElementById("natija");

    if (kinolar[kod]) {
        natija.innerHTML = `<a href="${kinolar[kod].link}" target="_blank">${kinolar[kod].nomi}</a>`;
    } else {
        natija.innerHTML = "Bunday koddagi kino topilmadi.";
    }
}