export const INITIAL_STATE = {
    isValid : {
        text : true,
        title : true,
        data : true
    },
    values : {
        text : '',
        title : '',
        data : '',
        tag : ''
    },
    isFormReadyToSubmit : false

}

export function formReducer(state, action){
    switch (action.type) {
        case 'SET_VALUE' :
            return { ...state,
                values: { ...state.values, ...action.payload }
            }
        case 'CLEAR' :
            return { ...state,
                values: INITIAL_STATE.values,
                isFormReadyToSubmit: false
            }
        case 'RESET_VALIDITY' :
            return { ...state, isValid: INITIAL_STATE.isValid}
        case 'SUBMIT' : {
            const titleValidity = state.values.title?.trim().length;
            const textValidity = state.values.text?.trim().length;
            const dateValidity = state.values.data;
            return {
                ...state,
                isValid: {
                    text : textValidity,
                    title : titleValidity,
                    data : dateValidity
                },
                isFormReadyToSubmit: textValidity && titleValidity && dateValidity
            }
        }
    }
}