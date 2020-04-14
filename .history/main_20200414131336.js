const Node = function(value) {
  return {
    value: value,
    next: null,
  }
}

const Lil = function() {
  return {
    head: null,
    addToStart: function(Node) {
      if (Node.head === undefined) {
        Node.head = 
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
