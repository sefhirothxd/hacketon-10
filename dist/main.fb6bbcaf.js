// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/main.js":[function(require,module,exports) {
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* Comienzo de la estuctura js */

/*div con su id para ocultar o mostrar los inputs*/
var plm1 = document.getElementById('js_01');
var plm2 = document.getElementById('js_02');
var plm3 = document.getElementById('js_03');
var plm4 = document.getElementById('js_04');
var plm5 = document.getElementById('js_05');
var plm6 = document.getElementById('js_06');
var plm7 = document.getElementById('js_07');
var plm8 = document.getElementById('js_08');
var plm9 = document.getElementById('js_09');
var plm10 = document.getElementById('js_10');
var plm11 = document.getElementById('js_11');
var plm12 = document.getElementById('js_12');
var plm13 = document.getElementById('js_13');
var plm14 = document.getElementById('js_14');
var plm15 = document.getElementById('js_15');
var plm16 = document.getElementById('js_16');
var plm17 = document.getElementById('js_17');
var plm18 = document.getElementById('js_18');
var plm19 = document.getElementById('js_19');
var plm20 = document.getElementById('js_20');
var plm21 = document.getElementById('js_21');
var plm22 = document.getElementById('js_22');
/* botones*/

var btn = document.querySelectorAll('button');
btn.forEach(function (btn) {
  btn.addEventListener('click', EventButton);
});
/*funciones donde muestra el valor del boton precionado y ejecuta
 el problema seleccionado. */

function EventButton(event) {
  if (event.target.id == 'btn-1') {
    ejercicio1();
  } else if (event.target.id == 'btn-2') {
    ejercicio2();
  } else if (event.target.id == 'btn-3') {
    ejercicio3();
  } else if (event.target.id == 'btn-4') {
    ejercicio4();
  } else if (event.target.id == 'btn-5') {
    ejercicio5();
  } else if (event.target.id == 'btn-6') {
    ejercicio6();
  } else if (event.target.id == 'btn-7') {
    ejercicio7();
  } else if (event.target.id == 'btn-8') {
    ejercicio8();
  } else if (event.target.id == 'btn-9') {
    ejercicio9();
  } else if (event.target.id == 'btn-10') {
    ejercicio10();
  } else if (event.target.id == 'btn-11') {
    ejercicio11();
  } else if (event.target.id == 'btn-12') {
    ejercicio12();
  } else if (event.target.id == 'btn-13') {
    ejercicio13();
  } else if (event.target.id == 'btn-14') {
    ejercicio14();
  } else if (event.target.id == 'btn-15') {
    ejercicio15();
  } else if (event.target.id == 'btn-16') {
    ejercicio16();
  } else if (event.target.id == 'btn-17') {
    ejercicio17();
  } else if (event.target.id == 'btn-18') {
    ejercicio18();
  } else if (event.target.id == 'btn-19') {
    ejercicio19();
  } else if (event.target.id == 'btn-20') {
    ejercicio20();
  } else if (event.target.id == 'btn-21') {
    ejercicio21();
  } else if (event.target.id == 'btn-22') {
    ejercicio22();
  }
}
/*Evento que se activa cuando el mouse esta en el div  del problema */


