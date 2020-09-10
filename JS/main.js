const $btn = document.getElementById('btn-kick')
const character = {
    name: 'Pikachu',
    defaultHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-character'),
    elProgressbar: document.getElementById('progressbar-character'),
}
const enemy = {
    name: 'Charmander',
    defaultHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-enemy'),
    elProgressbar: document.getElementById('progressbar-enemy'),
}
$btn.addEventListener('click', function () {
    console.log('kick');
    changeHP(random(10), character);
    changeHP(random(10), enemy);
});
$btn.addEventListener('click', function () {
    console.log('extra kick');
    changeHP(random(20), character);
    changeHP(random(20), enemy);
  });
  const doubleClickThreshold = 250;
  console.log(doubleClickThreshold);
  const clicker = document.getElementById('click');
  const output = document.getElementById('output');
  
  function createClicker(clickFn, dblClickFn) {
    let timer;
    return function (event) {
      const context = character;
  
      if (timer) {
        clearTimeout(timer);
        dblClickFn.call(context, event);
        timer = null;
        return;
      }
  
      timer = setTimeout(function (ctx) {
        timer = null;
        clickFn.call(ctx, event);
      }, doubleClickThreshold, context)
    }
  }
  
  function onClick(event) {
    output.innerHTML = 'click';
  }
  
  function onDoubleClick(event) {
    output.innerHTML = 'double click';
  }      
  
  const clickHandler = createClicker(onClick, onDoubleClick);
  click.onclick = clickHandler;
        
  function init() {
    console.log('Start Game');
    character.renderHP.apply(character);
    enemy.renderHP.apply(enemy);
}
function renderHP(person) {
    renderHPLife(person);
    renderProgressbarHP(person);
}
function renderHPLife(person) {
   person.elHP.innerText = person.damageHP + ' / ' + person.damageHP;
} 
function renderProgressbarHP(person) {
    person.elProgressbar.style.width = this.damageHP + '%';
}
function changeHP(count, person) {
    if (person.damageHP < count) {
        person.damageHP = 0;
        alert('Бедный'+ this +'проиграл бой!');
        $btn.disabled = true;
    } else {
        person.damageHP -= count;
    }

    renderHP(person);
}
function random(num) {
    return Math.ceil(Math.random()* num);
}
init();