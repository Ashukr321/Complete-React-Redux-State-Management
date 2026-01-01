
import actionstypes from "./patientActionsType";

const initialState = {
  patients: [],         // Saare patients ka data
  activePatient: null,  // Currently selected patient (for details view)
  filters: {            // Search and Filter state
    department: 'All',  // Cardiology, OPD, etc.
    status: 'Admitted'
  },
  loading: false,
  error: null
};


function patientReducer(state = initialState, action) {
switch(action.type){
    case actionstypes.FETCH_PATIENTS_START:
        return {
            ...state,
            loading:true,
            error:null,
        }
    case actionstypes.FETCH_PATIENTS_SUCCESS:
        return {
            ...state,
            loading:false,
            patients:action.payload
        }
    default:
        return state;
}

}

export default patientReducer;