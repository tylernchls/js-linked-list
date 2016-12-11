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

  function add (value){
  var newNode = {
      value : value,
      next : null
    }
    if (head === null && tail === null){
      head = newNode;
      tail = newNode;
    } else {
      tail.next = newNode;  //points current next to newNode
      tail = newNode;    // tail now is on added Node
    }
    return newNode;
  }


  function remove () {}
  function get (value) {
    var counter = 0;
    var currentNode = head;

    if (value === 0) {
      return currentNode;
    }
    while (currentNode.next != null) {
      counter += 1;
      console.log(counter);
      currentNode = currentNode.next;    // sets currentNode to the next node
      if ( value === counter) {    // will return currentNode when value and counter match
        return currentNode;
      }
    }
    return false;  // returns false if node is not found
  }

  function insert () {}

  return {

  getHead : getHead,
  getTail : getTail,
  add : add,
  remove : remove,
  get : get,
  insert : insert
}



};

