import {optionAllow} from "../services/Home";

export default {
    namespace: 'home',
    state: {
        title: 'Hello World'
    },

    effects: {
        *fetchGetData({payload}, {call}) {
            const res = yield call(optionAllow, payload)
            return res
        },
    },

    reducers: {
        save(state, { payload }) {
            return { ...state, ...payload };
        },
    },
};