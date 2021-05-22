import EventEmitter from 'events';

const emitter = new EventEmitter();
const tokenKey = 'user_session';
const eventTypes = {
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
  LOGIN_STATUS_CHANGED: 'LOGIN_STATUS_CHANGED',
};

export function isLoggedIn() {
  const token = localStorage.getItem(tokenKey);
  return !!token;
}

export function login(token) {
  localStorage.setItem(tokenKey, token);

  emitter.emit(eventTypes.LOGIN);
  emitter.emit(eventTypes.LOGIN_STATUS_CHANGED, true);
}

export function logout() {
  localStorage.removeItem(tokenKey);

  emitter.emit(eventTypes.LOGOUT);
  emitter.emit(eventTypes.LOGIN_STATUS_CHANGED, false);
}

export function onLoginStatusChange(cb) {
  emitter.on(eventTypes.LOGIN_STATUS_CHANGED, cb);

  return () => emitter.off(eventTypes.LOGIN_STATUS_CHANGED, cb);
}

export function onLogin(cb) {
  emitter.on(eventTypes.LOGIN, cb);

  return () => emitter.off(eventTypes.LOGIN, cb);
}
export function onLogout(cb) {
  emitter.on(eventTypes.LOGOUT, cb);

  return () => emitter.off(eventTypes.LOGOUT, cb);
}
