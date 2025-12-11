// services.js - Data services
angular.module('bosClotherApp')
    .factory('DataService', function() {
        // Sample products data
        const products = [
            {
                id: 1,
                name: 'Monochrome Ankara Co-Ordinate Set',
                category: 'dresses',
                price: 30000,
                image: 'image/dress 1.webp',
                description: 'Black-and-white patterned trousers with a matching kimono jacket.'
            },
            {
                id: 2,
                name: 'Black & White Kaftan Dress',
                category: 'dresses',
                price: 25000,
                image: 'image/dress 2.jpg',
                description: 'Flowing kaftan with bold circular and stripe patterns'
            },
            {
                id: 3,
                name: 'Adire Color-Block Maxi',
                category: 'casual',
                price: 25000,
                image: 'image/dress 3.jpg',
                description: 'Three-tone maxi dress with traditional Adire patterns'
            },
            {
                id: 4,
                name: 'Silk Cocktail Dress',
                category: 'dresses',
                price: 30000,
                image: 'image/dress 13.jpg',
                description: 'Flowing silk dress perfect for evening events'
            },
            {
                id: 5,
                name: 'Tailored Tuxedo',
                category: 'Casual',
                price: 30000,
                image: 'image/dress 12.webp',
                description: 'Formal tuxedo for black-tie events'
            },
            {
                id: 6,
                name: 'Cotton Summer Dress',
                category: 'casual',
                price: 129,
                image: 'image/dress 6.jpg',
                description: 'Light cotton dress for warm summer days'
            },
            {
                id: 7,
                name: 'Cotton Summer Dress',
                category: 'casual',
                price: 129,
                image: 'image/dress 4.jpg',
                description: 'Light cotton dress for warm summer days'
            },
             {
                id: 8,
                name: 'Cotton Summer Dress',
                category: 'casual',
                price: 129,
                image: 'image/dress 5.jpg',
                description: 'Light cotton dress for warm summer days'
            },
             {
                id: 9,
                name: 'Cotton Summer Dress',
                category: 'casual',
                price: 129,
                image: 'image/dress 7.jpg',
                description: 'Light cotton dress for warm summer days'
            },
             {
                id: 10,
                name: 'Cotton Summer Dress',
                category: 'casual',
                price: 129,
                image: 'image/dress 9.jpg',
                description: 'Light cotton dress for warm summer days'
            },
             {
                id: 11,
                name: 'Cotton Summer Dress',
                category: 'casual',
                price: 129,
                image: 'image/dress 10.jpg',
                description: 'Light cotton dress for warm summer days'
            },
             {
                id: 12,
                name: 'Cotton Summer Dress',
                category: 'casual',
                price: 129,
                image: 'image/dress 8.jpg',
                description: 'Light cotton dress for warm summer days'
            },
             {
                id: 13,
                name: 'Cotton Summer Dress',
                category: 'casual',
                price: 129,
                image: 'image/dress 11.jpg',
                description: 'Light cotton dress for warm summer days'
            }

        ];

        // Sample fabrics data
        const fabrics = [
            {
                id: 1,
                name: 'Italian Silk',
                type: 'Silk',
                price: 89,
                image: 'image/fabric 1.jpg',
                description: 'Premium grade silk from Como, Italy',
                weight: 'Light',
                color: 'Various'
            },
            {
                id: 2,
                name: 'Scottish Wool',
                type: 'Wool',
                price: 120,
                image: 'image/fabric 2.jpg',
                description: 'Heavy-weight wool from Scottish highlands',
                weight: 'Medium',
                color: 'Navy, Grey, Black'
            },
            {
                id: 3,
                name: 'Egyptian Cotton',
                type: 'Cotton',
                price: 45,
                image: 'image/fabric 3.jpg',
                description: 'Extra-long staple cotton for durability',
                weight: 'Light',
                color: 'White, Ecru'
            },
            {
                id: 4,
                name: 'French Linen',
                type: 'Linen',
                price: 65,
                image: 'image/fabric 4.jpg',
                description: 'Pure linen from Normandy, France',
                weight: 'Medium',
                color: 'Natural, Beige'
            },
            {
                id: 5,
                name: 'Japanese Denim',
                type: 'Denim',
                price: 75,
                image: 'image/fabric 5.jpg',
                description: 'Selvedge denim from Okayama, Japan',
                weight: 'Heavy',
                color: 'Indigo'
            },
            {
                id: 6,
                name: 'Swiss Voile',
                type: 'Voile',
                price: 55,
                image: 'image/fabric 6.jpg',
                description: 'Sheer cotton voile for delicate garments',
                weight: 'Very Light',
                color: 'Pastels'
            },
             {
                id: 7,
                name: 'Swiss Voile',
                type: 'Voile',
                price: 55,
                image: 'image/fabric 7.jpg',
                description: 'Sheer cotton voile for delicate garments',
                weight: 'Very Light',
                color: 'Pastels'
            },
             {
                id: 8,
                name: 'Swiss Voile',
                type: 'Voile',
                price: 55,
                image: 'image/fabric 8.jpg',
                description: 'Sheer cotton voile for delicate garments',
                weight: 'Very Light',
                color: 'Pastels'
            },
             {
                id: 9,
                name: 'Swiss Voile',
                type: 'Voile',
                price: 55,
                image: 'image/fabric 9.jpg',
                description: 'Sheer cotton voile for delicate garments',
                weight: 'Very Light',
                color: 'Pastels'
            },
             {
                id: 10,
                name: 'Swiss Voile',
                type: 'Voile',
                price: 55,
                image: 'image/fabric 10.jpg',
                description: 'Sheer cotton voile for delicate garments',
                weight: 'Very Light',
                color: 'Pastels'
            },
             {
                id: 11,
                name: 'Swiss Voile',
                type: 'Voile',
                price: 55,
                image: 'image/fabric 11.jpg',
                description: 'Sheer cotton voile for delicate garments',
                weight: 'Very Light',
                color: 'Pastels'
            },
             {
                id: 12,
                name: 'Swiss Voile',
                type: 'Voile',
                price: 55,
                image: 'image/fabric 12.jpg',
                description: 'Sheer cotton voile for delicate garments',
                weight: 'Very Light',
                color: 'Pastels'
            },
             {
                id: 13,
                name: 'Swiss Voile',
                type: 'Voile',
                price: 55,
                image: 'image/fabric 13.jpg',
                description: 'Sheer cotton voile for delicate garments',
                weight: 'Very Light',
                color: 'Pastels'
            },
             {
                id: 14,
                name: 'Swiss Voile',
                type: 'Voile',
                price: 55,
                image: 'image/fabric 14.jpg',
                description: 'Sheer cotton voile for delicate garments',
                weight: 'Very Light',
                color: 'Pastels'
            },
             {
                id: 15,
                name: 'Swiss Voile',
                type: 'Voile',
                price: 55,
                image: 'image/fabric 15.jpg',
                description: 'Sheer cotton voile for delicate garments',
                weight: 'Very Light',
                color: 'Pastels'
            },
             {
                id: 16,
                name: 'Swiss Voile',
                type: 'Voile',
                price: 55,
                image: 'image/fabric 16.jpg',
                description: 'Sheer cotton voile for delicate garments',
                weight: 'Very Light',
                color: 'Pastels'
            },
             {
                id: 17,
                name: 'Swiss Voile',
                type: 'Voile',
                price: 55,
                image: 'image/fabric 17.jpg',
                description: 'Sheer cotton voile for delicate garments',
                weight: 'Very Light',
                color: 'Pastels'
            },
             {
                id: 18,
                name: 'Swiss Voile',
                type: 'Voile',
                price: 55,
                image: 'image/fabric 18.jpg',
                description: 'Sheer cotton voile for delicate garments',
                weight: 'Very Light',
                color: 'Pastels'
            },
             {
                id: 19,
                name: 'Swiss Voile',
                type: 'Voile',
                price: 55,
                image: 'image/fabric 19.jpg',
                description: 'Sheer cotton voile for delicate garments',
                weight: 'Very Light',
                color: 'Pastels'
            },
             {
                id: 20,
                name: 'Swiss Voile',
                type: 'Voile',
                price: 55,
                image: 'image/fabric 20.jpg',
                description: 'Sheer cotton voile for delicate garments',
                weight: 'Very Light',
                color: 'Pastels'
            },
             {
                id: 21,
                name: 'Swiss Voile',
                type: 'Voile',
                price: 55,
                image: 'image/fabric 21.jpg',
                description: 'Sheer cotton voile for delicate garments',
                weight: 'Very Light',
                color: 'Pastels'
            }
        ];

        return {
            getProducts: function() {
                return products;
            },
            
            getFabrics: function() {
                return fabrics;
            },
            
            getProductById: function(id) {
                return products.find(p => p.id === id);
            },
            
            getFabricById: function(id) {
                return fabrics.find(f => f.id === id);
            }
        };
    });