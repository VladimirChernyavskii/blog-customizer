import { Select } from 'src/ui/select';
import { OptionType, fontColors } from 'src/constants/articleProps';

export const FontColorControl = ({
	selected,
	onChange,
}: {
	selected: OptionType;
	onChange: (option: OptionType) => void;
}) => {
	return (
		<Select
			title='цвет шрифта'
			selected={selected}
			options={fontColors}
			placeholder='выберите цвет шрифта'
			onChange={onChange}
		/>
	);
};
