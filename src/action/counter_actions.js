/* Action: 
   Action is a funtion that returns object
   Describes what action is performed
*/

export const increment = () => {
    return {
      type: "INCREMENT",
      payload: 2,
    };
  };
  
  export const decrement = () => {
    return {
      type: "DECREMENT",
    };
  };