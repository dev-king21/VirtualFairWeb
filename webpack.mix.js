if (process.env.section && process.env.section=='admin') 
    require(`${__dirname}/webpack.mix.admin.js`);
 else 
    require(`${__dirname}/webpack.mix.app.js`);