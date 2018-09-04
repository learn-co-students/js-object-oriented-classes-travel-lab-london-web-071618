
class Driver {
  constructor(name, startDate) {
    this.name = name
    this.startDate = new Date(startDate)
  }

  yearsExperienceFromBeginningOf(year) {
    const endDate = new Date(year, 1, 1)
    const yrsExp = (endDate - this.startDate)/(365*24*60*60*1000)
    return parseInt(yrsExp)
  }
}

let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']


class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }

  avenueToInteger(avenue) {
    return eastWest.indexOf(avenue)
  }

  blocksTravelled(){
    let verticalDistance = this.endingLocation.vertical - this.beginningLocation.vertical
    let horizontalDistance = this.avenueToInteger(this.endingLocation.horizontal) - this.avenueToInteger(this.beginningLocation.horizontal)
    return (Math.abs(horizontalDistance) + Math.abs(verticalDistance))
}

  estimatedTime(peak){
    if(peak){
      return this.blocksTravelled()/2
    } else {
      return this.blocksTravelled()/3
    }
  }
}
