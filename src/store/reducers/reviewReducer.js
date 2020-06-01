const initialState = {
  review: [],
  selectedReview: null,
};

export default function (state = initialState, action = {}) {
  switch (action.type) {
<<<<<<< HEAD
=======


>>>>>>> 74bf077e76c8f96b26c2e69ab178175b1bc6c8b2
    case 'ADD':
      return {
        ...state,
        selectedReview: action.review,
        review: [...state.review, action.review],
      };

    case 'EDIT':
      return {
        ...state,
        review: state.review.map(review => {
          if (review._id === action.review._id) return action.review;
          action.review.isEditMode = false;
          return review;
        }),
      };
    case 'DELETE':
      console.log(state);

      return {
        ...state,
        review: state.review.filter(review => review.id !== action.reviewId),
      };
    case 'SET_REVIEWS':
<<<<<<< HEAD
      console.log(action.review);
=======
>>>>>>> 74bf077e76c8f96b26c2e69ab178175b1bc6c8b2
      return { ...state, review: action.review };

    case 'SET_REVIEW':

      return {
        ...state,
        selectedReview: action.review,
      };

    default:
      return state;
  }
}
