new Vue({
  el: '#exercise',
  data: {
    status: false,
    ghostBtn: 'ghost-btn',
    ghostText: 'ghost-text',
    userClass: '',
    customClass: '',
    customClassStatus: '',
    customStyle: '',
    progress: 0;
  },
  computed: {
    switchStatus: function() {
      return {
        'highlight': this.status,
        'shrink': !this.status
      };
    },
    customClassResult: function() {
      var class_list = this.customClass.split(' '),
        class_status = this.customClassStatus.split(' '),
        result = {};
      class_list.forEach(function(item, index) {
        var str_idx = class_status[index];
        result[item] = str_idx === 'true' ? true : false;
      });
      return result;
    },
    customStyleResult: function() {
      var style_list = this.customStyle.split(',');
      var style_obj = {}
      style_list.forEach(function(item){
        item = item.split(':');
        style_obj[item[0]] = item[1];
      });
      console.log(style_obj);
      return style_obj
    },
    styleProgressBar: function() {
      return {
        width: this.progress + '%'
      };
    }
  },
  methods: {
    startEffect: function() {
      var vm = this;
      setInterval(function(){
        vm.status = !vm.status;
      }, 1000);
    },
    startProgress: function() {
      var vm = this;
      if ( vm.progress < 100 ) {
        setInterval(function(){
          vm.progress++;
        }, 500);
      }
    }
  }
});
