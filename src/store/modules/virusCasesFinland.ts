const getDefaultState = () => {
    return {
        confirmed: null,
        deaths: null,
        recovered: null,
        isLoading: false,
        hcdTestData: null,
    }
}

// initial state
const state = getDefaultState()

// getters
const getters = {
    confirmed: (state: any) => state.confirmed,
    deaths: (state: any) => state.deaths,
    recovered: (state: any) => state.recovered,
    hcdTestData: (state: any) => state.hcdTestData,
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
    },

    fetchHcdTestData({ commit }: any) {
        return new Promise((resolve, reject) => {
            fetch("https://w3qa5ydb4l.execute-api.eu-west-1.amazonaws.com/prod/hcdTestData")
            .then(response => response.json() as Promise<any[]>)
            .then((response) => {
                commit("HCD_TEST_DATA_FETCHED", response);
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
    HCD_TEST_DATA_FETCHED(state: any, payload: any) {
        state.hcdTestData = payload;
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
