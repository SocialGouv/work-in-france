new Vue({

  delimiters: ['${', '}'],  // Do not clash with Jinja 2 templates.

  el: '#vue-js-app',

  data: {
    form: {
      ds_id: null,
      birthday_date: null,
      errors: {
        ds_id: [],
        birthday_date: [],
      },
    },
    pendingXhrRequest: false,
    result: null,
    xhrError: null,
  },

  computed: {
    authIdClass: function () {
      return {
        'form-error': this.form.errors.ds_id.length > 0,
      }
    },
    birthdayDateClass: function () {
      return {
        'form-error': this.form.errors.birthday_date.length > 0,
      }
    },
    resultClass: function () {
      return {
        // Expired APT.
        'info': this.result && this.result.data && this.result.data.has_expired,
        // Valid APT.
        'success': this.result && this.result.data && !this.result.data.has_expired,
        // Invalid APT.
        'error': this.result && !this.result.data,
      }
    },
  },

  methods: {

    checkForm: function (e) {

      if (this.pendingXhrRequest) {
        return false;
      }

      this.form.errors.ds_id = []
      this.form.errors.birthday_date = []

      // Ensure fields are not empty.
      if (!this.form.ds_id) {
        this.form.errors.ds_id.push("Ce champ est obligatoire");
      }
      if (!this.form.birthday_date) {
        this.form.errors.birthday_date.push("Ce champ est obligatoire");
      }

      // Ensure `ds_id` is a number.
      if (isNaN(this.form.ds_id)) {
        this.form.errors.ds_id.push("Vous devez saisir un numéro");
      }

      // Validate `birthday_date` format.
      if (!this.form.birthday_date.match(/^\d{2}\/\d{2}\/\d{4}$/)) {
        this.form.errors.birthday_date.push("Le format de la date est incorrect, utilisez: jj/mm/aaaa");
      }

      if (this.form.errors.ds_id.length || this.form.errors.birthday_date.length) {
        return false;
      }

      this.xhrPerformRequest()

    },

    xhrPerformRequest: function () {

      this.pendingXhrRequest = true;
      this.result = null;
      this.xhrError = null;

      let url = [
        'http://localhost:1337/api/v1/apt_validity_check',
        this.form.ds_id,
        // Reformat dd/mm/yyyy to yyyy-mm-dd.
        this.form.birthday_date.split('/').reverse().join('-')
      ].join('/');

      let that = this;
      let xhr = new XMLHttpRequest();
      xhr.responseType = 'json';  // https://mathiasbynens.be/notes/xhr-responsetype-json
      xhr.onreadystatechange = function () {
        if (this.readyState === XMLHttpRequest.DONE) {
          if (this.status === 200) {
            that.xhrResponseHandler(this.response);
          } else {
            that.xhrErrorHandler(this.response);
          }
        }
      };
      xhr.open('GET', url, true);
      xhr.send(null);

    },

    xhrResponseHandler: function (jsonResponse) {
      this.pendingXhrRequest = false;
      if (jsonResponse.status === 'invalid') {  // Invalid APT.
        this.result = {data: null};
        return
      }
      this.result = {data: jsonResponse.data[0]};
    },

    xhrErrorHandler: function (jsonResponse) {
      this.pendingXhrRequest = false;
      this.result = null;
      this.xhrError = true;
    },

  },

});
