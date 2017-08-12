import axios from 'axios';

export const QUERY_WORK   = 'QUERY_WORK';
export const ADMIN_LOGIN  = 'ADMIN_LOGIN';
export const ADMIN_LOGOUT ='ADMIN_LOGOUT';
export const SIGN_UP      = 'SIGN_UP';
export const IS_LOGIN     = 'IS_LOGIN';
export const ADD_WORK     = 'EDIT_WORK';
export const DEL_WORK     = 'DEL_WORK';
export const QUERY_POST   = 'QUERY_POST';
export const EDIT_POST    = 'EDIT_POST';
export const QUERY_ABOUT  = 'QUERY_ABOUT';
export const EDIT_ABOUT   = 'EDIT_ABOUT';

export function query(){
  const query = axios.get('/api/query');
  return{
    type:QUERY_WORK,
    payload:query
  };
}

export function login(user){
  const login = axios.post('/api/login',user);
  return{
    type:ADMIN_LOGIN,
    payload:login
    };
}
export function logout(user){
  const logout = axios.get('/logout');
  return{
    type:ADMIN_LOGOUT,
    payload:logout
    };
}

export function isLogin(){
  const isLogin = axios.get('/isLogin');
  return{
    type:IS_LOGIN,
    payload:isLogin
  };
}

export function addWork(work){
  const addWork = axios.post('/api/add',work);
  return{
    type:ADD_WORK,
    payload:addWork
  };
}

export function delWork(workId){
  const delWork = axios.delete(`/api/${workId}`);
  return{
    type:DEL_WORK,
    payload:delWork
  };
}

export function queryPost(workId){
  const queryPost = axios.get(`/api/${workId}`);
  return{
    type:QUERY_POST,
    payload:queryPost
  };
}


export function queryAbout(userId){
  const queryAbout = axios.get(`/api/user/${userId}`);
  return{
    type:QUERY_ABOUT,
    payload:queryAbout
  };
}

export function editUser(userId,data){
  const editUser = axios.put(`/api/user/${userId}`,data);
  return{
    type:EDIT_ABOUT,
    payload:editUser
  };
}
