export type AccordionProps = {
  title: string;
  content: ReactNode;
  isOpen: boolean;
	color?: string;
  onToggle: () => void;
};