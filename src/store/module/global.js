export default {
  namespaced:true,
  state:{
      //控制footer是否显示
      isShowFooter:true,
      _token:''
  },
  mutations:{
      //设置是否显示footer
      setFooter(state,arg){
          state.isShowFooter = arg
      },
      setJwt(state,arg){
          state._token = arg
          localStorage.setItem('_token',arg)
      }
  },  
  actions:{

  },
  getters:{

  }
}