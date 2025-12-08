export type Item = {
  id: string | number;
  title: string;
  content: React.ReactNode;
};

export type AccordionGroupProps = {
  items: Item[];
	colorItem?: string;
};