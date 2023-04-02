import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CharacterFilters from ".";

describe("CharacterFilters", () => {
  it("should call onFilterChange when a filter is selected", () => {
    const onFilterChange = jest.fn();
    const { getByLabelText } = render(
      <CharacterFilters onFilterChange={onFilterChange} />
    );

    fireEvent.change(getByLabelText("Sexo"), { target: { value: "male" } });
    expect(onFilterChange).toHaveBeenCalledWith("gender", "male");
  });
});
