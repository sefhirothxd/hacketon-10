/* Comienzo de la estuctura js */
/*div con su id para ocultar o mostrar los inputs*/
let plm1 = document.getElementById('js_01');
let plm2 = document.getElementById('js_02');
let plm3 = document.getElementById('js_03');
let plm4 = document.getElementById('js_04');
let plm5 = document.getElementById('js_05');
let plm6 = document.getElementById('js_06');
let plm7 = document.getElementById('js_07');
let plm8 = document.getElementById('js_08');
let plm9 = document.getElementById('js_09');
let plm10 = document.getElementById('js_10');
let plm11 = document.getElementById('js_11');
let plm12 = document.getElementById('js_12');
let plm13 = document.getElementById('js_13');
let plm14 = document.getElementById('js_14');
let plm15 = document.getElementById('js_15');
let plm16 = document.getElementById('js_16');
let plm17 = document.getElementById('js_17');
let plm18 = document.getElementById('js_18');
let plm19 = document.getElementById('js_19');
let plm20 = document.getElementById('js_20');
let plm21 = document.getElementById('js_21');
let plm22 = document.getElementById('js_22');

/* botones*/
let btn = document.querySelectorAll('button');

btn.forEach(btn => {
    btn.addEventListener('click', EventButton);
})

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
plm1.addEventListener('mouseover', function() {
    let hijo = this.lastElementChild;
    hijo.style.display = 'block';
});
plm1.addEventListener('mouseout', function() {
    let hijo = this.lastElementChild;
    hijo.style.display = 'none';
});

