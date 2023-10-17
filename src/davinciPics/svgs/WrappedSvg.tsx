import { WrappedTokenEntity } from "../types/entities";
import { getContextData } from "../modules/helpers";
import { DavinciPicStatus, DavinciPicTokenProps } from "../types/props";
import GenerateContextualTokenSVG from "./contextualSvg";

const GenerateWrappedTokenSVG: React.FC<{
	data: WrappedTokenEntity;
	options: DavinciPicTokenProps;
	status: DavinciPicStatus;
}> = ({ data, options, status }): React.ReactElement => {
	const contextData = getContextData(options, data);
	return (
		<GenerateContextualTokenSVG
			title={data.originalToken?.title}
			pictureUrl={data.originalToken?.pic}
			sensitivity={data.sensitivity}
			contextSupportingBackgroundColor={contextData.supportingBackgroundColor}
			supportingBackgroundColor={data.originalToken.supportingBackgroundColor}
			contextTitle={contextData.title}
			contextPictureUrl={contextData.pic}
			options={options}
			status={status}
		/>
	);
};

export default GenerateWrappedTokenSVG;
