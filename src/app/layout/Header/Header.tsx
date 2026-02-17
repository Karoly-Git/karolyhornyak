
import "@/app/layout/layout.styles.scss";
import DesktopNavigation from "@/features/navigation/desktop-navigation/DesktopNavigation";
import MobileNavigation from "@/features/navigation/mobile-navigation/MobileNavigation";

export default function Header() {
    return (
        <header>
            <DesktopNavigation />
            <MobileNavigation />
        </header>
    );
}
