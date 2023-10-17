import { useEffect, useState, Children, isValidElement, ReactNode, ReactElement, FC, JSXElementConstructor } from "react";
import { DavinciPicProps } from "./davinciPics/types/props";

const Icon = () => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="16" height="16">
			<path
				d="M18.5 5C15.480226 5 13 7.4802259 13 10.5L13 32.5C13 35.519774 15.480226 38 18.5 38L34.5 38C37.519774 38 40 35.519774 40 32.5L40 10.5C40 7.4802259 37.519774 5 34.5 5L18.5 5 z M 18.5 8L34.5 8C35.898226 8 37 9.1017741 37 10.5L37 32.5C37 33.898226 35.898226 35 34.5 35L18.5 35C17.101774 35 16 33.898226 16 32.5L16 10.5C16 9.1017741 17.101774 8 18.5 8 z M 11 10L9.78125 10.8125C8.66825 11.5545 8 12.803625 8 14.140625L8 33.5C8 38.747 12.253 43 17.5 43L30.859375 43C32.197375 43 33.4465 42.33175 34.1875 41.21875L35 40L17.5 40C13.91 40 11 37.09 11 33.5L11 10 z"
				fill="#5B5B5B"
			/>
		</svg>
	);
};

const Copy = ({ children }: { children: string }) => {
	const [showSuccess, setShowSuccess] = useState(false);
	const onClick = () => {
		navigator.clipboard
			.writeText(children)
			.then(function () {
				setShowSuccess(true);
			})
			.catch(function (err) {
				console.error("Unable to copy text to clipboard", err);
			});
	};

	useEffect(() => {
		if (showSuccess) {
			setTimeout(() => {
				setShowSuccess(false);
			}, 3000);
		}
	}, [showSuccess]);

	return (
		<button onClick={onClick} className="copy_button" title="Copy Snippet">
			{showSuccess ? <span>Copied</span> : ""}
			<Icon />
		</button>
	);
};

export default Copy;

export const generateJSXString = (element: ReactElement<DavinciPicProps>) => {
	if (typeof element.type === "string") return <></>;

	let jsxString = `<${element.type.name}`;
	for (const [key, value] of Object.entries(element.props)) {
		if (key !== "children" && key !== "delayResponseTime") {
			jsxString += typeof value === "string" ? ` ${key}="${value}"` : ` ${key}={${JSON.stringify(value)}}`;
		}
	}
	jsxString += " />";
	return jsxString;
};

export const CopySnippet: FC<{
	title: string;
	children: ReactNode;
}> = ({ title, children }) => {
	const [copyContent, setCopyContent] = useState<string>("");

	useEffect(() => {
		let newJsxStrings: string[] = [];
		Children.forEach(children, (child) => {
			if (isValidElement(child)) {
				const jsxString = generateJSXString(child as any);
				newJsxStrings.push(jsxString as any);
			}
		});

		setCopyContent(newJsxStrings.join("\n"));
	}, [children]);

	return (
		<div>
			{children}
			<div>
				{title}
				<Copy>{copyContent}</Copy>
			</div>
		</div>
	);
};
