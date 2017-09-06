import Ember from 'ember'
import $ from 'jquery'

export default Ember.Route.extend({
  model: function(){
    return $.get('cities.json')
  }
})
