export default {
    namespaced: true,
    state: {
        page: 'all-list',
    },
    getters: {
        page: state => state.page
    },
    mutations: {
        SET_PAGE(state, payload){
            state.page = payload;
        }
    },
    actions: {
        
    }
}
