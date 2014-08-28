//Polish Notation

function postFix(exp) {
  var sum = 0, stack = [], temp, x, y;
  for (var i = 0; i < exp.length; i++) {
      if ( exp[i] === '+'){
        sum = parseInt( stack.pop()) + parseInt(stack.pop());
        temp = sum ; // stack[0];
      }
      else if ( exp[i] === '-'){
        x = stack.pop();
        y = stack.pop();
        sum = parseInt(y)-parseInt(x);
        temp = sum; //sum = stack[0]
      }
      else if ( exp[i] === '*'){
        sum = parseInt(stack.pop()) * parseInt(stack.pop());
        temp = sum ; // stack[0];
      }
      else if ( exp[i] === '/'){
        x = stack.pop();
        y = stack.pop();
        sum = parseInt(y)/parseInt(x);
        temp = sum; //sum = stack[0]
      }
      else{
        temp = exp[i];
      }

      stack.push(temp);
  }
    return sum;
}
var p = {
  postFix: postFix
};

exports = module.exports = p;
