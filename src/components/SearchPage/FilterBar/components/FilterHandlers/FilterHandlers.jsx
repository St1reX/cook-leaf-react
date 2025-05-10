export const handleFilterUpdate = (filterName, newValue, setFilters) => {
  setFilters((prevFilters) => ({
    ...prevFilters,
    [filterName]: {
      ...prevFilters[filterName],
      value: newValue,
    },
  }));
};

export const handleFilterDelete = (filterName, setFilters) => {
  setFilters((prevFilters) => ({
    ...prevFilters,
    [filterName]: {
      ...prevFilters[filterName],
      value: null,
    },
  }));
};
