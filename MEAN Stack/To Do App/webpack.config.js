import webpack from "webpack";
import path from 'path';

export default {
  content: `${__dirname}/app`,
  entry: {
    app: './app/app.js',
    vendor: ['angular']
  },
  output: {
    path: `${__dirname}/public/scripts`,
    filename: 'todo.bundle.js'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js")
  ]
};
