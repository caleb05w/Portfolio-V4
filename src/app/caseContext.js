"use client";
import { createContext, useContext, useState, useEffect } from "react";

const CaseContext = createContext();

export function CaseProvider({ children }) {
    const [caseOpen, setCaseOpen] = useState(false);
    const [caseContent, setCaseContent] = useState("empty");
    const [caseHeight, setCaseHeight] = useState(null);
    const [nav, setNav] = useState(false);

    const [isMobile, setIsMobile] = useState(
        typeof window !== "undefined" && window.innerWidth <= 768
    );

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <CaseContext.Provider value={{
            caseOpen,
            setCaseOpen,
            caseContent,
            setCaseContent,
            caseHeight,
            setCaseHeight,
            nav,
            setNav,
            isMobile,
        }}>
            {children}
        </CaseContext.Provider>
    );
}

export function useCase() {
    return useContext(CaseContext);
}