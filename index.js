import {
  russianUpperCase, russianLowerCase, englishLowerCase, englishUpperCase, keyCodeList
} from './buttons.js';
let wrapper = document.createElement('div');
wrapper.classList.add('wrapper');
document.body.append(wrapper);
wrapper.insertAdjacentHTML('afterbegin', '<textarea class="input" autofocus></textarea>');
wrapper.insertAdjacentHTML('beforeend', '<div class="keyboard"></div>');
wrapper.insertAdjacentHTML('beforeend', '<p class="manual">Переключение языка виртуальной клавиатуры происходит нажатием клавиш LeftShift и LeftCtrl на физической клавиатуре. Клавиатура была сделана в системе MacOs.</p>');
let inputZone = document.querySelector('.input');
let keyboardZone = document.querySelector('.keyboard');
// добавления кнопок в одномерный массив и создание строк клавы
let englishLowerCaseList = [];
// eslint-disable-next-line no-plusplus
for (let j = 0; j < englishLowerCase.length; j++) {
  let row = document.createElement('div');
  row.classList.add('rows');
  keyboardZone.append(row);
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < englishLowerCase[j].length; i++) {
    let key = document.createElement('span');
    key.classList.add('button');
    row.append(key);
    englishLowerCaseList.push(englishLowerCase[j][i]);
  }
}

let buttons = document.querySelectorAll('span');
function addButtons(letters) { // заполняем клавиши символами
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].innerHTML = letters[i];
  }
}
// записываем в сторейж язык
let langStor;
let userLang;
let language = JSON.parse(localStorage.getItem(userLang));
if (!language) {
  addButtons(englishLowerCaseList);
} else {
  addButtons(language);
}

let downArrow = buttons[62];
let upArrow = buttons[61];
let leftArrow = buttons[60];
let rightArrow = buttons[63];
let enter = buttons[27];
let backspace = buttons[13];
let tab = buttons[14];
let capsLock = buttons[28];
let altRight = buttons[59];
let cmdLeft = buttons[56];
let cmdRight = buttons[58];
let space = buttons[57];
let shiftLeft = buttons[41];
let shiftRight = buttons[53];
let ctrlLeft = buttons[54];
let altLeft = buttons[55];
leftArrow.classList.add('arrow');
leftArrow.classList.add('arrowLeft');
leftArrow.classList.add('service');
rightArrow.classList.add('arrow');
rightArrow.classList.add('arrowRight');
rightArrow.classList.add('service');
downArrow.classList.add('arrow');
downArrow.classList.add('arrowDown');
downArrow.classList.add('service');
upArrow.classList.add('arrow');
upArrow.classList.add('arrowUp');
upArrow.classList.add('service');
altLeft.classList.add('service');
altRight.classList.add('altRight');
altRight.classList.add('service');
cmdLeft.classList.add('cmdLeft');
cmdLeft.classList.add('service');
cmdRight.classList.add('cmdRight');
cmdRight.classList.add('service');
backspace.classList.add('backspace');
backspace.classList.add('service');
enter.classList.add('enter');
enter.classList.add('service');
tab.classList.add('tab');
tab.classList.add('service');
capsLock.classList.add('capsLock');
capsLock.classList.add('service');
shiftLeft.classList.add('shiftLeft');
shiftLeft.classList.add('service');
shiftRight.classList.add('shiftRight');
shiftRight.classList.add('service');
ctrlLeft.classList.add('ctrlLeft');
ctrlLeft.classList.add('service');
altLeft.classList.add('altLeft');
space.classList.add('space');

