**ReactNativeWebWindowApp**
1- npx react-native init <ProjectName>
2- inside project
3-npx react-native-macos-init
4- npx react-native-windows-init
**5- Now Run Project for ios android, macos and window App**
for macos: npx react-native run-macos
for winodws: npx react-native run-windows
for ios: npx react-native run-ios
for Android: npx react-native run-android

**for Web App**
 1-npm install react-dom react-native-web --legacy-peer-deps
 2- npm install --save-dev babel-plugin-react-native-web babel-plugin-module-resolver --legacy-peer-deps
  _if some error will come then npm install --save-dev ajv_
 3- Add code in package.in
"jest": {
    "preset": "react-native-web",
    "moduleFileExtensions": [
      "ts",
      "tsx",
      "js",
      "jsx",
      "json",
      "node"
    ]
  }

4- Add script in package.json
"build": "rm -rf dist/ && webpack --mode=production --config webpack.config.js",
   "web": "webpack serve --mode=development --config webpack.config.js"

Add File in your project
 i- https://github.com/irshadvali/ReactNativeWebWindowApp/blob/main/index.web.js
 ii-https://github.com/irshadvali/ReactNativeWebWindowApp/blob/main/index.html
 iii-https://github.com/irshadvali/ReactNativeWebWindowApp/blob/main/webpack.config.js
5-** npm run web**

****ScreenShot****
<img width="1433" alt="Screenshot 2023-07-21 at 5 56 40 PM" src="https://github.com/irshadvali/ReactNativeWebWindowApp/assets/9949849/9cbe9348-e28c-4146-88c9-350f1739969d">

