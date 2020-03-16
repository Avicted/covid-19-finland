import csv from "csvtojson";

const getDefaultState = () => {
    return {
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
    fetchData({ commit }: any)  {         
        fetch("https://covid.ourworldindata.org/data/full_data.csv")
        .then(response => response.text())
        .then((response) => {
            csv({
                output: "json"
            })
            .fromString(response.toString())
            .then((result: any) => {
                // console.log(result);
                commit("DATA_FETCHED", result);
            })  
        })
    }
}

// mutations
const mutations = {
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
