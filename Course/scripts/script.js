// JavaScript: Es el sistema nervioso y el que ejecuta las acciones.
// JS es un lenguaje de tipo interpretado y no copilado, lo que significa que un navegador o un entorno de ejecución va a interpretar el lenguaje sin pasarlo a binario.
// Js no toma en cuenta los espacios ni los enter dentro de una declaración debido a la forma de funcion de JS, en caso de usar enter en una sola declaración se indentara.
// Comentario y comentario multilinea: Texto o codigo que solamente el desarrollador puede ver, ademas estos no tendran ningun efecto en lo que visualiza el usuario, por lo que de manera global y en cualquier lenguaje se puede generar un comentarios con Ctrl + }. 
// CamelCase: El camelCase es una convención de escritura que se utiliza en programación para nombrar variables, funciones, clases, etc. Se escribe en minúsculas y cada palabra adicional comienza con mayúscula. Por ejemplo, "miVariable", "miFuncion", "miClasePersonalizada".

// ^JavaScript
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ~Simbologia en JS
// Todo - Separador (,): En JavaScript, la coma se utiliza para separar múltiples declaraciones o elementos dentro de una misma línea. Por ejemplo, permite declarar varias variables al mismo tiempo usando una sola instrucción, separando cada variable con una coma.
var x, y, z; //* Declaración de tres variables 'var' en una sola línea. La coma indica que 'x', 'y' y 'z' son variables independientes.

// Todo - Delimitador (;): El punto y coma en JavaScript, como en muchos otros lenguajes, indica el final de una sentencia o instrucció, aunque dentro de JS es totalmente opcional, pero recomendable. Sirve para delimitar dónde termina una operación o declaración, ayudando al intérprete a entender el código correctamente.
x = 5; y = 6; z = 3; //* Declaración y asignación de tres variables. Cada punto y coma (;) indica el final de una instrucción independiente, permitiendo escribir múltiples sentencias en una sola línea.

// Todo - Asignador (=): En JavaScript, el símbolo igual (=) se utiliza como **asignador**, lo que significa que se emplea para asignar un valor a una variable. A diferencia de las matemáticas, donde el igual indica igualdad, en JavaScript se interpreta como una operación de asignación: el valor del lado derecho se asigna a la variable del lado izquierdo.
z = 'Valor de la variable Z'; //* Se asigna el valor de texto a la variable 'z' usando el símbolo de asignación (=).

// Todo - Suma (+): En JavaScript, el símbolo de suma (+) se utiliza como **operador aritmético** para sumar valores numéricos. También puede funcionar como **operador de concatenación** cuando se usa con cadenas de texto, uniendo los valores como una sola cadena. Se usa en estructuras como: resultado = valor1 + valor2;
z = x + y; //* Se suman los valores de las variables 'x' y 'y', y el resultado se asigna a la variable 'z'.

// Todo - Scope ({}): En JavaScript, las llaves `{}` definen un bloque de código o scope (ámbito). Este scope actúa como una especie de “célula aislada”: puede acceder a variables externas, pero las variables declaradas dentro no estarán disponibles fuera del bloque. Esto permite organizar el código y limitar el alcance de las variables para evitar conflictos o interferencias. Las llaves se utilizan en estructuras como condicionales, funciones, bucles y objetos. Ademas cabe mencionar que la llave de apertura es `{` y la de cierre es `}`.

function scope() { // *Se declara una función llamada 'scope'. Todo lo que esté dentro de estas llaves será su scope local.
    var x; // *Variable declarada con 'var', la cual pertenece únicamente al scope de esta función.
} // *Cierre de la funcion y por ende del scope de la variable.

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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

// Todo - Declaración múltiple de variables (únicamente con 'var' y 'let'): Es posible declarar varias variables en una sola línea utilizando solo una vez la palabra clave 'var' o 'let'. Las variables pueden declararse de tres formas: con valor asignado, sin valor, o combinando ambas (mixto). La asignación de valores es opcional para cada variable, por lo que se puede elegir si alguna tendrá valor inicial o no. Todas las variables deben ir separadas por comas, y la sintaxis general es: palabraClave variable1 [= valor], variable2 [= valor], ..., variableN [= valor];
// &Declaración múltiple de variables sin valores
var elementoDeclaracionMultipleSinValor1, elementoDeclaracionMultipleSinValor2, elementoDeclaracionMultipleSinValores; //* Se declaran tres variables sin asignarles valores, todas en una sola línea.

// &Declaración múltiple de variables con valores
var elementoDeclaracionMultipleConValor1 = 'Variable 1 de la declaración múltiple con valores', elementoDeclaracionMultipleConValor2 = 'Variable 2 de la declaración múltiple con valores'; //* Se declaran dos variables con valores asignados en la misma línea.

