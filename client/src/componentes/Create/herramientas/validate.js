export default function validate(input) {
    let errors = {};
    if (!input.title) {
        errors.title = 'The title is required';
    } else if (/\d{5}/.test(input.title)) {
        errors.title = 'The title exceeds the num limits.';
    }

    if (!input.steps) {
        errors.steps = 'The steps is required';
    } else if (/\d{5}/.test(input.steps)) {
        errors.steps = 'The steps exceeds the num limits.';
    }

    if (!input.summary) {
        errors.summary = 'The summary is required';
    } else if (/\d{5}/.test(input.summary)) {
        errors.summary = 'The summary exceeds the num limits.';
    }

    if (!input.spoonacularScore) {
        errors.spoonacularScore = 'The spoonacularScore is required';
    } else if (!/\d/.test(input.spoonacularScore)) {
        errors.spoonacularScore = 'The spoonacularScore must be a num.';
    }

    if (!input.healthScore) {
        errors.healthScore = 'The healthScore is required';
    } else if (!/\d/.test(input.healthScore)) {
        errors.healthScore = 'The healthScore must be a num.';
    }

    if (!input.diets.length) {
        errors.diets = 'error';
    } else if (!/(?=.*[0-9])/.test(input.password)) {
        errors.password = 'Password is invalid';
    }
    return errors
};