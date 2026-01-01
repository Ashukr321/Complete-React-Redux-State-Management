import { useSelector, useDispatch } from "react-redux";
import { fetchPatients } from "./features/patients/patientActions";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  const { patients, loading, error } = useSelector((state) => state.patients);

  useEffect(() => {
    dispatch(fetchPatients());
  }, [dispatch]);

  if (loading) return <h2 style={{ textAlign: "center" }}>Loading patients...</h2>;
  if (error) return <h2 style={{ textAlign: "center", color: "red" }}>Error: {error}</h2>;

  // Remove duplicates by ID
  const uniquePatients = Array.from(
    new Map(patients.map((p) => [p.id, p])).values()
  );

  // Inline style helpers
  const cardStyle = {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "16px",
    margin: "12px 0",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
  };

  const statusColor = (status) => {
    switch (status) {
      case "Admitted":
        return "#4caf50"; // green
      case "Discharged":
        return "#f44336"; // red
      default:
        return "#2196f3"; // blue
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "40px auto", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", color: "#333" }}>HMS Dashboard</h1>

      {uniquePatients.length === 0 ? (
        <p style={{ textAlign: "center" }}>No patients found</p>
      ) : (
        uniquePatients.map((patient) => (
          <div key={patient.id} style={cardStyle}>
            <div>
              <h3 style={{ margin: "0 0 8px 0" }}>{patient.name}</h3>
              <p style={{ margin: 0, color: "#555" }}>{patient.department}</p>
            </div>
            <span
              style={{
                padding: "6px 12px",
                borderRadius: "20px",
                color: "#fff",
                backgroundColor: statusColor(patient.status),
                fontWeight: "bold",
              }}
            >
              {patient.status}
            </span>
          </div>
        ))
      )}
    </div>
  );
}

export default App;
