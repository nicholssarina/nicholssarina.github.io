const aliceTumbling = [
    { transform: 'rotate(0) scale(1)' },
    { transform: 'rotate(360deg) scale(0)' }
  ];
  
  const aliceTiming = {
    duration: 2000,
    iterations: 1,
    fill: 'forwards'
  }
  
  const alice1 = document.querySelector("#alice1");
  const alice2 = document.querySelector("#alice2");
  const alice3 = document.querySelector("#alice3");

  alice1.animate(aliceTumbling, aliceTiming);

const promiseOne=alice1.animate(aliceTumbling, aliceTiming).finished;
    
  promiseOne.then(() => {
      alice2.animate(aliceTumbling, aliceTiming);
      const promiseTwo=alice2.animate(aliceTumbling, aliceTiming).finished;
      promiseTwo.then(() => {
          alice3.animate(aliceTumbling, aliceTiming);
      });
  });

promiseOne
  .then(() => {
    alice2.animate(aliceTumbling, aliceTiming);
    return alice2.animate(aliceTumbling, aliceTiming).finished;
  })
  .then(() => {
   alice3.animate(aliceTumbling, aliceTiming); 
  })
  .catch(error =>console.error(`needs to be fixed: ${error}`));

async function animation() {
    alice1.animate(aliceTumbling, aliceTiming);
    try {
        const promise1 = await alice1.animate(aliceTumbling, aliceTiming).finished;
        if (promise1) {
            alice2.animate(aliceTumbling, aliceTiming);
            const promise2 = await (await alice2.animate(aliceTumbling, aliceTiming).finished);
            if (promise2){
                alice3.animate(aliceTumbling, aliceTiming);
            }
        }
    }
    catch(error) {
        console.error(`needs to be fixed: ${error}`);
      }  
}

animation();