import { Select } from 'src/ui/select';
import { OptionType, contentWidthArr } from 'src/constants/articleProps';

export const ContentWidthControl = ({
	selected,
	onChange,
}: {
	selected: OptionType;
	onChange: (option: OptionType) => void;
}) => {
	return (
		<Select
			title='ширина контента'
			selected={selected}
			options={contentWidthArr}
			placeholder='выберите ширину контента'
			onChange={onChange}
		/>
	);
};
