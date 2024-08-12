module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        orange : {
          '50' : '#ff5733'
        },
        gray : {
          '50' : '#292a2c',
          '51' : '#fff',
          '52' : '#fff9',
          '53' : '#ffffff29',
          '54' : '#ffffffcc',
          '55' : '#ffffffb3',
          '56' : '#1b1b1c',
          '57' : '#eaeaec',
          '58' : '#ffffff80',
          '100' : '#ffffff1b',
          '200' : '#2c2b2b56',
          '300' : '#ffffff17',
          '301' : '#ffffff05',
          '302' : '#ffffff1a',
          '303' : '#888888',
          '304' : '#7f818a',
          '305' : '#494949',
          '306' : '#d1d1d2'
        },
        black : {
          '56' :'#1b1b1c'
        },
        blue : {
          '50' : '#5138ee'
        },
        white : {
          '100' : 'rgb(255 255 255)',
          '50' : '#ffffffcc',
          '0' : 'ffffff'
        },
        // backgroundImage: {
        //   'gradient-linear' : 'linear-gradient(to bottom right,#3b3838,#282626cb,#070707e6)'
        // },
      },
      borderWidth :
      {
        '2' : '1px',
        '3' : '3px'
      },
      borderRadius :
      {
        '3xl' : '30px',
        '4xl' : '50px'
      },
      width : {
        '97' : '90%',
        '100' : '100%',
        '21' : '128px',
        '24' : '126px',
        '23' : '125px',
        '24' : '108px',
        '25' : '100px',
        'full':'415px'
      },
      height :{
        '22' : '81px',
        '23' :'85px',
        '40per' : '40%'
      },
      fontFamily :{
        'sans' : 'Plus Jakarta Sans, sans-serif'
      },
      fontSize : {
        'xs' : '13px',
        'sm1' : '15px',
        'base1' : '17px',
        'xl1' :'22px',
        'xl2' : '26px',
        'xl3' :'58px',
        'xl4' : '19px',
        '7xl' : '70px',
        '8xl' : '50px',
        '9xl' : '45px',
        '10xl' : '96px',
        '11xl' : '40px',
        '12xl' : '31px',
        'lg1' : '20px',
        'lg2' : '25px',
        '42' : '42px'
      },
      lineHeight : {
        '11' : '103px',
        '12' : '75px'
      },
      margin : {
        '50' : '173px'
      },
      },
      backgroundImage :{
        'hero' : 'url(images/hero-4-3.png)',
        'bgImg':'url(images/bg.png)'
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

