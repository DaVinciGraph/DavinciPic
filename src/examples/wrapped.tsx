import { exampleData, invalidAddress } from "../App";
import { CopySnippet } from "../Copy";
import DavinciPic from "../davinciPics";

export const WrappedExamples = () => {
	return (
		<article>
			<h1> Wrapped Token </h1>

			<main>
				<section>
					<CopySnippet title="With No Context">
						<DavinciPic type="token" network="hedera" address={exampleData.wrappedToken} context="none" size={64} />
					</CopySnippet>
					<CopySnippet title="With App Context">
						<DavinciPic type="token" network="hedera" address={exampleData.wrappedToken} context="app" size={64} />
					</CopySnippet>
					<CopySnippet title="With Network Context">
						<DavinciPic type="token" network="hedera" address={exampleData.wrappedToken} context="network" size={64} />
					</CopySnippet>
					<CopySnippet title="Alternative Data">
						<DavinciPic
							type="token"
							network="hedera"
							complexTokenType="wrapped"
							address={invalidAddress(exampleData.wrappedToken)}
							size={64}
							context="none"
							loadingEffect={"pulse:randomColor"}
							dataTitle="Alternative Title"
							dataPicUrl={exampleData.alternativePic}
							delayResponseTime={5000}
						/>
					</CopySnippet>
					<CopySnippet title="Alternative Data With Context">
						<DavinciPic
							type="token"
							network="hedera"
							address={invalidAddress(exampleData.wrappedToken)}
							complexTokenType="wrapped"
							size={64}
							delayResponseTime={5000}
							loadingEffect={"pulse:randomColor"}
							dataTitle="Alternative Title"
							dataPicUrl={exampleData.alternativePic}
							dataContextTitle="Alternative Title"
							dataContextPicUrl={exampleData.alternativePic}
						/>
					</CopySnippet>
					<CopySnippet title="Offline Mode">
						<DavinciPic
							type="token"
							network="hedera"
							address={invalidAddress(exampleData.wrappedToken)}
							size={64}
							context="network"
							offlineMode
							dataTitle="Alternative Title"
							dataPicUrl={exampleData.alternativePic}
							dataContextTitle="Alternative Title"
							dataContextPicUrl={exampleData.alternativePic}
						/>
					</CopySnippet>
					<CopySnippet title="Green Stroke 4px">
						<DavinciPic type="token" network="hedera" address={exampleData.wrappedToken} size={64} strokeWidth={4} strokeColor="green" />
					</CopySnippet>
					<CopySnippet title="Different Context position">
						<DavinciPic
							type="token"
							network="hedera"
							address={exampleData.wrappedToken}
							size={64}
							context="app"
							contextPosition="topLeft"
							strokeWidth={4}
							strokeColor="green"
						/>
					</CopySnippet>
					<CopySnippet title="Size 100px">
						<DavinciPic type="token" network="hedera" address={exampleData.wrappedToken} size={100} />
					</CopySnippet>
					<CopySnippet title="Size 20px">
						<DavinciPic type="token" network="hedera" address={exampleData.wrappedToken} size={20} context="app" />
					</CopySnippet>
					<CopySnippet title="Censored Inappropriate">
						<DavinciPic type="token" network="hedera" address="TestWrapped" censor="inappropriate" size={64} context="app" />
					</CopySnippet>
				</section>

				<h4>Loading Effects</h4>
				<section>
					<CopySnippet title="Hide">
						<DavinciPic
							type="token"
							network="hedera"
							address={exampleData.wrappedToken}
							complexTokenType="wrapped"
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
							address={exampleData.wrappedToken}
							complexTokenType="wrapped"
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
							address={exampleData.wrappedToken}
							complexTokenType="wrapped"
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
							address={exampleData.wrappedToken}
							complexTokenType="wrapped"
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
							address={exampleData.wrappedToken}
							complexTokenType="wrapped"
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
							address={exampleData.wrappedToken}
							complexTokenType="wrapped"
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
							address={exampleData.wrappedToken}
							complexTokenType="wrapped"
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
							address={exampleData.wrappedToken}
							complexTokenType="wrapped"
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
							address={exampleData.wrappedToken}
							complexTokenType="wrapped"
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
							address={exampleData.wrappedToken}
							complexTokenType="wrapped"
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
							address={invalidAddress(exampleData.wrappedToken)}
							complexTokenType="wrapped"
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
							address={invalidAddress(exampleData.wrappedToken)}
							complexTokenType="wrapped"
							context="network"
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
							address={invalidAddress(exampleData.wrappedToken)}
							context="network"
							complexTokenType="wrapped"
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
							address={invalidAddress(exampleData.wrappedToken)}
							context="network"
							complexTokenType="wrapped"
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
							address={invalidAddress(exampleData.wrappedToken)}
							context="network"
							complexTokenType="wrapped"
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
							address={invalidAddress(exampleData.wrappedToken)}
							context="network"
							complexTokenType="wrapped"
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
							address={invalidAddress(exampleData.wrappedToken)}
							context="network"
							complexTokenType="wrapped"
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
