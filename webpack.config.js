const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    context: path.resolve(__dirname, "src"),
    mode: "development",
    entry: {
        index: "./pages/index/index.js",
        content: "./pages/content/content.js",
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist"),
    },
    devServer: {
        contentBase: "./dist",
    },
    module: {
        rules: [{
                test: /\.pug$/,
                use: ["html-loader", "pug-html-loader"],
            },
            {
                test: /\.sass$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    "sass-loader",
                ],
            },
            {
                test: /\.(eot|ttf|woff)$/,
                use: [{
                    loader: "file-loader",
                    options: {
                        name: "fonts/[name].[ext]",
                    },
                }, ],
            },
            {
                test: /\.(webp|gif|png|jpe?g|svg)$/i,
                use: [{
                    loader: "file-loader",
                    options: {
                        name: "img/[name].[ext]",
                    },
                }, ],
            },
            {
                test: /\.js/,
                use: [{
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                    },
                }, ],
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./pages/index/index.pug",
            filename: "index.html",
            chunks: ["index"],
        }),
        new HtmlWebpackPlugin({
            template: "./pages/content/content.pug",
            filename: "content.html",
            chunks: ["content"],
        }),
        new MiniCssExtractPlugin(),
    ],
};