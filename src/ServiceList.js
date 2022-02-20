const testImageOne = require('./assets/testImageOne.jpg');
const testImageTwo = require('./assets/testImageTwo.jpg');

export const ServiceList = [
    {
        service: 'Real Estate Photography',
        id: 1,
        pricing: '$150',
        services: [
            'Professional real estate photography.',
            'Branded and unbranded property websites.',
            '24 hour turnaround.'
        ],
        productVariants: [
            {
                size: '0-3000',
                numberOfImages: 25,
                price: '$150'
            },
            {
                size: '3001-4000',
                numberOfImages: 30,
                price: '$175'
            },
            {
                size: '4001-5000',
                numberOfImages: 35,
                price: '$200'
            },
            {
                size: '5001-6000',
                numberOfImages: 40,
                price: '$225'
            },
            {
                size: '6000+',
                numberOfImages: 50,
                price: '$250'
            },
        ],
        timeBracket: 'short', //Maybe another way?
        mainImageUrl: `url(${testImageOne})`,
        linkAddress: 'real-estate-photography'
    },
    {
        service: 'Twilight Photography',
        id: 2,
        pricing: '$150',
        services: [
            'Update This',
        ],
        productVariants: [
            {
                size: '0-3000',
                numberOfImages: 25,
                price: '$150'
            },
            {
                size: '3001-4000',
                numberOfImages: 30,
                price: '$175'
            },
            {
                size: '4001-5000',
                numberOfImages: 35,
                price: '$200'
            },
            {
                size: '5001-6000',
                numberOfImages: 40,
                price: '$225'
            },
            {
                size: '6000+',
                numberOfImages: 50,
                price: '$250'
            },
        ],
        timeBracket: 'short',
        mainImageUrl: `url(${testImageOne})`,
        linkAddress: 'twilight-photography'
    },
    {
        service: 'Drone Photography',
        id: 3,
        pricing: '$150',
        services: [
            'Up to 20 professional aerial drone photos.',
            'This is a base service. You can order drone photography at a discounted rate when selecting another base service.'
        ],
        productVariants: [
            {
                size: '0-3000',
                numberOfImages: 25,
                price: '$150'
            },
            {
                size: '3001-4000',
                numberOfImages: 30,
                price: '$175'
            },
            {
                size: '4001-5000',
                numberOfImages: 35,
                price: '$200'
            },
            {
                size: '5001-6000',
                numberOfImages: 40,
                price: '$225'
            },
            {
                size: '6000+',
                numberOfImages: 50,
                price: '$250'
            },
        ],
        timeBracket: 'short',
        mainImageUrl: `url(${testImageTwo})`,
        linkAddress: 'drone-photography'
    },
    {
        service: '360 Matterport Tours',
        id: 4,
        pricing: '$125',
        services: [
            '360 Matterport tour.',
            'Branded and unbranded property websites.',
            '24 hour turnaround'
        ],
        productVariants: [
            {
                size: '0-3000',
                numberOfImages: null,
                price: '$125'
            },
            {
                size: '3001-4000',
                numberOfImages: null,
                price: '$150'
            },
            {
                size: '4001-5000',
                numberOfImages: null,
                price: '$200'
            },
            {
                size: '5001-6000',
                numberOfImages: null,
                price: '$250'
            },
            {
                size: '6000+',
                numberOfImages: null,
                price: '$300'
            },
        ],
        timeBracket: 'long',
        mainImageUrl: `url(${testImageOne})`,
        linkAddress: '360-matterport'
    },
    {
        service: 'Virtual Staging',
        id: 5,
        pricing: '$150',
        services: [
            'Update This',
        ],
        productVariants: [
            {
                size: '0-3000',
                numberOfImages: 25,
                price: '$150'
            },
            {
                size: '3001-4000',
                numberOfImages: 30,
                price: '$175'
            },
            {
                size: '4001-5000',
                numberOfImages: 35,
                price: '$200'
            },
            {
                size: '5001-6000',
                numberOfImages: 40,
                price: '$225'
            },
            {
                size: '6000+',
                numberOfImages: 50,
                price: '$250'
            },
        ],
        timeBracket: 'short',
        mainImageUrl: `url(${testImageOne})`,
        linkAddress: 'virtual-staging'
    },
    {
        service: 'Real Estate Videos',
        id: 6,
        pricing: '$200',
        services: [
            'Highlight your listing and get more views.',
            "Don't just sell the home, sell the lifestyle.",
            'Drone video included.',
            'Branded and unbranded property websites.',
            '48 hour turnaround.'
        ],
        productVariants: [
            {
                size: '0-3000',
                numberOfImages: null,
                price: '$200'
            },
            {
                size: '3001-4000',
                numberOfImages: null,
                price: '$250'
            },
            {
                size: '4001-5000',
                numberOfImages: null,
                price: '$300'
            },
            {
                size: '5001-6000',
                numberOfImages: null,
                price: '$350'
            },
            {
                size: '6000+',
                numberOfImages: null,
                price: '$400'
            },
        ],
        timeBracket: 'long',
        mainImageUrl: `url(${testImageOne})`,
        linkAddress: 'real-estate-videos'
    },
    {
        service: 'Portrait & Headshots',
        id: 7,
        pricing: '$150',
        services: [
            'Update This',
        ],
        productVariants: [
            {
                size: '0-3000',
                numberOfImages: 25,
                price: '$150'
            },
            {
                size: '3001-4000',
                numberOfImages: 30,
                price: '$175'
            },
            {
                size: '4001-5000',
                numberOfImages: 35,
                price: '$200'
            },
            {
                size: '5001-6000',
                numberOfImages: 40,
                price: '$225'
            },
            {
                size: '6000+',
                numberOfImages: 50,
                price: '$250'
            },
        ],
        timeBracket: 'short',
        mainImageUrl: `url(${testImageOne})`,
        linkAddress: 'portraits'
    },
    {
        service: 'Live Events',
        id: 8,
        pricing: '$150',
        services: [
            'Update This',
        ],
        productVariants: [
            {
                size: '0-3000',
                numberOfImages: 25,
                price: '$150'
            },
            {
                size: '3001-4000',
                numberOfImages: 30,
                price: '$175'
            },
            {
                size: '4001-5000',
                numberOfImages: 35,
                price: '$200'
            },
            {
                size: '5001-6000',
                numberOfImages: 40,
                price: '$225'
            },
            {
                size: '6000+',
                numberOfImages: 50,
                price: '$250'
            },
        ],
        timeBracket: 'long',
        mainImageUrl: `url(${testImageOne})`,
        linkAddress: 'live-events'
    },
    {
        service: 'Product Photography',
        id: 9,
        pricing: '$150',
        services: [
            'Update This',
        ],
        productVariants: [
            {
                size: '0-3000',
                numberOfImages: 25,
                price: '$150'
            },
            {
                size: '3001-4000',
                numberOfImages: 30,
                price: '$175'
            },
            {
                size: '4001-5000',
                numberOfImages: 35,
                price: '$200'
            },
            {
                size: '5001-6000',
                numberOfImages: 40,
                price: '$225'
            },
            {
                size: '6000+',
                numberOfImages: 50,
                price: '$250'
            },
        ],
        timeBracket: 'short',
        mainImageUrl: `url(${testImageOne})`,
        linkAddress: 'product-photography'
    }
];

