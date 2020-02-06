1. open project to xcode.
2. delete Pods
3. open Terminal and goto path/to/folderCode
4. run: watchman watch-del-all && rm -rf $TMPDIR/react-* && rm -rf node_modules/ && npm cache verify && npm install && npm start -- --reset-cache
5. cd ios
6. pod install
