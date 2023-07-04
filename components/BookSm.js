app.component('book-sm', {
    props: {
        book: {
            type: Object,
            required: true
        }
    },
    template:
    /*html*/
    `
    <div role="button" 
    class="card card-sm border-0 mb-3">
        <div class="row g-0 pb-1">
            <div class="col-4 ps-3 pt-2 pb-1">
                <img class="col-4 w-100 rounded-0 mt-1" :src="book.image" alt="Basic Sciences...">
            </div>
            <div class="col-8">
                <div class="card-body pe-1 pt-2 pb-1">
                    <p class="card-title fw-semibold small">{{book.title}}</p>
                    <p class="card-text small mb-1">{{book.author}}</p>
                    <div class="row">
                        <div class="col-12 col-sm-6">
                            <div class=" pe-1 pt-1">
                                <p class="card-text smaller mb-1">Requested by:</p>
                                <p class="text-wrap smaller fw-semibold mt-2">Alabi Iyanuoluwa</p>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6">
                            <div class=" pe-1 pt-1">
                                <p class="card-text smaller mb-1">Requested on:</p>
                                <p class="text-wrap smaller fw-semibold mt-2">12 Apr, 2023</p>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
    `
})