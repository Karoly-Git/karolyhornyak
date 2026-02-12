
import "@/app/layout/layout.styles.scss";
import DesktopNavigation from "@/features/navigation/components/DesktopNavigation";
import MobileNavigation from "@/features/navigation/components/MobileNavigation";

export default function Header() {
    return (
        <header>
            <DesktopNavigation />
            <MobileNavigation />
        </header>
    );
}
