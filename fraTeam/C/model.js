let model = {
    app: {
        currentView: null,
        darkMode: true,
        language: 'Norsk',
    },
    input: {
        login: {
            email: null,
            password: null
        },
        home: {
            searchBar: null,
            feed: null,
        },
        searchBar: {
            peopleFeed: null,
            searchBar: null,
            eventFeed: null,
            filter: null,
        },
        calendar: {
            calendar: null,
            unavailableDates: []
        },
        createAccount: {
            name: null,
            email: null,
            password1: null,
            password2: null,
            age: null,
            hobbies: null,
            categories: null,
            bio: null,
        },
    },
    data: {
        tags: ['Gåtur', 'Bowling', 'Andejakt', 'se på Fotballkamp'],
        events: [
            {
                id: 0,
                eventName: 'Gåtur med Bjarne',
                creator: 'Bjarne',
                date: '2024-05-05',
                participants: [],
                price: 10000,
                expGained: 100,
                tags: [0],
                location: 'Skogen langt uti hutiheita'
            }
        ],
        users: [{
            id: 0,
            name: 'kari',
            email: '',
            password: '123abc',
            friendlist: [],
            levelOverview: {
                exp: null,
                level: null,
                unlocks: [],
            },
            settings: {
                darkMode: true,
                style: [],
                language: null,
                userStatistics: [],
                privacyPreferences: null,
                profileImage: null,
                followers: null,
                following: null,
                previousEvents: null,
                upcomingEvents: null,
                eventFeed: null,
            }
        }],
    },
}