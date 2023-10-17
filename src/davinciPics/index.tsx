import { CSSProperties, useEffect, useRef, useState } from "react";
import { DavinciPicProps, DavinciPicStatus } from "./types/props";
import { DavinciPicEntity } from "./types/entities";
import PicsSvgGenerator from "./modules/svgGenerator";
import davinciPicsLoad from "./modules/dataLoader";
import initializeData, { getPlaceholders } from "./modules/dataInitializer";
import finalizeData from "./dataFinalizer";
import { isEntityResponseEmpty } from "./types/guards";

export let davinciPicsConfig = {
	apiUrl: "https://davincigraph.art/api/v1",
	counter: 0,
	colorRegex: /#(?:[0-9A-Fa-f]{3}){1,2}|rgb\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*\)|transparent/,
};

const DavinciPic: React.FC<DavinciPicProps> = (props) => {
	const elementRef = useRef(null);
	const [data, setData] = useState<DavinciPicEntity>();
	const [status, setStatus] = useState<DavinciPicStatus>("loading");
	const [opacity, setOpacity] = useState(1);
	const [placeholders] = useState(
		getPlaceholders(
			((!props.loadingEffect || props.loadingEffect.endsWith("placeholder") ? props.placeholder : props.loadingEffect) as string) ||
				"transparent",
			props.type
		)
	);

	useEffect(() => {
		// Initialize observer
		const observer = new IntersectionObserver(handleIntersection, {
			root: null,
			rootMargin: "200px 0px",
			threshold: 0.1,
		});

		// Start observing
		if (elementRef.current) {
			observer.observe(elementRef.current);
		}

		// Cleanup
		return () => {
			if (elementRef.current) {
				observer.unobserve(elementRef.current);
			}
		};
	}, []);

	useEffect(() => {
		let interval: any;
		if (props.loadingEffect?.startsWith("pulse") && status === "loading") {
			interval = setInterval(() => {
				setOpacity((prev) => (prev === 1 ? 0.5 : 1));
			}, 1000);
		}

		return () => {
			setOpacity(1);
			clearInterval(interval);
		};
	}, [status]);

	const handleIntersection = async (entries: IntersectionObserverEntry[], observer: IntersectionObserver): Promise<void> => {
		for (const entry of entries) {
			if (entry.isIntersecting) {
				try {
					let initalData = initializeData(props, placeholders);
					setData(initalData);

					// for test or showcase purposes
					if (props.delayResponseTime) await delay();

					if (props.offlineMode) {
						setStatus("success");
						setData(finalizeData(initalData, {}, props, placeholders));
					} else {
						const remoteData = await davinciPicsLoad(props);
						setStatus(!isEntityResponseEmpty(remoteData) || props.dataPicUrl ? "success" : "failed");
						setData(finalizeData(initalData, remoteData, props, placeholders));
					}
				} catch (error: any) {
					setStatus("interrupted");
					console.error(`DavinciPics: ${error.message}`);
				}

				observer.unobserve(entry.target);
			}
		}
	};

	const delay = () => {
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve(true);
			}, props.delayResponseTime);
		});
	};

	const style: CSSProperties = { display: "inline-block", verticalAlign: "top", transition: "opacity 1s", opacity };

	if (props.type === "banner") {
		style.width = "100%";
	} else {
		style.width = props.size;
		style.height = props.size;
	}

	const mustHide =
		(props.loadingEffect === "hide" && status === "loading") ||
		(props.failureEffect === "hide" && status === "failed") ||
		status === "interrupted";

	const mustGetTransparent =
		(props.loadingEffect === "transparent" && status === "loading") || (props.failureEffect === "transparent" && status === "failed") || !data;

	return (
		<span ref={elementRef}>
			{mustHide ? (
				<></>
			) : (
				<span style={style}>{mustGetTransparent ? <></> : <PicsSvgGenerator data={data} options={props} status={status} />}</span>
			)}
		</span>
	);
};

DavinciPic.defaultProps = {
	size: 100,
	strokeWidth: 0,
	strokeColor: "gray",
	offlineMode: false,
	censor: "copyright-violated",
	placeholder: "default",
	context: "app",
	contextPosition: "bottomRight",
	loadingEffect: "transparent",
	failureEffect: "placeholder",
};

export default DavinciPic;
