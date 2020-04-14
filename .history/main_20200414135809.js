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
      } else if (this.head !== undefined) {
        let previousHead = this.head;
        Node(value) = this.head;
        this.next = previousHead;
        // this.head = Node(value);


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
