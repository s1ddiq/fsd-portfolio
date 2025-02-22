import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import React from "react";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex bg-blue-1">
      <Sidebar />
      <div className="flex-1">
        <Header />

        {children}
      </div>
    </div>
  );
};

export default HomeLayout;
