
const protoRick = {
    id: "C-137",
    ondas: "altas",
    habla: "Es Rick-dículo!"
};

const protoMorty = {
    id: "earthMorty",
    ondas: "bajas",
    habla: "Oohh man!",
    partner:  protoRick
};

function singletonMorty() {

    const prototipo = new Rick();

    return {
        get: function() {
            return prototipo;
        }
    };
}