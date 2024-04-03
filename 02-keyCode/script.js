const keyCodes = (e) => {
  const insert = document.getElementById('insert');
  insert.textContent = '';
  
  const keyCodes = {
    'e.key' : e.key === ' ' ? 'Space' : e.key,
    'e.keyCode': e.keyCode,
    'e.code': e.code
  }
  for (let [key, value] of Object.entries(keyCodes)) {
    const div = document.createElement('div');
    div.className = 'key';
    // div.innerText = keyCodes[key];
    div.innerText = value;

    const small = document.createElement('small');
    small.textContent = key;

    div.appendChild(small);
    insert.appendChild(div)
    
    
  }
}

window.addEventListener('keyup', keyCodes)