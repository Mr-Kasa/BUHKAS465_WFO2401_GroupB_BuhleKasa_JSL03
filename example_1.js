
//Declarative programming paradigm (Immutable)                                  
                                                                            

function cookSteak(steakWeight, desiredDoneness) {                    
    let grillTemperature = 0;
    let steakTemperature = 0;
    
    // Step 1: Preheat the grill
    grillTemperature = 204;                                 
    
    // Step 2: Season the steak
    const seasoning = 'Salt and Pepper';
    // Apply seasoning to both sides of the steak
    
    // Step 3: Cook the steak
    while (steakTemperature < desiredDoneness) {                                            
      // Grill the steak and measure internal temperature                                        //will call create and call a method/function (with no side effect) for grilling the steak and another one for measuring its internal temp         
      // Adjust grill temperature and cooking time based on steakWeight and desiredDoneness      //increase grill temp and cooking time based on desired donness and weight
      // Update steakTemperature                                                                  //increase stake temp until = desired donness or greater
      
      // If the steak is done, break out of the loop                                                //if internal temp >= grill temp break from loop nad execute the next line of code
    }
    
    // Step 4: Serve the steak
    if (steakTemperature >= desiredDoneness) {
      return 'Steak is ready to serve!';
    } else {
      return 'Steak needs more cooking.';
    }
  }
  
  // Usage example:
  const result = cookSteak(16, 63); // Cook a 16 oz steak to medium-rare (63°C)                           (2)
  console.log(result);
  