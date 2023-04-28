let wrapper = document.createElement('div');
wrapper.classList.add('wrapper');
document.body.append(wrapper);

wrapper.insertAdjacentHTML('afterbegin', '<textarea class="input" autofocus></textarea>');
wrapper.insertAdjacentHTML('beforeend', '<div class="keybord-area"></div>');
wrapper.insertAdjacentHTML('beforeend', '<p class="instruction">Переключение языка ввода виртуальной клавиатуры происходит одновременным нажатием клавиш LeftShift и LeftCtrl на физической клавиатуре. Клавиатура была сделана в системе MacOs.</p>');

let keybordArea = document.querySelector('.keybord-area');
let inputArea = document.querySelector('.input');


// массив английской раскладки символов lowercase 
const englishLowercase = [
    ['§', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', '&#8592'],
    ['&#8677', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']','&#8626'],
    ['&#8682', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', '\\'],
    ['&#8679', '`', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '&#8679'],
    ['ctrl', 'alt', 'cmd', ' ', 'cmd', 'alt', '&#9666', '&#9662', '&#9662', '&#9656']
];

const englishUppercase = [
    '±', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '&#8592',
    '&#8677', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}','&#8626',
    '&#8682', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', '|',
    '&#8679', '~', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '&#8679',
    'ctrl', 'alt', 'cmd', ' ', 'cmd', 'alt', '&#9666', '&#9662', '&#9662', '&#9656'
];

const russianLowercase = [
    'ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', '&#8592',
    '&#8677', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '&#8626',
    '&#8682', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', '\\',
    '&#8679', ']', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '&#8679',
    'ctrl', 'alt', 'cmd', ' ', 'cmd', 'alt', '&#9666', '&#9662', '&#9662', '&#9656'
];

const russianUppercase = [
    'Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', '&#8592',
    '&#8677', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '&#8626',
    '&#8682', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', '/',
    '&#8679', '[', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', '&#8679',
    'ctrl', 'alt', 'cmd', ' ', 'cmd', 'alt', '&#9666', '&#9662', '&#9662', '&#9656'
];


// массив кодов физической клавиатуры
const keyCodeList = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace',
                      'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Enter',
                      'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Backslash',
                      'ShiftLeft', 'IntlBackslash', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ShiftRight',
                      'ControlLeft', 'AltLeft', 'MetaLeft', 'Space', 'MetaRight', 'AltRight', 'ArrowLeft', 'ArrowUp', 'ArrowDown', 'ArrowRight'
];


// перебор элементов массива символов, генерация элементов DOM, перевод englishLowercase в одномерный массив

let englishLowercaseList = [];

for (let j = 0; j < englishLowercase.length; j++){
    let keybordRow = document.createElement('div');
    keybordRow.classList.add('keybord-row')
    keybordArea.append(keybordRow);

    for (let i=0; i < englishLowercase[j].length; i++){
        let key = document.createElement('span');
        key.classList.add('key');
        keybordRow.append(key);
        englishLowercaseList.push(englishLowercase[j][i])
    }

}

// создание коллекции элементов DOM клавиши и объявление функциональных клавиш и присвоение стилей им:

let keys = document.querySelectorAll('span');

// функция заполнения клавиш символами

function fillKeys (symbols){
    for(let i = 0; i < keys.length; i++){
        keys[i].innerHTML = symbols[i];
    }
}

// сохранение раскладки в localStorage

let lang;
let languageStorage;
let language = JSON.parse(localStorage.getItem(lang));

if (!language){
    fillKeys(englishLowercaseList)
} else {
    fillKeys(language);
}
