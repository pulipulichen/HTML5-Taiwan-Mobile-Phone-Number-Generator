var app = new Vue({
  el: '#TaiwanMobilePhoneNumberGenerator',
  data: {
    count: 10,
    fileType: 'csv',
    prefixList: ["0900", "0901", "0902", "0903", "0904", "0905", "0906", "0907", "0908", "0909", "0940", "0941", "0942", "0943", "0944", "0945", "0946", "0947", "0948", "0949", "0950", "0951", "0957", "0959", "0962", "0964", "0965", "0966", "0967", "0969", "0973", "0974", "0975", "0976", "0977", "0978", "0979", "0980", "0981", "0983", "0984", "0985", "0990", "0991", "0992", "0993", "0994", "0995", "0996", "0997", "0998", "0999"]
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
      var _max_count = this.count
      var _allow_reduplicate = false
      var _conjunction = "\n";
      
      var _numbers = [];
      var _max_postfix = 999999
      //var _min_postfix = 0
      var _prefix_ary = this.prefixList
      
      while (_numbers.length < _max_count) {
        var _number = "";
        // 先取的隨機的prefix
        var _prefix_i = Math.floor(Math.random() * (_prefix_ary.length));
        var _prefix = _prefix_ary[_prefix_i];
        // 後面的數字
        var _postfix = Math.floor(Math.random() * (_max_postfix)) + "";
        while (_postfix.length < 6) {
          _postfix = "0" + _postfix;
        }

        _number = _prefix + _postfix;
        if (_allow_reduplicate === false) {
          if ($.inArray(_number, _numbers) === - 1) {
           _numbers.push(_number);
         }
        }
        else {
          _numbers.push(_number);
        }
      }
      return _numbers.join(_conjunction)
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
    reset: function () {
      this.count++
      this.count--
    },
    download: function () {
      let filetypeExt = this.fileType
      
      let filename = this.count + 'MobilePhoneNumbers-' + DateHelper.getCurrentTimeString() + '.' + filetypeExt
      let content = this.phoneNumbers
      
      if (filetypeExt === 'csv') {
        content = 'Mobile Phone Numbers\n' + content
      }
      
      DownloadHelper.downloadAsFile(filename, content)
      //console.log(this.phoneNumbers)
    }
  }
  /*
  methods: {
    
  }
  */
})
