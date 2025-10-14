import type { StorybookConfig } from "@storybook/react-webpack5";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  //stories: ['../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-onboarding",
    "@storybook/addon-docs",
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    {
      name: '@storybook/addon-styling',
      options: {
          sass: {
              // Require your Sass preprocessor here
              implementation: require('sass')
          }
      }
  }
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {
      builder: {
        useSWC: true,
      },
    },
  },
  swc: () => ({
    jsc: {
      transform: {
        react: {
          runtime: 'automatic'
        }
      }
    }
  }),
  docs: {
    autodocs: "tag",
  },




  // webpackFinal: async (config) => {
  //   config.module.rules.push({
  //     test: /\.scss$/,
  //     use: ["style-loader", "css-loader", "sass-loader"],
  //     include: path.resolve(__dirname, "../")
  //   });
  //   config.module.rules.push({
  //     test: /\.(ts|tsx)$/,
  //     loader: require.resolve("babel-loader"),
  //     options: {
  //       presets: [["react-app", { flow: false, typescript: true }]]
  //     }
  //   });
  //   config.resolve.extensions.push(".ts", ".tsx");
  //   return config;
  // }

  // webpackFinal: async (config) => {
  //   config.module.rules.push({
  //     test: /\.less$/i,
  //     use: [
  //       "style-loader",
  //       {
  //         loader: "css-loader",
  //         options: {
  //           modules: {
  //             auto: true,
  //             localIdentName: "[name]__[local]--[hash:base64:5]",
  //           },
  //         },
  //       },
  //       "less-loader",
  //     ],
  //   })
  //   config.module.rules.push({
  //     test: /\.(sass)$/i,
  //     use: [
  //       "style-loader",
  //       {
  //         loader: "css-loader",
  //         options: {
  //           modules: {
  //             auto: true,
  //             localIdentName: "[name]__[local]--[hash:base64:5]",
  //           },
  //         },
  //       },
  //       "sass-loader",
  //     ],
  //   })
  //   config.module.rules.push({
  //     test: /\.(scss|pcss|sss)$/i,
  //     use: [
  //       "style-loader",
  //       {
  //         loader: "css-loader",
  //         options: {
  //           modules: {
  //             auto: true,
  //             localIdentName: "[name]__[local]--[hash:base64:5]",
  //           },
  //         },
  //       },
  //       {
  //         loader: "postcss-loader",
  //         options: {
  //           postcssOptions: {
  //             plugins: ["postcss-preset-env", "postcss-nested"],
  //           },
  //         },
  //       },
  //     ],
  //   })
  //   config.module.rules.push({
  //     test: /\.styl(|us)$/i,
  //     use: [
  //       "style-loader",
  //       {
  //         loader: "css-loader",
  //         options: {
  //           modules: {
  //             auto: true,
  //             localIdentName: "[name]__[local]--[hash:base64:5]",
  //           },
  //         },
  //       },
  //       "stylus-loader",
  //     ],
  //   })
  //   config.module.rules.push({
  //     test: /\.svg$/i,
  //     use: [
  //       {
  //         loader: "@svgr/webpack",
  //       },
  //       {
  //         loader: "file-loader",
  //         options: {
  //           name: "static/media/[path][name].[ext]",
  //         },
  //       },
  //     ],
  //     type: "javascript/auto",
  //     issuer: /\.(ts|tsx|js|jsx|md|mdx)$/i,
  //   })
  //   return config
  // },

};
export default config;



