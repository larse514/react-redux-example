export function patientFormattedDetail(patient){
    if(patient && patient.address && patient.address.length > 0){
        const address = patient.address[0];
        //format address data
        const newAddress = address.address + "\n" + address.city + " " + address.state + " " + address.zip;
        //todo-remove hardcoded doctor id
        return Object.assign({}, patient, {
            address: newAddress, 
            doctorId: "6a2b79b0-882b-4a5d-92b5-7d0436a903de", 
            dateOfBirth: new Date(patient.dateOfBirth).toLocaleDateString()
        });
    } else {
        return patient;
    }
}

export function patientPastAppointments(patient){
    if(!patient || !patient.appointments || patient.appointments.length < 1){
        return [];
    }
    
    const appointments = patient.appointments;
    return appointments.filter(appt => {
        let now = new Date();
        return new Date(appt.datetime) < now;
    }).map(appt =>{
       return (Object.assign({}, appt, {datetime: new Date(appt.datetime).toLocaleString()} ))
    })
    
}
export function patientPendingAppointments(patient){
    if(!patient || !patient.appointments || patient.appointments.length < 1){
        return [];
    }
    
    const appointments = patient.appointments;
    return appointments.filter(appt => {
        let now = new Date();
        return new Date(appt.datetime) > now;
    }).map(appt =>{
        return (Object.assign({}, appt, {datetime: new Date(appt.datetime).toLocaleString()} ))
     })
    
}
