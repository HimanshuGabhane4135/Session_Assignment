import { FIRST_INCREMENT, SECOND_DECREMENT } from "../actiontype";

const intitialValue = {
  counter: 0,
};

const counterIncrementDecrement = (state = intitialValue, action) => {
  switch (action.type) {
    case FIRST_INCREMENT:
        return{
            counter: state.counter + 1
        };
    
    case SECOND_DECREMENT:
        return{
            counter: state.counter - 1
        };
    default:
      return state;
  }
};

export default counterIncrementDecrement;
