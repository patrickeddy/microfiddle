function getCode() {
  const params = new URLSearchParams(window.location.search)
  return params.get('c')
}

function runCode() {
  const codeEditor = document.querySelector('#code-editor-ta')
  const codeString = codeEditor.value
  if (getCode() === codeString) {
    eval(codeString)
  } else {
    const params = new URLSearchParams(window.location.search)
    params.set('c', codeString)
    window.location.search = params.toString()
  }
}

function renderCodeEditor() {
  return `
    <div id="code-editor">
      <button onclick="runCode()">Run</button>
      <textarea id="code-editor-ta" placeholder="Code goes here.">${getCode()}</textarea>
    </div>
  `
}

function renderConsole() {
  return `
    <div id="console">
      <button onclick="clearConsole()">Clear</button>
    </div>
  `
}

function clearConsole() {
  const consoleElem = document.querySelector('#console')
  consoleElem.outerHTML = renderConsole()
}

function render() {
  const rootElem = document.querySelector('#root')
  rootElem.innerHTML = `
    <div id="container">
      ${renderCodeEditor()}
      ${renderConsole()}
    </div>
  `
}

function consoleLog(type, log) {
  const console = document.querySelector('#console')
  let out = ''
  if (type === 'log') {
    out = `<span>${log}</span>`
  } else if (type === 'warn') {
    out = `<span style="background:lightyellow;">${log}</span>`
  } else if (type === 'error') {
    out = `<span style="background:red;color:white;">${log}</span>`
  }
  console.innerHTML += `<p class="console-line">${out}</p>`
}

function setup() {
  const ogCLog = console.log
  const ogCWarn = console.warn
  const ogCError = console.error
  console.log = function (arg) {
    ogCLog(arg)
    consoleLog('log', arg)
  }
  console.warn = function (arg) {
    ogCWarn(arg)
    consoleLog('warn', arg)
  }
  console.error = function (arg) {
    ogCError(arg)
    consoleLog('error', arg)
  }
}

function addListeners() {
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Tab') {
      e.preventDefault()
      const s = e.target.selectionStart;
      e.target.value = e.target.value.substring(0, e.target.selectionStart)
        + "            "
        + e.target.value.substring(e.target.selectionEnd);
      e.target.selectionEnd = s+1;
    }
  })
}

function main() {
  setup()
  render()
  addListeners()
  setTimeout(runCode, 1000)
}

window.onload = main
