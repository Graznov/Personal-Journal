export const INITIAL_STATE = {
    isValid : {
        text : true,
        title : true,
        data : true
    },
    values : {
        text : undefined,
        title : undefined,
        data : undefined
    },
    isFormReadyToSubmit : false

}

export function formReducer(state, action){
    switch (action.type) {
        case 'RESET_VALIDITY' :
            return { ...state, isValid: INITIAL_STATE.isValid}
        case 'SUBMIT' : {
            const titleValidity = action.payload.title?.trim().length;
            const textValidity = action.payload.text?.trim().length;
            const dateValidity = action.payload.data;
            return {
                values: action.payload,
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