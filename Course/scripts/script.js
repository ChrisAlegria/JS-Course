// JavaScript: Es el sistema nervioso y el que ejecuta las acciones.
// JS es un lenguaje de tipo interpretado y no copilado, lo que significa que un navegador o un entorno de ejecución va a interpretar el lenguaje sin pasarlo a binario.
// Js no toma en cuenta los espacios ni los enter dentro de una declaración debido a la forma de funcion de JS, en caso de usar enter en una sola declaración se indentara.
// Comentario y comentario multilinea: Texto o codigo que solamente el desarrollador puede ver, ademas estos no tendran ningun efecto en lo que visualiza el usuario, por lo que de manera global y en cualquier lenguaje se puede generar un comentarios con Ctrl + }. 
// CamelCase: El camelCase es una convención de escritura que se utiliza en programación para nombrar variables, funciones, clases, etc. Se escribe en minúsculas y cada palabra adicional comienza con mayúscula. Por ejemplo, "miVariable", "miFuncion", "miClasePersonalizada".

// ^JavaScript
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ~Simbologia en JS
// Todo - Separador (,)
// Todo - En JavaScript, la coma se utiliza para separar múltiples declaraciones o elementos dentro de una misma línea. Por ejemplo, permite declarar varias variables al mismo tiempo usando una sola instrucción, separando cada variable con una coma.
var x, y, z; //* Declaración de tres variables 'var' en una sola línea. La coma indica que 'x', 'y' y 'z' son variables independientes.

// Todo - Delimitador (;)
// Todo - El punto y coma en JavaScript, como en muchos otros lenguajes, indica el final de una sentencia o instrucció, aunque dentro de JS es totalmente opcional, pero recomendable. Sirve para delimitar dónde termina una operación o declaración, ayudando al intérprete a entender el código correctamente.
x = 5; y = 6; z = 3; //* Declaración y asignación de tres variables. Cada punto y coma (;) indica el final de una instrucción independiente, permitiendo escribir múltiples sentencias en una sola línea.

// Todo - Asignador (=)
// Todo - En JavaScript, el símbolo igual (=) se utiliza como **asignador**, lo que significa que se emplea para asignar un valor a una variable. A diferencia de las matemáticas, donde el igual indica igualdad, en JavaScript se interpreta como una operación de asignación: el valor del lado derecho se asigna a la variable del lado izquierdo.
z = 'Valor de la variable Z'; //* Se asigna el valor de texto a la variable 'z' usando el símbolo de asignación (=).

// Todo - Scope ({})
// Todo - En JavaScript, las llaves `{}` definen un bloque de código o scope (ámbito). Este scope actúa como una especie de “célula aislada”: puede acceder a variables externas, pero las variables declaradas dentro no estarán disponibles fuera del bloque. Esto permite organizar el código y limitar el alcance de las variables para evitar conflictos o interferencias. Las llaves se utilizan en estructuras como condicionales, funciones, bucles y objetos. Ademas cabe mencionar que la llave de apertura es `{` y la de cierre es `}`.

function scope() { // *Se declara una función llamada 'scope'. Todo lo que esté dentro de estas llaves será su scope local.
    var x; // *Variable declarada con 'var', la cual pertenece únicamente al scope de esta función.
} // *Cierre de la funcion y por ende del scope de la variable.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ~Variables en JS
// ~Las variables dentro de JS son contenedores donde se puede almacenar valores, como texto, numeros, objetos, arreglos, etc.. Ademas que existen 3 maneras de diferentes para declararlas.
// Todo - Declaración de Variables en JavaScript: En JavaScript existen tres formas principales de declarar una variable: `var`, `let` y `const`. Aunque cada una tiene diferencias clave en su comportamiento (como el alcance o si permite reasignación), todas siguen una estructura básica común:  **palabraClave + nombreVariable + asignador + valor**. Primero se escribe la palabra clave (`let`, `const` o `var`), seguida del nombre de la variable, después el signo igual `=` que funciona como asignador, y finalmente el valor que se desea almacenar. Por ejemplo: `let nombre = "Juan";`. Esta sintaxis permite crear variables claras y organizadas que se pueden usar a lo largo del código según las necesidades del programa. */
var //* Palabra Clave
nombreDeLaVariable //* Nombre de la variable
= //*Asignador
'Valor'//* Valor de la variable

// &Var
// &Las variables tipo 'var' actualmente ya no son recomendadas debido a su comportamiento flexible, que puede provocar errores difíciles de detectar. Estas variables permiten ser **reasignadas** y **redeclaradas** incluso si ya existen, lo cual puede generar conflictos en el código. Además, las variables declaradas con 'var' **pueden declararse sin asignarles un valor inicial**, utilizando solo la palabra clave y el nombre de la variable. Estas variables también están limitadas al **scope de función**, es decir, solo existen dentro de la función en la que fueron declaradas (si están dentro de una), o bien, se comportan como variables globales si se declaran fuera de cualquier función. Las variables 'var' también **pueden redeclararse incluso si ya existe una variable con el mismo nombre declarada con 'let' o 'const'**. Sin embargo, si  se declara una variable con 'let' o 'const' y ya existe un con el mismo nombre de tipo 'var', se generará un **error**, ya que 'let' y 'const' no permiten la redeclaración dentro del mismo scope.
// ^Declaración normal
// ^Una declaración normal con 'var' sigue la estructura básica: (palabra clave + nombre de la variable + asignador + valor). Es decir, defines el nombre de la variable y le asignas directamente un valor. Este es el método más común y directo para declarar variables.
var variableTipoVar = 'Variable var con un valor.'; //* Esta es una variable 'var' con un valor de texto.

// ^Declaración sin valor
// ^También se puede declarar una variable con 'var' sin asignarle un valor al momento. Esto se hace escribiendo solo la palabra clave 'var' seguida del nombre de la variable, quedando como: (var nombreVariable). La variable existirá, pero su valor inicial será 'undefined' hasta que se le asigne uno más adelante.
var variableTipoVarSinValor; //* Variable tipo 'var' sin ningún valor; solo se declara sin asignar.

// ^Reasignación
// ^La reasignación consiste en cambiar el valor que una variable ya tenía. Con 'var', esto se hace fácilmente: primero declaras la variable, y después puedes reasignarle un nuevo valor simplemente escribiendo (nombreVariable = nuevoValor). No es necesario volver a escribir la palabra clave 'var' para reasignar; solo se usa en la primera declaración.
var reasignacionDeVariableTipoVar = 'Variable var con un primer valor.'; //* Declaración inicial de una variable 'var' con un primer valor.
reasignacionDeVariableTipoVar = 'Variable var con segundo valor.'; //* Reasignación de valor en variable 'var', sustituyendo el anterior.
reasignacionDeVariableTipoVar = 'Variable var con un tercer valor.'; //* Nueva reasignación; este será el valor final de la variable.

// ^Redeclaración
// ^La redeclaración significa volver a declarar una variable que ya existe con el mismo nombre. Con 'var', esto está permitido y se hace repitiendo la estructura completa: (var nombreVariable = nuevoValor). Esto puede causar confusión o errores si no se controla bien, ya que la variable tomará el último valor asignado. A diferencia de 'let' o 'const', que no permiten redeclarar dentro del mismo bloque o scope, 'var' sí lo permite sin arrojar errores.
var variableTipoVarRedeclarada = 'Variable var declarada por primera vez.'; // *Primera declaración variable 'var' variableTipoVarRedeclarada.
var variableTipoVarRedeclarada = 'Variable var declarada por segunda vez.'; // *Segunda declaración variable 'var' variableTipoVarRedeclarada.

// &Let
// &Las variables declaradas con 'let' fueron introducidas en ECMAScript 6 (ES6) como una alternativa más segura y moderna a 'var'. A diferencia de 'var', las variables 'let' **no permiten ser redeclaradas dentro del mismo bloque de código**, lo cual ayuda a evitar errores accidentales. Sin embargo, sí **permiten la reasignación de valores**, por lo que el valor de una variable 'let' puede cambiar a lo largo del programa. Las variables 'let' también **pueden declararse sin valor inicial**, y su valor inicial será 'undefined' hasta que se les asigne uno. Además, 'let' respeta el **scope de bloque**, lo que significa que solo existen dentro del bloque (`{}`) donde fueron declaradas, ya sea una función, un bucle, o una estructura condicional.
// ^Declaración normal
// ^Una declaración normal con 'let' sigue la estructura: (palabra clave + nombre de la variable + asignador + valor). Este tipo de declaración permite asignar un valor inicial a la variable en el momento en que se declara.
let variableTipoLet = 'Variable let con un valor.'; // *Esta es una variable 'let' con un valor de texto.

// ^Declaración sin valor
// ^También se puede declarar una variable con 'let' sin asignarle un valor al momento. Esto se hace escribiendo la palabra clave 'let' seguida del nombre de la variable, como: (let nombreVariable). Su valor será 'undefined' hasta que se le asigne uno más adelante.
let variableTipoLetSinValor; // *Variable tipo 'let' sin ningún valor asignado inicialmente.

// ^Reasignación
// ^La reasignación permite cambiar el valor que tiene una variable declarada con 'let'. Primero se declara normalmente, y luego se le puede asignar un nuevo valor utilizando: (nombreVariable = nuevoValor). A diferencia de 'const', 'let' sí permite este cambio de valor.
let reasignacionDeVariableTipoLet = 'Variable let con un primer valor.'; // *Declaración inicial de una variable 'let' con un primer valor.
reasignacionDeVariableTipoLet = 'Variable let con segundo valor.'; // *Reasignación de valor en variable 'let'.
reasignacionDeVariableTipoLet = 'Variable let con un tercer valor.'; // *Nueva reasignación; este será el valor final de la variable.

// ^Redeclaración
// !Let no admite redeclaraciones, por lo que intentar redeclarar una variable con 'let' dentro del mismo bloque (por ejemplo, dos veces con el mismo nombre en el mismo archivo o función) arrojará un error. Esto ayuda a evitar confusión en el código y garantiza mayor seguridad.

// &Const
// &Las variables declaradas con 'const' también fueron introducidas en ECMAScript 6 (ES6) y representan constantes, es decir, valores que no pueden cambiar durante la ejecución del programa. Estas variables **deben ser inicializadas obligatoriamente en el momento de su declaración**, ya que no permiten declarar sin asignar un valor. Además, una vez asignado un valor, **no pueden ser reasignadas ni redeclaradas**, lo que aporta gran seguridad y estabilidad al código. Al igual que 'let', 'const' respeta el **scope de bloque**, por lo que solo existen dentro del bloque donde fueron declaradas.
// ^Declaración normal
// ^Una declaración normal con 'const' consta de la palabra clave 'const', el nombre de la variable y la asignación obligatoria de un valor inicial, es decir: (const nombreVariable = valor). No es posible declarar una variable 'const' sin valor inicial.
const variableTipoConst = 'Variable const con un valor'; //* Esta es una variable 'const' con un valor inicial asignado.

// ^Declaración sin valor
// !Las variables 'const' no permiten ser declaradas sin un valor inicial. Intentar hacerlo generará un error en tiempo de compilación o ejecución.

// ^Reasignación
// !Las variables 'const' no pueden ser reasignadas. Intentar cambiar su valor después de la declaración causará un error. Esto garantiza que el valor asignado permanezca constante durante todo el ciclo de vida de la variable.

// ^Redeclaración
// !Las variables 'const' no permiten ser redeclaradas dentro del mismo bloque. Intentar redeclarar una variable con 'const' generará un error, ayudando a mantener la integridad del código.

// Todo - Declaración múltiple de variables (únicamente con 'var' y 'let'): 
// Todo - Es posible declarar varias variables en una sola línea utilizando solo una vez la palabra clave 'var' o 'let'. Las variables pueden declararse de tres formas: con valor asignado, sin valor, o combinando ambas (mixto). La asignación de valores es opcional para cada variable, por lo que se puede elegir si alguna tendrá valor inicial o no. Todas las variables deben ir separadas por comas, y la sintaxis general es: palabraClave variable1 [= valor], variable2 [= valor], ..., variableN [= valor];
// &Declaración múltiple de variables sin valores
var elementoDeclaracionMultipleSinValor1, elementoDeclaracionMultipleSinValor2, elementoDeclaracionMultipleSinValores; //* Se declaran tres variables sin asignarles valores, todas en una sola línea.

// &Declaración múltiple de variables con valores
var elementoDeclaracionMultipleConValor1 = 'Variable 1 de la declaración múltiple con valores', elementoDeclaracionMultipleConValor2 = 'Variable 2 de la declaración múltiple con valores'; //* Se declaran dos variables con valores asignados en la misma línea.

// &Declaración múltiple mixta
var elementoDeclaracionMultipleMixta1, elementoDeclaracionMultipleConValor2 = 'Variable 2 de la declaración múltiple mixta, la cual contiene un valor.'; //* Se declara una variable sin valor y otra con valor asignado en una sola línea.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ~Tipos de datos
// ~En JavaScript, las variables pueden almacenar distintos tipos de datos, y estos son fundamentales para realizar operaciones, representar información y controlar el flujo del programa. Existen varios tipos de datos básicos, como los **números**, **cadenas de texto**, **booleanos**, **objetos**, **arreglos**, entre otros. Cada tipo de dato tiene su propia sintaxis y comportamiento. Comprender bien estos tipos es clave para escribir código eficiente y evitar errores, ya que determinan cómo se procesan, comparan y manipulan los valores dentro del programa.
// &Números enteros (Int)
// &Las variables tipo `number` se utilizan para almacenar **valores numéricos enteros**, es decir, números sin decimales. Estos pueden ser positivos, negativos o incluso el cero. No se requiere ningún símbolo especial para declarar un número entero; simplemente se escribe el número directamente después del signo `=`. Esto es útil cuando se necesita hacer operaciones matemáticas básicas como suma, resta, multiplicación, etc.
let variableTipoNumber = 4;  //* Variable tipo 'int' que almacena un número con decimales (número no entero).

// &Números con decimales (Float)
// &Las variables tipo `float` también almacenan números, pero a diferencia de los enteros, estos **incluyen decimales**. En JavaScript no se usa una palabra clave diferente para flotantes, pero internamente se maneja como número decimal. Para declarar un `float`, basta con incluir un punto (`.`) entre la parte entera y decimal. Este tipo es muy útil en cálculos que requieren mayor precisión, como porcentajes, precios, promedios, etc.
let variableTipoFloat = 5.34; //* Variable tipo 'float' que almacena un número con decimales (número no entero).

// &Cadenas de caracteres (String) 
// &Las variables tipo `string` se utilizan para almacenar **texto**, también conocido como una cadena de caracteres. Este puede ser una sola letra, una palabra, una oración o incluso párrafos completos. A diferencia de los números, los strings **deben ir entre comillas**, ya que de lo contrario el programa los interpretaría como variables o instrucciones. En JavaScript existen tres formas de declarar un string: usando comillas simples (`'...'`), dobles (`"..."`) o backticks (`` `...` ``). Cada una tiene sus ventajas y se usa según la situación.
// ^Comillas simples
// ^Usar comillas simples (`'texto'`) es una de las formas más comunes de declarar strings. Estas comillas permiten escribir texto plano. Son especialmente útiles cuando se necesita anidar comillas dobles dentro del texto, por ejemplo, al trabajar con atributos HTML como `onclick="funcion('dato')"`. Esto ayuda a evitar errores por conflicto entre comillas, ya que una puede contener a la otra sin interferencias.
const variableTipoStringComillas = 'Variable tipo string que almacena únicamente una cadena de texto, gracias al uso de comillas simples.'; 
//* Variable tipo string que utiliza comillas simples ('') para almacenar una cadena de texto. Este tipo de comillas es útil cuando dentro del texto se desea incluir comillas dobles, evitando así conflictos de sintaxis.

// ^Comillas dobles
// ^Funcionan igual que las comillas simples, pero a la inversa. Es decir, se pueden usar comillas dobles (`"texto"`) para almacenar texto y permitir que dentro del string se usen comillas simples sin romper la sintaxis. Por ejemplo: `onclick='funcion("dato")'`. En general, puedes usar simples o dobles indistintamente, pero siempre se recomienda ser consistente en todo el proyecto.
const variableTipoStringComillasDobles = "Variable tipo string que almacena únicamente una cadena de texto, gracias al uso de comillas dobles.";
//* Variable tipo string que utiliza comillas dobles ("") para almacenar una cadena de texto. Este formato permite incluir comillas simples dentro del contenido del string sin interferir con la sintaxis del lenguaje.

// ^Backticks (comillas invertidas)
// ^Las backticks (`` `texto` ``) permiten algo muy poderoso: **la interpolación de variables**. Esto significa que se pueden insertar variables directamente dentro del texto. Para insertar una variable, se usa la estructura `${nombreVariable}` la cual es llamada como expreción de JavaScript. El valor de la variable será insertado automáticamente dentro del string. Esta forma es ideal para construir mensajes dinámicos y legibles.
const variableTipoStringBackSticks = `Variable tipo string que almacena una cadena de texto y permite insertar otras variables como: ${variableTipoFloat}.`; //* Se muestra el valor de la variable 'variableTipoFloat' dentro del texto.

// &Booleano (Boolean)
// &El tipo de dato booleano representa únicamente dos posibles valores: `true` (verdadero) o `false` (falso). Se utiliza principalmente en estructuras de control como condiciones (`if`, `while`, etc.) y en comparaciones lógicas. Estos valores permiten tomar decisiones dentro del programa dependiendo de si una condición es cierta o no.
// ^Verdadero (True)
// ^El valor booleano `true` representa una condición verdadera. Es útil cuando se necesita indicar que algo está activado, aprobado, disponible, etc.
const variableTipoBooleanTrue = true; //* Variable booleana con valor `true`, que representa una condición verdadera.

// ^Falso (False)
// ^El valor booleano `false` representa una condición falsa. Se usa para señalar que algo está desactivado, rechazado o no disponible.
const variableTipoBooleanFalse = false; //* Variable booleana con valor `false`, que representa una condición falsa.

// &Indefinido (Undefined)
// &El valor `undefined` en JavaScript indica que una variable ha sido declarada pero **aún no se le ha asignado ningún valor**. Esto sucede automáticamente cuando solo se declara la variable sin inicializarla. Es un estado que representa ausencia de valor de manera implícita.
let variableTipoUndefined; //* Variable declarada sin valor asignado. Su valor predeterminado es `undefined`.

// &Nulo (Null)
// &El valor `null` representa la **ausencia intencional de valor**. A diferencia de `undefined`, que es asignado automáticamente por JavaScript, `null` se asigna manualmente para indicar que una variable no tiene valor a propósito. Es decir, mientras `undefined` implica que aún no se asignó nada, `null` señala que el valor fue vaciado o reseteado intencionalmente.
let variableTipoNull = null; //* Variable con valor `null`, lo que indica que se le asignó explícitamente "ningún valor".

// &Objeto ( { clave: valor } )
// &Un objeto en JavaScript es una estructura de datos que permite almacenar múltiples valores relacionados en forma de **pares clave-valor**. Cada propiedad del objeto tiene una clave (el nombre del campo) y un valor asignado. Los objetos se usan para representar entidades más complejas como usuarios, productos, configuraciones, etc. Son fundamentales en JavaScript, ya que prácticamente todo en este lenguaje puede representarse como un objeto.
const variableTipoObjeto = {
    clave: 'valor'
}; //* Objeto que contiene una propiedad llamada 'clave' con el valor 'valor'.

// &Arreglos o listas (Array)
// &Un arreglo (o array) es una estructura de datos que almacena múltiples valores en una sola variable. Los elementos del arreglo están ordenados por posición (índices numéricos que comienzan desde 0). Los arrays pueden contener cualquier tipo de dato: números, cadenas, booleanos, objetos, otros arrays, etc. Son útiles para almacenar listas de elementos y recorrerlos con ciclos (`for`, `forEach`, etc.).
// ^Array con números
// ^Este arreglo contiene únicamente valores numéricos. Ideal para representar secuencias como edades, cantidades, identificadores, etc.
const variableTipoArrayNumeros = [1, 2, 3, 4, 5]; //* Array con cinco elementos numéricos enteros.

// ^Array con cadenas de caracteres
// ^Este arreglo contiene solamente valores tipo `string`. Se puede usar para representar listas de nombres, mensajes, palabras, etc.
const variableTipoArrayCadenaCaracteres = ['Texto1', 'Texto2', 'Texto3']; //* Array con tres elementos de texto (strings).

// ^Array mixto
// ^Este tipo de arreglo contiene distintos tipos de datos al mismo tiempo: números, strings e incluso otro array dentro de sí mismo. JavaScript permite esta flexibilidad.
const variableTipoArrayMixto = [1, 'Texto1', 2, ['Texto2']]; //* Array que mezcla números, texto y un array interno.

// &Fecha (Date)
// &El tipo de dato `Date` permite trabajar con fechas y horas. Para crear una nueva fecha, se puede utilizar el constructor `new Date()`, pasando como argumento una cadena en formato válido. En JavaScript, el formato más comúnmente aceptado para fechas es el estilo **estadounidense (MM/DD/YYYY)**, donde primero se indica el **mes**, luego el **día** y por último el **año**. Este tipo de dato es útil para manejar cronologías, agendas, cálculos de tiempo, etc.
let variableTipoDate = new Date('07/25/2025'); //* Fecha creada en formato MM/DD/YYYY. Representa el 25 de julio de 2025.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ~Operadores en JavaScript
// ~En JavaScript, los operadores son símbolos que permiten realizar diferentes tipos de operaciones entre variables o valores. Estas operaciones pueden ser de **asignación**, **aritméticas**, **lógicas**, **comparación**, entre otras. Los operadores son fundamentales para manipular datos, realizar cálculos, construir condiciones y ejecutar tareas dentro del código. A continuación, se explican los operadores **de asignación** y **aritméticos**, que son los más utilizados al comenzar a programar.
// Todo - Operador de asignación (=)
// Todo - El operador de asignación (`=`) es utilizado para **asignar un valor** a una variable. A diferencia de las matemáticas, donde el símbolo `=` representa igualdad, en JavaScript significa que el valor a la derecha del signo será **asignado a la variable de la izquierda**. Este es el operador que más se usa al declarar y definir variables. Además del operador `=`, existen **otros operadores de asignación compuestos**, como `+=`, `-=`, `*=`, entre otros, que combinan una operación matemática con la asignación, y permiten escribir código de forma más concisa y eficiente.
// &Operador de asignación
// &El operador `=` se utiliza para asignar un valor a una variable. En JavaScript, este operador no indica igualdad, sino que transfiere el valor que se encuentra del lado derecho a la variable del lado izquierdo. Es el operador más usado al declarar variables.
let variableConOperadorAsignacion = 'Variable que mediante el operador de asignación, hace que dicha variable almacene un valor'; //* El valor de texto es asignado a la variable usando el operador `=`.

// &Operadores de asignación compuestos
// &Los operadores de asignación compuestos permiten realizar una operación matemática y una asignación al mismo tiempo, lo cual simplifica y acorta el código. Por ejemplo, si tenemos una variable `x` con un valor inicial de 6, y queremos sumarle 3, normalmente escribiríamos `x = x + 3`. Sin embargo, con el operador de suma compuesta podemos escribir simplemente `x += 3`. Esto le indica a JavaScript que debe tomar el valor actual de `x`, sumarle 3, y luego guardar ese nuevo valor nuevamente en `x`. Este mismo concepto se aplica para restar (`-=`), multiplicar (`*=`), dividir (`/=`), obtener el resto (`%=`) o elevar a una potencia (`**=`). Todos estos operadores **modifican directamente el valor existente de la variable**, por lo que son muy útiles cuando se quiere actualizar el contenido de una variable sin necesidad de reescribir todo.
// ^Suma compuesta (+=)
// ^Este operador suma un valor al actual contenido de la variable y guarda el resultado en la misma variable. Es equivalente a hacer `x = x + valor`.
let variableConOperadorAsignacionCompuestoSuma = 2; //* Valor inicial: 2.
variableConOperadorAsignacionCompuestoSuma += 3; //* Se le suma 3. Resultado final: 5.

// ^Resta compuesta (-=)
// ^Este operador resta un valor al contenido actual de la variable y guarda el nuevo resultado en esa misma variable. Equivale a `x = x - valor`.
let variableConOperadorAsignacionCompuestoResta = 6; //* Valor inicial: 6.
variableConOperadorAsignacionCompuestoResta -= 2; //* Se le resta 2. Resultado final: 4.

// ^Multiplicación compuesta (*=)
// ^Este operador multiplica el valor actual de la variable por otro valor y guarda el resultado en la misma variable. Es igual a escribir `x = x * valor`.
let variableConOperadorAsignacionCompuestoMultiplicacion = 5; //* Valor inicial: 5.
variableConOperadorAsignacionCompuestoMultiplicacion *= 2; //* Se multiplica por 2. Resultado final: 10.

// ^División compuesta (/=)
// ^Este operador divide el valor actual de la variable entre otro valor, y guarda el resultado en la misma variable. Equivale a `x = x / valor`.
let variableConOperadorAsignacionCompuestoDivision = 14; //* Valor inicial: 14.
variableConOperadorAsignacionCompuestoDivision /= 2; //* Se divide entre 2. Resultado final: 7.

// Todo - Operadores aritméticos
// Todo - Los operadores aritméticos se utilizan para realizar operaciones matemáticas. Estos operadores permiten hacer sumas, restas, multiplicaciones, divisiones, y también obtener restos, potencias, entre otros.
// &Suma (+)
// &El operador de suma (`+`) se utiliza para **sumar dos valores numéricos**. Si ambos operandos son números, el resultado será la suma matemática. También se puede usar para concatenar cadenas de texto (strings).
const variableConOperadorAritmeticoSumaNumeros = 5 + 3; //* Se declara una variable que almacena el resultado de sumar 5 + 3. Resultado: 8.
const variableConOperadorAritmeticoSumaTexto = 'Variable con ' + 'valor de 2 cadenas de texto.'; //* Se declara una variable que almacena el resultado de sumar (concatenar) dos cadenas de texto. Resultado: 'Variable con valor de 2 cadenas de texto.'

// &Resta (-)
// &El operador de resta (`-`) permite **restar un valor de otro**. El resultado es la diferencia entre ambos valores.
const variableConOperadorAritmeticoResta = 3 - 15; //* Se declara una variable que almacena el resultado de restar 15 a 3. Resultado: -12.

// &Multiplicación (*)
// &El operador de multiplicación (`*`) se usa para **multiplicar dos valores numéricos**. Es útil para operaciones matemáticas comunes como obtener productos o escalas.
const variableConOperadorAritmeticoMultiplicacion = 5 * 7; //* Se declara una variable que almacena el resultado de multiplicar 5 por 7. Resultado: 35.

// &División (/)
// &El operador de división (`/`) permite **dividir un número entre otro**. El resultado será el cociente decimal o entero, dependiendo de los valores.
const vairableconOperadorAritmeticoDivision = 7 / 52; //* Se declara una variable que almacena el resultado de dividir 7 entre 52. Resultado aproximado: 0.1346.

// &Resto (%)
// &El operador de resto (`%`), también llamado **módulo**, se utiliza para **obtener el residuo de una división**. Por ejemplo, si tienes 5 dulces y los repartes entre 2 personas, cada una recibe 2 y sobra 1. Ese **1 que sobra es el resto**. Este operador es útil para determinar si un número es par o impar (`n % 2 === 0`), o para hacer repeticiones controladas.
const variableConOperadorAritmeticoResto = 5 % 2; //* Se declara una variable que almacena el residuo de dividir 5 entre 2. Resultado: 1 (sobra uno).

// &Exponente (**)
// &El operador de exponente (`**`) sirve para **elevar un número a una potencia**. Por ejemplo, `2 ** 3` significa "2 elevado a la 3" o 2 × 2 × 2. Este operador reemplaza a la función tradicional `Math.pow(base, exponente)`, ofreciendo una sintaxis más simple.
const variableConOperadorAritmeticoExponente = 2 ** 3; //* Se declara una variable que almacena el resultado de 2 elevado a la 3. Resultado: 8.

// &Aumentador (++): 
// &El operador de incremento (`++`) se utiliza para **sumar 1 al valor actual de una variable**. Es una forma rápida de hacer: `variable = variable + 1`. Este operador modifica el valor original de la variable, por lo que **solo se puede usar con `let` o `var`, pero no con `const`**, ya que `const` no permite cambios en su valor después de declarada.
let variableConOperadorAritmeticoAumentador = 3; //* Valor inicial: 3.
variableConOperadorAritmeticoAumentador++; //* Se incrementa en 1. Resultado final: 4.

// &Disminuidor (--): 
// &El operador de decremento (`--`) funciona de manera similar al incremento, pero **restando 1** al valor actual de la variable. También equivale a: `variable = variable - 1`. Al igual que el operador `++`, **no debe utilizarse con `const`**.
let variableConOperadorAritmeticoDisminuidor = 7; //* Valor inicial: 7.
variableConOperadorAritmeticoDisminuidor--; //* Se disminuye en 1. Resultado final: 6.

// Todo - Operadores lógicos
// Todo - Los operadores lógicos de comparación permiten evaluar si dos valores (ya sean variables o literales) son iguales o diferentes entre sí. Estas comparaciones siempre devuelven un **valor booleano**, es decir, `true` (verdadero) o `false` (falso), dependiendo del resultado de la evaluación. En JavaScript, existen dos formas principales de comparar: una comparación **relajada** (que no considera el tipo de dato) y una comparación **estricta** (que sí lo considera). Comprender estas diferencias es clave para evitar errores inesperados en el código.
// &Comparación de igualdad relajada (==)
// &El operador `==` compara si dos valores **son iguales en su contenido**, sin importar si tienen tipos de datos diferentes. Por ejemplo, compara un número (`3`) con un string (`'3'`) y los considera iguales porque su valor es el mismo. Esta comparación realiza una conversión implícita de tipo para hacer coincidir los valores. Siempre retorna `true` o `false` según el resultado de la comparación. Sin embargo, este tipo de comparación puede llevar a resultados confusos, por lo que se recomienda tener cuidado al usarlo.
const variableConOperadorLogicoComparacionIgualdadRelajada = 3 == '3'; //* Resultado: true. Aunque uno es número y el otro string, los valores son iguales y se consideran equivalentes.

// &Comparación de igualdad estricta (===)
// &El operador `===` realiza una comparación **más estricta**: no solo verifica que los valores sean iguales, sino que también **los tipos de datos deben coincidir**. Si se comparan un número (`5`) con un string (`'5'`), el resultado será `false`, incluso si sus contenidos parecen iguales. Esto evita errores por comparación de valores de tipos distintos. Es el método de comparación más recomendado en JavaScript.
const variableConOperadorLogicoComparacionIgualdadEstrcita = 5 === '5'; //* Resultado: false. Aunque los valores coinciden, el tipo (number vs string) es diferente.

// &Negación/Desigualdad relajada (!=)
// &El operador `!=` compara si dos valores **son diferentes en su contenido**, sin importar el tipo de dato. Si el contenido no coincide, retorna `true`; si coincide, retorna `false`. Al igual que `==`, realiza una conversión implícita de tipo antes de comparar. Este operador es útil, pero puede llevar a confusión si se trabaja con diferentes tipos de datos sin saberlo.
const variableConOperadorLogicoComparacionDesigualdadRelajada = 4 != '4'; //* Resultado: false. Los valores son iguales (4 y '4'), por lo tanto, no son diferentes. Retorna false.

