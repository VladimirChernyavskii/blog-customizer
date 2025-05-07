import { useEffect, useRef, useState } from 'react';
import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';
import { Separator } from 'src/ui/separator';
import { FontFamilyControl } from './font-family-control';
import { FontSizeControl } from './font-size-control';
import { FontColorControl } from './font-color-control';
import { BackgroundColorControl } from './background-color-control';
import { ContentWidthControl } from './content-width-control';
import {
	ArticleStateType,
	defaultArticleState,
} from 'src/constants/articleProps';
import clsx from 'clsx';

import styles from './ArticleParamsForm.module.scss';

type Props = {
	currentState: ArticleStateType;
	onApply: (state: ArticleStateType) => void;
};

export const ArticleParamsForm = ({ currentState, onApply }: Props) => {
	const [formState, setFormState] = useState(currentState);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		onApply(formState);
	};

	const handleReset = () => {
		setFormState(defaultArticleState);
		onApply(defaultArticleState);
	};

	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const containerRef = useRef<HTMLDivElement>(null);

	// Закрытие по клику вне сайдбара
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				containerRef.current &&
				!containerRef.current.contains(event.target as Node)
			) {
				setIsMenuOpen(false);
			}
		};

		if (isMenuOpen) {
			document.addEventListener('mousedown', handleClickOutside);
		} else {
			document.removeEventListener('mousedown', handleClickOutside);
		}

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [isMenuOpen]);

	return (
		<>
			<ArrowButton
				isOpen={isMenuOpen}
				onClick={() => {
					setIsMenuOpen((prev) => !prev);
				}}
			/>
			<aside
				ref={containerRef}
				className={clsx(styles.container, {
					[styles.container_open]: isMenuOpen,
				})}>
				<form
					className={styles.form}
					onSubmit={handleSubmit}
					onReset={handleReset}>
					<FontFamilyControl
						selected={formState.fontFamilyOption}
						onChange={(val) =>
							setFormState({ ...formState, fontFamilyOption: val })
						}
					/>
					<FontSizeControl
						selected={formState.fontSizeOption}
						onChange={(val) =>
							setFormState({ ...formState, fontSizeOption: val })
						}
					/>
					<FontColorControl
						selected={formState.fontColor}
						onChange={(val) => setFormState({ ...formState, fontColor: val })}
					/>
					<Separator />
					<BackgroundColorControl
						selected={formState.backgroundColor}
						onChange={(val) =>
							setFormState({ ...formState, backgroundColor: val })
						}
					/>
					<ContentWidthControl
						selected={formState.contentWidth}
						onChange={(val) =>
							setFormState({ ...formState, contentWidth: val })
						}
					/>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' htmlType='reset' type='clear' />
						<Button title='Применить' htmlType='submit' type='apply' />
					</div>
				</form>
			</aside>
		</>
	);
};
