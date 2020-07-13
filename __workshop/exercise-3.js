// Exercise 3
// ----------

const doublesLater = (num) => {
  return new Promise((resolve, reject) => {
    const sum = num * 2;
    setTimeout(() => {
      console.log(sum);
      resolve(sum);
    }, 2000);
  });

  // 1. waits 2 seconds (You could console a message here. It might make the 2 second wait easier ;)
  // 2. returns the double of the num
};

// 3. handleSum function (async/await)
const handleSum = async (num) => {
  try {
    const double1 = await doublesLater(num);
    const double2 = await doublesLater(double1);
    const double3 = await doublesLater(double2);
    return double3;
  } catch {}
};

// 4. verification
handleSum(10).then((ans) => console.log("The final answer is ", ans));
