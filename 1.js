(function() {

"use strict"; // влключает последний стандарт ES4->ES5, для строгих проверок.

// Особенность оператора +, что если один из операндов - строка, то
// второй тоже приводится к строке.
// остальные приводят к числу.
console.log('1' + 2);
console.log(1 + '2');

// унарный плюс приводит строку к числу.
var apples = "2";
var oranges = "3";
console.log(+apples + +oranges);

// как работают некоторые преобразования
console.log('2' > 1); // true
console.log('01' == 1); // true
console.log(false == 0); // true false converted to 0
console.log(false === 0); // false
console.log(true == 1); // true true converted to 1
console.log(0 == false); // true
console.log('' == false); // true преобразуется в 0

// чтобы сюрпризов небыло, нужно использовать операторы строгого
// равенства === и !==

console.log('1----------------------------------');

// и не равны ничему больше
// при преобразовании null становится 0, а undefined -> NaN
console.log(isNaN(undefined)); //true
console.log(isFinite(undefined)); // false
console.log(isNaN(null)); // false
console.log(isFinite(null)); // true

// при сравнении null приводится к числу, при равенстве нет
// лучше с ними не использовать сравнения
// лучше использовать === с ними всегда
console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true

// проверка на то, что число не NaN/Infinity
isFinite(1);

// проверка на то, что число NaN
isNaN(1);

// parseInt / parseFloat - мягкое преобразование - считывает пока число
parseInt('12px');
parseFloat('12px');

// проерка на то, что строка - это число
function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}
isNumeric("12");

// строки не изменяемы
// длина строки
var str = "My string";
console.log('String length: ' + str.length);

// доступ к символам
str.charAt(0);
console.log(str[0]);

// смена регистра
str.toUpperCase();
str.toLowerCase();

// поиск подстроки
str.indexOf("id", 0);

// подстрока
str.slice(1, -1);

// массивы
// split
var names = 'Маша, Петя, Марина, Василий';
names.split(", ");
names.split(''); // по буквам

// join
var arr = ['Маша', 'Петя', 'Марина', 'Василий'];
arr.join(';');

// в массивах тоже есть slice
arr = ["Почему", "надо", "учить", "JavaScript"];
arr.slice(1, 3);

// полностью копия массива
arr.slice(); // как в python

// sort по-умолчанию сортирует, преобразуя элементы в строки.
arr.sort();

// сортировка чисел
arr.sort(function(a, b) { return a - b; });

// реверс элементов
arr.reverse();

// объединение массивов
arr.concat([1, 2]);

// поиск в массиве также, как и в строке
arr.indexOf(1);

// получить свойства объекта в виде массива
Object.keys({first: '1', second: '2'});

// функции для работы с массивом
arr = [1, 2, 3, 4, 5];
arr.forEach(function(item, i, arr) { console.log(item); });
arr.filter(function(item) { return item > 3; });
arr.map(function(item) { return item * 2; });
arr.every(function(item) { return item.length > 0; }); // true/false
arr.some(function(item) { return item.length > 4; }); // true/false
arr.reduce(function(sum, current, index, arr) { return sum + current; }, 0);

// в составе выражения, компилятор считает, что это function expression
// иначе же, он будет считать, что это function declaration.
!function() {
    console.log('function calling without braces');
}();

(function() {
    console.log('function calling with braces');
})();

// все объекты логически преобразуются к true
if ([] && {})
    console.log('all objects may be true');

// преобразование объекта к строке - method toString.
var user = {
    firstName: "Vasiliy",
    toString: function() {
        return 'User: ' + this.firstName;
    }
};
console.log(String(user));

// численное преобразование
var room = {
    number: 777,
    valueOf: function() { return this.number; },
    toString: function() { return this.number; }
};
console.log(Number(room));

// this представляет новый создаваемый объект. constructor.
// нужно не просто вызывать функцию, а создавать объект с помощью new.
// иначе this будет undefined (в strict режиме).
// this передается в функцию только в случе вызова метода через . или [].
function Person(first, last) {
    if (first === undefined || last === undefined)
        throw "Must specify first and last";
    this.first = first;
    this.last = last;
}

// свойство есть в объекте
if ('name' in Person)
    ;

// создание нового объекта типа person.
var father = new Person("Ivan", "Ivanov");
console.log(father.first + " " + father.last);

// создание объекта
var person = {
    first: "John",
    last: "Doe"
};

// объект мутабелен, переменные нет
var x = person;
x.first = "Johhhnnn";
console.log(person);

// перебор свойств объекта
for (var name in person) {
    console.log(person[name]);
}
console.log('name = ' + name); // ^-(

// добавление нового свойства
person.nationality = "English";
console.log(person);

// удаление свойства объекта, не влияет на переменные и функции
delete person.nationality;
console.log(person);

// каждый объект имеет прототип и перенимает его свойства (object.prototype)

// методы объекта - это просто функции в атрибутах
var pers = {
    first: "John",
    second: "Doe",
    fullname: function() { return this.first + " " + this.second; }
};
console.log(pers);
console.log(pers.fullname());

// строку в верхний регистр
var msg = "Hello, world!";
console.log(msg.toUpperCase());

// можно определить метод в конструкторе
function Person2(first, last) {
    this.first = first;
    this.last = last;
    this.fullname = function() {
        return this.first + " " + this.last;
    };
    this.changeFirst = function(name) {
        this.first = name;
    };
}

// Person2 будет prototype для объектов
// Все объекты js наследуются от Object.prototype.
var p = new Person2("John", "Doe");
console.log(p.fullname());
p.changeFirst("Nick");
console.log(p.fullname());
console.log(Person2.prototype);
console.log(p.prototype);

// функции могут храниться в переменных
var f1 = function(a, b) { return a * b; };
console.log(f1(1, 2));

// self-invoking functions
(function () {
    var x = "Hello!";
    console.log(x);
})();

// количество аргументов функции
(function () {
    console.log(arguments.length);
    console.log(arguments[1]);
})(1,222,3);

// функцию в строку
console.log(f1.toString());

// find max
function max(/* variable arguments */) {
    var maximum = 0;
    for (var i = 0; i < arguments.length; i++)
        if (arguments[i] > maximum)
            maximum = arguments[i];
    return maximum;
}
console.log(max(1, 123, 500, 115, 44, 88));

// summ all
function sum(/* variable arguments */) {
    var summa = 0;
    for (var i = 0; i < arguments.length; i++)
        summa += arguments[i];
    return summa;
}
console.log(sum(1, 123, 500, 115, 44, 88));

// в js все передается по ссылке, подобно python/java.

// will return the window/global object because
// function is called without an owner object.
function fn2() {
    //return this;
}
//console.log(fn2());

// in this case the owner of code is myObject(this)
// and method belongs to that owner.
var myObject = {
    firstName: "John",
    lastName: "Doe",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};
console.log(myObject.fullName());

// in this case returned the object itself
var myObject2 = {
    firstName: "John",
    lastName: "Doe",
    fullName: function() {
        return this;
    }
};
console.log(myObject2.fullName());

// in this case created a new object that inherit props and methods
// from its constructor
// keyword - "new" - the indicator.
// because function is object its create new object and pass this keyword.

function Fn3(a, b) {
    this.a = a;
    this.b = b;
}
var someXObject = new Fn3(1, 2222);
console.log(someXObject);

// вызвать функцию с параметрами
// обязательно передается owner объект
var owner1 = null;
function fn4(a, b) {
    return a * b;
}
owner1 = fn4.call(owner1, 10, 2);
console.log(owner1);

// вызов функции с параметрами в качестве массива
arr = [10, 2];
var owner2;
owner2 = fn4.apply(owner2, arr);
console.log(owner2);

// A closure is a function having access to the parent scope, even after
// the parent function has closed.
var add = (function () {
    var counter = 0;
    return function () {return counter += 1;};
})();

// определение свойств объекта
// обычное - удаляемое, изменяемое, перечисляемое
// configurable - delete object.property
// writable - object.property=something
// enumerable - for property in object
(function() {
var user = {
    firstname: "Vasya",
    surname: "Pupkin"
};
Object.defineProperty(user, "firstname", {
    value: "Vasya",
    configurable: true,
    writable: true,
    enumerable: true
});
Object.defineProperty(user, "fullname", {
    get: function() {
        return this.firstname + ' ' + this.surname;
    },
    set: function(value) {
        var splitted = value.split(' ');
        this.firstname = splitted[0];
        this.surname = splitted[1];
    }
});
console.log(user.fullname);
user.fullname = "Petya Popkin";
console.log(user.fullname);

// можно указывать при создании объекта через литерал объекта.
var user2 = {
    firstname: "Vasya",
    get name() { return this.firstname; },
    set name(value) { this.firstname = value; }
};
console.log(user2.name);

// несколько свойств сразу
Object.defineProperties(user2, {
    firstName: {
        value: "Petya"
    },
    surname: {
        value: "Ivanov"
    },
    fullName: {
        get: function() {
            return this.firstName + ' ' + this.surname;
        }
    }
});
console.log(user2.fullName);

// возвратить все enumerable свойства объекта
Object.keys(user2);

// возвратить все свойства объекта
Object.getOwnPropertyNames(user2);

// Запрещает добавление, удаление и изменение свойств, все текущие свойства
// делает configurable: false, writable: false.
Object.freeze(user2);

// Возвращает true, если добавление, удаление и изменение свойств объекта
// запрещено, и все текущие свойства являются configurable: false,
// writable: false.
Object.isFrozen(user2);

// Запрещает добавление и удаление свойств, все текущие свойства делает
// configurable: false.
Object.seal(user2);

// Возвращает true, если добавление и удаление свойств объекта запрещено,
// и все текущие свойства являются configurable: false.
Object.isSealed(user2);

})();

// статические свойства и методы
(function() {
function Article() {
    Article.count++;
}
Article.count = 0;
Article.showCount = function() { return this.count; };
var articles = [new Article(), new Article(), new Article()];
console.log(Article.showCount()); // 3

// фабричные методы
Article.create = function() {
    var article = new Article();
    article.param = 'iam param';
    return article;
};
console.log(Article.create());
})();

// вызов функции с произвольным this контекстом
(function() {
function showFullName(param1, param2) {
    return this.fullName + " " + this.lastName;
}
var user = {
    firstName: "Vasiliy",
    lastName: "Petrov"
};
showFullName.call(user, "firstParam", "secondParam");
})();

// одалживание метода (method borrowing)
function printArgs() {
    arguments.join = Array.prototype.join; // [].join
    return arguments.join(':');
}
console.log(printArgs(1, 2, 3, 4, 5));

// как сделать массив из arguments (который по-умолчанию объект)
function makeArrayFromArgs() {
    return Array.prototype.slice.call(arguments);
}
console.log(makeArrayFromArgs(1, 2, 3, 4, 5));

// apply получает не явное перечисление аргументов, а массив из них
arr = [];
arr.push(1);
arr.push(2);
arr.push(3);
console.log(Math.max.apply(null, arr)); // null может быть Math, но не используется

// таймауты и проблемы с контекстом
(function() {
//setTimeout(function() { console.log("timeout expired"); }, 1);

// в данном случае контекст не передастся, а только ссылка на функцию
var user = {
    firstname: "Vasya",
    sayHi: function() { console.log(this.firstname); }
};
//setTimeout(user.sayHi, 1);

// нужно передать контекст тоже
//setTimeout(function() { user.sayHi(); }, 1);

// привязали контекст с помощью встроенного bind
// он вернет обертку, чтобы вызвать позже с определенным контекстом
//setTimeout(user.sayHi.bind(user), 1);

// при помощи bind можно каррировать (partial function)
function mul(a, b) { return a * b; }
var double = mul.bind(null, 2); // в double теперь будут 1 аргумент - b

// bind
function bind(func, context) {
    return function() {
        return func.apply(context, arguments);
    };
}

// using decorators
function checkPermissionsDecorator(f) {
    return function() {
        if (isAdmin())
            return f.apply(this, arguments);
        else
            console.log('Wrong privilegies!');
    };
}

// как вывести точный тип переменной (typeof не дает точного ответа)
// выводит точное имя класса
// но работает только для встроенных типов
// для типов пользователя не работает
console.log({}.toString.call(123)); // Number
console.log({}.toString.call("asd")); // String
console.log({}.toString.call([])); // Array
console.log({}.toString.call(new Date())); // Date
function getClass(obj) {
    return {}.toString.call(obj).slice(8, -1);
}
console.log(getClass([])); // Array
function TempUser() {}
var tempUser = new TempUser();
console.log(getClass(tempUser)); // Object

// проверить тип класса объекта легко с помощью instanceof
console.log(tempUser instanceof TempUser); // true
console.log([] instanceof Array); // true

})();

// работа с JSON
(function() {
var numbers = "[0, 1, 2, 3]";
numbers = JSON.parse(numbers); // create array

var user = '{ "name": "Вася", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';
user = JSON.parse(user); // create object

// парсинг значение ключей
// функциональный параметр reviver вызывается для каждого обрабатываемого значения.
var str = '{"title":"Конференция","date":"2014-11-30T12:00:00.000Z"}';
var event = JSON.parse(str, function (key, value) {
    if (key === 'date')
        return new Date(value);
    return value;
});
console.log(event.date.getDate()); // current month

// сериализация
var event = {
  title: "Конференция",
  date: "сегодня"
};
str = JSON.stringify(event);
console.log(str); // {"title":"Конференция","date":"сегодня"}


// можно указать поля, которые будут сериализоваться
user = {
  name: "Вася",
  age: 25,
  window: {asdsd: 123456}
};
console.log(JSON.stringify(user, ["name", "age"])); // {"name":"Вася","age":25}

// либо, так же, как и при parse, можно вызываться функцию обработки
str = JSON.stringify(user, function(key, value) {
    if (key === 'window')
        return undefined;
    return value;
}, 4 /*красивое форматирование 4 пробелами*/);
console.log(str);
})();

// исключения
try {
    var data = '{"age": 30}';
    user = JSON.parse(data);
    if (!user.name)
        throw SyntaxError("Wrong data");
} catch (e) {
    console.log('Error: ' + e.name + ': ' + e.message);
} finally {
    // как обычно
}

//global.onerror = function() { console.log('Something happened'); };
//throw SyntaxError("asd");

// function like OOP
(function() {
    function CoffeeMachine(power, capacity) {
        // private variables
        var WATER_HEAT_CAPACITY = 4200;
        var self = this;
        var waterAmount = 0;

        // private functions
        function getBoilTime() {
            return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
        }

        function onReady() {
            console.log("Coffee is ready!");
        }

        // public methods
        this.run = function() {
            //setTimeout(onReady, getBoilTime());
        };

        this.waterAmount = function(amount) {
            if (!arguments.length)
                return waterAmount;
            if (amount < 0)
                throw new Error("Value must be positive!");
            if (amount > capacity)
                throw new Error("Too much water!(max = " + capacity + ")");
            waterAmount = amount;
        };
    }

    var machine = new CoffeeMachine(1000000, 500);
    machine.waterAmount(200);
    machine.run();
})();

// functional inheritance
(function() {
    function Machine(power) {
        var self = this;

        self._enabled = false;
        self._power = power;

        this.enable = function() {
            self._enabled = true;
        };

        this.disable = function() {
            self._enabled = false;
        };
    }

    function CoffeeMachine(power) {
        Machine.apply(this, arguments); // inheritance

        var waterAmount = 0;

        this.setWaterAmount = function(amount) {
            waterAmount = amount;
        };

        // function redefinition
        var parentEnable = this.enable;
        this.enable = function() {
            parentEnable(); // its doesnot use this directly and can be called
            this.run();
        };

        this.run = function() {
            console.log('Coffee is ready!');
        };
    }

    var coffeeMachine = new CoffeeMachine(1000000);
    coffeeMachine.setWaterAmount(100);
    coffeeMachine.enable();
})();

// inheritance with proto (not portable)
(function() {
    // rabbit should not have its own eats or proto search would be disabled.
    var animal = { eats: true };
    var rabbit = { jumps: true, __proto__: animal /* deprecated */ };
    console.log('Rabbit can: jumps: ' + rabbit.jumps + ', eats: ' + rabbit.eats);
    rabbit.hasOwnProperty('jumps'); // true
    rabbit.hasOwnProperty('eats'); // false

    // Use object as collection without Object properties and methods by proto
    var data = Object.create(null);
    // data.toString; // undefined
})();

// inheritance with prototype property
(function() {
    var animal = { eats: true };

    function Rabbit(name) {
        this.name = name;
    }

    Rabbit.prototype = animal; // only when using new keyword and with objects

    // now Rabbit.prototype.constructor = Rabbit
    var rabbit = new Rabbit("Krol");
    console.log('Krol can eats: ' + rabbit.eats); // inheritance works
    var rabbit2 = new rabbit.constructor("Krol2");
    console.log(rabbit.constructor);
    console.log(Rabbit.prototype.constructor);

    console.log('-----------------');
    console.log(Rabbit.prototype.constructor === rabbit.constructor); // true
    console.log(Rabbit.prototype.constructor === Object); // true
    console.log(Rabbit.prototype.constructor === Function); // false
    console.log('-----------------');
    console.log(Rabbit.prototype instanceof Object); // true
    console.log(Rabbit.prototype instanceof Function); // false
    console.log(Rabbit.prototype.constructor instanceof Object); // true
    console.log(Rabbit.prototype.constructor instanceof Function); // true
    console.log('-----------------');
    console.log(Rabbit.prototype === rabbit); // false
    console.log(Rabbit.prototype === animal); // true

    var obj = {};
    console.log("\nCheckin object inheritance");
    console.log(obj.toString === Object.prototype.toString);
    console.log(obj.__proto__ === Object.prototype);
    console.log("\n");

    // primitive types does not have prototype.
    // they temporarily convert to objects for method calling if need

    // Add repeat to all strings
    String.prototype.repeat = function(times) {
        return new Array(times+1).join(this);
    };
    console.log("ok".repeat(3));

    // Add each for all objects
    Object.prototype.each = function(f) {
        for (var prop in this) {
            if (!this.hasOwnProperty(prop))
                continue;
            var value = this[prop];
            f.call(null, prop, value);
        }
    };

    var user = {
        name: "Vasya",
        age: 25
    };
    user.each(function(prop, value) { console.log(prop + ': ' + value); });
})();

// own classes though prototype
(function() {
    // declare function-constructor
    function Animal(name) {
        this.name = name;
        this.speed = 0;
        console.log(this.name + ' speed ' + this.speed);
    }

    // methods and properties for all class objects
    Animal.prototype.run = function(speed) {
        this.speed += speed;
        console.log(this.name + ' running, speed ' + this.speed);
    };

    Animal.prototype.stop = function() {
        this.speed = 0;
        console.log(this.name + " stopped");
    };

    var animal = new Animal('Zver');
    animal.run(5);
    animal.run(5);
    animal.stop();
})();

// inheritance with prototyping
(function() {
    console.log('\nTesting inheritance with prototyping {');

    function Animal(name) {
        this.name = name;
        this.speed = 0;
    }

    Animal.prototype.run = function(speed) {
        this.speed += speed;
        console.log(this.name + ' is running, speed ' + this.speed);
    };

    Animal.prototype.stop = function() {
        this.speed = 0;
        console.log(this.name + ' is stopped');
    };

    function Rabbit(name) {
        // calling parent constructor
        Animal.apply(this, arguments);
        // this.name = name;
        // this.speed = 0;
    }

    // like all default js objects
    // create object for prototype which has __proto__,
    // indicatited on Animal.prototype
    Rabbit.prototype = Object.create(Animal.prototype);

    Rabbit.prototype.jump = function() {
        this.speed++;
        console.log(this.name + ' is jumping');
    };

    // extend parent method
    // do not forget to use this
    Rabbit.prototype.run = function() {
        Animal.prototype.run.apply(this, arguments);
        this.jump();
    };

    var rabbit = new Rabbit('Krol');
    rabbit.run(3);
    rabbit.run(30);
    rabbit.stop();
    console.log(rabbit instanceof Rabbit);
    console.log(rabbit instanceof Animal);
    console.log(rabbit instanceof Object);

    console.log('} End of testing inheritance with prototyping\n');

    // custom exceptions
    // общего вида "наша" ошибка
    function CustomError(message) {
      this.name = "CustomError";
      this.message = message;

      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, this.constructor);
      } else {
        this.stack = (new Error()).stack;
      }
    }

    CustomError.prototype = Object.create(Error.prototype);
    CustomError.prototype.constructor = CustomError;

    // наследник
    function PropertyError(property) {
      CustomError.call(this, "Отсутствует свойство " + property)
      this.name = "PropertyError";

      this.property = property;
    }

    PropertyError.prototype = Object.create(CustomError.prototype);
    PropertyError.prototype.constructor = PropertyError;

    // и ещё уровень
    function PropertyRequiredError(property) {
      PropertyError.call(this, property);
      this.name = 'PropertyRequiredError';
      this.message = 'Отсутствует свойство ' + property;
    }

    PropertyRequiredError.prototype = Object.create(PropertyError.prototype);
    PropertyRequiredError.prototype.constructor = PropertyRequiredError;

    // использование
    var err = new PropertyRequiredError("age");

    // пройдёт проверку
    console.log(err instanceof PropertyRequiredError); // true
    console.log(err instanceof PropertyError); // true
    console.log(err instanceof CustomError); // true
    console.log(err instanceof Error); // true
})();

