(self["webpackChunk"] = self["webpackChunk"] || []).push([["/js/app"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Auth/ForgotPassword.vue?vue&type=script&setup=true&lang=js":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Auth/ForgotPassword.vue?vue&type=script&setup=true&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia-vue3 */ "./node_modules/@inertiajs/inertia-vue3/dist/index.js");

var __default__ = {
  layout: null
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/Object.assign(__default__, {
  __name: 'ForgotPassword',
  props: {
    status: String
  },
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var form = (0,_inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_0__.useForm)({
      email: ''
    });

    var submit = function submit() {
      form.post('/forgot-password');
    };

    var __returned__ = {
      form: form,
      submit: submit,

      get useForm() {
        return _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_0__.useForm;
      }

    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Auth/Login.vue?vue&type=script&setup=true&lang=js":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Auth/Login.vue?vue&type=script&setup=true&lang=js ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia-vue3 */ "./node_modules/@inertiajs/inertia-vue3/dist/index.js");

var __default__ = {
  layout: null
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/Object.assign(__default__, {
  __name: 'Login',
  props: {
    canResetPassword: Boolean,
    status: String
  },
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var form = (0,_inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_0__.useForm)({
      email: '',
      password: 'dost9ict',
      remember: false
    });

    var submit = function submit() {
      form.post('login', {
        onFinish: function onFinish() {
          return form.reset('password');
        }
      });
    };

    var __returned__ = {
      form: form,
      submit: submit,

      get useForm() {
        return _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_0__.useForm;
      }

    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Home/Index.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Home/Index.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['auth'],
  data: function data() {
    return {
      currentUrl: window.location.origin,
      content: 'test'
    };
  },
  created: function created() {
    this.listenForNewEvent();
  },
  methods: {
    listenForNewEvent: function listenForNewEvent() {
      Echo["private"]('posts').listen('PostBroadcast', function (data) {
        console.log(data);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Modules/Users/Index.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Modules/Users/Index.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Shared_Header_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Shared/Header.vue */ "./resources/js/Shared/Header.vue");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  inject: ['count', 'height'],
  components: {
    Header: _Shared_Header_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      currentUrl: window.location.origin,
      title: "Users",
      items: [{
        text: "User",
        href: "/"
      }, {
        text: "Lists",
        active: true
      }],
      lists: [],
      meta: {},
      links: {}
    };
  },
  created: function created() {// this.fetch();
  },
  watch: {
    datares: {
      deep: true,
      handler: function handler() {
        var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

        if (val != null && val !== '') {
          this.message(val);
        }
      }
    },
    keyword: function keyword(newVal) {
      this.checkSearchStr(newVal);
    }
  },
  computed: {
    datares: function datares() {
      return this.$page.props.flash.datares;
    },
    types: function types() {
      return this.dropdowns.filter(function (x) {
        return x.type === 'Employment Status';
      });
    },
    offices: function offices() {
      return this.dropdowns.filter(function (x) {
        return x.classification === 'Office';
      });
    },
    departments: function departments() {
      return this.dropdowns.filter(function (x) {
        return x.type === 'Department';
      });
    },
    positions: function positions() {
      return this.dropdowns.filter(function (x) {
        return x.classification === 'Office';
      });
    }
  },
  methods: {
    checkSearchStr: lodash__WEBPACK_IMPORTED_MODULE_1___default().debounce(function (string) {
      this.fetch();
    }, 300),
    fetch: function fetch(page_url) {
      var _this = this;

      page_url = page_url || '/employees';
      axios.get(page_url, {
        params: {
          keyword: this.keyword,
          office: this.office,
          status: this.status,
          department: this.department,
          count: this.count,
          type: 'lists'
        }
      }).then(function (response) {
        if (response) {
          _this.lists = response.data.data;
          _this.meta = response.data.meta;
          _this.links = response.data.links;
          _this.page = _this.meta.per_page * (_this.meta.current_page - 1);
        }
      })["catch"](function (err) {
        return console.log(err);
      });
    },
    update: function update(list) {
      this.$refs.update.set(list);
      this.editable = true;
    },
    create: function create() {
      this.$refs.create.show();
      this.editable = false;
    },
    edit: function edit(list) {
      this.$refs.create.edit(list);
      this.editable = true;
    },
    group: function group(groups, user) {
      this.$refs.group.set(groups, user);
      this.editable = true;
    },
    role: function role(roles, user) {
      this.$refs.role.set(roles, user);
      this.editable = true;
    },
    verify: function verify(list) {
      this.$refs.verify.set(list);
    },
    message: function message(list) {
      if (!this.editable) {
        this.lists.unshift(list);
      } else {
        var index = this.lists.findIndex(function (u) {
          return u.id === list.id;
        });
        this.lists[index] = list;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Modules/Users/Modals/Create.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Modules/Users/Modals/Create.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_datepicker_next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-datepicker-next */ "./node_modules/vue-datepicker-next/index.es.js");
/* harmony import */ var vue_datepicker_next_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-datepicker-next/index.css */ "./node_modules/vue-datepicker-next/index.css");
/* harmony import */ var vue_image_crop_upload_upload_3_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-image-crop-upload/upload-3.vue */ "./node_modules/vue-image-crop-upload/upload-3.vue");
/* harmony import */ var _suadelabs_vue3_multiselect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @suadelabs/vue3-multiselect */ "./node_modules/@suadelabs/vue3-multiselect/dist/vue3-multiselect.umd.min.js");
/* harmony import */ var _suadelabs_vue3_multiselect__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_suadelabs_vue3_multiselect__WEBPACK_IMPORTED_MODULE_3__);




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['dropdowns', 'positions'],
  components: {
    myUpload: vue_image_crop_upload_upload_3_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    Multiselect: (_suadelabs_vue3_multiselect__WEBPACK_IMPORTED_MODULE_3___default()),
    DatePicker: vue_datepicker_next__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      currentUrl: window.location.origin,
      roles: ['Super Administrator', 'Regional Director', 'Accountant', 'Scholarship Coordinator', 'Scholarship Staff'],
      user: {
        id: '',
        email: '',
        firstname: '',
        lastname: '',
        middlename: '',
        birthday: '',
        gender: '',
        mobile: '',
        avatar: 'avatar.jpg',
        img: '',
        profile_id: '',
        status: '',
        position: '',
        department: '',
        office: '',
        level: '',
        religion: '',
        bloodtype: ''
      },
      form: {},
      editable: false,
      showModal: false,
      photo: {
        show: false,
        url: '',
        signature: ''
      },
      params: {
        token: '123456798',
        name: 'avatar'
      },
      headers: {
        smail: '*_~'
      }
    };
  },
  watch: {
    datares: {
      deep: true,
      handler: function handler() {
        var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

        if (val != null && val !== '') {
          this.$emit('info', val.data);
        }
      }
    }
  },
  computed: {
    statuses: function statuses() {
      return this.dropdowns.filter(function (x) {
        return x.type === 'Employment Status';
      });
    },
    departments: function departments() {
      return this.dropdowns.filter(function (x) {
        return x.type === 'Department';
      });
    },
    offices: function offices() {
      return this.dropdowns.filter(function (x) {
        return x.classification === 'Office';
      });
    },
    levels: function levels() {
      return this.dropdowns.filter(function (x) {
        return x.classification === 'Educational Level';
      });
    },
    religions: function religions() {
      return this.dropdowns.filter(function (x) {
        return x.classification === 'Religion';
      });
    },
    bloodtypes: function bloodtypes() {
      return this.dropdowns.filter(function (x) {
        return x.classification === 'Bloodtype';
      });
    },
    datares: function datares() {
      return this.$page.props.flash.datares;
    }
  },
  methods: {
    show: function show() {
      this.showModal = true;
    },
    edit: function edit(list) {
      this.user = list;
      this.user.birthday = new Date(list.birthday);
      this.showModal = true;
      this.editable = true;
    },
    create: function create() {
      var _this = this;

      this.form = this.$inertia.form({
        id: this.user.id,
        firstname: this.user.firstname,
        lastname: this.user.lastname,
        middlename: this.user.middlename,
        email: this.user.email,
        mobile: this.user.mobile,
        birthday: this.user.birthday != '' ? new Date(this.user.birthday).toLocaleDateString("af-ZA") : '',
        gender: this.user.gender,
        avatar: this.user.avatar,
        position_id: this.user.position.id,
        department_id: this.user.department.id,
        status_id: this.user.status.id,
        office_id: this.user.office.id,
        profile_id: this.user.profile_id,
        level_id: this.user.level_id,
        religion_id: this.user.religion_id,
        blood_id: this.user.blood_id,
        img: this.user.img,
        editable: this.editable
      });

      if (!this.editable) {
        this.form.post('/employees', {
          preserveScroll: true,
          onSuccess: function onSuccess(response) {
            _this.hide();
          }
        });
      } else {
        this.form.put('/employees/update', {
          preserveScroll: true,
          onSuccess: function onSuccess(response) {
            _this.hide();
          }
        });
      }
    },
    hide: function hide() {
      this.form.hasOwnProperty('reset') ? this.form.reset().clearErrors() : this.user = {};
      this.showModal = false;
    },
    toggleShow: function toggleShow() {
      this.photo.show = !this.photo.show;
    },
    cropSuccess: function cropSuccess(imgDataUrl, field) {
      this.photo.url = imgDataUrl;
      this.user.img = imgDataUrl;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Modules/Users/Modals/Group.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Modules/Users/Modals/Group.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _suadelabs_vue3_multiselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @suadelabs/vue3-multiselect */ "./node_modules/@suadelabs/vue3-multiselect/dist/vue3-multiselect.umd.min.js");
/* harmony import */ var _suadelabs_vue3_multiselect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_suadelabs_vue3_multiselect__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Multiselect: (_suadelabs_vue3_multiselect__WEBPACK_IMPORTED_MODULE_0___default())
  },
  props: ['groups'],
  data: function data() {
    return {
      currentUrl: window.location.origin,
      errors: [],
      group: [],
      status: false,
      showModal: false,
      form: this.$inertia.form({
        id: '',
        groups: []
      })
    };
  },
  methods: {
    set: function set(groups, id) {
      this.form.id = id;
      this.group = groups;
      this.showModal = true;
    },
    create: function create() {
      var _this = this;

      this.form.groups = this.group.map(function (a) {
        return a.id;
      });
      this.form.get('/employees/groups/edit', {
        preserveScroll: true,
        onSuccess: function onSuccess(response) {
          _this.showModal = false;
          _this.form.editable = true;
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Modules/Users/Modals/Role.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Modules/Users/Modals/Role.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _suadelabs_vue3_multiselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @suadelabs/vue3-multiselect */ "./node_modules/@suadelabs/vue3-multiselect/dist/vue3-multiselect.umd.min.js");
/* harmony import */ var _suadelabs_vue3_multiselect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_suadelabs_vue3_multiselect__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Multiselect: (_suadelabs_vue3_multiselect__WEBPACK_IMPORTED_MODULE_0___default())
  },
  props: ['roles'],
  data: function data() {
    return {
      currentUrl: window.location.origin,
      errors: [],
      user: {},
      role: [],
      status: false,
      showModal: false,
      form: this.$inertia.form({
        id: '',
        roles: []
      })
    };
  },
  methods: {
    set: function set(roles, id) {
      this.form.id = id;
      this.role = roles;
      this.showModal = true;
    },
    create: function create() {
      var _this = this;

      this.form.roles = this.role.map(function (a) {
        return a.id;
      });
      this.form.get('/employees/roles/edit', {
        preserveScroll: true,
        onSuccess: function onSuccess(response) {
          _this.showModal = false;
          _this.form.editable = true;
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Modules/Users/Modals/Update.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Modules/Users/Modals/Update.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      currentUrl: window.location.origin,
      errors: [],
      user: {},
      showModal: false
    };
  },
  methods: {
    set: function set(user) {
      this.user = user;
      this.showModal = true;
    },
    create: function create() {
      var _this = this;

      axios.put(this.currentUrl + '/employees/update', {
        id: this.user.id,
        is_active: this.user.is_active == 1 ? 0 : 1
      }).then(function (response) {
        _this.$emit('info', response.data.data);
      })["catch"](function (error) {
        if (error.response.status == 422) {
          _this.errors = error.response.data.errors;
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Modules/Users/Modals/Verify.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Modules/Users/Modals/Verify.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      currentUrl: window.location.origin,
      errors: [],
      user: {},
      status: false,
      showModal: false,
      form: this.$inertia.form({
        id: '',
        editable: 'verify'
      })
    };
  },
  methods: {
    set: function set(user) {
      this.user = user;
      this.showModal = true;
    },
    sendMail: function sendMail() {
      var _this = this;

      this.form.id = this.user.id;
      this.form.put('/employees/update', {
        preserveScroll: true,
        onSuccess: function onSuccess(response) {
          _this.showModal = false;
          _this.form.editable = true;
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Notifications/Documents.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Notifications/Documents.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var simplebar_vue3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! simplebar-vue3 */ "./node_modules/simplebar-vue3/dist/simplebar-vue3.es.js");
// import View from '../Modules/Document/Modals/View.vue';

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    SimpleBar: simplebar_vue3__WEBPACK_IMPORTED_MODULE_0__.SimpleBar
  },
  data: function data() {
    return {
      currentUrl: window.location.origin,
      errors: [],
      lists: [],
      links: {},
      total: 0,
      page: 1,
      last_page: ''
    };
  },
  created: function created() {// this.fetch();
  },
  methods: {
    listenForNewEvent: function listenForNewEvent() {
      var _this = this;

      Echo.join('public-channel').listen('TravelEvent', function (data) {
        var user = _this.profile.id;
        var exists = data.event.users.some(function (field) {
          return field.user_id === user;
        });

        if (data.event.type != "new") {
          if (data.event.type == "comments") {
            if (data.event.comment_by != user) {
              if (_this.roles.includes('Regional Director')) {
                data.event.action = data.event.action2;

                _this.seens.unshift(data.event);
              } else {
                exists ? _this.seens.unshift(data.event) : '';
              }
            }
          } else {
            exists ? _this.seens.unshift(data.event) : '';
          }
        } else {
          _this.roles.includes('Regional Director') ? _this.seens.unshift(data.event) : '';
        }
      });
    },
    fetch: function fetch() {
      var _this2 = this;

      axios.get(this.currentUrl + '/documents/notifications').then(function (response) {
        _this2.lists = response.data.data;
        _this2.total = response.data.meta.total;
        _this2.last_page = response.data.meta.last_page;
      })["catch"](function (err) {
        return console.log(err);
      });
    },
    more: function more() {
      var _this3 = this;

      this.page = this.page + 1;
      var page_url = this.currentUrl + '/documents/notifications?page=' + this.page;
      axios.get(page_url).then(function (response) {
        _this3.lists.push(response.data.data[0]);

        console.log(_this3.lists);
      })["catch"](function (err) {
        return console.log(err);
      });
    },
    view: function view(list) {
      var _this4 = this;

      axios.get(this.currentUrl + '/documents/' + list.id, {
        params: {
          action: list.actions
        }
      }).then(function (response) {
        var index = _this4.lists.findIndex(function (l) {
          return l.id === list.id;
        });

        _this4.lists.splice(index, 1);

        _this4.total = _this4.total - 1;

        _this4.$refs.view.show(list);
      })["catch"](function (err) {
        return console.log(err);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Notifications/Requests.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Notifications/Requests.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var simplebar_vue3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! simplebar-vue3 */ "./node_modules/simplebar-vue3/dist/simplebar-vue3.es.js");
// import View from '../Modules/Request/Modals/View.vue';

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    SimpleBar: simplebar_vue3__WEBPACK_IMPORTED_MODULE_0__.SimpleBar
  },
  data: function data() {
    return {
      currentUrl: window.location.origin,
      errors: [],
      lists: []
    };
  },
  created: function created() {// this.fetch();
    // this.listenForNewEvent();
    // this.roles = this.profile.roles.map(function(a) {return a.name;});
  },
  methods: {
    listenForNewEvent: function listenForNewEvent() {
      var _this = this;

      Echo.join('public-channel').listen('TravelEvent', function (data) {
        var user = _this.profile.id;
        var exists = data.event.users.some(function (field) {
          return field.user_id === user;
        });

        if (data.event.type != "new") {
          if (data.event.type == "comments") {
            if (data.event.comment_by != user) {
              if (_this.roles.includes('Regional Director')) {
                data.event.action = data.event.action2;

                _this.seens.unshift(data.event);
              } else {
                exists ? _this.seens.unshift(data.event) : '';
              }
            }
          } else {
            exists ? _this.seens.unshift(data.event) : '';
          }
        } else {
          _this.roles.includes('Regional Director') ? _this.seens.unshift(data.event) : '';
        }
      });
    },
    fetch: function fetch() {
      var _this2 = this;

      axios.get(this.currentUrl + '/application/notifications', {
        params: {
          seened: 0
        }
      }).then(function (response) {
        _this2.lists = response.data.data;
      })["catch"](function (err) {
        return console.log(err);
      });
    },
    view: function view(list) {
      var _this3 = this;

      axios.get(this.currentUrl + '/application/' + list.id).then(function (response) {
        var index = _this3.lists.findIndex(function (l) {
          return l.id === list.id;
        });

        _this3.lists.splice(index, 1);

        _this3.$refs.view.set(list);
      })["catch"](function (err) {
        return console.log(err);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Welcome.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Welcome.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  layout: null,
  data: function data() {
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
  created: function created() {
    window.addEventListener("scroll", this.windowScroll);
  },
  destroyed: function destroyed() {
    window.removeEventListener("scroll", this.windowScroll);
  },
  mounted: function mounted() {
    var _this = this;

    this.start = new Date(this.starttime).getTime();
    this.end = new Date(this.endtime).getTime(); // Update the count down every 1 second

    this.timerCount(this.start, this.end);
    this.interval = setInterval(function () {
      _this.timerCount(_this.start, _this.end);
    }, 1000);
  },
  methods: {
    timerCount: function timerCount(start, end) {
      // Get todays date and time
      var now = new Date().getTime(); // Find the distance between now an the count down date

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
    calcTime: function calcTime(dist) {
      // Time calculations for days, hours, minutes and seconds
      this.days = Math.floor(dist / (1000 * 60 * 60 * 24));
      this.hours = Math.floor(dist % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
      this.minutes = Math.floor(dist % (1000 * 60 * 60) / (1000 * 60));
      this.seconds = Math.floor(dist % (1000 * 60) / 1000);
    },
    windowScroll: function windowScroll() {
      var navbar = document.getElementById("navbar");

      if (document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50) {
        navbar.classList.add("nav-sticky");
      } else {
        navbar.classList.remove("nav-sticky");
      }
    },
    toggleMenu: function toggleMenu() {
      document.getElementById("topnav-menu-content").classList.toggle("show");
    },
    nextSlide: function nextSlide() {
      this.$refs.carousel.goToPage(this.$refs.carousel.getNextPage());
    },
    prevSlide: function prevSlide() {
      this.$refs.carousel.goToPage(this.$refs.carousel.getPreviousPage());
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Header.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Header.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    title: {
      type: String,
      "default": ''
    },
    content: {
      type: String
    },
    items: {
      type: Array,
      "default": function _default() {
        return [];
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Layout/Common/RightBar.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Layout/Common/RightBar.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var simplebar_vue3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! simplebar-vue3 */ "./node_modules/simplebar-vue3/dist/simplebar-vue3.es.js");
/* harmony import */ var click_outside_vue3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! click-outside-vue3 */ "./node_modules/click-outside-vue3/dist/v-click-outside.umd.js");
/* harmony import */ var click_outside_vue3__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(click_outside_vue3__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    SimpleBar: simplebar_vue3__WEBPACK_IMPORTED_MODULE_0__.SimpleBar,
    vClickOutside: (click_outside_vue3__WEBPACK_IMPORTED_MODULE_1___default())
  },
  directives: {
    clickOutside: (click_outside_vue3__WEBPACK_IMPORTED_MODULE_1___default().directive)
  },
  data: function data() {
    return {
      config: {
        handler: this.handleRightBarClick,
        middleware: this.middleware,
        events: ['dblclick', 'click']
      },
      layout: this.$root.layout.type,
      width: this.$root.layout.width,
      sidebarType: this.$root.layout.sidebar,
      topbar: this.$root.layout.topbar,
      loader: this.$root.layout.loader
    };
  },
  methods: {
    onClickOutside: function onClickOutside(event) {
      console.log('Clicked outside. Event: ', event);
    },
    hide: function hide() {
      this.$parent.toggleRightSidebar();
    },
    // eslint-disable-next-line no-unused-vars
    handleRightBarClick: function handleRightBarClick(event) {
      // console.log('Clicked outside (Using config), middleware returned true :)')
      this.$parent.hideRightSidebar();
    },
    // eslint-disable-next-line no-unused-vars
    middleware: function middleware(event, el) {
      return !event.target.classList.contains("toggle-right");
    },
    changeLayout: function changeLayout(layout) {
      this.sidebarType = "dark";
      this.topbar = "light";
      this.$root.changeLayout({
        type: layout,
        sidebar: "dark",
        topbar: "light"
      });
    },
    changeType: function changeType(type) {
      return this.$root.changeLayout({
        sidebar: type
      });
    },
    changeWidth: function changeWidth(width) {
      return this.$root.changeLayout({
        width: width
      });
    },
    changeTopbartype: function changeTopbartype(value) {
      return this.$root.changeLayout({
        topbar: value
      });
    },
    changeloader: function changeloader() {
      return this.$root.changeLayout({
        loader: this.loader
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Layout/Horizontal-Layout/Header.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Layout/Horizontal-Layout/Header.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var simplebar_vue3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! simplebar-vue3 */ "./node_modules/simplebar-vue3/dist/simplebar-vue3.es.js");
/* harmony import */ var _Pages_Notifications_Requests_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Pages/Notifications/Requests.vue */ "./resources/js/Pages/Notifications/Requests.vue");
/* harmony import */ var _Pages_Notifications_Documents_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Pages/Notifications/Documents.vue */ "./resources/js/Pages/Notifications/Documents.vue");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    SimpleBar: simplebar_vue3__WEBPACK_IMPORTED_MODULE_0__.SimpleBar,
    NotificationTravel: _Pages_Notifications_Requests_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    NotificationDocument: _Pages_Notifications_Documents_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      currentUrl: window.location.origin,
      text: null,
      flag: null,
      value: null
    };
  },
  mounted: function mounted() {
    this.value = "";
    this.text = this.value.title;
    this.flag = this.value.flag;
  },
  methods: {
    toggleRightSidebar: function toggleRightSidebar() {
      this.$parent.toggleRightSidebar();
    },
    toggleMenu: function toggleMenu() {
      var element = document.getElementById("topnav-menu-content");
      element.classList.toggle("show");
    },
    initFullScreen: function initFullScreen() {
      document.body.classList.toggle("fullscreen-enable");

      if (!document.fullscreenElement &&
      /* alternative standard method */
      !document.mozFullScreenElement && !document.webkitFullscreenElement) {
        // current working methods
        if (document.documentElement.requestFullscreen) {
          document.documentElement.requestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) {
          document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
          document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
        }
      } else {
        if (document.cancelFullScreen) {
          document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        }
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Layout/Horizontal-Layout/Index.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Layout/Horizontal-Layout/Index.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Navigation_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Navigation.vue */ "./resources/js/Shared/Layout/Horizontal-Layout/Navigation.vue");
/* harmony import */ var _Header_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header.vue */ "./resources/js/Shared/Layout/Horizontal-Layout/Header.vue");
/* harmony import */ var _Common_RightBar_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Common/RightBar.vue */ "./resources/js/Shared/Layout/Common/RightBar.vue");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['auth'],
  components: {
    Header: _Header_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    Navigation: _Navigation_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    RightBar: _Common_RightBar_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      isMenuCondensed: false
    };
  },
  created: function created() {
    document.body.setAttribute("data-layout", "horizontal");
    document.body.setAttribute("data-topbar", "dark");
    document.body.removeAttribute("data-sidebar", "dark");
    document.body.removeAttribute("data-layout-size", "boxed");
  },
  mounted: function mounted() {
    var layout = JSON.parse(localStorage.getItem("layout")) || {};

    if (layout.loader == true) {
      document.getElementById("preloader").style.display = "block";
      document.getElementById("status").style.display = "block";
      setTimeout(function () {
        document.getElementById("preloader").style.display = "none";
        document.getElementById("status").style.display = "none";
      }, 2500);
    } else {
      document.getElementById("preloader").style.display = "none";
      document.getElementById("status").style.display = "none";
    }
  },
  methods: {
    toggleMenu: function toggleMenu() {
      document.body.classList.toggle("sidebar-enable");

      if (window.screen.width >= 992) {
        document.body.classList.toggle("vertical-collpsed");
      } else {
        document.body.classList.remove("vertical-collpsed");
      }

      this.isMenuCondensed = !this.isMenuCondensed;
    },
    toggleRightSidebar: function toggleRightSidebar() {
      document.body.classList.toggle("right-bar-enabled");
    },
    hideRightSidebar: function hideRightSidebar() {
      document.body.classList.remove("right-bar-enabled");
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Layout/Horizontal-Layout/Navigation.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Layout/Horizontal-Layout/Navigation.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      wew: 'haha'
    };
  },
  created: function created() {
    console.log(this.wew);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Layout/Layout.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Layout/Layout.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Shared_Layout_Vertical_Layout_Index_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Shared/Layout/Vertical-Layout/Index.vue */ "./resources/js/Shared/Layout/Vertical-Layout/Index.vue");
/* harmony import */ var _Shared_Layout_Horizontal_Layout_Index_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Shared/Layout/Horizontal-Layout/Index.vue */ "./resources/js/Shared/Layout/Horizontal-Layout/Index.vue");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Vertical: _Shared_Layout_Vertical_Layout_Index_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    Horizontal: _Shared_Layout_Horizontal_Layout_Index_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  computed: {
    layoutType: function layoutType() {
      var _this$$root$layout;

      return (_this$$root$layout = this.$root.layout) === null || _this$$root$layout === void 0 ? void 0 : _this$$root$layout.type;
    },
    message: function message() {
      return this.$page.props.flash.message ? true : false;
    }
  },
  methods: {
    check: function check() {
      this.$page.props.flash.message = '';
      this.message = false;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Layout/Vertical-Layout/Header.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Layout/Vertical-Layout/Header.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var simplebar_vue3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! simplebar-vue3 */ "./node_modules/simplebar-vue3/dist/simplebar-vue3.es.js");
/* harmony import */ var _Pages_Notifications_Requests_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Pages/Notifications/Requests.vue */ "./resources/js/Pages/Notifications/Requests.vue");
/* harmony import */ var _Pages_Notifications_Documents_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Pages/Notifications/Documents.vue */ "./resources/js/Pages/Notifications/Documents.vue");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      languages: [{
        flag: "/images/flags/us.jpg",
        language: "en",
        title: "English"
      }, {
        flag: "/images/flags/phil.png",
        language: "ph",
        title: "Tagalog"
      }],
      lan: "en",
      text: null,
      flag: null,
      value: null,
      currentUrl: window.location.origin
    };
  },
  components: {
    SimpleBar: simplebar_vue3__WEBPACK_IMPORTED_MODULE_0__.SimpleBar,
    NotificationTravel: _Pages_Notifications_Requests_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    NotificationDocument: _Pages_Notifications_Documents_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  methods: {
    toggleMenu: function toggleMenu() {
      this.$parent.toggleMenu();
    },
    toggleRightSidebar: function toggleRightSidebar() {
      this.$parent.toggleRightSidebar();
    },
    initFullScreen: function initFullScreen() {
      document.body.classList.toggle("fullscreen-enable");

      if (!document.fullscreenElement &&
      /* alternative standard method */
      !document.mozFullScreenElement && !document.webkitFullscreenElement) {
        // current working methods
        if (document.documentElement.requestFullscreen) {
          document.documentElement.requestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) {
          document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
          document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
        }
      } else {
        if (document.cancelFullScreen) {
          document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        }
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Layout/Vertical-Layout/Index.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Layout/Vertical-Layout/Index.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Header_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header.vue */ "./resources/js/Shared/Layout/Vertical-Layout/Header.vue");
/* harmony import */ var _Shared_Layout_Common_RightBar_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Shared/Layout/Common/RightBar.vue */ "./resources/js/Shared/Layout/Common/RightBar.vue");
/* harmony import */ var _Shared_Layout_Vertical_Layout_Sidebar_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Shared/Layout/Vertical-Layout/Sidebar.vue */ "./resources/js/Shared/Layout/Vertical-Layout/Sidebar.vue");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Header: _Header_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    RightBar: _Shared_Layout_Common_RightBar_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    Sidebar: _Shared_Layout_Vertical_Layout_Sidebar_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      isMenuCondensed: false
    };
  },
  created: function created() {
    document.body.removeAttribute("data-layout", "horizontal");
    document.body.removeAttribute("data-topbar", "dark");
  },
  mounted: function mounted() {
    var layout = JSON.parse(localStorage.getItem("layout")) || {};

    if (layout.loader == true) {
      document.getElementById("preloader").style.display = "block";
      document.getElementById("status").style.display = "block";
      setTimeout(function () {
        document.getElementById("preloader").style.display = "none";
        document.getElementById("status").style.display = "none";
      }, 2500);
    } else {
      document.getElementById("preloader").style.display = "none";
      document.getElementById("status").style.display = "none";
    }
  },
  methods: {
    toggleMenu: function toggleMenu() {
      document.body.classList.toggle("sidebar-enable");

      if (window.screen.width >= 992) {
        document.body.classList.toggle("vertical-collpsed");
      } else {
        document.body.classList.remove("vertical-collpsed");
      }

      this.isMenuCondensed = !this.isMenuCondensed;
    },
    toggleRightSidebar: function toggleRightSidebar() {
      document.body.classList.toggle("right-bar-enabled");
    },
    hideRightSidebar: function hideRightSidebar() {
      document.body.classList.remove("right-bar-enabled");
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Layout/Vertical-Layout/SideItem.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Layout/Vertical-Layout/SideItem.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ "./resources/js/Shared/Layout/Vertical-Layout/menu.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      menuItems: _menu__WEBPACK_IMPORTED_MODULE_0__.menuItems,
      menuData: null
    };
  },
  methods: {
    hasItems: function hasItems(item) {
      return item.subItems !== undefined ? item.subItems.length > 0 : false;
    },
    toggleMenu: function toggleMenu(event) {
      event.currentTarget.nextElementSibling.classList.toggle("mm-show");
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Layout/Vertical-Layout/Sidebar.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Layout/Vertical-Layout/Sidebar.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var simplebar_vue3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! simplebar-vue3 */ "./node_modules/simplebar-vue3/dist/simplebar-vue3.es.js");
/* harmony import */ var _SideItem_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SideItem.vue */ "./resources/js/Shared/Layout/Vertical-Layout/SideItem.vue");


/**
 * Sidebar component
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    SimpleBar: simplebar_vue3__WEBPACK_IMPORTED_MODULE_0__.SimpleBar,
    SideNav: _SideItem_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: {
    isCondensed: {
      type: Boolean,
      "default": false
    },
    user: {
      type: Object
    }
  },
  data: function data() {
    return {
      settings: {
        minScrollbarLength: 60
      }
    };
  },
  methods: {
    onRoutechange: function onRoutechange() {
      var _this = this;

      setTimeout(function () {
        if (document.getElementsByClassName("mm-active").length > 0) {
          var currentPosition = document.getElementsByClassName("mm-active")[0].offsetTop;
          if (currentPosition > 500) _this.$refs.currentMenu.SimpleBar.getScrollElement().scrollTop = currentPosition + 300;
        }
      }, 300);
    }
  },
  watch: {
    $route: {
      handler: "onRoutechange",
      immediate: true,
      deep: true
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Auth/ForgotPassword.vue?vue&type=template&id=2d73eca8":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Auth/ForgotPassword.vue?vue&type=template&id=2d73eca8 ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "d-flex flex-column min-vh-100 justify-content-center align-items-center"
};
var _hoisted_2 = {
  "class": ""
};

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "text-center mb-2 text-muted"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  to: "/",
  "class": "d-block auth-logo"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "/images/logo-dark.png",
  alt: "",
  height: "20",
  "class": "auth-logo-dark mx-auto"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "font-size-11 mt-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Department of Science & Technology "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Scholarship Information Management System")])], -1
/* HOISTED */
);

var _hoisted_4 = {
  "class": "card",
  style: {
    "width": "400px"
  }
};
var _hoisted_5 = {
  "class": "card-body pt-4"
};
var _hoisted_6 = {
  "class": "p-2"
};
var _hoisted_7 = ["onSubmit"];
var _hoisted_8 = {
  "class": "mt-n3 mb-4"
};

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "fw-medium text-primary"
}, " Reset Password", -1
/* HOISTED */
);

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("hr", null, null, -1
/* HOISTED */
);

var _hoisted_11 = {
  key: 0,
  "class": "mb-4 font-medium text-sm text-green-600"
};
var _hoisted_12 = {
  "class": "form-group mb-2"
};

var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "email",
  style: {
    "margin-bottom": "-5px"
  }
}, "Email", -1
/* HOISTED */
);

var _hoisted_14 = {
  "class": "mt-3 d-grid"
};
var _hoisted_15 = ["disabled"];
var _hoisted_16 = {
  "class": "mt-4 mb-n3 text-center"
};
var _hoisted_17 = {
  "class": "font-size-11"
};

var _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "text-center"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("© DOST-STSIMS "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bx bxs-heart text-danger"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" 2021")], -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Head = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Head");

  var _component_Link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Link");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Head, {
    title: "Forgot Password"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [_hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    "class": "form-horizontal",
    onSubmit: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($setup.submit, ["prevent"])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [_hoisted_9, _hoisted_10, $props.status ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.status), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [_hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "email",
    placeholder: "Enter email",
    "class": "form-control",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $setup.form.email = $event;
    }),
    required: "",
    autocomplete: "email",
    autofocus: ""
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.email]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["btn btn-primary btn-block waves-effect waves-light", {
      'opacity-25': $setup.form.processing
    }]),
    disabled: $setup.form.processing,
    type: "submit"
  }, "Email Password Reset Link", 10
  /* CLASS, PROPS */
  , _hoisted_15)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Remember It ? "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: "/login",
    "class": "fw-medium text-primary"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Sign In here")];
    }),
    _: 1
    /* STABLE */

  })])])], 40
  /* PROPS, HYDRATE_EVENTS */
  , _hoisted_7)])])]), _hoisted_18])])], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Auth/Login.vue?vue&type=template&id=a2ac2cea":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Auth/Login.vue?vue&type=template&id=a2ac2cea ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "d-flex flex-column min-vh-100 justify-content-center align-items-center"
};
var _hoisted_2 = {
  "class": ""
};
var _hoisted_3 = {
  "class": "card"
};
var _hoisted_4 = {
  "class": "card-body pt-4"
};
var _hoisted_5 = {
  "class": "p-2"
};
var _hoisted_6 = ["onSubmit"];

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"row mb-3\"><div class=\"col-2\"><img src=\"images/dost.png\" alt=\"\" class=\"avatar-sm\"></div><div class=\"col-10\"><div class=\"text-primary mt-1\"><p>Department of Science &amp; Technology <br>Region IX - Official Communication Portal</p></div></div></div>", 1);

