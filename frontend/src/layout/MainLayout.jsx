import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer"; 

function MainLayout() {
    return(
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="grow bg-[#BECAD4]">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default MainLayout;