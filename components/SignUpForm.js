app.component('sign-up-form', {
    template :
    /*html*/
    `
    <div id="sign-up-form" class="col">
        <div class="m-4 mx-0 mx-sm-5">
            <h2 class="ps-2 mt-5 mb-4">Create An Account</h2>
            <form class="container-fluid fw-semibold" action="" method="post">
                <div class="row mb-2">
                    <div class="col-12 col-sm-6">
                        <label class="form-label" for="first-name">First Name</label>
                        <input id="first-name" class="off-white form-control form-control-sm" type="text" placeholder="First Name" required>
                        <div class="form-text"></div>
                    </div>
                    <div class="col-12 col-sm-6">
                        <label class="form-label" for="last-name">Last Name</label>
                        <input id="last-name" class="form-control form-control-sm off-white" type="text" placeholder="Last Name" required>
                        <div class="form-text"></div>
                    </div>
                </div>
                <div class="col mb-2">
                    <label for="email" class="form-label">Email Address</label>
                    <input id="email" type="email" class="form-control form-control-sm off-white " placeholder="Email" required>
                    <div class="form-text"></div>
                </div>
                <div class="col mb-2">
                    <label for="address" class="form-label">Address</label>
                    <input id="address" type="text" class="form-control form-control-sm off-white" placeholder="Enter your Address" required>
                    <div class="form-text"></div>
                </div>
                <div class="row mb-2">
                    <div class="col-12 col-sm-6">
                        <label class="form-label" for="phone-number">Phone Number</label>
                        <div class="input-group input-group-sm m-0 p-0">
                            <span class="input-group-text" id="basic-addon1">+234</span> 
                            <input id="phone-number" class="off-white form-control form-control-sm" type="text" placeholder="xxxxxxxxxx" required> 
                        </div>
                        <div class="form-text"></div>
                    </div>
                    <div class="col-12 col-sm-6">
                        <label class="form-label" for="role-select">Select your role</label>
                        <select id="role-select" class="form-select form-select-sm off-white" required>
                            <option value="Student" selected>Student</option>
                            <option value="Staff">Staff</option>
                        </select>
                        <div class="form-control-plaintext"></div>
                    </div>
                </div>
                <div class="col mb-2">
                    <label class="form-label" for="dept">Department</label>
                    <select id="dept" size="" class="form-select form-select-sm off-white" required>
                        <option value="" selected>Choose...</option>
                        <option value="CES">Computer Science and Engineering</option>
                        <option value="CES">Computer Science and Engineering</option>
                        <option value="CES">Computer Science and Engineering</option>
                        <option value="CES">Computer Science and Engineering</option>
                        <option value="CES">Computer Science and Engineering</option>
                        <option value="CES">Computer Science and Engineering</option>
                    </select>
                    <div class="form-text"></div>
                </div>
                <div v-if="role == 'student'" class="col mb-2">
                    <label for="matricNum" class="form-label">Matric Number</label>
                    <input id="matricNum" type="text" class="form-control form-control-sm off-white" placeholder="Enter your Matric Number" required>
                    <div class="form-text"></div>
                </div>
                <div v-else class="col mb-2">
                    <label for="staffID" class="form-label">Staff ID</label>
                    <input id="staffID" type="text" class="form-control form-control-sm off-white" placeholder="Enter your Staff ID" required>
                    <div class="form-text"></div>
                </div>
                <div class="col mb-3">
                    <label for="password" class="form-label">Password</label>
                    <input id="password" type="text" class="form-control form-control-sm off-white" placeholder="At least 8 characters" required>
                    <div class="form-text"></div>
                </div>
                <div class="col-8 col-sm-5 text-center mx-auto mb-2">
                    <input id="sign-up-btn" type="submit" class="btn btn-dark w-100" value="Sign Up">
                </div>
                <div class="col-8 text-center mx-auto fs-6">Already have an account?
                    <a class="link primary" href="/LoginPage.html">Login</a>
                </div>
            </form>
        </div>
    </div>
    `,
    data() {
        return {
            firstName: "",
            lastName: "",
            emailAddress: "",
            address: "",
            phoneNum: "",
            role: "",
            dept: "",
            userID: "",
            password: ""
        }
    },
    methods: {
        
    }
})