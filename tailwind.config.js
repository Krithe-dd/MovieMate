module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    darkMode: 'class',
    theme: {
      extend: {
        screens:{
          "s":'850px',
          "other":{'min':'380px','max':'1200px'},
          "small":{'min':'740px','max':'950px'}
        }
      },
    },
    plugins: [],
  }