var _hoisted_8 = {
  "class": "form-group mb-2"
};

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "email",
  style: {
    "margin-bottom": "-5px"
  }
}, "Email/Username", -1
/* HOISTED */
);

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "invalid-feedback",
  role: "alert"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, "asdada")], -1
/* HOISTED */
);

var _hoisted_11 = {
  "class": "form-group mb-4"
};

var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "password",
  style: {
    "margin-bottom": "-5px"
  }
}, "Password", -1
/* HOISTED */
);

var _hoisted_13 = {
  "class": "form-check text-success",
  style: {
    "font-size": "13px"
  }
};

var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-check-label",
  "for": "__BVID__90"
}, "Remember me", -1
/* HOISTED */
);

var _hoisted_15 = ["textContent"];
var _hoisted_16 = {
  "class": "mt-3 d-grid"
};
var _hoisted_17 = ["disabled"];
var _hoisted_18 = {
  "class": "mt-4 mb-n3 text-center"
};
var _hoisted_19 = {
  "class": "font-size-11"
};

var _hoisted_20 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "text-center"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("© DOST PORTAL "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bx bxs-heart text-danger"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" 2021")], -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Head = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Head");

  var _component_Link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Link");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Head, {
    title: "Login"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    "class": "form-horizontal",
    onSubmit: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($setup.submit, ["prevent"])
  }, [_hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [_hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    placeholder: "Enter email/username",
    "class": "form-control",
    type: "text",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $setup.form.email = $event;
    }),
    required: "",
    autofocus: ""
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.email]]), _hoisted_10]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [_hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "password",
    "class": "form-control",
    placeholder: "Enter password",
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $setup.form.password = $event;
    }),
    required: "",
    autocomplete: "current-password"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.password]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "checkbox",
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $setup.form.remember = $event;
    }),
    "class": "form-check-input",
    id: "__BVID__90"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $setup.form.remember]]), _hoisted_14]), Object.keys($setup.form.errors).length != 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    "class": "alert alert-warning text-center mt-4 mb-4",
    role: "alert",
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.form.errors.email)
  }, null, 8
  /* PROPS */
  , _hoisted_15)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([{
      'opacity-25': $setup.form.processing
    }, "btn btn-primary btn-block waves-effect waves-light"]),
    disabled: $setup.form.processing,
    type: "submit"
  }, "LogIn", 10
  /* CLASS, PROPS */
  , _hoisted_17)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Forgot you password? "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: "forgot-password",
    "class": "fw-medium text-primary"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Click here")];
    }),
    _: 1
    /* STABLE */

  })])])], 40
  /* PROPS, HYDRATE_EVENTS */
  , _hoisted_6)])])]), _hoisted_20])])], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Auth/NewPassword.vue?vue&type=template&id=6400ac06":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Auth/NewPassword.vue?vue&type=template&id=6400ac06 ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
function render(_ctx, _cache) {
  return " new password ";
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Auth/ResetPassword.vue?vue&type=template&id=1da614ac":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Auth/ResetPassword.vue?vue&type=template&id=1da614ac ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
function render(_ctx, _cache) {
  return " s ";
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Home/Index.vue?vue&type=template&id=f311f62a":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Home/Index.vue?vue&type=template&id=f311f62a ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.auth) + " s ";
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Modules/Users/Index.vue?vue&type=template&id=7f7480ac":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Modules/Users/Index.vue?vue&type=template&id=7f7480ac ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "col-12 mt-n3"
};
var _hoisted_2 = {
  "class": "card"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Header = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Header");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Header, {
    title: $data.title,
    content: $data.title,
    items: $data.items
  }, null, 8
  /* PROPS */
  , ["title", "content", "items"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "card-body",
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
      height: $options.height + 'px'
    })
  }, null, 4
  /* STYLE */
  )])])], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Modules/Users/Modals/Create.vue?vue&type=template&id=0967293d":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Modules/Users/Modals/Create.vue?vue&type=template&id=0967293d ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "row",
  style: {
    "margin-right": "10px",
    "margin-left": "10px"
  }
};
var _hoisted_2 = {
  "class": "col-md-3"
};
var _hoisted_3 = {
  key: 0
};
var _hoisted_4 = ["src"];

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-picture"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Click here to upload"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <span v-if=\"errors.avatar\" style=\"color: red; font-size: 12px; margin-top: -20px;\">({{ errors.avatar[0] }})</span> ")], -1
/* HOISTED */
);

var _hoisted_6 = [_hoisted_5];
var _hoisted_7 = {
  "class": "col-md-9"
};
var _hoisted_8 = {
  "class": "row mt-3"
};
var _hoisted_9 = {
  "class": "col-md-4"
};
var _hoisted_10 = {
  "class": "form-group mb-3"
};
var _hoisted_11 = ["textContent"];
var _hoisted_12 = {
  "class": "col-md-4"
};
var _hoisted_13 = {
  "class": "form-group"
};
var _hoisted_14 = ["textContent"];
var _hoisted_15 = {
  "class": "col-md-4"
};
var _hoisted_16 = {
  "class": "form-group"
};
var _hoisted_17 = ["textContent"];
var _hoisted_18 = {
  "class": "col-md-4"
};
var _hoisted_19 = {
  "class": "form-group"
};
var _hoisted_20 = ["textContent"];
var _hoisted_21 = {
  "class": "col-md-4"
};
var _hoisted_22 = {
  "class": "form-group"
};
var _hoisted_23 = ["textContent"];
var _hoisted_24 = {
  "class": "col-md-4"
};
var _hoisted_25 = {
  "class": "form-group"
};
var _hoisted_26 = ["textContent"];
var _hoisted_27 = {
  "class": "col-md-6",
  style: {
    "margin-top": "-8px",
    "margin-bottom": "-15px"
  }
};
var _hoisted_28 = {
  "class": "row",
  style: {
    "margin-top": "20px"
  }
};
var _hoisted_29 = {
  "class": "col-md-4"
};
var _hoisted_30 = {
  "class": "custom-control custom-radio mb-3"
};

var _hoisted_31 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "custom-control-label",
  "for": "customRadio1"
}, "Male", -1
/* HOISTED */
);

var _hoisted_32 = {
  "class": "col-md-8"
};
var _hoisted_33 = {
  "class": "custom-control custom-radio mb-3"
};

var _hoisted_34 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "custom-control-label",
  "for": "customRadio2"
}, "Female", -1
/* HOISTED */
);

var _hoisted_35 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-md-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("hr", {
  "class": "mb-4"
})], -1
/* HOISTED */
);

