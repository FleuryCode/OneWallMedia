const testImageOne = require('./assets/testImageOne.jpg');

export const ServiceList = [
    {
        service: 'Real Estate Photography',
        id: 1,
        pricing: '$150',
        services: [
            'Professional real estate photography',
            'Branded and unbranded property websites'
        ],
        timeBracket: 'short', //Maybe another way?
        mainImageUrl: `url(${testImageOne})`,
        linkAddress: '/real-estate'
    },
    {
        service: 'Twilight Photography',
        id: 2,
        pricing: '$150',
        services: [
            'Replace this',
            'Replace this too'
        ],
        timeBracket: 'short',
        mainImageUrl: `url(${testImageOne})`
    },
    {
        service: 'Drone Photography',
        id: 3,
        pricing: '$150',
        services: [
            'Up to 20 professional aerial drone photos',
            'You can order drone photography at a discounted rate when selecting another base service'
        ],
        timeBracket: 'short',
        mainImageUrl: `url(${testImageOne})`
    },
    {
        service: '360 Matterport Tours',
        id: 4,
        pricing: '$125',
        services: [
            '360 Matterport tour',
            'Branded and unbranded property websites'
        ],
        timeBracket: 'long',
        mainImageUrl: `url(${testImageOne})`
    },
    {
        service: 'Virtual Staging',
        id: 5,
        pricing: '$150',
        services: [
            'Replace this',
            'Replace this too'
        ],
        timeBracket: 'short',
        mainImageUrl: `url(${testImageOne})`
    },
    {
        service: 'Real Estate Videos',
        id: 6,
        pricing: '$200',
        services: [
            'Highlight your listing and get more views',
            "Don't just sell the home, sell the lifestyle",
            'Drone video included'
        ],
        timeBracket: 'long',
        mainImageUrl: `url(${testImageOne})`
    },
    {
        service: 'Portrait & Headshots',
        id: 7,
        pricing: '$150',
        services: [
            'Replace this',
            'Replace this too'
        ],
        timeBracket: 'short',
        mainImageUrl: `url(${testImageOne})`
    },
    {
        service: 'Live Events',
        id: 8,
        pricing: '$150',
        services: [
            'Replace this',
            'Replace this too'
        ],
        timeBracket: 'long',
        mainImageUrl: `url(${testImageOne})`
    },
    {
        service: 'Product Photography',
        id: 9,
        pricing: '$150',
        services: [
            'Replace this',
            'Replace this too'
        ],
        timeBracket: 'short',
        mainImageUrl: `url(${testImageOne})`
    }
];