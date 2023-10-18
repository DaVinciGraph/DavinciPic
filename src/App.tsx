import "./App.css";
import { LPExamples } from "./examples/LP";
import { AppExamples } from "./examples/app";
import { BannerExamples } from "./examples/banner";
import { NetworkExamples } from "./examples/network";
import { NodeExamples } from "./examples/node";
import { ProfileExamples } from "./examples/profile";
import { TokenExamples } from "./examples/token";
import { WrappedExamples } from "./examples/wrapped";

export const exampleData = {
	simpleToken: "hbar",
	wrappedToken: "0.0.1055483",
	lpToken: "0.0.1090518",
	account: "0.0.1518714",
	node: "0.0.31",
	app: "davincigraph",
	alternativePic: "https://pbs.twimg.com/profile_images/914199620556935169/as44o2MI_200x200.jpg",
	alternativePic2: "https://pbs.twimg.com/profile_images/983373022550679553/cSUvZW-e_200x200.jpg",
};

export const invalidAddress = (string: string) => {
	return string.substring(0, string.length - 1);
};

function App() {
	return (
		<div className="App">
			<section className="intro">
				<h1>DavinciPic React Component Example Usage</h1>
				<p>
					Thank you for visiting the example page for the DavinciPic react component! On this page, we provide an extensive showcase of
					various examples to demonstrate the capabilities, configurations, and customization options available when you utilize the
					DavinciPic component.
				</p>
				<h3>About DavinciPic</h3>
				<p>
					The DavinciPic react component serves as a seamless extension of the DavinciPics API. Its primary function is to streamline the
					process of fetching and displaying visual identities associated with Hedera entities. Not only does it make it incredibly
					straightforward to pull this information, but it also offers a plethora of customization options to ensure that the visual
					elements align with the specific needs of your application.
				</p>
				<h3>Supported Entity Types</h3>
				<p>As you may already know, the DavinciPics API provides support for five distinct types of entities:</p>
				<ul>
					<li>
						<a href="#token">Tokens</a>
					</li>
					<li>
						<a href="#profile">Profile Pictures (of an Account)</a>
					</li>
					<li>
						<a href="#banner">Banners (of an Account)</a>
					</li>
					<li>
						<a href="#node">Nodes</a>
					</li>
					<li>
						<a href="#network">Networks</a>
					</li>
					<li>
						<a href="#app">Apps</a>
					</li>
				</ul>
				<p>
					Each of these entity types has unique visual identifiers, and our DavinciPic component is designed to handle all of them adeptly.
				</p>
				<h3>Examples Ahead</h3>
				<p>
					In the sections that follow, you'll find a curated list of examples that demonstrate how to make the most out of the DavinciPic
					component. These examples cover a wide range of use-cases and configurations to give you a comprehensive understanding of what's
					possible with this versatile component.
				</p>
				<h3>Additional Resources</h3>
				<p>
					If you're new to DavinciPic or encounter any difficulties in setting it up, we highly recommend checking out the detailed
					documentation available in the README.md file on our GitHub repository. It provides a step-by-step guide on how to get started,
					along with tips for advanced usage and customization.
				</p>

				<div style={{ backgroundColor: "#ffd4d4", padding: "5px 10px", borderRadius: 5 }}>
					<h2>Note:</h2>
					<p>
						The examples you'll see here include intentional delays. We've added these pauses to demonstrate the 'loading' and 'failure'
						states.
					</p>
				</div>
			</section>

			<div id="token"></div>

			<div id="wrapped"></div>

			<div id="lp"></div>

			<div id="profile"></div>

			<div id="banner"></div>

			<div id="node"></div>

			<div id="network"></div>

			<div id="app"></div>
			<TokenExamples />
			<WrappedExamples />
			<LPExamples />
			<ProfileExamples />
			<BannerExamples />
			<NodeExamples />
			<NetworkExamples />
			<AppExamples />
		</div>
	);
}

export default App;
