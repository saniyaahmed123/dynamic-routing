import React, { createContext ,useState} from 'react'

// create context
//provide context 
//use context

export const contextObj = createContext()
function UserContext({children}) {

    const [user] = useState({
        username: "Ali Ahmed",
        email: "ali@gmail.com",
        role: "Student",
        phone: "03128882941",
        address: "B 103, Block 19 F.B Area",
        gender: "Male",
        dob: "January 15, 2004",
        qualification: "Intermediate",
        studentId: "EDP-2026-941"
    })
    
    return (
        <div>
            <contextObj.Provider value={user}>
            {children}
            </contextObj.Provider>


        </div>
    )
}

export default UserContext
