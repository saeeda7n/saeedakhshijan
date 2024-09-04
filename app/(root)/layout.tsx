import React from "react";
import Navbar from "@/components/navbar";

const Layout = ({ children }: RootLayoutProps) => {
 return (
  <React.Fragment>
   <Navbar />
   {children}
  </React.Fragment>
 );
};

export default Layout;
