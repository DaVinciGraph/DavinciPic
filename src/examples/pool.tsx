import { exampleData, invalidAddress } from "../App";
import { CopySnippet } from "../Copy";
import DavinciPic from "../davinciPics";

export const PoolExamples = () => {
	return (
		<article>
			<h1> Pool Contract </h1>

			<main>
				<section>
					<CopySnippet title="With No Context">
						<DavinciPic type="contract" network="hedera" address={exampleData.poolContract} context="none" size={64} />
					</CopySnippet>

					<CopySnippet title="With App Context">
						<DavinciPic type="contract" network="hedera" address={exampleData.poolContract} context="app" size={64} />
					</CopySnippet>
					<CopySnippet title="With Network Context">
						<DavinciPic type="contract" network="hedera" address={exampleData.poolContract} context="network" size={64} />
					</CopySnippet>
					<CopySnippet title="Alternative Data">
						<DavinciPic
							type="contract"
							network="hedera"
							isPool={true}
							address={invalidAddress(exampleData.poolContract)}
							size={64}
							loadingEffect={"pulse:randomColor"}
							delayResponseTime={5000}
							dataTitle="Alternative Title"
							dataPicUrl={`${exampleData.alternativePic}|${exampleData.alternativePic2}`}
						/>
					</CopySnippet>
					<CopySnippet title="Alternative Data With Context">
						<DavinciPic
							type="contract"
							network="hedera"
							isPool={true}
							address={invalidAddress(exampleData.poolContract)}
							size={64}
							strokeWidth={4}
							strokeColor="red"
							loadingEffect={"pulse:randomColor"}
							delayResponseTime={5000}
							dataTitle="Alternative Title"
							dataPicUrl={`${exampleData.alternativePic}|${exampleData.alternativePic2}`}
							dataContextTitle="Alternative Title"
							dataContextPicUrl={exampleData.alternativePic}
						/>
					</CopySnippet>
					<CopySnippet title="Offline Mode">
						<DavinciPic
							type="contract"
							network="hedera"
							address={invalidAddress(exampleData.poolContract)}
							context="network"
							offlineMode
							size={64}
							dataTitle="Alternative Title for token0|Alternative Title for token 1"
							dataPicUrl={`${exampleData.alternativePic}|${exampleData.alternativePic2}`}
							dataContextTitle="Alternative Title"
							dataContextPicUrl={exampleData.alternativePic}
						/>
					</CopySnippet>
					<CopySnippet title="Intimate Position">
						<DavinciPic type="contract" network="hedera" address={exampleData.poolContract} context="app" size={64} poolPairPosition="intimate" />
					</CopySnippet>
					<CopySnippet title="Merged Position">
						<DavinciPic type="contract" network="hedera" address={exampleData.poolContract} context="app" size={64} poolPairPosition="merged" />
					</CopySnippet>
					<CopySnippet title="Merged Position Without Context">
						<DavinciPic type="contract" network="hedera" address={exampleData.poolContract} isPool={true} context="none" size={64} poolPairPosition="merged" />
					</CopySnippet>
					<CopySnippet title="Green Stroke 4px">
						<DavinciPic type="contract" network="hedera" address={exampleData.poolContract} size={64} strokeWidth={4} strokeColor="green" />
					</CopySnippet>
					<CopySnippet title="Different Context position">
						<DavinciPic type="contract" network="hedera" address={exampleData.poolContract} size={64} context="app" contextPosition="topLeft" />
					</CopySnippet>
					<CopySnippet title="Size 100px">
						<DavinciPic type="contract" network="hedera" address={exampleData.poolContract} size={100} />
					</CopySnippet>
					<CopySnippet title="Size 20px">
						<DavinciPic type="contract" network="hedera" address={exampleData.poolContract} size={20} />
					</CopySnippet>
					<CopySnippet title="Show Pair Tokens App">
						<DavinciPic type="contract" network="hedera" showPairApps={true} address="0.0.3948521" size={64} />
					</CopySnippet>
				</section>

				<h4>Loading Effects</h4>
				<section>
					<CopySnippet title="Hide">
						<DavinciPic type="contract" network="hedera" address={exampleData.poolContract} isPool={true} context="network" size={64} loadingEffect={"hide"} delayResponseTime={50000} />
					</CopySnippet>
					<CopySnippet title="Transparent">
						<DavinciPic
							type="contract"
							network="hedera"
							address={exampleData.poolContract}
							isPool={true}
							context="network"
							size={64}
							loadingEffect={"transparent"}
							delayResponseTime={50000}
						/>
					</CopySnippet>
					<CopySnippet title="Fixed Color">
						<DavinciPic type="contract" network="hedera" address={exampleData.poolContract} isPool={true} context="network" size={64} loadingEffect={"#ccc"} delayResponseTime={50000} />
					</CopySnippet>
					<CopySnippet title="Random Color">
						<DavinciPic
							type="contract"
							network="hedera"
							address={exampleData.poolContract}
							poolPairPosition="intimate"
							isPool={true}
							context="network"
							size={64}
							loadingEffect={"randomColor"}
							delayResponseTime={50000}
						/>
					</CopySnippet>
					<CopySnippet title="Default Question Mark Bright">
						<DavinciPic
							type="contract"
							network="hedera"
							address={exampleData.poolContract}
							isPool={true}
							context="network"
							size={64}
							placeholder={"questionMarkBright"}
							loadingEffect={"placeholder"}
							delayResponseTime={50000}
						/>
					</CopySnippet>
					<CopySnippet title="Default Exclamation Mark Dark">
						<DavinciPic
							type="contract"
							network="hedera"
							address={exampleData.poolContract}
							isPool={true}
							context="network"
							size={64}
							placeholder={"exclamationMarkDark"}
							loadingEffect={"placeholder"}
							delayResponseTime={50000}
						/>
					</CopySnippet>
					<CopySnippet title="Default Exclamation Mark Dark & Merged">
						<DavinciPic
							type="contract"
							network="hedera"
							address={exampleData.poolContract}
							isPool={true}
							poolPairPosition="merged"
							context="network"
							size={64}
							placeholder={"exclamationMarkDark"}
							loadingEffect={"placeholder"}
							delayResponseTime={50000}
						/>
					</CopySnippet>
					<CopySnippet title="Custom Url">
						<DavinciPic
							type="contract"
							network="hedera"
							address={exampleData.poolContract}
							isPool={true}
							context="network"
							size={64}
							loadingEffect={"url(https://media.tenor.com/wpSo-8CrXqUAAAAi/loading-loading-forever.gif)"}
							delayResponseTime={50000}
						/>
					</CopySnippet>
					<CopySnippet title="Pulse Random Color">
						<DavinciPic
							type="contract"
							network="hedera"
							address={exampleData.poolContract}
							isPool={true}
							context="network"
							size={64}
							loadingEffect={"pulse:randomColor"}
							delayResponseTime={50000}
						/>
					</CopySnippet>
					<CopySnippet title="Pulse Custom Url">
						<DavinciPic
							type="contract"
							network="hedera"
							address={exampleData.poolContract}
							isPool={true}
							context="network"
							size={64}
							loadingEffect={"pulse:url(https://media.tenor.com/wpSo-8CrXqUAAAAi/loading-loading-forever.gif)"}
							delayResponseTime={50000}
						/>
					</CopySnippet>
					<CopySnippet title="Pulse Default No Logo Picture">
						<DavinciPic
							type="contract"
							network="hedera"
							address={exampleData.poolContract}
							isPool={true}
							context="network"
							size={64}
							placeholder={"default"}
							loadingEffect={"pulse:placeholder"}
							delayResponseTime={50000}
						/>
					</CopySnippet>
					<CopySnippet title="Default & merged">
						<DavinciPic
							type="contract"
							network="hedera"
							address={exampleData.poolContract}
							isPool={true}
							poolPairPosition="merged"
							context="network"
							size={64}
							placeholder={"default"}
							loadingEffect={"pulse:placeholder"}
							delayResponseTime={50000}
						/>
					</CopySnippet>
				</section>

				<h4>Failure Effects </h4>
				<section>
					<CopySnippet title="Hide">
						<DavinciPic
							type="contract"
							network="hedera"
							address={invalidAddress(exampleData.poolContract)}
							isPool={true}
							size={64}
							loadingEffect={"pulse:#ccc"}
							failureEffect={"hide"}
							delayResponseTime={3000}
						/>
					</CopySnippet>
					<CopySnippet title="Transparent">
						<DavinciPic
							type="contract"
							network="hedera"
							address={invalidAddress(exampleData.poolContract)}
							isPool={true}
							size={64}
							failureEffect={"transparent"}
							loadingEffect={"pulse:#ccc"}
							delayResponseTime={3000}
						/>
					</CopySnippet>
					<CopySnippet title="Fixed Color">
						<DavinciPic
							type="contract"
							network="hedera"
							address={invalidAddress(exampleData.poolContract)}
							poolPairPosition="merged"
							isPool={true}
							size={64}
							placeholder={"#ccc"}
							failureEffect={"placeholder"}
							loadingEffect={"pulse:#ccc"}
							delayResponseTime={5000}
						/>
					</CopySnippet>
					<CopySnippet title="Random Color">
						<DavinciPic
							type="contract"
							network="hedera"
							address={invalidAddress(exampleData.poolContract)}
							poolPairPosition="intimate"
							isPool={true}
							size={64}
							placeholder={"randomColor"}
							failureEffect={"placeholder"}
							loadingEffect={"pulse:#ccc"}
							delayResponseTime={5000}
						/>
					</CopySnippet>
					<CopySnippet title="Default Question Mark Bright">
						<DavinciPic
							type="contract"
							network="hedera"
							address={invalidAddress(exampleData.poolContract)}
							isPool={true}
							size={64}
							placeholder={"questionMarkBright"}
							failureEffect={"placeholder"}
							loadingEffect={"pulse:#ccc"}
							delayResponseTime={3000}
						/>
					</CopySnippet>
					<CopySnippet title="Default Exclamation Mark Dark">
						<DavinciPic
							type="contract"
							network="hedera"
							address={invalidAddress(exampleData.poolContract)}
							isPool={true}
							size={64}
							placeholder={"exclamationMarkDark"}
							failureEffect={"placeholder"}
							loadingEffect={"pulse:#ccc"}
							delayResponseTime={3000}
						/>
					</CopySnippet>
					<CopySnippet title="Custom Url">
						<DavinciPic
							type="contract"
							network="hedera"
							address={invalidAddress(exampleData.poolContract)}
							isPool={true}
							size={64}
							placeholder={"url(https://res.cloudinary.com/dq7dgsuu8/image/upload/v1684562031/icons/hedera_token_64_lhaycq.png)"}
							failureEffect={"placeholder"}
							loadingEffect={"pulse:#ccc"}
							delayResponseTime={3000}
						/>
					</CopySnippet>
					<CopySnippet title="Custom Url & Merged">
						<DavinciPic
							type="contract"
							network="hedera"
							address={invalidAddress(exampleData.poolContract)}
							isPool={true}
							poolPairPosition="merged"
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
