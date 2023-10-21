# Introduction

The `DavinciPic` react component is designed to securely and effortlessly interface with the DavinciPic API. It fetches and displays images of Hedera-based entities, such as tokens, accounts, nodes, as well as logos for other networks and dApps. To make it easier for users, these entities are loaded simply by specifying their network and address as props to the component. Additionally, it showcases liquidity pool (LP) and wrapped tokens when relevant references are available. Given that this component could be integrated into security-sensitive applications like digital wallets, it ensures secure data handling within the HTML. The component also offers a range of props for extensive customization. To optimize performance, it activates only when it enters the viewport, utilizing an intersection with a vertical margin of 200 pixels.

### Live Examples

Ready to see DavinciPic in action? Check out our [Live Examples](https://davincigraph.github.io/DavinciPic/) to explore various use-cases, complete with intentional delays to showcase loading and failure states.

## Note

**This component is intentionally not published as an npm package.** The primary reason for this decision is to provide an additional layer of security for applications that may use this component in sensitive contexts, such as cryptocurrency wallets. By directing users to download the component directly from this repository, we aim to build trust and assure users that the code is secure. All updates to the component will be announced and made available for download through this repository.

<br/>

# Installation

`DavinciPic` is compatible with vanilla JavaScript as well as other front-end frameworks like Angular and Vue.js. For other front-end frameworks applications, use the davinci-pic web component.

### Typescript

1. Clone the repository, Copy the `src/davinciPics` directory and add it to your project.

### Javascript

1. Clone the repository and execute `npm run build:es` in the terminal.

2. Copy the `dist/davinciPics` directory and add it to your project.

<br/>

# Security Assurance

We understand that security is of utmost importance, especially in applications that handle sensitive information. The React-based DavinciPic component has been meticulously designed to ensure secure operations in two key ways:

**API Requests:**
The component makes GET requests to the DavinciPics API to fetch the relevant entity data. These requests are made using HTTPS to ensure data confidentiality and integrity during transmission. Moreover, all received data are strictly type-checked using TypeScript and type guards to prevent unexpected and potentially unsafe behavior.

**Data Rendering in React:**
In the React version of DavinciPic, data is rendered into the DOM through JSX and React's virtual DOM mechanism. React automatically escapes all variable content embedded in JSX, which ensures that arbitrary code is not executed and helps to prevent cross-site scripting (XSS) attacks.

All of these actions are encapsulated within the component, and at no point does the component execute arbitrary or unsafe code. We are committed to maintaining this high level of security in all future updates. Should you have any questions or concerns about security, we welcome your input and feedback.

This way, the text accurately reflects the security measures you've taken with the React version of your component.

<br/>

# Basic Usage

Define the type, specify the network and address, you are good to go.

```HTML
<DavinciPic type="token" network="hedera" address="hbar"></DavinciPic>
<DavinciPic type="token" network="hedera" address="0.0.2997829"></DavinciPic>
<DavinciPic type="profile" network="hedera" address="0.0.1518714"></DavinciPic>
<DavinciPic type="banner" network="hedera" address="0.0.1518714"></DavinciPic>
<DavinciPic type="node" network="hedera" address="0.0.9"></DavinciPic>
<DavinciPic type="network" network="ethereum"></DavinciPic>
<DavinciPic type="app" name="saucerswap"></DavinciPic>
```

<br/>

## Glossary

-   **Complex Tokens**: In the scope of Davincigraph, "Complex Tokens" refers to LP (Liquidity Pool) and Wrapped tokens. These tokens are considered "complex" because their existence is predicated on other underlying tokens.

-   **Context**: The term "Context" relates to the origin of a token. Specifically, it refers to the network from which a token originates. In the case of Complex Tokens, the context also includes the application responsible for originating the token.

<br/>

# Props

mandatory fields are marked by asterisk symbol:

| Prop                                      | Type                                                  | Applying to                         |
| ----------------------------------------- | ----------------------------------------------------- | ----------------------------------- |
| [type](#type)\*                           | [PicsType](#picstype)                                 | All                                 |
| [network](#network)\*                     | string                                                | All except type "app"               |
| [address](#address)\*                     | string                                                | All except type "network" and "app" |
| [name](#name)\*                           | string                                                | Only applies to type "app"          |
| [dataTitle](#datatitle)                   | string                                                | All                                 |
| [dataPicUrl](#datapicurl)                 | string                                                | All                                 |
| [context](#context)                       | [PicsContextType](#picscontexttype)                   | Only applies to type "token"        |
| [contextPosition](#contextposition)       | [PicsContextPositionType](#picscontextpositiontype)   | Only applies to type "token"        |
| [dataContextTitle](#datacontexttitle)     | string                                                | only applies to type "token"        |
| [dataContextPicUrl](#datacontextpicurl)   | string                                                | only applies to type "token"        |
| [complexTokenType](#complextokentype)     | "lp" or "wrapped"                                     | only applies to type "token"        |
| [lpTokensPosition](#lptokensposition)     | [PicsLpTokensPositionType](#picslptokenspositiontype) | only applies to type "token"        |
| [offlineMode](#offlinemode)               | boolean                                               | All                                 |
| [size](#size)                             | number                                                | All except type "banner"            |
| [shape](#shape)                           | [PicsShapeType](#picsshapetype)                       | Has no effect of complex tokens     |
| [strokeWidth](#strokewidthandstrokecolor) | number                                                | All except type "banner"            |
| [strokeColor](#strokewidthandstrokecolor) | string                                                | All except type "banner"            |
| [placeholder](#placeholder)               | string                                                | All                                 |
| [loadingEffect](#loadingeffect)           | string                                                | All                                 |
| [failureEffect](#failureeffect)           | string                                                | All                                 |
| [censor](#censor)                         | [PicsSensitivityType](#picssensitivitytype)           | All                                 |
| [delayResponseTime](#delayresponsetime)   | number                                                | All                                 |

## type

The type prop specifies the kind of entity that the DavinciPic component should load. It accepts one of several predefined string values, each corresponding to a different type of entity.

### Accepted Values:

**token:** Chooses a token or a cryptocurrency.<br/>
**profile:** Chooses a profile picture, commonly used for user avatars or identities.<br/>
**banner:** Specifies a banner image associated with a Hedera account, often used for headings or decorative profiles.<br/>
**node:** Relates to a Hedera node.<br/>
**network:** Chooses an image that represents an entire network, such as a Hedera.<br/>
**app:** Selects an application's logo.

By setting the type prop, you instruct the `DavinciPic` component on what kind of image it should load and display.

## network

The network prop identifies the blockchain or network to which the entity belongs. It accepts string values representing well-known networks such as "hedera", "ethereum", or "binance".

### Applicability:

This prop is applicable to all entity types except for "app", as apps are considered network-agnostic. In other words, when the type prop is set to "app", the network prop will not have any effect.

By specifying the network prop, you can ensure that the DavinciPic component loads the correct entity belonging to the designated network.

## address

The address prop specifies the unique identifier for the entity, conforming to the address format of the specified network. Here's how different network addresses can be represented:

**Hedera:** Addresses are typically in the format "0.0.x", where x is a number.<br/>
**Ethereum:** Addresses usually start with "0x" followed by a series of alphanumeric characters.<br/>
...

> For network-native currencies like HBAR on Hedera or Ether on Ethereum, you can simply use the currency symbol (e.g., "hbar", "eth", "btc", "bnb") as the address.

### Examples

```HTML
<DavinciPic type="token" network="hedera" address="hbar"></DavinciPic>
<DavinciPic type="token" network="hedera" address="0.0.2997829"></DavinciPic>
<DavinciPic type="token" network="ethereum" address="0xdAC17F958D2ee523a2206206994597C13D831ec7"></DavinciPic>
```

## name

The `name` prop is specifically designed for use when the `type` prop is set to `app`. It serves as an identifier to fetch the appropriate entity from the API. The value you provide for name will be used in the API request to uniquely identify and retrieve the corresponding app entity. This prop is ignored for other types of entities.

```HTML
<DavinciPic type="app" name="saucerswap"></DavinciPic>
<DavinciPic type="app" name="hashport"></DavinciPic>
```

## dataTitle

The `dataTitle` prop allows you to manually set a title that appears when the user hovers over the element. This alternative title will only be used if the returned entity lacks an associated title.

**For single tokens or entities:** You can provide a single title.<br/>
**For LP (Liquidity Provider) tokens:** If you know the token is an LP token comprised of two different assets, you can provide both titles separated by a pipe symbol (|).

## dataPicUrl

The dataPicUrl prop allows you to provide an alternative image URL for the entity displayed. This alternative image will only be used if the returned entity lacks an associated picture.

**For individual entities or tokens:** Supply the URL of the backup image.<br/>
**For LP (Liquidity Provider) tokens:** If you know that the token is a liquidity provider token composed of two different assets, you can specify both image URLs, separated by a pipe symbol (|).

```HTML
<DavinciPic type="token" network="hedera" address="hbar" dataTitle="HBAR" dataPicUrl="...relative/absolute path..."></DavinciPic>
<DavinciPic type="token" network="hedera" address="0.0.1062796" dataTitle="token0Title|token1Title" dataPicUrl="token0Url|token1Url"></DavinciPic>
```

## context

The context prop is used exclusively when the type prop is set to "token." It specifies what kind of additional image should accompany the main token image as a smaller circle. This prop accepts one of three specific values:

**"network":** If set, a smaller circle displaying the network logo (e.g., Hedera, Ethereum) will appear beside the primary token image.<br/>
**"app":** If set, the smaller circle will show the logo or icon of the application associated with the token.<br/>
**"none":** When set to "none," no additional image will be shown; only the primary token image will be displayed.

The smaller circle provides a visual cue, giving more information about the origin or the nature of the token being displayed.

## contextPosition

The contextPosition prop allows you to specify the location of the context picture within the main picture frame. This prop is particularly useful when you want to control the placement of the additional contextual image (like a network or app logo) relative to the main token image.

Accepted values for this prop are:

**"bottomRight":** Places the context picture at the bottom-right corner of the main picture frame.<br/>
**"bottomLeft":** Places the context picture at the bottom-left corner of the main picture frame.<br/>
**"topRight":** Places the context picture at the top-right corner of the main picture frame.<br/>
**"topLeft":** Places the context picture at the top-left corner of the main picture frame.<br/>

## dataContextTitle

The `dataContextTitle` prop functions similarly to the `dataTitle` prop, but it specifically applies to the context title. This means that the title specified using `dataContextTitle` will appear as a tooltip when the user hovers their cursor over the smaller context picture, such as a network or app logo.

This can be useful for providing additional information or clarification about the context of the token, especially when the image alone may not convey the full meaning.

## dataContextPicUrl

The `dataContextPicUrl` prop serves a similar purpose to the `dataPicUrl` prop, but it specifically targets the context picture. If you have a local image that you'd like to display as the context picture (e.g., a network or app logo), you can specify its URL using this prop. This way, the specified image will be loaded as the context picture if the API doesn't provide one.

## complexTokenType

The `complexTokenType` prop allows you to explicitly specify the type of a complex token, which could either be a Liquidity Pool (LP) token or a Wrapped token. This is particularly useful for customizing the loading and failure templates of the component, as the actual type of complex tokens is generally not known until the API response is received. Acceptable values for this prop are `lp` for Liquidity Pool tokens and `wrapped` for Wrapped tokens.

By setting this prop, you can ensure that the loading and failure templates are appropriately tailored even before the API response arrives.

## lpTokensPosition

This prop controls the positioning of the liquidity pair (LP) tokens' logos in the display. It accepts three values:

**intersected (Default):** This option displays the two token logos beside each other with standard spacing.

**intimate:** This option brings the two token logos closer together. Useful when you want to display LP tokens in a more compact space.

**merged:** This merges both tokens into a single circle, divided down the middle. One side will display the token0 picture, and the other side will display the token1 picture.

### Note on Small Display Sizes:

For smaller display sizes where visibility of individual tokens may become an issue, options like intimate and merged can be especially useful. The closer positioning or merging of the token logos allows for a larger display size for each, thereby improving visibility.

## offlineMode

The `offlineMode` prop enables the component to operate without making any API calls. When this mode is activated, the component will immediately load any alternative data provided via other props, such as `dataPicUrl` or `dataTitle`, without attempting to fetch data from the API.

## size

The size prop sets the dimensions of the image, rendering it as a square. The value should be specified in pixels, such as "48". By default, the size is set to "100" pixels. This prop is not applicable when the type is set to "banner."

## shape

The shape prop allows you to define the geometric form of the displayed picture. Accepted values include:

**circle:** Renders the picture in a circular shape.<br/>
**square:** Displays the picture as a square with sharp corners.<br/>
**smoothSquare:** Renders the picture as a square with slightly rounded corners.

> has no effects on complex and contextual tokens which always will be shown in a circular shape.

## `strokeWidth` and `strokeColor`

These props control the stroke appearance around the shape involved in the image. The `strokeWidth` prop specifies the width of the stroke in pixels, while the `strokeColor` prop defines its color. Note that these props do not apply when the type is set to `banner`. Also they won't affect during loading phase or failed scenarios.

## placeholder

The `placeholder` prop serves as a flexible variable that can be used in conjunction with the `loadingEffect` and `failureEffect` props. It accepts both predefined and dynamic values, which may vary depending on the type of entity specified.

### Common Values:

**`transparent`:** Sets the background of the involved shapes to be transparent.<br/>
**`randomColor`:** Generates a random color for the background of the involved shapes.<br/>
**Fixed Color:** Allows you to specify a fixed color using a hex code (e.g., #FF5733) or an RGB value (e.g., rgb(255, 87, 51)) to be shown as the background of the involved shapes.<br/>
**Picture URL:** Allows you to specify an image URL using the url() format (e.g., url(http://example.com/image.jpg)).

```HTML
<DavinciPic type="token" network="hedera" addrss="hbar" placeholder="transparent"></DavinciPic>
<DavinciPic type="token" network="hedera" addrss="hbar" placeholder="randomColor"></DavinciPic>
<DavinciPic type="token" network="hedera" addrss="hbar" placeholder="#ccc"></DavinciPic>
<DavinciPic type="token" network="hedera" addrss="hbar" placeholder="url('http://... or ./image/...')"></DavinciPic>
```

### Type-Specific Values:

_Common to All Types Except 'Banner':_

**`default`:** Uses the default "no logo" picture.<br/>
**`defaultBright`:** Uses a brighter variant of the default "no logo" picture.<br/>
**`defaultDark`:** Uses a darker variant of the default "no logo" picture.<br/>

<br/>

_Common to All Types Except 'Banner' and 'Profile':_

**`questionMarkBright`:** Displays a bright question mark symbol.<br/>
**`questionMark`:** Displays a standard question mark symbol.<br/>
**`questionMarkDark`:** Displays a dark question mark symbol.<br/>
**`exclamationMarkBright`:** Displays a bright exclamation mark symbol.<br/>
**`exclamationMark`:** Displays a standard exclamation mark symbol.<br/>
**`exclamationMarkDark`:** Displays a dark exclamation mark symbol.<br/>

### predefined values table

| value                 | On Profile                                                                                       | On Others Except 'banner'                                                                        |
| --------------------- | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| default               | <img src="https://arweave.net/qsn_zIlG_7_Ob4_qS6Bpc8vLEc5bPScw6JMly_shxlk" width="48" height=48> | <img src="https://arweave.net/wW4bp6129XobnasaZbDB4RxdnpipGR8XyK0tUXGiVL0" width="48" height=48> |
| defaultBright         | <img src="https://arweave.net/WxLlax6NBCapLUuKcuy-wvLlKLBTqxTV40yJt7Yc26Q" width="48" height=48> | <img src="https://arweave.net/ZAMK4tuU1MZ9TkNl2ARV2QDRumGT5Yxw13uCpW3kX6w" width="48" height=48> |
| defaultDark           | <img src="https://arweave.net/ZHWeQz5R6VHBHOg6eOGekMsudTyy7uNBdnrul5gIIu0" width="48" height=48> | <img src="https://arweave.net/j5B7_CYAOdrk6YJNVeJMeOHn4HbySsgkObUSfpvUuDA" width="48" height=48> |
| questionMarkBright    |                                                                                                  | <img src="https://arweave.net/z-5G9bNj_gisiQhVECwaUdSzuXMxl9Gi9UxYqrwUrq4" width="48" height=48> |
| questionMark          |                                                                                                  | <img src="https://arweave.net/u9t3--97iFNeFB4XaX7auIdcJWjNWF090BFcJdnBmiQ" width="48" height=48> |
| questionMarkDark      |                                                                                                  | <img src="https://arweave.net/HDVERv0ghkA91qhI2ud7qVUU_FFtAIyYELHHxQ9t2BQ" width="48" height=48> |
| exclamationMarkBright |                                                                                                  | <img src="https://arweave.net/HS0RGj5YSKgcNch2US1E8saZKdM8RGlQWpxwhk5eKrk" width="48" height=48> |
| exclamationMark       |                                                                                                  | <img src="https://arweave.net/KwbKX4FOOM59KmFrAvtRhr5U-8MqWsSzU0rSA3Z7Z4A" width="48" height=48> |
| exclamationMarkDark   |                                                                                                  | <img src="https://arweave.net/A3Ja0tV3kU6EhVvN1EQejG-kmtY_yEcbgQ6pShYRXHo" width="48" height=48> |

## loadingEffect

The `loadingEffect` prop takes effect immediately when the component enters the viewport and continues until a response is received from the API. It offers various options to customize the visual behavior of the component during the loading stage:

**`hide:`** Hides the component.<br/>
**`transparent:`** Makes the component transparent.<br/>
**`placeholder:`** Displays the placeholder whether it's a color or picture.<br/>
**`randomColor:`** Fills the component with a randomly generated color.<br/>
**Fixed Color:** You can specify a fixed color in the format of #... or rgb() for the shapes background.<br/>
**Picture URL:** Uses a picture from a URL as the filling picture of the shapes. Format: url(theUrl).<br/>
**`pulse:placeholder:`** Displays the placeholder as pulsing.<br/>
**`pulse:randomColor:`** Displays the randomly generated color as pulsing.<br/>
**pulse:Fixed color:** Displays the fixed color as pulsing.<br/>

The "pulse:" prefix creates a pulsating effect for the option that follows it, adding a dynamic visual transition during the loading phase.

## failureEffect

The failureEffect prop comes into play when an API request fails and there's insufficient local data to display the picture. This prop allows you to define how the component should behave under such circumstances. It accepts the following values:

**hide:** Hides the component.<br/>
**transparent:** Makes the component transparent.<br/>
**placeholder:** Displays a placeholder based on the strategy defined in the placeholder prop.<br/>

If you choose "placeholder," the specific graphic or color that appears will be determined by the configuration set in the placeholder prop. This ensures a consistent visual experience even when data retrieval is unsuccessful.

## censor

The censor prop allows you to blur images that violate `DavinciPic`'s policies, which are still under development. These policies will target images based on their levels of sensitivity. When finalized, the policies will have three categories:

**sensitive:** Least severe. Blurs images flagged as sensitive.<br/>
**inappropriate:** Moderate severity. Blurs images flagged as inappropriate or more severe.<br/>
**copyright-violated:** Most severe. Blurs images flagged as violating copyright.

Setting this prop to a particular level will also consider all classes following that level as censored. For example, if you set censor="inappropriate", the component will blur images flagged as "inappropriate" as well as those flagged as `copyright-violated`.

The default value for this prop is `copyright-violated`.

## delayResponseTime

The delayResponseTime prop is designed primarily for testing and demonstration purposes. It introduces a deliberate delay during the loading phase of the component. The delay duration is specified in milliseconds.

## Props Types

### PicsType

```typescript
type PicsType = "token" | "profile" | "banner" | "node" | "network" | "app";
```

### PicsContextType

```typescript
type PicsContextType = "none" | "app" | "network";
```

### PicsContextPositionType

```typescript
type PicsContextPositionType = "topRight" | "topLeft" | "bottomRight" | "bottomLeft";
```

### PicsSensitivityType

```typescript
type PicsSensitivityType = "safe" | "sensitive" | "inappropriate" | "copyright-violated";
```

### PicsShapeType

```typescript
type PicsShapeType = "circle" | "square" | "smoothSquare";
```

### PicsLpTokensPositionType

```typescript
type PicsLpTokensPositionType = "intersected" | "intimate" | "merged";
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