// &Negación/Desigualdad estricta (!==)
// &El operador `!==` compara si dos valores **son diferentes**, considerando tanto su valor como su tipo de dato. Si alguno de estos no coincide, el resultado será `true`. Es una forma segura de validar que dos valores realmente no son iguales en ningún aspecto. Este operador es preferido cuando se quiere evitar ambigüedad en las comparaciones.
const variableConOperadorLogicoComparacionDesigualdadEstricta = 2 !== '2'; //* Resultado: true. Aunque ambos tienen valor 2, uno es número y el otro string. El tipo es diferente, así que son considerados distintos.

// &Comparación de valor mayor (>)
// &El operador `>` se utiliza para comparar si el valor a la izquierda es **mayor** que el de la derecha. Si efectivamente lo es, devuelve `true`; de lo contrario, devuelve `false`. Este operador solo compara valores numéricos o que puedan convertirse a números. Es útil en condiciones que evalúan si un valor supera a otro, como edades, precios, puntuaciones, etc.
const variableConOperadorLogicoComparacionValorMayor = 3 > 2; //* Resultado: true. El número 3 es mayor que 2, por lo tanto la comparación es verdadera.

// &Comparación de valor menor (<)
// &El operador `<` verifica si el valor a la izquierda es **menor** que el valor a la derecha. Si es así, retorna `true`; de lo contrario, `false`. Funciona igual que `>`, pero en sentido opuesto. Es útil cuando se desea saber si un valor está por debajo de cierto límite.
const variableConOperadorLogicoComparacionValorMenor = 3 < 3; //* Resultado: false. El número 3 no es menor que 3, por lo tanto la comparación es falsa.

// &Comparación de valor mayor o igual (>=)
// &El operador `>=` compara si el valor a la izquierda es **mayor o igual** al valor a la derecha. Si cumple cualquiera de las dos condiciones (mayor o igual), devuelve `true`; solo devuelve `false` si es estrictamente menor. Es comúnmente utilizado cuando se necesita establecer un rango mínimo incluido.
const variableConOperadorLogicoComparacionDeValorMayorIgual = 2 >= 2; //* Resultado: true. Ambos valores son iguales, por lo que cumple la condición de "mayor o igual".

// &Comparación de valor menor o igual (<=)
// &El operador `<=` funciona de manera similar, pero verifica si el valor de la izquierda es **menor o igual** al de la derecha. También devuelve `true` si los valores son iguales o si el de la izquierda es más pequeño. Es útil para establecer un rango máximo incluido.
const variableConOperadorLogicoComparacionDeValorMenorIgual = 3 <= 2; //* Resultado: false. El número 3 no es menor ni igual a 2, por lo tanto la comparación es falsa.

// &Conjuncion AND (&&)
// &El operador lógico `&&` (AND) se utiliza para validar si **todas las condiciones** conectadas son verdaderas. Solo devuelve `true` si **cada una** de las comparaciones es verdadera; si al menos una es falsa, el resultado será `false`. Es útil cuando se requiere que múltiples requisitos se cumplan al mismo tiempo, como validar que un usuario tenga cierta edad **y** haya aceptado los términos.
const variableConOperadorLogicoAnd = 23 == 1 && 13 == 35; //* Resultado: false. Ambas comparaciones son falsas, por lo tanto, el resultado es false.

// &Disyuncion OR (||)
// &El operador lógico `||` (OR) evalúa si **al menos una** de las condiciones conectadas es verdadera. Si **una o más** lo son, devuelve `true`; solo devuelve `false` si **todas** son falsas. Es útil cuando basta con que se cumpla alguna de varias condiciones posibles para ejecutar algo.
const variableConOperadorLogicoOr = 34 == 34 || 23 == 64; //* Resultado: true. Aunque la segunda condición es falsa, la primera es verdadera, por lo tanto el resultado total es true.

// Todo - Orden de prioridad de operadores lógicos
// Todo - En JavaScript, cuando se combinan múltiples operadores lógicos en una misma expresión, como `&&` (AND) y `||` (OR), es importante conocer el **orden de prioridad** o **precedencia** con el que se evalúan. 
// &El operador `&&` tiene **mayor prioridad** que el operador `||`, por lo tanto, las expresiones que usan `&&` se evaluarán primero, antes de considerar el `||`. Esto puede afectar completamente el resultado de una operación lógica compuesta. Además, si la expresión incluye comparaciones como `==` o `!=`, estas se evaluarán antes que los operadores lógicos. El siguiente ejemplo muestra cómo una expresión con varios operadores se resuelve internamente paso a paso:
const resultadoConPrioridadOperadores = 4 == 2 && 3 == 3 || 4 == 4 != 4;
//* Paso 1: 4 == 2 → false (comparación de igualdad relajada)
//* Paso 2: 3 == 3 → true
//* Paso 3: 4 == 4 → true
//* Paso 4: true != 4 → true (porque `true` se convierte internamente en 1, y 1 != 4)
//* Paso 5: false && true → false (se resuelve primero el AND)
//* Paso 6: false || true → true (luego se evalúa el OR)
//* Resultado final: true

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ~Sintaxis de las variables
// ~En JavaScript, para declarar una variable es necesario seguir una estructura básica: primero se escribe la palabra clave (`var`, `let` o `const`), luego el nombre de la variable, y opcionalmente un valor que se le asignará usando el operador `=`. Pero más allá de esta estructura, es muy importante que el nombre de la variable cumpla con ciertas reglas que dicta el lenguaje. Por ejemplo, los nombres deben comenzar con una letra, un guion bajo (`_`) o un signo de pesos (`$`), pero **no pueden comenzar con un número** ni contener símbolos especiales como `!`, `@`, `-`, etc. Además, **no se permiten espacios** en los nombres. También es importante saber que JavaScript es un lenguaje **case-sensitive**, es decir, distingue entre mayúsculas y minúsculas, por lo que `nombre`, `Nombre` y `NOMBRE` son variables distintas. Aunque se pueden usar varios estilos para escribir nombres de variables, estos estilos son conocidos como **convenciones de nomenclatura** (por ejemplo: `camelCase`, `snake_case`, `PascalCase`, `kebab-case`, etc.). En JavaScript se recomienda utilizar **camelCase** como estándar, ya que mejora la legibilidad del código y es ampliamente aceptado por la comunidad.
// Todo - Nombres válidos para variables
// Todo - JavaScript permite declarar nombres de variables de distintas formas siempre y cuando se respeten las reglas del lenguaje. No todos los nombres son válidos; usar un carácter prohibido o iniciar el nombre con un número generará errores. Las formas aceptadas están basadas en convenciones de nomenclatura, usar mayúsculas, guiones bajos o el símbolo de pesos. Conocer estas formas ayuda a escribir código más legible, organizado y sin errores.
// &Convenciones de nomenclatura
// &En JavaScript existen varias convenciones de nomenclatura que se pueden usar para dar nombre a las variables, como `camelCase`, `PascalCase`, `snake_case`, entre otras. Estas convenciones no son reglas del lenguaje, sino **estilos aceptados por la comunidad** para mejorar la legibilidad y coherencia del código. Aunque se pueden usar varios estilos válidos, el más recomendado en JavaScript es **camelCase**, ya que se alinea con las buenas prácticas del lenguaje. Este estilo consiste en escribir varias palabras unidas sin espacios, donde la primera palabra va en minúsculas y las siguientes comienzan con mayúscula, lo que facilita distinguir los distintos conceptos dentro del nombre de la variable.
const variableConNombreCamelCase = 'Esta es una variable con nombre en formato camelCase.'; //* Nombre formado con palabras unidas y la primera letra de cada palabra (menos la primera) en mayúscula.

// &Mayúscula
// &JavaScript permite declarar nombres de variables que comiencen con mayúscula, aunque esta práctica está más relacionada con constructores o clases. En general, no es recomendable comenzar variables comunes con mayúscula para evitar confusiones, pero el lenguaje lo permite.
const VariableConNombreIniciandoMayuscula = 'Esta es una variable con nombre iniciando con mayúscula.'; //* El nombre inicia con una letra mayúscula; esto es válido, aunque poco común para variables estándar.

// &Signo de pesos ($)
// &El signo de pesos (`$`) es válido en los nombres de variables y puede colocarse al inicio, al final o entre letras. Aunque no tiene un significado especial para el lenguaje, suele usarse por convención en librerías como jQuery o para identificar elementos del DOM o valores monetarios.
const $variableConNombreIniciandoPesos = 'Esta es una variable con nombre que comienza con el signo de pesos ($).'; //* El nombre inicia con el símbolo `$`, el cual es aceptado sin problema por el lenguaje.

// &Guion bajo (_)
// &El guion bajo (`_`) también está permitido en nombres de variables. Se usa con frecuencia para señalar que una variable es privada o interna, aunque esta convención es solo de estilo (no hay privacidad real en JavaScript). También puede servir para mejorar la legibilidad cuando se combinan varias palabras.
const _variableConNombreIniciandoGuionBajo = 'Esta es una variable con nombre que comienza con guion bajo (_).'; //* Variable que inicia con guion bajo; útil para convenciones como variables internas o privadas.

// Todo - Case Sensitive
// Todo - JavaScript es un lenguaje **case-sensitive**, lo que significa que distingue entre mayúsculas y minúsculas en los nombres de las variables. Por ejemplo, las variables `usuario`, `Usuario` y `USUARIO` son consideradas completamente diferentes entre sí. Esta característica obliga a ser muy cuidadosos al escribir o reutilizar nombres, ya que un error en una sola letra puede provocar que una variable no sea reconocida o que el código no funcione como se espera.
// &JavaScript es un lenguaje case-sensitive, lo que significa que distingue entre mayúsculas y minúsculas. Por lo tanto, dos variables con el mismo nombre pero con diferencias en letras mayúsculas o minúsculas serán reconocidas como variables completamente distintas.
const variableConCaseSensitive = 'Esta es una variable llamada variableConCaseSensitive.'; //* Nombre en camelCase con mayúsculas internas.
const variableconcasesensitive = 'Esta es otra variable distinta llamada variableconcasesensitive.'; //* Nombre completamente en minúsculas, diferente de la anterior por el case-sensitive.

// Todo - Convenciones de nomenclatura
// Todo - En JavaScript, existen varias convenciones de nomenclatura que se utilizan para nombrar variables, y aunque ninguna es una regla obligatoria del lenguaje, seguir una convención ayuda a mantener el código más legible y organizado. Entre las más comunes están camelCase, snake_case y PascalCase. Cada una tiene un formato distinto para unir palabras dentro del nombre, facilitando así la lectura y comprensión del código, especialmente cuando se trabaja en equipo o proyectos grandes.
// &CamelCase
// &El estilo camelCase es el más utilizado y recomendado en JavaScript para nombrar variables. Consiste en escribir varias palabras juntas sin espacios, donde la primera palabra inicia con minúscula y cada palabra subsiguiente comienza con mayúscula. Esto ayuda a distinguir visualmente las palabras y hace que el nombre sea más fácil de leer y entender.
const variableConConvencionNomenclaturaCamelCase = 'Esta es una variable cuyo nombre está definido usando la convención camelCase.'; //* Nombre compuesto por palabras unidas, comenzando con minúscula y con mayúscula en cada palabra interna.

// &Snake_case
// &La convención snake_case consiste en escribir todas las palabras en minúsculas y separarlas usando guiones bajos (`_`). Es muy común en otros lenguajes o contextos donde se prefieren los nombres con separación clara pero sin espacios. Aunque menos usado en JavaScript, es válido y a veces útil para variables o funciones que vienen de otros lenguajes o frameworks.
const variable_con_convencion_nomenclatura_snakecase = 'Esta es una variable cuyo nombre está definido usando la convención snake_case.'; //* Nombre compuesto por palabras separadas por guiones bajos y en minúsculas.

// &PascalCase
// &La convención PascalCase es similar a camelCase, pero aquí la primera palabra también inicia con mayúscula. Este estilo es comúnmente usado para nombrar clases o constructores en JavaScript, y ayuda a distinguirlas de variables o funciones regulares.
const VariableConConvencionNomenclaturaPascalCase = 'Esta es una variable cuyo nombre está definido usando la convención PascalCase.'; //* Nombre compuesto por palabras unidas, empezando con mayúscula en cada palabra, incluyendo la primera.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ~Scope (disponibilidad)
// ~En JavaScript, el *scope* (alcance o disponibilidad) se refiere al contexto en el que una variable puede ser accedida o usada. Para visualizarlo, podemos imaginar que el código tiene jerarquías parecidas a una familia: el bloque principal (fuera de las llaves `{}`) es como un "padre", y cada bloque encerrado entre llaves `{}` (por ejemplo, dentro de funciones, condicionales o bucles) es un "hijo". Las variables declaradas **fuera** de las llaves (en el padre) pueden ser accedidas **dentro** del bloque (por los hijos), pero las variables creadas **dentro** de las llaves solo existen en ese bloque y **no pueden ser accedidas por el padre**. Esto se conoce como *scope local* (dentro del bloque) y *scope global* (fuera del bloque). Además, si se declara una variable con el mismo nombre tanto fuera como dentro del bloque, JavaScript las trata como variables completamente **independientes**, incluso si son del mismo tipo (`const`, `let`). En ese caso, dentro del bloque se utilizará únicamente la versión local (la que esté más cerca).
console.log('=========== Scope (disponibilidad). ==========='); //* Título visual que se imprime en consola para señalar el inicio de la sección dedicada a explicar el concepto de scope (disponibilidad de variables según el contexto donde son declaradas).

// &Variable dentro y fuera del scope.
// &En este ejemplo se declara una variable `const` llamada `variableParaScopeDentroFuera` en la raíz (fuera del bloque) con un valor de 5, y luego **se vuelve a declarar otra variable con el mismo nombre dentro de un bloque**, pero con un valor distinto (2). Ambas variables son válidas y no provocan error, ya que pertenecen a diferentes *scopes*. Dentro del bloque se usará la versión local (la variable declarada dentro del scope), mientras que fuera se usará la versión global (la vairable declarada fuera del scope).
console.log('--- Variable dentro y fuera del scope. ---'); //* Subtítulo visual en consola que identifica un ejemplo donde una variable se declara tanto dentro como fuera de un bloque. Sirve para diferenciar y observar cómo cada instancia actúa dentro de su propio scope.
const variableParaScopeDentroFuera = 5; //* Declaración en el scope global (raíz), valor: 5.
{
    const variableParaScopeDentroFuera = 2; //* Declaración en el scope local (bloque), valor: 2.
    console.log(variableParaScopeDentroFuera); //* Se imprime 2, ya que estamos dentro del bloque.
}
console.log(variableParaScopeDentroFuera); //* Se imprime 5, ya que estamos fuera del bloque.

// &Variable dentro pero no fuera del scope.
// &Aquí se declara una variable solo dentro de un bloque (entre llaves `{}`), por lo que su alcance está limitado únicamente a ese bloque. Al intentar acceder a ella fuera del bloque, se generará un error porque **la variable no existe en el scope global**.
console.log('--- Variable dentro pero no fuera del scope. ---'); //* Subtítulo visual en consola que señala el inicio del ejemplo donde una variable es declarada dentro de un bloque y luego se intenta acceder a ella fuera del mismo, generando un error por estar fuera de su scope.
{
    const variableDentroNoFuera = 3; //* Declaración en el scope local (bloque), valor: 3.
    console.log(variableDentroNoFuera); //* Se imprime 3, ya que estamos dentro del bloque.
}
//console.log(variableDentroNoFuera); //* ❌ Error: Si se trata de hacer un console log de la variableDentroNoFuera, nos arrojara un error indicando que la vairable no esta definida, por lo que fuera del bloque o del scope esta no existe.

// &Variable fuera pero no dentro del scope.
// &En este caso, se declara una variable fuera del bloque (en el scope global) y luego se intenta acceder a ella tanto fuera como dentro del bloque. Como las variables globales **sí pueden ser leídas desde dentro de bloques**, este ejemplo funcionará correctamente. La variable estará disponible en ambos lugares.
console.log('--- Variable fuera pero no dentro del scope. ---'); //* Subtítulo visual que marca un ejemplo en el que una variable es declarada fuera de un bloque (en el scope global) y luego es utilizada tanto dentro como fuera del mismo. Esto permite ver que las variables globales son accesibles desde scopes internos.
const variableFueraNoDentro = 7; //* Declaración en el scope global (raíz), valor: 7.
{
    console.log(variableFueraNoDentro); //* Se imprime 7, ya que el bloque puede acceder a variables globales.
}
console.log(variableFueraNoDentro); //* Se imprime 7 nuevamente, accediendo desde el mismo scope global.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ~Parseo
// ~El parseo (también conocido como **conversión de tipo**) es el proceso mediante el cual se transforma un dato de un tipo a otro. En JavaScript, una de las conversiones más comunes es la de un **string (texto)** a un **número**, ya sea entero (`int`) o decimal (`float`). Esto es muy útil, por ejemplo, cuando los valores numéricos se reciben desde formularios o bases de datos en forma de texto y se desea realizar operaciones matemáticas con ellos. JavaScript ofrece funciones como `parseInt()` y `parseFloat()` para realizar este tipo de conversiones de forma explícita.
console.log('=========== Parseo. ==========='); //* Título principal que indica que inicia la sección de parseo o conversión de tipos.
const variableParaParseoTipoInt = '5'; //* Esta variable contiene un valor numérico, pero en forma de texto (string).
const vairableParaParseoTipoFloat = '2.5'; //* Esta variable contiene un número decimal, pero también como texto (string).
let variableParaAlmacenarParseo; //* Variable utilizada para almacenar el resultado del parseo y posterior operación.

// &Parseo de tipo string a número entero 'int' (parseInt)
// &La función `parseInt()` convierte una cadena de texto que representa un número entero en un valor numérico real. Si la cadena contiene decimales, estos son descartados o redondeados. Es útil cuando se desea trabajar solo con valores enteros.
console.log('--- Parseo de string a número entero (parseInt). ---'); //* Subtítulo explicativo que marca el inicio de la conversión con `parseInt`.
variableParaAlmacenarParseo = 5 + parseInt(variableParaParseoTipoInt); //* El string '5' se convierte en número 5, luego se suma a 5. Resultado final: 10.
console.log(variableParaAlmacenarParseo); //* Se imprime el resultado: 10.

// &Parseo de tipo string a número decimal 'float' (parseFloat)
// &La función `parseFloat()` convierte una cadena de texto que representa un número decimal en un valor `float`. A diferencia de `parseInt()`, conserva los decimales.
console.log('--- Parseo de string a número con decimales (parseFloat). ---'); //* Subtítulo explicativo para `parseFloat`.
variableParaAlmacenarParseo = 2.5 + parseFloat(vairableParaParseoTipoFloat); //* El string '2.5' se convierte en número 2.5, luego se suma a 2.5. Resultado final: 5.
console.log(variableParaAlmacenarParseo); //* Se imprime el resultado: 5.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ~Funciones
// ~Una función en JavaScript es un bloque de código **reutilizable** que sirve para ejecutar una tarea específica. Se puede pensar en una función como un conjunto de instrucciones que se agrupan bajo un **nombre especial**, y ese nombre permite invocar o ejecutar ese bloque de instrucciones cada vez que sea necesario. Las funciones pueden ser llamadas desde cualquier parte del código, lo cual resulta útil para **evitar la repetición** de instrucciones y hacer que el código sea más **organizado, legible y eficiente**.
console.log('=========== Funciones. ==========='); //* Muestra un mensaje en la consola para indicar el inicio de la sección sobre funciones.

// Todo - Sintaxis de una función
// Todo - Las funciones en JavaScript permiten agrupar bloques de código que realizan una tarea específica y que pueden ser reutilizados en cualquier parte del programa. Existen **diferentes formas de declarar funciones**, siendo las dos más comunes: la función **tradicional** (también conocida como función declarativa) y la función **de flecha** (arrow function). La **función tradicional** utiliza la palabra clave `function` seguida de un nombre, paréntesis (que pueden contener parámetros) y un bloque de instrucciones dentro de llaves. Esta forma ha estado presente desde las primeras versiones de JavaScript. Por otro lado, la **función de flecha**, introducida en ECMAScript 6 (ES6), permite una sintaxis más concisa y moderna. Se caracteriza por eliminar la palabra clave `function` y usar el operador `=>` (flecha) después de los paréntesis. Aunque ambas formas son funcionalmente equivalentes en muchos casos, tienen diferencias importantes, especialmente en cómo manejan el contexto del `this` dentro del código, siendo la función de flecha más adecuada cuando se desea preservar el `this` del entorno en que fue definida.
// &Sintaxis de función tradicional
// &La función tradicional se declara utilizando la palabra clave `function`, seguida de un nombre y un bloque de instrucciones encerrado entre llaves. Es ideal para definiciones claras y estructuradas, y permite el uso del concepto de `hoisting`, que permite invocar la función antes de haberla declarado en el código.
function nombreFuncion(parametro1, parametro2) { //* Se declara una función llamada `nombreFuncion` que recibe dos parámetros (`parametro1` y `parametro2`).
    lineaDeCodigoQueEjecutaraLaFuncion; //* Dentro del cuerpo de la función se encuentra una o varias instrucciones que serán ejecutadas cuando se invoque la función.
} //* Cierre del bloque de la función.

//* Estructura base de una función declarativa:
//* - `function`: palabra reservada que indica que estamos definiendo una función.
//* - `nombreFuncion`: nombre personalizado que permitirá identificar y llamar a la función.
//* - `(parametro1, parametro2)`: espacio donde pueden declararse variables internas llamadas parámetros, separados por comas si hay más de uno.
//* - `{ ... }`: bloque de instrucciones que ejecutará la función cuando sea invocada.

// &Sintaxis de función de flecha
// &La función de flecha (`arrow function`) es una forma más moderna, concisa y expresiva de declarar funciones en JavaScript. A diferencia de la función tradicional, **no utiliza la palabra clave `function`**, sino que se define a través del operador de flecha `=>`. En su estructura, la función es **asignada a una variable**, lo que significa que su definición se guarda dentro de una constante o variable (`let`, `const`), y esa variable pasa a funcionar como el identificador de la función. Este tipo de función es especialmente útil para funciones breves o de una sola línea, y es muy utilizada en programación funcional, callbacks, y métodos de arreglos. Además, **no tiene su propio `this`**, sino que **hereda el valor de `this` del contexto en el que fue creada**, lo cual la hace diferente de la función tradicional. Cabe destacar que **no se puede utilizar antes de ser declarada** (por no tener hoisting), por lo que siempre debe definirse antes de invocarla en el código.
// ^Forma normal de sintaxis de función de flecha
// ^Las funciones de flecha en su forma completa o "normal" utilizan paréntesis para definir los parámetros, y un bloque de llaves `{}` para encapsular el cuerpo de la función. Esta forma es necesaria cuando se usan **dos o más parámetros**, **ningún parámetro**, o cuando la función realiza varias instrucciones (más de una línea). También es obligatoria si dentro de la función se usa `return`, ya que el valor debe ser devuelto explícitamente. A nivel de estructura, esta forma está compuesta por: palabra clave para declarar variable (`let`, `const` o `var`), seguida del **nombre de la función**, el operador de asignación `=`, luego los **paréntesis con los parámetros** (si los hay), el operador de flecha `=>`, y finalmente el bloque de código encerrado entre llaves `{}`. Esta sintaxis es más expresiva y clara cuando la lógica de la función es compleja o extensa.
let nombreFuncionOriginal = (parametro1, parametro2) => { //* Se declara una función de flecha que recibe dos parámetros.
    lineaDeCodigoQueEjecutaraLaFuncion; //* Aquí va el código que se ejecutará cada vez que se invoque la función.
} //* Cierre del bloque de la función.

//* Estructura base de una función de flecha completa:
//* - `let nombreFuncion =`: se declara una variable que almacenará la función.
//* - `(parametro1, parametro2)`: se listan los parámetros que la función recibirá. Se deben usar paréntesis cuando hay más de un parámetro o ninguno.
//* - `=>`: operador de flecha que indica el inicio del cuerpo de la función.
//* - `{ ... }`: llaves que encierran el bloque de instrucciones que se ejecutarán cuando se llame a la función.

// ^Forma breve de sintaxis de función de flecha
// ^Cuando la función de flecha es **muy simple**, es decir, solo realiza **una única instrucción** y **no necesita escribir `return` explícitamente**, se puede usar una **sintaxis abreviada**. En esta forma se pueden **omitir las llaves `{}`** y el `return` se hace de forma implícita. Además, si la función tiene **solo un parámetro**, se pueden **omitir los paréntesis** alrededor de este. Esta versión es útil para simplificar funciones cortas, como las que se usan en métodos como `map()`, `filter()`, o `forEach()`. La estructura se forma así: `let + nombreFuncion + = + parametro + => + expresión`.
let nombreFuncionBreve = parametro1 => parametro1 + 3; //* Forma simplificada de una función de flecha con un solo parámetro (`parametro1`). No se usan paréntesis porque solo hay un parámetro, y no se usan llaves porque el cuerpo de la función contiene solo una línea. El resultado de `parametro1 + 3` se retorna automáticamente y queda **almacenado en la variable `nombreFuncionBreve`.

// Todo - Llamamiento / ejecución de una función
// Todo - Una vez que una función ha sido declarada correctamente, esta **no se ejecutará automáticamente por sí sola**. Para que la función haga su trabajo, es necesario **"llamarla" o "invocarla" manualmente** en el código. Este proceso se llama **llamamiento** o **ejecución** de la función. Para ello, se debe escribir el **nombre de la función seguido de paréntesis** `()`, tal como fue definido en su declaración. Si la función espera parámetros, estos deben colocarse dentro de los paréntesis al momento de llamarla; si no necesita parámetros, los paréntesis van vacíos. Esta acción le dice al programa: “ahora ejecuta el bloque de instrucciones que definí dentro de esta función”. Sin el llamamiento, la función existe pero **no hará nada** por sí sola.
console.log('--- Llamamiento / ejecucion de una funcion ---'); //* Muestra en consola un mensaje que indica el ejemplo del llamamiento de una funcion.
function funcionConLlamamiento() { //* Se declara una función tradicional llamada `funcionConLlamamiento`. No recibe parámetros.
    console.log('Este console.log lo ejecuta la funcion y esta misma se ejecuta porque se manda llamar'); //* Instrucción que se ejecutará cuando se llame a la función.
} //* Cierre del bloque de la función.

funcionConLlamamiento(); //* Llamamiento o invocación de la función. Aquí es cuando se ejecuta el código definido dentro de la función. Si no se llama, la función no hace nada.

// Todo - Parámetros en las funciones
// Todo - En JavaScript, las funciones pueden recibir uno o más **parámetros**, que son variables locales que sirven como entradas para que la función realice su tarea. Si una función está definida con parámetros pero no se le pasan valores al ejecutarse, dichos parámetros serán `undefined`. Esto puede causar errores lógicos o resultados inesperados como `NaN` en operaciones matemáticas. Es buena práctica asegurarse de que, si una función requiere datos, estos se pasen correctamente al invocarla para garantizar su correcto funcionamiento.
// &Función sin paso de parámetros
// &Cuando se llama a una función sin pasarle los argumentos requeridos, los parámetros internos (`x`, `y`) serán `undefined`, lo que puede llevar a resultados inválidos si se usan en operaciones matemáticas. Aquí se demuestra cómo el no pasar valores a una función puede afectar su comportamiento.
console.log('--- Función sin paso de parámetros ---'); //* Muestra en consola un mensaje que indica el ejemplo de una función que puede no recibir argumentos.

function funcionSinPasoDeParametros(x, y) { //* Se declara una función llamada `funcionSinPasoDeParametros` que espera dos parámetros.
    return x + y; //* Se retorna la suma. Si no se pasan argumentos al llamarla, estos serán `undefined` y la operación dará de resultado `NaN`.
} //* Fin del bloque de la función.

var valorQueAlmacenaValorDeFuncion = funcionSinPasoDeParametros(); //* No se pasan parámetros. `x` y `y` son `undefined`.
console.log(valorQueAlmacenaValorDeFuncion); //* Resultado: NaN (Not a Number). No se puede sumar `undefined + undefined`.

// &Función con paso de parámetros 
// &En este ejemplo sí se pasan los valores esperados a la función. Los parámetros `x` y `y` reciben los números `3` y `4`, respectivamente, y se ejecuta la suma correctamente. Este es el uso correcto de funciones con parámetros.
function funcionConPasoDeParametros(x, y) { //* Se declara una función llamada `funcionConPasoDeParametros` que espera recibir dos parámetros.
    return x + y; //* Retorna la suma de los valores que se pasen como argumento al momento de invocar la función.
} //* Cierre de la función.

valorQueAlmacenaValorDeFuncion = funcionConPasoDeParametros(3, 4); //* Se pasan los valores 3 y 4 como argumentos.
console.log(valorQueAlmacenaValorDeFuncion); //* Resultado: 7. La función suma correctamente los dos valores pasados.

// Todo - Retorno dentro de funciones (return)
// Todo - En JavaScript, las funciones no solo pueden ejecutar tareas, sino también **devolver un resultado** utilizando la palabra clave `return`. Cuando una función utiliza `return`, esta "envía de vuelta" un valor al lugar donde fue llamada, lo cual permite almacenar ese valor en una variable, utilizarlo en cálculos u operaciones, o imprimirlo en consola. Además, las funciones pueden recibir **parámetros**, que son variables que se pasan a la función en el momento de invocarla. Estos parámetros se escriben dentro de los paréntesis de la función al declararla, y en el momento de llamar a la función, se pueden pasar valores directos (como números o strings) o variables ya existentes. Cuando la función es llamada, esos valores **se asignan en orden** a los parámetros definidos, y luego pueden ser utilizados dentro del cuerpo de la función como cualquier otra variable. Esta combinación de parámetros y `return` permite que las funciones sean **flexibles, reutilizables y dinámicas**, ya que pueden operar con distintos datos de entrada y devolver distintos resultados según el caso.
// &Funcion sin retorno
// &Una función sin retorno es aquella que **no utiliza la palabra `return`** dentro de su cuerpo, lo que significa que no devuelve ningún valor al lugar desde donde fue llamada. Aunque no retorne un valor, sí puede ejecutar cualquier operación o instrucción dentro de sus llaves, como mostrar mensajes en consola, realizar cálculos internos o modificar variables globales. El resultado de esas operaciones **solo estará disponible dentro del alcance de la función** y no podrá ser reutilizado fuera de ella. Al invocar una función sin `return`, si se intenta almacenar su resultado en una variable, esta contendrá el valor `undefined`, ya que la función no devuelve nada explícitamente.
console.log('--- Funcion sin return. ---'); //* Imprime en consola un mensaje que indica un ejemplo de función que sí retorna un valor.

function funcionQueNoRetornaUnValor(x, y) {
    const z = x + y;
    console.log(`Este console log se ejecuta dentro de la función. Se pasan dos parámetros y se realiza una suma, pero como no hay 'return', el resultado (z = ${z}) está disponible solo dentro de esta función.`);
}

const variableConValorDeLaFuncionSinReturn = funcionQueNoRetornaUnValor(5, 6);
console.log(`Este console log muestra el contenido de la variable que intenta almacenar el resultado de la función. Pero como no hay 'return', el valor es:`, variableConValorDeLaFuncionSinReturn); //* Resultado: undefined
//* Se llama a la función y se le pasan los valores 5 y 6 como parámetros.
//* Dentro de la función se calcula la suma y se muestra en consola, pero como no hay 'return', la función no devuelve ningún valor.
//* Por eso, la variable 'variableConValorDeLaFuncionSinReturn' tendrá como valor 'undefined'.