export const Packages = [
    {
        id: 1,
        service: 'Drone Photography & Drone Video Package',
        services: [
            'This package is perfect for plots of land and ranches.',
            '15 aerial drone photos.',
            'Drone video of the property.',
            'Branded and unbranded property website.',
            '48 hour turnaround.'
        ],
        price: '$225'
    },
    {
        id: 2,
        service: 'Deluxe Package',
        services: [
            'Professional real estate photography.',
            'Property video of your listing.',
            '360 Matterport Tour.',
            'Branded and unbranded property website.',
            '48 hour turnaround.'
        ],
        price: '$400',
        productVariants: [
            {
                size: '0-3000',
                numberOfImages: 25,
                price: '$400'
            },
            {
                size: '3001-4000',
                numberOfImages: 30,
                price: '$450'
            },
            {
                size: '4001-5000',
                numberOfImages: 35,
                price: '$500'
            },
            {
                size: '5001-6000',
                numberOfImages: 40,
                price: '$550'
            },
            {
                size: '6000+',
                numberOfImages: 50,
                price: '$600'
            },
        ],
    },
    {
        id: 3,
        service: 'Premier Package',
        services: [
            'Professional real estate photography.',
            'Property video of your listing.',
            'Drone video of the property.',
            '360 Matterport tour.',
            '5 Aerial drone photos of your listing.',
            '5 Neighborhood amenity photos.',
            'Property lines inserted on select aerial photos.',
            '2D floor plan included.',
            'Branded and unbranded property website.',
            '48 hour turnaround.'
        ],
        price: '$500',
        productVariants: [
            {
                size: '0-3000',
                numberOfImages: 25,
                price: '$500'
            },
            {
                size: '3001-4000',
                numberOfImages: 30,
                price: '$550'
            },
            {
                size: '4001-5000',
                numberOfImages: 35,
                price: '$600'
            },
            {
                size: '5001-6000',
                numberOfImages: 40,
                price: '$650'
            },
            {
                size: '6000+',
                numberOfImages: 50,
                price: '$700'
            },
        ],
    },
    
];