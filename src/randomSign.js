const randomSign = () => {
  const operator = [{
    sign: '+',
  }, {
    sign: '-',
  }, {
    sign: '*',
  }];
  const randOp = Math.floor(Math.random() * operator.length);
  return operator[randOp].sign;
};
export default randomSign;
