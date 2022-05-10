
import "./main.scss"





import Keyboard from './keyboard';

import defaultLayout from './defaultLayout.json';
import keyCapsUS from './keyCaps_US.json';
import keyCapsRU from './keyCaps_RU.json';
class TextArea {
    constructor() {
      const el = document.createElement('textarea');
      el.classList.add('textarea', 'section');
      el.disabled = true;
      el.rows = 10;
      this.element = el;
    }
  
    writeChar(ch) {
      this.element.value += ch;
    }
  
    removeChar() {
      const oldValue = this.element.value;
      this.element.value = oldValue.slice(0, -1);
    }
  
    render({ element: rootElement }) {
      rootElement.append(this.element);
    }
  }
document.addEventListener('DOMContentLoaded', () => {
  const textarea = new TextArea();
  textarea.render({ element: document.body });

  const capsCollection = [
    {
      langCode: 'US',
      content: keyCapsUS,
    },
    {
      langCode: 'RU',
      content: keyCapsRU,
    },
  ];

  const keyboard = new Keyboard(defaultLayout, capsCollection);
  keyboard.attachOutput(textarea);
  keyboard.render({ element: document.body });

  const langNotice = document.createElement('p');
  langNotice.classList.add('notice', 'section');
  langNotice.innerHTML = 'Layout Change: Hold <kbd>Alt</kbd> + Tap <kbd>Shift</kbd>';

  document.body.append(langNotice);

  const osNotice = document.createElement('p');
  osNotice.classList.add('notice', 'section');
  osNotice.innerHTML = 'OS: Windows 11';

  document.body.append(osNotice);
});

