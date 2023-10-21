import { exampleData, invalidAddress } from "../App";
import { CopySnippet } from "../Copy";
import DavinciPic from "../davinciPics";

export const LPExamples = () => {
	return (
		<article>
			<h1> LP Token </h1>

			<main>
				<section>
					<CopySnippet title="With No Context">
						<DavinciPic type="token" network="hedera" address={exampleData.lpToken} context="none" size={64} />
					</CopySnippet>

					<CopySnippet title="With App Context">
						<DavinciPic type="token" network="hedera" address={exampleData.lpToken} context="app" size={64} />
					</CopySnippet>
					<CopySnippet title="With Network Context">
						<DavinciPic type="token" network="hedera" address={exampleData.lpToken} context="network" size={64} />
					</CopySnippet>
					<CopySnippet title="Alternative Data">
						<DavinciPic
							type="token"
							network="hedera"
							complexTokenType="lp"
							address={invalidAddress(exampleData.lpToken)}
							size={64}
							loadingEffect={"pulse:randomColor"}
							delayResponseTime={5000}
							dataTitle="Alternative Title"
							dataPicUrl={`${exampleData.alternativePic}|${exampleData.alternativePic2}`}
						/>
					</CopySnippet>
					<CopySnippet title="Alternative Data With Context">
						<DavinciPic
							type="token"
							network="hedera"
							complexTokenType="lp"
							address={invalidAddress(exampleData.lpToken)}
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
							type="token"
							network="hedera"
							address={invalidAddress(exampleData.lpToken)}
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
						<DavinciPic type="token" network="hedera" address={exampleData.lpToken} context="app" size={64} lpTokensPosition="intimate" />
					</CopySnippet>
					<CopySnippet title="Merged Position">
						<DavinciPic type="token" network="hedera" address={exampleData.lpToken} context="app" size={64} lpTokensPosition="merged" />
					</CopySnippet>
					<CopySnippet title="Merged Position Without Context">
						<DavinciPic
							type="token"
							network="hedera"
							address={exampleData.lpToken}
							complexTokenType="lp"
							context="none"
							size={64}
							lpTokensPosition="merged"
						/>
					</CopySnippet>
					<CopySnippet title="Green Stroke 4px">
						<DavinciPic type="token" network="hedera" address={exampleData.lpToken} size={64} strokeWidth={4} strokeColor="green" />
					</CopySnippet>
					<CopySnippet title="Different Context position">
						<DavinciPic type="token" network="hedera" address={exampleData.lpToken} size={64} context="app" contextPosition="topLeft" />
					</CopySnippet>
					<CopySnippet title="Size 100px">
						<DavinciPic type="token" network="hedera" address={exampleData.lpToken} size={100} />
					</CopySnippet>
					<CopySnippet title="Size 20px">
						<DavinciPic type="token" network="hedera" address={exampleData.lpToken} size={20} />
					</CopySnippet>
					<CopySnippet title="Censored">
						<DavinciPic type="token" network="hedera" address="TestLiquidity" censor="inappropriate" size={64} />
					</CopySnippet>
					<CopySnippet title="Censored">
						<DavinciPic
							type="token"
							network="hedera"
							address="TestLiquidity"
							lpTokensPosition="merged"
							censor="inappropriate"
							size={64}
						/>
					</CopySnippet>
				</section>

				<h4>Loading Effects</h4>
				<section>
					<CopySnippet title="Hide">
						<DavinciPic
							type="token"
							network="hedera"
							address={exampleData.lpToken}
							complexTokenType="lp"
							context="network"
							size={64}
							loadingEffect={"hide"}
							delayResponseTime={50000}
						/>
					</CopySnippet>
					<CopySnippet title="Transparent">
						<DavinciPic
							type="token"
							network="hedera"
							address={exampleData.lpToken}
							complexTokenType="lp"
							context="network"
							size={64}
							loadingEffect={"transparent"}
							delayResponseTime={50000}
						/>
					</CopySnippet>
					<CopySnippet title="Fixed Color">
						<DavinciPic
							type="token"
							network="hedera"
							address={exampleData.lpToken}
							complexTokenType="lp"
							context="network"
							size={64}
							loadingEffect={"#ccc"}
							delayResponseTime={50000}
						/>
					</CopySnippet>
					<CopySnippet title="Random Color">
						<DavinciPic
							type="token"
							network="hedera"
							address={exampleData.lpToken}
							lpTokensPosition="intimate"
							complexTokenType="lp"
							context="network"
							size={64}
							loadingEffect={"randomColor"}
							delayResponseTime={50000}
						/>
					</CopySnippet>
					<CopySnippet title="Default Question Mark Bright">
						<DavinciPic
							type="token"
							network="hedera"
							address={exampleData.lpToken}
							complexTokenType="lp"
							context="network"
							size={64}
							placeholder={"questionMarkBright"}
							loadingEffect={"placeholder"}
							delayResponseTime={50000}
						/>
					</CopySnippet>
					<CopySnippet title="Default Exclamation Mark Dark">
						<DavinciPic
							type="token"
							network="hedera"
							address={exampleData.lpToken}
							complexTokenType="lp"
							context="network"
							size={64}
							placeholder={"exclamationMarkDark"}
							loadingEffect={"placeholder"}
							delayResponseTime={50000}
						/>
					</CopySnippet>
					<CopySnippet title="Default Exclamation Mark Dark & Merged">
						<DavinciPic
							type="token"
							network="hedera"
							address={exampleData.lpToken}
							complexTokenType="lp"
							lpTokensPosition="merged"
							context="network"
							size={64}
							placeholder={"exclamationMarkDark"}
							loadingEffect={"placeholder"}
							delayResponseTime={50000}
						/>
					</CopySnippet>
					<CopySnippet title="Custom Url">
						<DavinciPic
							type="token"
							network="hedera"
							address={exampleData.lpToken}
							complexTokenType="lp"
							context="network"
							size={64}
							loadingEffect={"url(https://media.tenor.com/wpSo-8CrXqUAAAAi/loading-loading-forever.gif)"}
							delayResponseTime={50000}
						/>
					</CopySnippet>
					<CopySnippet title="Pulse Random Color">
						<DavinciPic
							type="token"
							network="hedera"
							address={exampleData.lpToken}
							complexTokenType="lp"
							context="network"
							size={64}
							loadingEffect={"pulse:randomColor"}
							delayResponseTime={50000}
						/>
					</CopySnippet>
					<CopySnippet title="Pulse Custom Url">
						<DavinciPic
							type="token"
							network="hedera"
							address={exampleData.lpToken}
							complexTokenType="lp"
							context="network"
							size={64}
							loadingEffect={"pulse:url(https://media.tenor.com/wpSo-8CrXqUAAAAi/loading-loading-forever.gif)"}
							delayResponseTime={50000}
						/>
					</CopySnippet>
					<CopySnippet title="Pulse Default No Logo Picture">
						<DavinciPic
							type="token"
							network="hedera"
							address={exampleData.lpToken}
							complexTokenType="lp"
							context="network"
							size={64}
							placeholder={"default"}
							loadingEffect={"pulse:placeholder"}
							delayResponseTime={50000}
						/>
					</CopySnippet>
					<CopySnippet title="Default & merged">
						<DavinciPic
							type="token"
							network="hedera"
							address={exampleData.lpToken}
							complexTokenType="lp"
							lpTokensPosition="merged"
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
							type="token"
							network="hedera"
							address={invalidAddress(exampleData.lpToken)}
							complexTokenType="lp"
							size={64}
							loadingEffect={"pulse:#ccc"}
							failureEffect={"hide"}
							delayResponseTime={3000}
						/>
					</CopySnippet>
					<CopySnippet title="Transparent">
						<DavinciPic
							type="token"
							network="hedera"
							address={invalidAddress(exampleData.lpToken)}
							complexTokenType="lp"
							size={64}
							failureEffect={"transparent"}
							loadingEffect={"pulse:#ccc"}
							delayResponseTime={3000}
						/>
					</CopySnippet>
					<CopySnippet title="Fixed Color">
						<DavinciPic
							type="token"
							network="hedera"
							address={invalidAddress(exampleData.lpToken)}
							lpTokensPosition="merged"
							complexTokenType="lp"
							size={64}
							placeholder={"#ccc"}
							failureEffect={"placeholder"}
							loadingEffect={"pulse:#ccc"}
							delayResponseTime={5000}
						/>
					</CopySnippet>
					<CopySnippet title="Random Color">
						<DavinciPic
							type="token"
							network="hedera"
							address={invalidAddress(exampleData.lpToken)}
							lpTokensPosition="intimate"
							complexTokenType="lp"
							size={64}
							placeholder={"randomColor"}
							failureEffect={"placeholder"}
							loadingEffect={"pulse:#ccc"}
							delayResponseTime={5000}
						/>
					</CopySnippet>
					<CopySnippet title="Default Question Mark Bright">
						<DavinciPic
							type="token"
							network="hedera"
							address={invalidAddress(exampleData.lpToken)}
							complexTokenType="lp"
							size={64}
							placeholder={"questionMarkBright"}
							failureEffect={"placeholder"}
							loadingEffect={"pulse:#ccc"}
							delayResponseTime={3000}
						/>
					</CopySnippet>
					<CopySnippet title="Default Exclamation Mark Dark">
						<DavinciPic
							type="token"
							network="hedera"
							address={invalidAddress(exampleData.lpToken)}
							complexTokenType="lp"
							size={64}
							placeholder={"exclamationMarkDark"}
							failureEffect={"placeholder"}
							loadingEffect={"pulse:#ccc"}
							delayResponseTime={3000}
						/>
					</CopySnippet>
					<CopySnippet title="Custom Url">
						<DavinciPic
							type="token"
							network="hedera"
							address={invalidAddress(exampleData.lpToken)}
							complexTokenType="lp"
							size={64}
							placeholder={"url(https://res.cloudinary.com/dq7dgsuu8/image/upload/v1684562031/icons/hedera_token_64_lhaycq.png)"}
							failureEffect={"placeholder"}
							loadingEffect={"pulse:#ccc"}
							delayResponseTime={3000}
						/>
					</CopySnippet>
					<CopySnippet title="Custom Url & Merged">
						<DavinciPic
							type="token"
							network="hedera"
							address={invalidAddress(exampleData.lpToken)}
							complexTokenType="lp"
							lpTokensPosition="merged"
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
