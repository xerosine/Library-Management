app.component('library', {
    props: {
        libraryBooks: {
            type: Array,
            required: true
        },
        requestedBooks: {
            type: Array,
            required: true
        }
    },
    template:
    /*html*/
    `
    <div>
        <div class="row ms-1 mb-1">
            <h3 class="ps-1">Library</h3>
        </div>
        <div class="row">
            <div class="col-12 col-lg-8">
                <div class="row mb-3">
                        <book-md v-for="(book, index) in libraryBooks" :key="index" :book="book"></book-md>
                </div>
            </div>
            <div class="col-12 col-lg-4 off-white">
                <div class="mt-4 ms-2 mb-3 rec-head fw-semibold">Requested Books</div>
                <div class="d-flex flex-column align-items-center">
                    <book-sm v-for="(book, index) in requestedBooks" :key="index" :book="book"></book-sm>
                </div>
            </div>
        </div>
    </div>
    `
})