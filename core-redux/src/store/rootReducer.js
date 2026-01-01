
import { combineReducers } from "redux";
import patientReducer from "../features/patients/patientReducer";

const rootReducer = combineReducers({
    patients: patientReducer,
});

export default rootReducer;