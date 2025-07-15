
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.buttons button');
const themeButtons = document.querySelectorAll('.theme-btn');
const html = document.documentElement;

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const value = btn.textContent;

    if (value === 'DEL') {
     
      display.value = display.value.slice(0, -1);
    } else if (value === 'RESET') {
    
      display.value = '';
    } else if (value === '=') {
      try {
        
        const result = eval(display.value.replace(/x/g, '*'));
        display.value = result;
      } catch {
        display.value = 'Erreur';
      }
    } else {

      display.value += value;
    }
  });
});

themeButtons.forEach(button => {
  button.addEventListener('click', () => {
    const theme = button.getAttribute('data-theme');
    html.setAttribute('data-theme', theme);
  });
});
