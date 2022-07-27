const ftoc = function(degrees) {
  const result = (degrees - 32) * 5/9
  
  if (result % 1 == 0) {
    return result;
  }
  
  else {
    return (Math.round(result * 1e1) / 1e1);
  }
};

const ctof = function(degrees) {
  const result = degrees * 9/5 + 32
  
  if (result % 1 == 0) {
    return result;
  }

  else {
    return (Math.round(result * 1e1) / 1e1);
  }
  
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
