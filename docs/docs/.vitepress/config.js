export default {
  title: "ST-SmartFarm",
  description: "documentation for ST-SmartFarm project",
  base: "/smartfarm/",

  themeConfig: {
    nav: [
        { text: "Home", link: "/" }
    ],

    sidebar: [
      {
        text: "Introduction",
        collapsible: true,
        items: [
          { text: "ST-Smartfarm คืออะไร?", link: "/whatis-stsmartfarm.html"},
        ],
      },

      {
        text: 'Getting Started',
        collapsible: true,
        items: [
            { text: 'ติดตั้ง Arduino IDE', link: '/install-arduino.html'},
            { text: 'ติดตั้ง ESP32 Addon', link: '/install-esp32.html'},
            { text: 'ดาวน์โหลดไฟล์โปรแกรม', link: '/download-src.html'}
        ]
      },

      {
        text: 'Setting the config files',
        collapsible: true,
        items: [
            { text: 'การตั้งค่า Wifi', link: '/config-wifi.md'},
            { text: 'การตั้งค่า Blynk', link: '/config-blynk.md'},
        ]
      },
    ],


  },
};
