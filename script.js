let vpnEnabled = false;

async function toggleVPN() {
  vpnEnabled = !vpnEnabled;
  const btn = document.querySelector('.vpn-toggle-btn');
  const server = document.getElementById('serverSelect').value;
  if (vpnEnabled) {
    btn.textContent = 'Выключить VPN';
    btn.classList.add('on');
    try {
      // Вызов API для включения VPN
      await enableVPN(server);
      console.log('VPN включен на сервере', server);
    } catch (error) {
      console.error('Ошибка при включении VPN:', error);
      vpnEnabled = false;
      btn.textContent = 'Включить VPN';
      btn.classList.remove('on');
    }
  } else {
    btn.textContent = 'Включить VPN';
    btn.classList.remove('on');
    try {
      // Вызов API для выключения VPN
      await disableVPN();
      console.log('VPN выключен');
    } catch (error) {
      console.error('Ошибка при выключении VPN:', error);
      vpnEnabled = true;
      btn.textContent = 'Выключить VPN';
      btn.classList.add('on');
    }
  }
}

async function enableVPN(server) {
  // Здесь должен быть код для вызова API вашего VPN-провайдера для включения VPN
  // Пример:
  // const response = await fetch('https://api.vpnprovider.com/enable', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'Authorization': 'Bearer YOUR_API_TOKEN'
  //   },
  //   body: JSON.stringify({ server })
  // });
  // if (!response.ok) {
  //   throw new Error('Ошибка при включении VPN');
  // }
}

async function disableVPN() {
  // Здесь должен быть код для вызова API вашего VPN-провайдера для выключения VPN
  // Пример:
  // const response = await fetch('https://api.vpnprovider.com/disable', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'Authorization': 'Bearer YOUR_API_TOKEN'
  //   }
  // });
  // if (!response.ok) {
  //   throw new Error('Ошибка при выключении VPN');
  // }
}
