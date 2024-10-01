import Node from "./node.js";

const LinkedList = (function () {
  let list = null;

  const append = (value) => {
    let node = new Node(value);

    if (!list) {
      list = node;
      return;
    }

    let current = list;

    while (current.nextNode !== null) {
      current = current.nextNode;
    }

    current.nextNode = node;
  };

  const prepend = (value) => {
    const node = new Node(value);
    node.nextNode = list;
    list = node;
  };

  const size = () => {
    let count = 0;
    let current = list;
    while (current !== null) {
      count += 1;
      current = current.nextNode;
    }
    return count;
  };

  const head = () => {
    const node = new Node(list.value);
    node.nextNode = list.nextNode;
    return node;
  };

  const tail = () => {
    let current = list;
    let node;
    while (current.nextNode !== null) {
      current = current.nextNode;
    }
    node = new Node(current.value);
    return node;
  };

  const at = (index) => {
    let count = 0;
    let current = list;
    while (current !== null) {
      count += 1;
      current = current.nextNode;
      if (count === index) {
        const node = new Node(current.value);
        node.nextNode = current.nextNode;
        return node;
      }
    }
  };

  const pop = () => {
    if (!list) return;

    if (list.nextNode === null) {
      list = null;
      return null;
    }

    let current = list;

    while (current !== null) {
      if (current.nextNode.nextNode === null) {
        current.nextNode = null;
      }
      current = current.nextNode;
    }
  };

  const contains = (value) => {
    if (!list) return false;
    let current = list;
    let isContains = false;
    while (current !== null) {
      if (current.value === value) {
        return true;
      }
      current = current.nextNode;
    }
    return isContains;
  };

  const find = (value) => {
    let count = 0;
    let current = list;
    while (current !== null) {
      count += 1;
      current = current.nextNode;
      if (current.value === value) {
        return count;
      }
    }
    return null;
  };

  const toString = () => {
    function goDeep(list) {
      let str = "";
      if (!list) return " null";
      if (list) {
        str += ` ${list.value} ->`;
      }
      return str + goDeep(list.nextNode);
    }

    return goDeep(list);
  };

  const insertAt = (value, index) => {
    let count = 0;
    let prev = list;
    while (prev !== null) {
      count += 1;
      prev = prev.nextNode;
      if (count == index - 1 && prev !== null) {
        let node = new Node(value);
        node.nextNode = prev.nextNode;
        prev.nextNode = node;
      }
    }
  };

  const removeAt = (index) => {
    let count = 0;
    let current = list;
    while (current !== null) {
      count += 1;
      current = current.nextNode;
      if (count == index - 1) {
        current.nextNode = current.nextNode.nextNode
      }
    }
  };

  const getList = () => list;

  return {
    append,
    prepend,
    size,
    head,
    tail,
    at,
    pop,
    contains,
    find,
    toString,
    insertAt,
    removeAt,
    getList,
  };
})();

export default LinkedList;
