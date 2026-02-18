import { DesktopNavigation } from "@/features/navigation";
import "./footer.scss";

export default function Footer() {
    return (
        <footer>
            <DesktopNavigation />

            <p className="copyright">&copy; Karoly Hornyak</p>
        </footer>
    )
}