plm2.addEventListener('mouseover', function() {
    let hijo = this.lastElementChild;
    hijo.style.display = 'block';
});
plm2.addEventListener('mouseout', function() {
    let hijo = this.lastElementChild;
    hijo.style.display = 'none';
});
plm3.addEventListener('mouseover', function() {
    let hijo = this.lastElementChild;
    hijo.style.display = 'block';
});
plm3.addEventListener('mouseout', function() {
    let hijo = this.lastElementChild;
    hijo.style.display = 'none';
});
plm4.addEventListener('mouseover', function() {
    let hijo = this.lastElementChild;
    hijo.style.display = 'block';
});
plm4.addEventListener('mouseout', function() {
    let hijo = this.lastElementChild;
    hijo.style.display = 'none';
});
plm5.addEventListener('mouseover', function() {
    let hijo = this.lastElementChild;
    hijo.style.display = 'block';
});
plm5.addEventListener('mouseout', function() {
    let hijo = this.lastElementChild;
    hijo.style.display = 'none';
});
plm6.addEventListener('mouseover', function() {
    let hijo = this.lastElementChild;
    hijo.style.display = 'block';
});
plm6.addEventListener('mouseout', function() {
    let hijo = this.lastElementChild;
    hijo.style.display = 'none';
});
plm7.addEventListener('mouseover', function() {
    let hijo = this.lastElementChild;
    hijo.style.display = 'block';
});
plm7.addEventListener('mouseout', function() {
    let hijo = this.lastElementChild;
    hijo.style.display = 'none';
});
plm8.addEventListener('mouseover', function() {
    let hijo = this.lastElementChild;
    hijo.style.display = 'block';
});
plm8.addEventListener('mouseout', function() {
    let hijo = this.lastElementChild;
    hijo.style.display = 'none';
});
plm9.addEventListener('mouseover', function() {
    let hijo = this.lastElementChild;
    hijo.style.display = 'block';
});
plm9.addEventListener('mouseout', function() {
    let hijo = this.lastElementChild;
    hijo.style.display = 'none';
});
plm10.addEventListener('mouseover', function() {
    let hijo = this.lastElementChild;
    hijo.style.display = 'block';
});
plm10.addEventListener('mouseout', function() {
    let hijo = this.lastElementChild;
    hijo.style.display = 'none';
});
plm11.addEventListener('mouseover', function() {
    let hijo = this.lastElementChild;
    hijo.style.display = 'block';
});
plm11.addEventListener('mouseout', function() {
    let hijo = this.lastElementChild;
    hijo.style.display = 'none';
});
plm12.addEventListener('mouseover', function() {
    let hijo = this.lastElementChild;
    hijo.style.display = 'block';
});
plm12.addEventListener('mouseout', function() {
    let hijo = this.lastElementChild;
    hijo.style.display = 'none';
});
plm13.addEventListener('mouseover', function() {
    let hijo = this.lastElementChild;
    hijo.style.display = 'block';
});
plm13.addEventListener('mouseout', function() {
    let hijo = this.lastElementChild;
    hijo.style.display = 'none';
});
plm14.addEventListener('mouseover', function() {
    let hijo = this.lastElementChild;
    hijo.style.display = 'block';
});
plm14.addEventListener('mouseout', function() {
    let hijo = this.lastElementChild;
    hijo.style.display = 'none';
});
plm15.addEventListener('mouseover', function() {
    let hijo = this.lastElementChild;
    hijo.style.display = 'block';
});
plm15.addEventListener('mouseout', function() {
    let hijo = this.lastElementChild;
    hijo.style.display = 'none';
});
plm16.addEventListener('mouseover', function() {
    let hijo = this.lastElementChild;
    hijo.style.display = 'block';
});
plm16.addEventListener('mouseout', function() {
    let hijo = this.lastElementChild;
    hijo.style.display = 'none';
});
plm17.addEventListener('mouseover', function() {
    let hijo = this.lastElementChild;
    hijo.style.display = 'block';
});
plm17.addEventListener('mouseout', function() {
    let hijo = this.lastElementChild;
    hijo.style.display = 'none';
});
plm18.addEventListener('mouseover', function() {
    let hijo = this.lastElementChild;
    hijo.style.display = 'block';
});
plm18.addEventListener('mouseout', function() {
    let hijo = this.lastElementChild;
    hijo.style.display = 'none';
});
plm19.addEventListener('mouseover', function() {
    let hijo = this.lastElementChild;
    hijo.style.display = 'block';
});
plm19.addEventListener('mouseout', function() {
    let hijo = this.lastElementChild;
    hijo.style.display = 'none';
});
plm20.addEventListener('mouseover', function() {
    let hijo = this.lastElementChild;
    hijo.style.display = 'block';
});
plm20.addEventListener('mouseout', function() {
    let hijo = this.lastElementChild;
    hijo.style.display = 'none';
});
plm21.addEventListener('mouseover', function() {
    let hijo = this.lastElementChild;
    hijo.style.display = 'block';
});
plm21.addEventListener('mouseout', function() {
    let hijo = this.lastElementChild;
    hijo.style.display = 'none';
});
plm22.addEventListener('mouseover', function() {
    let hijo = this.lastElementChild;
    hijo.style.display = 'block';
});
plm22.addEventListener('mouseout', function() {
    let hijo = this.lastElementChild;
    hijo.style.display = 'none';
});

function ejercicio1() {

    let name = document.getElementById('name')
    let lastname = document.getElementById('lastname')
    let age = document.getElementById('age')
    let container = document.getElementById('container-p1');

    container.innerHTML = `<p class='resultado'>Hola mi nombre es ${name.value} ${lastname.value} y mi edad ${age.value}</p>`

}

function ejercicio2() {
    let a = document.getElementById('js_f-num')
    let b = document.getElementById('js_s-num')
    let c = document.getElementById('js_t-num')
    let container = document.getElementById('container-p2');
    let resultado = Math.pow(a.value, 3) + Math.pow(b.value, 3) + Math.pow(c.value, 3);
    console.log(Math.pow(a.value, 3))
    console.log(Math.pow(b.value, 3))
    console.log(Math.pow(c.value, 3))
    container.innerHTML = `<p class='resultado'>suma de sus numeros ${a.value}^3 + ${b.value}^3 + ${c.value}^3 = ${resultado}</p>`

}

