import CustomPagination from "./index.js";
import "./matchMedia";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

test("Pagination should render", () => {
  render(
    <CustomPagination total={2} pageSize={1} current={1} onChange={() => {}} />
  );
  expect(screen.getByText("1")).toBeInTheDocument();
  expect(screen.getByText("2")).toBeInTheDocument();
});

test("Pagination should be clickable", async () => {
  const user = userEvent.setup();
  const handleClick = jest.fn();
  render(
    <CustomPagination total={2} pageSize={1} current={1} onChange={handleClick}>
      Click me
    </CustomPagination>
  );
  await user.click(screen.getByTitle("Next Page"));
  expect(handleClick).toHaveBeenCalled();
});
