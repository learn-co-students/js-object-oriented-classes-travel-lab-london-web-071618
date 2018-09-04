class Driver {
  constructor(name, startDate) {
    this.name = name,
    this.startDate = new Date(startDate)
  }


  yearsExperienceFromBeginningOf(endDate) {
    let startYear = this.startDate.getFullYear()
    return endDate - startYear - 1
  }

}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }

  blocksTravelled() {
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
    function findHorizontal(start, end) {
      return eastWest.indexOf(start) - eastWest.indexOf(end)
    }
    let blocksVertical = Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical)
    let blocksHorizontal = Math.abs(findHorizontal(this.beginningLocation.horizontal, this.endingLocation.horizontal))
    return blocksVertical + blocksHorizontal
  }

  estimatedTime(isPeak) {
    let numBlocks = this.blocksTravelled()
    if (isPeak === true) {
      return numBlocks / 2
    } else {
      return numBlocks / 3
    }
  }
}
