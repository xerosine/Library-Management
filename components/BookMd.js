app.component('book-md', {
    props: {
        book: {
            type: Object,
            required: true
        },
        fullScreen: {
            type: Boolean,
            required: true
        }
    },
    template:
    /*html*/
    `
    <div class="col-12 col-sm-6 col-md-4" :class="fullScreen ? 'col-lg-3':''">
        <div class="card card-md border-0 rounded-0 mx-auto my-2">
            <img class="card-img-top img-fluid rounded-0" :src="book.image" alt="Engravings">
            <div class="card-body p-1 off-white position-relative">
                <div class="d-flex flex-row flex-wrap">
                    <span v-for="tag in book.tags"  class="m-1 p-1 rounded-pill fw-semibold gray-bg">{{tag}}</span>
                </div>
                <p class="my-3 small">{{book.shortDesc}}</p>
                <strong class="small ps-1 position-absolute start-0 bottom-0">{{book.author}}</strong>
            </div>
        </div>
    </div>
    `
})