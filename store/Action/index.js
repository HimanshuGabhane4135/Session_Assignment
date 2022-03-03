import { FIRST_INCREMENT, SECOND_DECREMENT } from '../actiontype';

const firstIncrement = () => {
    return (
        {
            type: FIRST_INCREMENT,
        }
    );
}


const secondDecrement = () => {
  return {
    type: SECOND_DECREMENT,
  };
};


export {firstIncrement, secondDecrement};
