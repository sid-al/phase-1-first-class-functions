// function Monday() {
//     console.log("Go for a five-mile run");
//     console.log("Pump iron");
//   }
  
//   function Tuesday() {
//     console.log("Go for a five-mile run");
//     console.log("Swim 40 laps");
//   }
  
//   function Wednesday() {
//     console.log("Go for a five-mile run");
//     console.log("Go for a five-mile run");
//   }
  
//   function Thursday() {
//     console.log("Go for a five-mile run");
//     console.log("Pump iron");
//   }
  
//   function Friday() {
//     console.log("Go for a five-mile run");
//     console.log("Swim 40 laps");
//   }

// function runFiveMiles() {
//     console.log("Go for a five-mile run");
//   }


// function liftWeights() {
//     console.log("Pump iron");
//   }
  
//   function swimFortyLaps() {
//     console.log("Swim 40 laps");
//   }


// function morningRoutine(exercise) {
//     let breakfast;
  
//     if (exercise === liftWeights) {
//       breakfast = "protein bar";
//     } else if (exercise === swimFortyLaps) {
//       breakfast = "kale smoothie";
//     } else {
//       breakfast = "granola";
//     }
  
//     exerciseRoutine(exercise);
  
//     // we could give this function a name if we wanted to, but since
//     // it's only available _inside_ morningRoutine(), we don't need to
//     return function () {
//       console.log(`Nom nom nom, this ${breakfast} is delicious!`);
//     };
//   }

// const afterExercise = morningRoutine(liftWeights);
// // LOG: Go for a five-mile run
// // LOG: Pump iron

// afterExercise;
// //=> ƒ () { console.log(`Nom nom nom, this ${breakfast} is delicious!`); }



function receivesAFunction(callback) {
    callback();
  }
  
  function returnsANamedFunction() {
    return function namedFn() {
      console.log("this is a named function");
    };
  }
  
  function returnsAnAnonymousFunction() {
    return () => console.log("this is an anonymous function");
  }