// &Funcion con retorno
// &Una función con retorno es aquella que **devuelve un valor específico** al lugar donde fue llamada usando la palabra clave `return`. Al definir parámetros en la función, podemos pasarle datos externos en el momento de invocarla. Estos valores se usan dentro del bloque de código, y el `return` se encarga de enviar el resultado de las operaciones al exterior. Este valor retornado puede ser almacenado en una variable, mostrado por consola o utilizado directamente en cálculos. Gracias a esto, las funciones con `return` son más flexibles y reutilizables, ya que permiten trabajar con datos dinámicos y generar respuestas útiles fuera del bloque funcional.
console.log('--- Funcion con return. ---'); //* Imprime en consola un mensaje que indica un ejemplo de función que no retorna un valor
function funcionQueRetornaUnValor(x, y) {
    return x + y;
}
//* Se recibe como parámetros 'x' y 'y', y se retorna el resultado de sumarlos.
//* La palabra `return` finaliza la ejecución de la función y devuelve el valor calculado (en este caso, la suma de x + y).

const variableConValorDelRetornoDeFuncion = funcionQueRetornaUnValor(3,6);
//* Se llama a la función y se le pasan dos valores: 3 y 6.
//* Estos valores se asignan a los parámetros 'x' y 'y'.
//* La función ejecuta la suma y retorna el valor 9.
//* Ese valor retornado se almacena en la variable 'variableConValorDelRetornoDeFuncion'.

console.log(variableConValorDelRetornoDeFuncion); //* Resultado: 9

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ~Objetos
// ~Un objeto en JavaScript es una **estructura de datos compleja** que permite almacenar múltiples valores relacionados en una sola entidad. Está compuesto por pares clave-valor, donde cada **clave** (también llamada propiedad) actúa como el nombre que identifica un dato, y cada **valor** es la información asociada a esa clave. Los objetos pueden representar elementos del mundo real como un coche, una persona, un producto o cualquier cosa que tenga características (propiedades) y acciones (métodos). En la programación orientada a objetos, los objetos pueden construirse a partir de **clases** que definen su estructura y comportamiento. Una característica poderosa de los objetos es que **pueden contener otros objetos dentro de sí mismos**, permitiendo modelar estructuras complejas. Además, **no hay restricción en reutilizar nombres de claves** entre diferentes objetos, ya que cada objeto es independiente y sus propiedades son locales a él. Es decir, si un objeto `casa1` tiene la clave `color` y otro objeto `casa2` también tiene `color`, no hay conflicto porque pertenecen a contextos diferentes.
console.log('=========== Funciones. ==========='); //* Muestra un mensaje en la consola para indicar el inicio de la sección sobre objetos.

// Todo - Sintaxis de un objeto
// Todo - La sintaxis básica de un objeto en JavaScript consiste en declarar una variable usando `var`, `let` o `const`, seguida del nombre del objeto y el signo `=`. Luego se abren llaves `{}` donde se escriben las **propiedades** del objeto en pares de clave-valor, separados por comas. Cada par se compone de un **identificador (clave)** seguido de dos puntos `:` y un **valor asociado**. Los valores pueden ser de cualquier tipo de dato: `string`, `number`, `boolean`, `array`, `function`, `otro objeto`, etc. La estructura general es: `nombreObjeto = { clave1: valor1, clave2: valor2, ... }`. Es importante recordar que el último par **no debe llevar coma final**, aunque JavaScript lo tolera en versiones modernas. Además, aunque un objeto se declare con `const`, **sí es posible modificar sus propiedades internas** (agregar, cambiar o eliminar claves). Lo que no se permite es **reasignar completamente** el objeto a otra estructura (por ejemplo, `objeto = nuevoObjeto` generaría un error). Esta es una distinción clave entre la inmutabilidad de la **referencia** y la mutabilidad de su **contenido interno**.
var auto = { //* Se declara una variable con la palabra clave `var` y el nombre `auto`. Luego se utiliza el operador de asignación `=` y se abren llaves `{}`, lo cual indica que se está creando un objeto.
    marca: 'Nissan',   //* Clave 'marca' con valor tipo string. Representa la marca del automóvil.
    modelo: 'Tsuru',   //* Clave 'modelo' con valor tipo string. Indica el modelo del auto.
    peso: 1505,        //* Clave 'peso' con valor numérico. Indica el peso en kilogramos.
    color: 'blanco',   //* Clave 'color' con valor tipo string. Representa el color del vehículo.
} //* El objeto `auto` contiene 4 propiedades distintas. Cada clave está separada por comas dentro del bloque `{}`.

// Todo - Tipo de claves y sus valores
// Todo - En JavaScript, los objetos están formados por pares clave:valor, y **las claves pueden almacenar prácticamente cualquier tipo de dato**. Esto incluye tipos primitivos como `string`, `number`, `boolean`, `null` o `undefined`, pero también estructuras más complejas como `arrays`, `funciones` y otros `objetos`. Esta versatilidad permite representar datos muy completos y estructurados dentro de un solo objeto. Por ejemplo, una clave puede contener otra función que será ejecutada como parte del objeto, o un objeto dentro de otro, formando así **objetos anidados**. Cuando una clave almacena un objeto, se usa esta sintaxis: `nombreClave: { ... }`, lo que permite construir jerarquías o subniveles de información dentro del objeto principal.
const objetoConDiversosTiposDeClabes = { //*Se abre un objeto con el nombre de objetoConDiversosTiposDeClabes.
    claveTipoStrin: 'Clave que almacena una cadena de texto.', //* Clave que guarda un valor tipo string.
    claveTipoInt: 3, //* Clave que guarda un número entero.
    claveTipoFloat: 4.6, //* Clave que guarda un número con decimales (float).
    claveTipoNull: null, //* Clave que guarda el valor `null`, lo que indica ausencia intencional de valor.
    claveTipoArray: ['Elemento1', 2, 'Elemento3', 4], //* Clave que almacena un arreglo con elementos mixtos (string y number).
    claveTipoFuncion: function funcionDentroDeObjeto() { codigoQueEjecutaraLaFuncion }, //* Clave que almacena una función. Esta función puede ser llamada como parte del objeto.
    claveTipoObjeto: { //* Clave que guarda otro objeto como valor. Esto crea un objeto anidado.
        claveDentroDeClaveQueSeVuelveObjeto: 'clave dentro de una clave como objeto.' //* Clave interna dentro del objeto anidado.
    } //* Cierre del objeto anidado.
}; //* Cierre del objeto principal.

// Todo - Llamamiento de un objeto y sus claves
// Todo - En JavaScript, un objeto es una estructura que almacena datos en forma de pares clave:valor. Una vez que el objeto ha sido declarado, podemos acceder a sus datos usando el nombre del objeto seguido de un punto (`.`) o mediante corchetes `["clave"]`. Este proceso se llama **llamamiento de una propiedad** o **acceso a una clave del objeto**. La forma más común y legible de hacerlo es mediante la **notación de punto** (`objeto.propiedad`). Sin embargo, también existe la **notación de corchetes** (`objeto["propiedad"]`), la cual es útil cuando el nombre de la clave contiene caracteres especiales, espacios o es dinámico. Ambas formas devuelven el **valor asociado** a la clave. Si la propiedad no existe, el resultado será `undefined`, indicando que dicha clave no está presente en el objeto.
// &Llamamiento de objeto mediante (.)
// &Esta forma de acceso utiliza la notación de punto (`objeto.propiedad`) y es la manera más directa, clara y habitual de llamar una propiedad de un objeto en JavaScript. Solo puede usarse si el nombre de la propiedad es una palabra válida como identificador (sin espacios, guiones ni símbolos). Es ideal cuando se conoce la clave de antemano y se quiere mantener el código más limpio y legible.
console.log('--- Llamamiento objeto con clave mediante punto (.). ---'); //* Imprime en consola un mensaje que indica un ejemplo de llamamiento de un objeto con una clave mediante (notación punto).

var consolaVideojuegos = { //* Se declara un objeto llamado `consolaVideojuegos` que contiene cuatro propiedades distintas.
    marca: 'Nintendo', //* Propiedad 'marca' con valor tipo string.
    modelo: 'Switch', //* Propiedad 'modelo' con valor tipo string.
    color: 'Rojo y azul', //* Propiedad 'color' con valor tipo string.
    espacio: 245 //* Propiedad 'espacio' con valor tipo number (sin coma final, ya que es la última).
}; //* Cierre del objeto

console.log(consolaVideojuegos.marca); //* Se accede a la propiedad 'marca' usando notación de punto. Resultado: 'Nintendo'.

// &Llamamiento de objeto mediante ([])
// &Esta forma de acceso usa corchetes (`objeto["clave"]`) y es especialmente útil cuando el nombre de la propiedad no es un identificador válido (por ejemplo, contiene espacios o caracteres especiales), o si la propiedad que se desea acceder está almacenada en una variable. Aunque es un poco más extensa visualmente, ofrece más flexibilidad y se vuelve indispensable en casos dinámicos.
console.log('--- Llamamiento objeto con clave mediante corchetes ([]). ---'); //* Imprime en consola un mensaje que indica un ejemplo de llamamiento de un objeto con una clave mediante (notación corchetes).

var consolaVideojuegos = { //* Se vuelve a declarar el objeto `consolaVideojuegos` con las mismas propiedades.
    marca: 'Nintendo', //* Propiedad 'marca' con valor tipo string.
    modelo: 'Switch', //* Propiedad 'modelo' con valor tipo string.
    color: 'Rojo y azul', //* Propiedad 'color' con valor tipo string.
    espacio: 245 //* Propiedad 'espacio' con valor tipo number.
}; //* Cierre del objeto

console.log(consolaVideojuegos["color"]); //* Se accede a la propiedad 'color' usando notación de corchetes. Resultado: 'Rojo y azul'.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ~Eventos (Del DOM)
// ~En JavaScript, un **evento** es cualquier acción que ocurre dentro de una página web, como un clic, el paso del mouse, una pulsación de tecla, el envío de un formulario, la carga de la página, entre otros. Estos eventos pueden ser provocados por el usuario o por el propio navegador, y permiten que JavaScript interactúe con el contenido HTML para generar experiencias dinámicas e interactivas. Los eventos del DOM (Modelo de Objetos del Documento) son fundamentales para la manipulación del comportamiento del sitio. Generalmente, se capturan mediante atributos HTML como `onclick`, `onchange`, `onmouseover`, etc., o mediante JavaScript directamente. Por ejemplo, al usar `onclick="mostrarEventoDOM()"` en un botón HTML, se está indicando que cuando ese botón sea clicado, se ejecutará una función llamada `mostrarEventoDOM`. Para que esto funcione correctamente, dicha función debe estar definida en el archivo JavaScript vinculado, o dentro de una etiqueta `<script>` en el HTML. Gracias a los eventos del DOM, es posible crear páginas web interactivas donde el contenido cambia dinámicamente según las acciones del usuario, lo que mejora notablemente la experiencia del sitio.
// Todo - Estrcutura de un evento en JavaScript
// Todo - Para poder **modificar elementos del HTML desde JavaScript**, es necesario acceder a ellos usando el objeto `document`, que representa todo el documento HTML. Luego, se debe utilizar un método de obtención (`getElementById`, `getElementsByClassName`, etc.) para seleccionar el elemento específico que se desea manipular. Finalmente, se puede aplicar una acción o modificación sobre ese elemento, como cambiar su estilo, contenido, clases, etc. Esta estructura siempre sigue el mismo patrón: primero se llama a `document`, luego se aplica un `.get...` para obtener el elemento, y por último se encadena un `.` seguido de la propiedad o método que se quiera usar (por ejemplo: `.style.color`, `.innerHTML`, `.classList.add()`, etc.). Mas adeltante se veran cada uno de estos apartados y sus funciones.
document.getElementById('nombreElemento').style.color = 'purple'; //* Se especifica que del 'document' o el HTML se seleccionara el elemento con ID 'nombreElemento' y se cambia su color de texto a morado.

// Todo - Lectura del documento HTML (document)
// Todo - Para que JavaScript pueda interactuar con los elementos de una página HTML, primero necesita acceder a ese documento. Esto se hace con el objeto global `document`. Cuando un archivo JavaScript está correctamente vinculado al HTML (ya sea mediante una etiqueta `<script>` o desde un archivo externo), el navegador permite acceder a todo el contenido del HTML a través del objeto `document`. Gracias a esto, se pueden buscar elementos, modificar su contenido, registrar eventos y mucho más.
console.log(document); //* Se imprime el objeto `document`, que representa el contenido HTML de la página. Esto incluye todas las etiquetas, atributos, estilos, scripts, etc. Sirve para inspeccionar la estructura del DOM desde la consola del navegador.

// Todo - Referencia a elementos (get)
// Todo - En JavaScript, los métodos que comienzan con `get` permiten **acceder a elementos del HTML** desde el documento DOM. Estos métodos son fundamentales para poder manipular el contenido, estilos o comportamiento de una página web mediante JavaScript. 
// Todo - Cada uno de estos métodos permite seleccionar elementos de distintas formas: por su ID, clase, nombre, tipo de etiqueta, etc. La sintaxis general suele ser: `document.tipoDeGet('valor')`, donde el tipo define cómo se quiere localizar el elemento, y el valor representa el identificador correspondiente (como un ID, clase, nombre, etc.).
// &getAnimations()
// &Este método devuelve una lista con todas las animaciones activas que se están ejecutando actualmente en el documento. No se usa para seleccionar un elemento específico, sino para obtener las animaciones en curso que afectan a cualquier parte del DOM.
document.getAnimations(); //* Devuelve un array con todas las animaciones que están en ejecución dentro del documento actual.

// &getElementById()
// &Este método busca y devuelve un **único elemento HTML** que tenga el atributo `id` especificado. Como los IDs deben ser únicos en un documento HTML, este método siempre retornará un solo elemento (o `null` si no existe ninguno con ese ID).
document.getElementById('nombreDelIdDelElemento'); //* Se obtiene el elemento cuyo `id` sea igual a 'nombreDelIdDelElemento'.

// &getElementsByClassName()
// &Este método permite obtener **una colección de elementos** que comparten la misma clase (`class`). A diferencia de `getElementById`, aquí se puede retornar más de un elemento, ya que múltiples elementos pueden compartir la misma clase. El resultado es una colección tipo `HTMLCollection`.
document.getElementsByClassName('nombreDeClaseDelElemento'); //* Se obtienen todos los elementos que tienen como clase 'nombreDeClaseDelElemento'.

// &getElementsByName()
// &Este método devuelve todos los elementos del documento que tengan el atributo `name` con el valor especificado. El atributo `name` es comúnmente utilizado en formularios para identificar campos como inputs, radios, selects, etc. Al igual que el anterior, el resultado será una colección de elementos.
document.getElementsByName('nombreDelNameDeLaEtiqueta'); //* Se obtienen todos los elementos con el atributo `name="nombreDelNameDeLaEtiqueta"`.

// Todo - Modificación de características en un elemento
// Todo - Una vez que hemos accedido a un elemento del HTML mediante JavaScript (por ejemplo usando `getElementById`, `querySelector`, etc.), es posible **modificar sus características** directamente desde el código. Estas modificaciones pueden afectar su contenido, estilo, atributos, clases, valor, entre otros. Por lo que JavaScript nos ofrece distintas propiedades y métodos para realizar estas modificaciones. A continuación se muestran algunas de las más utilizadas en desarrollo web.
// &Modificar el contenido interno (innerHTML)
// &La propiedad `innerHTML` permite acceder o modificar el **contenido HTML** que se encuentra dentro de un elemento. Si se asigna un nuevo valor, este reemplazará completamente el contenido anterior, permitiendo insertar texto, etiquetas, o cualquier estructura HTML.
document.getElementById('nombreElemento').innerHTML = 'Nuevo título desde JavaScript'; //* El contenido dentro del elemento con ID 'titulo' será reemplazado por el nuevo texto.

// &Modificar el estilo (style)
// &Mediante la propiedad `style`, se pueden cambiar directamente los **estilos CSS en línea** de un elemento. Cada propiedad CSS puede ser accedida usando la notación de punto, transformando los guiones en camelCase (por ejemplo `background-color` se convierte en `backgroundColor`).
document.getElementById('nombreElemento').style.color = 'red'; //* Se cambia el color del texto del elemento con ID 'titulo' a rojo.
document.getElementById('nombreElemento').style.fontSize = '24px'; //* Se cambia el tamaño de fuente a 24 píxeles.

// &Modificar clases CSS (classList)
// &La propiedad `classList` permite manipular fácilmente las clases CSS que tiene un elemento. Con métodos como `.add()`, `.remove()`, `.toggle()` o `.contains()`, se puede agregar, quitar, alternar o verificar clases sin necesidad de reemplazar toda la cadena de clases.
document.getElementById('nombreElemento').classList.add('clase-destacada'); //* Se agrega la clase 'clase-destacada' al elemento.
document.getElementById('nombreElemento').classList.remove('clase-secundaria'); //* Se elimina la clase 'clase-secundaria'.
document.getElementById('nombreElemento').classList.toggle('activo'); //* Si tiene la clase 'activo', la quita. Si no la tiene, la agrega.

// &Modificar el valor de un input (value)
// &La propiedad `value` se utiliza especialmente en elementos de formulario como `input`, `textarea` y `select`. Permite obtener o modificar el **valor que el usuario ha ingresado** o que se mostrará por defecto.
value = 'Juan Pérez'; //* El campo de texto mostrará por defecto el valor 'Juan Pérez'.

// &Modificar atributos (setAttribute)
// &El método `setAttribute()` permite modificar o crear un **atributo HTML** dentro de un elemento. Es útil cuando se quiere cambiar atributos como `src`, `href`, `alt`, `title`, etc.
document.getElementById('nombreElemento').setAttribute('src', 'nueva-imagen.jpg'); //* Cambia la ruta de la imagen que se mostrará.
document.getElementById('nombreElemento').setAttribute('href', 'https://openai.com'); //* Cambia el destino del enlace.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ~Strings
// ~En JavaScript, los **strings** son variables que almacenan una secuencia de caracteres o texto. Esto puede incluir letras, números, símbolos, espacios, e incluso caracteres especiales como saltos de línea o tabulaciones. Aunque trabajar con strings es sencillo en apariencia, existen detalles importantes que se deben entender para evitar errores comunes, especialmente al manejar caracteres que tienen un significado especial en el lenguaje.
console.log('=========== Strings. ==========='); //* Muestra un mensaje en la consola para indicar el inicio de la sección sobre string.

// Todo - Uso de símbolos especiales (\)
// Todo - Uno de los problemas más frecuentes al trabajar con strings es el manejo de las comillas que delimitan el texto. Por ejemplo, si declaramos un string usando comillas simples y dentro del texto incluimos un apóstrofe (que es también una comilla simple), JavaScript puede interpretar erróneamente el final del string, causando un error de sintaxis. Esto sucede porque el apóstrofe interno se confunde con el delimitador de cierre del string. Una forma sencilla de evitar este problema es cambiar el tipo de comillas que se usan para delimitar el string, por ejemplo, usar comillas dobles para rodear un texto que contiene apóstrofes simples, así: `"Let's do it"`. Sin embargo, cuando no es posible o deseable cambiar las comillas, JavaScript ofrece un mecanismo llamado **carácter de escape**, representado por la **barra invertida** (`\`). Este carácter indica que el símbolo que sigue debe tratarse literalmente, sin su función especial en la sintaxis. Por ejemplo, escribiendo `'Let\'s do it'` el apóstrofe después de la barra invertida no se interpreta como el fin del string, sino como parte del texto. De esta forma, se puede incluir cualquier comilla dentro de un string sin romper el código. Además de escapar comillas, la barra invertida también permite insertar otros caracteres especiales dentro de un string, como saltos de línea (`\n`), tabulaciones (`\t`), barras invertidas literales (`\\`), entre otros.
// &Omisión de símbolos especiales (\)
// &Cuando se necesita incluir símbolos especiales dentro de una cadena de texto, como comillas simples o dobles, JavaScript puede interpretarlos erróneamente como parte de la sintaxis del lenguaje. Para evitar esto, se utiliza el carácter de escape (`\`), el cual **indica al intérprete que el símbolo que le sigue debe tomarse literalmente** y no como parte de la estructura del código.
console.log('--- Uso de barra invertida para omitir símbolos especiales. ---'); //* Imprime en consola un mensaje que indica un ejemplo de omisión de símbolos con `\`.
const variableUsandoCaracterBarraInvertidaOmicionSimbolos = 'It\'s time to do the homework'; //* Se usa la barra invertida para escapar el apóstrofe y evitar que JavaScript lo interprete como el final del string.
console.log(variableUsandoCaracterBarraInvertidaOmicionSimbolos);

// &Inserción de barra invertida dentro de la cadena (\\)
// &Si se desea incluir una **barra invertida real (`\`)** como parte del texto, se debe escribir dos veces (`\\`). Esto se debe a que la primera barra invertida funciona como carácter de escape, y la segunda es el símbolo literal que se insertará en la cadena.
console.log('--- Uso de barra invertida para agregarse a sí misma dentro del texto. ---'); //* Imprime en consola un mensaje que indica un ejemplo de inserción literal de la barra invertida.
const variableUsandoCaracterBarraInvertidaAgregacionDeSiMisma = 'Esta variable agregará dentro del texto la barra invertida \\.'; //* Aparecerá: Esta variable agregará dentro del texto la barra invertida \.
console.log(variableUsandoCaracterBarraInvertidaAgregacionDeSiMisma);

// &Agregación de salto de línea (\n)
// &El carácter especial `\n` dentro de una cadena representa un **salto de línea**, lo que significa que el texto que aparece después de este símbolo será mostrado en la siguiente línea. Es muy útil para mostrar mensajes multilínea en consola o en interfaces de usuario.
console.log('--- Uso de barra invertida para agregar un salto de línea. ---'); //* Imprime en consola un mensaje que indica un ejemplo de uso de `\n` para salto de línea.
const variableUsandoCaracterBarraInvertidaAgregarSaltoLinea = 'Esta variable usa \\n para agregar\nun salto de línea.'; //* El texto luego de `\n` aparecerá en una nueva línea.
console.log(variableUsandoCaracterBarraInvertidaAgregarSaltoLinea);

// &Agregación de tabulación (\t)
// &El carácter especial `\t` sirve para insertar una **tabulación horizontal** dentro de la cadena, es decir, un espacio equivalente a pulsar la tecla de tabulación. Esto puede utilizarse para alinear texto en columnas o mejorar la presentación visual del contenido.
console.log('--- Uso de barra invertida para agregar una tabulación. ---'); //* Imprime en consola un mensaje que indica un ejemplo de uso de `\t` para tabulaciones.
const variableUsandoCaracterBarraInvertidaAgregacionTabulacion = 'Esta variable usa \\t para \tagregar una tabulación.'; //* El texto tendrá una tabulación antes de "agregar".
console.log(variableUsandoCaracterBarraInvertidaAgregacionTabulacion);

// &Retroceso (Backspace) (\b)
// &El carácter especial `\b` representa un **retroceso**, también llamado backspace. En teoría, este símbolo debería eliminar el carácter anterior en una cadena, simulando el efecto de pulsar la tecla de retroceso (←). Sin embargo, en la mayoría de entornos modernos como los navegadores, `\b` **no elimina visualmente** el carácter anterior cuando se imprime en consola, pero sí es interpretado como un carácter especial invisible. Puede tener efecto en terminales más antiguas o en sistemas donde el retroceso esté soportado. Aunque no es muy común ni confiable en JavaScript moderno para manipular texto en consola, es importante conocerlo porque forma parte del conjunto de caracteres escapables del lenguaje.
console.log('--- Uso de barra invertira para eliminar un elmento anterios. ---'); //* Imprime en consola un mensaje indicando que se demostrará el uso de \b.
const variableUsandoCaracterBarraInvertidaBackspace = 'ABC\bD'; //* El \b intenta borrar la letra 'C', pero en la mayoría de consolas simplemente lo ignora visualmente.
console.log(variableUsandoCaracterBarraInvertidaBackspace); //* En consola probablemente se veroia junta la palabra*

// Todo - Contador de caracteres (length)
// Todo - En JavaScript, cuando se trabaja con cadenas de texto (strings), es muy común necesitar saber cuántos caracteres contiene una variable. Para esto se utiliza la propiedad `.length`, que devuelve un **número entero** indicando la cantidad total de caracteres de la cadena, incluyendo letras, espacios, signos de puntuación y tildes. Esta propiedad es útil para validar formularios, recortar texto, aplicar condiciones, entre muchos otros casos.
console.log('--- Contador de caracteres. ---'); //* Imprime en consola un mensaje indicando que se demostrará el conteo de caracteres de lo que almacena una variable.
const variableQueSeUsaraContadorCaracteres = 'Educación'; //* Cadena de texto que contiene 9 caracteres (incluye la tilde como un carácter individual).
console.log(variableQueSeUsaraContadorCaracteres.length); //* Muestra en consola el número 9, que representa la cantidad total de caracteres del string.

// Todo - Métodos en string
// Todo - En JavaScript, existen múltiples métodos integrados para manipular y transformar cadenas de texto (strings). Para aplicar un método, se escribe el nombre de la variable seguido de un punto (`.`), el nombre del método y paréntesis `()`, donde a veces se incluyen argumentos. Estos métodos permiten desde cortar, reemplazar o cambiar el formato del texto hasta realizar búsquedas o comparaciones dentro de una cadena.
// &Extraccion de parte de cadena de texto (slice())
// &El método `slice()` permite extraer una parte de una cadena de texto especificando dos posiciones: la posición inicial (desde dónde empieza a cortar) y la final (hasta dónde cortará sin incluir ese carácter). Si se utilizan números positivos, el conteo empieza desde el inicio (posición 0). Si se usan números negativos, el conteo va desde el final hacia atrás, lo cual permite recortar partes finales de la cadena.// ^Números positivos
console.log('--- Método string slice con números positivos. ---'); //* Imprime en consola un mensaje indicando que se demostrará el uso del método `slice()` con índices positivos.
const variableAlaQueSeAplicaraMetodoSlicePositivos = 'Esta es una variable a la cual se le aplicará el método slice.'; //* Cadena de texto original con 62 caracteres.
console.log(variableAlaQueSeAplicaraMetodoSlicePositivos.slice(56, 62)); //* Extrae desde el carácter 56 al 61. Resultado: "slice."

// ^Números negativos
console.log('--- Método string slice con números negativos. ---'); //* Imprime en consola un mensaje indicando que se demostrará el uso del método `slice()` con índices negativos.
const variableAlaQueSeAplicaraMetodoSliceNegativos = 'Esta es una variable a la cual se le aplicará el método slice.'; //* Cadena de texto original con 62 caracteres.
console.log(variableAlaQueSeAplicaraMetodoSliceNegativos.slice(-25, -12)); //* Extrae desde el carácter 25 desde el final al 12 desde el final. Resultado: "aplicará el".

// &Remplazar (replace())
// &El método `replace()` busca un fragmento específico de texto dentro de una cadena y lo reemplaza por otro. Su sintaxis es: `cadena.replace('textoAReemplazar', 'textoNuevo')`. Solo reemplaza **la primera coincidencia**, a menos que se use una expresión regular con modificadores.
// ^Reemplazo simple
console.log('--- Método string replace. ---'); //* Imprime en consola un mensaje indicando que se demostrará el uso del método `replace()`.
const variableAlaQueSeLeAplicaraMetodoReplace = 'Esta es una variable en la cual se reemplazará la palabra siguiente: Texto.'; //* Cadena original que contiene la palabra "Texto".
console.log(variableAlaQueSeLeAplicaraMetodoReplace.replace('Texto', 'JavaScript')); //* Reemplaza la palabra "Texto" por "JavaScript".

// &Cambio de tipo de texto (lowerCase() / upperCase())
// &JavaScript permite cambiar todo el contenido de un string a **mayúsculas** con `toUpperCase()` o a **minúsculas** con `toLowerCase()`. Esto es útil para normalizar datos, validar formularios, o para presentaciones consistentes. Ambos métodos no requieren argumentos y devuelven una nueva cadena con el cambio aplicado.
// ^Mayusculas (toUpperCase)
// ^El método `toUpperCase()` convierte toda la cadena a letras mayúsculas.
console.log('--- Método toUpperCase. ---'); //* Imprime en consola un mensaje indicando que se demostrará el uso del método `toUpperCase()`.
const variableAlaQueSeLeAplicaraMetodoToUpperCase = 'Esta es una variable a la cual se le aplica el método toUpperCase.'; //* Cadena original con letras mixtas.
console.log(variableAlaQueSeLeAplicaraMetodoToUpperCase.toUpperCase()); //* Resultado: "ESTA ES UNA VARIABLE A LA CUAL SE LE APLICA EL MÉTODO TOUPPERCASE."

// ^Minusculas (toLowerCase)
// ^El método `toLowerCase()` convierte toda la cadena a letras minúsculas.
console.log('--- Método toLowerCase. ---'); //* Imprime en consola un mensaje indicando que se demostrará el uso del método `toLowerCase()`.
const variableAlaQueSeLeAplicaraMetodoToLowerCase = 'Esta Es Una Variable A La Cual Se Le Aplica El Método ToLowerCase.'; //* Cadena con varias mayúsculas.
console.log(variableAlaQueSeLeAplicaraMetodoToLowerCase.toLowerCase()); //* Resultado: "esta es una variable a la cual se le aplica el método tolowercase."

// &Concatenación (concat())
// &Además del símbolo `+`, JavaScript permite unir (concatenar) cadenas de texto utilizando el método `.concat()`. Este método se aplica sobre una cadena base y se le pasa como argumento otra u otras cadenas que se desean unir. Aunque el uso de `+` es más común hoy en día, `concat()` sigue siendo una forma válida y explícita de concatenar strings.
console.log('--- Método concat. ---'); //* Imprime en consola un mensaje indicando que se demostrará el uso del método `concat()`.
const variableAlaQueSeLeAplicaraUnConcat1 = 'Esta variable concatenará '; //* Primera cadena base a la que se le añadirá la segunda.
const variableAlaQueSeLeAplicaraUnConcat2 = 'esta otra variable.'; //* Segunda cadena que se añadirá a la anterior.
console.log(variableAlaQueSeLeAplicaraUnConcat1.concat(variableAlaQueSeLeAplicaraUnConcat2)); //* Resultado: "Esta variable concatenará esta otra variable."

// &Eliminacion de espacios en blanco (trim())
// &El método `.trim()` elimina los espacios en blanco **al inicio y al final** de una cadena de texto. Esto es muy útil cuando se recibe texto de formularios, entradas del usuario u otras fuentes que pueden contener espacios no deseados. No afecta los espacios que estén en medio del texto, solo los que estén antes del primer carácter visible y después del último.
console.log('--- Método trim. ---'); //* Imprime en consola un mensaje indicando que se demostrará el uso del método `trim()`.
const variableAlaQueSeLeAplicaraTrim = '                    Esta variable tiene espacios en blanco antes y después del primer y último carácter, los cuales serán eliminados con trim().                    '; //* Cadena con espacios al inicio y al final.
console.log(variableAlaQueSeLeAplicaraTrim.trim()); //* Resultado: "Esta variable tiene espacios en blanco antes y después del primer y último carácter, los cuales serán eliminados con trim()."

// &Obtencion de un caracter (charAt())
// &El método `.charAt()` se utiliza para **obtener un carácter específico** de una cadena de texto, según la posición (índice) que se indique. En JavaScript, los caracteres de un string están indexados desde **0**, lo que significa que el primer carácter tiene índice 0, el segundo tiene índice 1, y así sucesivamente. Este método es útil cuando se necesita acceder a una letra en particular dentro del texto, como para validaciones, extracciones, análisis de contenido, etc.
console.log('--- Método charAt. ---'); //* Imprime en consola un mensaje indicando que se demostrará el uso del método `charAt()`.
const variableAlaQueSeLeAplicaraCharAt = 'JavaScript'; //* Cadena de texto sobre la cual se aplicará el método.
console.log(variableAlaQueSeLeAplicaraCharAt.charAt(4)); //* Imprime el carácter en la posición 4 (empezando desde 0). Resultado: 'S'*