var _hoisted_36 = {
  "class": "col-md-6"
};
var _hoisted_37 = {
  "class": "form-group"
};
var _hoisted_38 = ["textContent"];
var _hoisted_39 = {
  "class": "col-md-6"
};
var _hoisted_40 = {
  "class": "form-group"
};
var _hoisted_41 = ["textContent"];
var _hoisted_42 = {
  "class": "col-md-6"
};
var _hoisted_43 = {
  "class": "form-group",
  style: {
    "margin-top": "5px"
  }
};
var _hoisted_44 = ["textContent"];
var _hoisted_45 = {
  "class": "col-md-6"
};
var _hoisted_46 = {
  "class": "form-group",
  style: {
    "margin-top": "5px"
  }
};
var _hoisted_47 = ["textContent"];
var _hoisted_48 = {
  "class": "col-md-6"
};
var _hoisted_49 = {
  "class": "form-group",
  style: {
    "margin-top": "5px"
  }
};
var _hoisted_50 = ["textContent"];
var _hoisted_51 = {
  "class": "col-md-3"
};
var _hoisted_52 = {
  "class": "form-group",
  style: {
    "margin-top": "5px"
  }
};
var _hoisted_53 = ["textContent"];
var _hoisted_54 = {
  "class": "col-md-3"
};
var _hoisted_55 = {
  "class": "form-group",
  style: {
    "margin-top": "5px"
  }
};
var _hoisted_56 = ["textContent"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_myUpload = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("myUpload");

  var _component_date_picker = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("date-picker");

  var _component_Multiselect = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Multiselect");

  var _component_b_form = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-form");

  var _component_b_button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-button");

  var _component_b_modal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-modal");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_b_modal, {
    modelValue: $data.showModal,
    "onUpdate:modelValue": _cache[20] || (_cache[20] = function ($event) {
      return $data.showModal = $event;
    }),
    onOk: _cache[21] || (_cache[21] = function ($event) {
      return $options.create($event);
    }),
    id: "create",
    size: "xl",
    title: "Create Employee",
    "no-close-on-backdrop": "",
    centered: ""
  }, {
    footer: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_button, {
        onClick: _cache[18] || (_cache[18] = function ($event) {
          return $options.hide();
        }),
        variant: "secondary",
        block: ""
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Cancel")];
        }),
        _: 1
        /* STABLE */

      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_button, {
        onClick: _cache[19] || (_cache[19] = function ($event) {
          return $options.create('ok');
        }),
        variant: "primary",
        disabled: $data.form.processing,
        block: ""
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Save")];
        }),
        _: 1
        /* STABLE */

      }, 8
      /* PROPS */
      , ["disabled"])];
    }),
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_myUpload, {
        field: "img",
        onCropSuccess: $options.cropSuccess,
        modelValue: $data.photo.show,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
          return $data.photo.show = $event;
        }),
        width: 500,
        height: 500,
        params: $data.params,
        headers: $data.headers,
        "lang-type": "en",
        "img-format": "png"
      }, null, 8
      /* PROPS */
      , ["onCropSuccess", "modelValue", "params", "headers"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
        onClick: _cache[2] || (_cache[2] = function () {
          return $options.toggleShow && $options.toggleShow.apply($options, arguments);
        }),
        "class": "fuzone",
        style: {
          "width": "225px",
          "height": "210px"
        }
      }, [$data.photo.url != '' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
        src: $data.photo.url,
        style: {
          "width": "200px",
          "height": "200x"
        }
      }, null, 8
      /* PROPS */
      , _hoisted_4)])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
        key: 1,
        "class": "fu-text",
        onClick: _cache[1] || (_cache[1] = function () {
          return $options.toggleShow && $options.toggleShow.apply($options, arguments);
        })
      }, _hoisted_6))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form, {
        "class": "customform"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Lastname: "), $data.form.errors ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
            key: 0,
            textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.errors.lastname),
            "class": "haveerror"
          }, null, 8
          /* PROPS */
          , _hoisted_11)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
            type: "text",
            "class": "form-control",
            "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
              return $data.user.lastname = $event;
            }),
            style: {
              "text-transform": "capitalize"
            }
          }, null, 512
          /* NEED_PATCH */
          ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.user.lastname]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Firstname: "), $data.form.errors ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
            key: 0,
            textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.errors.firstname),
            "class": "haveerror"
          }, null, 8
          /* PROPS */
          , _hoisted_14)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
            type: "text",
            "class": "form-control",
            "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
              return $data.user.firstname = $event;
            }),
            style: {
              "text-transform": "capitalize"
            }
          }, null, 512
          /* NEED_PATCH */
          ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.user.firstname]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Middlename: "), $data.form.errors ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
            key: 0,
            textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.errors.middlename),
            "class": "haveerror"
          }, null, 8
          /* PROPS */
          , _hoisted_17)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" :class=\"[(form.errors != undefined) ? 'is-invalid' : '']\" "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
            type: "text",
            "class": "form-control",
            "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
              return $data.user.middlename = $event;
            }),
            style: {
              "text-transform": "capitalize"
            }
          }, null, 512
          /* NEED_PATCH */
          ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.user.middlename]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Email: "), $data.form.errors ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
            key: 0,
            textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.errors.email),
            "class": "haveerror"
          }, null, 8
          /* PROPS */
          , _hoisted_20)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
            type: "email",
            "class": "form-control",
            "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
              return $data.user.email = $event;
            }),
            style: {
              "text-transform": "lowercase"
            }
          }, null, 512
          /* NEED_PATCH */
          ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.user.email]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Mobile No.: "), $data.form.errors ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
            key: 0,
            textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.errors.mobile),
            "class": "haveerror"
          }, null, 8
          /* PROPS */
          , _hoisted_23)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
            type: "text",
            "class": "form-control",
            "onUpdate:modelValue": _cache[7] || (_cache[7] = function ($event) {
              return $data.user.mobile = $event;
            })
          }, null, 512
          /* NEED_PATCH */
          ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.user.mobile]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_24, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_25, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Birthday: "), $data.form.errors ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
            key: 0,
            textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.errors.birthday),
            "class": "haveerror"
          }, null, 8
          /* PROPS */
          , _hoisted_26)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_date_picker, {
            value: $data.user.birthday,
            "onUpdate:value": _cache[8] || (_cache[8] = function ($event) {
              return $data.user.birthday = $event;
            }),
            type: "date",
            format: "YYYY-MM-DD",
            lang: "en",
            placeholder: "Select Date",
            clearable: false
          }, null, 8
          /* PROPS */
          , ["value"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_27, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_28, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_29, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_30, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
            type: "radio",
            id: "customRadio1",
            "class": "custom-control-input me-2",
            value: "M",
            "onUpdate:modelValue": _cache[9] || (_cache[9] = function ($event) {
              return $data.user.gender = $event;
            })
          }, null, 512
          /* NEED_PATCH */
          ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelRadio, $data.user.gender]]), _hoisted_31])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_32, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_33, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
            type: "radio",
            id: "customRadio2",
            "class": "custom-control-input me-2",
            value: "F",
            "onUpdate:modelValue": _cache[10] || (_cache[10] = function ($event) {
              return $data.user.gender = $event;
            })
          }, null, 512
          /* NEED_PATCH */
          ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelRadio, $data.user.gender]]), _hoisted_34])])])]), _hoisted_35, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_36, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_37, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Position: "), $data.form.errors ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
            key: 0,
            textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.errors.position_id),
            "class": "haveerror"
          }, null, 8
          /* PROPS */
          , _hoisted_38)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Multiselect, {
            modelValue: $data.user.position,
            "onUpdate:modelValue": _cache[11] || (_cache[11] = function ($event) {
              return $data.user.position = $event;
            }),
            options: $props.positions,
            "allow-empty": false,
            "show-labels": false,
            label: "name",
            "track-by": "id",
            placeholder: "Select Role"
          }, null, 8
          /* PROPS */
          , ["modelValue", "options"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_39, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_40, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Status: "), $data.form.errors ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
            key: 0,
            textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.errors.status_id),
            "class": "haveerror"
          }, null, 8
          /* PROPS */
          , _hoisted_41)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Multiselect, {
            modelValue: $data.user.status,
            "onUpdate:modelValue": _cache[12] || (_cache[12] = function ($event) {
              return $data.user.status = $event;
            }),
            options: $options.statuses,
            "allow-empty": false,
            "show-labels": false,
            label: "name",
            "track-by": "id",
            placeholder: "Select Status"
          }, null, 8
          /* PROPS */
          , ["modelValue", "options"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_42, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_43, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Department: "), $data.form.errors ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
            key: 0,
            textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.errors.department_id),
            "class": "haveerror"
          }, null, 8
          /* PROPS */
          , _hoisted_44)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Multiselect, {
            modelValue: $data.user.department,
            "onUpdate:modelValue": _cache[13] || (_cache[13] = function ($event) {
              return $data.user.department = $event;
            }),
            options: $options.departments,
            "allow-empty": false,
            "show-labels": false,
            label: "others",
            "track-by": "id",
            placeholder: "Select Department"
          }, null, 8
          /* PROPS */
          , ["modelValue", "options"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_45, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_46, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Office: "), $data.form.errors ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
            key: 0,
            textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.errors.office_id),
            "class": "haveerror"
          }, null, 8
          /* PROPS */
          , _hoisted_47)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Multiselect, {
            modelValue: $data.user.office,
            "onUpdate:modelValue": _cache[14] || (_cache[14] = function ($event) {
              return $data.user.office = $event;
            }),
            options: $options.offices,
            "allow-empty": false,
            "show-labels": false,
            label: "name",
            "track-by": "id",
            placeholder: "Select Office"
          }, null, 8
          /* PROPS */
          , ["modelValue", "options"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_48, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_49, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Educational Level: "), $data.form.errors ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
            key: 0,
            textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.errors.level_id),
            "class": "haveerror"
          }, null, 8
          /* PROPS */
          , _hoisted_50)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Multiselect, {
            modelValue: $data.user.level,
            "onUpdate:modelValue": _cache[15] || (_cache[15] = function ($event) {
              return $data.user.level = $event;
            }),
            options: $options.levels,
            "allow-empty": false,
            "show-labels": false,
            label: "name",
            "track-by": "id",
            placeholder: "Select Level"
          }, null, 8
          /* PROPS */
          , ["modelValue", "options"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_51, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_52, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Religion: "), $data.form.errors ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
            key: 0,
            textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.errors.religion_id),
            "class": "haveerror"
          }, null, 8
          /* PROPS */
          , _hoisted_53)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Multiselect, {
            modelValue: $data.user.religion,
            "onUpdate:modelValue": _cache[16] || (_cache[16] = function ($event) {
              return $data.user.religion = $event;
            }),
            options: $options.religions,
            "allow-empty": false,
            "show-labels": false,
            label: "name",
            "track-by": "id",
            placeholder: "Select Level"
          }, null, 8
          /* PROPS */
          , ["modelValue", "options"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_54, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_55, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Bloodtype: "), $data.form.errors ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
            key: 0,
            textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.errors.blood_id),
            "class": "haveerror"
          }, null, 8
          /* PROPS */
          , _hoisted_56)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Multiselect, {
            modelValue: $data.user.bloodtype,
            "onUpdate:modelValue": _cache[17] || (_cache[17] = function ($event) {
              return $data.user.bloodtype = $event;
            }),
            options: $options.bloodtypes,
            "allow-empty": false,
            "show-labels": false,
            label: "name",
            "track-by": "id",
            placeholder: "Select Level"
          }, null, 8
          /* PROPS */
          , ["modelValue", "options"])])])])];
        }),
        _: 1
        /* STABLE */

      })])])];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["modelValue"]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Modules/Users/Modals/Group.vue?vue&type=template&id=41f5f664":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Modules/Users/Modals/Group.vue?vue&type=template&id=41f5f664 ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "form-group mb-2 mt-2"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "Groups:", -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Multiselect = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Multiselect");

  var _component_b_form = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-form");

  var _component_b_modal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-modal");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_b_modal, {
    onOk: _cache[1] || (_cache[1] = function ($event) {
      return $options.create($event);
    }),
    modelValue: $data.showModal,
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $data.showModal = $event;
    }),
    "ok-title": "Confirm",
    title: "Employee Group",
    centered: ""
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form, {
        "class": "customform"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Multiselect, {
            modelValue: $data.group,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
              return $data.group = $event;
            }),
            options: $props.groups,
            "allow-empty": false,
            "show-labels": false,
            multiple: true,
            label: "acronym",
            "track-by": "id",
            placeholder: "Select Group"
          }, null, 8
          /* PROPS */
          , ["modelValue", "options"])])];
        }),
        _: 1
        /* STABLE */

      })];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["modelValue"]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Modules/Users/Modals/Role.vue?vue&type=template&id=236191f7":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Modules/Users/Modals/Role.vue?vue&type=template&id=236191f7 ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "form-group mb-2 mt-2"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "Roles:", -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Multiselect = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Multiselect");

  var _component_b_form = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-form");

  var _component_b_modal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-modal");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_b_modal, {
    onOk: _cache[1] || (_cache[1] = function ($event) {
      return $options.create($event);
    }),
    modelValue: $data.showModal,
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $data.showModal = $event;
    }),
    "ok-title": "Confirm",
    title: "Employee Roles",
    centered: ""
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form, {
        "class": "customform"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Multiselect, {
            modelValue: $data.role,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
              return $data.role = $event;
            }),
            options: $props.roles,
            "allow-empty": true,
            "show-labels": false,
            multiple: true,
            label: "name",
            "track-by": "id",
            placeholder: "Select Role"
          }, null, 8
          /* PROPS */
          , ["modelValue", "options"])])];
        }),
        _: 1
        /* STABLE */

      })];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["modelValue"]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Modules/Users/Modals/Update.vue?vue&type=template&id=b3b1daec":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Modules/Users/Modals/Update.vue?vue&type=template&id=b3b1daec ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  key: 0
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "fw-bold text-danger"
}, "deactivate", -1
/* HOISTED */
);

var _hoisted_3 = {
  key: 1
};

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "fw-bold text-success"
}, "activate", -1
/* HOISTED */
);

var _hoisted_5 = {
  key: 2,
  "class": "alert alert-warning",
  role: "alert"
};
var _hoisted_6 = {
  key: 3,
  "class": "alert alert-warning",
  role: "alert"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _this = this;

  var _component_b_modal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-modal");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_b_modal, {
    modelValue: $data.showModal,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $data.showModal = $event;
    }),
    onOk: _cache[1] || (_cache[1] = function ($event) {
      return $options.create($event);
    }),
    id: "update",
    "ok-title": "Confirm",
    title: "Update Status",
    centered: ""
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_this.user.is_active == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Are you sure you want to "), _hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.user.firstname) + " " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.user.lastname) + "?", 1
      /* TEXT */
      )])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Are you sure you want to "), _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.user.firstname) + " " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.user.lastname) + "?", 1
      /* TEXT */
      )])), _this.user.is_active == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_5, " This should blocked user from accessing the system. ")) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_6, " This should allow user from accessing the system. "))];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["modelValue"]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Modules/Users/Modals/Verify.vue?vue&type=template&id=7a380a3a":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Modules/Users/Modals/Verify.vue?vue&type=template&id=7a380a3a ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "p-2"
};
var _hoisted_2 = {
  "class": "text-center"
};
var _hoisted_3 = {
  key: 0
};

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "avatar-md mx-auto"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "avatar-title rounded-circle bg-light"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bx bxs-envelope h1 mb-0 text-primary"
})])], -1
/* HOISTED */
);

var _hoisted_5 = {
  "class": "p-2 mt-2"
};

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "Send Verification Link", -1
/* HOISTED */
);

var _hoisted_7 = {
  "class": "font-size-12 text-muted"
};
var _hoisted_8 = {
  "class": "fw-bold"
};
var _hoisted_9 = {
  "class": "mt-4"
};
var _hoisted_10 = ["disabled"];
var _hoisted_11 = {
  key: 1
};

var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "avatar-md mx-auto"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "avatar-title rounded-circle bg-light"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bx bx-mail-send h1 mb-0 text-primary"
})])], -1
/* HOISTED */
);

var _hoisted_13 = {
  "class": "p-2 mt-2"
};

var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
  "class": "text-success"
}, "Success!", -1
/* HOISTED */
);

var _hoisted_15 = {
  "class": "font-size-12 text-muted"
};
var _hoisted_16 = {
  "class": "fw-bold"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_b_form = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-form");

  var _component_b_modal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-modal");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_b_modal, {
    modelValue: $data.showModal,
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $data.showModal = $event;
    }),
    id: "verify",
    "ok-title": "Confirm",
    "hide-footer": "",
    title: "User Verification",
    centered: ""
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form, {
        "class": "customform"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [!$data.status ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_3, [_hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [_hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Send Verification link to "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.user.email), 1
          /* TEXT */
          ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" for activation. ")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
            type: "button",
            disabled: $data.form.processing,
            onClick: _cache[0] || (_cache[0] = function ($event) {
              return $options.sendMail();
            }),
            "class": "btn btn-success w-md"
          }, "Send Mail", 8
          /* PROPS */
          , _hoisted_10)])])])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_11, [_hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [_hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Verification was sent to "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.user.email), 1
          /* TEXT */
          ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" for activation. ")])])]))];
        }),
        _: 1
        /* STABLE */

      })])])];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["modelValue"]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Notifications/Documents.vue?vue&type=template&id=536b2418":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Notifications/Documents.vue?vue&type=template&id=536b2418 ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  key: 0,
  "class": "badge bg-danger rounded-pill"
};
var _hoisted_2 = {
  "class": "p-3"
};
var _hoisted_3 = {
  "class": "row align-items-center"
};

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", {
  "class": "m-0"
}, "Document Notifications ")], -1
/* HOISTED */
);

var _hoisted_5 = {
  key: 0,
  "class": "col-auto"
};
var _hoisted_6 = {
  href: "#!",
  "class": "small",
  key: "t-view-all"
};
var _hoisted_7 = {
  "class": "list-group"
};
var _hoisted_8 = ["onClick"];
var _hoisted_9 = {
  "class": "media"
};
var _hoisted_10 = {
  "class": "avatar-xs me-3"
};
var _hoisted_11 = {
  "class": "media-body mb-n2"
};
var _hoisted_12 = {
  "class": "float-end",
  style: {
    "margin-top": "5px"
  }
};
var _hoisted_13 = {
  "class": "mb-0 font-size-10",
  style: {
    "margin-top": "-5px"
  }
};

var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bx bx-calendar me-1"
}, null, -1
/* HOISTED */
);

var _hoisted_15 = {
  "class": "font-size-12 font-weight-bold mb-0"
};
var _hoisted_16 = {
  "class": "font-size-11 text-muted mt-2"
};
var _hoisted_17 = {
  "class": "p-2 border-top d-grid"
};
var _hoisted_18 = {
  "class": "btn btn-sm btn-link font-size-12 text-center",
  style: {
    "cursor": "pointer"
  }
};
var _hoisted_19 = {
  key: "t-view-more"
};
var _hoisted_20 = {
  key: 2
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_SimpleBar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("SimpleBar");

  var _component_b_dropdown = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-dropdown");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_b_dropdown, {
    right: "",
    "menu-class": "dropdown-menu-lg p-0 dropdown-menu-end",
    "toggle-class": "header-item noti-icon",
    variant: "black"
  }, {
    "button-content": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["bx bx-book-bookmark", [$data.total != 0 ? 'bx-tada' : '']])
      }, null, 2
      /* CLASS */
      ), $data.total != 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.total), 1
      /* TEXT */
      )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)];
    }),
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [_hoisted_4, $data.lists.length != 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_6, " View All (" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.total) + ")", 1
      /* TEXT */
      )])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]), $data.lists.length != 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_SimpleBar, {
        key: 0,
        style: {
          "max-height": "230px"
        }
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_7, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.lists, function (list, index) {
            return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
              onClick: function onClick($event) {
                return $options.view(list);
              },
              "class": "list-group-item",
              key: index,
              style: {
                "cursor": "pointer"
              }
            }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
              "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["avatar-title rounded-circle", [list.action == 0 ? 'bg-warning' : 'bg-danger']])
            }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
              "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["bx", [list.action == 0 ? 'bx-show' : 'bxs-comment-dots']])
            }, null, 2
            /* CLASS */
            )], 2
            /* CLASS */
            )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_13, [_hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(list.created_at), 1
            /* TEXT */
            )])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", _hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(list.route_slip), 1
            /* TEXT */
            ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(list.subject), 1
            /* TEXT */
            )])])], 8
            /* PROPS */
            , _hoisted_8);
          }), 128
          /* KEYED_FRAGMENT */
          ))])];
        }),
        _: 1
        /* STABLE */

      })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_18, [$data.lists.length == 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_19, " No notifications found. ")) : $data.page < $data.last_page ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
        key: 1,
        onClick: _cache[0] || (_cache[0] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
          return $options.more();
        }, ["prevent"])),
        onClickCapture: _cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {}, ["stop"]))
      }, " View More ", 32
      /* HYDRATE_EVENTS */
      )) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_20, " Nothing to load "))])])];
    }),
    _: 1
    /* STABLE */

  });
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Notifications/Requests.vue?vue&type=template&id=4602dc94":
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Notifications/Requests.vue?vue&type=template&id=4602dc94 ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  key: 0,
  "class": "badge bg-danger rounded-pill"
};
var _hoisted_2 = {
  "class": "p-3"
};
var _hoisted_3 = {
  "class": "row align-items-center"
};

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", {
  "class": "m-0"
}, "Request Notifications ")], -1
/* HOISTED */
);

var _hoisted_5 = {
  key: 0,
  "class": "col-auto"
};

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#!",
  "class": "small",
  key: "t-view-all"
}, " View All (1)", -1
/* HOISTED */
);

var _hoisted_7 = [_hoisted_6];
var _hoisted_8 = {
  "class": "list-group"
};
var _hoisted_9 = ["onClick"];
var _hoisted_10 = {
  "class": "media"
};
var _hoisted_11 = {
  "class": "avatar-xs me-3"
};

var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bx bx-badge-check"
}, null, -1
/* HOISTED */
);

