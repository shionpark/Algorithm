class MinBinaryHeap {
    constructor() {
        this.heap = [];
    }
    
    size() {
        return this.heap.length;
    }
    
    swap(a, b) {
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]]
    }
    
    heappush(value) {
        this.heap.push(value)
        let curIdx = this.heap.length - 1
        
        while (curIdx > 0) {
            let parIdx = Math.floor((curIdx - 1) / 2);
            if(this.heap[parIdx] <= this.heap[curIdx]) break
            this.swap(curIdx, parIdx)
            curIdx = parIdx;
        }
    }
    
    heappop() {
        if (this.heap.length === 0) return null
        if (this.heap.length === 1) return this.heap.pop()
        
        const min = this.heap[0];
        this.heap[0] = this.heap.pop()
        
        let curIdx = 0
        let leftIdx = curIdx * 2 + 1
        let rightIdx = curIdx * 2 + 2
        
        while (this.heap[leftIdx] < this.heap[curIdx] || this.heap[rightIdx] < this.heap[curIdx]) {
            let minIdx = this.heap[rightIdx] < this.heap[leftIdx] ? rightIdx : leftIdx;
            if (this.heap[curIdx] < this.heap[minIdx]) {
                break;
             }
            this.swap(curIdx, minIdx)
            curIdx = minIdx
            leftIdx = curIdx *2 + 1
            rightIdx = curIdx *2 + 2
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