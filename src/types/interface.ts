export interface AppProps {
	children?: React.ReactNode; // Make children optional
}

export interface Field {
	name: string;
	url?: string;
	preparationComment?: boolean;
}

export interface ListProps {
	title: string;
	fields: Field[];
	className?: string;
	titleColor?: string;
}