// &Divir cadena de texto en partes (split())
// &El método `.split()` se utiliza para **dividir una cadena de texto en partes más pequeñas**, creando un array a partir de dichas divisiones. Dentro de los paréntesis se debe especificar el **carácter, símbolo o texto** que servirá como **punto de corte**. Cada vez que JavaScript encuentre ese carácter dentro del string, cortará la cadena en ese lugar y generará un nuevo elemento del array. Por ejemplo, si se usa `.split('.')`, el texto `"Este texto. es importante"` será dividido en dos partes: `["Este texto", " es importante"]`. Este método es muy útil cuando se trabaja con frases, listas, archivos CSV, o cualquier dato que contenga separadores. Además, si dentro del `.split()` se especifica una **cadena vacía** (`''`), JavaScript cortará **cada carácter de forma individual**, separando letra por letra y retornando un array con todos los caracteres de la cadena.
// ^Especificando un carácter
// ^Este ejemplo muestra cómo dividir la cadena de texto cada vez que aparece el punto (`.`).
console.log('--- Método split con carácter. ---'); //* Imprime en consola un mensaje indicando que se demostrará el uso del método `split()` con un carácter.
const variableAlaQueSeLeAplicaraSplit = 'Este texto. es importante. para el usuario'; //* Cadena de texto con puntos como separadores.
console.log(variableAlaQueSeLeAplicaraSplit.split('.')); //* Divide la cadena donde encuentra un punto y retorna un array: ['Este texto', ' es importante', ' para el usuario']

// ^Sin especificar carácter (cadena vacía '')
// ^En este caso, al pasar una cadena vacía (`''`), el texto se divide carácter por carácter, devolviendo un array con todas las letras individuales, incluyendo espacios.
console.log('--- Método split con cadena vacía. ---'); //* Imprime en consola un mensaje indicando que se demostrará el uso del método `split()` con una cadena vacía.
const variableAlaQueSeLeAplicaraSplitCaracterVacio = 'Hola JS'; //* Cadena de texto que será separada carácter por carácter.
console.log(variableAlaQueSeLeAplicaraSplitCaracterVacio.split('')); //* Retorna: ['H', 'o', 'l', 'a', ' ', 'J', 'S'].

// &Evaluar operacion de string (Eval())
// &El método `eval()` en JavaScript se utiliza para **evaluar una cadena de texto como si fuera código JavaScript**. Es decir, si se tiene una variable que almacena una cadena como `'5+2-5'`, al aplicar `eval()` lo que hace JavaScript es **interpretar y ejecutar** esa expresión como si se hubiera escrito directamente como código. Aunque la cadena sea de tipo `string`, si su contenido corresponde a una expresión válida (como operaciones matemáticas), `eval()` **la transformará en una instrucción real y devolverá el resultado**. Este método puede ser útil para casos muy específicos donde se necesita ejecutar código generado dinámicamente, pero también puede ser peligroso si se utiliza con datos no confiables, ya que puede ejecutar cualquier instrucción, incluso maliciosa. Para usarlo, se coloca `eval()` y dentro de los paréntesis el nombre de la variable que contiene la cadena a evaluar.
console.log('--- Método eval con cadena. ---'); //* Imprime en consola un mensaje indicando que se demostrará el uso del método `eval()`.
const variableAlaQueSeLeAplicaraEval = '5+-3/8'; //* Cadena de texto que representa una operación matemática.
console.log(eval(variableAlaQueSeLeAplicaraEval)); //* Evalúa la cadena como una expresión matemática real y muestra el resultado.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ~Array (Listas)
// ~Los arrays son muy utilizados por lo que son una de las bases mas utilizados de manera general, por lo que un array o arreglo en JavaScript es una estructura de datos que nos permite almacenar varios elementos en una sola variable, asi que se puede pensar en esto como una lista ordenada de elementos, en la cual cada elemento tiene un indice que indica cual es la posicion exacta en esta lista, donde se puedne almacenar cualquier tipo de datos (string, int, float, booleano, null, etc..) y se puede acceder a ella a traves del indice, ademas que a diferencia de otros lengiajes de programacion el alrgo del array no esta definido y podemos definirlo en el momento que le vamos asignando lso valores o elenentos. 
console.log('=========== Arrays. ==========='); //* Muestra un mensaje en la consola para indicar el inicio de la sección sobre arrays.

// Todo - Sintaxis de un array
// Todo - Un **array** en JavaScript es una estructura que permite almacenar múltiples valores dentro de una sola variable. A diferencia de los objetos que usan pares clave:valor, los arrays se componen de **elementos ordenados** a los que se accede mediante su **índice numérico**, comenzando desde 0. La sintaxis básica para declarar un array es usar `var`, `let` o `const`, seguido del nombre de la variable y luego **corchetes `[]`** que contendrán los elementos separados por comas. Los valores dentro del array pueden ser de **cualquier tipo de dato**: `string`, `number`, `boolean`, `null`, `undefined`, incluso otros `arrays`, `objetos` o `funciones`. Aunque el array se declare con `const`, **se pueden modificar sus elementos internos** (agregar, eliminar o cambiar valores), pero **no se puede reasignar completamente a otro array** (es decir, no se puede hacer `miArray = otroArray` si fue declarado con `const`). Esta es una distinción clave entre la inmutabilidad de la referencia y la mutabilidad del contenido.
let frutas = [ //* Se declara un array llamado `frutas` usando la palabra clave `let`. Luego se abren corchetes `[]`, lo que indica que es una lista.
    'manzana', //* Elemento 0: una cadena de texto. Representa una fruta.
    'pera',    //* Elemento 1: otra cadena. Los elementos están separados por comas.
    'uva'      //* Elemento 2: el último elemento no lleva coma final (aunque JS lo permite en versiones modernas).
]; //* Cierre del array. Este array contiene 3 elementos de tipo `string`.

// Todo - Tipos de elementos dentro de un array
// Todo - Los arrays en JavaScript pueden contener **diferentes tipos de datos en una misma lista**, lo cual los hace muy versátiles. Es posible almacenar desde valores simples hasta estructuras complejas como funciones, otros arrays u objetos dentro del mismo array. Esto permite modelar datos estructurados o realizar transformaciones dinámicas fácilmente. A continuación se muestra un ejemplo con distintos tipos de valores en un solo array:
const arrayConDiversosTiposDeDatos = [ //* Se abre un array llamado `arrayConDiversosTiposDeDatos`.
    'Texto simple', //* Elemento tipo `string`.
    42,             //* Elemento tipo `number`.
    true,           //* Elemento tipo `boolean`.
    null,           //* Elemento con valor `null`, indica ausencia de valor.
    undefined,      //* Elemento `undefined`, significa que no se ha definido aún.
    [1, 2, 3],      //* Elemento tipo array anidado (array dentro de otro array).
    { nombre: 'ChatGPT' }, //* Elemento tipo objeto con clave y valor.
    function saludar() { console.log('Hola desde el array') } //* Elemento tipo función. Puede ejecutarse con su índice.
]; //* Cierre del array. Este array demuestra que se pueden mezclar diferentes tipos de datos en una sola lista.

// Todo - Llamamiento de un array y sus valores
// Todo - Sabemos que los arrays son variables que pueden almacenar varios valores en una sola estructura. Cada uno de estos valores se ubica en una posición específica dentro del array, la cual se conoce como "índice". Para acceder a un valor dentro del array, se debe escribir el nombre del array seguido de corchetes `[]` donde dentro se especifica el índice del valor que queremos consultar. Es importante recordar que **los arrays en JavaScript comienzan en 0**, es decir, el primer elemento está en la posición 0, el segundo en la posición 1, y así sucesivamente. Por ejemplo, si tenemos `array = ['valor1', 'valor2']`, al acceder con `array[0]` obtendremos `'valor1'`.
console.log('--- Obtención de elemento de array. ---'); //* Imprime en consola un mensaje indicando que se demostrará la obtención de un elemento del array.
const arrayParaObtencionElemento = ['elemento1', 'elemento2', 'elemento3']; //* Array con tres elementos de tipo string.
console.log(arrayParaObtencionElemento[0]); //* Accede al primer elemento del array, que es 'elemento1'.

// Todo - Declarar array con una cantidad ya fija de elementos dentro del mismo (vacíos)
// Todo - También es posible crear un array indicando directamente cuántos espacios queremos reservar, aunque estos inicien sin valores. Para ello, usamos la sintaxis `new Array(n)`, donde `n` representa la cantidad de elementos vacíos que tendrá inicialmente el array. Esto puede ser útil cuando sabemos cuántos datos queremos almacenar pero aún no los tenemos disponibles.
const arrayDeclaracionCantidadFija = new Array(5); //* Crea un array con 5 espacios vacíos (undefined).

// Todo - Redefinir / definir valor en un elemento de array
// Todo - Si queremos asignar o cambiar el valor de uno de los elementos de un array, simplemente escribimos el nombre del array seguido del índice (entre corchetes) del elemento que queremos modificar, y usamos el operador `=` para asignarle un nuevo valor. Por ejemplo, `miArray[2] = 'Nuevo valor'` asignará esa cadena de texto al tercer elemento del array (índice 2). Esta operación **puede usarse en arrays vacíos o ya definidos**. Además, si se asigna un valor a un índice más alto que la cantidad actual de elementos del array (por ejemplo, en un array de 3 elementos se modifica el índice 7), **JavaScript creará todos los elementos intermedios como `undefined` hasta llegar a ese índice**, y luego almacenará el valor indicado. Es decir, el array se expande automáticamente para alcanzar el índice que se quiere modificar.
console.log('--- Asignar valor a elemento de array. ---'); //* Imprime en consola un mensaje indicando que se demostrará la asignación de valor a un elemento del array.
const arrayAlQueReasignaraValorElementos = new Array(3); //* Crea un array de 3 espacios vacíos.
arrayAlQueReasignaraValorElementos[0] = 'Este es el primer elemento del array'; //* Asigna un valor al primer índice (posición 0).
console.log(arrayAlQueReasignaraValorElementos); //* Imprime el array con el nuevo valor en la primera posición.

// Todo - Métodos en array
// Todo - Los arrays en JavaScript cuentan con muchos métodos útiles que permiten manipular y procesar sus datos de manera eficiente. Algunos de los más comunes incluyen funciones para contar elementos, ordenar, agregar, eliminar, buscar, entre otros. Estos métodos se aplican escribiendo el nombre del array seguido de un punto (`.`) y el nombre del método, acompañado de paréntesis `()` que pueden incluir parámetros dependiendo del método que se utilice. Además, **estos métodos también pueden aplicarse a arrays que contienen objetos**. En esos casos, al usar métodos como `.find()`, `.filter()`, `.map()` o `.findIndex()`, es necesario acceder a las propiedades del objeto. Para hacerlo, dentro de la función que recibe cada elemento del array (por ejemplo `x`), se utiliza la notación de punto para acceder a la clave deseada, como en `x.clave`. Esto permite realizar comparaciones o transformaciones basadas en los valores internos del objeto.
// &Conteo de elementos (length)
// &El método `.length` no es exactamente una función, sino una propiedad que permite saber cuántos elementos hay dentro de un array. Es muy útil para validar si un array tiene elementos, saber su tamaño o para recorrerlo con bucles. Se accede directamente como: `array.length`.
console.log('--- Método length en array. ---'); //* Imprime en consola un mensaje indicando que se demostrará el uso del método `length` en un array.
const arrayAlQueSeLeAplicaraMetodoLength = ['elemento1', 'elemento2', 'elemento3']; //* Array con tres elementos de texto.
console.log(arrayAlQueSeLeAplicaraMetodoLength.length); //* Retorna el número total de elementos en el array: 3.

// &Ordenamiento de valores (sort())
// &El método `.sort()` se utiliza para ordenar los elementos de un array. Cuando el array contiene cadenas de texto, `.sort()` ordena alfabéticamente basándose en el valor Unicode de los caracteres. Sin embargo, cuando el array contiene números, JavaScript los convierte primero a cadenas y los ordena como texto, lo que puede producir resultados inesperados. Por ejemplo, números mayores o iguales a 10 se ordenan considerando solo el primer dígito, provocando un orden incorrecto para números como 10, 11, 12, etc. Para ordenar correctamente números, es necesario proporcionar una función de comparación personalizada que defina la lógica del ordenamiento.
// ^Ordenamiento de números menores a 10
// ^Aquí se muestra un ejemplo donde `.sort()` se aplica sobre números todos menores a 10. En este caso, el método funciona correctamente porque la conversión a texto no afecta el orden esperado.
console.log('--- Método sort en array con numeros menores a 10. ---'); //* Imprime en consola un mensaje que indica que se ordenará un array con números menores a 10.
const arrayConNumerosMenoresADiezAlQueSeLeAplicaraMetodoSort = [5, 2, 9, 4, 7, 3, 1, 0];
console.log(arrayConNumerosMenoresADiezAlQueSeLeAplicaraMetodoSort.sort()); //* Ordena y muestra el array con números del 0 al 9 ordenados ascendentemente.

// ^Ordenamiento de números iguales o mayores a 10 por defecto
// ^En este ejemplo se observa cómo `.sort()` ordena incorrectamente números mayores o iguales a 10 al tratar los números como strings, colocando por ejemplo "10" antes de "2" porque compara solo el primer carácter.
console.log('--- Método sort en array con numeros iguales o mayores a 10 por defecto. ---'); //* Imprime en consola un mensaje que indica que se demostrará un ordenamiento incorrecto de números grandes por defecto.
const arrayConNumerosIgualesMayoresADiezAlQueSeLeAplicaraMetodoSortSinFuncion = [12, 13, 9, 34, 7, 3, 1, 0, 39, 78]; 
console.log(arrayConNumerosIgualesMayoresADiezAlQueSeLeAplicaraMetodoSortSinFuncion.sort()); //* Muestra el resultado del ordenamiento incorrecto al tratar números como texto.

// ^Ordenamiento de números iguales o mayores a 10 con función interna
// ^Aquí se utiliza una función de comparación que recibe dos elementos (`x` y `y`) y devuelve la diferencia `x - y`. Esta función indica a `.sort()` cómo comparar los valores numéricos. El método ejecuta esta comparación repetidamente entre pares de elementos y reordena el array hasta que esté completamente ordenado. Si la resta es positiva, significa que `x` es mayor que `y` y `.sort()` intercambia sus posiciones, si es negativa o cero mantiene el orden.
console.log('--- Método sort en array con numeros iguales o mayores a 10 con funcion interna. ---'); //* Imprime un mensaje que indica que ahora se usará una función interna para ordenar correctamente los números.
const arrayConNumerosIgualesMayoresADiezAlQueSeLeAplicaraMetodoSortConFuncion = [12, 13, 9, 34, 7, 3, 1, 0, 39, 78]; 
console.log(arrayConNumerosIgualesMayoresADiezAlQueSeLeAplicaraMetodoSortConFuncion.sort((x,y) => x - y )); //* Muestra el array correctamente ordenado de menor a mayor gracias a la función de comparación.

// &Filtro (.filter())
// &El método `.filter()` se utiliza para **filtrar elementos dentro de un array** según una condición que definimos nosotros mismos. Este método no modifica el array original, sino que **crea un nuevo array** que contiene **solo los elementos que cumplan con la condición especificada**. Dentro del `.filter()` se coloca una función que puede ser anónima (como una arrow function) y que recibe como parámetro **cada uno de los elementos del array, uno por uno**. Aquí es importante aclarar que **no es necesario declarar muchos parámetros aunque el array tenga muchos valores**, ya que `.filter()` se encarga automáticamente de **pasar cada elemento individualmente a la función**, ejecutándola tantas veces como elementos haya en el array. A medida que la función se ejecuta, el método evalúa si ese elemento cumple o no con la condición. Si la cumple, **ese elemento será incluido en el nuevo array**. Si no, será descartado. Por ejemplo: si se quiere filtrar todos los elementos que sean `"Naranja"`, lo que se hace es comparar cada elemento con esa palabra. Si hay 2 `"Naranja"` en un array de 6 elementos, el resultado final será un array con esos 2 elementos: `['Naranja', 'Naranja']`. 
console.log('--- Método filter en array. ---'); //* Imprime en consola un mensaje indicando que se demostrará el uso del método `filter()` en un array.
const arrayQueUsaraMetodoFilter = ['Manzana', 'Pera', 'Banana', 'Naranja', 'Manzana', 'Naranja']; //* Array con varias frutas, algunas repetidas.
console.log(arrayQueUsaraMetodoFilter.filter(fruta => fruta === 'Naranja')); //* Retorna un nuevo array con solo los elementos 'Naranja': ['Naranja', 'Naranja'].

// &Mapa (.map())
// &El método `.map()` se utiliza para **recorrer un array y aplicar una transformación a cada uno de sus elementos**. A diferencia de `.filter()`, que selecciona ciertos elementos según una condición, `.map()` no excluye nada: **recorre todo el array completo**, elemento por elemento, y genera un **nuevo array del mismo tamaño**, pero con los elementos **modificados** según lo que se indique dentro de la función. Esa transformación puede ser lo que tú decidas: puedes **agregar texto**, **modificar valores**, **convertir números a texto**, o incluso **crear objetos a partir de los elementos**. Todo depende de la lógica que definas dentro de la función. Igual que con `.filter()`, no necesitas preocuparte por cuántos elementos hay en el array, ya que `.map()` automáticamente ejecutará la función una vez por cada elemento, pasándole uno por uno como parámetro. Este método es muy útil cuando necesitas transformar una lista sin alterar el array original, como al mostrar datos con formato personalizado en una página web, generar listas modificadas o aplicar operaciones matemáticas sobre arrays numéricos.
console.log('--- Método map en array. ---'); //* Imprime en consola un mensaje indicando que se demostrará el uso del método `map()` en un array.
const arrayQueSeUsaraMetodoMap = ['Manzana', 'Pera', 'Banana', 'Naranja', 'Manzana', 'Naranja']; //* Array de frutas originales.
console.log(arrayQueSeUsaraMetodoMap.map(fruta => fruta + ' Tropical')); //* Retorna un nuevo array con cada fruta modificada: ['Manzana Tropical', 'Pera Tropical', ...]

// &Reemplazo de elementos en array (fill())
// &El método `.fill()` permite **reemplazar el valor de todos los elementos de un array desde un índice específico en adelante**, asignándoles un valor único que tú determines. Esto significa que a partir del índice que indiques, todos los elementos siguientes tomarán ese nuevo valor La sintaxis dentro de los paréntesis es: primero el valor con el que quieres reemplazar, seguido opcionalmente del índice desde donde comenzará el reemplazo. Si no especificas el índice inicial, reemplazará todos los elementos del array. Este método modifica directamente el array original y también retorna ese mismo array modificado. Es útil cuando quieres inicializar o resetear parte o todo un array con un mismo valor.
console.log('--- Método fill en array. ---'); //* Imprime en consola un mensaje indicando que se demostrará el uso del método `fill()` en un array.
const arrayQueSeUsaraMetodoFill = ['Manzana', 'Pera', 'Banana', 'Naranja', 'Manzana', 'Naranja']; //* Array original con frutas variadas.
console.log(arrayQueSeUsaraMetodoFill.fill('Fruta', 2)); //* Desde el índice 2 en adelante, todos los elementos serán reemplazados por el texto 'Fruta'. Resultado: ['Manzana', 'Pera', 'Fruta', 'Fruta', 'Fruta', 'Fruta']

// &Búsqueda de elemento en array (find())
// &El método `.find()` se utiliza para **buscar el primer elemento dentro de un array que cumpla con una condición específica**. A diferencia de `.filter()`, que devuelve **todos** los elementos que cumplen la condición en un nuevo array, `.find()` **solo devuelve el primer valor que encuentra** y detiene la búsqueda inmediatamente, **sin importar cuántas coincidencias más existan**. Además, `.find()` **no devuelve un array**, sino **el valor directamente**. Por eso, su uso es ideal cuando se busca una sola coincidencia puntual y no una colección de resultados. También es importante saber que si **ningún elemento cumple la condición**, el resultado será `undefined`. La función que se pasa dentro del `.find()` recibe elemento por elemento del array y evalúa si cumple o no con la condición que establezcamos.
console.log('--- Método find en array. ---'); //* Imprime en consola un mensaje indicando que se demostrará el uso del método `find()` en un array.
const arrayQueSeUsaraFind = ['Manzana', 'Pera', 'Banana', 'Naranja', 'Manzana', 'Naranja']; //* Array con varias frutas, incluyendo elementos repetidos.
console.log(arrayQueSeUsaraFind.find(x => x == 'Manzana')); //* Devuelve únicamente el primer valor que cumpla la condición ('Manzana'), no un array.

// &Encontrar el índice de un elemento (findIndex())
// &El método `.findIndex()` se utiliza para **obtener el índice (posición)** del **primer elemento** dentro de un array que cumpla con una condición determinada. A diferencia de `.find()`, que devuelve el valor encontrado, `.findIndex()` retorna **únicamente el número del índice** donde se encuentra ese elemento. Si no se encuentra ningún elemento que cumpla con la condición, el método retornará `-1`. Este método recorre el array elemento por elemento hasta encontrar el primero que cumpla con lo que se indique dentro de la función.
console.log('--- Método findIndex en array. ---'); //* Imprime en consola un mensaje indicando que se demostrará el uso del método `findIndex()` en un array.
const arrayQueSeUsaraFindIndex = ['Manzana', 'Pera', 'Banana', 'Naranja', 'Manzana', 'Naranja']; //* Array con varias frutas, algunas repetidas.
console.log(arrayQueSeUsaraFindIndex.findIndex(x => x == 'Naranja')); 
//* Devuelve el índice del primer elemento que sea exactamente igual a 'Naranja'.
//* En este caso el resultado es 3, porque 'Naranja' aparece por primera vez en la posición 3 del array.

// &¿Existe algún elemento específico en el array? (some())
// &El método `.some()` evalúa si **al menos uno de los elementos** del array cumple con la condición indicada en la función flecha. Retorna `true` si encuentra al menos un elemento que la cumpla, y `false` si ninguno la cumple. Este método **no modifica** el array original.
console.log('--- Método some en array. ---'); //* Imprime en consola un mensaje indicando que se demostrará el uso del método `some()` en un array.
const arrayQueSeUsaraSome = ['Manzana', 'Pera', 'Banana', 'Naranja', 'Manzana', 'Naranja']; //* Array con varias frutas, algunas repetidas.
console.log(arrayQueSeUsaraSome.some(x => x === 'Manzana')); //* Retorna true, porque "Manzana" sí existe en el array.

// &¿Todos los elementos cumplen cierta condición? (every())
// &El método `.every()` verifica si **todos los elementos del array** cumplen con la condición proporcionada. Retorna `true` únicamente si **cada uno** cumple la condición, de lo contrario retorna `false`. También **no modifica** el array original.
console.log('--- Método every en array. ---'); //* Imprime en consola un mensaje indicando que se demostrará el uso del método `every()` en un array.
const arrayQueSeUsaraEvery = ['Manzana', 'Pera', 'Banana', 'Naranja', 'Manzana', 'Naranja']; //* Array con varias frutas, algunas repetidas.
console.log(arrayQueSeUsaraEvery.every(x => x === 'Manzana')); //* Retorna false, porque no todos los elementos son "Manzana".

// &Extraer el último elemento del array y eliminarlo (pop())
// &El método `.pop()` **extrae el último elemento del array** y lo retorna, pero además **lo elimina** del array original. Por lo tanto, modifica directamente el contenido del array.
console.log('--- Método pop en array. ---'); //* Imprime en consola un mensaje indicando que se demostrará el uso del método `pop()` en un array.
const arrayQueSeUsaraPop = ['Manzana', 'Pera', 'Banana', 'Naranja', 'Manzana', 'Naranja']; //* Array con varias frutas, algunas repetidas.
const resultadoExtraccionPopArray = arrayQueSeUsaraPop.pop(); //* Extrae "Naranja", que es el último valor del array.
console.log(resultadoExtraccionPopArray); //* Imprime el valor extraído.
console.log(arrayQueSeUsaraPop); //* Imprime el array ya sin el último valor ("Naranja").

// &Extraer el primer elemento del array y eliminarlo (shift())
// &El método `.shift()` funciona de forma similar a `.pop()`, pero en lugar de tomar el último elemento, **extrae el primero** del array. También **modifica** el array original al eliminar dicho primer elemento.
console.log('--- Método shift en array. ---'); //* Imprime en consola un mensaje indicando que se demostrará el uso del método `shift()` en un array.
const arrayQueSeUsaraShift = ['Manzana', 'Pera', 'Banana', 'Naranja', 'Manzana', 'Naranja']; //* Array con varias frutas, algunas repetidas.
const resultadoExtraccionShiftArray = arrayQueSeUsaraShift.shift(); //* Extrae "Manzana", que es el primer valor del array.
console.log(resultadoExtraccionShiftArray); //* Imprime el valor extraído.
console.log(arrayQueSeUsaraShift); //* Imprime el array ya sin el primer valor ("Manzana").

// &Agregar un elemento al final del array (push())
// &El método `.push()` sirve para **insertar uno o más elementos al final de un array**. Al hacerlo, el array se **modifica directamente**, agregando el nuevo elemento al final de la lista. Este método además **retorna la nueva longitud (length)** del array después de insertar el/los elemento/s.
console.log('--- Método push en array. ---'); //* Imprime en consola un mensaje indicando que se demostrará el uso del método `push()` en un array.
const arrayQueSeUsaraPush = ['Manzana', 'Pera', 'Banana', 'Naranja', 'Manzana', 'Naranja']; //* Array con varias frutas, algunas repetidas.
console.log(arrayQueSeUsaraPush.push('Piña')); //* Agrega el elemento "Piña" al final del array y retorna la nueva longitud.
console.log(arrayQueSeUsaraPush); //* Muestra el array con el nuevo elemento agregado al final.

// &Agregar un elemento al inicio del array (unshift())
// &El método `.unshift()` permite **agregar uno o más elementos al inicio de un array**, desplazando los elementos existentes hacia la derecha. También **modifica directamente el array**.
// &Al igual que `.push()`, este método **retorna la nueva longitud (length)** del array tras insertar el/los nuevo/s valor/es.
console.log('--- Método unshift en array. ---'); //* Imprime en consola un mensaje indicando que se demostrará el uso del método `unshift()` en un array.
const arrayQueSeUsaraUnshift = ['Manzana', 'Pera', 'Banana', 'Naranja', 'Manzana', 'Naranja']; //* Array con varias frutas, algunas repetidas.
console.log(arrayQueSeUsaraUnshift.unshift('Piña')); //* Agrega el elemento "Piña" al inicio del array y retorna la nueva longitud.
console.log(arrayQueSeUsaraUnshift); //* Muestra el array con el nuevo elemento insertado al principio.

// &Cortar elementos de array, sustituirlos o agregar nuevos elementos (splice())
// &El método `splice()` es muy versátil y permite modificar un array de distintas formas: se puede **eliminar** uno o más elementos a partir de un índice específico, **reemplazar** elementos existentes por otros nuevos o **insertar** nuevos elementos sin eliminar ninguno. La sintaxis básica es `array.splice(indiceInicio, cantidadElementosAEliminar, elementosAAgregar...)`. El primer parámetro indica la posición desde donde se empezará a modificar el array; el segundo parámetro indica cuántos elementos serán eliminados a partir de ese índice (si se pone 0, no se elimina ningún elemento); y a partir del tercer parámetro, se pueden pasar uno o más elementos que serán insertados en esa posición. Así, `splice()` puede actuar para cortar, reemplazar o agregar, dependiendo de los parámetros que se le proporcionen.
// ^Eliminar y sustituir elementos en un array
// ^En este ejemplo se eliminarán 2 elementos a partir del índice 2 ("Banana" y "Naranja"), y en su lugar se insertarán dos nuevos elementos: "Zanahoria" y "Brócoli".
console.log('--- Método splice para eliminar y reemplazar elementos en array. ---'); //* Imprime en consola un mensaje indicando que se demostrará el uso de `splice()` para cortar y sustituir elementos.
const arrayQueUsaraSpliceCorte = ['Manzana', 'Pera', 'Banana', 'Naranja', 'Manzana', 'Naranja']; //* Array con varias frutas, algunas repetidas.
arrayQueUsaraSpliceCorte.splice(2, 2, 'Zanahoria', 'Brócoli'); //* Desde índice 2, elimina 2 elementos y los reemplaza por "Zanahoria" y "Brócoli".
console.log(arrayQueUsaraSpliceCorte); //* Muestra el array modificado con el reemplazo de los elementos.

// ^Agregar elementos sin eliminar ninguno
// ^En este segundo ejemplo se agregarán elementos nuevos en el índice 2 sin eliminar ninguno, simplemente insertándolos y desplazando el resto hacia adelante.
console.log('--- Método splice para agregar elementos sin eliminar ninguno. ---'); //* Imprime en consola un mensaje indicando que se demostrará el uso de `splice()` para agregar elementos.
const arrayQueUsaraSpliceAgregacion = ['Manzana', 'Pera', 'Banana', 'Naranja', 'Manzana', 'Naranja']; //* Array original con frutas.
arrayQueUsaraSpliceAgregacion.splice(2, 0, 'Zanahoria', 'Brócoli'); //* Desde índice 2, elimina 0 elementos y agrega "Zanahoria" y "Brócoli" en esa posición.
console.log(arrayQueUsaraSpliceAgregacion); //* Muestra el array modificado con los nuevos elementos insertados.

// &Obtener elementos del array (slice())
// &El método `slice()` permite **extraer una parte de un array** sin modificar el array original. Su sintaxis es: `array.slice(indiceInicio, indiceFinal)`. El valor de `indiceInicio` indica desde qué posición del array se comenzará a extraer (el primer índice es 0), mientras que `indiceFinal` **no se incluye**, es decir, se detiene justo antes de este índice. Si solo se proporciona un índice, `slice()` devolverá todos los elementos desde esa posición hasta el final del array. También se pueden usar índices negativos para contar desde el final hacia el inicio.
console.log('--- Método slice para obtener elementos del array. ---'); //* Imprime en consola un mensaje indicando que se demostrará el uso del método `slice()` para obtener elementos sin modificar el array.
const arrayQueUsaraSlice = ['Manzana', 'Pera', 'Banana', 'Naranja', 'Manzana', 'Naranja']; //* Array original con frutas.
console.log(arrayQueUsaraSlice.slice(2, 4)); //* Extrae los elementos en las posiciones 2 y 3, que son "Banana" y "Naranja".

// &Formato de inserción de array en HTML (join())
// &Cuando se imprime un array directamente dentro del HTML, JavaScript lo convierte automáticamente en una cadena de texto, separando los elementos por comas. Por ejemplo, si tenemos `const frutas = ['Manzana', 'Pera']` y lo insertamos con `innerHTML = frutas`, se mostrará como: "Manzana,Pera". Para personalizar este formato y **modificar el separador entre los elementos**, se puede utilizar el método `join()`, el cual recibe como argumento una cadena que se colocará **entre cada elemento del array** al convertirlo en texto. Así, podemos insertar guiones, espacios, etiquetas HTML u otros separadores personalizados.
console.log('--- Método join en array. ---'); //* Imprime en consola un mensaje indicando que se demostrará el uso del método `join()` para obtener elementos sin modificar el array.
const arrayQueUsaraJoin = ['Manzana', 'Pera', 'Banana', 'Naranja', 'Manzana', 'Naranja']; //* Array con varias frutas, algunas repetidas.
console.log(arrayQueUsaraJoin.join(', Fruta: ')); //* Devuelve un string como: "Manzana, Fruta: Pera, Fruta: Banana, Fruta: Naranja, Fruta: Manzana, Fruta: Naranja"

