class Driver {

  constructor(name, startDate){
    this.name = name
    this.startDate = new Date(startDate)
  }

  yearsExperienceFromBeginningOf(endDate) {
        return endDate - this.startDate.getFullYear() - 1
  }

}



class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
    this.distance = this.blocksTravelled(beginningLocation, endingLocation)
  }

  blocksTravelled() {
    let startingVertical = parseInt(this.beginningLocation.vertical)
    let endingVertical = parseInt(this.endingLocation.vertical)
    let verticalDistance = Math.abs(startingVertical - endingVertical)

    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

    let startingHorizontal = eastWest.indexOf(this.beginningLocation.horizontal)
    let endingHorizontal = eastWest.indexOf(this.endingLocation.horizontal)
    let horizontalDistance = Math.abs(startingHorizontal - endingHorizontal)

    return verticalDistance + horizontalDistance

  }

  estimatedTime(peak) {

    if (peak === true) {
      return this.distance / 2 }
    else {
      return this.distance / 3 }
  }


}
