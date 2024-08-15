export interface AppProps {
	children?: React.ReactNode; // Make children optional
}

export interface Field {
	id?: string;
	url?: string;
	preparationComment?: boolean;
	doneBtn?: boolean;
	decision?: boolean;
	priceDone?: boolean;
	finishBtn?: boolean;
	children?: any;
}

export interface ListProps {
	title: string;
	fields: Field[];
	className?: string;
	titleColor?: string;
}
