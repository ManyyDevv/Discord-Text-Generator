const textInput = document.getElementById('textInput');
const emojiInput = document.getElementById('emojiInput');
const resultDiv = document.getElementById('result');
const copyBtn = document.getElementById('copyBtn');

function toBoldUnicode(str) {
  return str.replace(/[a-zA-Z0-9]/g, function(c) {
    const code = c.charCodeAt(0);
    if(code >= 97 && code <= 122) return String.fromCodePoint(0x1D41A + (code - 97)); 
    if(code >= 65 && code <= 90) return String.fromCodePoint(0x1D400 + (code - 65));   
    if(code >= 48 && code <= 57) return String.fromCodePoint(0x1D7CE + (code - 48)); 
    return c;
  });
}

function updateResult() {
  const text = textInput.value.trim();
  const emoji = emojiInput.value.trim() || '';
  if(text) {
    resultDiv.textContent = `『${emoji}』${toBoldUnicode(text)}`;
  } else {
    resultDiv.textContent = '';
  }
}

textInput.addEventListener('input', updateResult);
emojiInput.addEventListener('input', updateResult);

// Copier et feedback visuel
copyBtn.addEventListener('click', () => {
  if(resultDiv.textContent) {
    navigator.clipboard.writeText(resultDiv.textContent).then(() => {

      copyBtn.textContent = "Copied !";
      copyBtn.style.backgroundColor = "#43b581"; 


      setTimeout(() => {
        copyBtn.textContent = "Copy";
        copyBtn.style.backgroundColor = "#7289da";
      }, 2000);
    });
  }
});