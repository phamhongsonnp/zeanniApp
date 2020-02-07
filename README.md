# clone project
1. git clone ssh://git@github.com:phamhongsonnp/zeanniApp_vs1.git
2. cd zeanniApp_vs1

# Đổi tên và đổi bundleIdentifier dự án cho phù hợp với dự án của bạn. Làm theo bước sau
2. run: yarn global add react-native-rename
3. run: react-native-rename <newName> -b <bundleIdentifier>
  VD: react-native-rename "Zeanni App" -b com.junedomingo.zeanniapp

4. run: watchman watch-del-all && rm -rf $TMPDIR/react-* && rm -rf node_modules/ && npm cache verify && npm install
5. run: cd ios
6. run: pod install
7. run: cd ../
8. run: npm start -- --reset-cache
9. npx react-native run-ios
