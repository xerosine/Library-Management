app.component('overdue', {
    props: {
        overdueBooks: {
            type: Array,
            required: true
        }
    },
    template:
    /*html*/
    `
    <div>
        <div class="row ms-1 mb-1">
            <h3 class="ps-1">Overdue Books</h3>
        </div>
        <div class="row">
            <div class="col-11">
                <div class="row mb-3">
                        <book-md v-for="(book, index) in overdueBooks" :key="index" :full-screen="fullScreen" :book="book"></book-md>
                </div>
            </div>
        </div>
    </div>
    `,
    data() {
        return {
            fullScreen: true
        }
    }
})