var _hoisted_13 = [_hoisted_12];
var _hoisted_14 = {
  "class": "media-body"
};
var _hoisted_15 = {
  "class": "float-end",
  style: {
    "margin-top": "5px"
  }
};
var _hoisted_16 = {
  "class": "mb-0 font-size-10",
  style: {
    "margin-top": "-5px"
  }
};

var _hoisted_17 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bx bx-calendar me-1"
}, null, -1
/* HOISTED */
);

var _hoisted_18 = {
  "class": "font-size-12 fw-bold mb-0"
};
var _hoisted_19 = {
  "class": "font-size-11 mt-2 mb-0"
};
var _hoisted_20 = {
  "class": "text-info fw-bold"
};
var _hoisted_21 = {
  "class": "text-muted"
};
var _hoisted_22 = {
  "class": "p-2 border-top d-grid"
};
var _hoisted_23 = {
  "class": "btn btn-sm btn-link font-size-12 text-center",
  style: {
    "cursor": "default"
  }
};
var _hoisted_24 = {
  key: "t-view-more"
};
var _hoisted_25 = {
  key: "t-view-more1"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_SimpleBar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("SimpleBar");

  var _component_b_dropdown = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-dropdown");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_dropdown, {
    right: "",
    "menu-class": "dropdown-menu-lg p-0 dropdown-menu-end",
    "toggle-class": "header-item noti-icon",
    variant: "black"
  }, {
    "button-content": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["bx bxs-notepad", [$data.lists.length != 0 ? 'bx-tada' : '']])
      }, null, 2
      /* CLASS */
      ), $data.lists.length != 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.lists.length), 1
      /* TEXT */
      )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)];
    }),
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [_hoisted_4, $data.lists.length != 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_5, _hoisted_7)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]), $data.lists.length != 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_SimpleBar, {
        key: 0,
        style: {
          "max-height": "230px"
        }
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_8, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.lists, function (list, index) {
            return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
              onClick: function onClick($event) {
                return $options.view(list);
              },
              "class": "list-group-item",
              key: index,
              style: {
                "cursor": "pointer"
              }
            }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
              "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["avatar-title rounded-circle", list.bg])
            }, _hoisted_13, 2
            /* CLASS */
            )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_16, [_hoisted_17, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(list.created), 1
            /* TEXT */
            )])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", _hoisted_18, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(list.code), 1
            /* TEXT */
            ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_20, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(list.profile.name), 1
            /* TEXT */
            ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_21, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(list.action) + ".", 1
            /* TEXT */
            )])])])], 8
            /* PROPS */
            , _hoisted_9);
          }), 128
          /* KEYED_FRAGMENT */
          ))])];
        }),
        _: 1
        /* STABLE */

      })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_23, [$data.lists.length == 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_24, " No notifications found. ")) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_25, " View More "))])])];
    }),
    _: 1
    /* STABLE */

  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <View :role=\"$page.props.auth.data.role\" ref=\"view\"/> ")], 2112
  /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Welcome.vue?vue&type=template&id=317d1a6e":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Welcome.vue?vue&type=template&id=317d1a6e ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "navbar navbar-expand-lg navigation fixed-top sticky",
  id: "navbar"
};
var _hoisted_2 = {
  "class": "container"
};

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "navbar-logo",
  href: "/"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "images/logo-dark.png",
  alt: "",
  height: "19",
  "class": "logo logo-dark"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "images/logo-light.png",
  alt: "",
  height: "19",
  "class": "logo logo-light"
})], -1
/* HOISTED */
);

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-fw fa-bars"
}, null, -1
/* HOISTED */
);

var _hoisted_5 = [_hoisted_4];
var _hoisted_6 = {
  "class": "collapse navbar-collapse",
  id: "topnav-menu-content"
};

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<ul class=\"navbar-nav ms-auto\" id=\"topnav-menu\"><li class=\"nav-item\"><a class=\"nav-link\" href=\"javascript: void(0);\">Home</a></li><li class=\"nav-item\"><a class=\"nav-link\" href=\"javascript: void(0);\">About</a></li></ul>", 1);

var _hoisted_8 = {
  "class": "ms-lg-2"
};

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<section class=\"section hero-section bg-ico-hero\" id=\"home\" style=\"margin-bottom:-230px;\"><div class=\"bg-overlay bg-primary\"></div><div class=\"container\"><div class=\"row\" style=\"margin-top:-120px;\"><div class=\"col-md-12\"><div class=\"row\"><div class=\"col-1 me-n2\"><img src=\"images/sei.png\" alt=\"\" class=\"avatar-sm\"></div><div class=\"col-10 ms-n4\"><div class=\"text-white-50\"><h5 class=\"text-white fw-semibold mb-0 hero-title\" style=\"font-size:21px;\"> DOST-IX Scholarship Program </h5><p class=\"font-size-14\">Science &amp; Technology Scholarship Information Management System</p></div></div></div></div><!-- &lt;div class=&quot;col-md-6&quot;&gt;\r\n                            &lt;div class=&quot;text-white-50 mt-n1 float-end text-end&quot;&gt;\r\n                                &lt;h5 class=&quot;text-white fw-semibold mb-0 hero-title&quot; style=&quot;font-size: 27px;&quot;&gt;DOST-IX&lt;/h5&gt;\r\n                                &lt;p class=&quot;font-size-14&quot;&gt;Department Of Science And Technology - IX&lt;/p&gt;\r\n                            &lt;/div&gt;\r\n                        &lt;/div&gt; --></div></div></section>", 1);

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", {
  id: "about",
  "class": "section pt-4 bg-white"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "container"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row mt-4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-lg-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row g-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-lg-4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "card border mini-stats-wid"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "card-body"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "d-flex flex-wrap"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "me-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "text-muted mb-2"
}, "Total Scholars"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
  "class": "mb-0"
}, "1007")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "avatar-sm ms-auto"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "avatar-title bg-light rounded-circle font-size-20 text-success"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bx bx-group"
})])])])])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-lg-4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "card border mini-stats-wid"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "card-body"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "d-flex flex-wrap"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "me-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "text-muted mb-2"
}, "Total Graduates"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
  "class": "mb-0"
}, "651")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "avatar-sm ms-auto"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "avatar-title bg-light rounded-circle font-size-20 text-info"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bx bxs-graduation"
})])])])])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-lg-4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "card border mini-stats-wid"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "card-body"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "d-flex flex-wrap"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "me-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "text-muted mb-2"
}, "Ongoing Scholars"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
  "class": "mb-0"
}, "193")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "avatar-sm ms-auto"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "avatar-title bg-light rounded-circle font-size-20 text-primary"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bx bx-user-circle"
})])])])])])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "card-body"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "me-n2 ms-n2"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
  "class": "list-inline user-chat-nav text-end ms-4 mt-1 dropdown float-end"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "list-inline-item d-non d-sm-inline-block",
  style: {
    "margin-right": "50px"
  }
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "form-check"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  type: "checkbox",
  id: "programs",
  "class": "form-check-input"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "programs",
  "class": "form-check-label font-size-11"
}, " Sub-Programs")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "list-inline-item d-non d-sm-inline-block",
  style: {
    "margin-right": "50px"
  }
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "form-check"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  type: "checkbox",
  id: "graph",
  "class": "form-check-input"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "graph",
  "class": "form-check-label font-size-11"
}, " Graphical View")])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tabs",
  id: "__BVID__7"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(""), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": ""
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
  role: "tablist",
  "class": "nav nav-pills small bg-light rounded",
  id: "__BVID__7__BV_tab_controls_"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(""), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  role: "presentation",
  "class": "nav-item"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  role: "tab",
  "aria-selected": "true",
  "aria-setsize": "2",
  "aria-posinset": "1",
  href: "#",
  target: "_self",
  "class": "nav-link active",
  id: "__BVID__8___BV_tab_button__",
  "aria-controls": "__BVID__8"
}, "Provinces")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  role: "presentation",
  "class": "nav-item"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  role: "tab",
  tabindex: "-1",
  "aria-selected": "false",
  "aria-setsize": "2",
  "aria-posinset": "2",
  href: "#",
  target: "_self",
  "class": "nav-link",
  id: "__BVID__10___BV_tab_button__",
  "aria-controls": "__BVID__10"
}, "Programs")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tab-content mt-3",
  id: "__BVID__7__BV_tab_container_"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  role: "tabpanel",
  "aria-hidden": "false",
  "class": "tab-pane active",
  id: "__BVID__8",
  "aria-labelledby": "__BVID__8___BV_tab_button__"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "card-text"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row ms-n1 me-n1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-md-3 g-0 ps-1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", {
  "class": "table table-centered table-bordered table-nowrap"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", {
  "class": "thead-light"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
  "class": "font-size-10"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  style: {
    "width": "100%"
  }
}, "Province")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", {
  "class": "font-size-11"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  "class": "fw-bold",
  style: {
    "width": "100%",
    "cursor": "pointer"
  }
}, " Zamboanga Del Norte ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  "class": "fw-bold",
  style: {
    "width": "100%",
    "cursor": "pointer"
  }
}, " City of Zamboanga ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  "class": "fw-bold",
  style: {
    "width": "100%",
    "cursor": "pointer"
  }
}, " Zamboanga Del Sur ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  "class": "fw-bold",
  style: {
    "width": "100%",
    "cursor": "pointer"
  }
}, " Zamboanga Sibugay ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  "class": "fw-bold font-size-12 text-success",
  style: {
    "width": "100%"
  }
}, "Total")])])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-md-8 g-0"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", {
  "class": "table table-centered table-bordered table-nowrap"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", {
  "class": "thead-light"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
  "class": "font-size-10"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-center",
  style: {
    "width": "13%"
  }
}, " RA 7687"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-center",
  style: {
    "width": "13%"
  }
}, " Ra 10612"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-center",
  style: {
    "width": "13%"
  }
}, " Merit")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", {
  "class": "font-size-11"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  "class": "text-center",
  style: {
    "width": "13%"
  }
}, " 504 "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  "class": "text-center",
  style: {
    "width": "13%"
  }
}, " 86 "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  "class": "text-center",
  style: {
    "width": "13%"
  }
}, " 19 "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(""), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(""), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  "class": "text-center",
  style: {
    "width": "13%"
  }
}, " 306 "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  "class": "text-center",
  style: {
    "width": "13%"
  }
}, " 54 "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  "class": "text-center",
  style: {
    "width": "13%"
  }
}, " 20 "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(""), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(""), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  "class": "text-center",
  style: {
    "width": "13%"
  }
}, " 6 "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  "class": "text-center",
  style: {
    "width": "13%"
  }
}, " 1 "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  "class": "text-center",
  style: {
    "width": "13%"
  }
}, " 0 "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(""), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(""), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  "class": "text-center",
  style: {
    "width": "13%"
  }
}, " 0 "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  "class": "text-center",
  style: {
    "width": "13%"
  }
}, " 0 "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  "class": "text-center",
  style: {
    "width": "13%"
  }
}, " 0 "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(""), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(""), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  "class": "text-center font-size-12 text-success fw-bold",
  style: {
    "width": "13%"
  }
}, "816"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  "class": "text-center font-size-12 text-success fw-bold",
  style: {
    "width": "13%"
  }
}, "141"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  "class": "text-center font-size-12 text-success fw-bold",
  style: {
    "width": "13%"
  }
}, "39"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(""), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(""), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("")])])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-md-1 g-0 pe-1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", {
  "class": "table table-centered table-bordered table-nowrap"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", {
  "class": "thead-light"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
  "class": "font-size-10"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-center",
  style: {
    "width": "100%"
  }
}, "Total")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", {
  "class": "font-size-11"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  "class": "fw-bold text-center text-success",
  style: {
    "width": "13%"
  }
}, "609")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  "class": "fw-bold text-center text-success",
  style: {
    "width": "13%"
  }
}, "380")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  "class": "fw-bold text-center text-success",
  style: {
    "width": "13%"
  }
}, "7")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  "class": "fw-bold text-center text-success",
  style: {
    "width": "13%"
  }
}, "0")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  "class": "font-size-12 fw-bold text-primary text-center",
  style: {
    "width": "100%"
  }
}, "996")])])])])])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  role: "tabpanel",
  "aria-hidden": "true",
  "class": "tab-pane",
  style: {
    "display": "none"
  },
  id: "__BVID__10",
  "aria-labelledby": "__BVID__10___BV_tab_button__"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "card-text"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "table-responsive"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", {
  "class": "table table-centered table-bordered table-nowrap mb-0"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", {
  "class": "thead-light"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
  "class": "font-size-10"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  style: {
    "width": "40%"
  }
}, "Name"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-center",
  style: {
    "width": "20%"
  }
}, "Undergraduate"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-center",
  style: {
    "width": "20%"
  }
}, "JLSS"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "text-center",
  style: {
    "width": "20%"
  }
}, "Total")])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", {
  "class": "table table-centered table-bordered table-nowrap"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", {
  "class": "font-size-11"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  "class": "fw-bold",
  style: {
    "width": "40%",
    "cursor": "pointer"
  }
}, " RA 7687 "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  "class": "text-center",
  style: {
    "width": "20%"
  }
}, " 752 "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  "class": "text-center",
  style: {
    "width": "20%"
  }
}, "64"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  "class": "fw-bold text-center",
  style: {
    "width": "20%"
  }
}, "816")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  "class": "fw-bold",
  style: {
    "width": "40%",
    "cursor": "pointer"
  }
}, " Ra 10612 "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  "class": "text-center",
  style: {
    "width": "20%"
  }
}, " 0 "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  "class": "text-center",
  style: {
    "width": "20%"
  }
}, "141"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  "class": "fw-bold text-center",
  style: {
    "width": "20%"
  }
}, "141")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  "class": "fw-bold",
  style: {
    "width": "40%",
    "cursor": "pointer"
  }
}, " Merit "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  "class": "text-center",
  style: {
    "width": "20%"
  }
}, " 29 "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  "class": "text-center",
  style: {
    "width": "20%"
  }
}, "10"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  "class": "fw-bold text-center",
  style: {
    "width": "20%"
  }
}, "39")])])])])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("")])])])])])])], -1
/* HOISTED */
);

var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<section id=\"team\" class=\"section\"><div class=\"container\"><div class=\"row\"><div class=\"col-lg-8\"><div class=\"card bg-soft bg-info border shadow-none mb-3\"><div class=\"p-1\"><div class=\"d-flex mt-1\"><div class=\"avatar-xs align-self-center ml-2 ms-2 mr-2\"><div class=\"avatar-title rounded bg-transparent\"><i class=\"bx bx-news h4 mt-1\"></i></div></div><div class=\"overflow-hidden mr-auto align-self-center\"><h5 class=\"fw-bold font-size-12 mt-1 fw-bold\">Announcements</h5></div></div></div></div><div class=\"row\"><div class=\"col-xl-4 col-sm-6\"><div class=\"blog-box mb-4 mb-xl-0\"><div class=\"position-relative\"><img src=\"http://stsims.local/images/post-2.jpg\" alt=\"\" class=\"rounded img-fluid mx-auto d-block\"><div class=\"badge bg-success blog-badge font-size-11\">Announcement</div></div><div class=\"mt-4 text-muted font-size-12\"><p class=\"mb-2\"><i class=\"bx bx-calendar me-1\"></i> May 14, 2022 6:38 pm </p><h6 class=\"mb-3 fw-bold\">2021 DOST-SEI Undergraduate Scholars</h6><p>The long wait is over for the applicants to the 20..</p><div><a href=\"#\">Read more</a></div></div></div></div><div class=\"col-xl-4 col-sm-6\"><div class=\"blog-box mb-4 mb-xl-0\"><div class=\"position-relative\"><img src=\"http://stsims.local/images/post-1.jpg\" alt=\"\" class=\"rounded img-fluid mx-auto d-block\"><div class=\"badge bg-success blog-badge font-size-11\">News</div></div><div class=\"mt-4 text-muted font-size-12\"><p class=\"mb-2\"><i class=\"bx bx-calendar me-1\"></i> May 14, 2022 5:57 pm </p><h6 class=\"mb-3 fw-bold\">The DOST-SEI is proud to announce the qualifiers for the 2021 Junior Level Science Scholarships! </h6><p>Congratulations, scholars! May your journey as sci..</p><div><a href=\"#\">Read more</a></div></div></div></div><div class=\"col-xl-4 col-sm-6\"><div class=\"blog-box mb-4 mb-xl-0\"><div class=\"position-relative\"><img src=\"http://stsims.local/images/default.jpg\" alt=\"\" class=\"rounded img-fluid mx-auto d-block\"><div class=\"badge bg-success blog-badge font-size-11\">News</div></div><div class=\"mt-4 text-muted font-size-12\"><p class=\"mb-2\"><i class=\"bx bx-calendar me-1\"></i> May 14, 2022 5:54 pm </p><h6 class=\"mb-3 fw-bold\">STSIMS version 1 released.</h6><p>The Science and Technology Scholarship Information..</p><div><a href=\"#\">Read more</a></div></div></div></div></div></div><div class=\"col-lg-4\"><div class=\"card bg-soft bg-info border shadow-none mb-3\"><div class=\"p-1\"><div class=\"d-flex mt-1\"><div class=\"avatar-xs align-self-center ml-2 ms-2 mr-2\"><div class=\"avatar-title rounded bg-transparent\"><i class=\"bx bx-info-circle h4 mt-1\"></i></div></div><div class=\"overflow-hidden mr-auto align-self-center\"><h5 class=\"fw-bold font-size-12 mt-1 fw-bold\">Quick Links</h5></div></div></div></div><div class=\"card border\"><a href=\"https://www.science-scholarships.ph\" target=\"_blank\"><div class=\"card-body\"><div class=\"d-flex flex-wrap\"><div class=\"avatar-sm\"><div class=\"avatar-title bg-light rounded-circle font-size-20 text-primary\"><i class=\"bx bxs-window-alt\"></i></div></div><div class=\"ms-3 mt-1\"><p class=\"fw-bold text-truncated mb-0\">S&amp;T E-Scholarship </p><h5 class=\"mb-0 text-muted font-size-12\">Web Application System</h5></div></div></div></a></div><div class=\"card border mt-n3\"><a href=\"https://www.sei.dost.gov.ph/images/stsd/ugradFAQ.pdf\" target=\"_blank\"><div class=\"card-body\"><div class=\"d-flex flex-wrap\"><div class=\"avatar-sm\"><div class=\"avatar-title bg-light rounded-circle font-size-20 text-warning\"><i class=\"bx bxs-user-voice\"></i></div></div><div class=\"ms-3 mt-1\"><p class=\"fw-bold text-truncated text-warning mb-0\">Frequently Asked Questions </p><h5 class=\"mb-0 text-muted font-size-12\">DOST - Science Education Institute</h5></div></div></div></a></div><div class=\"card border mt-n3\"><div class=\"card-body\"><div class=\"d-flex flex-wrap\"><div class=\"avatar-sm\"><div class=\"avatar-title bg-light rounded-circle font-size-20 text-primary\"><img src=\"images/sei.png\" alt=\"\" class=\"ms-1\" style=\"width:25px;\"></div></div><div class=\"ms-3 mt-1\"><a href=\"https://www.sei.dost.gov.ph/\" target=\"_blank\"><p class=\"fw-bold text-truncated mb-0\">Science Education Institute </p></a> <a href=\"https://www.dost.gov.ph/\" target=\"_blank\"><h5 class=\"mb-0 text-muted font-size-12\">Department of Science and Technology </h5></a></div></div></div></div><div class=\"input-group bg-light rounded mb-3\"><input type=\"email\" placeholder=\"Enter Email address\" aria-label=\"Recipient&#39;s username\" aria-describedby=\"button-addon2\" class=\"form-control bg-transparent border-0\"><div class=\"input-group-append\"><button type=\"button\" id=\"button-addon2\" class=\"btn btn-primary rounded\"><i class=\"bx bx-envelope\"></i></button></div></div></div></div></div></section>", 1);

var _hoisted_12 = {
  "class": "landing-footer"
};
var _hoisted_13 = {
  "class": "container"
};
var _hoisted_14 = {
  "class": "row"
};
var _hoisted_15 = {
  "class": "col-lg-6"
};

var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "mb-2"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "images/logo-light.png",
  alt: "",
  height: "20"
})], -1
/* HOISTED */
);

var _hoisted_17 = {
  "class": "mb-2"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Head = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Head");

  var _component_Link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Link");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Head, {
    title: "Welcome DOST Scholars"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("body", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("nav", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [_hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-sm px-3 font-size-16 d-lg-none header-item",
    "data-toggle": "collapse",
    "data-target": "#topnav-menu-content",
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return $options.toggleMenu();
    })
  }, _hoisted_5), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [_hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: "/login",
    "class": "btn btn-outline-success w-xs"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Sign in")];
    }),
    _: 1
    /* STABLE */

  })])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [_hoisted_9, _hoisted_10, _hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("footer", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [_hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_17, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(new Date().getFullYear()) + " © DOST-IX", 1
  /* TEXT */
  )])])])])])])])], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Header.vue?vue&type=template&id=6517032e":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Header.vue?vue&type=template&id=6517032e ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "row"
};
var _hoisted_2 = {
  "class": "col-12"
};
var _hoisted_3 = {
  "class": "page-title-box d-flex align-items-center justify-content-between"
};
var _hoisted_4 = {
  style: {
    "margin-top": "-7px"
  }
};
var _hoisted_5 = {
  "class": "page-title-right font-size-11"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Head = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Head");

  var _component_b_breadcrumb = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-breadcrumb");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Head, {
    title: $props.title
  }, null, 8
  /* PROPS */
  , ["title"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.content), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_breadcrumb, {
    items: $props.items,
    "class": "m-0"
  }, null, 8
  /* PROPS */
  , ["items"])])])])])], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Layout/Common/RightBar.vue?vue&type=template&id=7f5f5272":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Layout/Common/RightBar.vue?vue&type=template&id=7f5f5272 ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "right-bar"
};
var _hoisted_2 = {
  "class": "rightbar-title px-3 py-4"
};

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "mdi mdi-close noti-icon"
}, null, -1
/* HOISTED */
);

