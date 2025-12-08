"use client";

import { ReactNode, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Header } from "@/components/header/ui/Header";
import { WrapperPage } from "@/components/wrapperPage/ui/WrapperPage";
import { GroupTabs } from "@/components/groupTabs/ui/GroupTabs";

const tabPaths = ["/photo-postcard", "/video-postcard"];
const tabsItems = ["Фотооткрытка", "Видеооткрытка"];

const getTabIndexFromPath = (pathname: string | null) => {
  const index = tabPaths.findIndex((path) =>
    pathname ? pathname === path || pathname.startsWith(`${path}/`) : false
  );
  return index === -1 ? 0 : index;
};

export default function AiPostcardLayout({
  children,
}: {
  children: ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const currentPath = pathname ?? "";
  const [activeTab, setActiveTab] = useState(() => getTabIndexFromPath(pathname));
  const shouldShowTabs = tabPaths.some((p) => currentPath === p);
  const headerTitle = (() => {
    if (currentPath.startsWith("/photo-postcard/result")) return "Скачать фотооткрытку";
    if (currentPath.startsWith("/video-postcard/result")) return "Скачать видеооткрытку";
    if (
      currentPath.startsWith("/photo-postcard/create") ||
      currentPath.startsWith("/photo-postcard/generate")
    ) {
      return "Создать фотооткрытку";
    }
    if (
      currentPath.startsWith("/video-postcard/create") ||
      currentPath.startsWith("/video-postcard/generate")
    ) {
      return "Создать видеооткрытку";
    }
    return "Создать открытку";
  })();

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

  return (
    <div className="flex flex-col grow min-h-0 gap-6 max-md:gap-0">
      <Header title={headerTitle} />
      <WrapperPage>
        {shouldShowTabs && (
          <GroupTabs
            tabs={tabsItems}
            activeTab={activeTab}
            setActiveTabAction={handleTabChange}
            className="mb-6 max-ssm:mb-4"
          />
        )}
        {children}
      </WrapperPage>
    </div>
  );
}
