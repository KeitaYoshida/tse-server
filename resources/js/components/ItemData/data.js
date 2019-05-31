export default {
  data() {
    return {
      btn_nav: {
        view: {
          shukei: false,
          henshu: false,
          ukeire: false,
          shiyo: false
        },
        config: [
          {
            name: '集計',
            code: 'shukei',
            icon: 'fas fa-calculator'
          }, {
            name: '受入',
            code: 'ukeire',
            icon: 'fas fa-pencil-alt'
          }, {
            name: '使用',
            code: 'shiyo',
            icon: 'fas fa-play'
          }, {
            name: '編集',
            code: 'henshu',
            icon: 'fas fa-edit'
          },
        ]
      }
    }
  }
}