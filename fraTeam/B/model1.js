const model = {
    app: {
        isDarkMode: false,
        currentPage: 'myProfilePage', //eller 'activityInfo'
        loggedInUserId: 'lise',
    },
    inputs: {
        search: {
            text: null,
        },
    },
    data: {
        acitivites: [
            {
                id: 1,
                eventName: "Felles klatring",
                dateTime: '2024-04-02 12:00',
                // eventDate: { year: 2024, month: 4, day: 2 },
                // eventTime: { hour: 12, minutes: 0 },
                isPrivate: false,
            },
            {
                id: 2,
                eventName: "Tur i marka",
                eventDate: { year: 2024, month: 3, day: 20 },
                eventTime: { hour: 14, minutes: 0 },
                isPrivate: true,
            },
        ],
        registrations: [
            { userId: 'lise', activityId: 1 },
            { userId: 'lise', activityId: 2 },
        ],
        hobbies: [
            {id: 1, name: "Hike", category: 2},
            {id: 2, name: "Klatring", category: 2},
            {id: 3, name: "Sjakk", category: 3},
        ],
        userHobbies: [
            {userId: 'lise', hobbyId: 1},
        ],
        users: [
            {
                userId: 'lise',
                profilePicture: "lise's png",
                name: "Lise Åstad",
                location: "Oslo",
            },
            {
                userId: 'per',
                profilePicture: "per's png",
                name: "Per Åstad",
                location: "Oslo",
            },
        ],
        sharedActivities: [/* controller henter info fra bruker og profil som blir sett på, sammenligner og sender hit */],
    }
}


/**/

/*
Tre spørsmål: 
1. Hvilke data trenger vi i modellen for å tegne opp 
dette skjermbildet?
2. Bruker inputs
3. Hva kan ev. brukeren gjøre på denne siden - og hva
trenger vi i modellen for det?
*/