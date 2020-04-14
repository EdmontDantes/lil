const Node = function(value) {
  return {
    value: value,
    next: null,
  };
};

const Lil = function() {
  return {
    head: null,

    addToStart: function(value) {
      if (Li.head === null) {
        this.head = Node(value);
      } else if (this.head !== undefined) {
        let previousHead = this.head;
        this.head = Node(value);
        this.next = previousHead;

        // Node(value).head = this.head;

      } 
    },

    addToEnd: function(value) {
      if (Node(value).head === undefined) {
        this.head = Node(value);
      }else if (this.head !== undefined) {

      }
    }
  };
};



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
