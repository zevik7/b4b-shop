import HomeNavigation from "./index.js";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Routes, Route, BrowserRouter } from "react-router-dom";

test("HomeNavigation should render", () => {
  render(
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomeNavigation />} />
      </Routes>
    </BrowserRouter>
  );
  expect(screen.getByText("Bicycles")).toBeInTheDocument();
  expect(screen.getByText("Home")).toBeInTheDocument();
});
