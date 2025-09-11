const SESSION_KEY="session_user";
const getCurrentUser=()=>{try{return JSON.parse(localStorage.getItem(SESSION_KEY))||null}catch{return null}};
const setCurrentUser=u=>u?localStorage.setItem(SESSION_KEY,JSON.stringify(u)):localStorage.removeItem(SESSION_KEY);
const getCartKeyForUser=u=>u?.email?`cart_v1:${String(u.email).trim().toLowerCase()}`:"cart_v1:guest";
Object.assign(window,{getCurrentUser,setCurrentUser,getCartKeyForUser});