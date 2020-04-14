const Node = function(value) {
  return {
    value: value,
    next: null,
  }
}

const Lil = function() {
  
}



if (typeof Node === 'undefined') {
  Node = undefined;
}

if (typeof Lil === 'undefined') {
  Lil = undefined;
}


module.exports = {
  Lil,
  Node,
}
