export const selectMainCategory = (mainCategory) => {
  return {
    type: 'SELECT_MAIN_CATEGORY',
    payload: mainCategory
  }
}

export const removeAnswer = (category) => {
  return {
    type: 'REMOVE_QUESTION_AND_ANSWER',
    payload: category,
  }
}

export const saveQuestionAndAnswer = (question, answer, color) => {
  return {
    type: 'SAVE_QUESTION_AND_ANSWER',
    question,
    answer,
    color
  };
};

export const saveQuestionAndAnswerA2 = (parent, question, answer, color) => {
  return {
    type: 'SAVE_QUESTION_AND_ANSWER_A2',
    parent,
    question,
    answer,
    color
  };
};

export const saveQuestionAndAnswerA5 = (parent, question, answer, color) => {
  return {
    type: 'SAVE_QUESTION_AND_ANSWER_A5',
    parent,
    question,
    answer,
    color
  };
};