// modern js
(function() {
// var life time is scope block {...}, if, while...
{
    let x1 = 1;
    console.log('let x1 = ' + x1);
}
console.log('after scope let x1 = ' + typeof(x1));

{
    const x1 = 5;
    // x1 = 6; // error
}
console.log('after scope const x1 = ' + typeof(x1));

{
    let [firstname, lastname] = ["Vasya", "Pupkin"];
    console.log("let [firstname, lastname], firstname = " + firstname + ", lastname = " + lastname);

    let [, , third] = "1 2 3".split(" ");
    console.log("let [, , third] third = " + third);

    let [head, ...tail] = "1 2 3 4 5".split(" ");
    console.log("let [head, ...tail] head = " + head + ", tail = " + tail);

    let [undef1, undef2] = [];
    console.log("let [undef1, undef2] undef1 = " + undef1 + ", undef2 = " + undef2);

    let [def1="default value 1", def2="default value 2"] = [];
    console.log('let [def1="default 1", def2="default 2"] def1 = ' + def1 + ", def2 = " + def2);

    let options = {
        title: "Menu",
        width: 100,
        height: 200
    };
    let {somevar:s='3', title, width, height} = options;
    console.log('title = ' + title + ', width = ' + width + ', height = ' + height + ', s = ' + s);

    // update existing variable
    // braces because {} is scope by default / not expression
    ({height, width} = {height:1, width:2});
}

function test_fn(title="default title", width=100, height=200) {
    console.log("test_fn: " + title + ", " + width + ", " + height);
}
test_fn("asd", undefined, 2); // undefined skipped

function test_fn2(head, ...tail) {
    console.log("test_fn2: " + head + ", tail = " + tail);
}
test_fn2(1, 2, 3, 4, 5, 6, 7);
let arr = [1, 2, 3, 4, 5];
test_fn2(...arr);
test_fn2();

// more difficult unpacking in function arguments
function test_fn3({title, width, height:h=100} = {}) {/*use title,width,height*/}
test_fn3({title: "some title", width: 200, height: 300});
test_fn3();

// function have names
console.log(test_fn3.name);

// => function declaration
// caution: => functions do not have they own 'this' or arguments
let inc = x => x + 1;
console.log('inc 1 = ' + inc(1));

let sum = (x, y) => x + y;
console.log('sum 2 3 = ' + sum(2, 3));

let some_fn = () => {
    // some statements
};

console.log(`my
multiline
string`);

let a1 = "first variable", a2 = "second variable";
console.log(`(${a1}) and (${a2})`);

// update object dictionary
let user = { name: "Вася" };
let visitor = { isAdmin: false, visits: true };
let admin = { isAdmin: true };
Object.assign(user, visitor, admin);
console.log(user); // { name: 'Вася', isAdmin: true, visits: true }

// cloning object
let clone = Object.assign({}, user);

// new way to create object methods and setters / getters
let some_object = {
    _name: "Vasya",
    sayHi() { console.log(this._name); },
    get name() { return this._name; },
    set name(value) { this._name = value; }
};
some_object.sayHi();
console.log(some_object.name = "asdsd");
console.log(some_object.name);

// Only new standart es6 has [[HomeObject]] property for methods
// methods, declared as methodName: function() {} dont have it
let animal = {
    walk() { console.log("animal walk"); }
};
let rabbit = {
    __proto__: animal,
    walk() {
        super.walk();
        console.log('rabbit walk');
    }
};
rabbit.walk();

// NEW CLASS SYNTAX
// User can be called with new only
class User {
    constructor(name) { this._name = name; }
    sayHi() { console.log(this._name); }
    get name() { return this._name; }
    set name(value) { this._name = value; }
    static get some_constant() { return "menu"; }
}
let u = new User("Vasya");
u.sayHi();
console.log(User.some_constant);

// Formin standart prototype chain.
// methods of Rabbit -> in Rabbit.prototype
// methods of Animal -> in Animal.prototype
// they related with __proto__
// -> Rabbit.prototype.__proto__ = Animal.prototype
class Animal {
    constructor(name) { this._name = name; }
    walk() { console.log(`Animal ${this._name} walk()`); }
}

class Rabbit extends Animal {
    // if dont declared - uses parent constructor
    constructor(name) { super(name); }
    walk() { super.walk(); console.log(`Rabbit ${this._name} walk()`); }
}

new Rabbit('Vasya').walk();
console.log(new Rabbit('Vasya')._name);
})();

