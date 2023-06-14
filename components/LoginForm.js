app.component('login-form', {
    props: {
        role: {
            type: String,
            required: true
        }
    },
    template: 
    /*html*/
    `
    <div id="login-form" class="col">
        <div class="my-5 mx-1 pt-4 col-10 mx-sm-auto">
            <div class="my-5 fs-sm-5 fw-semibold">
                <a href="javascript:void(0)" class="login-page-link text-dark ms-2 me-5">Student</a>
                <a href="javascript:void(0)" class="login-page-link">Staff</a>
            </div>
            <h2 class="ps-2 mt-5 mb-4">Login</h2>
            <form class="container-fluid fw-semibold" action="" method="post">
                <div class="col mb-3">
                    <label for="username" class="form-label">Username</label>
                    <input v-if="role === 'student'" id="username" type="text" class="form-control form-control-sm off-white" placeholder="Matric Number" required>
                    <input v-if="role === 'staff'" id="username" type="text" class="form-control form-control-sm off-white" placeholder="Staff ID" required>
                    <div class="form-text"></div>
                </div>
                <div class="col mb-3">
                    <label for="password" class="form-label">Password</label>
                    <input id="password" type="text" class="form-control form-control-sm off-white" placeholder="Password" required>
                    <div class="form-text"></div>
                </div>
                <div class="col mb-4 form-extra">
                    <div class="form-check form-check-inline login-page-link pe-0 d-sm-inline d-block">
                        <input id="remember-me" type="checkbox" class="form-check-input" value="">
                        <label for="remember-me">Remember me</label>
                    </div>
                    <a id="forgot-pass" class="login-page-link text-end" href="javascript:void(0)">Forgot Password?</a>
                </div>
                <div class="col-8 col-sm-5 text-center mx-auto mb-4">
                    <input id="login-btn" type="submit" class="btn btn-dark w-100" value="Login">
                </div>
                <div class="col-10 text-center mx-auto smaller">Don't have an account?
                    <a class="link text-primary" href="/SignUpPage.html">Click here</a>
                </div>
            </form>
        </div>
    </div>
    `
})