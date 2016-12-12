/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){

  var head = null;
  var tail = null;

  function getHead () {
    return head;
  }

  function getTail () {
    return tail;
  }

  function _newNode (value){   // _newNode function
    return {
      value: value,
      next: null
    }
  }

  function add (value){
    var newNode = _newNode(value)
    if (head === null && tail === null){   // if newNode has both head and tail, assigns to newNode
      head = newNode;
      tail = newNode;
    } else {
      tail.next = newNode;  //points current next to newNode
      tail = newNode;    // tail now is on added Node
    }
    return newNode;
  }


  function remove (number) {
    var nodeToRemove = get(number);
    var prevNode = get(number - 1);
    var nextNode = get(number + 1);
    if ( number === 0){       // if number = 0 , changes head to nextNode & removes head
      head = nextNode;
    }
    if ( nodeToRemove.next === null){       // test to remove a tail, checks .next to see if null,
      tail = prevNode;              // sets tail to prevNode
      tail.next = null;                     // sets next property of node to null * is new tail
  } else {
    prevNode.next = nextNode;   // remove a node thats between head and tail
  }
    return false;

  }

  function get (number) {
    var counter = 0;
    var currentNode = head;

    if (number < 0 ){   // returns false if number less than one
      return false;
    }

    if (number === 0) {     // returns currentNode at index zero
      return currentNode;
    }
    while (currentNode.next != null) {
      counter += 1;
      currentNode = currentNode.next;    // sets currentNode to the next node
      if ( number === counter) {    // will return currentNode when value and counter match
        return currentNode;
      }
    }
    return false;  // returns false if node is not found
  }

  function insert (value, number) {

      var currNode = get(number);
      var newNode = _newNode(value);  // asigns newNode to _newNode function passes in value
      var prevNode = get(number - 1 );
      var nextNode = get(number + 1 );

      if ( currNode === false) {  // returns false if node is not found
          return false;
      }

      if ( number === 0 ) {       // inserts at the head and points to nextnode
          head = newNode;
          newNode.next = currNode;

      } else {
        prevNode.next = newNode;   // points node for to look at new node added
        newNode.next = currNode;  // points newnode to point at target node

        }
  }

  return {
    getHead : getHead,
    getTail : getTail,
    add : add,
    remove : remove,
    get : get,
    insert : insert
  }
};


// test cases all pass
var myList = linkedListGenerator();
myList.add("jay");
myList.add("tyler")
myList.add("dickhead");
myList.add("fuckoff");
console.log("test", myList.insert("tom" , 1));
console.log('yo', myList.get(4));


