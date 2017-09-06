import Ember from 'ember';

export default Ember.Component.extend({
  cities: [],
  actions: {
    addCity: function () {
      let v = this.get('cityName')
      this.get('cities').unshiftObject(v)
    },
    deleteCity: function(a){
      console.log(a)
    }
  }
})