// &Concatenar arrays con concat()
// &El método `.concat()` en arrays funciona de forma similar al método de strings con el mismo nombre: permite **fusionar o combinar** dos o más arrays en uno solo. Esto significa que **no se introduce un array dentro de otro**, sino que sus elementos se **unen en un nuevo array**, manteniendo el orden original. Es importante notar que `.concat()` **no modifica** los arrays originales, sino que retorna uno nuevo con la combinación resultante.
console.log('--- Método concat en array. ---'); //* Imprime en consola un mensaje indicando que se demostrará el uso del método `concat()` para unir arrays.
const arrayQueSeraConcatenado1 = ['Manzana', 'Pera', 'Banana', 'Naranja']; //* Primer array con frutas.
const arrayQueSeraConcatenado2 = ['Zanahoria', 'Lechuga', 'Brocoli']; //* Segundo array con verduras.
console.log(arrayQueSeraConcatenado1.concat(arrayQueSeraConcatenado2)); //* Imprime un nuevo array que contiene los valores de ambos arrays, en orden.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ~Dates (Fechas)
// ~Las fechas en JavaScript se manejan mediante el objeto `Date`. Al crear una nueva instancia con `new Date()`, se genera automáticamente la **fecha y hora actual del sistema**. Sin embargo, también es posible especificar manualmente una fecha dentro de los paréntesis (por ejemplo: `new Date(2025, 6, 18)` para el 18 de julio de 2025).
console.log('=========== Dates. ==========='); //* Muestra un mensaje en la consola para indicar el inicio de la sección sobre Dates.

// Todo - Obtención de un solo valor (fecha/mes/año)
// Todo - Cuando se tiene una variable con una fecha (`Date`), podemos acceder a **partes específicas** de ella utilizando métodos `get`, como `.getFullYear()` para el año, `.getMonth()` para el mes, o `.getDate()` para el día. Por otro lado, también existen métodos `set` para modificar estos valores. Mientras los métodos `get` **extraen datos**, los `set` **modifican partes de una fecha existente**.
// &Métodos get
// &Los métodos `get` permiten obtener **componentes específicos** de una fecha como el año, mes, día, hora, minutos, segundos, etc. Estos valores se devuelven como números que representan su parte correspondiente en la fecha.
// ^getFullYear
// ^El método `.getFullYear()` devuelve el **año completo** (en 4 dígitos) de la fecha almacenada. Por ejemplo, si la fecha es `2025-07-18`, el método devolverá `2025`.
console.log('--- Método getFullYear en Date. ---'); //* Indica que se demostrará cómo obtener el año de una fecha.
const dateConMetodoGetFullYear = new Date(); //* Se crea una instancia de fecha con la fecha actual.
console.log(dateConMetodoGetFullYear.getFullYear()); //* Muestra el año actual obtenido mediante `.getFullYear()`.

// ^getMonth
// ^El método `.getMonth()` devuelve el **mes**, pero basado en un índice que va de 0 a 11. Es decir, **enero es 0 y diciembre es 11**. Por lo tanto, si actualmente estamos en diciembre (mes 12), este método devolverá `11`. Esto se debe a que internamente JavaScript trata los meses como posiciones en un array.
console.log('--- Método getMonth en Date. ---'); //* Indica que se demostrará cómo obtener el mes actual.
const dateConMetodoGetMonth = new Date(); //* Se crea una instancia de fecha con la fecha actual.
console.log(dateConMetodoGetMonth.getMonth()); //* Muestra el mes actual como número de índice (0-11).

// ^getDate
// ^El método `.getDate()` devuelve el **día del mes** (de 1 a 31). A diferencia de `.getMonth()`, este sí devuelve el número directamente como lo conocemos (por ejemplo: 1, 2, 18, etc.).
console.log('--- Método getDate en Date. ---'); //* Indica que se demostrará cómo obtener el día del mes actual.
const dateConGetDate = new Date(); //* Se crea una instancia de fecha con la fecha actual.
console.log(dateConGetDate.getDate()); //* Muestra el día actual del mes.

// &Métodos set
// &Los métodos `set` permiten modificar partes específicas de una fecha ya existente. Por ejemplo, puedes cambiar solo el año, el mes o el día sin afectar el resto de la fecha. Para que surtan efecto, el valor debe pasarse como argumento dentro de los paréntesis. Es importante recordar que si haces algo como `console.log(fecha.setFullYear(2023))`, eso **no devuelve la fecha modificada directamente**, sino un valor numérico (el timestamp). Por eso, primero debes aplicar el `set`, y luego mostrar la fecha resultante completa con `console.log(fecha)`.
// ^setFullYear
// ^El método `.setFullYear(año)` permite cambiar el **año** de una fecha ya existente. El nuevo valor se pasa como argumento. Aquí, por ejemplo, se cambia el año al 2853.
console.log('--- Método setFullYear en Date. ---'); //* Indica que se demostrará cómo establecer un nuevo año en la fecha.
const dateConMetodoSetFullYear = new Date(); //* Se crea una instancia de fecha con la fecha actual.
dateConMetodoSetFullYear.setFullYear(2853); //* Se cambia el año a 2853.
console.log(dateConMetodoSetFullYear); //* Se muestra la fecha completa actualizada.

// ^setMonth
// ^El método `.setMonth()` permite cambiar el **mes** de una fecha. Al igual que con `.getMonth()`, se debe usar el número de índice del mes (enero es 0, diciembre es 11). Aquí se asigna el mes de diciembre usando `11`.
console.log('--- Método setMonth en Date. ---'); //* Indica que se demostrará cómo establecer un nuevo mes.
const dateConMetodoSetMonth = new Date(); //* Se crea una instancia de fecha con la fecha actual.
dateConMetodoSetMonth.setMonth(11); //* Se cambia el mes a diciembre (índice 11).
console.log(dateConMetodoSetMonth); //* Se muestra la fecha con el nuevo mes.

// ^setDate
// ^El método `.setDate()` permite establecer un **día específico del mes**. Si deseas establecer un día menor a 10, simplemente pon el número (por ejemplo `1`), **no es necesario** escribirlo como `01` (eso sería un string, no un número). Aquí se establece el día 1.
console.log('--- Método setDate en Date. ---'); //* Indica que se demostrará cómo establecer un nuevo día del mes.
const dateConMetodoSetDate = new Date(); //* Se crea una instancia de fecha con la fecha actual.
dateConMetodoSetDate.setDate(1); //* Se cambia el día del mes a 1.
console.log(dateConMetodoSetDate); //* Se muestra la fecha actualizada con el nuevo día.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ~Objeto Math
// ~El objeto `Math` en JavaScript proporciona propiedades y métodos matemáticos que pueden ser utilizados sin necesidad de crear una instancia (es decir, no se usa `new Math()`). Para acceder a sus propiedades y constantes, simplemente se escribe `Math.` seguido del nombre correspondiente, como `Math.PI` para el valor de π. Este objeto incluye **constantes matemáticas universales**, funciones trigonométricas, exponenciales, logarítmicas, redondeos y más.
console.log('=========== Objeto Math. ==========='); //* Muestra un mensaje en la consola para indicar el inicio de la sección sobre Objeto Math.

// Todo - Constantes matematicas 
// Todo - Las constantes matemáticas son valores fijos predefinidos que proporciona el objeto Math. Estas constantes representan números matemáticos importantes como el número PI, el número de Euler, raíces cuadradas y logaritmos. Se accede a ellas directamente desde el objeto Math, sin necesidad de crear una instancia. Por eso se les conoce como **propiedades estáticas**. Estas constantes no cambian y son útiles cuando se hacen cálculos matemáticos precisos en JavaScript. Por ejemplo, `Math.PI` representa el valor de π (3.14159...), que se puede usar para calcular áreas, circunferencias, etc. Su sintaxis es siempre: Math.NOMBRE_CONSTANTE
// &Número de Euler (E)
// &La constante `Math.E` representa el **número de Euler**, una constante matemática fundamental en logaritmos y crecimiento exponencial. Su valor aproximado es **2.71828...** y es la base de los logaritmos naturales.
console.log('--- Número de Euler. ---'); //* Indica que se demostrará con el objeto Math el número de Euler.
console.log(Math.E); //* Muestra el valor de la constante E (Euler).

// &π (PI)
// &La constante `Math.PI` representa el valor de **π (pi)**, una constante matemática utilizada para cálculos circulares y trigonométricos. Su valor aproximado es **3.14159...**.
console.log('--- PI. ---'); //* Indica que se demostrará con el objeto Math PI.
console.log(Math.PI); //* Muestra el valor de PI.

// &Raíz cuadrada de 2 (SQRT2)
// &La constante `Math.SQRT2` devuelve el valor de la **raíz cuadrada de 2**, que es aproximadamente **1.4142...**. Esta constante puede utilizarse para cálculos donde esté presente √2.
console.log('--- Raíz cuadrada de 2. ---'); //* Indica que se demostrará con el objeto Math la raíz cuadrada de 2.
console.log(Math.SQRT2); //* Muestra el valor de √2.

// &Raíz cuadrada de un medio (SQRT1_2)
// &La constante `Math.SQRT1_2` devuelve el valor de la **raíz cuadrada de 1/2**, es decir **√(1/2)**, cuyo valor es aproximadamente **0.7071...**. También equivale a **1/√2**, y es común en cálculos trigonométricos.
console.log('--- Raíz cuadrada de 1/2. ---'); //* Indica que se demostrará con el objeto Math la raíz cuadrada de 1/2.
console.log(Math.SQRT1_2); //* Muestra el valor de √(1/2).

// &Logaritmo natural de 2 (LN2)
// &La constante `Math.LN2` representa el **logaritmo natural de 2**, es decir, `ln(2)`, cuyo valor aproximado es **0.6931...**. Este valor se basa en logaritmos naturales (base Euler).
console.log('--- Logaritmo natural de 2. ---'); //* Indica que se demostrará con el objeto Math el logaritmo natural de 2.
console.log(Math.LN2); //* Muestra el valor de ln(2).

// &Logaritmo natural de 10 (LN10)
// &La constante `Math.LN10` representa el **logaritmo natural de 10**, es decir, `ln(10)`, cuyo valor es aproximadamente **2.3025...**. Se usa cuando se necesita convertir de logaritmo base 10 a natural.
console.log('--- Logaritmo natural de 10. ---'); //* Indica que se demostrará con el objeto Math el logaritmo natural de 10.
console.log(Math.LN10); //* Muestra el valor de ln(10).

// &Logaritmo de E en base 2 (LOG2E)
// &La constante `Math.LOG2E` representa el **logaritmo de Euler en base 2**, es decir, `log₂(e)`, cuyo valor aproximado es **1.4426...**. Se puede utilizar para cambiar la base de logaritmos.
console.log('--- Logaritmo de E en base 2. ---'); //* Indica que se demostrará con el objeto Math el logaritmo de E en base 2.
console.log(Math.LOG2E); //* Muestra el valor de log₂(e).

// &Logaritmo de E en base 10 (LOG10E)
// &La constante `Math.LOG10E` representa el **logaritmo de Euler en base 10**, es decir, `log₁₀(e)`, y su valor aproximado es **0.4342...**. Es útil en operaciones de conversión entre bases logarítmicas.
console.log('--- Logaritmo de E en base 10. ---'); //* Indica que se demostrará con el objeto Math el logaritmo de E en base 10.
console.log(Math.LOG10E); //* Muestra el valor de log₁₀(e).

// Todo - Redondeos
// Todo - En JavaScript, el objeto `Math` también incluye métodos para **redondear valores numéricos**. Estos métodos permiten controlar cómo se deben manejar los decimales: si deben eliminarse, redondearse hacia arriba, hacia abajo o al número más cercano. A diferencia de las **constantes matemáticas** (como `Math.PI`), aquí los métodos se **invocan como funciones**, y por lo tanto, se escriben como `Math.nombreDelMétodo(valor)` pasando el número que se quiere redondear entre paréntesis.
// &Redondeo al valor más cercano (round())
// &El método `Math.round()` redondea un número **hacia el entero más cercano**, es decir, analiza si el decimal es mayor o menor a .5:
// &- Si el decimal es menor a 0.5, redondea hacia abajo (por ejemplo, `2.4` se convierte en `2`)
// &- Si el decimal es 0.5 o mayor, redondea hacia arriba (por ejemplo, `7.5` se convierte en `8`).
console.log('--- Redondeo de valor hacia donde esté más cerca. ---'); //* Indica que se va a demostrar el uso del método `Math.round()`.
console.log(Math.round(4.6)); //* Muestra 5 porque 4.6 está más cerca de 5 que de 4.

// &Redondeo siempre hacia arriba (ceil())
// &El método `Math.ceil()` siempre **redondea hacia arriba**, sin importar cuán pequeño sea el decimal:
// &Por ejemplo, `2.1`, `2.00001` o incluso `2.5` siempre se convertirán en `3`. Esto es útil cuando se quiere asegurar que el número redondeado **nunca sea menor** al original.
console.log('--- Redondeo de valor siempre hacia arriba. ---'); //* Indica que se demostrará el uso de `Math.ceil()`.
console.log(Math.ceil(4.1)); //* Muestra 5, porque ceil fuerza el redondeo al entero superior.

// &Redondeo siempre hacia abajo (floor())
// &El método `Math.floor()` hace lo contrario a `ceil()`: siempre **redondea hacia abajo** al entero más cercano, sin importar el decimal. Es útil si se desea **descartar los decimales** sin importar su valor, pero dejando el número más pequeño posible.
console.log('--- Redondeo de valor siempre hacia abajo. ---'); //* Indica que se demostrará el uso de `Math.floor()`.
console.log(Math.floor(2.9)); //* Muestra 2, sin importar que 2.9 esté más cerca de 3.

// &Truncar decimales (trunc())
// &El método `Math.trunc()` **elimina completamente la parte decimal**, sin hacer ningún tipo de redondeo. Es decir, simplemente **corta el número** y se queda con su parte entera. Este comportamiento es similar a `floor()` pero funciona igual para positivos y negativos sin redondeo.
console.log('--- Trunca los decimales. ---'); //* Indica que se demostrará el uso de `Math.trunc()`.
console.log(Math.trunc(8.6)); //* Muestra 8, ya que trunc simplemente descarta todo lo que está después del punto decimal.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ~Condicionales (if/else/switch)
// ~Un condicional en JavaScript es una estructura del control, la cual permite ejecutar distintos bloques de código dependiendo de una condición específica, esto permite tener cierto comportamiento o ciertas acciones dependiendo de si esta condición es verdadera o falsa. También permite que un programa tome decisiones y ejecute ciertos caminos distintos según el valor o resultado de una expresión, permitiendo mayor control y flexibilidad dentro del flujo del programa.
console.log('=========== Condicionales. ==========='); //* Muestra un mensaje en la consola para indicar el inicio de la sección sobre Condicionales.

// Todo - Declaración y función de condicionales en JavaScript
// Todo - Aqui le pones que existen 3 condicionales en Javascript y cada una de ellas tienen funciones diferentes y maneras diferentes de declararse y usarse; los condicionales permiten ejecutar distintos bloques de código dependiendo de si una condición lógica se cumple o no, y estas condiciones suelen evaluarse mediante operadores de comparación.
// &Si se cumple una condición (if(){})
// &Aqui le pones que if(){} lo que hace es que dentro de los paréntesis evalúa que se cumpla lo que ponemos, normalmente se usan operadores de comparación como (==, <=, ===, etc.), ya que lo que se espera es un valor booleano (true o false); si la condición devuelve true, se ejecuta lo que esté dentro de las llaves {}.
if(3 <= 5){ //* Se evalúa si el número 3 es menor o igual a 5, lo cual es verdadero.
    console.log('--- Condicional If. ---'); //* Imprime un mensaje para indicar que se ejecutó el bloque del condicional if.
    console.log('El valor de 3 es menor a 5.'); //* Muestra un mensaje que explica por qué se ejecutó el bloque.
} // *Cierre de condicionales.

// &En caso de que no se cumpla la condición anterior entonces (else(){})
// &Aqui pones que else comúnmente va después de la llave de cierre de if, lo que permite else es ejecutar un bloque alternativo si la condición del if no se cumplió, además se puede usar else if, el cual permite evaluar condiciones adicionales si la primera fue falsa, y se pueden agregar tantos else if como se necesiten para cubrir distintos casos posibles.
console.log('--- Condicional Else. ---'); //* Imprime un mensaje para indicar que se ejecutó el bloque del condicional else.
const valorParaCondicionalElse = 5; //* Se declara una variable con valor 5 que se usará en los condicionales.
if(valorParaCondicionalElse >= 7 && valorParaCondicionalElse <= 10){ //* Evalúa si el valor es mayor o igual a 7 y menor o igual a 10.
    console.log('El valor de la variable es igual o mayor que 7 y menor o igual a 10.'); //* Se ejecuta si la condición anterior es verdadera.
} else if(valorParaCondicionalElse < 7){ //* Evalúa si el valor es menor que 7 si la primera condición no se cumplió.
    console.log('El valor de la variable es menor que 7.'); //* Se ejecuta si esta segunda condición es verdadera.
} else{ //* Si ninguna de las condiciones anteriores se cumple, se ejecuta este bloque final.
    console.log('El valor de la variable es mayor que 10.'); //* Muestra un mensaje indicando que el valor supera los 10.
} // *Cierre de condicionales.

// &Si se cuenta con diferentes opciones (switch)
// &Aqui le pones que switch es un poco complicado de usar quizás, pero lo que hace es que está conformado por una estructura un poco más compleja que if y else, ya que switch se enfoca más para cuando se tienen varios valores posibles que queremos comparar con uno solo; mientras if espera un valor booleano (true o false) para ejecutarse, switch lo que hace es evaluar directamente el valor que se le pasa y verificar si coincide con alguno de los valores definidos en cada case, si encuentra coincidencia se ejecuta lo que esté dentro de ese case; su estructura es: switch(valor){ case valorAComparar: acciones; break; } permitiendo definir múltiples case para distintos escenarios; el break se utiliza para que, una vez se ejecute un case coincidente, finalice el bloque y no se sigan ejecutando los demás case, mientras que default se usa para ejecutar un bloque en caso de que ningún case coincida con el valor evaluado.
console.log('--- Condicional Switch. ---'); //* Imprime un mensaje para indicar que se ejecutó el bloque del condicional switch.
const variableParaCondicionalSwitch = 'Rock'; //* Se declara una variable que contiene el valor que se evaluará en la estructura switch.

switch (variableParaCondicionalSwitch) { //* Se inicia la estructura switch que evaluará el valor de la variable contra diferentes posibles opciones.
    case 'Pop': //* Si el valor de la variable es exactamente 'Pop', se ejecutará el siguiente bloque.
        console.log('Te gusta el Pop, por lo que te recomiendo a Michale Jackson.'); //* Muestra una recomendación musical para el género Pop.
        break; //* Finaliza la ejecución del switch si se cumple este case.

    case 'Regional Mexicano': //* Si el valor es exactamente 'Regional Mexicano', se ejecutará este bloque.
        console.log('Te gusta el Regional Mexicano, por lo que te recomiendo a Alfredo Olivas.'); //* Muestra una recomendación musical para el género Regional Mexicano.
        break; //* Finaliza la ejecución del switch si se cumple este case.

    case 'Rock': //* Si el valor es exactamente 'Rock', se ejecutará este bloque.
        console.log('Te gusta el Rock, por lo que te recomiendo a Queen.'); //* Muestra una recomendación musical para el género Rock.
        break; //* Finaliza la ejecución del switch si se cumple este case.

    default: //* Si ningún case anterior coincide con el valor de la variable, se ejecutará este bloque por defecto.
        console.log('No se ha encontrado tu género musical dentro de las posibles opciones.'); //* Muestra un mensaje indicando que no hubo coincidencia en los case.
        break; //* Finaliza el bloque default (aunque no es obligatorio, se pone por buenas prácticas).
} // *Cierre de condicional

// &If's anidados
// &Se pueden tener condicionales `if` dentro de otros `if`, lo que permite evaluar múltiples condiciones en un orden jerárquico; esto es útil cuando una condición solo debe evaluarse si otra ya se ha cumplido previamente. Por ejemplo, primero se puede verificar si una persona es mayor de edad y solo si lo es, después se valida su nacionalidad, y finalmente si tiene pasaporte. Esto ayuda a estructurar decisiones más complejas en pasos lógicos, anidando los `if` uno dentro de otro según la necesidad.
console.log('--- If´s anidados. ---'); //* Imprime un mensaje indicando que se demostrará el uso de if anidados.
let edad = 18; //* Se declara una variable que representa la edad de la persona.
let nacionalidad = 'Mexicana'; //* Se declara una variable que indica la nacionalidad de la persona.
let tienePasaporte = true; //* Se declara una variable booleana que indica si la persona tiene pasaporte.

if(edad >= 18){ //* Se evalúa si la persona es mayor o igual a 18 años.
    console.log('Eres mayor de edad, aprobado trámite 1.'); //* Si se cumple la condición, se aprueba el primer requisito.

    if(nacionalidad == 'Mexicana'){ //* Si la persona es mayor de edad, ahora se verifica si su nacionalidad es Mexicana.
        console.log('Tu nacionalidad es Mexicana, aprobado trámite 2.'); //* Si es mexicana, se aprueba el segundo requisito.

        if(tienePasaporte == true){ //* Si las dos condiciones anteriores se cumplen, se verifica si tiene pasaporte.
            console.log('Tienes pasaporte por lo que puedes viajar, ¡Feliz Viaje!'); //* Si tiene pasaporte, se permite viajar.
        } else { //* Si no tiene pasaporte...
            console.log('Es obligatorio tener pasaporte para poder viajar'); //* Se muestra un mensaje indicando que es necesario tener pasaporte.
        } // *Cierre del if que evalúa si tiene pasaporte

    } else { //* Si no tiene nacionalidad mexicana...
        console.log('Es obligatorio presentar la documentación de tu nacionalidad.'); //* Se solicita la documentación correspondiente.
    } // *Cierre del if que evalúa la nacionalidad

} else { //* Si no es mayor de edad...
    console.log('Es obligatorio ser mayor de edad para poder viajar al exterior.'); //* Se informa que no cumple con el requisito mínimo de edad.
} // *Cierre del if que evalúa la mayoría de edad

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ~Bucles (for, while, etc...)
// ~Los bucles en JavaScript son una **estructura de control** que permite ejecutar un bloque de código repetidamente mientras se cumpla una condición. Esto automatiza tareas repetitivas sin necesidad de escribir el mismo código muchas veces. Son especialmente útiles para recorrer arrays, permitiendo acceder a cada elemento sin escribir código duplicado. En JavaScript existen dos tipos principales de bucles para arrays: el `for` tradicional y el `for...of`. Además, hay bucles para objetos como `for...in`. También existen bucles generales como `while` y `do...while`. Conocer sus diferencias y usos nos permite escribir código más eficiente y claro.
console.log('=========== Bucles. ==========='); //* Indica el inicio de la sección de bucles.

// Todo - Bucles de Arrays (for, for...of)
// Todo - Los bucles para arrays permiten iterar sobre todos los elementos, facilitando la lectura o manipulación de datos. El bucle `for` es más detallado, pues se controla el índice manualmente, ideal cuando necesitamos ese control. El bucle `for...of` es más simple y directo, perfecto cuando solo queremos el valor de cada elemento sin preocuparnos por el índice.
// &Sintaxis de los bucles For
// &Los bucles en JavaScript tienen una estructura definida que incluye tres partes fundamentales dentro de los paréntesis: (1) la **declaración de una variable de control** (comúnmente con `let`, iniciando desde 0), (2) una **condición lógica** que evalúa si el bucle debe continuar ejecutándose (por ejemplo, si la variable es menor al tamaño del array), y (3) una **actualización de la variable de control** (normalmente se incrementa con `index++`, lo cual suma 1 en cada iteración). El bucle `for` es el más utilizado cuando se conoce de antemano cuántas veces queremos repetir una acción. Por ejemplo, si tenemos un array y queremos recorrer cada uno de sus elementos, podemos usar un bucle `for` con la siguiente estructura: `for(let index = 0; index < nombreArray.length; index++)`, donde `nombreArray.length` indica el tamaño total del array. Dentro del bucle, usamos la línea `const element = array[index];` para acceder individualmente a cada elemento, utilizando la variable `index` como posición en el array. Así, en cada vuelta del bucle, se seleccionará un nuevo elemento y se ejecutarán las instrucciones correspondientes.
console.log('--- Bucle For. ---'); //* Imprime un mensaje indicando que se demostrará el uso de un bucle for.
let dispositiovosTecnologicos = [ //* Se declara un array llamado `dispositiovosTecnologicos` usando la palabra clave `let`. Luego se abren corchetes `[]`, lo que indica que es una lista.
    'celular', //* Elemento 0: una cadena de texto. Representa un dispositivo tecnologico.
    'laptop',    //* Elemento 1: otra cadena. Los elementos están separados por comas.
    'bocina'      //* Elemento 2: el último elemento no lleva coma final (aunque JS lo permite en versiones modernas).
]; //* Cierre del array. Este array contiene 3 elementos de tipo `string`.

for (let index = 0; index < dispositiovosTecnologicos.length; index++) { //* Se declara un bucle `for`. Primero se crea una variable `index` que comienza en 0. Luego se verifica si `index` es menor que la longitud del array `dispositiovosTecnologicos` (es decir, el número total de elementos). Si la condición se cumple, el bloque de código se ejecuta y después `index` aumenta en 1 con `index++`.
    const element = dispositiovosTecnologicos[index]; //* Se crea una constante `element` que toma el valor de `dispositiovosTecnologicos[index]`, es decir, el elemento del array en la posición actual indicada por `index`.
    console.log('Dispotiivo tecnologico actual: ', element); //* Se imprime en consola el valor actual de `element`, mostrando cada fruta una por una.
} // *Cierre del ciclo for.

// &Sintaxis de los bucles For Of
// &El bucle `for...of` es una forma más simple y moderna de recorrer elementos en un array. A diferencia del bucle `for` tradicional, que requiere declarar una variable de control y manejar índices, `for...of` itera directamente sobre los valores de la colección, facilitando la lectura y evitando errores con índices. La sintaxis básica es: `for (nombreSingularDeElemento of nombreArray)`, donde `nombreSingularDeElemento` representa cada elemento individual que se tomará del array en cada vuelta del bucle, y `nombreArray` es el array que se quiere recorrer. Aunque no es obligatorio que el nombre singular sea exactamente la versión singular del plural del array, se recomienda por claridad y buenas prácticas para entender mejor el código.
console.log('--- Bucle For Of. ---'); //* Imprime un mensaje indicando que se demostrará el uso de un bucle for...of.
let utensiliosCocina = [ //* Se declara un array llamado `utensiliosCocina` usando la palabra clave `let`. Luego se abren corchetes `[]`, lo que indica que es una lista.
    'cuchara',   //* Elemento 0: una cadena de texto que representa un utensilio de cocina.
    'tenedor',   //* Elemento 1: otra cadena que representa otro utensilio.
    'cuchillo'   //* Elemento 2: el último elemento no lleva coma final (aunque JS lo permite en versiones modernas).
]; //* Cierre del array `utensiliosCocina`.

for (let utensilioCocina of utensiliosCocina) { //* Se inicia un bucle for...of que declara la variable `utensilioCocina` y recorre cada elemento del array `utensiliosCocina` directamente.
    console.log(utensilioCocina); //* En cada iteración se imprime en consola el valor actual de `utensilioCocina`, mostrando los elementos uno por uno.
} // *Cierre del ciclo for of.

// &Sintaxis de los bucles For Each
// &El método `.forEach()` es una forma moderna y muy utilizada para recorrer arrays en JavaScript. A diferencia del bucle `for` tradicional, `forEach` **no necesita una variable de control** ni una condición manual, ya que internamente se encarga de recorrer **cada elemento del array en orden**. Su estructura general es: `array.forEach((elemento) => { /* código */ })`, donde `elemento` representa cada uno de los valores del array.  Es importante saber que `forEach` ejecuta la función proporcionada **una vez por cada elemento**, y es especialmente útil cuando simplemente se quiere hacer algo con cada valor (como imprimirlo o modificarlo visualmente). Aunque es más legible, una diferencia clave es que **no se puede detener** o hacer "break" como en otros bucles (como `for` o `while`). Cada elemento será procesado sin interrupción.
console.log('--- Bucle For Each. ---'); //* Imprime un mensaje indicando que se demostrará el uso de un bucle for...each.
let colores = [ //* Se declara un array llamado `colores` que contiene cuatro cadenas de texto. Cada una representa un color distinto.
    'Rojo',    //* Elemento 0: color rojo.
    'Verde',   //* Elemento 1: color verde.
    'Azul',    //* Elemento 2: color azul.
    'Morado'   //* Elemento 3: color morado.
]; //* Fin del array.

colores.forEach(element => { //* Se aplica el método `.forEach()` sobre el array `colores`. La función flecha recibe el parámetro `element`, que será cada color individual.
    console.log(element); //* Se imprime en consola el valor actual del color que se está recorriendo.
}); //* Cierre de bucle forEach

// Todo - Bucles de objetos (For In)
// Todo - El bucle `for...in` se utiliza principalmente para **recorrer todas las propiedades enumerables** de un objeto. A diferencia del bucle `for...of`, que se usa con arrays y devuelve los **valores**, `for...in` devuelve las **claves** (o llaves) de un objeto, es decir, los nombres de sus propiedades. La sintaxis básica es: `for (clave in objeto)`, donde la variable `clave` tomará el nombre de cada propiedad del objeto una por una en cada iteración. Posteriormente, se puede acceder al valor de cada propiedad usando la notación de corchetes: `objeto[clave]`. Este tipo de bucle es muy útil cuando se quiere procesar dinámicamente las propiedades de un objeto, sin necesidad de saber cuántas o cuáles son con anticipación.
console.log('--- Bucle For In. ---'); //* Imprime un mensaje indicando que se demostrará el uso de un bucle for...in.
let alumnos = { //* Se declara un objeto llamado `alumnos` que contiene varias propiedades con distintos tipos de valores.
    nombre: 'Miguel', //* Propiedad `nombre`: almacena una cadena de texto.
    edad: 23,         //* Propiedad `edad`: almacena un número.
    tecnologias: ['HTML','CSS'] //* Propiedad `tecnologias`: almacena un array con dos tecnologías.
}; //* Fin de la declaración del objeto.

for (const key in alumnos) { //* Se inicia un bucle `for...in` donde `key` tomará el nombre de cada propiedad del objeto `alumnos` en cada vuelta del bucle.
    console.log(alumnos[key]); //* En cada iteración, se imprime el valor de la propiedad actual usando notación de corchetes: `alumnos[key]`.
} // *Cierre del ciclo for in.

