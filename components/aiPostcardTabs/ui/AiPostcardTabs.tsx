"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { GroupTabs } from "@/components/groupTabs/ui/GroupTabs";

const tabPaths = ["/photo-postcard", "/video-postcard"];
const tabsItems = ["Фотооткрытка", "Видеооткрытка"];

const getTabIndexFromPath = (pathname: string | null) => {
  const index = tabPaths.findIndex((path) =>
    pathname ? pathname === path || pathname.startsWith(`${path}/`) : false
  );
  return index === -1 ? 0 : index;
};

export const AiPostcardTabs = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState(() => getTabIndexFromPath(pathname));

  const isTabsRoute = tabPaths.some(
    (p) => pathname === p || pathname.startsWith(`${p}/`)
  );

  useEffect(() => {
    const index = getTabIndexFromPath(pathname);
    if (index !== activeTab) setActiveTab(index);
  }, [pathname, activeTab]);

  const handleTabChange = (nextTab: number | ((prev: number) => number)) => {
    const index = typeof nextTab === "function" ? nextTab(activeTab) : nextTab;
    if (index === activeTab) return;
    setActiveTab(index);
    const targetPath = tabPaths[index];
    if (targetPath && pathname !== targetPath) router.push(targetPath);
  };

  if (!isTabsRoute) return null;

  return (
    <GroupTabs
      tabs={tabsItems}
      activeTab={activeTab}
      setActiveTabAction={handleTabChange}
      className="mb-6"
    />
  );
};
