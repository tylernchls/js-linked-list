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


  function remove (number) {
    var nodeToRemove = get(number);
    var nodeBeforeRemove = get(number - 1);
    var nextNode = get(number + 1);
    if ( number === 0){       // if number = 0 , changes head to nextNode & removes head
      head = nextNode;
    }
    if ( nodeToRemove.next === null){       // test to remove a tail, checks .next to see if null,
      tail = nodeBeforeRemove;              // sets tail to nodeBefoe
      tail.next = null;                     // sets next property of node to null * is new tail
  } else {
    nodeBeforeRemove.next = nextNode;   // remove a node thats between head and tail
  }
    return false;

  }








  function get (number) {
    var counter = 0;
    var currentNode = head;

    if (number === 0) {
      return currentNode;
    }
    while (currentNode.next != null) {
      counter += 1;
      currentNode = currentNode.next;    // sets currentNode to the next node
      if ( number === counter) {    // will return currentNode when value and counter match
        return currentNode;
      }
    }
    return false;  // returns false if node is not found  ?????? why accepted outside loop
  }

  function insert (value, number) {
      var targetNode = get(number);
      var nodeToInsert = add(value);
      var nodeBeforeInsert = get(number - 1);
      var nextNode = get(number + 1);

      if ( number === 0 ) {
          head = nodeToInsert;
          nodeToInsert.next = targetNode;

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

var myList = linkedListGenerator();
myList.add("jay");
myList.add("tyler");
myList.add("dickhead");
myList.add("fuckoff");
console.log("test", myList.insert("tom" , 0));
console.log('yo', myList.get(0));