var _hoisted_4 = [_hoisted_3];

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
  "class": "m-0"
}, "Settings", -1
/* HOISTED */
);

var _hoisted_6 = {
  "class": "p-3"
};

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", {
  "class": "mb-0"
}, "Layout", -1
/* HOISTED */
);

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("hr", {
  "class": "mt-1"
}, null, -1
/* HOISTED */
);

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", {
  "class": "mt-3"
}, "Width", -1
/* HOISTED */
);

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("hr", {
  "class": "mt-1"
}, null, -1
/* HOISTED */
);

var _hoisted_11 = {
  key: 0
};

var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", {
  "class": "mt-3"
}, "Sidebar", -1
/* HOISTED */
);

var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("hr", {
  "class": "mt-1"
}, null, -1
/* HOISTED */
);

var _hoisted_14 = {
  key: 1
};

var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", {
  "class": "mt-3"
}, "Topbar", -1
/* HOISTED */
);

var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("hr", {
  "class": "mt-1"
}, null, -1
/* HOISTED */
);

var _hoisted_17 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", {
  "class": "mt-3"
}, "Preloader", -1
/* HOISTED */
);

var _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("hr", {
  "class": "mt-1"
}, null, -1
/* HOISTED */
);

var _hoisted_19 = {
  "class": "form-check form-switch mb-3"
};

var _hoisted_20 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-check-label",
  "for": "light-mode-switch"
}, "Preloader", -1
/* HOISTED */
);

var _hoisted_21 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", {
  "class": "text-center mb-0"
}, "Choose Mode", -1
/* HOISTED */
);

var _hoisted_22 = {
  "class": "p-4"
};
var _hoisted_23 = {
  "class": "mb-2"
};

var _hoisted_24 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "/images/layouts/layout-1.jpg",
  "class": "img-fluid img-thumbnail",
  alt: ""
}, null, -1
/* HOISTED */
);

var _hoisted_25 = [_hoisted_24];
var _hoisted_26 = {
  "class": "mb-2"
};

var _hoisted_27 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "/images/layouts/layout-2.jpg",
  "class": "img-fluid img-thumbnail",
  alt: ""
}, null, -1
/* HOISTED */
);

var _hoisted_28 = [_hoisted_27];
var _hoisted_29 = {
  "class": "mb-2"
};

var _hoisted_30 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "/images/layouts/layout-3.jpg",
  "class": "img-fluid img-thumbnail",
  alt: ""
}, null, -1
/* HOISTED */
);

var _hoisted_31 = [_hoisted_30];

var _hoisted_32 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "rightbar-overlay"
}, null, -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_b_form_radio = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-form-radio");

  var _component_b_form_radio_group = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-form-radio-group");

  var _component_SimpleBar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("SimpleBar");

  var _directive_click_outside = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDirective)("click-outside");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_SimpleBar, {
    "class": "h-100"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
        href: "javascript:void(0);",
        "class": "right-bar-toggle float-end",
        onClick: _cache[0] || (_cache[0] = function () {
          return $options.hide && $options.hide.apply($options, arguments);
        })
      }, _hoisted_4), _hoisted_5]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [_hoisted_7, _hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form_radio_group, {
        modelValue: $data.layout,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
          return $data.layout = $event;
        }),
        stacked: "",
        onInput: _cache[2] || (_cache[2] = function ($event) {
          return $options.changeLayout($event);
        })
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form_radio, {
            value: "vertical",
            "class": "mb-1 form-check custom-radio"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Vertical")];
            }),
            _: 1
            /* STABLE */

          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form_radio, {
            value: "horizontal",
            "class": "mb-1 form-check"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Horizontal")];
            }),
            _: 1
            /* STABLE */

          })];
        }),
        _: 1
        /* STABLE */

      }, 8
      /* PROPS */
      , ["modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Width "), _hoisted_9, _hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form_radio_group, {
        modelValue: $data.width,
        "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
          return $data.width = $event;
        }),
        stacked: "",
        onInput: _cache[4] || (_cache[4] = function ($event) {
          return $options.changeWidth($event);
        })
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form_radio, {
            value: "fluid",
            "class": "mb-1 form-check"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Fluid")];
            }),
            _: 1
            /* STABLE */

          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form_radio, {
            value: "boxed",
            "class": "form-check"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Boxed")];
            }),
            _: 1
            /* STABLE */

          })];
        }),
        _: 1
        /* STABLE */

      }, 8
      /* PROPS */
      , ["modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Sidebar "), $data.layout === 'vertical' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_11, [_hoisted_12, _hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form_radio_group, {
        modelValue: $data.sidebarType,
        "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
          return $data.sidebarType = $event;
        }),
        stacked: "",
        onInput: _cache[6] || (_cache[6] = function ($event) {
          return $options.changeType($event);
        })
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form_radio, {
            value: "dark",
            "class": "mb-1 form-check"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Dark")];
            }),
            _: 1
            /* STABLE */

          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form_radio, {
            value: "light",
            "class": "mb-1 form-check"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Light")];
            }),
            _: 1
            /* STABLE */

          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form_radio, {
            value: "compact",
            "class": "mb-1 form-check"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Compact")];
            }),
            _: 1
            /* STABLE */

          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form_radio, {
            value: "icon",
            "class": "mb-1 form-check"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Icon")];
            }),
            _: 1
            /* STABLE */

          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form_radio, {
            value: "colored",
            "class": "mb-1 form-check"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Colored")];
            }),
            _: 1
            /* STABLE */

          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form_radio, {
            value: "scrollable",
            "class": "form-check"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Scrollable")];
            }),
            _: 1
            /* STABLE */

          })];
        }),
        _: 1
        /* STABLE */

      }, 8
      /* PROPS */
      , ["modelValue"])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Topbar "), $data.layout === 'horizontal' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_14, [_hoisted_15, _hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form_radio_group, {
        modelValue: $data.topbar,
        "onUpdate:modelValue": _cache[7] || (_cache[7] = function ($event) {
          return $data.topbar = $event;
        }),
        stacked: "",
        onInput: _cache[8] || (_cache[8] = function ($event) {
          return $options.changeTopbartype($event);
        })
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form_radio, {
            value: "dark",
            "class": "mb-1 form-check"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Dark")];
            }),
            _: 1
            /* STABLE */

          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form_radio, {
            value: "light",
            "class": "mb-1 form-check"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Light")];
            }),
            _: 1
            /* STABLE */

          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form_radio, {
            value: "colored",
            "class": "mb-1 form-check"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Colored")];
            }),
            _: 1
            /* STABLE */

          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form_radio, {
            value: "scrollable",
            "class": "mb-1 form-check"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Scrollable")];
            }),
            _: 1
            /* STABLE */

          })];
        }),
        _: 1
        /* STABLE */

      }, 8
      /* PROPS */
      , ["modelValue"])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Preloader "), _hoisted_17, _hoisted_18, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "class": "form-check-input theme-choice",
        type: "checkbox",
        id: "light-mode-switch",
        "onUpdate:modelValue": _cache[9] || (_cache[9] = function ($event) {
          return $data.loader = $event;
        }),
        onInput: _cache[10] || (_cache[10] = function () {
          return $options.changeloader && $options.changeloader.apply($options, arguments);
        })
      }, null, 544
      /* HYDRATE_EVENTS, NEED_PATCH */
      ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.loader]]), _hoisted_20])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Settings "), _hoisted_21, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_23, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
        href: "javascript: void(0);",
        onClick: _cache[11] || (_cache[11] = function ($event) {
          return _ctx.$root.changeMode('default');
        })
      }, _hoisted_25)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_26, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
        href: "javascript: void(0);",
        onClick: _cache[12] || (_cache[12] = function ($event) {
          return _ctx.$root.changeMode('dark');
        })
      }, _hoisted_28)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_29, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
        href: "javascript: void(0);",
        onClick: _cache[13] || (_cache[13] = function ($event) {
          return _ctx.$root.changeMode('rtl');
        })
      }, _hoisted_31)])])];
    }),
    _: 1
    /* STABLE */

  })])), [[_directive_click_outside, $data.config]]), _hoisted_32]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Layout/Horizontal-Layout/Header.vue?vue&type=template&id=1f4e66e2":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Layout/Horizontal-Layout/Header.vue?vue&type=template&id=1f4e66e2 ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  id: "page-topbar"
};
var _hoisted_2 = {
  "class": "navbar-header",
  style: {
    "max-width": "99%"
  }
};
var _hoisted_3 = {
  "class": "d-flex"
};

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"navbar-brand-box\"><a href=\"/\" class=\"logo logo-dark\"><span class=\"logo-sm\"><img src=\"/images/logo.svg\" alt height=\"22\"></span><span class=\"logo-lg\"><img src=\"/images/logo-dark.png\" alt height=\"17\"></span></a><a href=\"/\" class=\"logo logo-light\"><span class=\"logo-sm\"><img src=\"/images/sei.png\" alt height=\"30\"></span><span class=\"logo-lg\"><img src=\"/images/logo-dost.png\" alt height=\"19\"></span></a></div>", 1);

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-fw fa-bars"
}, null, -1
/* HOISTED */
);

var _hoisted_6 = [_hoisted_5];

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
  "class": "app-search d-none d-lg-block"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "position-relative"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  type: "text",
  "class": "form-control",
  placeholder: "Search here"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "bx bx-search-alt"
})])], -1
/* HOISTED */
);

var _hoisted_8 = {
  "class": "d-flex"
};

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "mdi mdi-magnify"
}, null, -1
/* HOISTED */
);

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
  "class": "p-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "form-group m-0"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "input-group"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  type: "text",
  "class": "form-control",
  placeholder: "Search ...",
  "aria-label": "Recipient's username"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "input-group-append"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  "class": "btn btn-primary",
  type: "submit"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "mdi mdi-magnify"
})])])])])], -1
/* HOISTED */
);

var _hoisted_11 = {
  "class": "dropdown d-none d-lg-inline-block ms-1"
};

var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bx bx-fullscreen"
}, null, -1
/* HOISTED */
);

var _hoisted_13 = [_hoisted_12];
var _hoisted_14 = ["src"];
var _hoisted_15 = {
  "class": "d-none d-xl-inline-block ms-1"
};

var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "mdi mdi-chevron-down d-none d-xl-inline-block"
}, null, -1
/* HOISTED */
);

var _hoisted_17 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bx bx-user font-size-16 align-middle me-1"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" krad ")], -1
/* HOISTED */
);

var _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "badge bg-success float-end"
}, "11", -1
/* HOISTED */
);

var _hoisted_19 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bx bx-wrench font-size-16 align-middle me-1"
}, null, -1
/* HOISTED */
);

var _hoisted_20 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bx bx-power-off font-size-16 align-middle me-1 text-danger"
}, null, -1
/* HOISTED */
);

var _hoisted_21 = {
  "class": "dropdown d-inline-block"
};

var _hoisted_22 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bx bx-cog bx-spin toggle-right"
}, null, -1
/* HOISTED */
);

var _hoisted_23 = [_hoisted_22];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_b_dropdown = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-dropdown");

  var _component_NotificationDocument = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("NotificationDocument");

  var _component_NotificationTravel = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("NotificationTravel");

  var _component_b_dropdown_item = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-dropdown-item");

  var _component_b_dropdown_divider = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-dropdown-divider");

  var _component_Link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Link");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("header", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" LOGO "), _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    id: "toggle",
    type: "button",
    "class": "btn btn-sm me-2 font-size-16 d-lg-none header-item",
    onClick: _cache[0] || (_cache[0] = function () {
      return $options.toggleMenu && $options.toggleMenu.apply($options, arguments);
    })
  }, _hoisted_6), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" App Search"), _hoisted_7]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_dropdown, {
    "class": "d-inline-block d-lg-none ms-2",
    variant: "black",
    "menu-class": "dropdown-menu-lg p-0",
    "toggle-class": "header-item noti-icon",
    right: ""
  }, {
    "button-content": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_9];
    }),
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_10];
    }),
    _: 1
    /* STABLE */

  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn header-item noti-icon",
    onClick: _cache[1] || (_cache[1] = function () {
      return $options.initFullScreen && $options.initFullScreen.apply($options, arguments);
    })
  }, _hoisted_13)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_NotificationDocument), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_NotificationTravel), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <b-dropdown right menu-class=\"dropdown-menu-lg p-0 dropdown-menu-end\"\r\n                    toggle-class=\"header-item noti-icon\" variant=\"black\">\r\n                    <template v-slot:button-content>\r\n                        <i class=\"bx bx-bell bx-tada\"></i>\r\n                        <span class=\"badge bg-danger rounded-pill\">test</span>\r\n                    </template>\r\n\r\n                    <div class=\"p-3\">\r\n                        <div class=\"row align-items-center\">\r\n                            <div class=\"col\">\r\n                                <h6 class=\"m-0\">tssest</h6>\r\n                            </div>\r\n                            <div class=\"col-auto\">\r\n                                <a href=\"#\" class=\"small\">test2</a>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <SimpleBar style=\"max-height: 230px;\">\r\n                        <a href=\"javascript: void(0);\" class=\"text-reset notification-item\">\r\n                            <div class=\"media\">\r\n                                <div class=\"avatar-xs me-3\">\r\n                                    <span class=\"avatar-title bg-primary rounded-circle font-size-16\">\r\n                                        <i class=\"bx bx-cart\"></i>\r\n                                    </span>\r\n                                </div>\r\n                                <div class=\"media-body\">\r\n                                    <h6 class=\"mt-0 mb-1\">wew</h6>\r\n                                    <div class=\"font-size-12 text-muted\">\r\n                                        <p class=\"mb-1\">wew1</p>\r\n                                        <p class=\"mb-0\">\r\n                                            <i class=\"mdi mdi-clock-outline\"></i>\r\n                                           wew2\r\n                                        </p>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </a>\r\n                        <a href=\"javascript: void(0);\" class=\"text-reset notification-item\">\r\n                            <div class=\"media\">\r\n                                <img src=\"/images/users/avatar-3.jpg\" class=\"me-3 rounded-circle avatar-xs\"\r\n                                    alt=\"user-pic\" />\r\n                                <div class=\"media-body\">\r\n                                    <h6 class=\"mt-0 mb-1\">asdada</h6>\r\n                                    <div class=\"font-size-12 text-muted\">\r\n                                        <p class=\"mb-1\">asdada</p>\r\n                                        <p class=\"mb-0\">\r\n                                            <i class=\"mdi mdi-clock-outline\"></i>\r\n                                           asdada\r\n                                        </p>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </a>\r\n                        <a href=\"javascript: void(0);\" class=\"text-reset notification-item\">\r\n                            <div class=\"media\">\r\n                                <div class=\"avatar-xs me-3\">\r\n                                    <span class=\"avatar-title bg-success rounded-circle font-size-16\">\r\n                                        <i class=\"bx bx-badge-check\"></i>\r\n                                    </span>\r\n                                </div>\r\n                                <div class=\"media-body\">\r\n                                    <h6 class=\"mt-0 mb-1\">asdada</h6>\r\n                                    <div class=\"font-size-12 text-muted\">\r\n                                        <p class=\"mb-1\">asdada</p>\r\n                                        <p class=\"mb-0\">\r\n                                            <i class=\"mdi mdi-clock-outline\"></i>\r\n                                            asdada\r\n                                        </p>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </a>\r\n                        <a href=\"javascript: void(0);\" class=\"text-reset notification-item\">\r\n                            <div class=\"media\">\r\n                                <img src=\"/images/users/avatar-4.jpg\" class=\"me-3 rounded-circle avatar-xs\"\r\n                                    alt=\"user-pic\" />\r\n                                <div class=\"media-body\">\r\n                                    <h6 class=\"mt-0 mb-1\">asdada</h6>\r\n                                    <div class=\"font-size-12 text-muted\">\r\n                                        <p class=\"mb-1\">asdada</p>\r\n                                        <p class=\"mb-0\">\r\n                                            <i class=\"mdi mdi-clock-outline\"></i>\r\n                                           asda\r\n                                        </p>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </a>\r\n                    </SimpleBar>\r\n                    <div class=\"p-2 border-top d-grid\">\r\n                        <a class=\"btn btn-sm btn-link font-size-14 text-center\" href=\"javascript:void(0)\">\r\n                            <i class=\"mdi mdi-arrow-down-circle me-1\"></i>\r\n                            <span key=\"t-view-more\"> haha </span>\r\n                        </a>\r\n                    </div>\r\n                </b-dropdown> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_dropdown, {
    right: "",
    variant: "black",
    "toggle-class": "header-item",
    "menu-class": "dropdown-menu-end"
  }, {
    "button-content": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
        "class": "rounded-circle header-profile-user",
        src: $data.currentUrl + '/images/avatars/' + _ctx.$page.props.auth.data.avatar,
        alt: "n/a"
      }, null, 8
      /* PROPS */
      , _hoisted_14), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$page.props.auth ? _ctx.$page.props.auth.data.firstname + ' ' + _ctx.$page.props.auth.data.lastname : ''), 1
      /* TEXT */
      ), _hoisted_16];
    }),
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_dropdown_item, null, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_17];
        }),
        _: 1
        /* STABLE */

      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_dropdown_item, {
        "class": "d-block",
        href: "javascript: void(0);"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_18, _hoisted_19, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" wew ")];
        }),
        _: 1
        /* STABLE */

      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_dropdown_divider), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
        href: "logout",
        method: "post",
        as: "button",
        "class": "dropdown-item text-danger"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_20, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Logout ")];
        }),
        _: 1
        /* STABLE */

      })];
    }),
    _: 1
    /* STABLE */

  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn header-item noti-icon right-bar-toggle toggle-right",
    onClick: _cache[2] || (_cache[2] = function () {
      return $options.toggleRightSidebar && $options.toggleRightSidebar.apply($options, arguments);
    })
  }, _hoisted_23)])])])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Layout/Horizontal-Layout/Index.vue?vue&type=template&id=767e72e6":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Layout/Horizontal-Layout/Index.vue?vue&type=template&id=767e72e6 ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div id=\"preloader\"><div id=\"status\"><div class=\"spinner-chase\"><div class=\"chase-dot\"></div><div class=\"chase-dot\"></div><div class=\"chase-dot\"></div><div class=\"chase-dot\"></div><div class=\"chase-dot\"></div><div class=\"chase-dot\"></div></div></div></div>", 1);

var _hoisted_2 = {
  id: "layout-wrapper"
};
var _hoisted_3 = {
  "class": "main-content"
};
var _hoisted_4 = {
  "class": "page-content"
};
var _hoisted_5 = {
  "class": "container-fluid"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Header = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Header");

  var _component_Navigation = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Navigation");

  var _component_RightBar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("RightBar");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [_hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Header), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Navigation), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_RightBar)])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Layout/Horizontal-Layout/Navigation.vue?vue&type=template&id=4b8e0c69":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Layout/Horizontal-Layout/Navigation.vue?vue&type=template&id=4b8e0c69 ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "topnav"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "container-fluid"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("nav", {
  "class": "navbar navbar-light navbar-expand-lg topnav-menu active"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "collapse navbar-collapse active",
  id: "topnav-menu-content"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
  "class": "navbar-nav active"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "nav-item dropdown"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "nav-link dropdown-toggle arrow-none",
  id: "topnav-components",
  role: "button"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bx bx-home-circle me-1"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Dashboards ")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "nav-item dropdown"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "nav-link dropdown-toggle arrow-none",
  id: "topnav-components",
  role: "button"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bx bx-book-bookmark me-1"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Documents ")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "nav-item dropdown"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "nav-link dropdown-toggle arrow-none",
  id: "topnav-components",
  role: "button"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bx bx-trip me-1"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Travels ")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "nav-item dropdown"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "nav-link dropdown-toggle arrow-none",
  id: "topnav-components",
  role: "button"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bx bx-notepad me-1"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Requests ")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "nav-item dropdown"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "nav-link dropdown-toggle arrow-none",
  id: "topnav-components",
  role: "button"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bx bx-calendar me-1"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Calendar ")])])])])])], -1
/* HOISTED */
);

