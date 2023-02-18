<template>

    <Head title="Welcome DOST Scholars" />

    <body>
        <div>
            <nav class="navbar navbar-expand-lg navigation fixed-top sticky" id="navbar">
                <div class="container">
                    <a class="navbar-logo" href="/">
                        <img src="images/logo-dark.png" alt height="19" class="logo logo-dark" />
                        <img src="images/logo-light.png" alt height="19" class="logo logo-light" />
                    </a>

                    <button type="button" class="btn btn-sm px-3 font-size-16 d-lg-none header-item"
                        data-toggle="collapse" data-target="#topnav-menu-content" @click="toggleMenu()">
                        <i class="fa fa-fw fa-bars"></i>
                    </button>

                    <div class="collapse navbar-collapse" id="topnav-menu-content">
                        <ul class="navbar-nav ms-auto" id="topnav-menu">
                            <li class="nav-item">
                                <a class="nav-link" href="javascript: void(0);">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="javascript: void(0);">About</a>
                            </li>
                        </ul>

                        <div class="ms-lg-2">
                            <Link href="/login" class="btn btn-outline-success w-xs">Sign in</Link>
                        </div>
                    </div>
                </div>
            </nav>
            <div>
                <section class="section hero-section bg-ico-hero" id="home" style="margin-bottom: -230px;">
                    <div class="bg-overlay bg-primary"></div>
                    <div class="container">
                        <div class="row" style="margin-top: -120px;">
                            <div class="col-md-12">
                                <div class="row">
                                    <div class="col-1 me-n2">
                                        <img src="images/sei.png" alt="" class="avatar-sm">
                                    </div>
                                    <div class="col-10 ms-n4">
                                        <div class="text-white-50">
                                            <h5 class="text-white fw-semibold mb-0 hero-title" style="font-size: 21px;">
                                                DOST-IX Scholarship Program </h5>
                                            <p class="font-size-14">Science & Technology Scholarship Information
                                                Management
                                                System</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- <div class="col-md-6">
                            <div class="text-white-50 mt-n1 float-end text-end">
                                <h5 class="text-white fw-semibold mb-0 hero-title" style="font-size: 27px;">DOST-IX</h5>
                                <p class="font-size-14">Department Of Science And Technology - IX</p>
                            </div>
                        </div> -->
                        </div>

                    </div>
                </section>

                <section id="about" class="section pt-4 bg-white"><div class="container"><div class="row mt-4"><div class="col-lg-12"><div class="row g-3"><div class="col-lg-4"><div class="card border mini-stats-wid"><div class="card-body"><div class="d-flex flex-wrap"><div class="me-3"><p class="text-muted mb-2">Total Scholars</p> <h5 class="mb-0">1007</h5></div> <div class="avatar-sm ms-auto"><div class="avatar-title bg-light rounded-circle font-size-20 text-success"><i class="bx bx-group"></i></div></div></div></div></div></div><div class="col-lg-4"><div class="card border mini-stats-wid"><div class="card-body"><div class="d-flex flex-wrap"><div class="me-3"><p class="text-muted mb-2">Total Graduates</p> <h5 class="mb-0">651</h5></div> <div class="avatar-sm ms-auto"><div class="avatar-title bg-light rounded-circle font-size-20 text-info"><i class="bx bxs-graduation"></i></div></div></div></div></div></div><div class="col-lg-4"><div class="card border mini-stats-wid"><div class="card-body"><div class="d-flex flex-wrap"><div class="me-3"><p class="text-muted mb-2">Ongoing Scholars</p> <h5 class="mb-0">193</h5></div> <div class="avatar-sm ms-auto"><div class="avatar-title bg-light rounded-circle font-size-20 text-primary"><i class="bx bx-user-circle"></i></div></div></div></div></div></div></div> <div class="row"><div class="card-body"><div class="me-n2 ms-n2"><ul class="list-inline user-chat-nav text-end ms-4 mt-1 dropdown float-end"><li class="list-inline-item d-non d-sm-inline-block" style="margin-right: 50px;"><div class="form-check"><input type="checkbox" id="programs" class="form-check-input"> <label for="programs" class="form-check-label font-size-11">
                    Sub-Programs</label></div></li> <li class="list-inline-item d-non d-sm-inline-block " style="margin-right: 50px;"><div class="form-check"><input type="checkbox" id="graph" class="form-check-input"> <label for="graph" class="form-check-label font-size-11">
                    Graphical View</label></div></li></ul> <div class="tabs" id="__BVID__7"><!----><div class=""><ul role="tablist" class="nav nav-pills small bg-light rounded" id="__BVID__7__BV_tab_controls_"><!----><li role="presentation" class="nav-item"><a role="tab" aria-selected="true" aria-setsize="2" aria-posinset="1" href="#" target="_self" class="nav-link active" id="__BVID__8___BV_tab_button__" aria-controls="__BVID__8">Provinces</a></li><li role="presentation" class="nav-item"><a role="tab" tabindex="-1" aria-selected="false" aria-setsize="2" aria-posinset="2" href="#" target="_self" class="nav-link" id="__BVID__10___BV_tab_button__" aria-controls="__BVID__10">Programs</a></li><!----></ul></div><div class="tab-content mt-3" id="__BVID__7__BV_tab_container_"><div role="tabpanel" aria-hidden="false" class="tab-pane active" id="__BVID__8" aria-labelledby="__BVID__8___BV_tab_button__"><p class="card-text"><div class="row ms-n1 me-n1"><div class="col-md-3 g-0 ps-1"><table class="table table-centered table-bordered table-nowrap"><thead class="thead-light"><tr class="font-size-10"><th style="width: 100%;">Province</th></tr></thead> <tbody class="font-size-11"><tr><td class="fw-bold" style="width: 100%; cursor: pointer;">
                                        Zamboanga Del Norte
                                    </td></tr><tr><td class="fw-bold" style="width: 100%; cursor: pointer;">
                                        City of Zamboanga
                                    </td></tr><tr><td class="fw-bold" style="width: 100%; cursor: pointer;">
                                        Zamboanga Del Sur
                                    </td></tr><tr><td class="fw-bold" style="width: 100%; cursor: pointer;">
                                        Zamboanga Sibugay
                                    </td></tr> <tr><td class="fw-bold font-size-12 text-success" style="width: 100%;">Total</td></tr></tbody></table></div> <div class="col-md-8 g-0"><table class="table table-centered table-bordered table-nowrap"><thead class="thead-light"><tr class="font-size-10"><th class="text-center" style="width: 13%;">
                                        RA 7687</th><th class="text-center" style="width: 13%;">
                                        Ra 10612</th><th class="text-center" style="width: 13%;">
                                        Merit</th></tr></thead> <tbody class="font-size-11"><tr><td class="text-center" style="width: 13%;">
                                        504
                                    </td><td class="text-center" style="width: 13%;">
                                        86
                                    </td><td class="text-center" style="width: 13%;">
                                        19
                                    </td><!----><!----><!----></tr><tr><td class="text-center" style="width: 13%;">
                                        306
                                    </td><td class="text-center" style="width: 13%;">
                                        54
                                    </td><td class="text-center" style="width: 13%;">
                                        20
                                    </td><!----><!----><!----></tr><tr><td class="text-center" style="width: 13%;">
                                        6
                                    </td><td class="text-center" style="width: 13%;">
                                        1
                                    </td><td class="text-center" style="width: 13%;">
                                        0
                                    </td><!----><!----><!----></tr><tr><td class="text-center" style="width: 13%;">
                                        0
                                    </td><td class="text-center" style="width: 13%;">
                                        0
                                    </td><td class="text-center" style="width: 13%;">
                                        0
                                    </td><!----><!----><!----></tr> <tr><td class="text-center font-size-12 text-success fw-bold" style="width: 13%;">816</td><td class="text-center font-size-12 text-success fw-bold" style="width: 13%;">141</td><td class="text-center font-size-12 text-success fw-bold" style="width: 13%;">39</td><!----><!----><!----></tr></tbody></table></div> <div class="col-md-1 g-0 pe-1"><table class="table table-centered table-bordered table-nowrap"><thead class="thead-light"><tr class="font-size-10"><th class="text-center" style="width: 100%;">Total</th></tr></thead> <tbody class="font-size-11"><tr><td class="fw-bold text-center text-success" style="width: 13%;">609</td></tr><tr><td class="fw-bold text-center text-success" style="width: 13%;">380</td></tr><tr><td class="fw-bold text-center text-success" style="width: 13%;">7</td></tr><tr><td class="fw-bold text-center text-success" style="width: 13%;">0</td></tr> <tr><td class="font-size-12 fw-bold  text-primary text-center" style="width: 100%;">996</td></tr></tbody></table></div></div></p></div> <div role="tabpanel" aria-hidden="true" class="tab-pane" style="display: none;" id="__BVID__10" aria-labelledby="__BVID__10___BV_tab_button__"><p class="card-text"><div class="table-responsive"><table class="table table-centered table-bordered table-nowrap mb-0"><thead class="thead-light"><tr class="font-size-10"><th style="width: 40%;">Name</th> <th class="text-center" style="width: 20%;">Undergraduate</th> <th class="text-center" style="width: 20%;">JLSS</th> <th class="text-center" style="width: 20%;">Total</th></tr></thead></table> <table class="table table-centered table-bordered table-nowrap"><tbody class="font-size-11"><tr><td class="fw-bold" style="width: 40%; cursor: pointer;">
                                    RA 7687
                                </td> <td class="text-center" style="width: 20%;">
                                    752
                                </td> <td class="text-center" style="width: 20%;">64</td> <td class="fw-bold text-center" style="width: 20%;">816</td></tr><tr><td class="fw-bold" style="width: 40%; cursor: pointer;">
                                    Ra 10612
                                </td> <td class="text-center" style="width: 20%;">
                                    0
                                </td> <td class="text-center" style="width: 20%;">141</td> <td class="fw-bold text-center" style="width: 20%;">141</td></tr><tr><td class="fw-bold" style="width: 40%; cursor: pointer;">
                                    Merit
                                </td> <td class="text-center" style="width: 20%;">
                                    29
                                </td> <td class="text-center" style="width: 20%;">10</td> <td class="fw-bold text-center" style="width: 20%;">39</td></tr></tbody></table></div></p></div><!----></div></div> <!----></div></div></div></div></div></div></section>

                <section id="team" class="section">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-8">
                                <div class="card bg-soft bg-info border shadow-none mb-3">
                                    <div class="p-1">
                                        <div class="d-flex mt-1">
                                            <div class="avatar-xs align-self-center ml-2 ms-2 mr-2">
                                                <div class="avatar-title rounded bg-transparent"><i
                                                        class="bx bx-news h4 mt-1"></i></div>
                                            </div>
                                            <div class="overflow-hidden mr-auto align-self-center">
                                                <h5 class="fw-bold font-size-12 mt-1 fw-bold">Announcements</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-xl-4 col-sm-6">
                                        <div class="blog-box mb-4 mb-xl-0">
                                            <div class="position-relative"><img
                                                    src="http://stsims.local/images/post-2.jpg" alt=""
                                                    class="rounded img-fluid mx-auto d-block">
                                                <div class="badge bg-success blog-badge font-size-11">Announcement</div>
                                            </div>
                                            <div class="mt-4 text-muted font-size-12">
                                                <p class="mb-2"><i class="bx bx-calendar me-1"></i> May 14, 2022 6:38 pm
                                                </p>
                                                <h6 class="mb-3 fw-bold">2021 DOST-SEI Undergraduate Scholars</h6>
                                                <p>The long wait is over for the applicants to the 20..</p>
                                                <div><a href="#">Read more</a></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xl-4 col-sm-6">
                                        <div class="blog-box mb-4 mb-xl-0">
                                            <div class="position-relative"><img
                                                    src="http://stsims.local/images/post-1.jpg" alt=""
                                                    class="rounded img-fluid mx-auto d-block">
                                                <div class="badge bg-success blog-badge font-size-11">News</div>
                                            </div>
                                            <div class="mt-4 text-muted font-size-12">
                                                <p class="mb-2"><i class="bx bx-calendar me-1"></i> May 14, 2022 5:57 pm
                                                </p>
                                                <h6 class="mb-3 fw-bold">The DOST-SEI is proud to announce the
                                                    qualifiers for the 2021 Junior Level Science Scholarships! </h6>
                                                <p>Congratulations, scholars! May your journey as sci..</p>
                                                <div><a href="#">Read more</a></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xl-4 col-sm-6">
                                        <div class="blog-box mb-4 mb-xl-0">
                                            <div class="position-relative"><img
                                                    src="http://stsims.local/images/default.jpg" alt=""
                                                    class="rounded img-fluid mx-auto d-block">
                                                <div class="badge bg-success blog-badge font-size-11">News</div>
                                            </div>
                                            <div class="mt-4 text-muted font-size-12">
                                                <p class="mb-2"><i class="bx bx-calendar me-1"></i> May 14, 2022 5:54 pm
                                                </p>
                                                <h6 class="mb-3 fw-bold">STSIMS version 1 released.</h6>
                                                <p>The Science and Technology Scholarship Information..</p>
                                                <div><a href="#">Read more</a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="card bg-soft bg-info border shadow-none mb-3">
                                    <div class="p-1">
                                        <div class="d-flex mt-1">
                                            <div class="avatar-xs align-self-center ml-2 ms-2 mr-2">
                                                <div class="avatar-title rounded bg-transparent"><i
                                                        class="bx bx-info-circle h4 mt-1"></i></div>
                                            </div>
                                            <div class="overflow-hidden mr-auto align-self-center">
                                                <h5 class="fw-bold font-size-12 mt-1 fw-bold">Quick Links</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card border"><a href="https://www.science-scholarships.ph" target="_blank">
                                        <div class="card-body">
                                            <div class="d-flex flex-wrap">
                                                <div class="avatar-sm">
                                                    <div
                                                        class="avatar-title bg-light rounded-circle font-size-20 text-primary">
                                                        <i class="bx bxs-window-alt"></i></div>
                                                </div>
                                                <div class="ms-3 mt-1">
                                                    <p class="fw-bold text-truncated mb-0">S&amp;T E-Scholarship </p>
                                                    <h5 class="mb-0 text-muted font-size-12">Web Application System</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </a></div>
                                <div class="card border mt-n3"><a
                                        href="https://www.sei.dost.gov.ph/images/stsd/ugradFAQ.pdf" target="_blank">
                                        <div class="card-body">
                                            <div class="d-flex flex-wrap">
                                                <div class="avatar-sm">
                                                    <div
                                                        class="avatar-title bg-light rounded-circle font-size-20 text-warning">
                                                        <i class="bx bxs-user-voice"></i></div>
                                                </div>
                                                <div class="ms-3 mt-1">
                                                    <p class="fw-bold text-truncated text-warning mb-0">Frequently Asked
                                                        Questions </p>
                                                    <h5 class="mb-0 text-muted font-size-12">DOST - Science Education
                                                        Institute</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </a></div>
                                <div class="card border  mt-n3">
                                    <div class="card-body">
                                        <div class="d-flex flex-wrap">
                                            <div class="avatar-sm">
                                                <div
                                                    class="avatar-title bg-light rounded-circle font-size-20 text-primary">
                                                    <img src="images/sei.png" alt="" class="ms-1" style="width: 25px;">
                                                </div>
                                            </div>
                                            <div class="ms-3 mt-1"><a href="https://www.sei.dost.gov.ph/"
                                                    target="_blank">
                                                    <p class="fw-bold text-truncated mb-0">Science Education Institute
                                                    </p>
                                                </a> <a href="https://www.dost.gov.ph/" target="_blank">
                                                    <h5 class="mb-0 text-muted font-size-12">Department of Science and
                                                        Technology
                                                    </h5>
                                                </a></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="input-group bg-light rounded mb-3"><input type="email"
                                        placeholder="Enter Email address" aria-label="Recipient's username"
                                        aria-describedby="button-addon2" class="form-control bg-transparent border-0">
                                    <div class="input-group-append"><button type="button" id="button-addon2"
                                            class="btn btn-primary rounded"><i class="bx bx-envelope"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <footer class="landing-footer">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="mb-2">
                                    <img src="images/logo-light.png" alt height="20" />
                                </div>
                                <p class="mb-2">{{ new Date().getFullYear() }} © DOST-IX</p>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    </body>
