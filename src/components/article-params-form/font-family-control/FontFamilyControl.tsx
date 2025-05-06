import { Select } from 'src/ui/select';
import { OptionType, fontFamilyOptions } from 'src/constants/articleProps';

export const FontFamilyControl = ({
	selected,
	onChange,
}: {
	selected: OptionType;
	onChange: (option: OptionType) => void;
}) => {
	return (
		<Select
			title='шрифт'
			selected={selected}
			options={fontFamilyOptions}
			placeholder='Выберите шрифт'
			onChange={onChange}
		/>
	);
};
