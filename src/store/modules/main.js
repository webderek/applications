export default {
    actions: {
        setLoading(context, isLoading){
            context.commit("updateLoading", isLoading)
        }
    },
    mutations: {
        updateLoading(state, isLoading){
            state.isLoading = isLoading
        }
    },
    state: {
        isLoading: false,
    },
    getters: {
        getLoading(state){
            return state.isLoading
        }
    },
}