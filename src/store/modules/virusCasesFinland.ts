const getDefaultState = () => {
    return {
        confirmed: null,
        deaths: null,
        recovered: null,
        isLoading: false,
    }
}

// initial state
const state = getDefaultState()

// getters
const getters = {
    confirmed: (state: any) => state.confirmed,
    deaths: (state: any) => state.deaths,
    recovered: (state: any) => state.recovered,
}


// actions
const actions = {
    fetchData({ commit }: any)  {
        return new Promise((resolve, reject) => {
            commit("LOADING", true);
            fetch("https://w3qa5ydb4l.execute-api.eu-west-1.amazonaws.com/prod/finnishCoronaData/v2")
            .then(response => response.json() as Promise<any[]>)
            .then((response) => {
                commit("DATA_FETCHED", response);
                commit("LOADING", false);
                resolve();
            })
        })
    }
}

// mutations
const mutations = {
    LOADING(state: any, payload: boolean) {
        state.isLoading = payload;
    },
    DATA_FETCHED(state: any, payload: any) {
        state.confirmed = payload.confirmed;
        state.deaths = payload.deaths;
        state.recovered = payload.recovered;
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
