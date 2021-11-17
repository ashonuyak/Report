function gigig(arr) {
  for (let i = 0; i < arr.length; i++) {
    let a = 8 * (i + 1) ** 2 + 4 * (i + 1) + 9 + arr[i];
    // console.log(a);
    // console.log(i);
    if (a > 34) {
      while (a > 34) {
        a -= 34;
      }
    }
    console.log(a);
  }
}
gigig([8, 29, 23, 22, 19, 17, 11, 18, 26, 12, 8, 26]);
