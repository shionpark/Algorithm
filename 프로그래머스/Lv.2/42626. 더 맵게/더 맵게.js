class MinBinaryHeap {
    constructor() {
        this.heap = [];
    }
    
    size() {
        return this.heap.length;
    }
    
    heappush(value) {
        this.heap.push(value)
        let curIdx = this.heap.length - 1
        
        while (curIdx > 0 && this.heap[curIdx] < this.heap[Math.floor((curIdx - 1) / 2)]) {
          const temp = this.heap[curIdx];
          this.heap[curIdx] = this.heap[Math.floor((curIdx - 1) / 2)];
          this.heap[Math.floor((curIdx - 1) / 2)] = temp;
          curIdx = Math.floor((curIdx - 1) / 2);
        }
    }
    
    heappop() {
        if (this.heap.length === 0) return null
        if (this.heap.length === 1) return this.heap.pop()
        
        const min = this.heap[0];
        this.heap[0] = this.heap.pop()
        let curIdx = 0
        
        while (curIdx * 2 + 1 < this.heap.length) {
          let minChildIndex = curIdx * 2 + 2 < this.heap.length && this.heap[curIdx * 2 + 2] < this.heap[curIdx * 2 + 1] ? curIdx * 2 + 2 : curIdx * 2 + 1;

          if (this.heap[curIdx] < this.heap[minChildIndex]) {
            break;
          }

          const temp = this.heap[curIdx];
          this.heap[curIdx] = this.heap[minChildIndex];
          this.heap[minChildIndex] = temp;
          curIdx = minChildIndex;
        }
        return min
    }
    
    peek() {
        return this.heap[0]
    }
}

function solution(scoville, K) {
  const minHeap = new MinBinaryHeap();

  for (const sco of scoville) {
    minHeap.heappush(sco);
  }

  let mixedCount = 0;

  while (minHeap.size() >= 2 && minHeap.peek() < K) {
    const first = minHeap.heappop();
    const second = minHeap.heappop();
    const mixedScov = first + second * 2;
    minHeap.heappush(mixedScov);
    mixedCount++;
  }

  return minHeap.peek() >= K ? mixedCount : -1;
}