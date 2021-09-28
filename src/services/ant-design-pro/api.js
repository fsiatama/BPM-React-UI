// @ts-ignore

/* eslint-disable */
import { request } from 'umi';
/** Get current user GET /api/currentUser */

export async function currentUser(body, options) {
  console.log(body);
  return request('/api/login/current-user', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: {
      username: body,
    },
    ...(options || {}),
  });
}
/** Log out interface POST /api/login/outLogin */

export async function outLogin(options) {
  return request('/api/login/log-out', {
    method: 'GET',
    ...(options || {}),
  });
}
/** Login interface POST /api/login/account */

export async function login(body, options) {
  return request('/api/login/account', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
/** No comments are provided in the backend here GET /api/notices */

export async function getNotices(options) {
  return request('/api/notices', {
    method: 'GET',
    ...(options || {}),
  });
}
/** Get the list of order services GET /api/os */

export async function os(params, options) {
  return request('/api/os/task-by-user', {
    method: 'POST',
    params: { ...params },
    ...(options || {}),
  });
}
/** New rule PUT /api/rule */

export async function updateRule(options) {
  return request('/api/rule', {
    method: 'PUT',
    ...(options || {}),
  });
}
/** New rule POST /api/rule */

export async function addRule(options) {
  return request('/api/rule', {
    method: 'POST',
    ...(options || {}),
  });
}
/** Delete rule DELETE /api/rule */

export async function removeRule(options) {
  return request('/api/rule', {
    method: 'DELETE',
    ...(options || {}),
  });
}
