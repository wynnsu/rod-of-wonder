# 4. Median of Two Sorted Arrays

## Instinct

~~Median -> Merge~~ (TLE)

O(log(m+n)) -> binary search

## Explaination

Binary search shorter array **A** to find a position **i** which satisfies:

1. For **j** in longer array **B**, i+j==(m+n)/2.
1. **A[i]** is greater than **B[j-1]** and **B[j]** is greater than **A[i-1]**.

## O(m+n) Solution (merge)

```js
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let l1=nums1.length,l2=nums2.length;
    if(l1<1)
      return findMedian(nums2); 
    if(l2<1)
        return findMedian(nums1);
    var result=[];
    let i=0,j=0;
    while(i<l1&&j<l2){
      if(nums1[i]<nums2[j]){
        result.push(nums1[i]);
        i++;
      }else{
        result.push(nums2[j]);
        j++;
      }
    }
    if(i<l1){
      result.push(...nums1.slice(i));
    }
    if(j<l2){
      result.push(...nums2.slice(j));
    }
    return findMedian(result);
};

var half=function(a,b){
    return (a+b)/2;
}

var findMedian=function(nums){
      if(nums.length<1){
          return null;
      }
    let mid=nums.length/2;
    if(nums.length%2===0){
        return half(nums[mid-1],nums[mid]);
    }else{
        return nums[Math.floor(mid)];
    }
  }
```

## O(log(m)) Solution

```js
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let m = nums1.length,
    n = nums2.length;
  if (m > n) {
    let temp = nums1;
    nums1 = nums2;
    nums2 = temp;
    temp = m;
    m = n;
    n = temp;
  }
  let half = Math.floor((m + n + 1) / 2);
  let i = 0,
    j = 0;
  let imin = 0,
    imax = m;
  while (imin <= imax) {
    i = Math.floor((imin + imax) / 2);
    j = half - i;
    if (i < m && nums2[j - 1] > nums1[i]) {
      // nums1[i] too small
      imin = i + 1;
    } else if (i > 0 && nums1[i - 1] > nums2[j]) {
      // nums1[i-1] too big
      imax = i - 1;
    } else {
      let max_left = 0,
        min_right = 0;
      // found
      if (i === 0) {
        max_left = nums2[j - 1];
      } else if (j === 0) {
        max_left = nums1[i - 1];
      } else {
        max_left = Math.max(nums1[i - 1], nums2[j - 1]);
      }

      if ((m + n) % 2 === 1) 
        return max_left;
      if (i === m) {
        min_right = nums2[j];
      } else if (j === n) {
        min_right = nums1[i];
      } else {
        min_right = Math.min(nums1[i], nums2[j]);
      }
      return (max_left + min_right) / 2;
    }
  }
}
```