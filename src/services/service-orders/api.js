// @ts-ignore

/* eslint-disable */
import request from 'umi-request';

/** Get the list of service orders GET /api/os */

export async function osList(options) {
  return request('/api/os', {
    method: 'get',
    ...(options || {}),
  });
}

/** Get the list of service orders tasks GET /api/os */

export async function osTasks(params, options) {
  return request('/api/os/task-by-user', {
    method: 'post',
    data: {
      ...params,
    },
    ...(options || {}),
  });
}
/** complete a service orders task GET /api/os */

export async function completeTask(params, options) {
  return request('/api/os/complete-task', {
    method: 'post',
    data: {
      ...params,
    },
    ...(options || {}),
  });
}

export async function osStart(params, options) {
  const { transferencia, inventario, electronico, comment } = params || false;

  const obj = {
    businessKey: comment,
    variables: {
      transferencia: {
        value: transferencia,
      },
      inventario: {
        value: inventario,
      },
      electronico: {
        value: electronico,
      },
    },
  };
  return request('/api/os/start', {
    method: 'post',
    data: obj,
    ...(options || {}),
  });
}
