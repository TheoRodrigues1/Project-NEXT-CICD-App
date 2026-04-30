import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";

describe("Button", () => {
  it("renderiza o label corretamente", () => {
    render(<Button label="Clique aqui" />);
    expect(screen.getByRole("button", { name: "Clique aqui" })).toBeInTheDocument();
  });

  it("chama onClick ao ser clicado", async () => {
    const handleClick = vi.fn();
    render(<Button label="Testar" onClick={handleClick} />);
    await userEvent.click(screen.getByRole("button", { name: "Testar" }));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("aplica a variante secondary corretamente", () => {
    render(<Button label="Secundário" variant="secondary" />);
    const btn = screen.getByRole("button", { name: "Secundário" });
    expect(btn).toHaveClass("bg-gray-200");
  });

  it("aplica a variante primary por padrão", () => {
    render(<Button label="Primário" />);
    const btn = screen.getByRole("button", { name: "Primário" });
    expect(btn).toHaveClass("bg-blue-600");
  });
});
