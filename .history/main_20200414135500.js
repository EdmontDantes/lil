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
        this.head = Node(value);
      } else if (t.head !== undefined) {
        
        
        // Node(value).head = this.head;
        // this.head = this.next;


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
