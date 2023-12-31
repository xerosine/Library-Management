app.component('library', {
    props: {
        libraryBooks: {
            type: Array,
            required: true
        },
        requestedBooks: {
            type: Array,
            required: true
        },
        largeBook: {
            type: Object,
            required: true
        },
        role: {
            type: String,
            required: true,
        }
    },
    template:
    /*html*/
    `
    <div>
        <div class="row ms-1 mb-1">
            <h3 class="ps-1">Library</h3>
        </div>
        <div class="position-relative">
            <div class="row tab">
                <div class="col-12 col-lg-8">
                    <div class="row mb-3">
                        <book-md v-for="(book, index) in libraryBooks" 
                        :key="index" :current-tab="currentTab" 
                        :book="book" @click="bookClick"></book-md>
                    </div>
                </div>
                <div class="col-12 col-lg-4 off-white">
                    <div class="mt-4 ms-2 mb-3 rec-head fw-semibold">Requested Books</div>
                    <div class="d-flex flex-column align-items-center">
                        <book-sm v-for="(book, index) in requestedBooks" 
                        :key="index" :book="book"
                        @click="bookClick"></book-sm>
                    </div>
                </div>
            </div>
            <book-lg :book="largeBook" 
            :role="role" :current-tab="currentTab"
            class="position-absolute top-0 book-lg"></book-lg>
        </div>
    </div>
    `,
    data() {
        return {
            currentTab: 'library'
        }
    },
    methods: {
        bookClick() {
            let bookLgPage = document.querySelector('.active-comp .book-lg');
            let activeTab = document.querySelector('.active-comp .tab');
            bookLgPage.style.display = 'block';
            activeTab.style.display = 'none';
        }
    }
})