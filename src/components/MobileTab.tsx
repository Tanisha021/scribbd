import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useApplicationStore } from "@/store/store";

const MobileTab = () => {
  const app = useApplicationStore();

  return (
    <div className="sm:hidden absolute bottom-0 w-full">
      <Tabs
        defaultValue="account"
        value={app.tab}
        onValueChange={app.setTab}
        className="mx-auto flex justify-center p-3"
      >
        <TabsList>
          <TabsTrigger value="Character">Character</TabsTrigger>
          <TabsTrigger value="Play" className="w-20">
            Play
          </TabsTrigger>
        </TabsList>
        {/* <TabsContent value="account">
            Make changes to your account here.
            </TabsContent>
            <TabsContent value="password">Change your password here.</TabsContent> */}
      </Tabs>
    </div>
  );
};

export default MobileTab;
