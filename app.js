let fonts = [
    ['𝐀', '𝐁', '𝐂', '𝐃', '𝐄', '𝐅', '𝐆', '𝐇', '𝐈', '𝐉', '𝐊', '𝐋', '𝐌', '𝐍', '𝐎', '𝐏', '𝐐', '𝐑', '𝐒', '𝐓', '𝐔', '𝐕', '𝐖', '𝐗', '𝐘', '𝐙'],
    ['𝒂', '𝒃', '𝒄', '𝒅', '𝒆', '𝒇', '𝒈', '𝒉', '𝒊', '𝒋', '𝒌', '𝒍', '𝒎', '𝒏', '𝒐', '𝒑', '𝒒', '𝒓', '𝒔', '𝒕', '𝒖', '𝒗', '𝒘', '𝒙', '𝒚', '𝒛'],
    ['𝐴', '𝐵', '𝐶', '𝐷', '𝐸', '𝐹', '𝐺', '𝐻', '𝐼', '𝐽', '𝐾', '𝐿', '𝑀', '𝑁', '𝑂', '𝑃', '𝑄', '𝑅', '𝑆', '𝑇', '𝑈', '𝑉', '𝑊', '𝑋', '𝑌', '𝑍'],
    ['𝗔', '𝗕', '𝗖', '𝗗', '𝗘', '𝗙', '𝗚', '𝗛', '𝗜', '𝗝', '𝗞', '𝗟', '𝗠', '𝗡', '𝗢', '𝗣', '𝗤', '𝗥', '𝗦', '𝗧', '𝗨', '𝗩', '𝗪', '𝗫', '𝗬', '𝗭'],
    ['𝖠', '𝖡', '𝖢', '𝖣', '𝖤', '𝖥', '𝖦', '𝖧', '𝖨', '𝖩', '𝖪', '𝖫', '𝖬', '𝖭', '𝖮', '𝖯', '𝖰', '𝖱', '𝖲', '𝖳', '𝖴', '𝖵', '𝖶', '𝖷', '𝖸', '𝖹'],
    ['𝕬', '𝕭', '𝕮', '𝕯', '𝕰', '𝕱', '𝕲', '𝕳', '𝕿', '𝕴', '𝕶', '𝕷', '𝕸', '𝕹', '𝕺', '𝕻', '𝕼', '𝕽', '𝕾', '𝕵', '𝖀', '𝖁', '𝖂', '𝖃', '𝚼', '𝖅'],
    ['𝔄', '𝔅', 'ℭ', '𝔇', '𝔈', '𝔉', '𝔊', 'ℌ', '𝔗', 'ℑ', '𝔎', '𝔏', '𝔐', '𝔑', '𝔒', '𝔓', '𝔔', 'ℜ', '𝔖', '𝔍', '𝔘', '𝔙', '𝔚', '𝔛', 'ϒ', 'ℨ'],
    ['𝘼', '𝘽', '𝘾', '𝘿', '𝙀', '𝙁', '𝙂', '𝙃', '𝙄', '𝙅', '𝙆', '𝙇', '𝙈', '𝙉', '𝙊', '𝙋', '𝙌', '𝙍', '𝙎', '𝙏', '𝙐', '𝙑', '𝙒', '𝙓', '𝙔', '𝙕'],
    ['𝘈', '𝘉', '𝘊', '𝘋', '𝘌', '𝘍', '𝘎', '𝘏', '𝘐', '𝘑', '𝘒', '𝘓', '𝘔', '𝘕', '𝘖', '𝘗', '𝘘', '𝘙', '𝘚', '𝘛', '𝘜', '𝘝', '𝘞', '𝘟', '𝘠', '𝘡'],
    ['闩', '乃', '亡', '刀', '乇', '下', '彑', '⼶', '工', '亅', '片', '乚', '从', '力', '口', 'ㄗ', '디', '尺', '丂', '亇', '凵', 'ム', '山', '乂', '丫', '乙'],
    ['ል', 'ፎ', 'ር', 'ሏ', 'ይ', 'ፑ', 'ፘ', 'ዘ', 'ፗ', 'ጋ', 'ኸ', 'ረ', 'ጠ', 'በ', 'ዐ', 'የ', 'ዓ', 'ዩ', 'ና', 'ፐ', 'ሀ', 'ህ', 'ሠ', 'ጰ', 'ሃ', 'ጓ'],
    ['Ꭺ', 'Ᏼ', 'Ꮯ', 'Ꭰ', 'Ꭼ', 'Ꮀ', 'Ꮐ', 'Ꮋ', 'Ꮖ', 'Ꭻ', 'Ꮶ', 'Ꮮ', 'Ꮇ', 'N', 'Ꮻ', 'Ꮲ', 'Ꭷ', 'Ꮢ', 'Ꮪ', 'Ꭲ', 'Ꮜ', 'Ꮩ', 'Ꮃ', 'Ꮱ', 'Ꭹ', 'Ꮓ'],
    ['Ѧ', 'Ɓ', 'Ҁ', 'Δ', 'Σ', 'Ӻ', 'Ǥ', 'ⴼ', 'Ϊ', 'Ɉ', 'Ҟ', 'Ɫ', 'ᛖ', 'Ɲ', 'Ѳ', 'Ƥ', 'Ǫ', 'Ʀ', 'Ƽ', 'Ϯ', 'Ʋ', 'Ѵ', 'Ѡ', 'Ӽ', 'Ƴ', 'Ⱬ'],
    ['ꁲ', 'ꃃ', 'ꊐ', 'ꅓ', 'ꂅ', 'ꊰ', 'ꁅ', 'ꍬ', 'ꀤ', 'ꀭ', 'ꂪ', '꒒', 'ꂵ', 'ꊮ', 'ꏿ', 'ꉣ', 'ꐎ', 'ꉸ', 'ꌗ', 'ꉢ', 'ꏵ', 'ꏝ', 'ꅐ', 'ꉧ', 'ꌦ', 'ꏣ'],
    ['ᗩ', 'ᗷ', 'ᑕ', 'ᗪ', 'ᕮ', 'ᖴ', 'ᘜ', 'ᕼ', 'ᖗ', 'ᒍ', 'ᖉ', 'ᒐ', 'ᗰ', 'ᘉ', 'ᗝ', 'ᑭ', 'ᘯ', 'ᖇ', 'ᔕ', 'ᙢ', 'ᑌ', 'ᕓ', 'ᗯ', '᙭', 'ᖻ', 'ᘔ'],
    ['ᗩ', 'ᗷ', 'ᑕ', 'ᗞ', 'ᗴ', 'ᖴ', 'Ꮐ', 'ᕼ', 'Ꮖ', 'ᒍ', 'Ꮶ', 'Ꮮ', 'ᗰ', 'ᑎ', 'ᝪ', 'ᑭ', 'ᑫ', 'ᖇ', 'ᔑ', 'Ꭲ', 'ᑌ', 'ᐯ', 'ᗯ', '᙭', 'Ꭹ', 'Ꮓ'],
    ['Ꭿ', 'Ᏸ', 'ℭ', 'ⅅ', '℮', 'ℱ', 'Ꮹ', 'ℋ', 'Ꮠ', 'ℐ', 'Ӄ', 'ℒ', 'ℳ', 'ℕ', 'Ꮎ', '⅌', 'ℚ', 'ℜ', 'Ꮥ', 'Ƭ', 'Ʋ', 'Ꮙ', 'Ꮤ', 'ℵ', 'Ꮍ', 'ℤ'],
    ['ᚣ', 'ᛒ', 'ᛈ', 'ᚦ', 'ᛊ', 'ᚫ', 'ᛩ', 'ᚻ', 'ᛨ', 'ᛇ', 'ᛕ', 'ᚳ', 'ᚥ', 'ᚺ', 'θ', 'ᚹ', 'Ԛ', 'ᚱ', 'ᛢ', 'ᛠ', 'ᛘ', 'ᛉ', 'ᚠ', 'ᚷ', 'ᚴ', 'Z'],
    ['𝓐', '𝓑', '𝓒', '𝓓', '𝓔', '𝓕', '𝓖', '𝓗', '𝓘', '𝓙', '𝓚', '𝓛', '𝓜', '𝓝', '𝓞', '𝓟', '𝓠', '𝓡', '𝓢', '𝓣', '𝓤', '𝓥', '𝓦', '𝓧', '𝓨', '𝓩'],
    ['𝒜', 'ℬ', '𝒞', '𝒟', 'ℰ', 'ℱ', '𝒢', 'ℋ', 'ℐ', '𝒥', '𝒦', 'ℒ', 'ℳ', '𝒩', '𝒪', '𝒫', '𝒬', 'ℛ', '𝒮', '𝒯', '𝒰', '𝒱', '𝒲', '𝒳', '𝒴', '𝒵'],
    ['𝔸', '𝔹', 'ℂ', '𝔻', '𝔼', '𝔽', '𝔾', 'ℍ', '𝕀', '𝕁', '𝕂', '𝕃', '𝕄', 'ℕ', '𝕆', 'ℙ', 'ℚ', 'ℝ', '𝕊', '𝕋', '𝕌', '𝕍', '𝕎', '𝕏', '𝕐', 'ℤ'],
    ['Ａ', 'Ｂ', 'Ｃ', 'Ｄ', 'Ｅ', 'Ｆ', 'Ｇ', 'Ｈ', 'Ｉ', 'Ｊ', 'Ｋ', 'Ｌ', 'Ｍ', 'Ｎ', 'Ｏ', 'Ｐ', 'Ｑ', 'Ｒ', 'Ｓ', 'Ｔ', 'Ｕ', 'Ｖ', 'Ｗ', 'Ｘ', 'Ｙ', 'Ｚ'],
    ['ᴀ', 'ʙ', 'ᴄ', 'ᴅ', 'ᴇ', 'ғ', 'ɢ', 'ʜ', 'ɪ', 'ᴊ', 'ᴋ', 'ʟ', 'ᴍ', 'ɴ', 'ᴏ', 'ᴘ', 'ǫ', 'ʀ', 's', 'ᴛ', 'ᴜ', 'ᴠ', 'ᴡ', 'x', 'ʏ', 'ᴢ'],
    ['𝙰', '𝙱', '𝙲', '𝙳', '𝙴', '𝙵', '𝙶', '𝙷', '𝙸', '𝙹', '𝙺', '𝙻', '𝙼', '𝙽', '𝙾', '𝙿', '𝚀', '𝚁', '𝚂', '𝚃', '𝚄', '𝚅', '𝚆', '𝚇', '𝚈', '𝚉'],
    ['ᴬ', 'ᴮ', 'ᶜ', 'ᴰ', 'ᴱ', 'ᶠ', 'ᴳ', 'ᴴ', 'ᴵ', 'ᴶ', 'ᴷ', 'ᴸ', 'ᴹ', 'ᴺ', 'ᴼ', 'ᴾ', 'ᵟ', 'ᴿ', 'ˢ', 'ᵀ', 'ᵁ', 'ⱽ', 'ᵂ', 'ˣ', 'ᵞ', 'ᶻ'],
    ['Ⓐ', 'Ⓑ', 'Ⓒ', 'Ⓓ', 'Ⓔ', 'Ⓕ', 'Ⓖ', 'Ⓗ', 'Ⓘ', 'Ⓙ', 'Ⓚ', 'Ⓛ', 'Ⓜ', 'Ⓝ', 'Ⓞ', 'Ⓟ', 'Ⓠ', 'Ⓡ', 'Ⓢ', 'Ⓣ', 'Ⓤ', 'Ⓥ', 'Ⓦ', 'Ⓧ', 'Ⓨ', 'Ⓩ'],
    ['🄰', '🄱', '🄲', '🄳', '🄴', '🄵', '🄶', '🄷', '🄸', '🄹', '🄺', '🄻', '🄼', '🄽', '🄾', '🄿', '🅀', '🅁', '🅂', '🅃', '🅄', '🅅', '🅆', '🅇', '🅈', '🅉'],
    ['🅐', '🅑', '🅒', '🅓', '🅔', '🅕', '🅖', '🅗', '🅘', '🅙', '🅚', '🅛', '🅜', '🅝', '🅞', '🅟', '🅠', '🅡', '🅢', '🅣', '🅤', '🅥', '🅦', '🅧', '🅨', '🅩'],
    ['🅰', '🅱', '🅲', '🅳', '🅴', '🅵', '🅶', '🅷', '🅸', '🅹', '🅺', '🅻', '🅼', '🅽', '🅾', '🅿', '🆀', '🆁', '🆂', '🆃', '🆄', '🆅', '🆆', '🆇', '🆈', '🆉'],
    ['Λ', 'B', 'ᄃ', 'D', 'Σ', 'F', 'G', '𝙃', 'I', 'J', 'K', 'ᄂ', 'M', 'П', 'Ө', 'P', 'Q', 'Я', 'Ƨ', 'Ƭ', 'Ц', 'V', 'Щ', 'X', 'Y', 'Z'],
    ['𝒶', '𝒷', '𝒸', '𝒹', '𝑒', '𝒻', '𝑔', '𝒽', '𝓁', '𝒿', '𝓀', '𝓁', '𝓂', '𝓃', '𝑜', '𝓅', '𝒬', '𝓇', '𝓈', '𝓉', '𝓊', '𝓋', '𝓌', '𝓍', '𝓎', '𝓏'],
    ['𝒶', '𝒷', '𝒸', '𝒹', '𝑒', '𝒻', '𝑔', '𝒽', '𝓁', '𝒿', '𝓀', '𝓁', '𝓂', '𝓃', '𝑜', '𝓅', '𝒬', '𝓇', '𝓈', '𝓉', '𝓊', '𝓋', '𝓌', '𝓍', '𝓎', '𝓏'],
    ['𝕬', '𝕭', '𝕮', '𝕯', '𝕰', '𝕱', '𝕲', '𝕳', '𝕿', '𝕴', '𝕶', '𝕷', '𝕸', '𝕹', '𝕺', '𝕻', '𝕼', '𝕽', '𝕾', '𝕵', '𝖀', '𝖁', '𝖂', '𝖃', '𝚼', '𝖅'],
    ['𝔄', '𝔅', 'ℭ', '𝔇', '𝔈', '𝔉', '𝔊', 'ℌ', '𝔗', 'ℑ', '𝔎', '𝔏', '𝔐', '𝔑', '𝔒', '𝔓', '𝔔', 'ℜ', '𝔖', '𝔍', '𝔘', '𝔙', '𝔚', '𝔛', 'ϒ', 'ℨ'],
    ['𝒂', '𝒃', '𝒄', '𝒅', '𝒆', '𝒇', '𝒈', '𝒉', '𝒊', '𝒋', '𝒌', '𝒍', '𝒎', '𝒏', '𝒐', '𝒑', '𝒒', '𝒓', '𝒔', '𝒕', '𝒖', '𝒗', '𝒘', '𝒙', '𝒚', '𝒛'],
    ['𝐴', '𝐵', '𝐶', '𝐷', '𝐸', '𝐹', '𝐺', '𝐻', '𝐼', '𝐽', '𝐾', '𝐿', '𝑀', '𝑁', '𝑂', '𝑃', '𝑄', '𝑅', '𝑆', '𝑇', '𝑈', '𝑉', '𝑊', '𝑋', '𝑌', '𝑍'],
    ['Ѧ', 'Ɓ', 'Ҁ', 'Δ', 'Σ', 'Ӻ', 'Ǥ', 'ⴼ', 'Ϊ', 'Ɉ', 'Ҟ', 'Ɫ', 'ᛖ', 'Ɲ', 'Ѳ', 'Ƥ', 'Ǫ', 'Ʀ', 'Ƽ', 'Ϯ', 'Ʋ', 'Ѵ', 'Ѡ', 'Ӽ', 'Ƴ', 'Ⱬ'],
    ['ᗩ', 'ᗷ', 'ᑕ', 'ᗪ', 'ᕮ', 'ᖴ', 'ᘜ', 'ᕼ', 'ᖗ', 'ᒍ', 'ᖉ', 'ᒐ', 'ᗰ', 'ᘉ', 'ᗝ', 'ᑭ', 'ᘯ', 'ᖇ', 'ᔕ', 'ᙢ', 'ᑌ', 'ᕓ', 'ᗯ', '᙭', 'ᖻ', 'ᘔ'],
    ['Ａ', 'Ｂ', 'Ｃ', 'Ｄ', 'Ｅ', 'Ｆ', 'Ｇ', 'Ｈ', 'Ｉ', 'Ｊ', 'Ｋ', 'Ｌ', 'Ｍ', 'Ｎ', 'Ｏ', 'Ｐ', 'Ｑ', 'Ｒ', 'Ｓ', 'Ｔ', 'Ｕ', 'Ｖ', 'Ｗ', 'Ｘ', 'Ｙ', 'Ｚ'],
];
const navBtn = document.querySelector('.nav-toggle')
const navHeader = document.querySelector('.nav-header ul')
const input = document.getElementById('inputText')
const Allsec = document.querySelector('.allSection')
const sec = document.querySelector('.sec ')

