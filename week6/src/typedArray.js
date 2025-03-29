export function createTypedArray() {
    const typedArray = new Uint8Array([10, 20, 30, 40, 50]);
    console.log("Original TypedArray:", typedArray);
  
    // Reverse the TypedArray
    const reversedArray = typedArray.slice().reverse();
    console.log("Reversed TypedArray:", reversedArray);
  }
  