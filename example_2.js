// Imperative programming paradigm (Procedural)

function cookSteak(steakWeight, desiredDoneness) {
    const grillTemperatureCelsius = 204;                                //variables declared to keep the state
    const seasoning = 'Salt and Pepper';                                
  
    // Define the cooking process
    const cookingProcess = [
      { action: 'Preheat grill', temperature: grillTemperatureCelsius },  
      { action: 'Season steak', seasoning },
      { action: 'Cook steak until desired doneness', desiredDoneness },
      { action: 'Serve steak' }
    ];
  
    // Explicit control flow. (execution controlled by me)   // specifically paradigm                                         
    for (const step of cookingProcess) {                                              //Sequential execution (step by step)
      switch (step.action) {
        case 'Preheat grill':  //Action
          console.log(`Preheating grill to ${step.temperature}°C`); //side-effect                  //  variables used to keep track while the statements modify the the state 
          break;
        case 'Season steak':
          console.log(`Seasoning the steak with ${step.seasoning}`);
          break;
        case 'Cook steak until desired doneness':
          console.log(`Cooking steak to ${step.desiredDoneness}°C`); 
          break;
        case 'Serve steak':
          console.log('Steak is ready to serve!');
          break;
        default:
          console.log('Invalid step in the cooking process.');
      }
    }
  }
  
  cookSteak(16, 63); // Cook a 16 oz steak to medium-rare (63°C)                                //function called to execute the cooking process
  


