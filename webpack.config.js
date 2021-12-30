const path=require('path');

module.exports={
   entry:'./src/app.js',
   output:{
      filename: 'myBundle.js',
      path: path.resolve(__dirname, 'dist')
   } ,
   devServer: {
       port: 8080,
       static: path.resolve(__dirname, 'dist'),
       hot:true
   },
   mode: "development"
}