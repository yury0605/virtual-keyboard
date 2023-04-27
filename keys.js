class Key {
    constructor (level, nameKey, options = {}) {
        this.level = level;
        this.nameKey = nameKey;
        this.options = options;
    }
}

let keys = [
    new Key(1, 'Tilda', {
        lang: {
            en: ['`', '~'], ru: ['ё', 'Ё']
        },
        service: false, caps: false
    }),

    new Key(1, '1', {
        lang: {
          en: ['1', '!'], ru: ['1', '!']
        },
        service: false, caps: false
      }),

      new Key(1, '2', {
        lang: {
          en: ['2', '@'], ru: ['2', '"']
        },
        service: false, caps: false
      }),

      new Key(1, '3', {
        lang: {
          en: ['3', '#'], ru: ['3', '№']
        },
        service: false, caps: false
      }),

      new Key(1, '4', {
        lang: {
          en: ['4', '$'], ru: ['4', ';']
        },
        service: false, caps: false
      }),

      new Key(1, '5', {
        lang: {
          en: ['5', '%'], ru: ['5', '%']
        },
        service: false, caps: false
      }),

      new Key(1, '6', {
        lang: {
          en: ['6', '^'], ru: ['6', ':']
        },
        service: false, caps: false
      }),

      new Key(1, '7', {
        lang: {
          en: ['7', '&'], ru: ['7', '?']
        },
        service: false, caps: false
      }),

      new Key(1, '8', {
        lang: {
          en: ['8', '*'], ru: ['8', '*']
        },
        service: false, caps: false
      }),

      new Key(1, '9', {
        lang: {
          en: ['9', '('], ru: ['9', '(']
        },
        service: false, caps: false
      }),

      new Key(1, '0', {
        lang: {
          en: ['0', ')'], ru: ['0', ')']
        },
        service: false, caps: false
      }),

      new Key(1, 'dash', {
        lang: {
          en: ['-', '_'], ru: ['-', '_']
        },
        service: false, caps: false
      }),
      new Key(1, 'equal', {
        lang: {
          en: ['=', '+'], ru: ['=', '+']
        },
        service: false, caps: false
      }),
      new Key(1, 'backspace', {
        lang: {
          en: ['Backspace', 'Backspace'], ru: ['Backspace', 'Backspace']
        },
        service: {notPrint: true}, caps: false
      }),

      new Key(2, 'Tab', {
        lang: {
          en: ['Tab', 'Tab'], ru: ['Tab', 'Tab']
        },
        service: {symbol: '\t'}, caps: false
      }),

      new Key(2, 'keyQ', {
        lang: {
          en: ['q', 'Q'], ru: ['й', 'Й']
        },
        service: false, caps: true
      }),

      new Key(2, 'keyW', {
        lang: {
          en: ['w', 'W'], ru: ['ц', 'Ц']
        },
        service: false, caps: true
      }),

      new Key(2, 'keyE', {
        lang: {
          en: ['e', 'E'], ru: ['у', 'У']
        },
        service: false, caps: true
      }),

      new Key(2, 'keyR', {
        lang: {
          en: ['r', 'R'], ru: ['к', 'К']
        },
        service: false, caps: true
      }),

      new Key(2, 'keyT', {
        lang: {
          en: ['t', 'T'], ru: ['е', 'Е']
        },
        service: false, caps: true
      }),

      new Key(2, 'keyY', {
        lang: {
          en: ['y', 'Y'], ru: ['н', 'Н']
        },
        service: false, caps: true
      }),

      new Key(2, 'keyU', {
        lang: {
          en: ['u', 'U'], ru: ['г', 'Г']
        },
        service: false, caps: true
      }),

      new Key(2, 'keyI', {
        lang: {
          en: ['i', 'I'], ru: ['ш', 'Ш']
        },
        service: false, caps: true
      }),

      new Key(2, 'keyO', {
        lang: {
          en: ['o', 'O'], ru: ['щ', 'Щ']
        },
        service: false, caps: true
      }),

      new Key(2, 'keyP', {
        lang: {
          en: ['p', 'P'], ru: ['з', 'З']
        },
        service: false, caps: true
      }),

      new Key(2, 'startBracket', {
        lang: {
          en: ['[', '{' +
          ''], ru: ['х', 'Х']
        },
        service: false, caps: true
      }),

      new Key(2, 'finishBracket', {
        lang: {
          en: [']', '}'], ru: ['ъ', 'Ъ']
        },
        service: false, caps: true
      }),

      new Key(2, 'leftSlash', {
        lang: {
          en: ['\\', '|'], ru: ['\\', '/']
        },
        service: false, caps: false
      }),

      new Key(2, 'del', {
        lang: {
          en: ['Del', 'Del'], ru: ['Del', 'Del']
        },
        service: {notPrint: true}, caps: false
      }),
]