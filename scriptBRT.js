var NEW_CHAR = "";
var EXISTING_CHAR = "";
var BUTTPRESSED;

const DOT_ARRAY = [
    "DOT1",
    "DOT2",
    "DOT3",
    "DOT4",
    "DOT5",
    "DOT6"
];

const DOT_VALUE = [
    0,
    0,
    0,
    0,
    0,
    0
];

const CHAR = {
    "100000":"A",
    "110000":"B",
    "100100":"C",
    "100110":"D",
    "100010":"E",
    "110100":"F",
    "110110":"G",
    "110010":"H",
    "010100":"I",
    "010110":"J",
    "101000":"K",
    "111000":"L",
    "101100":"M",
    "101110":"N",
    "101010":"O",
    "111100":"P",
    "111110":"Q",
    "111010":"R",
    "011100":"S",
    "011110":"T",
    "101001":"U",
    "111001":"V",
    "010111":"W",
    "101101":"X",
    "101111":"Y",
    "101011":"Z",
    "001111":"#",
    "001111":"#",
}


function FFF(dotnum) {
    console.log('Clicked ', dotnum);
    var element = document.getElementById(dotnum);
    var DOT_NUMBER = DOT_ARRAY.indexOf(dotnum);
    if (DOT_VALUE[DOT_NUMBER] == 0 ) {
        element.style.backgroundColor = "black";
        DOT_VALUE[DOT_NUMBER] = 1;
    }  else {
        element.style.backgroundColor = "white";
        DOT_VALUE[DOT_NUMBER] = 0;
    }
    SHOW_LETTER();
}

function SHOW_LETTER() {
    var CHARCODE = DOT_VALUE.join('');
    console.log(CHARCODE);
    var CHARACTER = CHAR[CHARCODE];
    if (CHARACTER == null) {
        CHARACTER = "";
    }
    console.log(CHARACTER);
    var TXT = document.getElementById("DTEXT");
    TXT.textContent = EXISTING_CHAR + CHARACTER;
    NEW_CHAR = CHARACTER;
}

function ADD_LETTER() {
    console.log("Character Added")
    EXISTING_CHAR = EXISTING_CHAR + NEW_CHAR;
    var TXT = document.getElementById("DTEXT");
    TXT.textContent = EXISTING_CHAR;
    NEW_CHAR = "";

    var element = document.getElementById("BUTT1");
    BUTTPRESSED = element
    element.classList.remove('BUTT');
    element.classList.add('buttonpress');
    element.addEventListener('animationend', BRUH);
    

    for (let i = 0; i < 6; i++) {
        var element = document.getElementById(DOT_ARRAY[i]);
        element.style.backgroundColor = "white";
        DOT_VALUE[i] = 0;
    }

}

function ADD_SPACE() {
    console.log("Space Added");
    EXISTING_CHAR = EXISTING_CHAR + " ";
    SHOW_LETTER();
    
    var element = document.getElementById("BUTT2");
    BUTTPRESSED = element
    element.classList.remove('BUTT');
    element.classList.add('buttonpress');
    element.addEventListener('animationend', BRUH);

}

function CLEAR() {
    console.log("Cleared String");
    EXISTING_CHAR = "";
    for (let i = 0; i < 6; i++) {
        var element = document.getElementById(DOT_ARRAY[i]);
        element.style.backgroundColor = "white";
        DOT_VALUE[i] = 0;
    }
    SHOW_LETTER();

    var element = document.getElementById("BUTT4");
    BUTTPRESSED = element
    element.classList.remove('BUTT');
    element.classList.add('buttonpress');
    element.addEventListener('animationend', BRUH);

}

function DELETE() {
    console.log('Deleted last character');
    EXISTING_CHAR = EXISTING_CHAR.slice(0, -1);
    SHOW_LETTER();

    var element = document.getElementById("BUTT3");
    BUTTPRESSED = element
    element.classList.remove('BUTT');
    element.classList.add('buttonpress');
    element.addEventListener('animationend', BRUH);

}

function BRUH() {
    var element = BUTTPRESSED;
    element.classList.remove('buttonpress');
    element.classList.add('BUTT');
    console.log('Called BRUH');
}
