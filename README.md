[![Release](https://img.shields.io/github/v/release/scaleflex/next-cloudimage-responsive)](https://github.com/scaleflex/next-cloudimage-responsive/releases)
[![Free plan](https://img.shields.io/badge/price-includes%20free%20plan-green.svg)](https://www.cloudimage.io/en/home#b38181a6-b9c8-4015-9742-7b1a1ad382d5)
[![Contributions welcome](https://img.shields.io/badge/contributions-welcome-orange.svg)](#contributing)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Scaleflex team](https://img.shields.io/badge/%3C%2F%3E%20with%20%E2%99%A5%20by-the%20Scaleflex%20team-6986fa.svg)](https://www.scaleflex.com/en/home)
[![Cloudimage](https://img.shields.io/badge/Powered%20by-cloudimage-blue)](https://www.cloudimage.io/en/home)
<p align="center">
	<a href="https://www.cloudimage.io/#gh-light-mode-only">
		<img
			alt="The Lounge"
			src="https://scaleflex.cloudimg.io/v7/cloudimage.io/LOGO+WITH+SCALEFLEX-01.png?vh=f6080d&w=350">
	</a>
		<a href="https://www.cloudimage.io/#gh-dark-mode-only">
		<img
			alt="The Lounge"
			src="https://scaleflex.cloudimg.io/v7/cloudimage.io/cloudimage-logo-light.png?vh=b798ab&w=350">
	</a>
</p>

<h1 align="center">
   Next.js Cloudimage Responsive
</h1>
<p align="center">
	<strong>
		<a href="#table_of_contents">Docs</a>
		•
		<a href="https://scaleflex.github.io/next-cloudimage-responsive/" target="_blank">Demo</a>
		•
		<a href="https://codesandbox.io/s/next-cloudimage-responsive-example-srp27e" target="_blank">Code Sandbox</a>
		•
		<a href="https://medium.com/@dmitry_82269/responsive-images-in-2019-now-easier-than-ever-b76e5a43c074" target="_blank">Why?</a>
	</strong>
</p>

This plugin detects the width of any image container as well as the device pixel ratio
density to load the optimal image size needed.
Images are resized on-the-fly via the <a href="https://cloudimage.io" target="_blank">Cloudimage service</a>, thus offering a comprehensive
automated image optimization service.

When an image is first loaded on your website or mobile app,
Cloudimage's resizing servers will download the origin image from
the source, resize it for the client's screen size and deliver to your users through one or multiple
Content Delivery Networks (CDNs). The generated image formats are cached in the CDN and will be delivered rocket fast on any subsequent request.

**NOTE:** Your original (master) images have to be stored on a server
or storage bucket (S3, Google Cloud, Azure Blob...) reachable over
HTTP or HTTPS by Cloudimage. If you want to upload your master images to
Cloudimage, contact us at
[hello@cloudimage.io](mailto:hello@cloudimage.io).

<p align="center">
	<img
		alt="The Lounge"
		src="https://cdn.scaleflex.it/filerobot/cloudimage-process.jpg">
</p>

## Table of contents

* [Demo](#demo)
* [Responsive plugins family](#plugin_family)
* [Requirements](#requirements)
* [Step 1: Installation](#installation)
* [Step 2: Initialize](#initialize)
* [Step 3: Implement](#implement)
* [Configuration](#configuration)
* [Client-side vs Server-side](#client_side_vs_server_side)
* [Client-side onfiguration](#client_side_config)
* [Server-side onfiguration](#server_side_config)
* [Image properties](#image_properties)
* [Browser support](#browser_support)
* [Filerobot UI Family](#ui_family)
* [Contributing](#contributing)
* [License](#license)


## <a name="demo"></a> Demo

To see the Cloudimage Responsive plugin in action, please check out the
[Demo page](https://scaleflex.github.io/next-cloudimage-responsive/).
Play with your browser's window size and observe your
Inspector's Network tab to see how Cloudimage delivers the optimal
image size to your browser, hence accelerating the overall page
loading time.

## <a name="plugin_family"></a> Responsive plugins family
In order to use Cloudimage responsive plugins on your single-page application, please check out Cloudimage responsive plugins for vanilla Javascript and the most popular Javascript frameworks.

<details>
<summary>Javascript</summary>
<a href="https://github.com/scaleflex/js-cloudimage-responsive">Js Cloudimage Responsive (Low Quality Preview)</a><br/>
<a href="https://github.com/scaleflex/js-cloudimage-responsive/blob/master/README-BLUR-HASH.md">Js Cloudimage Responsive (Blur-hash)</a><br/>
<a href="https://github.com/scaleflex/js-cloudimage-responsive/blob/master/README-PLAIN.md">Js Cloudimage Responsive (Plain)</a>
</details>

<details>
<summary>Vue.js</summary>
<a href="https://github.com/scaleflex/vue-cloudimage-responsive">Vue Cloudimage Responsive (Low Quality Preview)</a><br/>
<a href="https://github.com/scaleflex/vue-cloudimage-responsive-blur-hash">Vue Cloudimage Responsive (Blur-hash)</a><br/>
<a href="https://github.com/scaleflex/vue-cloudimage-responsive-plain">Vue Cloudimage Responsive (Plain)</a>
</details>

<details>
<summary>React</summary>
<a href="https://github.com/scaleflex/react-cloudimage-responsive">React Cloudimage Responsive (Low Quality Preview)</a><br/>
<a href="https://github.com/scaleflex/react-cloudimage-responsive-blur-hash">React Cloudimage Responsive (Blur-hash)</a><br/>
<a href="https://github.com/scaleflex/react-cloudimage-responsive-plain">React Cloudimage Responsive (Plain)</a>
</details>

<details>
<summary>Angular</summary>
<a href="https://github.com/scaleflex/ng-cloudimage-responsive">Angular Cloudimage Responsive (Low Quality Preview)</a><br/>
</details>

## <a name="requirements"/> Requirements

To use the Cloudimage Responsive plugin, you will need a
Cloudimage token to deliver your images over CDN. Don't worry, it only takes seconds to get one by
registering [here](https://www.cloudimage.io/en/register_page).
Once your token is created, you can configure it as described below.
This token allows you to use 25GB of image cache and 25GB of worldwide
CDN traffic per month for free.

## <a name="installation"></a>Step 1: Installation

using npm

```
$ npm install next-cloudimage-responsive
```
using yarn

```
$ yarn add next-cloudimage-responsive
```

## <a name="initialize"></a>Step 2: Initialize

After installing the next-cloudimage-responsive lib, simply initialize it with your **token** and the **baseURL**
of your image storage with **CloudimageProvider** and wrap your application with **CloudimageProvider**:

```jsx
import { CloudimageProvider } from 'next-cloudimage-responsive';

function MyApp({ Component, pageProps }) {
  const cloudimageConfig = {
    token: 'demo',
    baseURL: 'https://cdn.scaleflex.it/demo/'
  };

  return (
    <CloudimageProvider config={cloudimageConfig}>
      <Component {...pageProps} />
    </CloudimageProvider>
  );
}

export default MyApp;
```

## <a name="implement"></a>Step 3: Implement it

### Img component:

```jsx
import { Img } from 'next-cloudimage-responsive';

<Img src="img.jpg" alt="Demo image"/>
```
<a href="https://codesandbox.io/s/next-cloudimage-responsive-example-srp27e"><img src="https://codesandbox.io/static/img/play-codesandbox.svg" alt="edit in codesandbox"/></a>

### BackgroundImg component:

```jsx
import { BackgroundImg } from 'next-cloudimage-responsive';

<BackgroundImg src="img.jpg">
 {'Your content...'}
</BackgroundImg>
```

<a href="https://codesandbox.io/s/next-cloudimage-responsive-example-div5l6"><img src="https://codesandbox.io/static/img/play-codesandbox.svg" alt="edeit in codesandbox"/></a>

## <a name="configuration"></a> Config

### token

###### Type: **String** | Default: **"demo"** | _required_

Your Cloudimage customer token.
[Subscribe](https://www.cloudimage.io/en/register_page) for a
Cloudimage account to get one. The subscription takes less than a
minute and is totally free.

### customDomain

###### Type: **String** | Default: **"cloudimage.io"** | _optional_

If you use a custom CNAME for your cloudimage integration, you can set it here.

Note: this will disregard your token above as this should be built into the CNAME entry.

### baseURL

###### Type: **String** | Default: **""** | _optional_

Your image folder on server, this alows to shorten your origin image URLs.

### apiVersion

###### Type: **String** |Default: **'v7'** | _optional_

Allow to use a specific version of API.

- set a specific version of API
```javascript
const cloudimageConfig = {
  token: 'demo',
  baseURL: 'https://cdn.scaleflex.it/demo/',
  apiVersion: 'v7'                            // optional
};
```
- disable API version
```javascript
const cloudimageConfig = {
  token: 'demo',
  baseURL: 'https://cdn.scaleflex.it/demo/',
  apiVersion: null                            // optional
};
```


### <a name="do_not_replace_url"></a> doNotReplaceURL

###### Type: **bool** | Default: **false**

If set to **true** the plugin will only add query params to the given source of image.

### <a name="lazy_loading_config"></a>lazyLoading

###### Type: **Bool** | Default: **true** | _optional_

Only images close to the client's viewport will be loaded, hence accelerating the page loading time. The plugin uses

### <a name="params"></a> params

###### Type: **String** | Default: **'org_if_sml=1'** | _optional_

Applies default Cloudimage operations/ filters to your image, e.g. brightness, contrast, rotation...
Multiple params can be applied, separated by "```&```" e.g. func=fit&w=400&h=400&bg_colour=f2f7fa

```javascript
params: 'org_if_sml=1&func=fit&w=400&h=400&bg_colour=f2f7fa'
```

#### alternative syntax: type: **Object**

```javascript
params: {
    org_if_sml: 1,
    grey: 1,
    ...
}
```

[Full cloudimage v7 documentation here.](https://docs.cloudimage.io/go/cloudimage-documentation-v7/en/introduction)

## <a name="client_side_vs_server_side"></a> server-side rendering (SSR) vs client-side rendering (CSR)
Despite the plugin **by default** rendering the low-preview image on the server and on the client it renders the optimized image relative to the container size. you can render both low-preview and optimized images on the server-side.
by using <a href="#server-side">srr</a> config.

## <a name="client_side_config"></a> client-side config

### limitFactor

###### Type: **Number** | Default: **100** | _optional_

Rounds up the size of an image to the nearest limitFactor value.

For example:
* for an image with width **358px** and limitFactor equal to **100**, the plugin will round up to 400px;
* for an image with width **358px** and limitFactor equal to **5**, the plugin will round up to 360px.

### devicePixelRatioList

###### Type: **[Number,...]** | Default: **[1, 1.5, 2]** | _optional_

List of supported device pixel ratios. If there is no need to support retina devices, you should set an empty array `devicePixelRatioList: []`.

## <a name="server_side_config"></a> server-side config
### <a name="server-side"></a> ssr

###### Type: **Boolean** | Default: **false**

Render both low-quality preview and the optimized image on the server.
if **ssr** set to true we can't detect the image container width or the device pixel ratio. so the plugin will generate a srcset relative to <a href="https://nextjs.org/docs/api-reference/next/image#device-sizes">device sizes</a> in next.config.js

<a href="https://codesandbox.io/s/next-cloudimage-responsive-example-8r07pm"><img src="https://codesandbox.io/static/img/play-codesandbox.svg" alt="edit in codesandbox"/></a>

### <a name="low_preview_quality"></a> lowPreviewQuality

###### Type: **Number** | Default: **50**

The quality of the low-preview image relative to the optimized image.

An integer between `1` and `100`, where `100` is best quality.
### <a name="quality"></a> quality

###### Type: **Number** | Default: **75**

The quality of the optimized image.

An integer between `1` and `100`, where `100` is best quality.

### <a name="layout"></a> layout

###### Type: **String** | Default: **responsive**
The layout behavior of the image as the viewport changes size.

see <a href="https://nextjs.org/docs/api-reference/next/image#layout">layout</a>.

### <a name="object_fit"></a> objectFit

###### Type: **String** | Default: **cover**
Defines how the image will fit into its parent container.

see <a href="https://nextjs.org/docs/api-reference/next/image#objectfit">objectFit</a>.

### <a name="object_position"></a> objectPosition

###### Type: **String** | Default: **center**
Defines how the image is positioned within its parent element.

see <a href="https://nextjs.org/docs/api-reference/next/image#objectposition">objectPosition</a>.

### <a name="transition_duration"></a> transitionDuration

###### Type: **String** | Default: **800ms**
Defines the transition duration of animation while switching between low-preview image and the optimized image.

**NOTE:**
Set it to `0ms` to disable animation.
## <a name="image_properties"></a> Image properties
The following config can be used per-image basis.
<ul>
<li><a href="#lazy_loading_config">lazyLoading</a></li>
<li><a href="#do_not_replace_url">doNotReplaceURL</a></li>
<li><a href="#params">params</a></li>
<li><a href="#low_preview_quality">lowPreviewQuality</a></li>
<li><a href="#quality">quality</a></li>
<li><a href="#layout">layout</a></li>
<li><a href="#object_fit">objectFit</a></li>
<li><a href="#object_position">objectPosition</a></li>
<li><a href="#transition_duration">transitionDuration</a></li>
</ul>

### src

###### Type: **String** | Default: **undefined** | _required_

Original image hosted on your web server. You can use absolute path or
relative to the baseUrl in your config.

**NOTES:**

The plugin uses a special algorithm to detect the width of image container and set the image size accordingly.
This is the recommended way of using the Cloudimage Responsive plugin.

### onImgLoad

###### Type: **function** | Default: **undefined**

A function to be executed after the image is loaded

```jsx
<Img
  src="dino-reichmuth-1.jpg"
  onImgLoad={(event)=>{ console.log(event); }}/>
```
### width

###### Type: **String** (e.g. 300px, 20vw) | Default: **undefined**

If set, the plugin will use the width as a fixed value and change only according to the device pixel ratio.
**NOTE: while using <a href="#server-side">ssr</a> consider to set a suitable <a href="layout">layout</a> to the image.**

### height

###### Type: **String** (e.g. 300px, 20vh) | Default: **undefined**

If set, the plugin will use the width as a fixed value and change only according to the device pixel ratio.
**NOTE: while using <a href="#server-side">ssr</a> consider to set a suitable <a href="layout">layout</a> to the image.**

## <a name="browser_support"></a>Browser support

Tested in all modern browsers and IE 11.

## <a name="ui_family"></a>Filerobot UI Familiy

* [JS Cloudimage Responsive](https://github.com/scaleflex/js-cloudimage-responsive)
* [Angular Cloudimage Responsive](https://github.com/scaleflex/ng-cloudimage-responsive)
* [JS Cloudimage 360 view](https://github.com/scaleflex/js-cloudimage-360-view)
* [Image Editor](https://github.com/scaleflex/filerobot-image-editor)
* [Uploader](https://github.com/scaleflex/filerobot-uploader)

## <a name="contributing"></a>Contributing!

All contributions are super welcome!


## <a name="license"></a>License
Next Cloudimage Responsive is provided under the [MIT License](https://opensource.org/licenses/MIT).