// Todo - Bucles Lógicos (While, Do While)
// Todo - Los bucles lógicos `while` y `do while` son estructuras de control que permiten repetir un bloque de código mientras se cumpla una condición específica, el bucle `while` evalúa la condición **antes** de ejecutar el código en cada iteración, por lo que si la condición es falsa desde un inicio, el código dentro del bucle no se ejecutará ni una sola vez. En cambio, el bucle `do while` ejecuta el bloque de código **al menos una vez** antes de evaluar la condición, y luego repetirá la ejecución mientras la condición siga siendo verdadera. Estos bucles son muy útiles cuando no se conoce de antemano cuántas veces debe repetirse un proceso, y la repetición depende de una condición dinámica que puede cambiar durante la ejecución.
// &While
// &El bucle `while` es una estructura de control que funciona como un condicional en forma de bucle. Su principal característica es que **ejecutará un bloque de código repetidamente mientras una condición sea verdadera**. Es decir, si la condición se cumple, se entra al bucle y se ejecuta su contenido. Cuando termine esa vuelta, **se vuelve a verificar la condición**, y si aún es verdadera, se repite el proceso.  Este tipo de bucle es muy útil cuando **no sabemos exactamente cuántas veces necesitaremos repetir una acción**, pero sí sabemos la condición que debe cumplirse para detenerlo. ⚠️ Sin embargo, hay que tener mucho cuidado: **si la condición nunca deja de cumplirse, el bucle se ejecutará infinitamente**, lo que puede hacer que el navegador o programa se congele o falle.  Por eso es fundamental que **dentro del bucle haya algo que modifique la condición**, para que eventualmente se vuelva falsa y el bucle termine.
console.log('--- Bucle While. ---'); //* Imprime un mensaje indicando que se demostrará el uso de un bucle while.
edad = 0; //* Se declara la variable `edad` y se le asigna el valor 0. Esta será usada para controlar cuándo termina el bucle.

while(edad < 18){ //* Se inicia un bucle `while`. La condición es que la edad sea menor a 18. Mientras esta condición sea verdadera, el código dentro del bucle seguirá ejecutándose.
    console.log(`Tienes ${edad}, por lo que aun eres menor.`); //* Se imprime un mensaje con el valor actual de `edad`, indicando que aún no es mayor de edad.
    edad++; //* Se incrementa el valor de `edad` en 1. Esto es esencial para que eventualmente la condición deje de cumplirse y el bucle termine.
} // *Cierre del buclew while

console.log(`Tienes ${edad}, por lo que ya eres mayor.`); //* Una vez que termina el bucle (cuando `edad` llega a 18), se imprime un mensaje indicando que ya se es mayor de edad.

// &Do While
// &El bucle `do...while` es una estructura de control que **garantiza que el bloque de código se ejecutará al menos una vez**, sin importar si la condición es verdadera o falsa en la primera evaluación. Esto se debe a que **primero se ejecuta el código dentro del bloque `do`**, y **después se evalúa la condición del `while`**. Si la condición es verdadera, el bucle se repite. Si es falsa, se detiene. En contraste, el bucle `while` tradicional **evalúa la condición primero**, y solo ejecuta el código si la condición es verdadera desde el inicio. Por eso el `do...while` es útil cuando **se necesita ejecutar algo al menos una vez**, sin depender de la condición inicial.
console.log('--- Bucle Do While. ---'); //* Imprime un mensaje indicando que se demostrará el uso de un bucle do while.
edad = 0; //* Se declara la variable `edad` y se le asigna el valor 0. Esta será usada para controlar cuándo termina el bucle.

do{ //* Se inicia el bucle `do`, que garantiza que el bloque de código se ejecutará al menos una vez.
    { // *Apertura de funciones del do.
        edad++; //* Se incrementa la variable `edad` en 1. Esto modifica la condición que se evaluará después.
        console.log(`Tienes ${edad} años.`); //* Se imprime el valor actual de `edad`.
    } // *Cierre de funciones del do.
}while(edad <= 7) //* Después de ejecutar el bloque, se evalúa esta condición. Si `edad` sigue siendo menor o igual a 7, se vuelve a ejecutar el `do`.

console.log(`Tienes ${edad} años.`); //* Una vez que la condición del `while` es falsa (cuando `edad` > 7), se imprime un mensaje indicando la edad final.

// Todo - Intrucciones especiales dentro de bucles
// Todo - Dentro de los bucles podemos utilizar **instrucciones especiales** que modifican el comportamiento normal de la ejecución del ciclo. Las más comunes son `break` y `continue`. `break` se usa para **salir del bucle de forma inmediata**, aunque la condición aún sea verdadera.`continue` se utiliza para **saltar la iteración actual** y continuar con la siguiente vuelta del bucle. Estas herramientas son útiles cuando, por ejemplo, se quiere detener el bucle ante una condición específica o evitar ejecutar parte del código en ciertas situaciones.
// &Break
// &La instrucción `break` detiene por completo la ejecución del bucle en el que se encuentra, es decir, cuando el intérprete de JavaScript encuentra un `break`, **sale inmediatamente del bucle**, incluso si la condición del bucle sigue siendo verdadera.  Esto es útil, por ejemplo, para detener un bucle infinito o evitar que siga ejecutándose después de alcanzar cierta condición específica.
console.log('--- Break. ---'); //* Imprime un mensaje indicando que se demostrará el uso de un bucle break.
var x = 5; //* Se declara una variable `x` con valor inicial 5.

while(x == 5){ //* Se declara un bucle `while` cuya condición es que `x` sea igual a 5. Como la condición es verdadera y no se modifica dentro del bucle, sería un bucle infinito.
    console.log('El valor de X es 5.'); //* Se imprime un mensaje indicando el valor de `x`.
    break; //* Se ejecuta la instrucción `break`, lo que **interrumpe la ejecución del bucle inmediatamente**, evitando que se vuelva infinito.
} // *Cierre del bucle while.

//* En este ejemplo, aunque el bucle `while` tenía una condición que siempre sería verdadera (`x == 5`), el uso de `break` provoca que el bucle **solo se ejecute una vez y luego se detenga**.  
//* Esto demuestra cómo `break` puede usarse para **forzar la salida** de bucles infinitos o para terminar la ejecución cuando se cumpla una condición específica.

// &Continue
// &La instrucción `continue` se utiliza dentro de bucles para **saltar la iteración actual** y continuar con la siguiente vuelta del ciclo, es decir, cuando el intérprete encuentra un `continue`, **ignora cualquier código que venga después de él en esa vuelta del bucle** y pasa directamente a la siguiente iteración. Esto es útil cuando queremos evitar que se ejecute cierto bloque de código bajo una condición específica, pero sin detener todo el bucle como lo haría `break`. Por lo que cabe mencionar que el continue omitira absolutamente todo el resto del codigo dentro del bucle desde donde se lee continue, pero a diferencia de 'break', este si permitira la repeticion o ejecucion del bucle.
console.log('--- Continue. ---'); //* Imprime un mensaje indicando que se demostrará el uso de un bucle continue.
for (let i = 1; i <= 5; i++) { //* Se declara un bucle `for` que comenzará con `i` igual a 1 y se repetirá mientras `i` sea menor o igual a 5. En cada vuelta, `i` aumentará en 1.
    
    if(i === 3){ //* Se evalúa si el valor actual de `i` es exactamente igual a 3.
        continue; //* Si la condición se cumple (i es 3), se ejecuta `continue`, lo que hace que se **salte el resto del código** dentro del bucle para esta iteración.
    } // *Cierre de condicional if
    console.log(`Iteración número: ${i}`); //* Solo se ejecutará si `i` NO es 3. Imprime el número de la iteración actual.
} // *Cierre de bucle for.

//* En este ejemplo, el bucle imprimirá los números del 1 al 5, excepto el número 3.  
//* Cuando `i` vale 3, el `continue` evita que se ejecute el `console.log`, y pasa a la siguiente vuelta (`i = 4`).  
//* Este comportamiento es útil cuando quieres **evitar ejecutar ciertas instrucciones para casos específicos sin terminar el bucle completo**, a diferencia del `break` que lo finalizaría por completo.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ~Sets y Maps
// ~Un Set en JavaScript es una estructura de datos que almacena valores únicos, es decir, no permite elementos duplicados. Esto lo hace ideal para eliminar duplicados de una lista o verificar la presencia de un valor sin importar el orden. Un Map es similar a un objeto tradicional pero más flexible, pues permite usar como claves cualquier tipo de dato, no solo strings. Ambas estructuras son muy útiles para manejar colecciones de datos de forma eficiente.
console.log('=========== Sets y Maps. ==========='); //* Indica el inicio de la sección de Sets y Maps.

// Todo - Set
// Todo - Un Set es un conjunto único de elementos, lo que significa que no puede contener valores repetidos. Se usa para almacenar colecciones donde la unicidad es importante. Al crear un Set a partir de un array, JavaScript elimina automáticamente los duplicados y conserva solo una instancia de cada valor. Esto facilita trabajar con listas limpias y evitar redundancias. Por lo que para declarar un Set, se utiliza la palabra clave `new` seguida de `Set()`, pasando un array como argumento. Los Sets son útiles para operaciones como verificar si un valor ya existe, agregar nuevos elementos sin duplicados o eliminar valores específicos. Además, ofrecen métodos para manipular sus elementos, como `add()`, `delete()`, `has()` y `size`, que permiten agregar, eliminar, verificar existencia y contar elementos únicos respectivamente.
console.log('--- SET. ---'); //* Imprime un mensaje indicando que se demostrará el uso de Set.
let nombres = ['Jose', 'Miguel', 'Gerardo', 'Luis', 'Jose', 'Miguel', 'Gerardo']; //* Se declara un array con nombres que incluyen valores repetidos.
let nombreConSet = new Set(nombres); //* Se crea un Set a partir del array, eliminando automáticamente los elementos duplicados.
console.log(nombreConSet); //* Muestra el Set en consola con solo los valores únicos, sin repeticiones.

// Todo - Métodos de Set
// Todo - Los Sets poseen métodos específicos para manipular sus elementos. Estos métodos permiten agregar nuevos valores, eliminar existentes, verificar si un elemento está presente y obtener la cantidad total de elementos únicos. Es importante recordar que estos métodos solo funcionan en variables que contienen Sets, no en arrays comunes.
// &Agregar elemento (add())
// &El método add() permite insertar un nuevo valor en el Set. Si el valor ya existe, el Set no lo agregará de nuevo, manteniendo la unicidad. Esto es útil para ampliar una colección sin crear duplicados.
console.log('--- add. ---'); //* Muestra un mensaje indicando el uso del método add.
nombres = new Set(['Jose', 'Miguel', 'Gerardo', 'Luis', 'Jose', 'Miguel', 'Gerardo']); //* Se crea un nuevo Set con elementos duplicados eliminados.
console.log(nombres.add('Felipe')); //* Se agrega un nuevo elemento 'Felipe' al Set y se imprime el Set actualizado.

// &Eliminar elemento (delete())
// &El método delete() elimina un valor específico del Set si este existe. Retorna true si el elemento fue eliminado, o false si no se encontró el elemento. Es útil para modificar la colección eliminando valores no deseados.
console.log('--- delete. ---'); //* Muestra un mensaje indicando el uso del método delete.
nombres = new Set(['Jose', 'Miguel', 'Gerardo', 'Luis', 'Jose', 'Miguel', 'Gerardo']); //* Se crea nuevamente el Set desde un array con duplicados.
console.log(nombres.delete('Jose')); //* Se elimina el elemento 'Jose' del Set, mostrando true si fue eliminado.
console.log(nombres); //* Se muestra el Set actualizado tras la eliminación del elemento.

// &Verificar existencia de un elemento (has())
// &El método has() comprueba si un valor determinado está presente en el Set. Devuelve true si el valor existe, o false si no. Es una forma eficiente de hacer consultas rápidas dentro del Set.
console.log('--- has. ---'); //* Muestra un mensaje indicando el uso del método has.
nombres = new Set(['Jose', 'Miguel', 'Gerardo', 'Luis', 'Jose', 'Miguel', 'Gerardo']); //* Se define el Set con valores únicos.
console.log(nombres.has('Miguel')); //* Verifica si 'Miguel' está en el Set, devolviendo true.

// &Cantidad de elementos en el Set (size)
// &A diferencia de los arrays, los Sets no tienen la propiedad length. En su lugar, tienen la propiedad size, que devuelve el número total de elementos únicos almacenados en el Set. Esto es útil para conocer la extensión de la colección.
console.log('--- size. ---'); //* Muestra un mensaje indicando el uso de la propiedad size.
nombres = new Set(['Jose', 'Miguel', 'Gerardo', 'Luis', 'Jose', 'Miguel', 'Gerardo']); //* Se crea el Set con elementos únicos.
console.log(nombres.size); //* Muestra la cantidad total de elementos únicos dentro del Set.

// Todo - Convertir un valor de set a un array
// Todo - Cuando se crea un Set a partir de un array, este elimina automáticamente los valores duplicados y almacena solo elementos únicos, representados internamente como "{1, 2, 3, 4}". Sin embargo, si queremos volver a obtener un array con esos valores únicos, podemos convertir el Set nuevamente en un array usando el operador spread (`...`). Esto permite trabajar con los datos como un array normal, con todas sus funcionalidades.
console.log('--- set a array. ---'); //* Indica que se demostrará la conversión de un Set a un Array.
let variableConArrayInicial = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5]; //* Se crea un array con valores duplicados.
let setDelArray = new Set(variableConArrayInicial); //* Se crea un Set a partir del array, eliminando los valores duplicados.
let setConvertidoArray = [...setDelArray]; //* Se convierte el Set de nuevo en un array utilizando el operador spread, manteniendo solo los valores únicos.
console.log(setDelArray); //* Muestra el Set con valores únicos.
console.log(setConvertidoArray); //* Muestra el array resultante, que contiene los mismos valores únicos del Set.

// Todo - Maps
// Todo - Los Maps son una estructura en JavaScript que permite almacenar datos en forma de pares clave-valor. Aunque se parecen a los objetos tradicionales, tienen características que los hacen más flexibles. La principal diferencia es que en un Map las claves pueden ser de **cualquier tipo**, incluyendo **números, objetos, funciones o strings**, mientras que en un objeto las claves son convertidas automáticamente a strings. Además, los Maps conservan el **orden de inserción**, lo que significa que los elementos se mantienen en el orden en el que fueron añadidos. Para declarar un Map, se utiliza la sintaxis `new Map()`, y si se quiere iniciar con valores, estos se pasan dentro de un array que contiene subarrays con los pares clave-valor.
console.log('--- MAP. ---'); //* Muestra un mensaje indicando el uso de un Map.
let mapaConDistintosDatos = new Map([ //* Se crea un nuevo Map llamado `mapaConDistintosDatos` con distintos tipos de valores asociados a sus claves.
    ['nombre', 'Christian'], //* Clave: 'nombre', Valor: 'Christian'. Un string simple como valor.
    ['frutas', ['manzana', 'pera', 'sandía']], //* Clave: 'frutas', Valor: un array con distintos tipos de fruta.
    ['infoUsuario', { id: 1, rol: 'admin' }], //* Clave: 'infoUsuario', Valor: un objeto con información de usuario.
    ['saludo', function () { return '¡Hola desde el Map!'; }] //* Clave: 'saludo', Valor: una función anónima que devuelve un saludo.
]);

console.log(mapaConDistintosDatos.get('nombre')); //* Se accede al valor de la clave 'nombre', mostrando 'Christian'.
console.log(mapaConDistintosDatos.get('frutas')); //* Se accede al valor de la clave 'frutas', mostrando el array ['manzana', 'pera', 'sandía'].
console.log(mapaConDistintosDatos.get('infoUsuario')); //* Se accede al valor de la clave 'infoUsuario', mostrando el objeto { id: 1, rol: 'admin' }.
console.log(mapaConDistintosDatos.get('saludo')); //* Se accede a la función almacenada en 'saludo'. Muestra el contenido de la función como tal, no su ejecución.

// Todo - Métodos de Map
// Todo - Un Map en JavaScript es una colección de pares clave-valor donde tanto las claves como los valores pueden ser de cualquier tipo (no solo strings). Los métodos principales permiten agregar, eliminar, verificar elementos, y obtener información sobre la colección. Los Maps son ideales cuando necesitamos mapas flexibles con claves que no son solo strings o queremos mantener el orden de inserción.
// &Agregar elemento al mapa (set())
// &El método set() se usa para añadir un nuevo par clave-valor al Map. Si la clave ya existe, su valor se actualiza. Esto permite construir o modificar dinámicamente el contenido del Map.
console.log('--- set. ---'); //* Imprime un mensaje indicando el inicio de la demostración del método set.
mapaConDistintosDatos = new Map([ //* Se crea un Map con varios pares clave-valor iniciales.
    ['nombre', 'Christian'], //* Clave 'nombre' con valor string 'Christian'.
    ['frutas', ['manzana', 'pera', 'sandía']], //* Clave 'frutas' con valor un array de frutas.
    ['infoUsuario', { id: 1, rol: 'admin' }], //* Clave 'infoUsuario' con valor un objeto que contiene datos del usuario.
    ['saludo', function () { return '¡Hola desde el Map!'; }] //* Clave 'saludo' con valor una función que retorna un saludo.
]); // *Cierre del Mapa.
console.log(mapaConDistintosDatos.set('edad', 22)); //* Añade la clave 'edad' con valor 22 al Map y muestra el Map actualizado.

// &Cantidad de elementos en el Map (size)
// &La propiedad size devuelve el número total de pares clave-valor actualmente almacenados en el Map. Esto es útil para conocer la dimensión o tamaño del Map en cualquier momento.
console.log('--- size. ---'); //* Imprime un mensaje indicando que se mostrará la cantidad de elementos del Map.
mapaConDistintosDatos = new Map([ //* Se crea nuevamente el Map con los mismos pares clave-valor para esta demostración.
    ['nombre', 'Christian'], //* Clave 'nombre' con valor string.
    ['frutas', ['manzana', 'pera', 'sandía']], //* Clave 'frutas' con array como valor.
    ['infoUsuario', { id: 1, rol: 'admin' }], //* Clave 'infoUsuario' con objeto como valor.
    ['saludo', function () { return '¡Hola desde el Map!'; }] //* Clave 'saludo' con función como valor.
]); // *Cierre del Mapa.
console.log(mapaConDistintosDatos.size); //* Muestra el número de elementos que contiene el Map (en este caso 4).

// &Eliminar elemento del mapa (delete())
// &El método delete() elimina del Map el par clave-valor correspondiente a la clave indicada. Devuelve true si el elemento existía y fue eliminado, o false si no se encontró la clave.
console.log('--- delete. ---'); //* Imprime un mensaje indicando que se demostrará el método delete.
mapaConDistintosDatos = new Map([ //* Se crea nuevamente el Map para esta demostración.
    ['nombre', 'Christian'], //* Clave 'nombre'.
    ['frutas', ['manzana', 'pera', 'sandía']], //* Clave 'frutas'.
    ['infoUsuario', { id: 1, rol: 'admin' }], //* Clave 'infoUsuario'.
    ['saludo', function () { return '¡Hola desde el Map!'; }] //* Clave 'saludo'.
]); // *Cierre del Mapa.
console.log(mapaConDistintosDatos.delete('infoUsuario')); //* Elimina la clave 'infoUsuario' y muestra true si fue eliminada correctamente.
console.log(mapaConDistintosDatos); //* Muestra el Map actualizado tras la eliminación del elemento.

// &Verificar existencia de un elemento (has())
// &El método has() verifica si una clave específica existe en el Map. Retorna true si está presente, o false si no. Esto permite comprobar rápidamente la existencia de una clave antes de operar con ella.
console.log('--- has. ---'); //* Imprime un mensaje indicando que se demostrará el método has.
mapaConDistintosDatos = new Map([ //* Se crea nuevamente el Map para esta demostración.
    ['nombre', 'Christian'], //* Clave 'nombre'.
    ['frutas', ['manzana', 'pera', 'sandía']], //* Clave 'frutas'.
    ['infoUsuario', { id: 1, rol: 'admin' }], //* Clave 'infoUsuario'.
    ['saludo', function () { return '¡Hola desde el Map!'; }] //* Clave 'saludo'.
]); // *Cierre del Mapa.
console.log(mapaConDistintosDatos.has('nombre')); //* Verifica si la clave 'nombre' existe en el Map y muestra true o false.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ~TypeOf & InstanceOf
// ~En JavaScript, `typeof` e `instanceof` son operadores fundamentales para identificar tipos de datos y estructuras. `typeof` se utiliza para determinar el tipo primitivo de un valor (por ejemplo, string, number, boolean, etc.), mientras que `instanceof` se usa para verificar si un objeto es una instancia de una clase o constructor determinado. Ambos son herramientas clave para el control de flujo, validaciones y depuración.
console.log('=========== TypeOf & InstanceOf. ==========='); //* Indica el inicio de la sección de TypeOf y InstanceOf.

// Todo - TypeOf
// Todo - El operador `typeof` en JavaScript devuelve una cadena que indica el tipo de un valor. Este operador puede usarse directamente antes del valor (`typeof valor`) o almacenar su resultado en una variable. Es muy útil para identificar tipos de datos primitivos como `string`, `number`, `boolean`, `undefined`, `object`, `function` y `symbol`. Si se aplica a un valor no definido o una operación inválida como `NaN`, devolverá `'number'`, ya que `NaN` es considerado técnicamente un número. Esta herramienta es esencial para validaciones de tipo o para depurar el contenido de variables.
// &TypeOf en valores String
// &Cuando se aplica `typeof` a una cadena de texto (string), devuelve el tipo `'string'`. Esto es útil cuando queremos confirmar que una variable contiene texto y no otro tipo de dato.
console.log('--- TypeOf String. ---'); //* Imprime un mensaje indicando que se demostrará el uso de typeof en string.
x = typeof 'Este es un texto.'; //* Se evalúa el tipo del valor string con typeof y se almacena en una variable.
console.log(x); //* Imprime 'string', indicando el tipo de dato del valor.

// &TypeOf en valores Number
// &Cuando se aplica `typeof` a un número, ya sea entero o decimal, devuelve `'number'`. Es una manera de asegurarse de que se está trabajando con valores numéricos antes de realizar operaciones matemáticas.
console.log('--- TypeOf Number. ---'); //* Imprime un mensaje indicando que se demostrará el uso de typeof en number.
y = typeof 4.52; //* Se evalúa el tipo del valor numérico 4.52 con typeof y se almacena en una variable.
console.log(y); //* Imprime 'number', indicando el tipo de dato del valor.

// &TypeOf en funciones
// &Cuando se aplica `typeof` a una función, devuelve el valor `'function'`. Este comportamiento es particular, ya que en JavaScript las funciones son técnicamente objetos especiales con la capacidad de ser ejecutados. Aunque las funciones son tratadas como objetos de primera clase, el operador `typeof` las reconoce con este tipo específico para diferenciarlas de otros objetos.
console.log('--- TypeOf Funciones. ---'); //* Imprime un mensaje indicando que se demostrará el uso de typeof en funciones.
z = typeof function funcionParaTypeOf() {
} //* Se evalúa el tipo de la función declarada y se almacena el resultado.
console.log(z); //* Imprime 'function', mostrando el tipo específico que `typeof` devuelve para funciones.

// &TypeOf en booleanos
// &Cuando se usa `typeof` sobre un valor booleano (`true` o `false`), devuelve `'boolean'`. Este tipo primitivo se utiliza para representar condiciones verdaderas o falsas y es fundamental en estructuras de control como `if`, `while` o `for`.
console.log('--- TypeOf Boolean. ---'); //* Indica que se demostrará el uso de typeof en booleanos.
y = typeof true; //* Se evalúa el tipo del valor booleano `true` con typeof y se almacena en la variable.
console.log(y); //* Imprime 'boolean', indicando el tipo de dato que almacena la variable.

// Todo - Casos especiales en TypeOf
// Todo - Aunque `typeof` es útil para identificar el tipo de datos, existen ciertos valores que producen resultados que pueden sorprender. Esto se debe a peculiaridades históricas y a cómo JavaScript maneja internamente los tipos. Conocer estos casos evita errores de validación y mejora la precisión en el manejo de datos.
// &TypeOf en valores de error (NaN)
// &Cuando se usa `typeof` sobre `NaN` (Not a Number), devuelve `'number'`, lo cual puede parecer contradictorio. Esto ocurre porque `NaN` es el resultado de una operación numérica inválida, pero sigue siendo tratado como un número en JavaScript. Es importante ser consciente de esto para evitar confusiones en validaciones.
console.log('--- TypeOf Error. ---'); //* Indica que se mostrará el uso de typeof sobre NaN.
z = typeof NaN; //* Evalúa el tipo del valor NaN.
console.log(z); //* Imprime 'number', mostrando cómo JavaScript clasifica NaN como tipo numérico.

// &Variables sin valores
// &Si una variable es declarada pero no inicializada, `typeof` devuelve `'undefined'`. Esto significa que la variable existe pero no tiene un valor asignado.
console.log('--- TypeOf Variable Sin Valor. ---'); //* Demostración del uso de typeof sobre una variable sin inicializar.
let variableSinValor;
let variableSinValorConTypeOf = typeof variableSinValor; //* Se evalúa el tipo de la variable no inicializada.
console.log(variableSinValorConTypeOf); //* Imprime 'undefined'.

// &Variables con valor null
// &Cuando una variable almacena `null`, `typeof` devuelve `'object'`. Esto es un error histórico en JavaScript, pero se mantiene por compatibilidad. A pesar de que `null` representa la ausencia de valor, es tratado como un objeto.
console.log('--- TypeOf Variable Con Valor Null. ---'); //* Muestra el uso de typeof sobre null.
let variableConValorNull = null;
let variableConValorNullConTypeOf = typeof variableConValorNull; //* Se evalúa el tipo de null.
console.log(variableConValorNullConTypeOf); //* Imprime 'object'.

// &Variables con valor Date
// &Un objeto `Date` en JavaScript es un tipo especial de objeto para manejar fechas y horas. Cuando se aplica `typeof` a un objeto `Date`, devuelve `'object'`, ya que internamente se considera un objeto estándar.
console.log('--- TypeOf Variable Con Valor Date. ---'); //* Muestra el uso de typeof sobre un objeto Date.
let variablerConValorDate = new Date();
let variablerConValorDateConTypeOf = typeof variablerConValorDate; //* Evalúa el tipo de un objeto Date.
console.log(variablerConValorDateConTypeOf); //* Imprime 'object'.

// Todo - InstanceOf
// Todo - El operador `instanceof` en JavaScript se utiliza para verificar si un objeto es una instancia de un tipo o clase específica. A diferencia de `typeof`, que devuelve una cadena con el tipo general del valor, `instanceof` permite hacer comprobaciones más precisas para identificar si un valor pertenece a una clase específica, como `Date`, `Array`, `Function`, entre otros. Esto es especialmente útil porque, por ejemplo, `typeof` sobre un objeto `Date` devolverá `'object'`, lo cual es muy genérico. Sin embargo, `instanceof` nos permitirá saber si realmente es un `Date`, devolviendo `true`. Su funcionamiento consiste en evaluar una expresión con la sintaxis:  **valor** + `instanceof` + **Constructor**. Donde **valor** es el objeto o variable que queremos verificar, y **Constructor** es la función constructora o clase con la que queremos compararlo. El resultado será un valor booleano: `true` si el objeto es una instancia de ese tipo, o `false` si no lo es. Es importante señalar que `instanceof` solo funciona para objetos creados con constructores o clases, no para tipos primitivos directamente.
// &Caso falso
// &En este ejemplo, creamos una fecha con `new Date()` y verificamos si es una instancia de `Number`. El resultado será `false` porque, aunque internamente `Date` puede representar valores numéricos, no es un número como tal, sino un objeto especial de tipo fecha.
console.log('--- InstanceOf Falso. ---'); //* Muestra el uso de instanceof con un caso que devolverá falso.
a = new Date(); //* Creamos un objeto de tipo fecha.
console.log(a instanceof Number); //* Evalúa si 'a' es una instancia de Number. Devuelve false.

// &Caso verdadero
// &Aquí verificamos si el mismo objeto `Date` es una instancia de `Date`. El resultado será `true` porque efectivamente fue creado a partir del constructor `Date`.
console.log('--- InstanceOf Verdadero. ---'); //* Muestra el uso de instanceof con un caso que devolverá verdadero.
a = new Date(); //* Creamos un objeto de tipo fecha.
console.log(a instanceof Date); //* Evalúa si 'a' es una instancia de Date. Devuelve true.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ~Conversión de datos
// ~La **conversión de datos** (o *type casting*) en JavaScript es el proceso de transformar un valor de un tipo de dato a otro. Esto es útil cuando necesitamos que un valor cambie su forma de representarse para poder manipularlo correctamente. Por ejemplo, si tenemos un número en formato texto `"23"`, no podemos sumarlo a otro número directamente sin antes convertirlo a tipo numérico. Existen varias formas de realizar conversiones: las más conocidas son el **parseo** (`parseInt()`, `parseFloat()`), pero también existen constructores como `Number()`, `String()` y `Boolean()`, que permiten transformar valores explícitamente. Su sintaxis general es: TipoDestino(valor)` → Donde **TipoDestino** puede ser `Number`, `String` o `Boolean`, y **valor** es lo que queremos convertir.
console.log('=========== Conversión de datos. ==========='); //* Indica el inicio de la sección de conversión de datos.

// Todo - Numéricos (Number())
// Todo - El constructor `Number()` se utiliza para convertir un valor a tipo numérico. Si el valor es una cadena con caracteres válidos de número, se convertirá correctamente. Si no lo es, devolverá `NaN` (Not a Number). También puede convertir fechas a su valor numérico en milisegundos desde el 1 de enero de 1970.
// &String a Number
// &En este caso convertimos un valor de tipo string `"23"` a número. Esto nos permitirá operar con él matemáticamente.
console.log('--- String a Number. ---'); //* Muestra en consola la conversión de string a número.
let variableTipoString = '23'; //* Variable que almacena un valor de tipo string.
let variableQueConvierteStringANumber = Number(variableTipoString); //* Convierte el string a número usando Number().
console.log(variableQueConvierteStringANumber); //* Imprime el valor convertido en formato numérico.

// &Date a Number
// &Aquí convertimos una fecha (`Date`) a su representación numérica en milisegundos desde la fecha de referencia de Unix (1970-01-01).
console.log('--- Date a Number. ---'); //* Muestra en consola la conversión de Date a número.
variableTipoDate = new Date(); //* Creamos una variable con la fecha y hora actual.
let variableQueConvierteDateANumber = Number(variableTipoDate); //* Convierte la fecha a número (milisegundos desde 1970).
console.log(variableQueConvierteDateANumber); //* Imprime el valor numérico resultante.

// Todo - Cadenas de texto (String())
// Todo - El constructor `String()` convierte un valor a su representación textual. Puede transformar números, fechas, booleanos y otros tipos de datos a cadenas.
// &Number a String
// &En este ejemplo convertimos un número a cadena de texto. Esto es útil cuando queremos concatenar números con texto o mostrarlos sin operar matemáticamente.
console.log('--- Number a String. ---'); //* Muestra en consola la conversión de número a string.
variableTipoNumber = 34; //* Variable con un valor numérico.
let variableQueConvierteNumberAString = String(variableTipoNumber); //* Convierte el número a string usando String().
console.log(variableQueConvierteNumberAString); //* Imprime el valor convertido como cadena.

// &Date a String
// &Convierte una fecha (`Date`) a una cadena en formato legible.
console.log('--- Date a String. ---'); //* Muestra en consola la conversión de Date a string.
variableTipoDate = new Date(); //* Creamos una fecha actual.
let variableQueConvierteDateAString = String(variableTipoDate); //* Convierte la fecha a cadena.
console.log(variableQueConvierteDateAString); //* Imprime la fecha como texto.

// &Boolean a String
// &Convierte un valor booleano (`true` o `false`) a cadena de texto.
console.log('--- Boolean a String. ---'); //* Muestra en consola la conversión de boolean a string.
let variableTipoBoolean = true; //* Variable booleana con valor true.
let variableQueConvierteBooleanAString = String(variableTipoBoolean); //* Convierte el boolean a texto.
console.log(variableQueConvierteBooleanAString); //* Imprime el valor convertido como cadena.

