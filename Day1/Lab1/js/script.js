console.log(books);

let app = Vue.createApp({
    data() {
        return {
            books: books,
        }
    },
    methods: {
        formatCurrency(value) {
            return (new Intl.NumberFormat('ar-SA', { 
                style: 'currency', 
                currency: 'SAR', 
            }).format(value));
        },
    },
    mounted() {
    }

}).mount('#mainapp');