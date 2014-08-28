//Polish Notation

var expression = ['3','4','-','5','+']; //4
var expression2 = ['3','4','5','+','-']; // -6
var expression3 = ['3','4','*','2',"/"]; // 6
//4
function postFix(exp) {
  var sum = 0, stack = [], temp, x, y;

//var expression = ['3','4','-','5','+'];
  for (var i = 0; i < exp.length; i++) {
    console.log("This is run through", i );
    console.log(stack);

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
