import { RadioGroup } from 'src/ui/radio-group';
import { OptionType, fontSizeOptions } from 'src/constants/articleProps';

export const FontSizeControl = ({
	selected,
	onChange,
}: {
	selected: OptionType;
	onChange: (option: OptionType) => void;
}) => {
	return (
		<RadioGroup
			name='titleSize'
			title='размер шрифта'
			selected={selected}
			options={fontSizeOptions}
			onChange={onChange}
		/>
	);
};
