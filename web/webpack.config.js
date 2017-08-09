var path = require('path');
var webpack = require('webpack');

// This is needed for webpack to compile JavaScript.
// Many OSS React Native packages are not compiled to ES5 before being
// published. If you depend on uncompiled packages they may cause webpack build
// errors. To fix this webpack can be configured to compile to the necessary
// `node_module`.
const babelLoaderConfiguration = {
    test: /\.js$/,
    // Add every directory that needs to be compiled by Babel during the build
    include: [
        path.resolve(__dirname, 'src'),
        path.resolve(__dirname, 'node_modules/react-native-uncompiled')
    ],
    use: {
        loader: 'babel-loader',
        options: {
            cacheDirectory: true,
            // The 'react-native' preset is recommended (or use your own .babelrc)
            presets: ['react-native']
        }
    }
};

// This is needed for webpack to import static images in JavaScript files
const imageLoaderConfiguration = {
    test: /\.(gif|jpe?g|png|svg)$/,
    use: {
        loader: 'url-loader',
        options: {
            name: '[name].[ext]'
        }
    }
};

module.exports = {

    entry: [
        'babel-polyfill',
        './index.web.js'
    ],

    devServer: {
        hot: true,
        historyApiFallback: {
            index: 'index.html'
        }
    },

    module: {

        loaders: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                // exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'stage-0', 'react'],
                }
            }
        ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        // `process.env.NODE_ENV === 'production'` must be `true` for production
        // builds to eliminate development checks and reduce build size. You may
        // wish to include additional optimizations.
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        })
    ],

    resolve: {
        modules: ['app', 'node_modules'],

        // Maps the 'react-native' import to 'react-native-web'.
        alias: {
            'react-native': 'react-native-web',
            'react-router-native': 'react-router-dom',
        },
        // If you're working on a multi-platform React Native app, web-specific
        // module implementations should be written in files using the extension
        // `.web.js`.
        extensions: ['.json', '.web.js', '.js', '.jsx']
    },

    output: {
        filename: 'bundle.js',
        // path: __dirname + '/dist',
        publicPath: '/'
    },
};