var _hoisted_3 = [_hoisted_2];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, _hoisted_3);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Layout/Layout.vue?vue&type=template&id=18d4feba":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Layout/Layout.vue?vue&type=template&id=18d4feba ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "p-4"
};
var _hoisted_2 = {
  "class": "text-center"
};
var _hoisted_3 = {
  "class": "avatar-md mx-auto"
};
var _hoisted_4 = {
  "class": "avatar-title rounded-circle bg-light"
};
var _hoisted_5 = {
  "class": "mt-4"
};
var _hoisted_6 = {
  "class": "font-size-13 text-muted"
};
var _hoisted_7 = {
  "class": "mt-2"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Vertical = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Vertical");

  var _component_Horizontal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Horizontal");

  var _component_b_form = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-form");

  var _component_b_modal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-modal");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [$options.layoutType === 'vertical' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Vertical, {
    key: 0
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")];
    }),
    _: 3
    /* FORWARDED */

  })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.layoutType === 'horizontal' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Horizontal, {
    key: 1
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")];
    }),
    _: 3
    /* FORWARDED */

  })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_modal, {
    modelValue: $options.message,
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $options.message = $event;
    }),
    "hide-footer": "",
    "hide-header": "",
    "no-close-on-backdrop": "",
    centered: ""
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form, null, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
            "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)('bx ' + _ctx.$page.props.flash.type + ' h1 mb-0 text-success')
          }, null, 2
          /* CLASS */
          )])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$page.props.flash.message), 1
          /* TEXT */
          ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
            type: "button",
            onClick: _cache[0] || (_cache[0] = function ($event) {
              return $options.check();
            }),
            "class": "btn btn-sm btn-primary w-md"
          }, "Okay")])])];
        }),
        _: 1
        /* STABLE */

      })])])];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["modelValue"])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Layout/Vertical-Layout/Header.vue?vue&type=template&id=d2d47418":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Layout/Vertical-Layout/Header.vue?vue&type=template&id=d2d47418 ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  id: "page-topbar"
};
var _hoisted_2 = {
  "class": "navbar-header"
};
var _hoisted_3 = {
  "class": "d-flex"
};

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"navbar-brand-box\"><a href=\"/\" class=\"logo logo-dark\"><span class=\"logo-sm\"><img src=\"/images/logo.svg\" alt height=\"22\"></span><span class=\"logo-lg\"><img src=\"/images/logo-dark.png\" alt height=\"17\"></span></a><a href=\"/\" class=\"logo logo-light\"><span class=\"logo-sm\"><img src=\"/images/sei.png\" alt height=\"30\"></span><span class=\"logo-lg\"><img src=\"/images/logo-dost.png\" alt height=\"19\"></span></a></div>", 1);

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-fw fa-bars"
}, null, -1
/* HOISTED */
);

var _hoisted_6 = [_hoisted_5];

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
  "class": "app-search d-none d-lg-block"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "position-relative"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  type: "text",
  "class": "form-control",
  placeholder: "Search here"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "bx bx-search-alt"
})])], -1
/* HOISTED */
);

var _hoisted_8 = {
  "class": "d-flex"
};

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "mdi mdi-magnify"
}, null, -1
/* HOISTED */
);

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
  "class": "p-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "form-group m-0"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "input-group"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  type: "text",
  "class": "form-control",
  placeholder: "Search ...",
  "aria-label": "Recipient's username"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "input-group-append"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  "class": "btn btn-primary",
  type: "submit"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "mdi mdi-magnify"
})])])])])], -1
/* HOISTED */
);

var _hoisted_11 = {
  "class": "dropdown d-none d-lg-inline-block ms-1"
};

var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bx bx-fullscreen"
}, null, -1
/* HOISTED */
);

var _hoisted_13 = [_hoisted_12];
var _hoisted_14 = ["src"];
var _hoisted_15 = {
  "class": "d-none d-xl-inline-block ms-1"
};

var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "mdi mdi-chevron-down d-none d-xl-inline-block"
}, null, -1
/* HOISTED */
);

var _hoisted_17 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bx bx-user font-size-16 align-middle me-1"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" krad ")], -1
/* HOISTED */
);

var _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "badge bg-success float-end"
}, "11", -1
/* HOISTED */
);

var _hoisted_19 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bx bx-wrench font-size-16 align-middle me-1"
}, null, -1
/* HOISTED */
);

var _hoisted_20 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bx bx-power-off font-size-16 align-middle me-1 text-danger"
}, null, -1
/* HOISTED */
);

var _hoisted_21 = {
  "class": "dropdown d-inline-block"
};

var _hoisted_22 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bx bx-cog bx-spin toggle-right"
}, null, -1
/* HOISTED */
);

var _hoisted_23 = [_hoisted_22];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_b_dropdown = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-dropdown");

  var _component_NotificationDocument = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("NotificationDocument");

  var _component_NotificationTravel = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("NotificationTravel");

  var _component_b_dropdown_item = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-dropdown-item");

  var _component_b_dropdown_divider = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-dropdown-divider");

  var _component_Link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Link");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("header", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" LOGO "), _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    id: "vertical-menu-btn",
    type: "button",
    "class": "btn btn-sm px-3 font-size-16 header-item",
    onClick: _cache[0] || (_cache[0] = function () {
      return $options.toggleMenu && $options.toggleMenu.apply($options, arguments);
    })
  }, _hoisted_6), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" App Search"), _hoisted_7]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_dropdown, {
    "class": "d-inline-block d-lg-none ms-2",
    variant: "black",
    "menu-class": "dropdown-menu-lg p-0",
    "toggle-class": "header-item noti-icon",
    right: ""
  }, {
    "button-content": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_9];
    }),
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_10];
    }),
    _: 1
    /* STABLE */

  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn header-item noti-icon",
    onClick: _cache[1] || (_cache[1] = function () {
      return $options.initFullScreen && $options.initFullScreen.apply($options, arguments);
    })
  }, _hoisted_13)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_NotificationDocument), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_NotificationTravel), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_dropdown, {
    right: "",
    variant: "black",
    "toggle-class": "header-item",
    "menu-class": "dropdown-menu-end"
  }, {
    "button-content": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
        "class": "rounded-circle header-profile-user",
        src: $data.currentUrl + '/images/avatars/' + _ctx.$page.props.auth.data.avatar,
        alt: "n/a"
      }, null, 8
      /* PROPS */
      , _hoisted_14), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$page.props.auth ? _ctx.$page.props.auth.data.firstname + ' ' + _ctx.$page.props.auth.data.lastname : ''), 1
      /* TEXT */
      ), _hoisted_16];
    }),
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_dropdown_item, null, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_17];
        }),
        _: 1
        /* STABLE */

      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_dropdown_item, {
        "class": "d-block",
        href: "javascript: void(0);"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_18, _hoisted_19, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" wew ")];
        }),
        _: 1
        /* STABLE */

      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_dropdown_divider), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
        href: "logout",
        method: "post",
        as: "button",
        "class": "dropdown-item text-danger"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_20, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Logout ")];
        }),
        _: 1
        /* STABLE */

      })];
    }),
    _: 1
    /* STABLE */

  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn header-item noti-icon right-bar-toggle toggle-right",
    onClick: _cache[2] || (_cache[2] = function () {
      return $options.toggleRightSidebar && $options.toggleRightSidebar.apply($options, arguments);
    })
  }, _hoisted_23)])])])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Layout/Vertical-Layout/Index.vue?vue&type=template&id=02683d3b":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Layout/Vertical-Layout/Index.vue?vue&type=template&id=02683d3b ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div id=\"preloader\"><div id=\"status\"><div class=\"spinner-chase\"><div class=\"chase-dot\"></div><div class=\"chase-dot\"></div><div class=\"chase-dot\"></div><div class=\"chase-dot\"></div><div class=\"chase-dot\"></div><div class=\"chase-dot\"></div></div></div></div>", 1);

var _hoisted_2 = {
  id: "layout-wrapper"
};
var _hoisted_3 = {
  "class": "main-content"
};
var _hoisted_4 = {
  "class": "page-content",
  style: {
    "margin-bottom": "-60px"
  }
};
var _hoisted_5 = {
  "class": "container-fluid"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Header = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Header");

  var _component_Sidebar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Sidebar");

  var _component_RightBar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("RightBar");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [_hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Header), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Sidebar, {
    "is-condensed": $data.isMenuCondensed
  }, null, 8
  /* PROPS */
  , ["is-condensed"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_RightBar)])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Layout/Vertical-Layout/SideItem.vue?vue&type=template&id=680de39e":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Layout/Vertical-Layout/SideItem.vue?vue&type=template&id=680de39e ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  id: "sidebar-menu"
};
var _hoisted_2 = {
  id: "side-menu",
  "class": "metismenu list-unstyled"
};
var _hoisted_3 = {
  key: 2,
  "class": "sub-menu",
  "aria-expanded": "false"
};
var _hoisted_4 = {
  key: 0,
  "class": "side-nav-link-ref"
};
var _hoisted_5 = {
  key: 1,
  "class": "side-nav-link-a-ref has-arrow",
  href: "javascript:void(0);"
};
var _hoisted_6 = {
  key: 2,
  "class": "sub-menu mm-collapse",
  "aria-expanded": "false"
};
var _hoisted_7 = {
  "class": "side-nav-link-ref"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Link");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_2, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.menuItems, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [item.isTitle ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
      "class": "menu-title",
      key: item.id
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.label), 1
    /* TEXT */
    )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), !item.isTitle && !item.isLayout ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
      key: item.id
    }, [$options.hasItems(item) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("a", {
      key: 0,
      href: "javascript:void(0);",
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["is-parent", {
        'has-arrow': !item.badge,
        'has-dropdown': item.badge
      }])
    }, [item.icon ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("i", {
      key: 0,
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)("bx ".concat(item.icon))
    }, null, 2
    /* CLASS */
    )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.label), 1
    /* TEXT */
    ), item.badge ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
      key: 1,
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)("badge rounded-pill bg-".concat(item.badge.variant, " float-end"))
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t(item.badge.text)), 3
    /* TEXT, CLASS */
    )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
    /* CLASS */
    )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), !$options.hasItems(item) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Link, {
      key: 1,
      href: item.link,
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([{
        'mm-active': _ctx.$page.component.startsWith(item.name)
      }, "side-nav-link-ref"])
    }, {
      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
        return [item.icon ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("i", {
          key: 0,
          "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)("bx ".concat(item.icon))
        }, null, 2
        /* CLASS */
        )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.label), 1
        /* TEXT */
        ), item.badge ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
          key: 1,
          "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)("badge rounded-pill bg-".concat(item.badge.variant, " float-end"))
        }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.badge.text), 3
        /* TEXT, CLASS */
        )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)];
      }),
      _: 2
      /* DYNAMIC */

    }, 1032
    /* PROPS, DYNAMIC_SLOTS */
    , ["href", "class"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.hasItems(item) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("ul", _hoisted_3, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(item.subItems, function (subitem, index) {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
        key: index
      }, [!$options.hasItems(subitem) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("a", _hoisted_4, [subitem.icon ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("i", {
        key: 0,
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)("bx ".concat(subitem.icon))
      }, null, 2
      /* CLASS */
      )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.label), 1
      /* TEXT */
      )])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.hasItems(subitem) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("a", _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(subitem.label), 1
      /* TEXT */
      )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.hasItems(subitem) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("ul", _hoisted_6, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(subitem.subItems, function (subSubitem, index) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
          key: index
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(subitem.label), 1
        /* TEXT */
        )]);
      }), 128
      /* KEYED_FRAGMENT */
      ))])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]);
    }), 128
    /* KEYED_FRAGMENT */
    ))])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 64
    /* STABLE_FRAGMENT */
    );
  }), 256
  /* UNKEYED_FRAGMENT */
  ))])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Layout/Vertical-Layout/Sidebar.vue?vue&type=template&id=40994af6":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Layout/Vertical-Layout/Sidebar.vue?vue&type=template&id=40994af6 ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "vertical-menu"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_SideNav = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("SideNav");

  var _component_SimpleBar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("SimpleBar");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [!$props.isCondensed ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_SimpleBar, {
    key: 0,
    settings: $data.settings,
    "class": "h-100",
    ref: "currentMenu",
    id: "my-element"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_SideNav)];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["settings"])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_SimpleBar, {
    key: 1,
    "class": "h-100"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_SideNav)];
    }),
    _: 1
    /* STABLE */

  }))]);
}

/***/ }),

/***/ "./resources/js/Shared/Layout/Common/layouts.mixin.js":
/*!************************************************************!*\
  !*** ./resources/js/Shared/Layout/Common/layouts.mixin.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      layout: {
        type: "vertical",
        sidebar: "icon",
        width: "fluid",
        topbar: "icon",
        loader: false
      }
    };
  },
  created: function created() {
    var layout = JSON.parse(localStorage.getItem("layout")) || {};

    if (layout) {
      this.layout = _objectSpread(_objectSpread(_objectSpread({}, this.layout), layout), {}, {
        sidebar: (layout === null || layout === void 0 ? void 0 : layout.type) === "horizontal" ? (layout === null || layout === void 0 ? void 0 : layout.topbar) || this.layout.topbar : (layout === null || layout === void 0 ? void 0 : layout.sidebar) || this.layout.sidebar
      });
    }
  },
  methods: {
    mixinMethod: function mixinMethod(val) {
      this.layout.type = val;
    },
    changeMode: function changeMode(mode) {
      var cssUrl = document.getElementById("layout-css").href;
      cssUrl = cssUrl.split("/");
      cssUrl.pop();
      document.cookie = "layout=" + (mode || "default");

      switch (mode) {
        case "dark":
          cssUrl.push("app-dark.css");
          break;

        case "rtl":
          cssUrl.push("app-rtl.css");
          break;

        default:
          cssUrl.push("app.css");
          break;
      }

      document.getElementById("layout-css").href = cssUrl.join("/");
    },
    changeLayout: function changeLayout(change) {
      this.layout = _objectSpread(_objectSpread({}, this.layout), change);
      localStorage.setItem("layout", JSON.stringify(this.layout));
    },
    changeSidebar: function changeSidebar(sidebar) {
      switch (sidebar) {
        case "dark":
          document.body.setAttribute("data-sidebar", "dark");
          document.body.removeAttribute("data-topbar");
          document.body.removeAttribute("data-sidebar-size");
          document.body.removeAttribute("data-layout-scrollable");
          break;

        case "light":
          document.body.setAttribute("data-topbar", "dark");
          document.body.removeAttribute("data-sidebar");
          document.body.removeAttribute("data-sidebar-size");
          document.body.classList.remove("vertical-collpsed");
          document.body.removeAttribute("data-layout-scrollable");
          break;

        case "compact":
          document.body.setAttribute("data-sidebar-size", "small");
          document.body.setAttribute("data-sidebar", "dark");
          document.body.classList.remove("vertical-collpsed");
          document.body.removeAttribute("data-topbar", "dark");
          break;

        case "icon":
          document.body.setAttribute("data-keep-enlarged", "true");
          document.body.classList.add("vertical-collpsed");
          document.body.setAttribute("data-sidebar", "dark");
          document.body.removeAttribute("data-topbar", "dark");
          document.body.removeAttribute("data-layout-scrollable");
          break;

        case "colored":
          document.body.setAttribute("data-sidebar", "colored");
          document.body.removeAttribute("data-keep-enlarged");
          document.body.classList.remove("vertical-collpsed");
          document.body.removeAttribute("data-sidebar-size");
          document.body.removeAttribute("data-layout-scrollable");
          break;

        case "scrollable":
          document.body.setAttribute("data-layout-scrollable", "true");
          document.body.removeAttribute("data-layout-mode");
          break;

        default:
          document.body.setAttribute("data-sidebar", "dark");
          break;
      }
    },
    changeTopbar: function changeTopbar(topbar) {
      switch (topbar) {
        case "dark":
          document.body.setAttribute("data-topbar", "dark");
          document.body.removeAttribute("data-layout-scrollable");
          break;

        case "light":
          document.body.setAttribute("data-topbar", "light");
          document.body.removeAttribute("data-layout-size", "boxed");
          document.body.removeAttribute("data-layout-scrollable");
          break;

        case "colored":
          document.body.setAttribute("data-topbar", "colored");
          document.body.removeAttribute("data-layout-size", "boxed");
          document.body.removeAttribute("data-layout-scrollable");
          break;

        case "scrollable":
          document.body.setAttribute("data-layout-scrollable", "true");
          document.body.removeAttribute("data-layout-mode");
          break;

        default:
          document.body.setAttribute("data-topbar", "dark");
          break;
      }
    },
    changeWidth: function changeWidth(width) {
      switch (width) {
        case "boxed":
          document.body.setAttribute("data-layout-size", "boxed");
          break;

        case "fluid":
          document.body.setAttribute("data-layout-mode", "fluid");
          document.body.removeAttribute("data-layout-size");
          break;

        default:
          document.body.setAttribute("data-layout-mode", "fluid");
          break;
      }
    }
  },
  watch: {
    layout: {
      immediate: true,
      handler: function handler(newLayout, oldLayout) {
        if (newLayout) {
          if (newLayout.sidebar !== (oldLayout === null || oldLayout === void 0 ? void 0 : oldLayout.sidebar) || newLayout.type !== (oldLayout === null || oldLayout === void 0 ? void 0 : oldLayout.type)) {
            this.changeSidebar(newLayout.sidebar);
          }

          if (newLayout.topbar !== (oldLayout === null || oldLayout === void 0 ? void 0 : oldLayout.topbar) || newLayout.type !== (oldLayout === null || oldLayout === void 0 ? void 0 : oldLayout.type)) {
            this.changeTopbar(newLayout.topbar);
          }

          if (newLayout.width !== (oldLayout === null || oldLayout === void 0 ? void 0 : oldLayout.width)) {
            this.changeWidth(newLayout.width);
          }
        }
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/Shared/Layout/Vertical-Layout/menu.js":
/*!************************************************************!*\
  !*** ./resources/js/Shared/Layout/Vertical-Layout/menu.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menuItems": () => (/* binding */ menuItems)
/* harmony export */ });
var menuItems = [{
  id: 1,
  label: "Menu",
  isTitle: true,
  user: []
}, {
  id: 2,
  label: "Home",
  icon: "bx-home-circle",
  link: "/home",
  component: "Home/Index",
  name: "Home",
  user: []
}, {
  id: 3,
  label: "Users",
  icon: "bxs-face",
  link: "/users",
  component: "Modules/Users/Index",
  name: "Modules/Users",
  user: ['Super Administrator']
}];

/***/ }),

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-vue3 */ "./node_modules/@inertiajs/inertia-vue3/dist/index.js");
/* harmony import */ var _inertiajs_progress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/progress */ "./node_modules/@inertiajs/progress/dist/index.js");
/* harmony import */ var bootstrap_vue_3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap-vue-3 */ "./node_modules/bootstrap-vue-3/dist/bootstrap-vue-3.es.js");
/* harmony import */ var vue_toast_notification__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-toast-notification */ "./node_modules/vue-toast-notification/dist/index.min.js");
/* harmony import */ var vue_toast_notification__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vue_toast_notification__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Shared_Layout_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/Shared/Layout/Layout */ "./resources/js/Shared/Layout/Layout.vue");
/* harmony import */ var _Shared_Layout_Common_layouts_mixin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/Shared/Layout/Common/layouts.mixin */ "./resources/js/Shared/Layout/Common/layouts.mixin.js");
__webpack_require__(/*! ./bootstrap */ "./resources/js/bootstrap.js");








(0,_inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__.createInertiaApp)({
  resolve: function resolve(name) {
    var page = __webpack_require__("./resources/js/Pages sync recursive ^\\.\\/.*$")("./".concat(name))["default"];

    if (page.layout === undefined) {
      page.layout = _Shared_Layout_Layout__WEBPACK_IMPORTED_MODULE_5__["default"];
    }

    return page;
  },
  setup: function setup(_ref) {
    var el = _ref.el,
        App = _ref.App,
        props = _ref.props,
        plugin = _ref.plugin;
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)({
      render: function render() {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(App, props);
      },
      mixins: [_Shared_Layout_Common_layouts_mixin__WEBPACK_IMPORTED_MODULE_6__["default"]],
      provide: {
        count: Math.floor((window.innerHeight - 370) / 63),
        count2: Math.floor((window.innerHeight - 170 - 170) / 61),
        count3: Math.floor((window.innerHeight - 170 - 130) / 61),
        height: window.innerHeight - 170,
        heightProfile: window.innerHeight - 335
      },
      mounted: function mounted() {
        this.mixinMethod('vertical');
      }
    }).use(plugin).use(bootstrap_vue_3__WEBPACK_IMPORTED_MODULE_3__["default"], (vue_toast_notification__WEBPACK_IMPORTED_MODULE_4___default())).component("Link", _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__.Link).component("Head", _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__.Head).mount(el); // .config.devtools = true
  },
  title: function title(_title) {
    return "DOST-IX | ".concat(_title);
  }
});
_inertiajs_progress__WEBPACK_IMPORTED_MODULE_2__.InertiaProgress.init({
  color: "red",
  showSpinner: true
});

/***/ }),

/***/ "./resources/js/bootstrap.js":
/*!***********************************!*\
  !*** ./resources/js/bootstrap.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_toast_notification_dist_theme_sugar_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-toast-notification/dist/theme-sugar.css */ "./node_modules/vue-toast-notification/dist/theme-sugar.css");
/* harmony import */ var vue3_loading_overlay_dist_vue3_loading_overlay_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue3-loading-overlay/dist/vue3-loading-overlay.css */ "./node_modules/vue3-loading-overlay/dist/vue3-loading-overlay.css");
/* harmony import */ var _suadelabs_vue3_multiselect_dist_vue3_multiselect_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @suadelabs/vue3-multiselect/dist/vue3-multiselect.css */ "./node_modules/@suadelabs/vue3-multiselect/dist/vue3-multiselect.css");
/* harmony import */ var laravel_echo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! laravel-echo */ "./node_modules/laravel-echo/dist/echo.js");
/* harmony import */ var pusher_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! pusher-js */ "./node_modules/pusher-js/dist/web/pusher.js");
/* harmony import */ var pusher_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(pusher_js__WEBPACK_IMPORTED_MODULE_6__);

