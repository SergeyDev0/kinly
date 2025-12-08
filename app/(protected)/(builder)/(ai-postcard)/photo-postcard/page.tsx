import { AiPostcardClient } from "@/components/aiPostcardClient/ui/AiPostcardClient";

export default function PhotoPostcardPage() {
	return (
		<div className="flex flex-col flex-1 min-h-0">
			<AiPostcardClient variant="photo" />
		</div>
	);
}
