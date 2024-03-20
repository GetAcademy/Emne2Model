
const model = {
    app: {
        currentPage: null,
    },
    inputs: {
        detail: {
            productId: null,
        },
        products: {
            searchText: 'tastatur',
            layout: 'list', // eller 'table'
            sort: null,
            selectedProductIds: [1, 3],
        }
    },
    products: [
        {
            id: 1,
            imageUrl: '...',
            name: 'Svive Objeron',
            price: 1319,
            inStock: 50,
            rating: 4.5,
            colors: ['brown', 'red'],
            description: 'Full størrelse, mekanisk...',
        },
        {
            id: 2,
            imageUrl: '...',
            name: 'Svive Triton Mini 60 brown',
            price: 499,
            oldPrice: 799,
            inStock: 50,
            rating: 3.5,
            description: '60% gaming tastatur ...',
        }, 
        {
            id: 3,
            imageUrl: '...',
            name: 'Svive Triton Mini 60 red',
            price: 299,
            oldPrice: 799,
            inStock: 50,
            rating: 4.5,
            description: '60% gaming tastatur ...',
        }, 
    ],
};


/*
 Tre spørsmål: 
 1. Hvilke data trenger vi i modellen for å tegne opp 
    dette skjermbildet?
 2. Bruker inputs
 3. Hva kan ev. brukeren gjøre på denne siden - og hva
    trenger vi i modellen for det?
*/