window._ = (lodash__WEBPACK_IMPORTED_MODULE_0___default());
/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */


window.axios = (axios__WEBPACK_IMPORTED_MODULE_1___default());



window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */



window.Pusher = (pusher_js__WEBPACK_IMPORTED_MODULE_6___default());
window.Echo = new laravel_echo__WEBPACK_IMPORTED_MODULE_5__["default"]({
  broadcaster: 'pusher',
  key: "231",
  cluster: "mt1",
  // forceTLS: true,
  encrypted: true,
  wsHost: window.location.hostname,
  wsPort: 6001,
  wssPort: 6001,
  disableStats: true,
  enabledTransport: ['ws', 'wss']
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Header.vue?vue&type=style&index=0&id=6517032e&lang=css":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Header.vue?vue&type=style&index=0&id=6517032e&lang=css ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.page-title-box h4 {\r\n  font-size: 13px !important;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/sass/app-dark.scss":
/*!**************************************!*\
  !*** ./resources/sass/app-dark.scss ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/sass/app-rtl.scss":
/*!*************************************!*\
  !*** ./resources/sass/app-rtl.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Header.vue?vue&type=style&index=0&id=6517032e&lang=css":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Header.vue?vue&type=style&index=0&id=6517032e&lang=css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Header_vue_vue_type_style_index_0_id_6517032e_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Header.vue?vue&type=style&index=0&id=6517032e&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Header.vue?vue&type=style&index=0&id=6517032e&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Header_vue_vue_type_style_index_0_id_6517032e_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Header_vue_vue_type_style_index_0_id_6517032e_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/Pages/Auth/ForgotPassword.vue":
/*!****************************************************!*\
  !*** ./resources/js/Pages/Auth/ForgotPassword.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ForgotPassword_vue_vue_type_template_id_2d73eca8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ForgotPassword.vue?vue&type=template&id=2d73eca8 */ "./resources/js/Pages/Auth/ForgotPassword.vue?vue&type=template&id=2d73eca8");
/* harmony import */ var _ForgotPassword_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ForgotPassword.vue?vue&type=script&setup=true&lang=js */ "./resources/js/Pages/Auth/ForgotPassword.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var D_Web_Applications_FREELANCE_TRAFFIGAZE_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_Web_Applications_FREELANCE_TRAFFIGAZE_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_ForgotPassword_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ForgotPassword_vue_vue_type_template_id_2d73eca8__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Auth/ForgotPassword.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Auth/Login.vue":
/*!*******************************************!*\
  !*** ./resources/js/Pages/Auth/Login.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Login_vue_vue_type_template_id_a2ac2cea__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Login.vue?vue&type=template&id=a2ac2cea */ "./resources/js/Pages/Auth/Login.vue?vue&type=template&id=a2ac2cea");
/* harmony import */ var _Login_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Login.vue?vue&type=script&setup=true&lang=js */ "./resources/js/Pages/Auth/Login.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var D_Web_Applications_FREELANCE_TRAFFIGAZE_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_Web_Applications_FREELANCE_TRAFFIGAZE_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Login_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Login_vue_vue_type_template_id_a2ac2cea__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Auth/Login.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Auth/NewPassword.vue":
/*!*************************************************!*\
  !*** ./resources/js/Pages/Auth/NewPassword.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NewPassword_vue_vue_type_template_id_6400ac06__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NewPassword.vue?vue&type=template&id=6400ac06 */ "./resources/js/Pages/Auth/NewPassword.vue?vue&type=template&id=6400ac06");
/* harmony import */ var D_Web_Applications_FREELANCE_TRAFFIGAZE_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");

const script = {}

;
const __exports__ = /*#__PURE__*/(0,D_Web_Applications_FREELANCE_TRAFFIGAZE_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_1__["default"])(script, [['render',_NewPassword_vue_vue_type_template_id_6400ac06__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Auth/NewPassword.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Auth/ResetPassword.vue":
/*!***************************************************!*\
  !*** ./resources/js/Pages/Auth/ResetPassword.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ResetPassword_vue_vue_type_template_id_1da614ac__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ResetPassword.vue?vue&type=template&id=1da614ac */ "./resources/js/Pages/Auth/ResetPassword.vue?vue&type=template&id=1da614ac");
/* harmony import */ var D_Web_Applications_FREELANCE_TRAFFIGAZE_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");

const script = {}

;
const __exports__ = /*#__PURE__*/(0,D_Web_Applications_FREELANCE_TRAFFIGAZE_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_1__["default"])(script, [['render',_ResetPassword_vue_vue_type_template_id_1da614ac__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Auth/ResetPassword.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Home/Index.vue":
/*!*******************************************!*\
  !*** ./resources/js/Pages/Home/Index.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Index_vue_vue_type_template_id_f311f62a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=f311f62a */ "./resources/js/Pages/Home/Index.vue?vue&type=template&id=f311f62a");
/* harmony import */ var _Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js */ "./resources/js/Pages/Home/Index.vue?vue&type=script&lang=js");
/* harmony import */ var D_Web_Applications_FREELANCE_TRAFFIGAZE_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_Web_Applications_FREELANCE_TRAFFIGAZE_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Index_vue_vue_type_template_id_f311f62a__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Home/Index.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Modules/Users/Index.vue":
/*!****************************************************!*\
  !*** ./resources/js/Pages/Modules/Users/Index.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Index_vue_vue_type_template_id_7f7480ac__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=7f7480ac */ "./resources/js/Pages/Modules/Users/Index.vue?vue&type=template&id=7f7480ac");
/* harmony import */ var _Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js */ "./resources/js/Pages/Modules/Users/Index.vue?vue&type=script&lang=js");
/* harmony import */ var D_Web_Applications_FREELANCE_TRAFFIGAZE_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_Web_Applications_FREELANCE_TRAFFIGAZE_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Index_vue_vue_type_template_id_7f7480ac__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Modules/Users/Index.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Modules/Users/Modals/Create.vue":
/*!************************************************************!*\
  !*** ./resources/js/Pages/Modules/Users/Modals/Create.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Create_vue_vue_type_template_id_0967293d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Create.vue?vue&type=template&id=0967293d */ "./resources/js/Pages/Modules/Users/Modals/Create.vue?vue&type=template&id=0967293d");
/* harmony import */ var _Create_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Create.vue?vue&type=script&lang=js */ "./resources/js/Pages/Modules/Users/Modals/Create.vue?vue&type=script&lang=js");
/* harmony import */ var D_Web_Applications_FREELANCE_TRAFFIGAZE_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_Web_Applications_FREELANCE_TRAFFIGAZE_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Create_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Create_vue_vue_type_template_id_0967293d__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Modules/Users/Modals/Create.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Modules/Users/Modals/Group.vue":
/*!***********************************************************!*\
  !*** ./resources/js/Pages/Modules/Users/Modals/Group.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Group_vue_vue_type_template_id_41f5f664__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Group.vue?vue&type=template&id=41f5f664 */ "./resources/js/Pages/Modules/Users/Modals/Group.vue?vue&type=template&id=41f5f664");
/* harmony import */ var _Group_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Group.vue?vue&type=script&lang=js */ "./resources/js/Pages/Modules/Users/Modals/Group.vue?vue&type=script&lang=js");
/* harmony import */ var D_Web_Applications_FREELANCE_TRAFFIGAZE_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_Web_Applications_FREELANCE_TRAFFIGAZE_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Group_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Group_vue_vue_type_template_id_41f5f664__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Modules/Users/Modals/Group.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Modules/Users/Modals/Role.vue":
/*!**********************************************************!*\
  !*** ./resources/js/Pages/Modules/Users/Modals/Role.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Role_vue_vue_type_template_id_236191f7__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Role.vue?vue&type=template&id=236191f7 */ "./resources/js/Pages/Modules/Users/Modals/Role.vue?vue&type=template&id=236191f7");
/* harmony import */ var _Role_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Role.vue?vue&type=script&lang=js */ "./resources/js/Pages/Modules/Users/Modals/Role.vue?vue&type=script&lang=js");
/* harmony import */ var D_Web_Applications_FREELANCE_TRAFFIGAZE_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_Web_Applications_FREELANCE_TRAFFIGAZE_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Role_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Role_vue_vue_type_template_id_236191f7__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Modules/Users/Modals/Role.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Modules/Users/Modals/Update.vue":
/*!************************************************************!*\
  !*** ./resources/js/Pages/Modules/Users/Modals/Update.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Update_vue_vue_type_template_id_b3b1daec__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Update.vue?vue&type=template&id=b3b1daec */ "./resources/js/Pages/Modules/Users/Modals/Update.vue?vue&type=template&id=b3b1daec");
/* harmony import */ var _Update_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Update.vue?vue&type=script&lang=js */ "./resources/js/Pages/Modules/Users/Modals/Update.vue?vue&type=script&lang=js");
/* harmony import */ var D_Web_Applications_FREELANCE_TRAFFIGAZE_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_Web_Applications_FREELANCE_TRAFFIGAZE_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Update_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Update_vue_vue_type_template_id_b3b1daec__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Modules/Users/Modals/Update.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Modules/Users/Modals/Verify.vue":
/*!************************************************************!*\
  !*** ./resources/js/Pages/Modules/Users/Modals/Verify.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Verify_vue_vue_type_template_id_7a380a3a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Verify.vue?vue&type=template&id=7a380a3a */ "./resources/js/Pages/Modules/Users/Modals/Verify.vue?vue&type=template&id=7a380a3a");
/* harmony import */ var _Verify_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Verify.vue?vue&type=script&lang=js */ "./resources/js/Pages/Modules/Users/Modals/Verify.vue?vue&type=script&lang=js");
/* harmony import */ var D_Web_Applications_FREELANCE_TRAFFIGAZE_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_Web_Applications_FREELANCE_TRAFFIGAZE_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Verify_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Verify_vue_vue_type_template_id_7a380a3a__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Modules/Users/Modals/Verify.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Notifications/Documents.vue":
/*!********************************************************!*\
  !*** ./resources/js/Pages/Notifications/Documents.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Documents_vue_vue_type_template_id_536b2418__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Documents.vue?vue&type=template&id=536b2418 */ "./resources/js/Pages/Notifications/Documents.vue?vue&type=template&id=536b2418");
/* harmony import */ var _Documents_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Documents.vue?vue&type=script&lang=js */ "./resources/js/Pages/Notifications/Documents.vue?vue&type=script&lang=js");
/* harmony import */ var D_Web_Applications_FREELANCE_TRAFFIGAZE_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_Web_Applications_FREELANCE_TRAFFIGAZE_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Documents_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Documents_vue_vue_type_template_id_536b2418__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Notifications/Documents.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Notifications/Requests.vue":
/*!*******************************************************!*\
  !*** ./resources/js/Pages/Notifications/Requests.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Requests_vue_vue_type_template_id_4602dc94__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Requests.vue?vue&type=template&id=4602dc94 */ "./resources/js/Pages/Notifications/Requests.vue?vue&type=template&id=4602dc94");
/* harmony import */ var _Requests_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Requests.vue?vue&type=script&lang=js */ "./resources/js/Pages/Notifications/Requests.vue?vue&type=script&lang=js");
/* harmony import */ var D_Web_Applications_FREELANCE_TRAFFIGAZE_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_Web_Applications_FREELANCE_TRAFFIGAZE_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Requests_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Requests_vue_vue_type_template_id_4602dc94__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Notifications/Requests.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Welcome.vue":
/*!****************************************!*\
  !*** ./resources/js/Pages/Welcome.vue ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Welcome_vue_vue_type_template_id_317d1a6e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Welcome.vue?vue&type=template&id=317d1a6e */ "./resources/js/Pages/Welcome.vue?vue&type=template&id=317d1a6e");
/* harmony import */ var _Welcome_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Welcome.vue?vue&type=script&lang=js */ "./resources/js/Pages/Welcome.vue?vue&type=script&lang=js");
/* harmony import */ var D_Web_Applications_FREELANCE_TRAFFIGAZE_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_Web_Applications_FREELANCE_TRAFFIGAZE_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Welcome_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Welcome_vue_vue_type_template_id_317d1a6e__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Welcome.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Shared/Header.vue":
/*!****************************************!*\
  !*** ./resources/js/Shared/Header.vue ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Header_vue_vue_type_template_id_6517032e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header.vue?vue&type=template&id=6517032e */ "./resources/js/Shared/Header.vue?vue&type=template&id=6517032e");
/* harmony import */ var _Header_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header.vue?vue&type=script&lang=js */ "./resources/js/Shared/Header.vue?vue&type=script&lang=js");
/* harmony import */ var _Header_vue_vue_type_style_index_0_id_6517032e_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header.vue?vue&type=style&index=0&id=6517032e&lang=css */ "./resources/js/Shared/Header.vue?vue&type=style&index=0&id=6517032e&lang=css");
/* harmony import */ var D_Web_Applications_FREELANCE_TRAFFIGAZE_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,D_Web_Applications_FREELANCE_TRAFFIGAZE_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Header_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Header_vue_vue_type_template_id_6517032e__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Shared/Header.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Shared/Layout/Common/RightBar.vue":
/*!********************************************************!*\
  !*** ./resources/js/Shared/Layout/Common/RightBar.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RightBar_vue_vue_type_template_id_7f5f5272__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RightBar.vue?vue&type=template&id=7f5f5272 */ "./resources/js/Shared/Layout/Common/RightBar.vue?vue&type=template&id=7f5f5272");
/* harmony import */ var _RightBar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RightBar.vue?vue&type=script&lang=js */ "./resources/js/Shared/Layout/Common/RightBar.vue?vue&type=script&lang=js");
/* harmony import */ var D_Web_Applications_FREELANCE_TRAFFIGAZE_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_Web_Applications_FREELANCE_TRAFFIGAZE_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_RightBar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_RightBar_vue_vue_type_template_id_7f5f5272__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Shared/Layout/Common/RightBar.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Shared/Layout/Horizontal-Layout/Header.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/Shared/Layout/Horizontal-Layout/Header.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Header_vue_vue_type_template_id_1f4e66e2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header.vue?vue&type=template&id=1f4e66e2 */ "./resources/js/Shared/Layout/Horizontal-Layout/Header.vue?vue&type=template&id=1f4e66e2");
/* harmony import */ var _Header_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header.vue?vue&type=script&lang=js */ "./resources/js/Shared/Layout/Horizontal-Layout/Header.vue?vue&type=script&lang=js");
/* harmony import */ var D_Web_Applications_FREELANCE_TRAFFIGAZE_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_Web_Applications_FREELANCE_TRAFFIGAZE_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Header_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Header_vue_vue_type_template_id_1f4e66e2__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Shared/Layout/Horizontal-Layout/Header.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Shared/Layout/Horizontal-Layout/Index.vue":
/*!****************************************************************!*\
  !*** ./resources/js/Shared/Layout/Horizontal-Layout/Index.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Index_vue_vue_type_template_id_767e72e6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=767e72e6 */ "./resources/js/Shared/Layout/Horizontal-Layout/Index.vue?vue&type=template&id=767e72e6");
/* harmony import */ var _Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js */ "./resources/js/Shared/Layout/Horizontal-Layout/Index.vue?vue&type=script&lang=js");
/* harmony import */ var D_Web_Applications_FREELANCE_TRAFFIGAZE_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_Web_Applications_FREELANCE_TRAFFIGAZE_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Index_vue_vue_type_template_id_767e72e6__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Shared/Layout/Horizontal-Layout/Index.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Shared/Layout/Horizontal-Layout/Navigation.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/Shared/Layout/Horizontal-Layout/Navigation.vue ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Navigation_vue_vue_type_template_id_4b8e0c69__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Navigation.vue?vue&type=template&id=4b8e0c69 */ "./resources/js/Shared/Layout/Horizontal-Layout/Navigation.vue?vue&type=template&id=4b8e0c69");
/* harmony import */ var _Navigation_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navigation.vue?vue&type=script&lang=js */ "./resources/js/Shared/Layout/Horizontal-Layout/Navigation.vue?vue&type=script&lang=js");
/* harmony import */ var D_Web_Applications_FREELANCE_TRAFFIGAZE_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_Web_Applications_FREELANCE_TRAFFIGAZE_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Navigation_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Navigation_vue_vue_type_template_id_4b8e0c69__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Shared/Layout/Horizontal-Layout/Navigation.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Shared/Layout/Layout.vue":
/*!***********************************************!*\
  !*** ./resources/js/Shared/Layout/Layout.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Layout_vue_vue_type_template_id_18d4feba__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Layout.vue?vue&type=template&id=18d4feba */ "./resources/js/Shared/Layout/Layout.vue?vue&type=template&id=18d4feba");
/* harmony import */ var _Layout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Layout.vue?vue&type=script&lang=js */ "./resources/js/Shared/Layout/Layout.vue?vue&type=script&lang=js");
/* harmony import */ var D_Web_Applications_FREELANCE_TRAFFIGAZE_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_Web_Applications_FREELANCE_TRAFFIGAZE_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Layout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Layout_vue_vue_type_template_id_18d4feba__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Shared/Layout/Layout.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Shared/Layout/Vertical-Layout/Header.vue":
/*!***************************************************************!*\
  !*** ./resources/js/Shared/Layout/Vertical-Layout/Header.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Header_vue_vue_type_template_id_d2d47418__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header.vue?vue&type=template&id=d2d47418 */ "./resources/js/Shared/Layout/Vertical-Layout/Header.vue?vue&type=template&id=d2d47418");
/* harmony import */ var _Header_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header.vue?vue&type=script&lang=js */ "./resources/js/Shared/Layout/Vertical-Layout/Header.vue?vue&type=script&lang=js");
/* harmony import */ var D_Web_Applications_FREELANCE_TRAFFIGAZE_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_Web_Applications_FREELANCE_TRAFFIGAZE_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Header_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Header_vue_vue_type_template_id_d2d47418__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Shared/Layout/Vertical-Layout/Header.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Shared/Layout/Vertical-Layout/Index.vue":
/*!**************************************************************!*\
  !*** ./resources/js/Shared/Layout/Vertical-Layout/Index.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Index_vue_vue_type_template_id_02683d3b__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=02683d3b */ "./resources/js/Shared/Layout/Vertical-Layout/Index.vue?vue&type=template&id=02683d3b");
/* harmony import */ var _Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js */ "./resources/js/Shared/Layout/Vertical-Layout/Index.vue?vue&type=script&lang=js");
/* harmony import */ var D_Web_Applications_FREELANCE_TRAFFIGAZE_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_Web_Applications_FREELANCE_TRAFFIGAZE_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Index_vue_vue_type_template_id_02683d3b__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Shared/Layout/Vertical-Layout/Index.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Shared/Layout/Vertical-Layout/SideItem.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/Shared/Layout/Vertical-Layout/SideItem.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SideItem_vue_vue_type_template_id_680de39e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SideItem.vue?vue&type=template&id=680de39e */ "./resources/js/Shared/Layout/Vertical-Layout/SideItem.vue?vue&type=template&id=680de39e");
/* harmony import */ var _SideItem_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SideItem.vue?vue&type=script&lang=js */ "./resources/js/Shared/Layout/Vertical-Layout/SideItem.vue?vue&type=script&lang=js");
/* harmony import */ var D_Web_Applications_FREELANCE_TRAFFIGAZE_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_Web_Applications_FREELANCE_TRAFFIGAZE_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_SideItem_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_SideItem_vue_vue_type_template_id_680de39e__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Shared/Layout/Vertical-Layout/SideItem.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Shared/Layout/Vertical-Layout/Sidebar.vue":
/*!****************************************************************!*\
  !*** ./resources/js/Shared/Layout/Vertical-Layout/Sidebar.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Sidebar_vue_vue_type_template_id_40994af6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sidebar.vue?vue&type=template&id=40994af6 */ "./resources/js/Shared/Layout/Vertical-Layout/Sidebar.vue?vue&type=template&id=40994af6");