// iterators
(function() {
for (let value of [1, 2, 3]) ; // by elements in array
for (let value of "abcdefg") ; // by chars in string

// how to create iterator for object
let range = {
    from: 1,
    to: 5
};
range[Symbol.iterator] = function() {
    let current = this.from;
    let last = this.to;
    return {
        next() {
            if (current <= last) {
                return {
                    done: false,
                    value: current++
                };
            }
            else {
                return {
                    done: true
                };
            }
        }
    };
};
for (let num of range)
    console.log(num);
console.log(...range); // 1 2 3 4 5

// get iterator explicitly
let str = "Hello";
let iterator = str[Symbol.iterator]();
while (true) {
    let result = iterator.next();
    if (result.done)
        break;
    console.log(result.value);
}

// Map do not converts types and saves as is
// for raw objects keys - only stringss
let map1 = new Map([
  ['1',  'str1'],
  [1,    'num1'],
  [true, 'bool1']
]);

let map = new Map();

map.set('1', 'str1');   // ключ-строка
map.set(1, 'num1');     // число
map.set(true, 'bool1'); // булевое значение

console.log(map.get(1)); // 'num1'
console.log(map.get('1')); // 'str1'
console.log(map.size); // 3

map.delete('1'); // true
map.has(1); // true
map.clear();
map.keys();
map.values();
map.entries(); // [key, value]

// Set for unique values
let set = new Set();

let vasya = {name: "Вася"};
let petya = {name: "Петя"};
let dasha = {name: "Даша"};

// посещения, некоторые пользователи заходят много раз
set.add(vasya);
set.add(petya);
set.add(dasha);
set.add(vasya);
set.add(petya);

// set сохраняет только уникальные значения
console.log(set.size); // 3

set.delete(dasha);
set.has(dasha); // false
set.clear();

let Person = (
     function() {
          let privateData = new WeakMap();

          function Func(name) {
               let obj = { name: name };
               privateData.set(this, obj);
          }

          Func.prototype.getName = function() {
               return privateData.get(this).name;
          };

          return Func;
     }
)();

let vasya1 = new Person( 'Вася' );
let petya2 = new Person( 'Петя' );

alert( vasya1.getName() );      //  Вася
alert( petya2.getName() );      //  Петя
})();

})();
