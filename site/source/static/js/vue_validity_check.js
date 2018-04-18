new Vue({

  delimiters: ['${', '}'],  // Do not clash with Jinja 2 templates.

  el: '#vue-js-app',

  data: {
    form: {
      auth_id: null,
      birthday_date: null,
      errors: {
        auth_id: [],
        birthday_date: [],
      },
    },
    pendingXhrRequest: false,
    result: null,
  },

  computed: {
    authIdClass: function () {
      return {
        'form-error': this.form.errors.auth_id.length > 0,
      }
    },
    birthdayDateClass: function () {
      return {
        'form-error': this.form.errors.birthday_date.length > 0,
      }
    },
    resultClass: function () {
      return {
        'success': this.result,
        'error': this.result && this.result.error,
      }
    },
  },

  methods: {

    checkForm: function (e) {

      if (this.pendingXhrRequest) {
        return false;
      }

      this.form.errors.auth_id = []
      this.form.errors.birthday_date = []

      // Ensure fields are not empty.
      if (!this.form.auth_id) {
        this.form.errors.auth_id.push("Ce champ est obligatoire");
      }
      if (!this.form.birthday_date) {
        this.form.errors.birthday_date.push("Ce champ est obligatoire");
      }

      // Ensure `auth_id` is a number.
      if (isNaN(this.form.auth_id)) {
        this.form.errors.auth_id.push("Vous devez saisir un numéro");
      }

      // Validate `birthday_date` format.
      if (!this.form.birthday_date.match(/^\d{2}\/\d{2}\/\d{4}$/)) {
        this.form.errors.birthday_date.push("Le format de la date est incorrect, utilisez: jj/mm/aaaa");
      }

      if (this.form.errors.auth_id.length || this.form.errors.birthday_date.length) {
        return false;
      }

      this.xhrPerformRequest()

    },

    xhrPerformRequest: function () {
      this.pendingXhrRequest = true;
      let that = this;
      // TODO: use the real URL with good params.
      let url = 'https://reqres.in/api/users?page=2';
      let xhr = new XMLHttpRequest();
      xhr.responseType = 'json';  // https://mathiasbynens.be/notes/xhr-responsetype-json
      xhr.onreadystatechange = function () {
        if (this.readyState === XMLHttpRequest.DONE) {
          if (this.status === 200) {
            that.xhrSuccessHandler(this.response);
          } else {
            that.xhrErrorHandler();
          }
        }
      };
      xhr.open('GET', url, true);
      xhr.send(null);
    },

    xhrSuccessHandler: function (jsonResponse) {
      this.pendingXhrRequest = false;
      // TODO: populate this.result with jsonResponse.
      // console.log(jsonResponse);
      this.result = {
        ds_id: 12345,
        siret: '12345678901234',
        prenom: '*a**',
        nom: '*e****',
        has_expired: false,
        date_de_debut_apt: '12/12/2017',
        date_de_fin_apt: '10/06/2018',
      };
    },

    xhrErrorHandler: function (jsonResponse) {
      this.pendingXhrRequest = false;
      // TODO: handle error.
    },

  },

});