// &Declaración múltiple mixta
var elementoDeclaracionMultipleMixta1, elementoDeclaracionMultipleConValor2 = 'Variable 2 de la declaración múltiple mixta, la cual contiene un valor.'; //* Se declara una variable sin valor y otra con valor asignado en una sola línea.

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ~Tipos de datos
// ~En JavaScript, las variables pueden almacenar distintos tipos de datos, y estos son fundamentales para realizar operaciones, representar información y controlar el flujo del programa. Existen varios tipos de datos básicos, como los **números**, **cadenas de texto**, **booleanos**, **objetos**, **arreglos**, entre otros. Cada tipo de dato tiene su propia sintaxis y comportamiento. Comprender bien estos tipos es clave para escribir código eficiente y evitar errores, ya que determinan cómo se procesan, comparan y manipulan los valores dentro del programa.
// &Números enteros (Int)
// &Las variables tipo `number` se utilizan para almacenar **valores numéricos enteros**, es decir, números sin decimales. Estos pueden ser positivos, negativos o incluso el cero. No se requiere ningún símbolo especial para declarar un número entero; simplemente se escribe el número directamente después del signo `=`. Esto es útil cuando se necesita hacer operaciones matemáticas básicas como suma, resta, multiplicación, etc.
const variableTipoNumber = 4; //* Variable tipo 'number' que almacena un número entero sin decimales.

// &Números con decimales (Float)
// &Las variables tipo `float` también almacenan números, pero a diferencia de los enteros, estos **incluyen decimales**. En JavaScript no se usa una palabra clave diferente para flotantes, pero internamente se maneja como número decimal. Para declarar un `float`, basta con incluir un punto (`.`) entre la parte entera y decimal. Este tipo es muy útil en cálculos que requieren mayor precisión, como porcentajes, precios, promedios, etc.
const variableTipoFloat = 5.34; //* Variable tipo 'float' que almacena un número con decimales (número no entero).

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
const variableTipoDate = new Date('07/25/2025'); //* Fecha creada en formato MM/DD/YYYY. Representa el 25 de julio de 2025.

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ~Operadores en JavaScript
// ~En JavaScript, los operadores son símbolos que permiten realizar diferentes tipos de operaciones entre variables o valores. Estas operaciones pueden ser de **asignación**, **aritméticas**, **lógicas**, **comparación**, entre otras. 
// ~Los operadores son fundamentales para manipular datos, realizar cálculos, construir condiciones y ejecutar tareas dentro del código. A continuación, se explican los operadores **de asignación** y **aritméticos**, que son los más utilizados al comenzar a programar.
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

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ~Scope (disponibilidad)
// ~En JavaScript, el *scope* (alcance o disponibilidad) se refiere al contexto en el que una variable puede ser accedida o usada. Para visualizarlo, podemos imaginar que el código tiene jerarquías parecidas a una familia: el bloque principal (fuera de las llaves `{}`) es como un "padre", y cada bloque encerrado entre llaves `{}` (por ejemplo, dentro de funciones, condicionales o bucles) es un "hijo". Las variables declaradas **fuera** de las llaves (en el padre) pueden ser accedidas **dentro** del bloque (por los hijos), pero las variables creadas **dentro** de las llaves solo existen en ese bloque y **no pueden ser accedidas por el padre**. Esto se conoce como *scope local* (dentro del bloque) y *scope global* (fuera del bloque). Además, si se declara una variable con el mismo nombre tanto fuera como dentro del bloque, JavaScript las trata como variables completamente **independientes**, incluso si son del mismo tipo (`const`, `let`). En ese caso, dentro del bloque se utilizará únicamente la versión local (la que esté más cerca).
console.log('=========== Scope (disponibilidad). ===========') 
//* Título visual que se imprime en consola para señalar el inicio de la sección dedicada a explicar el concepto de scope (disponibilidad de variables según el contexto donde son declaradas).

// &Variable dentro y fuera del scope.
// &En este ejemplo se declara una variable `const` llamada `variableParaScopeDentroFuera` en la raíz (fuera del bloque) con un valor de 5, y luego **se vuelve a declarar otra variable con el mismo nombre dentro de un bloque**, pero con un valor distinto (2). Ambas variables son válidas y no provocan error, ya que pertenecen a diferentes *scopes*. Dentro del bloque se usará la versión local (la variable declarada dentro del scope), mientras que fuera se usará la versión global (la vairable declarada fuera del scope).
console.log('--- Variable dentro y fuera del scope. ---')
//* Subtítulo visual en consola que identifica un ejemplo donde una variable se declara tanto dentro como fuera de un bloque. Sirve para diferenciar y observar cómo cada instancia actúa dentro de su propio scope.
const variableParaScopeDentroFuera = 5; //* Declaración en el scope global (raíz), valor: 5.
{
    const variableParaScopeDentroFuera = 2; //* Declaración en el scope local (bloque), valor: 2.
    console.log(variableParaScopeDentroFuera); //* Se imprime 2, ya que estamos dentro del bloque.
}
console.log(variableParaScopeDentroFuera); //* Se imprime 5, ya que estamos fuera del bloque.

