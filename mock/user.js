const waitTime = (time = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

async function getFakeCaptcha(req, res) {
  await waitTime(2000);
  return res.json('captcha-xxx');
}

const { ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION } = process.env;
let access = ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION === 'site' ? 'admin' : '';

const getAccess = () => {
  return access;
}; // service mock

export default {
  'GET /api/currentUser': (req, res) => {
    if (!getAccess()) {
      res.status(401).send({
        data: {
          isLogin: false,
        },
        errorCode: '401',
        errorMessage: '¡por favor ingresa!',
        success: true,
      });
      return;
    }

    res.send({
      success: true,
      data: {
        name: getAccess(),
        avatar: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
        userid: '00000001',
        email: 'ant@gmail.com',
        signature: '  ',
        title: '  ',
        group: '   ',
        tags: [
          {
            key: '0',
            label: 'Muy pensativo',
          },
        ],
        notifyCount: 12,
        unreadCount: 11,
        country: 'Colombia',
        access: getAccess(),
        geographic: {
          province: {
            label: 'Bogotá',
            key: '330000',
          },
          city: {
            label: 'Bogotá',
            key: '330100',
          },
        },
        address: 'Av 3201 15 48',
        phone: '057-268888888',
      },
    });
  },
  'GET /api/users': [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
  ],
  'POST /api/login/account': async (req, res) => {
    const { password, username, type } = req.body;
    await waitTime(2000);

    if (password === 'demo' && username === 'admin') {
      res.send({
        status: 'ok',
        type,
        currentAuthority: 'admin',
      });
      access = 'admin';
      return;
    }

    if (password === 'demo' && username === 'auxiliar') {
      res.send({
        status: 'ok',
        type,
        currentAuthority: 'auxiliar',
      });
      access = 'auxiliar';
      return;
    }
    if (password === 'demo' && username === 'transporte') {
      res.send({
        status: 'ok',
        type,
        currentAuthority: 'transporte',
      });
      access = 'transporte';
      return;
    }
    if (password === 'demo' && username === 'coordinador') {
      res.send({
        status: 'ok',
        type,
        currentAuthority: 'coordinador',
      });
      access = 'coordinador';
      return;
    }

    if (type === 'mobile') {
      res.send({
        status: 'ok',
        type,
        currentAuthority: 'admin',
      });
      access = 'admin';
      return;
    }

    res.send({
      status: 'error',
      type,
      currentAuthority: 'guest',
    });
    access = 'guest';
  },
  'POST /api/login/outLogin': (req, res) => {
    access = '';
    res.send({
      data: {},
      success: true,
    });
  },
  'POST /api/register': (req, res) => {
    res.send({
      status: 'ok',
      currentAuthority: 'user',
      success: true,
    });
  },
  'GET /api/500': (req, res) => {
    res.status(500).send({
      timestamp: 1513932555104,
      status: 500,
      error: 'error',
      message: 'error',
      path: '/base/category/list',
    });
  },
  'GET /api/404': (req, res) => {
    res.status(404).send({
      timestamp: 1513932643431,
      status: 404,
      error: 'Not Found',
      message: 'No message available',
      path: '/base/category/list/2121212',
    });
  },
  'GET /api/403': (req, res) => {
    res.status(403).send({
      timestamp: 1513932555104,
      status: 403,
      error: 'Forbidden',
      message: 'Forbidden',
      path: '/base/category/list',
    });
  },
  'GET /api/401': (req, res) => {
    res.status(401).send({
      timestamp: 1513932555104,
      status: 401,
      error: 'Unauthorized',
      message: 'Unauthorized',
      path: '/base/category/list',
    });
  },
  'GET  /api/login/captcha': getFakeCaptcha,
};
