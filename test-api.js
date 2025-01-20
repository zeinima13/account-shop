import fetch from 'node-fetch';

async function testAPI() {
  try {
    // 测试注册
    console.log('测试注册管理员账户...');
    const registerResponse = await fetch('https://account-shop-server.vercel.app/api/admin/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: 'admin',
        password: '123456'
      })
    });
    
    const registerData = await registerResponse.json();
    console.log('注册响应:', registerData);

    // 测试登录
    console.log('\n测试登录...');
    const loginResponse = await fetch('https://account-shop-server.vercel.app/api/admin/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: 'admin',
        password: '123456'
      })
    });
    
    const loginData = await loginResponse.json();
    console.log('登录响应:', loginData);
  } catch (error) {
    console.error('错误:', error);
  }
}

testAPI();
