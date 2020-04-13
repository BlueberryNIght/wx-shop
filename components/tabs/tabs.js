Component({
  data: {
    currentIndex: 0
  },
  properties: {
    tabTitles: {
      type: Array,
      value: []
    }
  },
  methods: {
    handleItemTap(event){
      this.triggerEvent("handleItemClick")
      const {index} = event.currentTarget.dataset
      this.setData({
        currentIndex: index
      })
      
    }
  }
})