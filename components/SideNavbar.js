app.component('side-navbar', {
    props: {
        role: {
            type: String,
            required: true
        }
    },
    template: 
    /*html*/
    `
    <div class="col-3 col-md-2 start-0 off-white mx-0 ps-0 pe-1 px-sm-2 fs-sm-6 h-100 position-fixed">
        <img src="images/512px-Oau_logo 1.png" class="my-3 d-block w-100 mx-auto" alt="OAU logo">
        <ul id="nav-list" class="nav nav-pills flex-column fw-semibold">
            <li class="nav-item px-1 mb-2 mx-0 mx-sm-3 mx-md-2">
                <a 
                id="overview-link" href="#" 
                class="nav-link navs active-nav p-2"
                @click="switchActive"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 8C11.45 8 10.979 7.804 10.587 7.412C10.195 7.02 9.99934 6.54934 10 6V2C10 1.45 10.196 0.979002 10.588 0.587002C10.98 0.195002 11.4507 -0.000664969 12 1.69779e-06H16C16.55 1.69779e-06 17.021 0.196002 17.413 0.588002C17.805 0.980002 18.0007 1.45067 18 2V6C18 6.55 17.804 7.021 17.412 7.413C17.02 7.805 16.5493 8.00067 16 8H12ZM8 6C8 6.55 7.804 7.021 7.412 7.413C7.02 7.805 6.54934 8.00067 6 8H2C1.45 8 0.979002 7.804 0.587002 7.412C0.195002 7.02 -0.000664969 6.54934 1.69779e-06 6V2C1.69779e-06 1.45 0.196002 0.979002 0.588002 0.587002C0.980002 0.195002 1.45067 -0.000664969 2 1.69779e-06H6C6.55 1.69779e-06 7.021 0.196002 7.413 0.588002C7.805 0.980002 8.00067 1.45067 8 2V6ZM10 12C10 11.45 10.196 10.979 10.588 10.587C10.98 10.195 11.4507 9.99934 12 10H16C16.55 10 17.021 10.196 17.413 10.588C17.805 10.98 18.0007 11.4507 18 12V16C18 16.55 17.804 17.021 17.412 17.413C17.02 17.805 16.5493 18.0007 16 18H12C11.45 18 10.979 17.804 10.587 17.412C10.195 17.02 9.99934 16.5493 10 16V12ZM6 10C6.55 10 7.021 10.196 7.413 10.588C7.805 10.98 8.00067 11.4507 8 12V16C8 16.55 7.804 17.021 7.412 17.413C7.02 17.805 6.54934 18.0007 6 18H2C1.45 18 0.979002 17.804 0.587002 17.412C0.195002 17.02 -0.000664969 16.5493 1.69779e-06 16V12C1.69779e-06 11.45 0.196002 10.979 0.588002 10.587C0.980002 10.195 1.45067 9.99934 2 10H6Z" fill="currentColor"/>
                </svg> Overview</a>
            </li>
            <li class="nav-item px-1 mb-2 mx-0 mx-sm-3 mx-md-2">
                <a id="library-link" href="#"
                class="nav-link navs  p-1"
                @click="switchActive"><svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.11536 -1.95936e-05C7.98138 0.0199031 7.85343 0.0690658 7.74059 0.14398C7.74059 0.14398 6.5729 0.87875 5.31751 1.67352C4.06213 2.46737 2.66551 3.34244 2.34613 3.51967C2.32643 3.52822 2.30703 3.53746 2.28797 3.54736C1.12859 4.26275 0.887665 5.43137 0.846127 6.08675C0.843357 6.11721 0.846127 6.14213 0.846127 6.17444C0.835973 6.41998 0.846127 6.57783 0.846127 6.57783V18.636C0.846127 20.388 2.8889 21.2307 4.82736 21.2307C5.47351 21.2307 6.11967 21.1264 6.67351 20.9418C7.04274 20.7572 7.30767 20.388 7.30767 20.0187V10.3264C7.30767 8.20337 7.7692 7.20644 9.15382 6.37567C9.52305 6.19106 13.3944 3.51875 13.3944 3.51875C13.579 3.33413 13.7692 2.95937 13.7692 2.68244V2.59567C13.7692 2.22644 13.5846 1.94398 13.3077 1.75936C13.0307 1.57475 12.6615 1.57475 12.3846 1.75936C12.2923 1.85167 6.66151 5.64275 5.46151 6.2889C4.26151 7.02737 3.14182 7.20552 2.8649 6.83629C2.77905 6.75044 2.70428 6.48737 2.69228 6.23075V6.1726C2.6932 5.92152 2.75782 5.4489 3.2692 5.13413C3.78797 4.84521 5.07567 4.02275 6.32736 3.23075C6.85628 2.89567 6.92182 2.85967 7.33628 2.59567C7.39084 2.82117 7.52832 3.01786 7.72134 3.14658C7.91437 3.2753 8.14879 3.32661 8.37794 3.2903C8.60708 3.25399 8.81416 3.13272 8.95793 2.95064C9.10171 2.76855 9.17165 2.539 9.15382 2.30767V0.923057C9.15485 0.791486 9.12774 0.661215 9.07432 0.540977C9.02089 0.420738 8.94237 0.313311 8.84403 0.225898C8.74569 0.138484 8.6298 0.0731037 8.50412 0.03414C8.37845 -0.00482372 8.2459 -0.0164705 8.11536 -1.95936e-05ZM15.5 3.23075C15.3532 3.25516 15.2145 3.3147 15.0957 3.40429C15.0957 3.40429 10.4489 6.53075 9.64397 7.06706C9.63422 7.07669 9.62467 7.08654 9.61536 7.0966C8.94705 7.59783 8.55105 8.19413 8.37474 8.73967C8.27595 9.04743 8.22733 9.36908 8.23074 9.69229V9.98121C8.22941 10.0098 8.22941 10.0385 8.23074 10.0671V21.2307C8.23074 22.9846 10.2504 24 12.0966 24C12.9274 24 13.6769 23.8209 14.2307 23.4517C15.3384 22.8055 20.6923 18.6351 20.6923 18.6351C20.9692 18.4504 21.1538 18.1901 21.1538 17.9132V5.91321C21.1538 5.45167 20.9747 5.17475 20.6055 4.99013C20.3286 4.80552 19.8735 4.89229 19.5966 5.0769C18.1197 6.1846 14.144 9.31198 13.2209 9.86583C11.9286 10.6043 10.7111 10.7889 10.2495 10.3274C10.0649 10.1427 10.0769 9.96921 10.0769 9.69229C10.0824 9.53352 10.1 9.3969 10.135 9.28798C10.1867 9.12737 10.292 8.92983 10.6824 8.62521C10.7009 8.61044 10.6917 8.61136 10.7111 8.59659C11.3784 8.15075 13.4194 6.75967 14.7504 5.85506C14.8258 6.05737 14.9698 6.22684 15.1572 6.334C15.3447 6.44116 15.5637 6.47923 15.7763 6.44158C15.9889 6.40394 16.1816 6.29296 16.3208 6.12795C16.4601 5.96294 16.5371 5.75434 16.5384 5.53844V4.15383C16.5395 4.02226 16.5124 3.89198 16.4589 3.77175C16.4055 3.65151 16.327 3.54408 16.2286 3.45667C16.1303 3.36925 16.0144 3.30387 15.8887 3.26491C15.7631 3.22595 15.6305 3.2143 15.5 3.23075ZM19.3077 9.98121V11.8274L14.6923 15.4034V13.5572L19.3077 9.98121Z" fill="currentColor"/>
                </svg> Library</a>
            </li>
            <li class="nav-item px-1 mb-2 mx-0 mx-sm-3 mx-md-2">
                <a id="borrowed-link" href="#" 
                class="nav-link navs  p-1"
                @click="switchActive"><svg width="22" height="17" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 5.9V4.2C13.55 3.96667 14.1127 3.79167 14.688 3.675C15.2633 3.55833 15.8673 3.5 16.5 3.5C16.9333 3.5 17.3583 3.53333 17.775 3.6C18.1917 3.66667 18.6 3.75 19 3.85V5.45C18.6 5.3 18.1957 5.18733 17.787 5.112C17.3783 5.03667 16.9493 4.99933 16.5 5C15.8667 5 15.2583 5.07933 14.675 5.238C14.0917 5.39667 13.5333 5.61733 13 5.9ZM13 11.4V9.7C13.55 9.46667 14.1127 9.29167 14.688 9.175C15.2633 9.05833 15.8673 9 16.5 9C16.9333 9 17.3583 9.03333 17.775 9.1C18.1917 9.16667 18.6 9.25 19 9.35V10.95C18.6 10.8 18.1957 10.6873 17.787 10.612C17.3783 10.5367 16.9493 10.4993 16.5 10.5C15.8667 10.5 15.2583 10.575 14.675 10.725C14.0917 10.875 13.5333 11.1 13 11.4ZM13 8.65V6.95C13.55 6.71667 14.1127 6.54167 14.688 6.425C15.2633 6.30833 15.8673 6.25 16.5 6.25C16.9333 6.25 17.3583 6.28333 17.775 6.35C18.1917 6.41667 18.6 6.5 19 6.6V8.2C18.6 8.05 18.1957 7.93733 17.787 7.862C17.3783 7.78667 16.9493 7.74933 16.5 7.75C15.8667 7.75 15.2583 7.82933 14.675 7.988C14.0917 8.14667 13.5333 8.36733 13 8.65ZM5.5 12C6.28333 12 7.046 12.0877 7.788 12.263C8.53 12.4383 9.26733 12.7007 10 13.05V3.2C9.31667 2.8 8.59167 2.5 7.825 2.3C7.05833 2.1 6.28333 2 5.5 2C4.9 2 4.304 2.05833 3.712 2.175C3.12 2.29167 2.54933 2.46667 2 2.7V12.6C2.58333 12.4 3.16267 12.25 3.738 12.15C4.31333 12.05 4.90067 12 5.5 12ZM12 13.05C12.7333 12.7 13.4707 12.4373 14.212 12.262C14.9533 12.0867 15.716 11.9993 16.5 12C17.1 12 17.6877 12.05 18.263 12.15C18.8383 12.25 19.4173 12.4 20 12.6V2.7C19.45 2.46667 18.879 2.29167 18.287 2.175C17.695 2.05833 17.0993 2 16.5 2C15.7167 2 14.9417 2.1 14.175 2.3C13.4083 2.5 12.6833 2.8 12 3.2V13.05ZM11 16C10.2 15.3667 9.33333 14.875 8.4 14.525C7.46667 14.175 6.5 14 5.5 14C4.61667 14 3.69167 14.1667 2.725 14.5C1.75833 14.8333 0.85 15.35 0 16.05V1.55C0.733333 1.05 1.596 0.666667 2.588 0.4C3.58 0.133333 4.55067 0 5.5 0C6.46667 0 7.41267 0.125 8.338 0.375C9.26333 0.625 10.1507 1 11 1.5C11.85 1 12.7377 0.625 13.663 0.375C14.5883 0.125 15.534 0 16.5 0C17.45 0 18.421 0.133333 19.413 0.4C20.405 0.666667 21.2673 1.05 22 1.55V16.05C21.1667 15.35 20.2623 14.8333 19.287 14.5C18.3117 14.1667 17.3827 14 16.5 14C15.5 14 14.5333 14.175 13.6 14.525C12.6667 14.875 11.8 15.3667 11 16Z" fill="currentColor"/>
                </svg> Borrowed Books</a>
            </li>
            <li class="nav-item px-1 mb-2 mx-0 mx-sm-3 mx-md-2">
                <a id="overdue-link" href="#" 
                class="nav-link navs  p-1"
                @click="switchActive"><svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.29 2.25L4.16 5.72L3 4.34L7.14 0.869995L8.29 2.25ZM21 4.35L19.84 5.73L15.7 2.25L16.86 0.869995L21 4.35ZM12 3C14.1217 3 16.1566 3.84285 17.6569 5.34314C19.1571 6.84343 20 8.87826 20 11C20 13.1217 19.1571 15.1566 17.6569 16.6568C16.1566 18.1571 14.1217 19 12 19C9.87827 19 7.84344 18.1571 6.34315 16.6568C4.84285 15.1566 4 13.1217 4 11C4 8.87826 4.84285 6.84343 6.34315 5.34314C7.84344 3.84285 9.87827 3 12 3ZM12 5C10.4087 5 8.88258 5.63214 7.75736 6.75735C6.63214 7.88257 6 9.4087 6 11C6 12.5913 6.63214 14.1174 7.75736 15.2426C8.88258 16.3679 10.4087 17 12 17C13.5913 17 15.1174 16.3679 16.2426 15.2426C17.3679 14.1174 18 12.5913 18 11C18 9.4087 17.3679 7.88257 16.2426 6.75735C15.1174 5.63214 13.5913 5 12 5ZM11 6.5H12.5V11.03L15.72 12.5L15.1 13.86L11 12V6.5ZM0 13C0 10.5 1.13 8.3 2.91 6.83C2.30936 8.13806 1.99892 9.56062 2 11L2.06 12.13L2 13C2 15.28 3.27 17.26 5.14 18.28C6.44 19.5 8.07 20.39 9.89 20.78C9.28 20.92 8.65 21 8 21C5.87827 21 3.84344 20.1571 2.34315 18.6568C0.842855 17.1566 0 15.1217 0 13Z" fill="currentColor"/>
                </svg> Overdue Books</a>
            </li>
            <li class="nav-item px-1 mb-2 mx-0 mx-sm-3 mx-md-2">
                <a id="settings-link" href="#" 
                class="nav-link navs  p-1"
                @click="switchActive"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.875 20H8.12497C7.87497 20 7.6583 19.9167 7.47497 19.75C7.29164 19.5833 7.1833 19.375 7.14997 19.125L6.84997 16.8C6.6333 16.7167 6.42897 16.6167 6.23697 16.5C6.04497 16.3833 5.85764 16.2583 5.67497 16.125L3.49997 17.025C3.26664 17.1083 3.0333 17.1167 2.79997 17.05C2.56664 16.9833 2.3833 16.8417 2.24997 16.625L0.399971 13.4C0.266638 13.1833 0.224971 12.95 0.274971 12.7C0.324971 12.45 0.449971 12.25 0.649971 12.1L2.52497 10.675C2.5083 10.5583 2.49997 10.4457 2.49997 10.337V9.663C2.49997 9.55433 2.5083 9.44167 2.52497 9.325L0.649971 7.9C0.449971 7.75 0.324971 7.55 0.274971 7.3C0.224971 7.05 0.266638 6.81667 0.399971 6.6L2.24997 3.375C2.36664 3.14167 2.54564 2.99567 2.78697 2.937C3.0283 2.87833 3.26597 2.891 3.49997 2.975L5.67497 3.875C5.8583 3.74167 6.04997 3.61667 6.24997 3.5C6.44997 3.38333 6.64997 3.28333 6.84997 3.2L7.14997 0.875C7.1833 0.625 7.29164 0.416667 7.47497 0.25C7.6583 0.0833333 7.87497 0 8.12497 0H11.875C12.125 0 12.3416 0.0833333 12.525 0.25C12.7083 0.416667 12.8166 0.625 12.85 0.875L13.15 3.2C13.3666 3.28333 13.571 3.38333 13.763 3.5C13.955 3.61667 14.1423 3.74167 14.325 3.875L16.5 2.975C16.7333 2.89167 16.9666 2.88333 17.2 2.95C17.4333 3.01667 17.6166 3.15833 17.75 3.375L19.6 6.6C19.7333 6.81667 19.775 7.05 19.725 7.3C19.675 7.55 19.55 7.75 19.35 7.9L17.475 9.325C17.4916 9.44167 17.5 9.55433 17.5 9.663V10.337C17.5 10.4457 17.4833 10.5583 17.45 10.675L19.325 12.1C19.525 12.25 19.65 12.45 19.7 12.7C19.75 12.95 19.7083 13.1833 19.575 13.4L17.725 16.6C17.5916 16.8167 17.404 16.9627 17.162 17.038C16.92 17.1133 16.6826 17.109 16.45 17.025L14.325 16.125C14.1416 16.2583 13.95 16.3833 13.75 16.5C13.55 16.6167 13.35 16.7167 13.15 16.8L12.85 19.125C12.8166 19.375 12.7083 19.5833 12.525 19.75C12.3416 19.9167 12.125 20 11.875 20ZM10.05 13.5C11.0166 13.5 11.8416 13.1583 12.525 12.475C13.2083 11.7917 13.55 10.9667 13.55 10C13.55 9.03333 13.2083 8.20833 12.525 7.525C11.8416 6.84167 11.0166 6.5 10.05 6.5C9.06664 6.5 8.2373 6.84167 7.56197 7.525C6.88664 8.20833 6.5493 9.03333 6.54997 10C6.54997 10.9667 6.8873 11.7917 7.56197 12.475C8.23664 13.1583 9.06597 13.5 10.05 13.5ZM10.05 11.5C9.6333 11.5 9.27897 11.354 8.98697 11.062C8.69497 10.77 8.5493 10.416 8.54997 10C8.54997 9.58333 8.69597 9.229 8.98797 8.937C9.27997 8.645 9.63397 8.49933 10.05 8.5C10.4666 8.5 10.821 8.646 11.113 8.938C11.405 9.23 11.5506 9.584 11.55 10C11.55 10.4167 11.404 10.771 11.112 11.063C10.82 11.355 10.466 11.5007 10.05 11.5ZM8.99997 18H10.975L11.325 15.35C11.8416 15.2167 12.321 15.0207 12.763 14.762C13.205 14.5033 13.609 14.191 13.975 13.825L16.45 14.85L17.425 13.15L15.275 11.525C15.3583 11.2917 15.4166 11.046 15.45 10.788C15.4833 10.53 15.5 10.2673 15.5 10C15.5 9.73333 15.4833 9.471 15.45 9.213C15.4166 8.955 15.3583 8.709 15.275 8.475L17.425 6.85L16.45 5.15L13.975 6.2C13.6083 5.81667 13.2043 5.496 12.763 5.238C12.3216 4.98 11.8423 4.784 11.325 4.65L11 2H9.02497L8.67497 4.65C8.15831 4.78333 7.6793 4.97933 7.23797 5.238C6.79664 5.49667 6.3923 5.809 6.02497 6.175L3.54997 5.15L2.57497 6.85L4.72497 8.45C4.64164 8.7 4.5833 8.95 4.54997 9.2C4.51664 9.45 4.49997 9.71667 4.49997 10C4.49997 10.2667 4.51664 10.525 4.54997 10.775C4.5833 11.025 4.64164 11.275 4.72497 11.525L2.57497 13.15L3.54997 14.85L6.02497 13.8C6.39164 14.1833 6.79597 14.5043 7.23797 14.763C7.67997 15.0217 8.15897 15.2173 8.67497 15.35L8.99997 18Z" fill="currentColor"/>
                </svg> Settings</a>
            </li>
            <li class="nav-item px-1 mb-2 mx-0 mx-sm-3 mx-md-2">
                <a id="help-link" href="#" 
                class="nav-link navs  p-1"
                @click="switchActive"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 14H11V16H9V14ZM10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18ZM10 4C7.79 4 6 5.79 6 8H8C8 6.9 8.9 6 10 6C11.1 6 12 6.9 12 8C12 10 9 9.75 9 13H11C11 10.75 14 10.5 14 8C14 5.79 12.21 4 10 4Z" fill="currentColor"/>
                </svg> Help</a>
            </li>
        </ul>
        <div class="row mb-2 position-absolute bottom-0">
            <img src="images/user_logo.svg" class="col-sm-4 col-6 mx-auto mx-sm-0" alt="user logo">
            <div class="col-12 col-sm-7 text-center text-sm-start ps-3 ps-sm-1">
                <p class="fw-semibold mb-0 mt-2">Alabi Iyanuoluwa</p>
                <p class="mb-0">{{role}}</p>
            </div>
        </div>           
    </div>
    `,
    methods: {
        switchActive(event) {
            let element = document.getElementById(event.currentTarget.id);
            let navList = document.getElementsByClassName("navs");
            if (element.classList.contains('active-nav')){
                return;
            }
            let index;
            for(let i = 0; i < navList.length; i++){
                if (navList[i].classList.contains("active-nav")){
                    navList[i].classList.remove("active-nav");
                    break;
                }
            }
            element.classList.add("active-nav");
            index = Array.from(navList).indexOf(element);
            this.$emit('nav-clicked', index);
        }
    }
})