// &Variable dentro pero no fuera del scope.
// &Aquí se declara una variable solo dentro de un bloque (entre llaves `{}`), por lo que su alcance está limitado únicamente a ese bloque. Al intentar acceder a ella fuera del bloque, se generará un error porque **la variable no existe en el scope global**.
console.log('--- Variable dentro pero no fuera del scope. ---')
//* Subtítulo visual en consola que señala el inicio del ejemplo donde una variable es declarada dentro de un bloque y luego se intenta acceder a ella fuera del mismo, generando un error por estar fuera de su scope.
{
    const variableDentroNoFuera = 3; //* Declaración en el scope local (bloque), valor: 3.
    console.log(variableDentroNoFuera); //* Se imprime 3, ya que estamos dentro del bloque.
}
//console.log(variableDentroNoFuera); //* ❌ Error: Si se trata de hacer un console log de la variableDentroNoFuera, nos arrojara un error indicando que la vairable no esta definida, por lo que fuera del bloque o del scope esta no existe.

// &Variable fuera pero no dentro del scope.
// &En este caso, se declara una variable fuera del bloque (en el scope global) y luego se intenta acceder a ella tanto fuera como dentro del bloque. Como las variables globales **sí pueden ser leídas desde dentro de bloques**, este ejemplo funcionará correctamente. La variable estará disponible en ambos lugares.
console.log('--- Variable fuera pero no dentro del scope. ---')
//* Subtítulo visual que marca un ejemplo en el que una variable es declarada fuera de un bloque (en el scope global) y luego es utilizada tanto dentro como fuera del mismo. Esto permite ver que las variables globales son accesibles desde scopes internos.
const variableFueraNoDentro = 7; //* Declaración en el scope global (raíz), valor: 7.
{
    console.log(variableFueraNoDentro); //* Se imprime 7, ya que el bloque puede acceder a variables globales.
}
console.log(variableFueraNoDentro); //* Se imprime 7 nuevamente, accediendo desde el mismo scope global.

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ~Parseo
// ~El parseo (también conocido como **conversión de tipo**) es el proceso mediante el cual se transforma un dato de un tipo a otro. En JavaScript, una de las conversiones más comunes es la de un **string (texto)** a un **número**, ya sea entero (`int`) o decimal (`float`). Esto es muy útil, por ejemplo, cuando los valores numéricos se reciben desde formularios o bases de datos en forma de texto y se desea realizar operaciones matemáticas con ellos. JavaScript ofrece funciones como `parseInt()` y `parseFloat()` para realizar este tipo de conversiones de forma explícita.
console.log('=========== Parseo. ===========') //* Título principal que indica que inicia la sección de parseo o conversión de tipos.
const variableParaParseoTipoInt = '5'; //* Esta variable contiene un valor numérico, pero en forma de texto (string).
const vairableParaParseoTipoFloat = '2.5'; //* Esta variable contiene un número decimal, pero también como texto (string).
let variableParaAlmacenarParseo; //* Variable utilizada para almacenar el resultado del parseo y posterior operación.

// &Parseo de tipo string a número entero 'int' (parseInt)
// &La función `parseInt()` convierte una cadena de texto que representa un número entero en un valor numérico real. Si la cadena contiene decimales, estos son descartados o redondeados. Es útil cuando se desea trabajar solo con valores enteros.
console.log('--- Parseo de string a número entero (parseInt). ---') //* Subtítulo explicativo que marca el inicio de la conversión con `parseInt`.
variableParaAlmacenarParseo = 5 + parseInt(variableParaParseoTipoInt); //* El string '5' se convierte en número 5, luego se suma a 5. Resultado final: 10.
console.log(variableParaAlmacenarParseo); //* Se imprime el resultado: 10.

// &Parseo de tipo string a número decimal 'float' (parseFloat)
// &La función `parseFloat()` convierte una cadena de texto que representa un número decimal en un valor `float`. A diferencia de `parseInt()`, conserva los decimales.
console.log('--- Parseo de string a número con decimales (parseFloat). ---') //* Subtítulo explicativo para `parseFloat`.
variableParaAlmacenarParseo = 2.5 + parseFloat(vairableParaParseoTipoFloat); //* El string '2.5' se convierte en número 2.5, luego se suma a 2.5. Resultado final: 5.
console.log(variableParaAlmacenarParseo); //* Se imprime el resultado: 5.

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ~Consejos
// !Variables que apuntan a otra variable con valor: No se recomienda asignar directamente una variable al valor de otra, sin importar si se trata de un tipo primitivo o complejo. En el caso de **tipos de datos complejos** (como objetos o arreglos), ambas variables apuntarán al **mismo espacio en memoria**, lo que significa que un cambio en una variable también afectará a la otra, generando posibles errores difíciles de rastrear. En el caso de **tipos de datos primitivos** (como números o cadenas), el valor sí se copia y no hay referencia compartida, pero aún así es preferible **evitar este tipo de asignación directa** si no es realmente necesario, ya que puede dificultar la lectura, ocacionar errores y mantenimiento del código. Siempre es más seguro y claro trabajar con copias independientes cuando se desea evitar comportamientos inesperados.