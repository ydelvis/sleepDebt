/* This Project calculates the number of Sleep debts. Sleep is good for our health.

    Assuming 8 hours of sleep each day is ideal for optimum health,
    We obtain the number of actual hours you sleep and determine
    if it's good enough or not.
                                                        -By ydelvis

    #AmaliTechTraining   #Codecademy 
*/

function getSleepHours(day){         // declaring static hours slept in on each day (fixed input)
    day = day.toLowerCase();
    switch (day){
      case 'monday':
        return 9
      
      case 'tuesday':
        return 12
      
      case 'wednesday':
        return 9
      
      case 'thursday':
        return 8
      
      case 'friday':
        return 8
      
      case 'saturday':
        return 8
      
      case 'sunday':
        return 9
      
      default:
        console.log( `Hey Champ, ${day} doesnt exist in our world!`);    // invalid days are flagged
        return undefined;
    }
  }
  
  function getActualSleepHours() {                  // total number of actual hours slept in the week
    const monday = getSleepHours('monday');
    const tuesday = getSleepHours('tuesday');
    const wednesday = getSleepHours('wednesday');
    const thursday = getSleepHours('thursday');
    const friday = getSleepHours('friday');
    const saturday = getSleepHours('saturday');
    const sunday = getSleepHours('sunday');
  
    return (monday + tuesday + wednesday + thursday + friday + saturday + sunday)   
  }
  
  function getIdealSleepHours(){                // total ideal hours of sleep required in the week
    const idealHours = 8;
    return idealHours * 7;
  }
  
  function calculateSleepDebt(){                // computes the difference between actual and ideal sleep hours
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
  
    if (actualSleepHours === idealSleepHours){
      console.log('Great, no Sleep Debts! - You had a perfect sleep');
  }
  
  else if (actualSleepHours > idealSleepHours){
    
    console.log('Hey Champ! - you sleeping your life away. Reduce your sleep by ' + (actualSleepHours - idealSleepHours) + ' hours');
  }
  
  else {
    console.log('Bro, your sleep debt is ' + (idealSleepHours - actualSleepHours) + ' hours. Try and get enough rest this week!')
  }
  }
  
  calculateSleepDebt()

  // End of Code