app.component('book-md', {
    props: {
        book: {
            type: Object,
            required: true
        },
        currentTab: {
            type: String,
            required: true
        }
    },
    template:
    /*html*/
    `
    <div class="col-12 col-sm-6 col-md-4" role="button" 
    :class="(currentTab==='overdue' || currentTab==='borrowed') ? 'col-lg-3':''">
        <div class="card card-md border-0 rounded-0 mx-auto my-2">
            <img class="card-img-top img-fluid rounded-0" :src="book.image" alt="Engravings">
            <div class="card-body p-1 off-white position-relative">
                <div class="d-flex flex-row flex-wrap">
                    <span v-if="book.genre" v-for="tag in book.genre.split(',')" class="m-1 p-1 rounded-pill fw-semibold gray-bg">{{tag}}</span>
                </div>
                <p class="my-3 small">{{book.title}}</p>
                <strong class="small ps-1 position-absolute start-0 bottom-0">{{book.author}}</strong>
            </div>
        </div>
    </div>
    `
})