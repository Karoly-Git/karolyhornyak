import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Resume from "./index";

// Mock the .docx file import
vi.mock("@/assets/documents/cv/myCV_v8.docx", () => ({
    default: "/mock-cv.docx",
}));

describe("Resume", () => {
    it("Download CV link is correct", () => {
        // Render component
        render(<Resume />);

        // Find the link by accessible role and text
        const link = screen.getByRole("link", { name: /download cv/i });

        // Assertions
        expect(link).toHaveAttribute("href", "/mock-cv.docx");
        expect(link).toHaveAttribute("download", "Karoly Hornyak CV.docx");
        expect(link).toHaveAttribute("rel", "noopener noreferrer");
    });
});