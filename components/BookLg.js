app.component('book-lg', {
    props: {
        book: {
            type: Object,
            required: true
        },
        currentTab: {
            type: String,
            required: true
        },
        role: {
            type: String,
            required: true
        }
    },
    template:
    /*html*/
    `
    <div>
        <div class="row">
            <div id="lg-img-col" class="col-12 col-md-6 pe-md-0 text-sm-center">
                <img id="book-lg-img" class="img-fluid mx-2 my-2 my-sm-3" :src="book.image" :alt="book.title">
            </div>
            <div class="col-12 col-md-6 ps-md-0">
                <div class="row m-2 me-3 ms-0 mx-sm-1">
                    <p class="col-12 h-50 text-sm-center text-md-start">{{book.longDesc}}</p>
                    <div class="col-12 h-50">
                        <p class="mt-2">Genres: {{book.genres}}</p>
                        <p class="mt-2">First published {{book.firstPubl}}</p>
                        <p class="mt-2">Format: {{book.format}}</p>
                        <p class="mt-2">Published: {{book.published}}</p>
                        <p class="mt-2">ISBN: {{book.isbn}}</p>
                        <p class="mt-2">Language: {{book.lang}}</p>
                    </div>
                </div>
                <div class="col my-3">
                    <div>
                        <div v-if="currentTab === 'dashboard' || currentTab=== 'library'" class="row">
                            <div class="col-12 mb-4 ms-0">
                                <span class="off-white text-secondary rounded-4 py-1 px-3 m-3 ms-1">
                                    Available: <span v-if="book.supply" class="text-success">Yes</span>
                                    <span v-else class="text-danger">No</span>
                                </span>
                            </div>
                            <div class="col-12 mb-4 ms-0">
                                <span class="off-white text-secondary rounded-4 py-1 px-3 m-3 ms-1">
                                    Duration: <span v-if="role == 'student'">1 week</span>
                                    <span v-else >2 weeks</span>
                                </span>
                            </div>
                        </div>
                        <div v-else class="row">
                            <div class="col-12 mb-4 ms-0">
                                <span v-if="currentTab === 'borrowed'" 
                                class="off-white text-secondary rounded-4 py-1 px-3 m-3 ms-1">
                                    1 day left
                                </span>
                                <span v-else 
                                class="off-white text-secondary rounded-4 py-1 px-3 m-3 ms-1">
                                    Overdue
                                </span>
                            </div>
                        </div>
                        <div class="col mb-3 ms-0">
                            <span class="bg-dark text-light py-1 px-3 m-3 ms-2 rounded-1"
                            role="button" @click="showAlert">{{bookAction}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <alert-modal class="alert-modal" :book-action="bookAction" :alert-msg="alertMsg"></alert-modal>
    </div>
    `,
    // <div></div>
    computed: {
        bookAction() {
            currentTab = this.currentTab;
            console.log(currentTab);
            if (currentTab === "library" || currentTab === "dashboard") {
                if (this.book.supply) {
                    return "Order book";
                } else {
                    return "Reserve book";
                }
            } else if (currentTab === "borrowed" || currentTab === "overdue") {
                return "Return book";
            }
        },
        alertMsg() {
            if (this.bookAction === 'Order book') {
                return "Thank you for borrowing a book from our library! We hope that you find the information you're looking for and enjoy the read. "
                + "Please remember to return the book on or before the due date so that others can benefit from our resources. "
                + "Please come along with the institution valid ID card for book collection. If you have any questions or concerns, "
                + "don't hesitate to contact us. We appreciate your continued support and hope to see you soon!"
            } else if (this.bookAction === 'Reserve book'){
                return "We're sorry to inform you that the book you're trying to borrow is currently not available."
                + " However, you have the option to reserve the book, which means that you will be notified when the book becomes available again."
                + " Please note that the reservation is valid for a limited time only,"
                + " so it's important to return to the library promptly once you receive the notification."
                + " Thank you for your understanding and cooperation."
            } else if (this.bookAction === 'Return book' && currentTab === "borrowed") {
                return "Thank you for returning your book to our library! Our admin team has been notified of the return and will confirm it as soon as possible. " 
                + "Once the return is confirmed, your account will be updated accordingly. If you have any questions or concerns about your account, "
                + "please don't hesitate to contact us. Thank you for being a valued member of our library community and we appreciate your patience."
            } else {
                return "Thank you for returning your book to our library, however, we've noticed that it was returned overdue. "
                + "As of now, our admin team has been notified of the return but has not yet confirmed it. "
                + "Please note that overdue fees may still be applied to your account until the return has been confirmed. "
                + "If you have any questions or concerns, please don't hesitate to contact us. Thank you for your understanding and cooperation."
            }
        }
    },
    methods: {
        showAlert() {
            document.querySelector(".active-comp .alert-modal").style.display = 'block';
        }
    }
})