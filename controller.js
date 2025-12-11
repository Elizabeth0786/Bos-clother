// controller.js - Main controller
angular.module('bosClotherApp')
    .controller('MainController', function(DataService) {
        const vm = this;
        
        // Initialize state
        vm.activeSection = 'home';
        vm.menuOpen = false;
        vm.activeFilter = 'all';
        vm.cartItems = [];
        vm.shippingCost = 15; // Fixed shipping cost
        
        // Get data from service
        vm.products = DataService.getProducts();
        vm.fabrics = DataService.getFabrics();
        
        // Booking form model
        vm.booking = {
            name: '',
            email: '',
            contact: '',
            service: '',
            message: ''
        };
        
        // Navigation methods
        vm.setActive = function(section) {
            vm.activeSection = section;
            vm.menuOpen = false; // Close mobile menu on navigation
        };
        
        vm.toggleMenu = function() {
            vm.menuOpen = !vm.menuOpen;
        };
        
        // Filter methods for products
        vm.setFilter = function(filter) {
            vm.activeFilter = filter;
        };
        
        vm.filterProducts = function(product) {
            if (vm.activeFilter === 'all') {
                return true;
            }
            return product.category === vm.activeFilter;
        };
        
        // Cart methods
        vm.addToCart = function(item) {
            // Add item to cart
            vm.cartItems.push({
                ...item,
                addedAt: new Date()
            });
            
            // Show notification (in real app, you'd use a toast)
            alert(`${item.name} added to cart!`);
            
            // Update active section to cart if it's not already
            if (vm.activeSection !== 'cart') {
                vm.activeSection = 'cart';
            }
        };
        
        vm.removeFromCart = function(index) {
            vm.cartItems.splice(index, 1);
        };
        
        vm.cartTotal = function() {
            return vm.cartItems.reduce((total, item) => total + item.price, 0);
        };
        
        // View product details (for quick view)
        vm.viewProduct = function(product) {
            alert(`Viewing: ${product.name}\nPrice: $${product.price}\n${product.description || 'No description available.'}`);
        };
        
        // Booking form submission
        vm.submitBooking = function() {
            if (!vm.booking.name || !vm.booking.email || !vm.booking.contact || !vm.booking.service) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // In a real app, you would send this data to a server
            console.log('Booking submitted:', vm.booking);
            
            // Reset form
            vm.booking = {
                name: '',
                email: '',
                contact: '',
                service: '',
                message: ''
            };
            
            alert('Thank you for your booking request! We will contact you within 24 hours.');
        };
        
        // Checkout method (placeholder)
        vm.proceedToCheckout = function() {
            if (vm.cartItems.length === 0) {
                alert('Your cart is empty!');
                return;
            }
            
            // In a real app, this would redirect to a checkout page
            alert(`Proceeding to checkout with ${vm.cartItems.length} items. Total: $${vm.cartTotal() + vm.shippingCost}`);
            console.log('Checkout items:', vm.cartItems);
        };
        
        // Initialize with some sample cart items for testing (remove in production)
        // vm.cartItems = [
        //     {
        //         name: 'Classic Evening Gown',
        //         price: 299,
        //         type: 'Ready-to-Wear'
        //     }
        // ];
    })
    // Add a directive for better image loading
    .directive('imageFallback', function() {
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                element.bind('error', function() {
                    // Fallback to a placeholder image
                    element.attr('src', 'https://via.placeholder.com/400x300/cccccc/666666?text=Fashion+Item');
                });
            }
        };
    });