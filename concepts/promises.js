// ---------- 1) CALLBACK ----------
function getUser(callback) {
  setTimeout(function () {
    callback({ name: "Noor" });
  }, 500);
}

getUser(function (user) {
  console.log("Callback:", user.name);
});

// ---------- 2) PROMISE ----------
// A promise can be: pending -> fulfilled (resolve) or rejected (reject)
function getUserPromise(shouldFail) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (shouldFail) {
        reject("Could not load user");
      } else {
        resolve({ name: "Noor" });
      }
    }, 800);
  });
}

getUserPromise(false)
  .then(function (user) {
    console.log("Promise success:", user.name);
  })
  .catch(function (error) {
    console.log("Promise error:", error);
  });

getUserPromise(true)
  .then(function (user) {
    console.log(user);
  })
  .catch(function (error) {
    console.log("Promise error:", error);
  })
  .finally(function () {
    console.log("Finished (runs in both cases)");
  });

// ---------- 3) ASYNC / AWAIT ----------
async function run() {
  try {
    const user = await getUserPromise(false);
    console.log("Async/await:", user.name);
  } catch (error) {
    console.log("Async/await error:", error);
  }
}
run();

// ---------- 4) Promise.all ----------
// Waits for all promises to finish
Promise.all([getUserPromise(false), getUserPromise(false)]).then(function (users) {
  console.log("Promise.all finished, users:", users.length);
});
