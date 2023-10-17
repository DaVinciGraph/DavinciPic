import { exampleData, invalidAddress } from "../App";
import { CopySnippet } from "../Copy";
import DavinciPic from "../davinciPics";

const alternativeBannerPic = "https://i.pinimg.com/736x/58/2d/96/582d96a1df2d94bb439af1594639ccfe.jpg";
export const BannerExamples = () => {
	return (
		<article>
			<h1> Banner </h1>

			<main>
				<section className="banner">
					<CopySnippet title="Default">
						<DavinciPic type="banner" network="hedera" address={exampleData.account} />
					</CopySnippet>
					<CopySnippet title="Alternative Data">
						<DavinciPic
							type="banner"
							network="hedera"
							address={invalidAddress(exampleData.account)}
							loadingEffect={"pulse:randomColor"}
							delayResponseTime={5000}
							dataTitle="Alternative Title"
							dataPicUrl={alternativeBannerPic}
						/>
					</CopySnippet>
					<CopySnippet title="Offline Mode">
						<DavinciPic
							type="banner"
							network="hedera"
							address={exampleData.account}
							offlineMode
							dataTitle="Alternative Title"
							dataPicUrl={alternativeBannerPic}
						/>
					</CopySnippet>
				</section>

				<h4>Loading Effects</h4>
				<section className="banner">
					<CopySnippet title="Hide">
						<DavinciPic type="banner" network="hedera" address={exampleData.account} loadingEffect={"hide"} delayResponseTime={50000} />
					</CopySnippet>
					<CopySnippet title="Transparent">
						<DavinciPic
							type="banner"
							network="hedera"
							address={exampleData.account}
							placeholder={"transparent"}
							loadingEffect={"placeholder"}
							delayResponseTime={50000}
							dataTitle="Alternative Title"
							dataPicUrl={alternativeBannerPic}
						/>
					</CopySnippet>
					<CopySnippet title="Fixed Color">
						<DavinciPic
							type="banner"
							network="hedera"
							address={exampleData.account}
							dataTitle="Alternative Title"
							dataPicUrl={alternativeBannerPic}
							loadingEffect={"#ccc"}
							delayResponseTime={50000}
						/>
					</CopySnippet>
					<CopySnippet title="Pulse Random Color">
						<DavinciPic
							type="banner"
							network="hedera"
							address={exampleData.account}
							dataTitle="Alternative Title"
							dataPicUrl={alternativeBannerPic}
							loadingEffect={"pulse:randomColor"}
							delayResponseTime={50000}
						/>
					</CopySnippet>
					<CopySnippet title="Custom Url">
						<DavinciPic
							type="banner"
							network="hedera"
							address={exampleData.account}
							loadingEffect={`pulse:url(${alternativeBannerPic})`}
							delayResponseTime={50000}
						/>
					</CopySnippet>
				</section>

				<h4>Failure Effects</h4>
				<section className="banner">
					<CopySnippet title="Hide">
						<DavinciPic
							type="banner"
							network="hedera"
							address={invalidAddress(exampleData.account)}
							loadingEffect={"pulse:#ccc"}
							failureEffect={"hide"}
							delayResponseTime={3000}
						/>
					</CopySnippet>
					<CopySnippet title="Transparent">
						<DavinciPic
							type="banner"
							network="hedera"
							address={invalidAddress(exampleData.account)}
							placeholder={"transparent"}
							failureEffect={"placeholder"}
							loadingEffect={"pulse:#ccc"}
							delayResponseTime={3000}
						/>
					</CopySnippet>
					<CopySnippet title="Fixed Color">
						<DavinciPic
							type="banner"
							network="hedera"
							address={invalidAddress(exampleData.account)}
							placeholder={"#ccc"}
							failureEffect={"placeholder"}
							loadingEffect={"pulse:#ccc"}
							delayResponseTime={5000}
						/>
					</CopySnippet>
					<CopySnippet title="Random Color">
						<DavinciPic
							type="banner"
							network="hedera"
							address={invalidAddress(exampleData.account)}
							placeholder={"randomColor"}
							failureEffect={"placeholder"}
							loadingEffect={"pulse:#ccc"}
							delayResponseTime={5000}
						/>
					</CopySnippet>
					<CopySnippet title="Custom Url">
						<DavinciPic
							type="banner"
							network="hedera"
							address={invalidAddress(exampleData.account)}
							placeholder={`url(${alternativeBannerPic})`}
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