let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function Start() {
    if (input.value.toString() !== '')
        Allsec.textContent = '';

    for (let i = 0; i < fonts.length; i++) {
        let ShowNewFont = input.value.toLowerCase().replaceArray(alphabet, fonts[i]);
        const section = document.createElement("section");
        const div = document.createElement("div");
        const newP = document.createElement("p");
        const span = document.createElement("span");
        const newContent = document.createTextNode(ShowNewFont)
        newP.setAttribute("class", "new-text")
        div.setAttribute("class", "Font")
        span.setAttribute("class", "copy")
        section.addEventListener('click',(e) =>{
        navigator.clipboard.writeText(e.target.innerText).then(()=>{
            console.log(e.target.innerText);
            div.insertBefore(span, div.firstChild);
            span.classList.add('paste')
            setTimeout(()=>span.classList.remove('paste'),500)
        })
        // console.log(font);
    
        })

        newP.appendChild(newContent)
        Allsec.appendChild(div);
        section.appendChild(newP);
        div.appendChild(section)    
        span.innerHTML= 'copyid'
    
    }
}

String.prototype.replaceArray = function (find, replace) {
    let replaceString = this;
    for (let i = 0; i < find.length; i++) {
        replaceString = replaceString.replaceAll(find[i], replace[i])
    }
    return replaceString;
}

//nav btn
navBtn.addEventListener('click', handeler);
function handeler() {
    navHeader.classList.toggle("show-links")
}

//COPY TEXT
