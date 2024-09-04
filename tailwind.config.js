module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors : {
        gray : {
          '50' : '#344054',
          '51' : '#98A2B3',
          '52' : '#b6b6b6',
          '53' : '#EAECF0',
          '54' : '#6c757d',
          '55' : '#1d2939'
        },
        green : {
          '50' : '#00715d',
          '51' : '#F2F8F7',
          '52' : '#009688',
          '53' : '#DAEBE8',
          '54' : '#00715D',
          '55' : '#CCE3DF',
          '56' : '#E6F1EF'
        },
        black : {
          '50' : '#101828'
        },
        blue : {
          '50' : '#101828',
          '51' : '#202F4E',
          '52' : '#131d30'
        },
        white : {
          '50' : '#f8f9fa',
          '51' : '#ffff'
        },
        yellow : {
          '50' : '#ffc107'
        },
      },
      marginLeft : {
        '73' : '200px'
      },
      fontSize : {
        'xxs' : '8px',
        'xs1' : '13px',
        'lg1' : '20px',
        'lg2' : '30px',
        '3xl1' : '32px',
        '3xl2' : '38px',
        '3xl3' : '45px',
        '2xl1' : '25px',
        '2xl2' : '24px',
        '5xl1' : '55px'
      },
      height : {
        '15' : '60px',
        '17' : '66px',
        '1.1' : '1px',
        '0.5' : '6.5px',
        '0.6' : '5px',
        '25' : '25%',
        '40per' : '40%',
        '45per' : '45%',
        '50' : '50%' ,
        '100' : '100%',
        '73' : '307px'
      },
      width : {
        '15' : '60px',
        '17' : '66px',
        '25' : '25%',
        '30per' : '30%',
        '40per' : '40%',
        '45per' : '45%',
        '50' : '50%',
        '60per' : '60%',
        '70per' : '70%',
        '75per' : '75%',
        '80per' :'80%',
        '90per' :'90%',
        '100' : '100%',
        '73' : '310px',
        '57' : '230px'
      },
      lineHeight : {
        '1' : '1.2'
      },
      borderRadius : {
        '4xl' : '30px',
        '5xl' : '100px'
      },
      borderWidth : {
        '0' : '1px',
        '3' : '3px'
      },
      outlineWidth : {
        '0' : '1px'
      },
    },
    screens: {
      'sm': '425px', // Change this value to your desired small screen width
      // Include the other default breakpoints if you need them
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
}