// Todo - Booleanos (Boolean())
// Todo - El constructor `Boolean()` convierte un valor a tipo booleano (`true` o `false`). En JavaScript, varios valores se consideran **falsy** (equivalentes a false) como `0`, `NaN`, `""` (cadena vacía), `null`, `undefined` y `false` mismo. Cualquier otro valor se considera **truthy** (equivalente a true). Por ejemplo, al convertir un número, el `0` se convertirá en `false` y cualquier número diferente de cero se convertirá en `true`.
// &Number a Boolean
// &En este ejemplo, el número `4` es convertido a `true` porque es diferente de cero.
console.log('--- Number a Boolean. ---'); //* Muestra en consola la conversión de número a boolean.
variableTipoNumber = 4; //* Variable numérica con valor diferente de cero.
let variableQueConvierteNumberABoolean = Boolean(variableTipoNumber); //* Convierte el número a booleano.
console.log(variableQueConvierteNumberABoolean); //* Imprime el valor convertido (true en este caso).

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ~Regex: Expresiones Regulares
// ~Las **expresiones regulares** (regex) son patrones que sirven para realizar búsquedas, validaciones o reemplazos de texto dentro de cadenas. Se escriben entre barras `/` y dentro va el patrón a buscar, por ejemplo `/camino/`. Por defecto, las regex son **case sensitive** (distinguen entre mayúsculas y minúsculas). Es decir, `/Hola/` no encontrará "hola".  Se usan para dos tareas principales: **buscar coincidencias** dentro de un texto y **verificar si un texto cumple un patrón concreto**. En la práctica, son muy utilizadas en validaciones (por ejemplo, verificar que un correo sea válido), búsquedas avanzadas y reemplazos en editores de texto.
console.log('=========== Regex: Expresiones Regulares. ==========='); //* Imprime en consola un título que indica el inicio de la sección de regex.

// Todo - Tipos de datos en Regex
// Todo - Las **expresiones regulares (Regex)** son patrones que permiten buscar, validar o extraer coincidencias dentro de cadenas de texto. En JavaScript se representan entre diagonales (`/.../`) o usando el constructor `new RegExp()`. Los Regex pueden trabajar con diferentes tipos de datos, principalmente **cadenas de texto** y patrones numéricos, aunque también combinan símbolos, rangos y modificadores. Su uso es fundamental para validar entradas (como correos, contraseñas o números), así como para filtrar o manipular datos de texto.
// &Cadena de texto
// &Cuando se utiliza un regex con cadenas de texto, el patrón buscará coincidencias exactas dentro del string. En este caso, el patrón `/historia/` busca la palabra "historia" en la cadena. El método `.exec()` devuelve un objeto con la coincidencia encontrada o `null` si no existe. Este uso es común cuando se necesita identificar palabras clave en párrafos o frases.
console.log('--- Regex para cadenas de texto. ---'); //* Muestra en consola el tipo de regex aplicado a cadenas de texto.
let regexConCadenaDeTexto = /historia/; //* Se crea una expresión regular que busca la palabra "historia".
let variableParaUsoRegexTexto = 'En una historia es importante la narrativa.'; //* Se declara una cadena donde se evaluará la búsqueda.
console.log(regexConCadenaDeTexto.exec(variableParaUsoRegexTexto)); //* Imprime el resultado de aplicar exec(), mostrando la coincidencia encontrada.

// &Numérico
// &En expresiones regulares, los corchetes `[ ]` se usan para definir rangos de caracteres aceptados. En este ejemplo, `/[0-9]/` indica que se busca cualquier número del 0 al 9 dentro del texto. El método `.exec()` devolverá el primer número encontrado. Este tipo de regex es útil cuando se necesita validar números dentro de cadenas, como edades, precios o cantidades.
console.log('--- Regex para números. ---'); //* Muestra en consola el tipo de regex aplicado a números.
let regexConNumeros = /[0-9]/; //* Se define una expresión regular que busca cualquier dígito del 0 al 9.
let variableParaUsoRegexNumeros = 'En la vida existen 5 cosas indispensables.'; //* Se declara una cadena con un número incrustado en el texto.
console.log(regexConNumeros.exec(variableParaUsoRegexNumeros)); //* Imprime la primera coincidencia encontrada: '5'.

// Todo - Función de regex para búsqueda y comprobación
// Todo - Existen métodos en JavaScript que trabajan con regex, siendo los más comunes `.search()` y `.test()`. `.search()` devuelve la **posición** de la coincidencia (o -1 si no existe). `.test()` devuelve un **booleano** (true si el patrón coincide, false en caso contrario).
// &Regex para búsqueda
// &En este ejemplo, se usa `.search()` para encontrar la palabra "Extendido" en un texto. Si la palabra se encuentra, devuelve la posición inicial de la coincidencia; si no existe, devuelve -1.
console.log('--- Regex para busqueda. ---'); //* Muestra en consola el uso de regex para busqueda.
let textoEnVariable = 'Esta es una variable con un texto Extendido.'; //* Se define una variable que contiene un texto.
console.log(textoEnVariable.search(/Extendido/)); //* Busca el patrón "Extendido" en el texto y muestra la posición donde empieza.

// &Regex para comprobación
// &Aquí se usa `.test()` para verificar si un patrón existe dentro de un texto. En este caso, el patrón es la palabra "Extendido".
console.log('--- Regex para comprobacion. ---'); //* Muestra en consola el uso de regex para comprobacion.
textoEnVariable = 'Esta es una variable con un texto Extendido.'; //* Se redefine la variable con el mismo texto.
let regexParaComprobacion = /Extendido/; //* Se crea una expresión regular que busca la palabra "Extendido".
console.log(regexParaComprobacion.test(textoEnVariable)); //* Devuelve true porque "Extendido" sí aparece en el texto.

// Todo - Modificadores
// Todo - Los modificadores cambian el comportamiento de las expresiones regulares. Se colocan después de la barra final `/` y permiten cosas como ignorar mayúsculas/minúsculas, buscar en todo el texto o trabajar en múltiples líneas.
// &Ignorar case sensitive (i)
// &El modificador `i` indica que la búsqueda no distingue entre mayúsculas y minúsculas.
console.log('--- Ignorar case sensitive. ---'); //* Muestra en consola el uso de regex sin case sensitive.
textoEnVariable = 'Un Texto Con MAYÚSCULAS y minúsculas.'; //* Se define un texto con diferentes capitalizaciones.
console.log(textoEnVariable.search(/texto/i)); //* Encuentra la palabra "Texto" aunque en el patrón se escribió en minúsculas.

// &Buscar en todo el texto (g)
// &El modificador `g` indica búsqueda global: encuentra **todas** las coincidencias en lugar de solo la primera. Se suele usar junto con `.match()`, que devuelve un arreglo con todas las coincidencias encontradas.
console.log('--- Busqueda en todo el texto. ---'); //* Muestra en consola el uso de regex con busqueda en todo el texto.
textoEnVariable = 'Repite, repite y REPITE varias veces.'; //* Se define un texto con la palabra repetida varias veces en diferentes formas.
console.log(textoEnVariable.match(/repite/gi)); //* Busca todas las ocurrencias de "repite" (ignorando mayúsculas) y devuelve un array con ["Repite","repite","REPITE"].

// &Búsqueda multilínea (m)
// &El modificador `m` permite que los patrones funcionen en **múltiples líneas**. Por ejemplo, al usar `^`, que normalmente significa "inicio del texto", con `m` también se reconoce el inicio de cada línea.
console.log('--- Busqueda multilinea. ---'); //* Muestra en consola el uso de regex con Busqueda multilinea.
textoEnVariable = `Primera línea
Segunda línea
Tercera línea`; //* Se define un texto con saltos de línea.
console.log(textoEnVariable.match(/^Segunda/m)); //* Busca la palabra "Segunda" al inicio de una línea y la encuentra gracias al modificador `m`.

// Todo - Ejemplos adicionales de Regex
// Todo - Aquí se muestran ejemplos prácticos que demuestran cómo se usan regex en situaciones reales, como validación de correos, extracción de números o validación de caracteres.
console.log('--- Ejemeplos de Regex. ---'); //* Muestra en consola el uso de regex con ejemplos.

// &Validación de correo electrónico simple
// &Este patrón revisa que el texto tenga la estructura "algo@algo.dominio".  
let regexCorreo = /\w+@\w+\.\w+/; //* Se define una regex básica para validar correos.
console.log(regexCorreo.test("usuario@dominio.com")); //* Devuelve true porque cumple con el formato de correo.
console.log(regexCorreo.test("textoInvalido.com")); //* Devuelve false porque no contiene el carácter @ ni un dominio válido.

// &Extracción de números de un texto
// &El patrón `\d+` significa "uno o más dígitos". Con el modificador `g` buscamos todas las coincidencias.  
textoEnVariable = "El precio es 1200 pesos y la promo cuesta 300."; //* Texto que contiene números mezclados con palabras.
console.log(textoEnVariable.match(/\d+/g)); //* Devuelve ["1200", "300"], que son los números encontrados en el texto.

// &Validación de solo letras
// &El patrón `/^[a-zA-Z]+$/` revisa que el texto contenga **únicamente letras** (de la A a la Z, mayúsculas o minúsculas).  
let regexSoloLetras = /^[a-zA-Z]+$/; //* Regex que acepta solo letras.
console.log(regexSoloLetras.test("HolaMundo")); //* Devuelve true porque contiene solo letras.
console.log(regexSoloLetras.test("Hola123")); //* Devuelve false porque contiene números.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ~Manejo de errores
// ~El manejo de errores en JavaScript es una característica que permite controlar situaciones inesperadas que pueden ocurrir durante la ejecución del programa. En lugar de que el programa falle abruptamente, se pueden capturar y tratar los errores de manera más ordenada y segura. Para esto existen las estructuras `try`, `catch`, `finally`, y la instrucción `throw`. Su función es brindar un flujo controlado de lo que ocurre si un bloque de código genera errores, si no ocurre ningún error, y asegurar que cierto código se ejecute siempre sin importar lo anterior. Ademas cabe mencionar que el uso de estos tres siempre tienen que ser sincronaz, jamas usar funciones o cosas como los SetTimeout.
console.log('=========== Manejo de errores. ==========='); //* Imprime en consola un título que indica la sección de manejo de errores.

// Todo - Estructura
// Todo - La estructura básica del manejo de errores está conformada por tres bloques principales: `try`, `catch` y `finally`. El bloque `try{}` contiene el código que queremos ejecutar y que potencialmente podría fallar. Si ocurre un error dentro de `try`, se interrumpe su ejecución y el control pasa al bloque `catch{}`, que se encarga de manejar el error. Finalmente, el bloque `finally{}` se ejecuta siempre, sin importar si hubo error o no, y se utiliza normalmente para limpiar recursos o cerrar procesos abiertos.
try { //* Se abre el bloque try: aquí va el código que podría fallar.
    // ...código propenso a fallar...
} //* Se cierra el bloque try.
catch { //* Se abre el bloque catch: se ejecuta sólo si ocurre un error dentro de try.
    // ...manejo del error...
} //* Se cierra el bloque catch.
finally { //* Se abre el bloque finally: este bloque se ejecuta siempre (haya o no error).
    // ...tareas de limpieza / cierre de recursos...
} //* Se cierra el bloque finally.

// &Intentar hacer algo (try{})
// &El bloque `try{}` se utiliza para envolver el código que queremos ejecutar con la posibilidad de que ocurra un error. Por ejemplo, una llamada a un servidor o backend mediante una API. Si todo dentro de `try` se ejecuta correctamente, el flujo continúa normal y no se activa el `catch`. Sin embargo, si ocurre un fallo dentro de `try`, se detiene en ese punto y pasa directamente a `catch`. Si existe un bloque `finally`, este se ejecuta siempre, tanto si hubo error como si no.
try { //* Se abre try para ejecutar una operación que podría fallar.
    console.log('--- Try. ---'); //* Muestra en consola el uso de try.
    console.log('Llamando al backend.'); //* Simula la ejecución de código que intenta conectarse a un backend.
} //* Se cierra el bloque try.

// &Capturar (catch{})
// &El bloque `catch{}` se ejecuta únicamente si ocurre un error dentro de `try`. Dentro de sus llaves se puede escribir cualquier código que maneje el error, como mostrar un mensaje al usuario, volver a intentar la operación o registrar el error en un log. Además, `catch` puede recibir un parámetro (comúnmente llamado `error`) que contiene información sobre lo que falló. Este parámetro es generado automáticamente si el error ocurre de forma natural, o puede ser lanzado manualmente usando `throw`.
catch { //* Se abre catch: aquí reaccionamos si algo falló en el try.
    console.log('--- Catch. ---'); //* Muestra en consola el uso de catch.
    console.log('Algo salió mal al llamar al backend.'); //* Mensaje informativo de error.
} //* Se cierra el bloque catch.

// &Finalmente (finally{})
// &El bloque `finally{}` se ejecuta siempre, sin importar si hubo error o no en `try`. Es útil para asegurar que se realicen acciones necesarias, como cerrar conexiones, liberar memoria o mostrar un mensaje final. Es importante recalcar que `finally` nunca se salta: siempre se ejecutará tras un `try` y su respectivo `catch`.
finally { //* Se abre finally: este bloque se ejecuta siempre.
    console.log('--- Finally. ---'); //* Muestra en consola el uso de finally.
    console.log('Se ejecuta siempre.'); //* Confirmación de ejecución incondicional.
} //* Se cierra el bloque finally.

// Todo - Forzar un fallo en try (throw())
// Todo - En ocasiones, aunque el código dentro de `try` funcione bien, es necesario forzar un error manualmente para indicar una condición especial, por ejemplo, cuando el backend devuelve que un usuario no está autorizado. Para esto se utiliza la instrucción `throw`, que interrumpe el flujo normal de `try` y envía el error hacia `catch`. Al usar `throw`, el flujo de `try` se detiene justo donde aparece y no ejecutará nada después de él. Además, el mensaje o dato pasado en `throw` se recibe en `catch` dentro de su parámetro `error`, lo que permite trabajar con la información del fallo.
console.log('--- Throw. ---'); //* Indica que se demostrará el uso de throw.
try { //* Se abre el bloque try para simular una operación.
    console.log('Llamando al backend.'); //* Simula el inicio de una llamada al backend.
    throw('Este usuario no fue autorizado.'); //* Lanza un error manualmente con un mensaje personalizado.
    console.log('Llamamiento del backend realizado.'); //* Esta línea no se ejecutará por el throw anterior.
} catch (error) { //* Se abre catch y se recibe el error lanzado por throw en el parámetro `error`.
    console.log('Hubo un error al llamar al backend.'); //* Informa que ocurrió un error durante el try.
    console.log(error); //* Muestra el mensaje del error: "Este usuario no fue autorizado."
} finally { //* Se abre finally: se ejecuta sin importar el resultado anterior.
    console.log('Ejecutando siempre..'); //* Mensaje que prueba la ejecución incondicional de finally.
} //* Se cierra el bloque finally.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ~Sincronia en JavaScript
// ~La sincronia en JavaScript es la capacidad que tiene este lenguaje de realizar tareas sin bloquear la ejecucion del programa principal, por lo que en lugar de esperar a que se complete la primera tarea para seguir con la siguiente JavaScript permite hacer muchas tareas en simultaneo e ir manejando a medida que este lista la informacion de las tareas anteriores. Si bien JavaScrip esta basado en un lenguaje de un solo hilo que se ejecuta una tarea a la vez a traves de las funcionaes asincronicaz y los callbacks javascrip es capas de realizar multiples tareas e ir manejando los resultados en medida que esten disponibles 
// Todo - Ejecucion con retraso (SetTimeout)
// Todo - El 'SetTimeout' es una funcion que permite ejecutar codigo despues de cierto tiempo, un ejemplo de esto es que tenemos un codigo y Javascript ejecutara todo, pero si en el settimeout se especifica este se podra ejecutar por ejemplo 10 minutos despues de que javascript lo ejecuto, es decir se ejecutara el settimeout pero lo de dentro esperara a que el tiempo establecido finalice, normalmente settimeout es una funcion de flecha, y su estructura es setTimeout(() => {}, tiempoAEstablecer);, donde en tiempo a establecer tendremos que poner un numero los cuales esta funcion los toma como milisegundos, por lo que 1000 (mil) equivale a un segundo. Ademas cabe mencionar que por ende al ejecutarse todo lo demas primero y esto despues, esto se mostrara hasta abajo en consola o no se ponle algo
setTimeout(() => {
    console.warn('=========== Sincronia en JavaScript. ==========='); //* Imprime en consola un título que indica la sección de sincronia en JavaScript.
    console.warn('--- SetTimeout. ---'); //* Indica que se demostrará el uso de SetTimeout.
    console.warn('Este mensaje se mostrara dentro de 5 segundos que se ejecute el SetTimeout')
}, 1000);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ~Callbacks (funciones)
// ~En JavaScript, las **callbacks** son funciones que se pasan como argumento a otra función para que esta última la ejecute en un momento determinado. Esto permite que una función tenga un comportamiento más flexible y reutilizable, ya que no define directamente lo que hará con un resultado, sino que delega esa acción a otra función proporcionada externamente. Son muy comunes en programación asíncrona, como llamadas a servidores o lectura de archivos, porque permiten que el programa indique qué hacer una vez que cierta operación termine.
console.log('=========== Callbacks. ==========='); //* Imprime en consola un título que indica la sección de callbacks.

// Todo - Función normal
// Todo - Esta es una función común llamada `funcionNormal` que recibe un parámetro y lo imprime en consola. Se define con una **función de flecha** y dentro de su cuerpo utiliza `console.log` para mostrar lo que recibe. Por sí sola no tiene nada de especial, pero su importancia surge cuando es utilizada como **callback** dentro de otra función.
let funcionNormal = (parametroARecibir) => { // *Apertura de funcion sin callback
    console.log(parametroARecibir); //* Muestra en consola el valor que se le pasa como argumento.
} // *Cierre de funcion normal sin callback.

// Todo - Función con callback
// Todo - Aquí se define la función `funcionConCallback`, que recibe tres parámetros: dos números (`numeroARecibir1` y `numeroARecibir2`) y una función (`parametroCallback`). Dentro de esta función se realiza una suma con los dos números recibidos. En lugar de decidir cómo usar esa suma dentro de sí misma, delega esa tarea a la función callback pasada como parámetro. Esto se logra llamando a `parametroCallback(suma)`, lo que significa que la suma se envía a la función callback para que ella decida qué hacer con el resultado. Este patrón hace que `funcionConCallback` sea más flexible y reutilizable.
let funcionConCallback = (numeroARecibir1, numeroARecibir2, parametroCallback) => {
    let suma = numeroARecibir1 + numeroARecibir2; //* Suma los dos números recibidos.
    parametroCallback(suma); //* Llama a la función callback, pasándole como argumento el resultado de la suma.
    funcionNormal(suma)
} // *Cierre de funcion con callback

// Todo - Uso de la función con callback
// Todo - Aquí se llama a `funcionConCallback` pasando tres argumentos: el número `5`, el número `2` y la función `funcionNormal`. Esto significa que `funcionConCallback` sumará `5 + 2` y luego usará `funcionNormal` como callback para manejar el resultado. En este caso, `funcionNormal` simplemente imprimirá en consola el número `7`. Lo importante aquí es que la función que recibe el resultado es decidida desde fuera, no está escrita directamente dentro de `funcionConCallback`.
funcionConCallback(5, 2, funcionNormal); //* Resultado esperado: imprime "7" en consola porque funcionNormal recibe la suma y la muestra.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ~Promesas
// ~Las **promesas** en JavaScript son objetos especiales que permiten manejar operaciones **asíncronas**, es decir, aquellas que no se ejecutan de manera inmediata y pueden tardar cierto tiempo (como pedir datos a un servidor o leer un archivo). Una promesa puede tener dos posibles resultados: **cumplida** (resuelta con éxito) o **rechazada** (ocurrió un error). Gracias a ellas podemos estructurar nuestro código para que espere el resultado de estas operaciones sin bloquear la ejecución del resto del programa. Su uso más común es en la **consumición de APIs** o llamadas a un **backend**, ya que estas tardan en devolver datos y necesitamos manejar correctamente tanto el éxito como los posibles fallos.
// Todo - Estructura de las promesas
// Todo - Una promesa se crea normalmente asignándola a una variable con la palabra reservada `new Promise()`. Este constructor recibe como parámetro una **función ejecutora**, la cual a su vez recibe dos argumentos: `resolve` (también lo podemos llamar `response`) y `reject`. El argumento `resolve` se usa cuando la operación termina de manera satisfactoria, y lo que se le pase será el resultado de la promesa. El argumento `reject` se utiliza cuando ocurre un error, y lo que se le pase será la razón del fallo. Es importante aclarar que una promesa solo puede devolver un estado, por lo que una vez que se llama a `resolve` o `reject`, la promesa queda definida como "cumplida" o "rechazada".
let estructuraPromese = new Promise((resolve, reject) => {
    resolve('Resolve devuelve en caso de que todo se ejecute bien.'); //* Llama a resolve, indicando éxito en la operación.
    reject('Reject devuelve en caso de que algo salga mal.'); //* Llama a reject, indicando que ocurrió un error.
})

// Todo - Manejo de errores con promesas (then/catch/finally)
// Todo - Las promesas en JavaScript manejan operaciones asincrónicas, por lo que no podemos usar `try/catch` directamente sobre ellas. En su lugar, se utiliza `.then()` para manejar el resultado exitoso de la promesa, `.catch()` para capturar errores que ocurran dentro de la promesa y `.finally()` para ejecutar código que debe correr siempre, independientemente de si la promesa se resolvió correctamente o falló. La estructura sería: promesa.then(respuesta => { ... }).catch(error => { ... }).finally(() => { ... }). Esto permite un flujo controlado en operaciones que ocurren en el futuro (asincronías), como llamadas a servidores, APIs o lectura de archivos, garantizando que los errores se manejen y ciertas acciones siempre se ejecuten.

let promesaEjemplo = new Promise((resolve, reject) => { //* Se crea una promesa nueva que ejecutará un código asincrónico.
    console.warn('Llamando al backend.'); //* Simula el inicio de una llamada al backend.
    let usuarioAutorizado = true; //* Variable que indica si el usuario está autorizado.
    if(usuarioAutorizado) { //* Se evalúa la condición: si el usuario está autorizado.
        resolve('Usuario autorizado.'); //* Resuelve la promesa correctamente con un mensaje de éxito.
    } else { //* Caso contrario: si el usuario no está autorizado.
        reject('Este usuario no fue autorizado.'); //* Rechaza la promesa con un mensaje de error.
    } // *Cierre del else.
}); //* Fin de la promesa.

// &then()
// &Se ejecuta cuando la promesa se resuelve correctamente. Recibe como parámetro el valor devuelto por resolve.
promesaEjemplo.then(respuesta => { //* Se abre el bloque then para manejar la respuesta exitosa de la promesa.
     console.warn('=========== Promesas. ==========='); //* Imprime en consola un título que indica la sección de promesas.
    console.warn('--- Promesa con then, catch y finally. ---'); //* Indica que se demostrará el manejo de errores en promesas.
    console.warn('--- Then. ---'); //* Indica que estamos dentro del then.
    console.warn(respuesta); //* Muestra el mensaje devuelto por resolve: "Usuario autorizado."
}); //* Se cierra el bloque then.

// &catch()
// &Se ejecuta únicamente si la promesa es rechazada. Recibe como parámetro el error enviado mediante reject.
promesaEjemplo.catch(error => { //* Se abre el bloque catch para manejar errores de la promesa.
    console.warn('--- Catch. ---'); //* Indica que estamos dentro del catch.
    console.error('Hubo un error al llamar al backend.'); //* Mensaje informativo indicando que ocurrió un error.
    console.error(error); //* Muestra el mensaje devuelto por reject: "Este usuario no fue autorizado."
}); //* Se cierra el bloque catch.

// &finally()
// &Se ejecuta siempre, sin importar si la promesa fue resuelta o rechazada. Ideal para cerrar conexiones, liberar recursos o mostrar un mensaje final.
promesaEjemplo.finally(() => { //* Se abre finally: se ejecuta siempre al terminar la promesa.
    console.warn('--- Finally. ---'); //* Indica que estamos dentro del finally.
    console.warn('Se ejecuta siempre, haya habido éxito o error.'); //* Mensaje que se ejecuta incondicionalmente.
}); //* Se cierra el bloque finally.

// Todo - Uso de promesas con los manejos de errores (then, catch y finally)
// Todo - Para consumir una promesa, es decir, para obtener su resultado o manejar sus errores, se usan tres métodos principales:
// &then(): se ejecuta cuando la promesa fue resuelta correctamente (resolve). Recibe el valor enviado desde resolve.
// &catch()**: se ejecuta si la promesa fue rechazada (reject). Recibe el error o la razón del fallo.
// &finally()**: se ejecuta siempre, sin importar si la promesa fue resuelta o rechazada. Se usa para ejecutar código de limpieza o cierre.
// Todo - Esto es parecido al manejo de errores con try-catch-finally, pero aplicado en un contexto de promesas asíncronas.
let promesa = new Promise((resolve, reject) => { // *Se declara una promesa de nombre 'promesa'.
    resolve('Salió todo bien.'); //* Devuelve un mensaje de éxito.
    reject('Algo falló.'); //* Devuelve un mensaje de error.
}) // *Cierre de la promesa.

// &Consumir la promesa con then, catch y finally
// &Aquí vemos cómo se manejan los diferentes resultados. En este ejemplo, al usar resolve, se ejecutará then y se mostrará el mensaje de éxito. Si en lugar de resolve se ejecutara reject, se saltaría al catch mostrando el error. El finally, de estar presente, se ejecutaría siempre al final sin importar el resultado.
promesa.then(res => { //* Se ejecuta si la promesa fue resuelta correctamente.
    console.warn('--- Uso de promesas con los manejos de errores. ---'); //* Indica ejemplo de uso de promesas con manejos errores.
    console.warn(res); //* Muestra el mensaje de éxito en consola.
}) // *Cierre del menejador de errores then.
.catch(error => { //* Se ejecuta si la promesa fue rechazada.
    console.error(error); //* Muestra el error en consola.
}) // *Cierre del menejador de errores error.
.finally(() => { //* Se ejecuta siempre, independientemente de resolve o reject.
    console.warn('Finalización de la promesa.'); //* Indica que el flujo terminó.
}) // *Cierre del menejador de errores finally.

// Todo - Resolve y Reject
// Todo - Resolve y Reject son dos funciones internas que se reciben como parámetros en el constructor de una Promesa. **Resolve** se usa para devolver un resultado exitoso cuando la promesa se cumple correctamente, mientras que **Reject** devuelve un error o motivo de fallo si algo salió mal. Lo importante es que estas funciones no se limitan a devolver cadenas de texto o números, sino que también pueden devolver objetos, arreglos, funciones, entre otros tipos de datos. Esto hace que las promesas sean muy flexibles para modelar distintos escenarios en JavaScript.
// &Objetos
// &En este ejemplo, la promesa devuelve un objeto a través de `resolve`. Esto demuestra que las promesas no solo están limitadas a valores primitivos, sino que también pueden resolver estructuras más complejas como objetos.
let promesaDevuleveObjeto = new Promise((resolve, reject) => { //* Se crea una nueva promesa con dos parámetros: resolve y reject.
    let objetoADevolver = { //* Se declara un objeto que será devuelto como resultado exitoso de la promesa.
        nombre: 'Christian', //* Propiedad del objeto con un nombre en formato string.
        edad: 22 //* Propiedad del objeto con un valor numérico.
    }; //* Fin del objeto.
    resolve(objetoADevolver); //* Se llama a resolve pasando el objeto definido, cumpliendo así la promesa.
    reject('Error en la promesa.'); //* Aunque esté definido, esta línea no se ejecutará porque resolve ya se llamó antes.
}); //* Fin de la promesa.

promesaDevuleveObjeto.then(res => { //* Se maneja la promesa con .then, que recibe el resultado de resolve.}
    console.warn('--- Objetos en resolve y reject. ---'); //* Indica ejemplo de paso de objetos en resolve y reject.
    console.warn(res); //* Imprime en consola el objeto devuelto por la promesa.
}).catch(error => { //* Se captura un posible error en caso de que se hubiera ejecutado reject.
    console.error(error); //* Imprime el mensaje de error si la promesa es rechazada.
}); //* Fin del manejo de la promesa.

// &Función
// &En este caso, la promesa devuelve una función. Esto refuerza la idea de que las promesas pueden resolver cualquier tipo de dato, incluyendo funciones que luego se pueden ejecutar o analizar.
let promesaDevuelveFuncion = new Promise((resolve, reject) => { //* Se crea una nueva promesa que retornará una función.
    let funcionDevolver = x => 'Hola mundo'; //* Se declara una función flecha que devuelve el texto 'Hola mundo'.
    resolve(funcionDevolver); //* La promesa se cumple exitosamente devolviendo la función declarada.
    reject('Error en la promesa'); //* Esta línea no se ejecutará ya que resolve fue llamado antes.
}); //* Fin de la promesa.

promesaDevuelveFuncion.then(res => { //* Se maneja la promesa con .then, recibiendo la función como resultado.
    console.warn('--- Funciones en resolve y reject. ---'); //* Indica ejemplo de paso de funciones en resolve y reject.
    let tipoRespuesta = typeof res; //* Se evalúa el tipo de dato devuelto, que debería ser 'function'.
    console.warn(tipoRespuesta); //* Imprime 'function' en la consola.
    console.warn(res); //* Imprime el contenido de la función devuelta.
}).catch((error) => { //* En caso de fallo, se captura el error con .catch.
    console.error(error); //* Imprime el error en consola si se hubiera rechazado la promesa.
}); //* Fin del manejo de la promesa.

// Todo - Las promesas son asincronas
// Todo - Las promesas en JavaScript son asincrónicas, lo que significa que permiten ejecutar código sin bloquear el flujo principal del programa. Es importante mencionar que no se puede usar `setTimeout` directamente en `then`, `catch` o `finally` porque estos manejadores son síncronos. Sin embargo, sí se puede usar `setTimeout` dentro del cuerpo de la promesa. Esto permite retrasar la ejecución de `resolve` o `reject`, logrando que la promesa devuelva sus valores después de cierto tiempo definido.
let promesaConAsincronia = new Promise((resolve, reject) => { //* Se crea una promesa con resolve y reject como parámetros.
    setTimeout(() => { //* Se usa setTimeout para simular un retraso en la ejecución de la promesa.
        resolve('Este resolve se devolverá a .then después de 3 segundos, ya que dicho resolve se encuentra dentro de un setTimeout.'); //* Resolve devuelve este mensaje tras 3 segundos.
        reject('Este reject se devolverá a .catch después de 3 segundos, ya que dicho reject se encuentra dentro de un setTimeout.'); //* Reject devolvería este mensaje tras 3 segundos, pero no se ejecutará porque resolve ya fue llamado primero.
    }, 3000); //* Tiempo de retraso definido en 3 segundos.
}); //* Fin de la promesa.

promesaConAsincronia.then((res) => { //* Se maneja la respuesta exitosa de la promesa con .then.
    console.warn('--- Promesas asincronas. ---'); //* Indica ejemplo de que las promesas son asincronas.
    console.warn(res); //* Imprime el valor devuelto por resolve en la consola después de 3 segundos.
}).catch((error) => { //* Se maneja un posible error con .catch.
    console.error(error); //* Imprime el mensaje de error en consola si reject fuera llamado.
}); //* Fin del manejo de la promesa.

