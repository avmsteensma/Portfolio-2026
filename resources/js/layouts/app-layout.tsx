import type { ReactNode } from "react";

import Header from '@/components/header';
import Footer from "@/components/footer";

export default function AppLayout({ children }: { children: ReactNode }) {
    return (
        <div>
            <Header />
            <main className="flex min-h-screen">{children}</main>
            <Footer />
        </div>
    )
}