/* harmony import */ var _Sidebar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sidebar.vue?vue&type=script&lang=js */ "./resources/js/Shared/Layout/Vertical-Layout/Sidebar.vue?vue&type=script&lang=js");
/* harmony import */ var D_Web_Applications_FREELANCE_TRAFFIGAZE_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_Web_Applications_FREELANCE_TRAFFIGAZE_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Sidebar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Sidebar_vue_vue_type_template_id_40994af6__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Shared/Layout/Vertical-Layout/Sidebar.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Auth/ForgotPassword.vue?vue&type=script&setup=true&lang=js":
/*!***************************************************************************************!*\
  !*** ./resources/js/Pages/Auth/ForgotPassword.vue?vue&type=script&setup=true&lang=js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ForgotPassword_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ForgotPassword_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ForgotPassword.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Auth/ForgotPassword.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Auth/Login.vue?vue&type=script&setup=true&lang=js":
/*!******************************************************************************!*\
  !*** ./resources/js/Pages/Auth/Login.vue?vue&type=script&setup=true&lang=js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Login_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Login_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Login.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Auth/Login.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Home/Index.vue?vue&type=script&lang=js":
/*!*******************************************************************!*\
  !*** ./resources/js/Pages/Home/Index.vue?vue&type=script&lang=js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Index.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Home/Index.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Modules/Users/Index.vue?vue&type=script&lang=js":
/*!****************************************************************************!*\
  !*** ./resources/js/Pages/Modules/Users/Index.vue?vue&type=script&lang=js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Index.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Modules/Users/Index.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Modules/Users/Modals/Create.vue?vue&type=script&lang=js":
/*!************************************************************************************!*\
  !*** ./resources/js/Pages/Modules/Users/Modals/Create.vue?vue&type=script&lang=js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Create_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Create_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Create.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Modules/Users/Modals/Create.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Modules/Users/Modals/Group.vue?vue&type=script&lang=js":
/*!***********************************************************************************!*\
  !*** ./resources/js/Pages/Modules/Users/Modals/Group.vue?vue&type=script&lang=js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Group_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Group_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Group.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Modules/Users/Modals/Group.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Modules/Users/Modals/Role.vue?vue&type=script&lang=js":
/*!**********************************************************************************!*\
  !*** ./resources/js/Pages/Modules/Users/Modals/Role.vue?vue&type=script&lang=js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Role_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Role_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Role.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Modules/Users/Modals/Role.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Modules/Users/Modals/Update.vue?vue&type=script&lang=js":
/*!************************************************************************************!*\
  !*** ./resources/js/Pages/Modules/Users/Modals/Update.vue?vue&type=script&lang=js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Update_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Update_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Update.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Modules/Users/Modals/Update.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Modules/Users/Modals/Verify.vue?vue&type=script&lang=js":
/*!************************************************************************************!*\
  !*** ./resources/js/Pages/Modules/Users/Modals/Verify.vue?vue&type=script&lang=js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Verify_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Verify_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Verify.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Modules/Users/Modals/Verify.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Notifications/Documents.vue?vue&type=script&lang=js":
/*!********************************************************************************!*\
  !*** ./resources/js/Pages/Notifications/Documents.vue?vue&type=script&lang=js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Documents_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Documents_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Documents.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Notifications/Documents.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Notifications/Requests.vue?vue&type=script&lang=js":
/*!*******************************************************************************!*\
  !*** ./resources/js/Pages/Notifications/Requests.vue?vue&type=script&lang=js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Requests_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Requests_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Requests.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Notifications/Requests.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Welcome.vue?vue&type=script&lang=js":
/*!****************************************************************!*\
  !*** ./resources/js/Pages/Welcome.vue?vue&type=script&lang=js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Welcome_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Welcome_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Welcome.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Welcome.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Shared/Header.vue?vue&type=script&lang=js":
/*!****************************************************************!*\
  !*** ./resources/js/Shared/Header.vue?vue&type=script&lang=js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Header_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Header_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Header.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Header.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Shared/Layout/Common/RightBar.vue?vue&type=script&lang=js":
/*!********************************************************************************!*\
  !*** ./resources/js/Shared/Layout/Common/RightBar.vue?vue&type=script&lang=js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_RightBar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_RightBar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./RightBar.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Layout/Common/RightBar.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Shared/Layout/Horizontal-Layout/Header.vue?vue&type=script&lang=js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Shared/Layout/Horizontal-Layout/Header.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Header_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Header_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Header.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Layout/Horizontal-Layout/Header.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Shared/Layout/Horizontal-Layout/Index.vue?vue&type=script&lang=js":
/*!****************************************************************************************!*\
  !*** ./resources/js/Shared/Layout/Horizontal-Layout/Index.vue?vue&type=script&lang=js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Index.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Layout/Horizontal-Layout/Index.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Shared/Layout/Horizontal-Layout/Navigation.vue?vue&type=script&lang=js":
/*!*********************************************************************************************!*\
  !*** ./resources/js/Shared/Layout/Horizontal-Layout/Navigation.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Navigation_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Navigation_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Navigation.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Layout/Horizontal-Layout/Navigation.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Shared/Layout/Layout.vue?vue&type=script&lang=js":
/*!***********************************************************************!*\
  !*** ./resources/js/Shared/Layout/Layout.vue?vue&type=script&lang=js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Layout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Layout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Layout.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Layout/Layout.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Shared/Layout/Vertical-Layout/Header.vue?vue&type=script&lang=js":
/*!***************************************************************************************!*\
  !*** ./resources/js/Shared/Layout/Vertical-Layout/Header.vue?vue&type=script&lang=js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Header_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Header_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Header.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Layout/Vertical-Layout/Header.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Shared/Layout/Vertical-Layout/Index.vue?vue&type=script&lang=js":
/*!**************************************************************************************!*\
  !*** ./resources/js/Shared/Layout/Vertical-Layout/Index.vue?vue&type=script&lang=js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Index.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Layout/Vertical-Layout/Index.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Shared/Layout/Vertical-Layout/SideItem.vue?vue&type=script&lang=js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Shared/Layout/Vertical-Layout/SideItem.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SideItem_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SideItem_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SideItem.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Layout/Vertical-Layout/SideItem.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Shared/Layout/Vertical-Layout/Sidebar.vue?vue&type=script&lang=js":
/*!****************************************************************************************!*\
  !*** ./resources/js/Shared/Layout/Vertical-Layout/Sidebar.vue?vue&type=script&lang=js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Sidebar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Sidebar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Sidebar.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Layout/Vertical-Layout/Sidebar.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Auth/ForgotPassword.vue?vue&type=template&id=2d73eca8":
/*!**********************************************************************************!*\
  !*** ./resources/js/Pages/Auth/ForgotPassword.vue?vue&type=template&id=2d73eca8 ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ForgotPassword_vue_vue_type_template_id_2d73eca8__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ForgotPassword_vue_vue_type_template_id_2d73eca8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ForgotPassword.vue?vue&type=template&id=2d73eca8 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Auth/ForgotPassword.vue?vue&type=template&id=2d73eca8");


/***/ }),

/***/ "./resources/js/Pages/Auth/Login.vue?vue&type=template&id=a2ac2cea":
/*!*************************************************************************!*\
  !*** ./resources/js/Pages/Auth/Login.vue?vue&type=template&id=a2ac2cea ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Login_vue_vue_type_template_id_a2ac2cea__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Login_vue_vue_type_template_id_a2ac2cea__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Login.vue?vue&type=template&id=a2ac2cea */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Auth/Login.vue?vue&type=template&id=a2ac2cea");


/***/ }),

/***/ "./resources/js/Pages/Auth/NewPassword.vue?vue&type=template&id=6400ac06":
/*!*******************************************************************************!*\
  !*** ./resources/js/Pages/Auth/NewPassword.vue?vue&type=template&id=6400ac06 ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NewPassword_vue_vue_type_template_id_6400ac06__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NewPassword_vue_vue_type_template_id_6400ac06__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./NewPassword.vue?vue&type=template&id=6400ac06 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Auth/NewPassword.vue?vue&type=template&id=6400ac06");


/***/ }),

/***/ "./resources/js/Pages/Auth/ResetPassword.vue?vue&type=template&id=1da614ac":
/*!*********************************************************************************!*\
  !*** ./resources/js/Pages/Auth/ResetPassword.vue?vue&type=template&id=1da614ac ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ResetPassword_vue_vue_type_template_id_1da614ac__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ResetPassword_vue_vue_type_template_id_1da614ac__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ResetPassword.vue?vue&type=template&id=1da614ac */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Auth/ResetPassword.vue?vue&type=template&id=1da614ac");


/***/ }),

/***/ "./resources/js/Pages/Home/Index.vue?vue&type=template&id=f311f62a":
/*!*************************************************************************!*\
  !*** ./resources/js/Pages/Home/Index.vue?vue&type=template&id=f311f62a ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_template_id_f311f62a__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_template_id_f311f62a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Index.vue?vue&type=template&id=f311f62a */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Home/Index.vue?vue&type=template&id=f311f62a");


/***/ }),

/***/ "./resources/js/Pages/Modules/Users/Index.vue?vue&type=template&id=7f7480ac":
/*!**********************************************************************************!*\
  !*** ./resources/js/Pages/Modules/Users/Index.vue?vue&type=template&id=7f7480ac ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_template_id_7f7480ac__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_template_id_7f7480ac__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Index.vue?vue&type=template&id=7f7480ac */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Modules/Users/Index.vue?vue&type=template&id=7f7480ac");


/***/ }),

/***/ "./resources/js/Pages/Modules/Users/Modals/Create.vue?vue&type=template&id=0967293d":
/*!******************************************************************************************!*\
  !*** ./resources/js/Pages/Modules/Users/Modals/Create.vue?vue&type=template&id=0967293d ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Create_vue_vue_type_template_id_0967293d__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Create_vue_vue_type_template_id_0967293d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Create.vue?vue&type=template&id=0967293d */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Modules/Users/Modals/Create.vue?vue&type=template&id=0967293d");


/***/ }),

/***/ "./resources/js/Pages/Modules/Users/Modals/Group.vue?vue&type=template&id=41f5f664":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/Modules/Users/Modals/Group.vue?vue&type=template&id=41f5f664 ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Group_vue_vue_type_template_id_41f5f664__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Group_vue_vue_type_template_id_41f5f664__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Group.vue?vue&type=template&id=41f5f664 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Modules/Users/Modals/Group.vue?vue&type=template&id=41f5f664");


/***/ }),

/***/ "./resources/js/Pages/Modules/Users/Modals/Role.vue?vue&type=template&id=236191f7":
/*!****************************************************************************************!*\
  !*** ./resources/js/Pages/Modules/Users/Modals/Role.vue?vue&type=template&id=236191f7 ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Role_vue_vue_type_template_id_236191f7__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Role_vue_vue_type_template_id_236191f7__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Role.vue?vue&type=template&id=236191f7 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Modules/Users/Modals/Role.vue?vue&type=template&id=236191f7");


/***/ }),

/***/ "./resources/js/Pages/Modules/Users/Modals/Update.vue?vue&type=template&id=b3b1daec":
/*!******************************************************************************************!*\
  !*** ./resources/js/Pages/Modules/Users/Modals/Update.vue?vue&type=template&id=b3b1daec ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Update_vue_vue_type_template_id_b3b1daec__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Update_vue_vue_type_template_id_b3b1daec__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Update.vue?vue&type=template&id=b3b1daec */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Modules/Users/Modals/Update.vue?vue&type=template&id=b3b1daec");


/***/ }),

/***/ "./resources/js/Pages/Modules/Users/Modals/Verify.vue?vue&type=template&id=7a380a3a":
/*!******************************************************************************************!*\
  !*** ./resources/js/Pages/Modules/Users/Modals/Verify.vue?vue&type=template&id=7a380a3a ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Verify_vue_vue_type_template_id_7a380a3a__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Verify_vue_vue_type_template_id_7a380a3a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Verify.vue?vue&type=template&id=7a380a3a */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Modules/Users/Modals/Verify.vue?vue&type=template&id=7a380a3a");


/***/ }),

/***/ "./resources/js/Pages/Notifications/Documents.vue?vue&type=template&id=536b2418":
/*!**************************************************************************************!*\
  !*** ./resources/js/Pages/Notifications/Documents.vue?vue&type=template&id=536b2418 ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Documents_vue_vue_type_template_id_536b2418__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Documents_vue_vue_type_template_id_536b2418__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Documents.vue?vue&type=template&id=536b2418 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Notifications/Documents.vue?vue&type=template&id=536b2418");


/***/ }),

/***/ "./resources/js/Pages/Notifications/Requests.vue?vue&type=template&id=4602dc94":
/*!*************************************************************************************!*\
  !*** ./resources/js/Pages/Notifications/Requests.vue?vue&type=template&id=4602dc94 ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Requests_vue_vue_type_template_id_4602dc94__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Requests_vue_vue_type_template_id_4602dc94__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Requests.vue?vue&type=template&id=4602dc94 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Notifications/Requests.vue?vue&type=template&id=4602dc94");


/***/ }),

/***/ "./resources/js/Pages/Welcome.vue?vue&type=template&id=317d1a6e":
/*!**********************************************************************!*\
  !*** ./resources/js/Pages/Welcome.vue?vue&type=template&id=317d1a6e ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Welcome_vue_vue_type_template_id_317d1a6e__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Welcome_vue_vue_type_template_id_317d1a6e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Welcome.vue?vue&type=template&id=317d1a6e */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Welcome.vue?vue&type=template&id=317d1a6e");


/***/ }),

/***/ "./resources/js/Shared/Header.vue?vue&type=template&id=6517032e":
/*!**********************************************************************!*\
  !*** ./resources/js/Shared/Header.vue?vue&type=template&id=6517032e ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Header_vue_vue_type_template_id_6517032e__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Header_vue_vue_type_template_id_6517032e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Header.vue?vue&type=template&id=6517032e */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Header.vue?vue&type=template&id=6517032e");


/***/ }),

/***/ "./resources/js/Shared/Layout/Common/RightBar.vue?vue&type=template&id=7f5f5272":
/*!**************************************************************************************!*\
  !*** ./resources/js/Shared/Layout/Common/RightBar.vue?vue&type=template&id=7f5f5272 ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_RightBar_vue_vue_type_template_id_7f5f5272__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_RightBar_vue_vue_type_template_id_7f5f5272__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./RightBar.vue?vue&type=template&id=7f5f5272 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Layout/Common/RightBar.vue?vue&type=template&id=7f5f5272");


/***/ }),

/***/ "./resources/js/Shared/Layout/Horizontal-Layout/Header.vue?vue&type=template&id=1f4e66e2":
/*!***********************************************************************************************!*\
  !*** ./resources/js/Shared/Layout/Horizontal-Layout/Header.vue?vue&type=template&id=1f4e66e2 ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Header_vue_vue_type_template_id_1f4e66e2__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Header_vue_vue_type_template_id_1f4e66e2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Header.vue?vue&type=template&id=1f4e66e2 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Layout/Horizontal-Layout/Header.vue?vue&type=template&id=1f4e66e2");


/***/ }),

/***/ "./resources/js/Shared/Layout/Horizontal-Layout/Index.vue?vue&type=template&id=767e72e6":
/*!**********************************************************************************************!*\
  !*** ./resources/js/Shared/Layout/Horizontal-Layout/Index.vue?vue&type=template&id=767e72e6 ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_template_id_767e72e6__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_template_id_767e72e6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Index.vue?vue&type=template&id=767e72e6 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Layout/Horizontal-Layout/Index.vue?vue&type=template&id=767e72e6");


/***/ }),

/***/ "./resources/js/Shared/Layout/Horizontal-Layout/Navigation.vue?vue&type=template&id=4b8e0c69":
/*!***************************************************************************************************!*\
  !*** ./resources/js/Shared/Layout/Horizontal-Layout/Navigation.vue?vue&type=template&id=4b8e0c69 ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Navigation_vue_vue_type_template_id_4b8e0c69__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Navigation_vue_vue_type_template_id_4b8e0c69__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Navigation.vue?vue&type=template&id=4b8e0c69 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Layout/Horizontal-Layout/Navigation.vue?vue&type=template&id=4b8e0c69");


/***/ }),

/***/ "./resources/js/Shared/Layout/Layout.vue?vue&type=template&id=18d4feba":
/*!*****************************************************************************!*\
  !*** ./resources/js/Shared/Layout/Layout.vue?vue&type=template&id=18d4feba ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Layout_vue_vue_type_template_id_18d4feba__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Layout_vue_vue_type_template_id_18d4feba__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Layout.vue?vue&type=template&id=18d4feba */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Layout/Layout.vue?vue&type=template&id=18d4feba");


/***/ }),

/***/ "./resources/js/Shared/Layout/Vertical-Layout/Header.vue?vue&type=template&id=d2d47418":
/*!*********************************************************************************************!*\
  !*** ./resources/js/Shared/Layout/Vertical-Layout/Header.vue?vue&type=template&id=d2d47418 ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Header_vue_vue_type_template_id_d2d47418__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Header_vue_vue_type_template_id_d2d47418__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Header.vue?vue&type=template&id=d2d47418 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Layout/Vertical-Layout/Header.vue?vue&type=template&id=d2d47418");


/***/ }),

/***/ "./resources/js/Shared/Layout/Vertical-Layout/Index.vue?vue&type=template&id=02683d3b":
/*!********************************************************************************************!*\
  !*** ./resources/js/Shared/Layout/Vertical-Layout/Index.vue?vue&type=template&id=02683d3b ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_template_id_02683d3b__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_template_id_02683d3b__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Index.vue?vue&type=template&id=02683d3b */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Layout/Vertical-Layout/Index.vue?vue&type=template&id=02683d3b");


/***/ }),

/***/ "./resources/js/Shared/Layout/Vertical-Layout/SideItem.vue?vue&type=template&id=680de39e":
/*!***********************************************************************************************!*\
  !*** ./resources/js/Shared/Layout/Vertical-Layout/SideItem.vue?vue&type=template&id=680de39e ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SideItem_vue_vue_type_template_id_680de39e__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SideItem_vue_vue_type_template_id_680de39e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SideItem.vue?vue&type=template&id=680de39e */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Layout/Vertical-Layout/SideItem.vue?vue&type=template&id=680de39e");


/***/ }),

/***/ "./resources/js/Shared/Layout/Vertical-Layout/Sidebar.vue?vue&type=template&id=40994af6":
/*!**********************************************************************************************!*\
  !*** ./resources/js/Shared/Layout/Vertical-Layout/Sidebar.vue?vue&type=template&id=40994af6 ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Sidebar_vue_vue_type_template_id_40994af6__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Sidebar_vue_vue_type_template_id_40994af6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Sidebar.vue?vue&type=template&id=40994af6 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Layout/Vertical-Layout/Sidebar.vue?vue&type=template&id=40994af6");


/***/ }),

/***/ "./resources/js/Shared/Header.vue?vue&type=style&index=0&id=6517032e&lang=css":
/*!************************************************************************************!*\
  !*** ./resources/js/Shared/Header.vue?vue&type=style&index=0&id=6517032e&lang=css ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Header_vue_vue_type_style_index_0_id_6517032e_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Header.vue?vue&type=style&index=0&id=6517032e&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Header.vue?vue&type=style&index=0&id=6517032e&lang=css");


/***/ }),

/***/ "./resources/js/Pages sync recursive ^\\.\\/.*$":
/*!*******************************************!*\
  !*** ./resources/js/Pages/ sync ^\.\/.*$ ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./Auth/ForgotPassword": "./resources/js/Pages/Auth/ForgotPassword.vue",
	"./Auth/ForgotPassword.vue": "./resources/js/Pages/Auth/ForgotPassword.vue",
	"./Auth/Login": "./resources/js/Pages/Auth/Login.vue",
	"./Auth/Login.vue": "./resources/js/Pages/Auth/Login.vue",
	"./Auth/NewPassword": "./resources/js/Pages/Auth/NewPassword.vue",
	"./Auth/NewPassword.vue": "./resources/js/Pages/Auth/NewPassword.vue",
	"./Auth/ResetPassword": "./resources/js/Pages/Auth/ResetPassword.vue",
	"./Auth/ResetPassword.vue": "./resources/js/Pages/Auth/ResetPassword.vue",
	"./Home/Index": "./resources/js/Pages/Home/Index.vue",
	"./Home/Index.vue": "./resources/js/Pages/Home/Index.vue",
	"./Modules/Users/Index": "./resources/js/Pages/Modules/Users/Index.vue",
	"./Modules/Users/Index.vue": "./resources/js/Pages/Modules/Users/Index.vue",
	"./Modules/Users/Modals/Create": "./resources/js/Pages/Modules/Users/Modals/Create.vue",
	"./Modules/Users/Modals/Create.vue": "./resources/js/Pages/Modules/Users/Modals/Create.vue",
	"./Modules/Users/Modals/Group": "./resources/js/Pages/Modules/Users/Modals/Group.vue",
	"./Modules/Users/Modals/Group.vue": "./resources/js/Pages/Modules/Users/Modals/Group.vue",
	"./Modules/Users/Modals/Role": "./resources/js/Pages/Modules/Users/Modals/Role.vue",
	"./Modules/Users/Modals/Role.vue": "./resources/js/Pages/Modules/Users/Modals/Role.vue",
	"./Modules/Users/Modals/Update": "./resources/js/Pages/Modules/Users/Modals/Update.vue",
	"./Modules/Users/Modals/Update.vue": "./resources/js/Pages/Modules/Users/Modals/Update.vue",
	"./Modules/Users/Modals/Verify": "./resources/js/Pages/Modules/Users/Modals/Verify.vue",
	"./Modules/Users/Modals/Verify.vue": "./resources/js/Pages/Modules/Users/Modals/Verify.vue",
	"./Notifications/Documents": "./resources/js/Pages/Notifications/Documents.vue",
	"./Notifications/Documents.vue": "./resources/js/Pages/Notifications/Documents.vue",
	"./Notifications/Requests": "./resources/js/Pages/Notifications/Requests.vue",
	"./Notifications/Requests.vue": "./resources/js/Pages/Notifications/Requests.vue",
	"./Welcome": "./resources/js/Pages/Welcome.vue",
	"./Welcome.vue": "./resources/js/Pages/Welcome.vue"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./resources/js/Pages sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "?2128":
/*!********************************!*\
  !*** ./util.inspect (ignored) ***!
  \********************************/
/***/ (() => {

/* (ignored) */

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["css/app-rtl","css/app-dark","css/app","/js/vendor"], () => (__webpack_exec__("./resources/js/app.js"), __webpack_exec__("./resources/sass/app.scss"), __webpack_exec__("./resources/sass/app-dark.scss"), __webpack_exec__("./resources/sass/app-rtl.scss")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);