function ejercicio3() {
    let a = document.getElementById('js_f-num')
    let container = document.getElementById('container-p3');
    container.innerHTML = `<p class='resultado'> ${typeof(a.value)}</p>`;
}

function ejercicio4() {

    let c = [2, 3, 4, 6, 7]
    let container = document.getElementById('container-p4');
    let suma = (...c) => {
        let res = 0;
        c.forEach((n) => {
            res += n;
        });

        container.innerHTML = `<p class='resultado'>El array tiene ${c} y procederemos a sumarlos para obtener la suma: ${res}</p> `
    }
    suma(...c);



}

function ejercicio5() {
    let frace = [];
    let deTodo = ['Hola', 'Como', 'estas ?', 5, 4, 3, 2, 9]
    let container = document.getElementById('container-p5');

    for (let index = 0; index < deTodo.length; index++) {
        if (typeof(deTodo[index]) === 'string') {
            frace.push(deTodo[index]);
        }
    }
    container.innerHTML = `<p class='resultado'>El array cuenta con la siguiente informacion : ${deTodo} </br></br> Se filtro los numero y solo queda : ${frace} </p>`;

}

function ejercicio6() {

    let numeros = [1, 5, 6, 8, 9, 10, 15];
    let minimo = Math.min(...numeros);
    let mayor = Math.max(...numeros);
    let container = document.getElementById('container-p6');

    container.innerHTML = `<p class='resultado'>El numero con Menor valor es : ${minimo}
        El numero con Mayor valor es : ${mayor}</p>`;


}

function ejercicio7() {
    let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    let primeros = "";
    let segundos = "";
    let terceros = "";
    let container = document.getElementById('container-p7');

    for (let index = 0; index < numeros.length; index++) {
        if (index < 3) {
            primeros += numeros[index];
        } else if (index < 6) {
            segundos += numeros[index];
        } else
            terceros += numeros[index];

    }

    container.innerHTML = `<p class='resultado'>Numero de telefono:  (${primeros}) ${segundos}-${terceros}</p>`;

}

function ejercicio8() {
    let array1 = [4, 2, 7, 1];
    let array2 = [20, 70, 40, 90];
    let array3 = [1, 2, 0];
    let arrayFinal = [];
    let container = document.getElementById('container-p8');

    let mayor1 = Math.max(...array1);
    let mayor2 = Math.max(...array2);
    let mayor3 = Math.max(...array3);

    arrayFinal.push(mayor1, mayor2, mayor3);

    container.innerHTML = ` se obtuvieron los valores mas altos de los  3 array ${arrayFinal}`;

}

function ejercicio9() {
    let a = document.getElementById('palabra');
    let container = document.getElementById('container-p9');

    container.innerHTML = `la primera letra  es: ${a.value.charAt(0)} \nla ultima letra es: ${a.value.charAt(a.value.length-1)}`;
}

function ejercicio10() {
    obj = {
        a: "1",
        b: "2",
        c: "3"
    }
    let container = document.getElementById('container-p10');

    container.innerHTML = `el objeto es convertido en array y cuenta con los siguientes elementos:  ${Object.entries(obj)}`;


}


function ejercicio11() {
    let container = document.getElementById('container-p11');
    let personas = [{
            name: "jhon",
            age: 21,
            budget: 23000
        },
        {
            name: "gabriel",
            age: 32,
            budget: 40000
        }, {
            name: "martin",
            age: 16,
            budget: 2700
        }
    ]

    let suma = personas.reduce((acc, items) => {

        return acc += items.budget;

    }, 0)

    container.innerHTML = `La suma de los budget: ${suma}`;

}

function ejercicio12() {
    let container = document.getElementById('container-p12');
    let estudiantes = [{
            name: "Steve"
        },
        {
            name: "Mike"
        },
        {
            name: "John"
        }
    ]

    let acc = [];

    for (const key in estudiantes) {
        if (estudiantes.hasOwnProperty(key)) {
            acc[key] = estudiantes[key].name;

        }
    }

    container.innerHTML = `Nuevo array con los nombres: ${acc}`;


}

