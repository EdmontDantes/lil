const Node = function(value) {
  return {
    value: value,
    next: null,
  }
}

const Lil = function() {
  return {
    head: null,

    addToStart: function(value) {
      
      if (Node(value).head === undefined) {
        e.head = Node;

      } 
      
      
    },
  }
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
