import { createStore } from 'vuex'

export default createStore({
  state: {
    activo: false,
    share: document.querySelector('.share img'),
    places: document.querySelector('.places')
  },
  getters: {
  },
  mutations: {
    showSites(state){
      state.activo = !state.activo;

    },
    setFalse(state, event){
      
      if(
        
        event.target == document.querySelector('.share img') ||
        event.target == document.querySelector('.places')    ||
        event.target == document.querySelector('.share')

      ){
        
          if(event.target == document.querySelector('.places'))state.activo = true;
          else state.activo = ! state.activo;
        
      } else{

        state.activo = false;

      }
      
    }
  },
  actions: {
  },
  modules: {
  }
})
