class Driver {

  constructor(name, startDate) {
      this.name = name;
      this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(year) {
    return (year - this.startDate.getFullYear())
  }


}

const eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

class Route {

  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }

  blocksTravelled() {
     let vertTravel = this.endingLocation.vertical - this.beginningLocation.vertical;

     //get the index no. of start avenue
     let startArray
      for(const index in eastWest) {
        if (eastWest[index] === this.beginningLocation.horizontal) {
          startArray = index
        }
      }
      //get the index no. of end avenue
     let endArray
      for(const index in eastWest) {
        if (eastWest[index] === this.endingLocation.horizontal) {
          endArray = index
        }
      }

    let horizTravel = endArray - startArray
    return vertTravel + horizTravel
  }

  estimatedTime(peak) {
    if (peak) {
      return (this.blocksTravelled() / 2)
    } else {
      return (this.blocksTravelled() / 3)
    }
  }

}