</template>
<script>
   export default {
      layout: null,
      data() {
            return {
                start: "",
                end: "",
                interval: "",
                days: "",
                minutes: "",
                hours: "",
                seconds: "",
                starttime: "Nov 5, 2020 15:37:25",
                endtime: "Dec 31, 2021 16:37:25"
            };
        },
        created() {
            window.addEventListener("scroll", this.windowScroll);
        },
        destroyed() {
            window.removeEventListener("scroll", this.windowScroll);
        },
        mounted() {
            this.start = new Date(this.starttime).getTime();
            this.end = new Date(this.endtime).getTime();
            // Update the count down every 1 second
            this.timerCount(this.start, this.end);
            this.interval = setInterval(() => {
                this.timerCount(this.start, this.end);
            }, 1000);
        },
        methods: {
         timerCount: function (start, end) {
               // Get todays date and time
               var now = new Date().getTime();

               // Find the distance between now an the count down date
               var distance = start - now;
               var passTime = end - now;

               if (distance < 0 && passTime < 0) {
                  clearInterval(this.interval);
                  return;
               } else if (distance < 0 && passTime > 0) {
                  this.calcTime(passTime);
               } else if (distance > 0 && passTime > 0) {
                  this.calcTime(distance);
               }
         },
         calcTime: function (dist) {
               // Time calculations for days, hours, minutes and seconds
               this.days = Math.floor(dist / (1000 * 60 * 60 * 24));
               this.hours = Math.floor(
                  (dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
               );
               this.minutes = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
               this.seconds = Math.floor((dist % (1000 * 60)) / 1000);
         },
         windowScroll() {
               const navbar = document.getElementById("navbar");
               if (
                  document.body.scrollTop >= 50 ||
                  document.documentElement.scrollTop >= 50
               ) {
                  navbar.classList.add("nav-sticky");
               } else {
                  navbar.classList.remove("nav-sticky");
               }
         },
         toggleMenu() {
               document.getElementById("topnav-menu-content").classList.toggle("show");
         },
         nextSlide() {
               this.$refs.carousel.goToPage(this.$refs.carousel.getNextPage());
         },
         prevSlide() {
               this.$refs.carousel.goToPage(this.$refs.carousel.getPreviousPage());
         }
      }
   }

</script>



