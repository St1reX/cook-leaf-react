export const handleSortChange = (newSort, setFilters) => {
  setFilters((prevFilters) => ({
    ...prevFilters,
    sortBy: {
      ...prevFilters.sortBy,
      value: newSort,
    },
  }));
};

export const handleDifficultyLevelChange = (newLevel, setFilters) => {
  setFilters((prevFilters) => ({
    ...prevFilters,
    difficultyLevel: {
      ...prevFilters.difficultyLevel,
      value: newLevel,
    },
  }));
};

export const handlePreparationTimeChange = (newTime, setFilters) => {
  setFilters((prevFilters) => ({
    ...prevFilters,
    preparationTime: {
      ...prevFilters.preparationTime,
      value: newTime,
    },
  }));
};