function ejercicio13() {
    let container = document.getElementById('container-p13');
    emociones = {
        like: 2,
        dislikes: 3,
        followers: 10

    }

    container.innerHTML = `Nuevo Array :  ${Object.entries(emociones)}`;


}

function ejercicio14() {

    let n = document.getElementById('js_num');
    let container = document.getElementById('container-p14');

    let array = [n.value];
    let suma = 0;

    for (let index = n.value; index > 0; index--) {
        array[index - 1] = Math.pow(index, 2);
    }

    array.forEach((numero) => suma += numero)

    container.innerHTML = `Numero ingresado ${n.value}. Se sumara lo siguientes numero ${array}. Resultado: ` + suma;

}

function ejercicio15() {
    let n = document.getElementById('input_15');
    let container = document.getElementById('container-p15');
    let array = [2, 3, 1, 0];

    let modifado = array.map((numero) => numero * n.value)

    container.innerHTML = `Multiplicacion de los elementos: ${modifado}`;
}

function ejercicio16() {
    let n = parseInt(prompt('Ingrese un numero para generar una matris que cuente desde este hasta 0'));
    let array = [n];

    for (let index = n; index >= 0; index--) {
        array[index] = index;
    }

    console.log(array);
}

function ejercicio17() {
    let array = [10, 4, 1, 4, -10, -50, 32, 21]
    alert(`tenemos la siguiente array: ${array}. \n se buscara el mayor y el menor de los numeros, y se calculara la diferencia.`);

    let mayor = Math.max(...array);
    let menor = Math.min(...array);

    let diferencia = mayor - menor;

    alert(`La diferencia del mayor ${mayor} y el menor ${menor} es: ${diferencia}`);

}

function ejercicio18() {

    let array = [1, 2, 3, "x", "y", 10];
    let frace = [];
    alert(`El array cuenta con la siguiente informacion : ${array}`);
    for (let index = 0; index < array.length; index++) {
        if (typeof(array[index]) !== 'string') {
            frace.push(array[index]);
        }
    }

    alert(`Se filtro los String y solo queda : ${frace}`);

}

function ejercicio19() {
    let numero = prompt(`ingrece el numero que desea que se repita: `);
    let repetir = parseInt(prompt(`ingrece la cantidad de veces: `));

    alert(numero.repeat(repetir));


}

function ejercicio20() {
    let palabra = "apples and bananas"
    let acc = "";

    alert(`Se tiene la siguiente frace: ${palabra}. Se procede a cambiar la volcal a por la e`)

    let array = Array.from(palabra);

    for (let index = 0; index < array.length; index++) {
        if (array[index] === 'a') {
            array[index] = 'e'
        }
        acc += array[index];

    }

    alert(acc);
}

function ejercicio21() {
    let palabra = "I am finding Nemo !"
    let modificado = palabra.split(' ');
    let acc = "";

    alert(`se procede a cambiar la siguiente palabra: ${palabra}, y mantendremos  la palabra Nemo`);

    for (let index = 0; index < modificado.length; index++) {
        if (modificado[index] === 'Nemo') {
            acc = modificado[index];
        }
    }

    alert(`I found ${acc} at 4!`);

}

function ejercicio22() {

    let palabra = prompt(`Ingrese la palabra que desea agregarle mayuscula a la ultima letra.`)
    let nueva = "";
    let ultimo = palabra.charAt(palabra.length - 1);

    for (let index = 0; index < palabra.length; index++) {
        if (palabra.lastIndexOf(palabra.charAt(index)) === palabra.lastIndexOf(ultimo)) {
            nueva += palabra.charAt(index).toUpperCase();
            break;
        } else {
            nueva += palabra.charAt(index);
        }

    }

    alert(nueva);

}