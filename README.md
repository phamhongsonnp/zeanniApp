# Yêu cầu môi trường:
Tham khảo https://facebook.github.io/react-native/docs/getting-started
<br/>*. chú ý sử dụng hướng dẫn bên tab "React Native CLI Quickstart"

# Clone project
1. git clone https://github.com/phamhongsonnp/zeanniApp.git folderName

# Đổi tên và đổi bundleIdentifier dự án cho phù hợp với dự án của bạn.
1. cd folderName
2. run: yarn global add react-native-rename
3. run: react-native-rename "newName" -b bundleIdentifier
  <br/>3.1. VD: react-native-rename "Zeanni App" -b com.zeanni.app

# Xóa cache và cài modules
1. run: watchman watch-del-all && rm -rf $TMPDIR/react-* && rm -rf node_modules/ && npm cache verify && npm install
2. run: npm start -- --reset-cache

# Build app cho ios. (bước 1,2,3 dưới đây chỉ cần chạy lần đâu)
1. run: cd ios
2. run: pod install
3. run: cd ../
4. npx react-native run-ios

# Build app cho android. (yêu cầu có bật máy ảo hoặc có kết nối máy android thật với máy tính)
1. npx react-native run-android
