export default function validate(input) {
    let error = {};
    let isPhoto = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w-]+)+[\w\-_~:/?#[\]@!&',;=.]+(?:png|jpg|jpeg|gif|svg)+$/gi

    if (!input?.title.trim()) {
        error.title = 'La receta debe tener título.';
    } else if (/\d{5}/g.test(input?.title)) {
        error.title = 'El título no puede llevar 5 números seguidos.';
    }

    if (!isPhoto.test(input.image)) {
        error.image = 'El vínculo no coincide para una imágen.'
    }

    if (!input?.summary.trim()) {
        error.summary = 'La receta debe tener summary.';
    } else if (/\d{5}/g.test(input?.summary)) {
        error.summary = 'El summary no puede llevar 5 números seguidos.';
    }

    if (/\d{5}/g.test(input?.steps)) error.steps = 'El paso a paso no puede llevar 5 números seguidos';

    if (!/^(-?)\d+$/.test(input?.spoonacularScore)) {
        error.spoonacularScore = 'SpoonacularScore debe ser un número.'
    } else if (input?.spoonacularScore < 0 || input?.spoonacularScore > 100) {
        error.spoonacularScore = 'spoonacularScore debe ser entre 0 y 100 puntos.'
    }

    if (!/^(-?)\d+$/.test(input?.healthScore)) {
        error.healthScore = 'healthScore debe ser un número.'
    } else if (input?.healthScore < 0 || input?.healthScore > 100) {
        error.healthScore = 'healthScore debe ser entre 0 y 100 puntos.'
    }

    return error

};