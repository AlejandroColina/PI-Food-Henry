export function filter(allRecipes, option) { //option:  ASC, DESC, ALTASRECETAS, BAJASRECETAS, ALTOSPUNTAJES, BAJOSPUNTAJES
    
    switch (option) {
        case 'ASC':
            return allRecipes?.flat().sort((a, b) => {
                if (a.title < b.title) {
                    return -1
                } else if (a.title > b.title) {
                    return 1
                } else {
                    return 0
                }
            });

        case 'DESC':
            return allRecipes?.flat().sort((a, b) => {
                if (a.title > b.title) {
                    return -1
                } else if (a.title < b.title) {
                    return 1
                } else {
                    return 0
                }
            })

        case 'ALTASRECETAS':
            return allRecipes?.flat().sort((a, b) => {
                if (a.spoonacularScore > b.spoonacularScore) {
                    return -1
                } else if (a.spoonacularScore < b.spoonacularScore) {
                    return 1
                } else {
                    return 0
                }
            });

        case 'BAJASRECETAS':
            return allRecipes?.flat().sort((a, b) => {
                if (a.spoonacularScore < b.spoonacularScore) {
                    return -1
                } else if (a.spoonacularScore > b.spoonacularScore) {
                    return 1
                } else {
                    return 0
                }
            })

        case 'BAJOSPUNTAJES':
            return allRecipes?.flat().sort((a, b) => {
                if (a.healthScore < b.healthScore) {
                    return -1
                } else if (a.healthScore > b.healthScore) {
                    return 1
                } else {
                    return 0
                }
            });

        case 'ALTOSPUNTAJES':
            return allRecipes?.flat().sort((a, b) => {
                if (a.healthScore > b.healthScore) {
                    return -1
                } else if (a.healthScore < b.healthScore) {
                    return 1
                } else {
                    return 0
                }
            })

        default: return allRecipes
    }
};