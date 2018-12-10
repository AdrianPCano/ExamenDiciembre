const protoRick = {
    id: false,
    printIntroduction: function () {
        console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    }
};

function protoRick() {
    this.id = "C-137";
    this.ondas = "altas";
}

function habla() {
    this.SpeakNow = "Es Rick-dículo!";
}

habla.prototype.getHabla = function () {
    return this.habla;
}



function MrMeeseeks() {
    this.messageOnCreate = "I'm Mr Meeseeks! Look at meeee!";
    this.messageOnRequest = ["Oooh yeah! Can do!",
        "Yes sireee!" ,
        "Oh, yeah!, Yes, ma'am!"];
}

MrMeeseeks.prototype.speakOnCreate = function() {
    console.log(this.messageOnCreate);
};