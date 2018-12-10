
var protoRick = {
    id: "C-137",
    ondas: "altas",
    habla: "Es Rick-dículo!"
};


function singletonMorty() {

    const prototipo = new Rick();

    return {
        get: function() {
            return prototipo;
        }
    };
}