plm1.addEventListener('mouseover', function () {
  var hijo = this.lastElementChild;
  hijo.style.display = 'block';
});
plm1.addEventListener('mouseout', function () {
  var hijo = this.lastElementChild;
  hijo.style.display = 'none';
});
plm2.addEventListener('mouseover', function () {
  var hijo = this.lastElementChild;
  hijo.style.display = 'block';
});
plm2.addEventListener('mouseout', function () {
  var hijo = this.lastElementChild;
  hijo.style.display = 'none';
});
plm3.addEventListener('mouseover', function () {
  var hijo = this.lastElementChild;
  hijo.style.display = 'block';
});
plm3.addEventListener('mouseout', function () {
  var hijo = this.lastElementChild;
  hijo.style.display = 'none';
});
plm4.addEventListener('mouseover', function () {
  var hijo = this.lastElementChild;
  hijo.style.display = 'block';
});
plm4.addEventListener('mouseout', function () {
  var hijo = this.lastElementChild;
  hijo.style.display = 'none';
});
plm5.addEventListener('mouseover', function () {
  var hijo = this.lastElementChild;
  hijo.style.display = 'block';
});
plm5.addEventListener('mouseout', function () {
  var hijo = this.lastElementChild;
  hijo.style.display = 'none';
});
plm6.addEventListener('mouseover', function () {
  var hijo = this.lastElementChild;
  hijo.style.display = 'block';
});
plm6.addEventListener('mouseout', function () {
  var hijo = this.lastElementChild;
  hijo.style.display = 'none';
});
plm7.addEventListener('mouseover', function () {
  var hijo = this.lastElementChild;
  hijo.style.display = 'block';
});
plm7.addEventListener('mouseout', function () {
  var hijo = this.lastElementChild;
  hijo.style.display = 'none';
});
plm8.addEventListener('mouseover', function () {
  var hijo = this.lastElementChild;
  hijo.style.display = 'block';
});
plm8.addEventListener('mouseout', function () {
  var hijo = this.lastElementChild;
  hijo.style.display = 'none';
});
plm9.addEventListener('mouseover', function () {
  var hijo = this.lastElementChild;
  hijo.style.display = 'block';
});
plm9.addEventListener('mouseout', function () {
  var hijo = this.lastElementChild;
  hijo.style.display = 'none';
});
plm10.addEventListener('mouseover', function () {
  var hijo = this.lastElementChild;
  hijo.style.display = 'block';
});
plm10.addEventListener('mouseout', function () {
  var hijo = this.lastElementChild;
  hijo.style.display = 'none';
});
plm11.addEventListener('mouseover', function () {
  var hijo = this.lastElementChild;
  hijo.style.display = 'block';
});
plm11.addEventListener('mouseout', function () {
  var hijo = this.lastElementChild;
  hijo.style.display = 'none';
});
plm12.addEventListener('mouseover', function () {
  var hijo = this.lastElementChild;
  hijo.style.display = 'block';
});
plm12.addEventListener('mouseout', function () {
  var hijo = this.lastElementChild;
  hijo.style.display = 'none';
});
plm13.addEventListener('mouseover', function () {
  var hijo = this.lastElementChild;
  hijo.style.display = 'block';
});
plm13.addEventListener('mouseout', function () {
  var hijo = this.lastElementChild;
  hijo.style.display = 'none';
});
plm14.addEventListener('mouseover', function () {
  var hijo = this.lastElementChild;
  hijo.style.display = 'block';
});
plm14.addEventListener('mouseout', function () {
  var hijo = this.lastElementChild;
  hijo.style.display = 'none';
});
plm15.addEventListener('mouseover', function () {
  var hijo = this.lastElementChild;
  hijo.style.display = 'block';
});
plm15.addEventListener('mouseout', function () {
  var hijo = this.lastElementChild;
  hijo.style.display = 'none';
});
plm16.addEventListener('mouseover', function () {
  var hijo = this.lastElementChild;
  hijo.style.display = 'block';
});
plm16.addEventListener('mouseout', function () {
  var hijo = this.lastElementChild;
  hijo.style.display = 'none';
});
plm17.addEventListener('mouseover', function () {
  var hijo = this.lastElementChild;
  hijo.style.display = 'block';
});
plm17.addEventListener('mouseout', function () {
  var hijo = this.lastElementChild;
  hijo.style.display = 'none';
});
plm18.addEventListener('mouseover', function () {
  var hijo = this.lastElementChild;
  hijo.style.display = 'block';
});
plm18.addEventListener('mouseout', function () {
  var hijo = this.lastElementChild;
  hijo.style.display = 'none';
});
plm19.addEventListener('mouseover', function () {
  var hijo = this.lastElementChild;
  hijo.style.display = 'block';
});
plm19.addEventListener('mouseout', function () {
  var hijo = this.lastElementChild;
  hijo.style.display = 'none';
});
plm20.addEventListener('mouseover', function () {
  var hijo = this.lastElementChild;
  hijo.style.display = 'block';
});
plm20.addEventListener('mouseout', function () {
  var hijo = this.lastElementChild;
  hijo.style.display = 'none';
});
plm21.addEventListener('mouseover', function () {
  var hijo = this.lastElementChild;
  hijo.style.display = 'block';
});
plm21.addEventListener('mouseout', function () {
  var hijo = this.lastElementChild;
  hijo.style.display = 'none';
});
plm22.addEventListener('mouseover', function () {
  var hijo = this.lastElementChild;
  hijo.style.display = 'block';
});
plm22.addEventListener('mouseout', function () {
  var hijo = this.lastElementChild;
  hijo.style.display = 'none';
});

function ejercicio1() {
  var name = document.getElementById('name');
  var lastname = document.getElementById('lastname');
  var age = document.getElementById('age');
  var container = document.getElementById('container-p1');
  container.innerHTML = "<p class='resultado'>Hola mi nombre es ".concat(name.value, " ").concat(lastname.value, " y mi edad ").concat(age.value, "</p>");
}

