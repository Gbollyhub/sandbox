import { createStore } from 'vuex'
import axios from'axios'
export default createStore({
  state: {
    url: process.env.VUE_APP_SANDBOX_URL,
    user: JSON.parse(localStorage.getItem("user")),
    questions: [],
    blogs: [],
    tutorials: [],
    leaderboard:[],
    stats:'',
    userPost:[]
  },
  getters:{
    getUrl(state){
      return state.url
    },
   getUser(state){
     return state.user
   },
   getQuestions(state){
    return state.questions
  },
  getBlogs(state){
    return state.blogs
  },
  getTutorials(state){
    return state.tutorials
  },
  getLeaderboard(state){
    return state.leaderboard
  },
  getStats(state){
    return state.stats
  },
  getPostByUser(state){
    return state.userPost
  },
  },
  mutations: {
    setUser(state, payload){
     state.user = payload
    },
    setQuestionPosts(state, payload){
      state.questions = payload
     },
     setBlogPosts(state, payload){
      state.blogs = payload
     },
     setTutorialPosts(state, payload){
      state.tutorials = payload
     },
     setLeaderboard(state, payload){
      state.leaderboard = payload
     },
     setStats(state, payload){
      state.stats = payload
     },
     setPostByUser(state, payload){
      state.userPost = payload
     }
  },
  actions: {
     Logout(){
      localStorage.removeItem('user')
      window.location.reload();
     },
   async getQuestionsPost({commit, state}) {
    const result = await axios.get(state.url + '/Posts?PageNumber=1&PageSize=10&Category=question')
    commit('setQuestionPosts', result.data.posts.$values)
   },
   async getBlogsPost({commit, state}) {
    const result = await axios.get(state.url + '/Posts?PageNumber=1&PageSize=10&Category=blog')
    commit('setBlogPosts', result.data.posts.$values)
   },
   async getTutorialsPost({commit, state}) {
    const result = await axios.get(state.url + '/Posts?PageNumber=1&PageSize=10&Category=tutorial')
    commit('setTutorialPosts', result.data.posts.$values)
   },
   async getPostByUser({commit, state},category) {
    const result = await axios.get(`${state.url}/Posts/users/${state.user.a_user_id}?category=${category}`)
    commit('setPostByUser', result.data.posts.$values)
   },

   async getLeaderboard({commit, state}) {
    const result = await axios.get(state.url + '/Users/leaderboard?topcount=10')
    commit('setLeaderboard', result.data.leaders.$values)
   },
   async getStats({commit, state}, user) {
    const result = await axios.get(state.url + '/Users/stats/' + user)
    commit('setStats', result.data)
   }
  },
  modules: {
  }
})
