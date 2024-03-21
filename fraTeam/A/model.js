const model = {
    app: {
        currentpage: 'forside',
        darkMode: false,
    },
    inputs: {
        loginPage: {
            usernameInput: null,
            passwordInput: null,
        },
    
        registryPage: {
            fullnameInput: null,
            usernameInput: null,
            emailOrTlfInput: null,
            birthDateInput: null,
            passwordInput: null,
            passwordRepeatInput: null,
        },

        addNewEventPage: {
            eventNameInput: null,
            startDateInput: null,
            endDateInput: null,
            descriptionInput: null,
            locationInput: null,
            includeFriendInput: null,
        }
    },
    
    data:{
        userInformation: [     
            {   
                fullName: 'Navn Navsen',
                username: 'Navn',
                Email: 'none',
                PhoneNr: '+4700010111',
                birthDate: '1999-10-10',
                password: 'xXxXxXx!',
            }
        ],
        activityInformation: [
            {
                eventName: 'Bowling',
                startDate: '2024-03-15',
                endDate: '2024-03-15',
                description: 'Bowling and drinks with freinds',
                location: 'Oslo',
                includedFriends: 'none',
            }
        ]
    }
}