function ejercicio2() {
  var a = document.getElementById('js_f-num');
  var b = document.getElementById('js_s-num');
  var c = document.getElementById('js_t-num');
  var container = document.getElementById('container-p2');
  var resultado = Math.pow(a.value, 3) + Math.pow(b.value, 3) + Math.pow(c.value, 3);
  console.log(Math.pow(a.value, 3));
  console.log(Math.pow(b.value, 3));
  console.log(Math.pow(c.value, 3));
  container.innerHTML = "<p class='resultado'>suma de sus numeros ".concat(a.value, "^3 + ").concat(b.value, "^3 + ").concat(c.value, "^3 = ").concat(resultado, "</p>");
}

function ejercicio3() {
  var a = document.getElementById('js_f-num');
  var container = document.getElementById('container-p3');
  container.innerHTML = "<p class='resultado'> ".concat(_typeof(a.value), "</p>");
}

function ejercicio4() {
  var c = [2, 3, 4, 6, 7];
  var container = document.getElementById('container-p4');

  var suma = function suma() {
    var res = 0;

    for (var _len = arguments.length, c = new Array(_len), _key = 0; _key < _len; _key++) {
      c[_key] = arguments[_key];
    }

    c.forEach(function (n) {
      res += n;
    });
    container.innerHTML = "<p class='resultado'>El array tiene ".concat(c, " y procederemos a sumarlos para obtener la suma: ").concat(res, "</p> ");
  };

  suma.apply(void 0, c);
}

function ejercicio5() {
  var frace = [];
  var deTodo = ['Hola', 'Como', 'estas ?', 5, 4, 3, 2, 9];
  var container = document.getElementById('container-p5');

  for (var index = 0; index < deTodo.length; index++) {
    if (typeof deTodo[index] === 'string') {
      frace.push(deTodo[index]);
    }
  }

  container.innerHTML = "<p class='resultado'>El array cuenta con la siguiente informacion : ".concat(deTodo, " </br></br> Se filtro los numero y solo queda : ").concat(frace, " </p>");
}

function ejercicio6() {
  var numeros = [1, 5, 6, 8, 9, 10, 15];
  var minimo = Math.min.apply(Math, numeros);
  var mayor = Math.max.apply(Math, numeros);
  var container = document.getElementById('container-p6');
  container.innerHTML = "<p class='resultado'>El numero con Menor valor es : ".concat(minimo, "\n        El numero con Mayor valor es : ").concat(mayor, "</p>");
}

function ejercicio7() {
  var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  var primeros = "";
  var segundos = "";
  var terceros = "";
  var container = document.getElementById('container-p7');

  for (var index = 0; index < numeros.length; index++) {
    if (index < 3) {
      primeros += numeros[index];
    } else if (index < 6) {
      segundos += numeros[index];
    } else terceros += numeros[index];
  }

  container.innerHTML = "<p class='resultado'>Numero de telefono:  (".concat(primeros, ") ").concat(segundos, "-").concat(terceros, "</p>");
}

function ejercicio8() {
  var array1 = [4, 2, 7, 1];
  var array2 = [20, 70, 40, 90];
  var array3 = [1, 2, 0];
  var arrayFinal = [];
  var container = document.getElementById('container-p8');
  var mayor1 = Math.max.apply(Math, array1);
  var mayor2 = Math.max.apply(Math, array2);
  var mayor3 = Math.max.apply(Math, array3);
  arrayFinal.push(mayor1, mayor2, mayor3);
  container.innerHTML = " se obtuvieron los valores mas altos de los  3 array ".concat(arrayFinal);
}

function ejercicio9() {
  var a = document.getElementById('palabra');
  var container = document.getElementById('container-p9');
  container.innerHTML = "la primera letra  es: ".concat(a.value.charAt(0), " \nla ultima letra es: ").concat(a.value.charAt(a.value.length - 1));
}

function ejercicio10() {
  obj = {
    a: "1",
    b: "2",
    c: "3"
  };
  var container = document.getElementById('container-p10');
  container.innerHTML = "el objeto es convertido en array y cuenta con los siguientes elementos:  ".concat(Object.entries(obj));
}

function ejercicio11() {
  var container = document.getElementById('container-p11');
  var personas = [{
    name: "jhon",
    age: 21,
    budget: 23000
  }, {
    name: "gabriel",
    age: 32,
    budget: 40000
  }, {
    name: "martin",
    age: 16,
    budget: 2700
  }];
  var suma = personas.reduce(function (acc, items) {
    return acc += items.budget;
  }, 0);
  container.innerHTML = "La suma de los budget: ".concat(suma);
}

