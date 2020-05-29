const initialState = {
  review: [],
  selectedReview: null,
};

export default function (state = initialState, action = {}) {

  switch (action.type) {
    case 'ADD':
      return {
        ...state,
        review: state.review.map(review => {
          if (review._id === action.review._id) return action.review;
          return review;
        }),
      };
    case 'EDIT':
      return {
        ...state,
        review: state.review.map(review => {
          if (review._id === action.review._id) return action.review;
          action.review.currTrail.isEditMode = false
          return review;
        }),
      };
    case 'DELETE':
      return {
        ...state,
        review: state.review.filter(review => review._id !== action.reviewId),
      };
    case 'SET_REVIEWS':
      return {
        ...state,
        review: action.review
      };
    case 'SET_REVIEW':
      return {
        ...state,
        selectedReview: action.review,
      };

    default:
      return state;
  }
}
