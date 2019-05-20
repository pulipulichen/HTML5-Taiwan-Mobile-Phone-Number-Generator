var app = new Vue({
  el: '#TaiwanMobilePhoneNumberGenerator',
  data: {
    count: 10,
    fileType: 'csv'
  },
  mounted() {
    if (localStorage.getItem('fileType')) {
      try {
        this.fileType = localStorage.getItem('fileType')
      } catch(e) {
        console.trace('error: ' + e)
        localStorage.removeItem('fileType');
      }
    }
    
    if (localStorage.getItem('count')) {
      try {
        this.count = localStorage.getItem('count')
      } catch(e) {
        console.trace('error: ' + e)
        localStorage.removeItem('count');
      }
    }
  },
  computed: {
    phoneNumbers: function () {
      return this.count
    }
  },
  created: function () {
    $(this.$refs.modal).find('.ui.dropdown').dropdown()
  },
  methods: {
    persist: function () {
      localStorage.setItem('count', this.count)
      localStorage.setItem('fileType', this.fileType)
    },
    download: function () {
      console.log(this.phoneNumbers)
    }
  }
  /*
  methods: {
    
  }
  */
})