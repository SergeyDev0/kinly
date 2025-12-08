'use client'
import { GroupTabs } from "@/components/groupTabs/ui/GroupTabs";
import { Row } from "@/components/table/types/Table";
import { Table } from "@/components/table/ui/Table";
import { ColumnDef } from "@tanstack/react-table";
import { useState } from "react";
import { columns, dataReplenishments, dataUseTokens } from "../model/data";

const tabs = ["Использование токенов", "Пополнение"];

export const WalletTable = () => {
	const [selectedTab, setSelectedTab] = useState(0);
	return (
		<>
			<GroupTabs
				activeTab={selectedTab}
				setActiveTabAction={setSelectedTab}
				tabs={tabs}
				background="white"
				className="mb-4"
			/>
			<Table<Row> 
				columns={columns} 
				data={selectedTab === 0 ? dataUseTokens : dataReplenishments} 
			/>
		</>
	);
};