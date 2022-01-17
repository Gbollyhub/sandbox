import { mapGetters } from "vuex"
import axios from "axios";
import Loader from "./components/loader.vue";
import Status from "./components/modal/status_modal.vue";
import moment from 'moment';
export default {
    components: {
        Loader,
        Status
      },
    data() {
        return {
            loader: false,
            status_modal: false,
            status: null,
            message: null,
            text:"yehh",
            user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")).first_name : null
        }
    },
    computed:{
    ...mapGetters([
        'getUser',
        'getUrl',
        'getQuestions',
        'getBlogs',
        'getTutorials',
        'getLeaderboard',
        'getStats',
        'getPostByUser'
    ])
    },
    methods:{
        formatDate(date){
            return moment(date).format("dddd, MMMM Do YYYY, h:mm:ss a")
        },
        formatDate2(date){
         return moment(date).format("DD/MM/YYYY")
     }

    },
    }


