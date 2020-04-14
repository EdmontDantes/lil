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
      if (this.head === null) {
        this.head = Node(value);
      } else if (this.head !== null) {
        let previousHead = this.head;
        this.head = Node(value);
        this.head.next = previousHead;

        // Node(value).head = this.head;

      } 
    },

    addToEnd: function(value) {
      if (this.head === null) {
        this.head = Node(value);
      }else if (this.head !== null) {
        this.head.next = Node(value);
      } else if (this.head.next !== null) {
        
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
