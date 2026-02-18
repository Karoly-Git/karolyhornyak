import { DesktopNavigation, MobileNavigation } from "@/features/navigation";
import "./header.scss";

export default function Header() {
    return (
        <header>
            <DesktopNavigation />
            <MobileNavigation />
        </header>
    );
}
