export function filter(allRecipes, option) {
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

        case 'GLUTEN_FREE':
            return allRecipes?.filter(e => e.diets?.includes('gluten free'))

        case 'DAIRY_FREE':
            return allRecipes?.filter(e => e.diets?.includes('dairy free'))

        case 'LACTO_OVO_VEGETARIAN':
            return allRecipes?.filter(e => e.diets?.includes('lacto ovo vegetarian'))

        case 'VEGAN':
            return allRecipes?.filter(e => e.diets?.includes('vegan'))

        case 'PALEOLITHIC':
            return allRecipes?.filter(e => e.diets?.includes('paleolithic'))

        case 'PRIMAL':
            return allRecipes?.filter(e => e.diets?.includes('primal'))

        case 'PESCARIAN':
            return allRecipes?.filter(e => e.diets?.includes('pescarian'))

        case 'FODMAP_FRIENDLY':
            return allRecipes?.filter(e => e.diets?.includes('fodmap friendly'))

        case 'WHOLE_30':
            return (allRecipes?.filter(e => e.diets?.includes('whole 30'))       
                )

        default: return allRecipes
    }
};