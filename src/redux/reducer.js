let initialState = {
  selectedMainCategory: '',
  questionsAndAnswers: [],
  questionsAndAnswersA2: [],
  questionsAndAnswersA5: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SELECT_MAIN_CATEGORY':
      return {
        ...state,
        selectedMainCategory: action.payload
      }

    case 'SAVE_QUESTION_AND_ANSWER':
      return {
        ...state,
        questionsAndAnswers: [
          ...state.questionsAndAnswers,
          {
            question: action.question,
            answer: action.answer,
            color: action.color,
          }
        ]
      };

    case 'SAVE_QUESTION_AND_ANSWER_A2':
      return {
        ...state,
        questionsAndAnswersA2: [
          ...state.questionsAndAnswersA2,
          {
            parent: action.parent,
            question: action.question,
            answer: action.answer,
            color: action.color,
          }
        ]
      };

    case 'SAVE_QUESTION_AND_ANSWER_A5':
      return {
        ...state,
        questionsAndAnswersA5: [
          ...state.questionsAndAnswersA5,
          {
            parent: action.parent,
            question: action.question,
            answer: action.answer,
            color: action.color,
          }
        ]
      };

    case 'REMOVE_QUESTION_AND_ANSWER':
      return {
        ...state,
        questionsAndAnswers: state.questionsAndAnswers.filter(item => item.answer !== action.payload)
      }

    default:
      return state;
  }
};