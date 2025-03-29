export function convertToTypedArray(arr) {
    return new Uint8Array(arr);
  }
  
  export function convertFromTypedArray(typedArr) {
    return Array.from(typedArr);
  }
  