// Todo - Función de reject
// Todo - La función `reject` se usa para indicar que la promesa no se ejecutó correctamente. Al llamarse, hace que la promesa sea rechazada y su contenido es pasado directamente al bloque `catch`. Esto es útil para manejar errores de forma controlada y separar los flujos exitosos (resolve) de los fallidos (reject).
let promesaConReject = new Promise((resolve, reject) => { //* Se crea una nueva promesa con resolve y reject.
    reject('Hubo un error en la promesa, por lo que reject se devuelve, haciendo que catch lea su contenido.'); //* Se llama directamente a reject, indicando que la promesa falló.
}); //* Fin de la promesa.

promesaConReject.then((res) => { //* Se define un .then para manejar un posible resultado exitoso.
    console.warn(res); //* Imprimiría el valor si resolve hubiera sido ejecutado (no ocurre en este caso).
}).catch((error) => { //* Se captura el error con .catch porque reject fue ejecutado.
    console.warn('--- Funcion de reject. ---'); //* Indica ejemplo de funcion de reject.
    console.error(error); //* Imprime el mensaje de error en consola.
}); //* Fin del manejo de la promesa.

// Todo - Declaración de varias promesas dentro de then, catch y finally
// Todo - En JavaScript es posible encadenar múltiples promesas dentro de los manejadores `.then`, `.catch` y `.finally`. Esto permite que cada promesa se ejecute secuencialmente, esperando que la anterior se resuelva o se rechace. La estructura consiste en llamar a una promesa dentro del `.then` de otra, asegurando que la ejecución respete el orden deseado y permitiendo manejar errores individualmente con `.catch` en cada nivel. OJO: Cabe mencionar que esta no es la mejor manera pero es bueno recordarla ya que este tipo de estructura es llamada la piramide de la perdicion por su complejidad y desorden.
let promesa1 = new Promise((response, reject) => { //* Se crea la primera promesa con resolve y reject.
    setTimeout(() => { //* Se usa setTimeout para simular asincronía en la promesa 1.
        response('Este es el response de la promesa numero 1.'); //* Se llama a response para devolver el valor exitoso.
        reject('Este es el reject de la promesa numero 1.'); //* Se define reject, pero no se ejecutará porque response ya fue llamado.
    }, 4000); //* Tiempo de retraso de 4 segundos.
}); //* Fin de la promesa 1.

let promesa2 = new Promise((response, reject) => { //* Se crea la segunda promesa.
    response('Este es el response de la promesa numero 2.'); //* Se resuelve inmediatamente con un mensaje.
    reject('Este es el reject de la promesa numero 2.'); //* Se define reject pero no se ejecutará.
}); //* Fin de la promesa 2.

let promesa3 = new Promise((response, reject) => { //* Se crea la tercera promesa.
    response('Este es el response de la promesa numero 3.'); //* Se resuelve inmediatamente con un mensaje.
    reject('Este es el reject de la promesa numero 3.'); //* Se define reject pero no se ejecutará.
}); //* Fin de la promesa 3.

promesa1.then((res) => { //* Se maneja la resolución de la promesa 1.
    console.warn('--- Declaracion de varias promesas dentro de then, catch y finally. ---'); //* Indica ejemplo de declaracion de varias promesas dentro de then, catch y finally.
    console.warn(res); //* Se imprime el resultado de la promesa 1.
    promesa2.then((res) => { //* Se maneja la resolución de la promesa 2 dentro del .then de promesa1.
        console.warn(res); //* Se imprime el resultado de la promesa 2.
        promesa3.then((res) => { //* Se maneja la resolución de la promesa 3 dentro del .then de promesa2.
            console.warn(res); //* Se imprime el resultado de la promesa 3.
        }).catch((error) => { //* Se captura cualquier error que ocurra en la promesa 3.
            console.error(error); //* Se imprime el error de la promesa 3 en consola.
        }); //* Fin del manejo de promesa 3.
    }).catch((error) => { //* Se captura cualquier error que ocurra en la promesa 2.
        console.error(error); //* Se imprime el error de la promesa 2 en consola.
    }); //* Fin del manejo de promesa 2.
}).catch((error) => { //* Se captura cualquier error que ocurra en la promesa 1.
    console.warn(error); //* Se imprime el error de la promesa 1 en consola.
}); //* Fin del manejo de promesa 1.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ~Async & Await
// ~ Async y await son herramientas que permiten trabajar con promesas de una forma más clara y ordenada. Su principal utilidad es evitar la llamada "pirámide de la perdición", que ocurre al anidar múltiples promesas con .then, .catch y .finally. Con estas palabras reservadas se logra un código más legible y estructurado. La palabra clave **async** se usa en una función para indicar que esta funcionará de forma asíncrona y siempre devolverá una promesa. Mientras que la palabra clave **await** se usa dentro de funciones async para pausar la ejecución hasta que la promesa se cumpla (resolve) o falle (reject).
// Todo - Estructura y uso de async
// Todo - La palabra clave `async` se coloca antes de la declaración de una función. Esto hace que dicha función siempre devuelva una promesa, incluso si en su interior no hay ninguna. Gracias a `async`, podemos usar `await` dentro de la función para trabajar de manera secuencial con promesas.
async function funcionConAsync() { //* Declaración de una función asíncrona usando async.
    console.warn('=========== Async & Await. ==========='); //* Imprime en consola un título que indica la sección de promesas.
    // *Contenido de la funcion.
} //* Fin de la función asíncrona.

setTimeout(() => { //* Se declara un setTimeOut para demostrar que se puede usar como cualquier funcion normal.
    funcionConAsync(); // *Se llama la funcion con async al igual que una funcion ordinaria.
}, 5000); // *Cierre de setTimeout.

// Todo - Estructura y uso de await
// Todo - La palabra clave `await` se usa únicamente dentro de funciones declaradas con `async`. Su propósito es pausar la ejecución hasta que la promesa que acompaña sea resuelta o rechazada. Si la promesa se resuelve, se obtiene su valor; si se rechaza, se puede capturar el error con try/catch.
async function funcionConAwait(){ //* Se declara una función asíncrona con la palabra clave async, lo que permite el uso de await en su interior.
    let variableQueAlmacenaElAwaitDePromesa = await nombrePromesa; //* `await` espera a que `nombrePromesa` se resuelva. El valor resuelto se almacena en la variable.
} //* Fin de la función asíncrona.

// Todo - Async & Await con promesas asincronas
// Todo - A diferencia de usar solo `.then()`, `.catch()` y `.finally()`, `async/await` permite manejar promesas de forma más ordenada y legible. No cambia el funcionamiento de las promesas, ni las hace más rápidas; simplemente permite escribir código que se vea secuencial y limpio, evitando la "pirámide de callbacks" o encadenamiento excesivo de `.then()`. Además, usando `Promise.all()` con `async/await` se pueden ejecutar varias promesas al mismo tiempo y esperar a que todas terminen, manteniendo la estructura clara.
//* Primera promesa asincrónica.
let promesaAsincrona1 = new Promise((resolve, reject) => { //* Se crea una promesa con resolve y reject.
    setTimeout(() => { //* Se retrasa la ejecución con un temporizador de 5 segundos.
        console.warn('--- Async & Await con promesas asyncronaz. ---'); //* Indica ejemplo de Async & Await con promesas asyncronaz.
        resolve('Esta es la promesa #1, la cual se ejecutó correctamente y el resultado se devolverá dentro de 5 segundos.'); //* Se resuelve la promesa devolviendo este mensaje.
        reject('Esta es la promesa #1, la cual tuvo un error en su ejecución y el resultado se devolverá dentro de 5 segundos.'); //* Se rechaza la promesa, pero este código no se ejecutará porque resolve ya fue llamado primero.
    }, 5000); //* Tiempo definido de 5 segundos.
}); //* Fin de la promesa #1.

//* Segunda promesa asincrónica.
let promesaAsincrona2 = new Promise((resolve, reject) => { //* Se crea una promesa con resolve y reject.
    setTimeout(() => { //* Se retrasa la ejecución con un temporizador de 2 segundos.
        resolve('Esta es la promesa #2, la cual se ejecutó correctamente y el resultado se devolverá dentro de 2 segundos.'); //* Resolve devuelve este mensaje después de 2 segundos.
        reject('Esta es la promesa #2, la cual tuvo un error en su ejecución y el resultado se devolverá dentro de 2 segundos.'); //* Reject no se ejecutará porque resolve fue llamado primero.
    }, 2000); //* Tiempo definido de 2 segundos.
}); //* Fin de la promesa #2.

//* Tercera promesa asincrónica.
let promesaAsincrona3 = new Promise((resolve, reject) => { //* Se crea una promesa con resolve y reject.
    setTimeout(() => { //* Se retrasa la ejecución con un temporizador de 6 segundos.
        resolve('Esta es la promesa #3, la cual se ejecutó correctamente y el resultado se devolverá dentro de 6 segundos.'); //* Resolve devuelve este mensaje después de 6 segundos.
        reject('Esta es la promesa #3, la cual tuvo un error en su ejecución y el resultado se devolverá dentro de 6 segundos.'); //* Reject no se ejecutará porque resolve fue llamado primero.
    }, 6000); //* Tiempo definido de 6 segundos.
}); //* Fin de la promesa #3.

//* Ejemplo con promesas encadenadas usando then y catch (pirámide de callbacks).
promesaAsincrona1.then((res) => { //* Se espera la resolución de la promesa #1.
    console.error(res); //* Imprime el resultado en consola.
    promesaAsincrona2.then((res) => { //* Dentro del .then de la promesa #1, se espera la promesa #2.
        console.error(res); //* Imprime el resultado de la promesa #2.
        promesaAsincrona3.then((res) => { //* Dentro del .then de la promesa #2, se espera la promesa #3.
            console.error(res); //* Imprime el resultado de la promesa #3.
        }).catch((error) => { //* Se captura un posible error en la promesa #3.
            console.error(error); //* Imprime el mensaje de error en consola.
        }); //* Fin de la promesa #3.
    }).catch((error) => { //* Se captura un posible error en la promesa #2.
        console.error(error); //* Imprime el mensaje de error en consola.
    }); //* Fin de la promesa #2.
}).catch((error) => { //* Se captura un posible error en la promesa #1.
    console.error(error); //* Imprime el mensaje de error en consola.
}); //* Fin de la promesa #1.

//* Ejemplo usando async y await.
async function funcionConAsyncYAwait(){ //* Se declara una función asíncrona que usará await.
    let respuestaPromesa1 = await promesaAsincrona1; //* La función espera el resultado de la promesa #1 antes de continuar.
    let respuestaPromesa2 = await promesaAsincrona2; //* Después espera el resultado de la promesa #2.
    let respuestaPromesa3 = await promesaAsincrona3; //* Finalmente espera el resultado de la promesa #3.
    console.warn(respuestaPromesa1); //* Imprime en consola el resultado de la promesa #1.
    console.warn(respuestaPromesa2); //* Imprime en consola el resultado de la promesa #2.
    console.warn(respuestaPromesa3); //* Imprime en consola el resultado de la promesa #3.
} //* Fin de la función asíncrona.

funcionConAsyncYAwait(); //* Se invoca la función para ejecutar las promesas con async/await.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ~Fetch, APIS y JSON
// ~Fetch es una función nativa de JavaScript que permite hacer solicitudes HTTP desde el frontend a un servidor, obtener datos y procesarlos. Las APIS (Application Programming Interface) definen reglas que permiten que distintos sistemas se comuniquen entre sí, y JSON (JavaScript Object Notation) es un formato estándar para intercambiar datos estructurados entre cliente y servidor.
console.log('=========== Fetch, APIS y JSON. ==========='); //* Indica el inicio de la sección de Fetch, APIS y JSON.

// Todo - APIS (Application Programming Interface)
// Todo - Las API son interfaces que permiten la comunicación entre diferentes sistemas, como un frontend que consume datos de un backend o un servicio externo que provee información. Una API generalmente se expone a través de una URL y define un conjunto de reglas y endpoints que permiten solicitar datos o enviar información de manera estructurada y predecible.
console.log('--- APIS (Application Programming Interface). ---'); //* Muestra en consola un ejemplo de cómo se puede acceder a una API.
fetch('https://jsonplaceholder.typicode.com/') //* Se realiza una solicitud HTTP a la API proporcionada por JSONPlaceholder.

// Todo - JSON (JavaScript Object Notation)
// Todo - JSON es un formato de datos ligero que se utiliza para representar información estructurada, como objetos y arrays, en forma de texto. Su sintaxis es muy similar a la de los objetos literales en JavaScript, con pares clave:valor encerrados entre llaves. Es el formato estándar para intercambiar datos entre servidor y cliente en aplicaciones web modernas.
console.log('--- JSON (JavaScript Object Notation). ---'); //* Muestra en consola un ejemplo de cómo se procesa la respuesta JSON de una API.
fetch('https://jsonplaceholder.typicode.com/todos/1') //* Se hace una solicitud HTTP a un endpoint específico de la API para obtener un recurso.
    .then(response => response.json()) //* Convierte la respuesta HTTP en un objeto JSON usable en JavaScript.
    .then(json => console.log(json)); //* Imprime en consola el objeto JSON devuelto por la API.

// Todo - Métodos de pedido
// Todo - En HTTP, los métodos de pedido determinan la acción que queremos realizar sobre un recurso en un servidor. Los más comunes son GET, POST, PUT, PATCH y DELETE, cada uno con un propósito específico para interactuar con datos en una API.
// &Extraer información (GET)
// &El método GET se utiliza para **solicitar y obtener información** de un servidor sin modificar los datos existentes. Es seguro y no debe cambiar el estado de los recursos.
console.log('--- Método GET. ---'); //* En este caso solo se imprime en consola los tipos de metodo de pedido, en este caso es el GET.

// &Enviar información nueva (POST)
// &El método POST se utiliza para **enviar nuevos datos** al servidor, generalmente para crear un nuevo recurso. Los datos se incluyen en el cuerpo de la solicitud.
console.log('--- Método POST. ---'); //* En este caso solo se imprime en consola los tipos de metodo de pedido, en este caso es el POST.

// &Editar la información (PUT)
// &El método PUT se utiliza para **reemplazar por completo un recurso existente** con nuevos datos. Si el recurso no existe, algunos servidores pueden crearlo.
console.log('--- Método PUT. ---'); //* En este caso solo se imprime en consola los tipos de metodo de pedido, en este caso es el PUT.

// &Editar una parte (PATCH)
// &El método PATCH se utiliza para **modificar parcialmente un recurso existente**, cambiando solo los campos necesarios sin reemplazar todo el recurso.
console.log('--- Método PATCH. ---'); //* En este caso solo se imprime en consola los tipos de metodo de pedido, en este caso es el PATCH.

// &Eliminar (DELETE)
// &El método DELETE se utiliza para **eliminar un recurso existente** en el servidor. Generalmente devuelve un estado indicando si la eliminación fue exitosa o no.
console.log('--- Método DELETE. ---'); //* En este caso solo se imprime en consola los tipos de metodo de pedido, en este caso es el DELETE.

// Todo - Códigos de estatus (Status Codes)
// Todo - Los códigos de estatus HTTP son números que indican el resultado de una solicitud realizada a un servidor. Nos ayudan a entender si una petición fue exitosa, si hubo un error del cliente o del servidor, o si se requiere alguna acción adicional. Estos códigos son esenciales al trabajar con APIs y otras comunicaciones cliente-servidor.
// &Dentro de los 200
// &Los códigos que comienzan con 2xx indican que la solicitud fue **exitosa**. Por ejemplo, 200 significa que todo salió bien, 201 indica que un recurso se creó correctamente y 204 que la solicitud se completó sin contenido en la respuesta.
console.log('--- Códigos 200. ---'); //* En este caso se imprime en consola los tipos de códigos 2xx.

// &Dentro de los 400
// &Los códigos que comienzan con 4xx indican **errores del cliente**, es decir, que la solicitud estaba mal formulada o que no se tiene permiso para acceder al recurso. Por ejemplo, 400 indica mala solicitud, 401 falta de autorización y 404 recurso no encontrado.
console.log('--- Códigos 400. ---'); //* En este caso se imprime en consola los tipos de códigos 4xx.

// &Dentro de los 500
// &Los códigos que comienzan con 5xx indican **errores del servidor**, es decir, que la solicitud era válida pero el servidor no pudo completarla correctamente. Por ejemplo, 500 indica error interno del servidor y 503 servicio no disponible.
console.log('--- Códigos 500. ---'); //* En este caso se imprime en consola los tipos de códigos 5xx.

// Todo - Extraccion de array con varios JSON mediante API
// Todo - Las APIs no solo pueden devolver un único JSON, sino que también pueden devolver múltiples objetos JSON agrupados dentro de un array. Esto es útil cuando necesitamos obtener listas de datos, como publicaciones, usuarios o productos, y procesarlos de manera estructurada en JavaScript.
fetch('https://jsonplaceholder.typicode.com/posts') //* Se realiza una solicitud HTTP al endpoint que devuelve un array de objetos JSON.
    .then(response => response.json()) //* Convierte la respuesta HTTP en un array de objetos JSON para ser usado en JavaScript.)
    .then(json => console.log(`--- Extraccion de array con JSON mediante API. --- \n`, json)); //* Imprime en consola el array de JSON devuelto por la API.

// Todo - Hacer una Query en la URL
// Todo - Además de poder extraer todos los datos de una API y luego filtrarlos manualmente, podemos solicitar a la API un dato específico o un conjunto limitado de información mediante **queries** en la URL. Estas queries funcionan junto con métodos HTTP como GET, POST, PUT, PATCH o DELETE según la operación que deseemos realizar.
// &Query Ordinaria
// &Este tipo de query es estática, donde la URL se escribe directamente con los parámetros que deseamos consultar. No es muy dinámica ni reutilizable, pero sirve para probar cómo se solicita información específica a una API.
fetch('https://jsonplaceholder.typicode.com/comments?postId=1') //* Se hace la solicitud HTTP a la API con un parámetro fijo en la URL (postId=1).
    .then(response => response.json()) //* Convierte la respuesta HTTP en un objeto JSON.
    .then(json => console.log(`--- Query ordinaria. --- \n`,json)); //* Imprime en consola los datos obtenidos de la API según la query.

// &Query dinámica
// &En aplicaciones reales, se suele separar la URL base y los parámetros de consulta para hacer el código más reutilizable y limpio. Esto permite modificar la query fácilmente sin cambiar toda la URL.
let url = 'https://jsonplaceholder.typicode.com'; //* Se define la URL base de la API.
let query = '/comments?postId=1'; //* Se define la query específica que se desea ejecutar.
fetch(`${url}${query}`) //* Se concatena la URL base con la query para realizar la solicitud HTTP.
    .then(response => response.json()) //* Convierte la respuesta en un objeto JSON usable en JavaScript.
    .then(json => console.log(`--- Query dinámica. --- \n`,json)); //* Imprime en consola el resultado de la query dinámica.

// Todo - Formato para la eliminación, modificación y envío de información en una API
// Todo - En una API no solo se puede realizar la acción de consulta (GET), también es posible **enviar nuevos datos (POST)**, **modificar información existente (PUT/PATCH)** o **eliminar información (DELETE)**. Para poder ejecutar estas acciones, la función `fetch` requiere de un segundo parámetro en el cual se especifican las configuraciones necesarias: el método HTTP a utilizar, los headers que indican cómo se envía la información y el body que contiene los datos a transferir. Esto permite que el cliente y el servidor se comuniquen de manera estructurada y bajo reglas bien definidas.
// &Forma base de una API: consulta de información (GET).
// &Cuando se usa `fetch` sin parámetros adicionales, el método por defecto es GET. Este tipo de petición se emplea para obtener datos sin necesidad de enviar información adicional al servidor. En este caso, la estructura es simple: solo se necesita la URL de la API y opcionalmente un query string para filtrar resultados, como se muestra a continuación.
fetch(`https://jsonplaceholder.typicode.com/posts`) //* Se hace la petición GET por defecto, sin parámetros adicionales.
    .then(response => response.json()) //* Convierte la respuesta de la API en formato JSON.
    .then(json => console.log('--- Query con estructura base solo para GET. --- \n', json)); //* Imprime en consola la respuesta obtenida mediante GET.

// &Estructura de Query para otras acciones (POST, PUT, PATCH, DELETE).
// &Cuando la petición requiere enviar información, modificar o eliminar registros, se debe añadir un objeto como segundo parámetro en el `fetch`. Este objeto de configuración define tres elementos fundamentales: el `method` que indica la acción a realizar, los `headers` que establecen cómo se envían los datos y el `body` que contiene la información a transmitir al servidor.
fetch(`https://jsonplaceholder.typicode.com/posts`, { //* Se ejecuta la API usando una estructura más completa.
    method: '', //* Aquí se especifica el método HTTP (ej. POST, PUT, PATCH, DELETE).
    headers: {}, //* Aquí se definen las reglas de comunicación, como el formato de datos.
    body: '' //* Aquí se colocan los datos que se desean enviar, si aplica.
}) // *Cierre del fech.
    .then(response => response.json()) //* Convierte la respuesta en un objeto JSON utilizable.
    .then(json => console.log('--- Query con estructura para cualquier acción adicional a GET. --- \n', json)); //* Muestra el resultado de la petición en consola.

// ^Método de envío
// ^La propiedad `method` indica qué tipo de acción se ejecutará sobre los datos de la API. Puede ser GET para consultar información, POST para crear un nuevo recurso en el servidor, PUT o PATCH para actualizar registros existentes y DELETE para eliminar información. Este campo es indispensable cuando se requiere más que una simple lectura de datos.
fetch(`https://jsonplaceholder.typicode.com/posts`, {
    method: 'POST', //* Se indica explícitamente que se usará el método POST para enviar información.
}) //* Cierre del fetch.

// ^Headers
// ^Los headers funcionan como reglas o instrucciones adicionales que guían la comunicación entre cliente y servidor. Un ejemplo típico es declarar que la información enviada será en formato JSON, utilizando el header `Content-Type`. Esto asegura que el servidor pueda interpretar correctamente los datos recibidos y evitar errores de formato o incompatibilidad.
fetch(`https://jsonplaceholder.typicode.com/posts`, {
    method: 'POST', //* Método POST para enviar información nueva al servidor.
    headers: { //* Apertura del objeto headers.
        'Content-Type': 'application/json; charset=UTF-8' //* Header que indica que los datos se envían en formato JSON con soporte de caracteres especiales.
    }, //* Cierre del headers.
}) //* Cierre del fetch.

// ^Body
// ^El body representa el contenido de la información que se enviará al servidor. Este campo debe contener los datos en formato JSON válido, ya que es el estándar de comunicación más utilizado en las APIs modernas. Aunque es posible escribir el objeto directamente, lo más común es transformarlo con `JSON.stringify` para asegurar que sea recibido como texto JSON válido y evitar errores en la interpretación del servidor.
// ?Body directamente en el fetch
// ?En este ejemplo se incluye el objeto directamente en el `body`. Sin embargo, no todas las APIs aceptan este formato, ya que muchas requieren recibir el contenido como un string en formato JSON. Aunque sirve como demostración, lo más seguro es usar `JSON.stringify`.
fetch(`https://jsonplaceholder.typicode.com/posts`, {
    method: 'POST', //* Método POST que permite enviar datos al servidor.
    headers: { //* Apertura del objeto headers.
        'Content-Type': 'application/json; charset=UTF-8' //* Header que declara el envío de datos como JSON.
    }, //* Cierre del objeto headers.
    body: { //* Apertura de objeto body.
        title: 'Ricardo comenta sobre tu foto.', //* Campo con el título del comentario.
        body: '¡Qué bella foto prima, se te echa de menos!.', //* Campo con el contenido del comentario.
        usuarioId: 1 //* ID del usuario que realiza el envío de información.
    } //* Cierre del objeto body.
}) //* Cierre del fetch.

// ?Body con JSON.stringify
// ?Aquí se construye un objeto en JavaScript con los datos a enviar y luego se convierte explícitamente a un string JSON mediante `JSON.stringify`. Este es el enfoque correcto y más seguro para garantizar que la API procese adecuadamente la información enviada.
let cuerpoBody = { //* Objeto que contiene la información a transmitir.
    title: 'Ricardo comenta sobre tu foto.', //* Campo "title" con el título del mensaje.
    body: '¡Qué bella foto prima, se te echa de menos!.', //* Campo "body" con el contenido del mensaje.
    usuarioId: 1 //* Identificador del usuario que envía la información.
} //* Cieere de variable tipo let con el cuerpo del body.

fetch(`https://jsonplaceholder.typicode.com/posts`, {
    method: 'POST', //* Se usa POST ya que estamos enviando nueva información.
    headers: { //* Apertura del objeto headers.
        'Content-Type': 'application/json; charset=UTF-8' //* Se indica que la información se enviará en formato JSON.
    }, //* Cierre del objeto headers.
    body: JSON.stringify(cuerpoBody) //* El objeto se convierte en un string JSON antes de enviarlo.
}) //* Cierre del fetch.

// &Query final con POST para enviar datos a la API.
// &Este ejemplo completo ejecuta la acción de envío de información a la API usando POST. Se construye el objeto, se transforma a JSON string y se envía junto con los headers adecuados. Finalmente, la respuesta del servidor se recibe, se transforma de nuevo en JSON y se imprime en consola para confirmar el éxito de la operación.
cuerpoBody = { //* Objeto con la información que será enviada a la API.
    title: 'Ricardo comenta sobre tu foto.', //* Título del comentario.
    body: '¡Qué bella foto prima, se te echa de menos!.', //* Contenido del comentario.
    usuarioId: 1 //* Identificador del usuario.
} //* Se declara en una variable con el cuerpo de lo que se enviara a la API.

fetch(`https://jsonplaceholder.typicode.com/posts`, { //* Se hace la llamada a la API con método POST.
    method: 'POST', //* Se especifica POST como método de envío de información.
    headers: { //* Apertura del objeto headers.
        'Content-Type': 'aplication/json; charset=UTF-8' //* Header obligatorio para indicar que se envía JSON.
    }, //* Cierre del objeto header.
    body: JSON.stringify(cuerpoBody) //* Se envía el objeto transformado en JSON string.
}) //* Cierre del fetch.
    .then(response => response.json()) //* Convierte la respuesta del servidor a JSON.
    .then(json => console.log('--- Query con estructura y ejecución de un método POST, para subir información a la API. --- \n', json)); //* Imprime en consola la confirmación del POST.

// &Formato de Query para cada tipo de metodo
// &
// ^GET
// ^El metodo GET lo que hace es extraer informacion con su url base, ya que por defecto y comunmente las API's su forma base es para extraer informacion
fetch('https://jsonplaceholder.typicode.com/posts') //* Se realiza una solicitud HTTP al endpoint que devuelve un array de objetos JSON.
    .then(response => response.json()) //* Convierte la respuesta HTTP en un array de objetos JSON para ser usado en JavaScript.)
    .then(json => console.log(`--- Uso de GET en API. --- \n`, json)); //* Imprime en consola el array de JSON devuelto por la API.

// ^POST
// ^El metodo post es para insertar informacion en la API
fetch('https://jsonplaceholder.typicode.com/posts',{
    method: 'POST',
    headers: {
        'Content-Type': 'aplication/json; charset=UTF-8'
    },
    body: JSON.stringify({
        title: 'Ricardo comenta sobre tu foto.',
        body: '¡Qué bella foto prima, se te echa de menos!.', 
        usuarioId: 1 
    })
})
    .then(response => response.json())
    .then(console.log(`--- Uso de PUT en API. --- \n`,json))

// ?PUT
// ?

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ~Consejos    
console.log('=========== Consejos. ==========='); //* Muestra un mensaje en la consola para indicar el inicio de la sección sobre consejos.

// !Variables que apuntan a otra variable con valor: No se recomienda asignar directamente una variable al valor de otra, sin importar si se trata de un tipo primitivo o complejo. En el caso de **tipos de datos complejos** (como objetos o arreglos), ambas variables apuntarán al **mismo espacio en memoria**, lo que significa que un cambio en una variable también afectará a la otra, generando posibles errores difíciles de rastrear. En el caso de **tipos de datos primitivos** (como números o cadenas), el valor sí se copia y no hay referencia compartida, pero aún así es preferible **evitar este tipo de asignación directa** si no es realmente necesario, ya que puede dificultar la lectura, ocacionar errores y mantenimiento del código. Siempre es más seguro y claro trabajar con copias independientes cuando se desea evitar comportamientos inesperados.

// !Igualar una variable a una función: En JavaScript, es común asignar una función a una variable. Esto significa que la variable ahora **actúa como un nuevo nombre o alias para esa función**. Por ejemplo, si hacemos `const nombreVariable = nombreFuncion;`, lo que sucede es que la variable guarda la función completa como valor, y por lo tanto, podemos llamar a la función usando el nombre de la variable como si fuera el nombre original de la función. Es importante entender que en este punto la función **no se ejecuta**; solo se guarda su referencia. Para ejecutarla y obtener un resultado, es necesario usar paréntesis `()` después del nombre de la variable, por ejemplo: `nombreVariable()`. Si omitimos los paréntesis, simplemente estamos pasando la función sin ejecutarla, lo cual es útil en situaciones como callbacks, eventos o funciones de orden superior. En resumen, la variable se convierte en una nueva forma de llamar a la función, manteniendo toda su funcionalidad, pero con un nombre diferente.
console.log( '--- Igualar una variable a una funcion. ---')
function funcionSumaConsejo(a, b) {
    return a + b; //* Retorna la suma de a y b
}
const funcionComoVariable = funcionSumaConsejo; //* 'funcionComoVariable' es ahora un alias para 'funcionSumaConsejo'
const resultadoEjecucion = funcionComoVariable(4, 5); //* Se ejecuta la función usando la variable-alias, pasando 4 y 5 como argumentos
console.log(funcionComoVariable); //* Muestra el código fuente de la función, porque es la referencia a la función
console.log(resultadoEjecucion);  //* Muestra el resultado de la ejecución: 9.

// !Algo deprecado en JS: En el contexto de JavaScript, el termino "deprecado" se refiere a una función, método, propiedad o caracteristica de JavaScript que ha sido marcada como obsoleta o desaconsejada. Si se utiliza alguna funcion, método, propiedad o caracteristica de JavaScript que esta marcada como "deprecada", es posible que se recivan adevertencias o mensajes en la consola del navegador.

// !Arrays tipo const: Aunque es posible declarar arrays con `const`, **no se recomienda hacerlo si se tiene la intención de reasignar el array completo más adelante**.`const` impide la **redefinición** de la variable (es decir, no se puede volver a asignar otro array completamente nuevo a esa misma variable), pero **sí permite modificar el contenido del array**, como agregar, eliminar o cambiar elementos. Por lo tanto, si se prevé que se necesitará reasignar el array por completo en algún momento, se recomienda usar `let` en lugar de `const`.

// !Paso de una unica condicional con valor cero: A veces, cuando en un condicional if se pasa un valor de 0, este lo tomará como boolean y por ende lo interpretará como **false**, ya que en lógica booleana el número 0 equivale a false mientras que 1 (o cualquier otro número distinto de 0) equivale a true.
console.log('--- Paso de una unica condicional con valor cero. ---'); //* Muestra un título que indica el inicio del ejemplo con condicional y valor cero.
let variableParaPasoCondicionalConValorCero = 0; //* Declara una variable con valor 0, que será evaluado en la condición.
if (variableParaPasoCondicionalConValorCero) { //* Evalúa la variable; al ser 0, se convierte implícitamente en false y no se ejecuta este bloque.
    console.log('Se recibio un dato.'); //* No se ejecutará porque la condición es false.
} else { //* Este bloque se ejecuta porque la condición anterior no se cumplió.
    console.log('No se recibio ningun dato.'); //* Muestra el mensaje indicando que el valor se interpretó como falso.
}