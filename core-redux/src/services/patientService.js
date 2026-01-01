const baseUrl = import.meta.env.VITE_BASE_URL;

export const getPatients = async ()=>{
    console.log(baseUrl);
    const response  = await fetch(`/api/v1/patients.json`);
    return  await response.json();
}

