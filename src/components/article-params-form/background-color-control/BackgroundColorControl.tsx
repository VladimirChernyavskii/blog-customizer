import { Select } from 'src/ui/select';
import { OptionType, backgroundColors } from 'src/constants/articleProps';

export const BackgroundColorControl = ({
	selected,
	onChange,
}: {
	selected: OptionType;
	onChange: (option: OptionType) => void;
}) => {
	return (
		<Select
			title='цвет фона'
			selected={selected}
			options={backgroundColors}
			placeholder='выберите цвет фона'
			onChange={onChange}
		/>
	);
};
