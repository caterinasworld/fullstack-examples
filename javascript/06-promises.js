let promiseExample = () => {
  let promise = new Promise((resolve, reject) => {
    if (true) {
      resolve('Successful promise.');
    } else {
      reject('Error: Something went wrong.');
    }
  });

  promise
    .then((response) => {
      console.log(response);
      return response;
    })
    .then((data) => console.log(data))
    .catch((error) => console.log(error))
    .finally(() => {
      console.log(
        'This code will execute whether the promises is fulfilled or rejected.'
      );
    });
};

promiseExample();
