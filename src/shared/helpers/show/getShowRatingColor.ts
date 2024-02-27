export const getShowRatingColor = (rating: number): string => {
  if (rating >= 7) {
    return 'successColor';
  } else if (rating < 5) {
    return 'dangerColor';
  } else {
    return 'defaultColor';
  }
};
