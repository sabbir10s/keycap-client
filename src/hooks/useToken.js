// import { useEffect, useState } from "react"

// const useToken = (user) => {
//     const [token, setToken] = useState('');
//     useEffect(() => {
//         const email = user?.user?.email;
//         const currentUser = { email: email }

//         if (user) {
//             fetch(`http://localhost:5000/user/${email}`, {
//                 method: 'PUT',
//                 headers: {
//                     'content-type': 'application/json'
//                 },
//                 body: JSON.stringify(currentUser)
//             })
//                 .then(res => res.json())
//                 .then(data => {
//                     const access-token = data.token;
//                     localStorage.setItem('access-token', access-token);
//                     setToken(access-token);
//                 })
//         }
//     }, [user])
//     return [token];
// }
// export default useToken;