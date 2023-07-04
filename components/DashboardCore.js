app.component('dashboard-core', {
    template: 
    /*html*/
    `
    <div class="row m-0 mx-auto">
        <div class="col-6 col-md-3 p-1">
            <div class="dashboard-core m-1 px-3 py-2 off-white rounded-4 position-relative">
                <p class="fw-semibold small">Total books borrowed</p>                                   
                <div class="px-1 position-absolute bottom-0 w-75">
                    <strong class="fs-1 me-4">0</strong>                                
                    <svg class="mb-2 pb-1" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 7C19.6569 7 21 5.65685 21 4C21 2.34315 19.6569 1 18 1C16.3431 1 15 2.34315 15 4C15 5.65685 16.3431 7 18 7Z" stroke="#8ACA98" stroke-width="1.5"/>
                        <path d="M6 13L8.293 10.707C8.48053 10.5195 8.73484 10.4142 9 10.4142C9.26516 10.4142 9.51947 10.5195 9.707 10.707L11.293 12.293C11.4805 12.4805 11.7348 12.5858 12 12.5858C12.2652 12.5858 12.5195 12.4805 12.707 12.293L16 9M16 9V11.5M16 9H13.5" stroke="#8ACA98" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M21 9.5V11C21 15.714 21 18.071 19.535 19.535C18.072 21 15.714 21 11 21C6.286 21 3.929 21 2.464 19.535C1 18.072 1 15.714 1 11C1 9.872 1 8.878 1.02 8M12.5 1H11C6.286 1 3.929 1 2.464 2.464C2.024 2.905 1.715 3.427 1.5 4.07" stroke="#8ACA98" stroke-width="1.5" stroke-linecap="round"/>
                    </svg>
                </div> 
            </div>                               
        </div>
        <div class="col-6 col-md-3 p-1">
            <div class="dashboard-core m-1 px-3 py-2 off-white rounded-4 position-relative">
                <p class="fw-semibold small">Books at hand</p>                                   
                <div class="px-1 position-absolute bottom-0 w-75">
                    <strong class="fs-1 fs-md-3 me-4">0</strong>                                
                    <svg class="mb-2 pb-1" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 7C19.6569 7 21 5.65685 21 4C21 2.34315 19.6569 1 18 1C16.3431 1 15 2.34315 15 4C15 5.65685 16.3431 7 18 7Z" stroke="#8ACA98" stroke-width="1.5"/>
                        <path d="M6 13L8.293 10.707C8.48053 10.5195 8.73484 10.4142 9 10.4142C9.26516 10.4142 9.51947 10.5195 9.707 10.707L11.293 12.293C11.4805 12.4805 11.7348 12.5858 12 12.5858C12.2652 12.5858 12.5195 12.4805 12.707 12.293L16 9M16 9V11.5M16 9H13.5" stroke="#8ACA98" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M21 9.5V11C21 15.714 21 18.071 19.535 19.535C18.072 21 15.714 21 11 21C6.286 21 3.929 21 2.464 19.535C1 18.072 1 15.714 1 11C1 9.872 1 8.878 1.02 8M12.5 1H11C6.286 1 3.929 1 2.464 2.464C2.024 2.905 1.715 3.427 1.5 4.07" stroke="#8ACA98" stroke-width="1.5" stroke-linecap="round"/>
                    </svg>
                </div>
            </div>                                
        </div>
        <div class="col-6 col-md-3 p-1">
            <div class="dashboard-core m-1 px-3 py-2 off-white rounded-4 position-relative">
                <p class="fw-semibold small">Overdue books</p>                                   
                <div class="px-1 position-absolute bottom-0 w-75">
                    <strong class="fs-1 fs-md-3 me-4">0</strong>                                
                    <svg class="mb-2 pb-1" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 9L8.293 11.293C8.48053 11.4805 8.73484 11.5858 9 11.5858C9.26516 11.5858 9.51947 11.4805 9.707 11.293L11.293 9.707C11.4805 9.51953 11.7348 9.41421 12 9.41421C12.2652 9.41421 12.5195 9.51953 12.707 9.707L16 13M16 13V10.5M16 13H13.5" stroke="#DB8E8E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M18 7C19.6569 7 21 5.65685 21 4C21 2.34315 19.6569 1 18 1C16.3431 1 15 2.34315 15 4C15 5.65685 16.3431 7 18 7Z" stroke="#DB8E8E" stroke-width="1.5"/>
                        <path d="M21 9.5V11C21 15.714 21 18.071 19.535 19.535C18.072 21 15.714 21 11 21C6.286 21 3.929 21 2.464 19.535C1 18.072 1 15.714 1 11C1 9.872 1 8.878 1.02 8M12.5 1H11C6.286 1 3.929 1 2.464 2.464C2.024 2.905 1.715 3.427 1.5 4.07" stroke="#DB8E8E" stroke-width="1.5" stroke-linecap="round"/>
                    </svg>                                        
                </div>
            </div>                                
        </div>
        <div class="col-6 col-md-3 p-1">
            <div class="dashboard-core m-1 px-3 py-2 off-white rounded-4 position-relative">
            <p class="fw-semibold small">Borrowed books</p>                                   
                <div class="px-1 position-absolute bottom-0 w-75">
                    <strong class="fs-1 fs-md-3 me-4">0</strong>                                
                    <svg class="mb-2 pb-1" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 7C19.6569 7 21 5.65685 21 4C21 2.34315 19.6569 1 18 1C16.3431 1 15 2.34315 15 4C15 5.65685 16.3431 7 18 7Z" stroke="#8ACA98" stroke-width="1.5"/>
                        <path d="M6 13L8.293 10.707C8.48053 10.5195 8.73484 10.4142 9 10.4142C9.26516 10.4142 9.51947 10.5195 9.707 10.707L11.293 12.293C11.4805 12.4805 11.7348 12.5858 12 12.5858C12.2652 12.5858 12.5195 12.4805 12.707 12.293L16 9M16 9V11.5M16 9H13.5" stroke="#8ACA98" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M21 9.5V11C21 15.714 21 18.071 19.535 19.535C18.072 21 15.714 21 11 21C6.286 21 3.929 21 2.464 19.535C1 18.072 1 15.714 1 11C1 9.872 1 8.878 1.02 8M12.5 1H11C6.286 1 3.929 1 2.464 2.464C2.024 2.905 1.715 3.427 1.5 4.07" stroke="#8ACA98" stroke-width="1.5" stroke-linecap="round"/>
                    </svg>
                </div>
            </div>                                
        </div>                                                
    </div>
    `
})