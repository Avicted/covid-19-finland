import Papa from "papaparse";

const getDefaultState = () => {
    return {
        isLoading: false,
        data: null
    }
}

// initial state
const state = getDefaultState()

// getters
const getters = {
    data: (state: any) => state.data,
}


// actions
const actions = {
    fetchData({ commit }: any) {
        return new Promise((resolve, reject) => {
            commit("LOADING", true);

            fetch("https://covid.ourworldindata.org/data/ecdc/full_data.csv")
                .then(response => response.text())
                .then((response) => {
                    Papa.parse(response, {
                        fastMode: false,
                        header: true,
                        delimiter: ",",
                        skipEmptyLines: true,
                        worker: true,

                        complete: (results) => {
                            // console.log(results)
                            resolve();
                            commit("LOADING", false);
                            commit("DATA_FETCHED", results.data);
                        },
                        error: (error) => {
                            commit("LOADING", false);
                            reject();
                        }
                    });
                });
        });
    }
}

// mutations
const mutations = {
    LOADING(state: any, payload: boolean) {
        state.isLoading = payload;
    },
    DATA_FETCHED(state: any, payload: any) {
        state.data = payload;
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
