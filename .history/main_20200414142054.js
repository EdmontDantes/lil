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
      if (this.head === undefined) {
        this.head = Node(value);
      } else if (Node(value).head !== undefined) {
        let previousHead = Node(value).head;
        this.next = Node(value).head

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
