import Navbar from "@/Components/Navbar";
import React, { Children } from "react";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <Navbar />
            <div className="container mt-4">
                {children}
            </div>
        </div>
    );
};

export default AppLayout;