// добавление эффекта нажатия
// eslint-disable-next-line func-names
document.addEventListener('keydown', function (e) {
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < buttons.length; i++) {
    // eslint-disable-next-line default-case
    switch (e.code) {
      case keyCodeList[i]:
        buttons[i].classList.add('button__push');
        break;
    }
  }
  // eslint-disable-next-line eqeqeq
  if (e.code == 'ShiftLeft' && (e.ctrlKey || e.metaKey)) {
    if (buttons[0].innerHTML === '§') {
      localStorage.clear();
      langStor = russianLowerCase;
      localStorage.setItem(userLang, JSON.stringify(langStor));
      language = JSON.parse(localStorage.getItem(userLang));
      addButtons(langStor);
    } else {
      localStorage.clear();
      langStor = englishLowerCaseList;
      localStorage.setItem(userLang, JSON.stringify(langStor));
      language = JSON.parse(localStorage.getItem(userLang));
      addButtons(langStor);
    }
  }
  // eslint-disable-next-line eqeqeq
  if (e.code == 'ShiftLeft' || e.code == 'CapsLock' || e.code == 'ShiftRight') {
    if (buttons[0].innerHTML === '§' || buttons[0].innerHTML === '±') {
      addButtons(englishUpperCase);
    } else {
      addButtons(russianUpperCase);
    }
  }
});
// eslint-disable-next-line func-names
document.addEventListener('keyup', function (e) {
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < buttons.length; i++) {
    // eslint-disable-next-line default-case
    switch (e.code) {
      case keyCodeList[i]: buttons[i].classList.remove('button__push');
        break;
    }
  }
  // eslint-disable-next-line eqeqeq
  if (e.code == 'ShiftLeft' || e.code == 'CapsLock' || e.code == 'ShiftRight') {
    if (buttons[0].innerHTML === '±') {
      addButtons(englishLowerCaseList);
    } else {
      addButtons(russianLowerCase);
    }
  }
});
// реализация ввода символов при нажатии на виртуальную клавиатуру
// eslint-disable-next-line func-names
keyboardZone.addEventListener('click', function (e) {
  let cursPos = inputZone.selectionStart;
  const cursPosEnd = inputZone.selectionEnd;
  const beforeText = inputZone.value.slice(0, cursPos);
  const afterText = inputZone.value.slice(cursPos);

  if (e.target.classList.contains('backspace')) {
    if (cursPosEnd > cursPos) {
      inputZone.value = inputZone.value.slice(0, cursPos) + inputZone.value.slice(cursPosEnd);
    } else {
      inputZone.value = beforeText.slice(0, -1) + afterText;
      cursPos = cursPos > 0 ? cursPos - 1 : 0;
    }
  }

  if (e.target.tagName === 'SPAN' && e.target.classList.contains('service') === false) {
    inputZone.value += e.target.innerHTML;
    cursPos += 1;
  }
  if (e.target.classList.contains('arrowRight')) {
    cursPos += 1;
  }
  if (e.target.classList.contains('arrowDown')) {
    const lines = inputZone.value.split('\n');
    const currentLineIndex = inputZone.value.substr(0, cursPos).split('\n').length - 1;
    const nextLineIndex = currentLineIndex + 1;
    if (nextLineIndex < lines.length) {
      const nextLineLength = lines[nextLineIndex].length;
      const newPos = Math.min(cursPos + nextLineLength + 1, inputZone.value.length);
      cursPos = newPos;
    }
  }
  if (e.target.classList.contains('arrowUp')) {
    const lines = inputZone.value.split('\n');
    const currentLineIndex = inputZone.value.substr(0, cursPos).split('\n').length - 1;
    const currentLineLength = lines[currentLineIndex].length;
    const prevLineIndex = currentLineIndex - 1;
    if (prevLineIndex >= 0) {
      const prevLineLength = lines[prevLineIndex].length;
      const newPos = Math.min(
        cursPos - currentLineLength - 1,
        inputZone.value.length - prevLineLength - 1
      );
      cursPos = newPos;
    }
  }
  if (e.target.classList.contains('arrowLeft')) {
    cursPos -= 1;
  }
  if (e.target.classList.contains('enter')) {
    inputZone.value = `${beforeText}\n${afterText}`;
    cursPos += 1;
  }
  if (e.target.classList.contains('tab')) {
    inputZone.value = `${beforeText}\t${afterText}`;
    cursPos += 1;
  }

  inputZone.selectionStart = cursPos;
  inputZone.selectionEnd = cursPos;
  inputZone.blur();
  inputZone.focus();
});
