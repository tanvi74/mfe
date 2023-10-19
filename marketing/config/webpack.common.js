module.exports = {
    module: {
        rules: [
            {
                test: /\.m?js$/, // whenever we import in a file that ends with an extension of either mjs or just js, we want to processed by babel
                exclude: /node_modules/,  // exclude nodemodules for babel
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react', '@babel/preset-env'],  //1st: babel process all the jsx tags of react,  2nd: it is going to transform our code in a variety of different ways.( Convert all the ES versions to ES5) 
                        plugins: ['@babel/plugin-transform-runtime'],
                    }
                }
            }
        ]
    }
}
