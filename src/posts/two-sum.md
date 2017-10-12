# 1. Two Sum

## O(n) Solution with extra space

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let visited=[];
    for(let i=0;i<nums.length;i++){
        if(visited[nums[i]]!=undefined){
            return [visited[nums[i]],i];
        }else{
            visited[target-nums[i]]=i;
        }
    }
};
```

## O(n²) Solution without extra space

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(let i=0;i<nums.length-1;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i]+nums[j]===target){
                return [i,j]
            }
        }
    }
};
```