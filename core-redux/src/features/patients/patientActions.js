// all asynchronous actions related to patients will be defined here
import  {getPatients}  from "../../services/patientService";
import actionstypes from "./patientActionsType";

// Sync Action
export const updateVitals = (id, vitals) => ({
  type: actionstypes.UPDATE_PATIENT_VITALS,
  payload: { id, vitals }
});


// Async Action (Thunk) — MOCK API
export const fetchPatients = () => {
  return async (dispatch) => {
    dispatch({ type: actionstypes.FETCH_PATIENTS_START });
    try {
      // simulate API delay
      const data =  await getPatients();
      dispatch({
        type: actionstypes.FETCH_PATIENTS_SUCCESS,
        payload: data,
      })
    } catch (err) {
      dispatch({
        type: actionstypes.FETCH_PATIENTS_ERROR,
        payload: "Failed to fetch patients"
      });
    }
  };
};
