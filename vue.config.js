module.exports = {
    // css: {
    //     loaderOptions: {
    //         sass : {
    //             prependData: ' @import "@/assets/styles.scss"; '
    //         }
    //     }
    // },
    chainWebpack: config => {
        config.module.rules.delete("svg");
    },
    configureWebpack: {
        module: {
            rules: [
                {
                    test: /\.svg$/,
                    loader: "vue-svg-loader"
                },
                {
                    test: /\.(jpg|jpeg|woff|woff2|eot|ttf)?$/,
                    use: {
                        loader: "url-loader",
                        options: {
                            limit: 100000
                        }
                    }
                }
            ]
        }
    }
};

