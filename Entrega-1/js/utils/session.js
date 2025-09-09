// session.js (versión global)
const SESSION_KEY = "session_user";

function getCurrentUser() {
  try { return JSON.parse(localStorage.getItem(SESSION_KEY)) || null; }
  catch { return null; }
}

function setCurrentUser(userObj) {
  if (userObj) localStorage.setItem(SESSION_KEY, JSON.stringify(userObj));
  else localStorage.removeItem(SESSION_KEY);
}

function getCartKeyForUser(user) {
  if (!user?.email) return "cart_v1:guest";
  const email = String(user.email).trim().toLowerCase();
  return `cart_v1:${email}`;
}

// Exponer en window por si algún archivo lo necesita explícitamente
window.getCurrentUser = getCurrentUser;
window.setCurrentUser = setCurrentUser;
window.getCartKeyForUser = getCartKeyForUser;
