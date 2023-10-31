const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, ...commands] = input;

class Node {
	constructor(item) {
		this.item = item;
		this.next = null;
		this.prev = null;
	}
}

class Deque {
	constructor() {
		this.head = null;
		this.tail = null;
		this.size = 0;
	}

	pushFront(item) {
		const newNode = new Node(item);
		if (this.getSize() === 0) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			newNode.next = this.head;
			this.head.prev = newNode;
			this.head = newNode;
		}
		this.size += 1;
	}

	pushBack(item) {
		const newNode = new Node(item);
		if (this.getSize() === 0) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			newNode.prev = this.tail;
			this.tail = newNode;
		}
		this.size += 1;
	}

	popFront() {
		if (this.getSize() === 0) {
			return -1;
		} else if (this.getSize() === 1) {
			const popedItem = this.head.item;
			this.head = null;
			this.tail = null;
			this.size -= 1;
			return popedItem;
		} else if (this.getSize() === 2) {
			const popedItem = this.head.item;
			this.head = this.head.next;
			this.tail.prev = null;
			this.size -= 1;
			return popedItem;
		} else if (this.getSize() > 2) {
			const popedItem = this.head.item;
			this.head.next.prev = null;
			this.head = this.head.next;
			this.size -= 1;
			return popedItem;
		}
	}

	popBack() {
		if (this.getSize() === 0) {
			return -1;
		} else if (this.getSize() === 1) {
			const popedItem = this.tail.item;
			this.head = null;
			this.tail = null;
			this.size -= 1;
			return popedItem;
		} else if (this.getSize() === 2) {
			const popedItem = this.tail.item;
			this.tail = this.tail.prev;
			this.head.next = null;
			this.size -= 1;
			return popedItem;
		} else if (this.getSize() > 2) {
			const popedItem = this.tail.item;
			this.tail.prev.next = null;
			this.tail = this.tail.prev;
			this.size -= 1;
			return popedItem;
		}
	}

	getSize() {
		return this.size;
	}

	isEmpty() {
		return this.getSize() ? 0 : 1;
	}

	getFront() {
		return this.getSize() ? this.head.item : -1;
	}

	getBack() {
		return this.getSize() ? this.tail.item : -1
	}
}

function solution(n, commands) {
	const deque = new Deque();
	let answer = '';
	for (let i = 0; i < commands.length; i += 1) {
		const [command, item] = commands[i].split(' ');
		switch (command) {
			case 'push_front': deque.pushFront(item); break;
			case 'push_back': deque.pushBack(item); break;
			case 'pop_front': answer += deque.popFront() + ' '; break;
			case 'pop_back': answer += deque.popBack() + ' '; break;
			case 'size': answer += deque.getSize() + ' '; break;
			case 'empty': answer += deque.isEmpty() + ' '; break;
			case 'front': answer += deque.getFront() + ' '; break;
			case 'back': answer += deque.getBack() + ' '; break;
			default: break;
		}
	}

	return answer.split(' ').join('\n');
}

const answer = solution(n, commands);
console.log(answer);