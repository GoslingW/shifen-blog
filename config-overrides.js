module.exports = {
    webpack: function (config, env) {
        if (env === "development") {
            console.log("现在是开发环境");
        } else {
            console.log("现在是生产环境");
        }
        config.module.rules.push(
            {
                test: /\.md$/,
                use: "raw-loader"
            }
        )
        return config
    }
}