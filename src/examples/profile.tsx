import { exampleData, invalidAddress } from "../App";
import { CopySnippet } from "../Copy";
import DavinciPic from "../davinciPics";

export const ProfileExamples = () => {
	return (
		<article>
			<h1> Profile </h1>

			<main>
				<section>
					<CopySnippet title="Default">
						<DavinciPic type="profile" shape="square" network="hedera" address={exampleData.account} size={64} />
					</CopySnippet>
					<CopySnippet title="Circle Shape">
						<DavinciPic type="profile" shape="circle" network="hedera" address={exampleData.account} size={64} />
					</CopySnippet>
					<CopySnippet title="Smooth Square">
						<DavinciPic type="profile" shape="smoothSquare" network="hedera" address={exampleData.account} size={64} />
					</CopySnippet>
					<CopySnippet title="Alternative Data">
						<DavinciPic
							type="profile"
							shape="square"
							network="hedera"
							address="0.0.64216"
							size={64}
							loadingEffect={"pulse:randomColor"}
							delayResponseTime={5000}
							dataTitle="Alternative Title"
							dataPicUrl={exampleData.alternativePic}
						/>
					</CopySnippet>
					<CopySnippet title="Offline Mode">
						<DavinciPic
							type="profile"
							shape="square"
							network="hedera"
							address="0.0.64216"
							offlineMode
							size={64}
							dataTitle="Alternative Title"
							dataPicUrl={exampleData.alternativePic}
						/>
					</CopySnippet>
					<CopySnippet title="red Stroke 4px">
						<DavinciPic
							type="profile"
							shape="smoothSquare"
							network="hedera"
							address={exampleData.account}
							size={64}
							strokeWidth={4}
							strokeColor="#ff4747"
						/>
					</CopySnippet>
					<CopySnippet title="Size 100px">
						<DavinciPic type="profile" shape="smoothSquare" network="hedera" address={exampleData.account} size={100} />
					</CopySnippet>
					<CopySnippet title="Size 20px">
						<DavinciPic type="profile" shape="smoothSquare" network="hedera" address={exampleData.account} size={20} />
					</CopySnippet>
				</section>

				<h4>Loading Effects</h4>
				<section>
					<CopySnippet title="Hide">
						<DavinciPic
							type="profile"
							shape="square"
							network="hedera"
							address={exampleData.account}
							size={64}
							loadingEffect={"hide"}
							delayResponseTime={50000}
						/>
					</CopySnippet>
					<CopySnippet title="Transparent">
						<DavinciPic
							type="profile"
							shape="square"
							network="hedera"
							address={exampleData.account}
							size={64}
							loadingEffect={"transparent"}
							delayResponseTime={50000}
						/>
					</CopySnippet>
					<CopySnippet title="Fixed Color">
						<DavinciPic
							type="profile"
							shape="square"
							network="hedera"
							address={exampleData.account}
							size={64}
							loadingEffect={"#ccc"}
							delayResponseTime={50000}
						/>
					</CopySnippet>
					<CopySnippet title="Random Color">
						<DavinciPic
							type="profile"
							shape="square"
							network="hedera"
							address={exampleData.account}
							size={64}
							loadingEffect={"randomColor"}
							delayResponseTime={50000}
						/>
					</CopySnippet>
					<CopySnippet title="Default Bright">
						<DavinciPic
							type="profile"
							shape="square"
							network="hedera"
							address={exampleData.account}
							size={64}
							placeholder={"defaultBright"}
							loadingEffect={"placeholder"}
							delayResponseTime={50000}
						/>
					</CopySnippet>
					<CopySnippet title="Default Dark">
						<DavinciPic
							type="profile"
							shape="square"
							network="hedera"
							address={exampleData.account}
							size={64}
							placeholder={"defaultDark"}
							loadingEffect={"placeholder"}
							delayResponseTime={50000}
						/>
					</CopySnippet>
					<CopySnippet title="Custom Url">
						<DavinciPic
							type="profile"
							shape="square"
							network="hedera"
							address={exampleData.account}
							size={64}
							loadingEffect={"url(https://media.tenor.com/wpSo-8CrXqUAAAAi/loading-loading-forever.gif)"}
							delayResponseTime={50000}
						/>
					</CopySnippet>
					<CopySnippet title="Pulse Random Color">
						<DavinciPic
							type="profile"
							shape="square"
							network="hedera"
							address={exampleData.account}
							size={64}
							loadingEffect={"pulse:randomColor"}
							delayResponseTime={50000}
						/>
					</CopySnippet>
					<CopySnippet title="Pulse Custom Url">
						<DavinciPic
							type="profile"
							shape="square"
							network="hedera"
							address={exampleData.account}
							size={64}
							loadingEffect={"pulse:url(https://media.tenor.com/wpSo-8CrXqUAAAAi/loading-loading-forever.gif)"}
							delayResponseTime={50000}
						/>
					</CopySnippet>
					<CopySnippet title="Pulse Default No Logo Picture">
						<DavinciPic
							type="profile"
							shape="square"
							network="hedera"
							address={exampleData.account}
							size={64}
							placeholder={"default"}
							loadingEffect={"pulse:placeholder"}
							delayResponseTime={50000}
						/>
					</CopySnippet>
				</section>

				<h4>Failure Effects</h4>
				<section>
					<CopySnippet title="Hide">
						<DavinciPic
							type="profile"
							shape="square"
							network="hedera"
							address={invalidAddress(exampleData.account)}
							size={64}
							loadingEffect={"pulse:#ccc"}
							failureEffect={"hide"}
							delayResponseTime={3000}
						/>
					</CopySnippet>
					<CopySnippet title="Transparent">
						<DavinciPic
							type="profile"
							shape="square"
							network="hedera"
							address={invalidAddress(exampleData.account)}
							size={64}
							failureEffect={"transparent"}
							loadingEffect={"pulse:#ccc"}
							delayResponseTime={3000}
						/>
					</CopySnippet>
					<CopySnippet title="Fixed Color">
						<DavinciPic
							type="profile"
							shape="square"
							network="hedera"
							address={invalidAddress(exampleData.account)}
							size={64}
							placeholder={"#ccc"}
							failureEffect={"placeholder"}
							loadingEffect={"pulse:#ccc"}
							delayResponseTime={5000}
						/>
					</CopySnippet>
					<CopySnippet title="Random Color">
						<DavinciPic
							type="profile"
							shape="smoothSquare"
							network="hedera"
							address={invalidAddress(exampleData.account)}
							size={64}
							placeholder={"randomColor"}
							failureEffect={"placeholder"}
							loadingEffect={"pulse:#ccc"}
							delayResponseTime={5000}
						/>
					</CopySnippet>
					<CopySnippet title="Default Bright">
						<DavinciPic
							type="profile"
							shape="square"
							network="hedera"
							address={invalidAddress(exampleData.account)}
							size={64}
							placeholder={"default Bright"}
							failureEffect={"placeholder"}
							loadingEffect={"pulse:#ccc"}
							delayResponseTime={3000}
						/>
					</CopySnippet>
					<CopySnippet title="Default Dark">
						<DavinciPic
							type="profile"
							shape="square"
							network="hedera"
							address={invalidAddress(exampleData.account)}
							size={64}
							placeholder={"defaultDark"}
							failureEffect={"placeholder"}
							loadingEffect={"pulse:#ccc"}
							delayResponseTime={3000}
						/>
					</CopySnippet>
					<CopySnippet title="Custom Url">
						<DavinciPic
							type="profile"
							shape="square"
							network="hedera"
							address={invalidAddress(exampleData.account)}
							size={64}
							placeholder={"url(https://i.pinimg.com/736x/ff/a0/9a/ffa09aec412db3f54deadf1b3781de2a.jpg)"}
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
