import { exampleData } from "../App";
import { CopySnippet } from "../Copy";
import DavinciPic from "../davinciPics";

export const NetworkExamples = () => {
	return (
		<article id="network">
			<h1> Network </h1>

			<main>
				<section>
					<CopySnippet title="Default">
						<DavinciPic type="network" network="hedera" theme="dark" size={64} />
					</CopySnippet>
					<CopySnippet title="Alternative Data">
						<DavinciPic
							type="network"
							network="heder"
							size={64}
							loadingEffect={"pulse:randomColor"}
							delayResponseTime={5000}
							dataTitle="Alternative Title"
							dataPicUrl={exampleData.alternativePic}
						/>
					</CopySnippet>
					<CopySnippet title="Offline Mode">
						<DavinciPic type="network" network="hedera" offlineMode size={64} dataTitle="Alternative Title" dataPicUrl={exampleData.alternativePic} />
					</CopySnippet>
					<CopySnippet title="Green Stroke 4px">
						<DavinciPic type="network" network="hedera" size={64} strokeWidth={4} strokeColor="green" />
					</CopySnippet>
					<CopySnippet title="Size 100px">
						<DavinciPic type="network" network="hedera" size={100} />
					</CopySnippet>
					<CopySnippet title="Size 20px">
						<DavinciPic type="network" network="hedera" size={20} />
					</CopySnippet>
					<CopySnippet title="Square Shape">
						<DavinciPic type="network" network="hedera" size={64} shape="square" />
					</CopySnippet>
					<CopySnippet title="Smooth Square Shape">
						<DavinciPic type="network" network="hedera" size={64} shape="smoothSquare" />
					</CopySnippet>
				</section>

				<h4>Loading Effects</h4>
				<section>
					<CopySnippet title="Hide">
						<DavinciPic type="network" network="hedera" size={64} loadingEffect={"hide"} delayResponseTime={50000} />
					</CopySnippet>
					<CopySnippet title="Transparent">
						<DavinciPic type="network" network="hedera" size={64} loadingEffect={"transparent"} delayResponseTime={50000} />
					</CopySnippet>
					<CopySnippet title="Fixed Color">
						<DavinciPic type="network" network="hedera" size={64} loadingEffect={"#ccc"} delayResponseTime={50000} />
					</CopySnippet>
					<CopySnippet title="Random Color">
						<DavinciPic type="network" network="hedera" size={64} loadingEffect={"randomColor"} delayResponseTime={50000} />
					</CopySnippet>
					<CopySnippet title="Default Question Mark Bright">
						<DavinciPic type="network" network="hedera" size={64} placeholder={"questionMarkBright"} loadingEffect={"placeholder"} delayResponseTime={50000} />
					</CopySnippet>
					<CopySnippet title="Default Exclamation Mark Dark">
						<DavinciPic type="network" network="hedera" size={64} placeholder={"exclamationMarkDark"} loadingEffect={"placeholder"} delayResponseTime={50000} />
					</CopySnippet>
					<CopySnippet title="Custom Url">
						<DavinciPic type="network" network="hedera" size={64} loadingEffect={"url(https://media.tenor.com/wpSo-8CrXqUAAAAi/loading-loading-forever.gif)"} delayResponseTime={50000} />
					</CopySnippet>
					<CopySnippet title="Pulse Random Color">
						<DavinciPic type="network" network="hedera" size={64} loadingEffect={"pulse:randomColor"} delayResponseTime={50000} />
					</CopySnippet>
					<CopySnippet title="Pulse Custom Url">
						<DavinciPic
							type="network"
							network="hedera"
							size={64}
							loadingEffect={"pulse:url(https://media.tenor.com/wpSo-8CrXqUAAAAi/loading-loading-forever.gif)"}
							delayResponseTime={50000}
						/>
					</CopySnippet>
					<CopySnippet title="Pulse Default No Logo Picture">
						<DavinciPic type="network" network="hedera" size={64} placeholder={"default"} loadingEffect={"pulse:placeholder"} delayResponseTime={50000} />
					</CopySnippet>
				</section>

				<h4>Failure Effects</h4>
				<section>
					<CopySnippet title="Hide">
						<DavinciPic type="network" network="heder" size={64} loadingEffect={"pulse:#ccc"} failureEffect={"hide"} delayResponseTime={3000} />
					</CopySnippet>
					<CopySnippet title="Transparent">
						<DavinciPic type="network" network="heder" size={64} failureEffect={"transparent"} loadingEffect={"pulse:#ccc"} delayResponseTime={3000} />
					</CopySnippet>
					<CopySnippet title="Fixed Color">
						<DavinciPic type="network" network="heder" size={64} placeholder={"#ccc"} failureEffect={"placeholder"} loadingEffect={"pulse:#ccc"} delayResponseTime={5000} />
					</CopySnippet>
					<CopySnippet title="Random Color">
						<DavinciPic type="network" network="heder" size={64} placeholder={"randomColor"} failureEffect={"placeholder"} loadingEffect={"pulse:#ccc"} delayResponseTime={5000} />
					</CopySnippet>
					<CopySnippet title="Default Question Mark Bright">
						<DavinciPic type="network" network="heder" size={64} placeholder={"questionMarkBright"} failureEffect={"placeholder"} loadingEffect={"pulse:#ccc"} delayResponseTime={3000} />
					</CopySnippet>
					<CopySnippet title="Default Exclamation Mark Dark">
						<DavinciPic type="network" network="heder" size={64} placeholder={"exclamationMarkDark"} failureEffect={"placeholder"} loadingEffect={"pulse:#ccc"} delayResponseTime={3000} />
					</CopySnippet>
					<CopySnippet title="Custom Url">
						<DavinciPic
							type="network"
							network="heder"
							size={64}
							placeholder={"url(https://res.cloudinary.com/dq7dgsuu8/image/upload/v1684562031/icons/hedera_token_64_lhaycq.png)"}
							failureEffect={"placeholder"}
							loadingEffect={"pulse:#ccc"}
							delayResponseTime={3000}
						/>
					</CopySnippet>
				</section>
			</main>
		</article>
	);
};
