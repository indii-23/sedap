import { createRoot } from "react-dom/client";
import TailwindCSS from "./TailwindCSS";
import './tailwind.css';
import UserForm from "./UserForm";
import HitungGajiForm from "./HitungGajiForm";
import Container from "./Container";

createRoot(document.getElementById("root"))
    .render(
        <div>
            <Container>
                <TailwindCSS/>
                <UserForm/>
                <HitungGajiForm/>
            </Container>
        </div>
    )