function ejercicio12() {
  var container = document.getElementById('container-p12');
  var estudiantes = [{
    name: "Steve"
  }, {
    name: "Mike"
  }, {
    name: "John"
  }];
  var acc = [];

  for (var key in estudiantes) {
    if (estudiantes.hasOwnProperty(key)) {
      acc[key] = estudiantes[key].name;
    }
  }

  container.innerHTML = "Nuevo array con los nombres: ".concat(acc);
}

function ejercicio13() {
  var container = document.getElementById('container-p13');
  emociones = {
    like: 2,
    dislikes: 3,
    followers: 10
  };
  container.innerHTML = "Nuevo Array :  ".concat(Object.entries(emociones));
}

function ejercicio14() {
  var n = document.getElementById('js_num');
  var container = document.getElementById('container-p14');
  var array = [n.value];
  var suma = 0;

  for (var index = n.value; index > 0; index--) {
    array[index - 1] = Math.pow(index, 2);
  }

  array.forEach(function (numero) {
    return suma += numero;
  });
  container.innerHTML = "Numero ingresado ".concat(n.value, ". Se sumara lo siguientes numero ").concat(array, ". Resultado: ") + suma;
}

function ejercicio15() {
  var n = document.getElementById('input_15');
  var container = document.getElementById('container-p15');
  var array = [2, 3, 1, 0];
  var modifado = array.map(function (numero) {
    return numero * n.value;
  });
  container.innerHTML = "Multiplicacion de los elementos: ".concat(modifado);
}

function ejercicio16() {
  var n = document.getElementById('input_16');
  var container = document.getElementById('container-p16');
  var array = [n.value];

  for (var index = n.value; index >= 0; index--) {
    array[index] = index;
  }

  container.innerHTML = "Matris del numero ingresado ".concat(array);
}

function ejercicio17() {
  var array = [10, 4, 1, 4, -10, -50, 32, 21];
  var container = document.getElementById('container-p17');
  var mayor = Math.max.apply(Math, array);
  var menor = Math.min.apply(Math, array);
  var diferencia = mayor - menor;
  container.innerHTML = "La diferencia del mayor ".concat(mayor, " y el menor ").concat(menor, " es: ").concat(diferencia);
}

function ejercicio18() {
  var array = [1, 2, 3, "x", "y", 10];
  var frace = [];
  var container = document.getElementById('container-p18');

  for (var index = 0; index < array.length; index++) {
    if (typeof array[index] !== 'string') {
      frace.push(array[index]);
    }
  }

  container.innerHTML = "Se filtro los String y solo queda : ".concat(frace);
}

function ejercicio19() {
  var numero = document.getElementById('input_19');
  var repetir = document.getElementById('input_192');
  var container = document.getElementById('container-p19');
  var array = [];

  for (var index = 0; index <= repetir.value - 1; index++) {
    array.push(numero.value);
  }

  container.innerHTML = "Numero :  ".concat(array);
}

function ejercicio20() {
  var palabra = "apples and bananas";
  var container = document.getElementById('container-p20');
  var acc = "";
  var array = Array.from(palabra);

  for (var index = 0; index < array.length; index++) {
    if (array[index] === 'a') {
      array[index] = 'e';
    }

    acc += array[index];
  }

  container.innerHTML = "Resultado: ".concat(acc);
}

function ejercicio21() {
  var palabra = "I am finding Nemo !";
  var modificado = palabra.split(' ');
  var acc = "";
  var container = document.getElementById('container-p21');

  for (var index = 0; index < modificado.length; index++) {
    if (modificado[index] === 'Nemo') {
      acc = modificado[index];
    }
  }

  container.innerHTML = "I found ".concat(acc, " at 4!");
}

function ejercicio22() {
  var palabra = document.getElementById('input_22');
  var nueva = "";
  var ultimo = palabra.value.charAt(palabra.value.length - 1);
  var container = document.getElementById('container-p22');

  for (var index = 0; index < palabra.value.length; index++) {
    if (palabra.value.lastIndexOf(palabra.value.charAt(index)) === palabra.value.lastIndexOf(ultimo)) {
      nueva += palabra.value.charAt(index).toUpperCase();
      break;
    } else {
      nueva += palabra.value.charAt(index);
    }
  }

  container.innerHTML = "".concat(nueva);
}
},{}],"../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "57989" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/main.js"], null)
//# sourceMappingURL=/main.fb6bbcaf.js.map