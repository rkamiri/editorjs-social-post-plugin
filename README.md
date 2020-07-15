![](https://badgen.net/badge/Editor.js/v2.0/blue)

# Social Post Plugin for Editor.js

An [Editor.js](https://editorjs.io) plugin to add Uploaded Posts from different Social Media Platforms such as: 
- Twitter
- Facebook
- Instagram

## Screenshots

| Twitter Example | Facebook Example |
| --------------- | ---------------- |
| ![Twitter Example](https://img.imageupload.net/2020/07/15/ss2.png) | ![Facebook Example](https://img.imageupload.net/2020/07/15/ss3.png) | 
  
  
| Instagram Example | 
| ----------------- |
| ![Instagram Example](https://img.imageupload.net/2020/07/15/ss1.png) |

## Features

- Add posts by pasting its URL and selecting the social media platform.
- Add an optional Caption giving more context about the post.
- A preview of the uploaded social media post is presented.
- Error is thrown if post URL is invalid.

## Installation

### Install via NPM
Get the package

```shell
npm i editorjs-social-post-plugin
```

Include module at your application

```javascript
import Gist from 'editorjs-social-post-plugin';
```

### Other methods

#### Manual downloading and connecting

1. Download folder `dist` from repository
2. Add `dist` folder to your page.
3. Import `main.js` file inside the `dist` folder.

## Usage

Add the plugin to the `tools` property of the Editor.js initial config as a new tool.

```javascript
import SocialPost from 'editorjs-social-post-plugin';

var editor = EditorJS({
  ...

  tools: {
    ...
    socialPost: SocialPost
  }

  ...
});
```

## Output data

This Plugin/Tool returns `data` with following format:

| Field | Type     | Description        |
| ----- | -------- | ------------------ |
| socialMediaPlatform | `string` | selected Social Media Platform |
| url | `string` | URL of the Social Media Post added |
| caption | `string` | Caption for the post |

Example:

```json
{
  "type": "socialPost",
  "data": {
    "socialMediaPlatform": "Instagram",
    "url": "https://www.instagram.com/p/fA9uwTtkSN/",
    "caption": "Cats are so cute! <3"
  }
}
```