# AdmiralCloud File Extension List
This little helper creates a list of file extensions including their "real" name and mimetype. 

Use it to determine mimetype from extenstion, a prettyfied name or vice versa.

Currently support more than 300 file types.

# BREAKING CHANGES Version 2
If you upgrade to version 2, please note that there a breaking changes. While version 1 only provided a list of file extensions, version 2 can be used to easily query extensions.

# Installation
Use yarn add ac-file-extensions or npm install ac-file-extensions.

After installation this package will automatically create the collection.js file from sources.

# Usage
```
const fileExtensions = require('ac-file-extensions')

// search from mp4
const result = fileExtensions.query({ ext: 'mp4' })
console.log(result) 
// { "ext": "mp4", "name": "MPEG-4 Video", "mimetype": "video/mp4" }

// retrieve the whole list
fileExtensions.list()
```

You can use query with parameter:
+ ext -> will return an object for this extension
+ mimeType -> will return an array of objects matching this mimetype

# Contribution
If you want to add a new file extension, choose the right folder and add it like the other file extension. Use pull requests to send updates.

To commit, add it with git-add (or any GUI) and then use "make commit" on the CLI and answer the questions there. If you're done and want to release a new version, run "make release". 

Publishing to npm must be done manually.

# ac-file-extensions vs file-extensions
Please note, that this package is the successor of file-extensions. That's why it starts with version 1.2.0.

Please do not use package file-extensions any longer.


## Links
- [Website](https://www.admiralcloud.com/)
- [Twitter (@admiralcloud)](https://twitter.com/admiralcloud)
- [Facebook](https://www.facebook.com/MediaAssetManagement/)

## License
[MIT License](https://opensource.org/licenses/MIT) Copyright © 2009-present, AdmiralCloud AG, Mark Poepping