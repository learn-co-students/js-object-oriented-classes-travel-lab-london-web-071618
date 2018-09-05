
class Driver {
    constructor (name,startDate,year) {
    this.name = name
    this.startDate = new Date(startDate)
    this.year = year
    }
    
    yearsExperienceFromBeginningOf (endDate) {
        let value = parseInt(endDate)
        return value - this.startDate.getFullYear() - 1
    }
}

class Route {
    constructor (beginningLocation, endingLocation){
       this.beginningLocation = beginningLocation
       this.endingLocation = endingLocation
       console.log(beginningLocation, endingLocation)
     }

    blocksTravelled () {
        let eastWest = ["1st Avenue", "2nd Avenue", "3rd Avenue", "Lexington Avenue", "Park", "Madison Avenue", "5th Avenue"]
        let beforeH = ''
        let beforeV = ''
        let afterH = ''
        let afterV = ''
       
        beforeH = eastWest.indexOf(this.beginningLocation.horizontal)
        beforeV = parseInt(this.beginningLocation.vertical)

        afterH = eastWest.indexOf(this.endingLocation.horizontal)
        afterV = parseInt(this.endingLocation.vertical)

        let distanceH = afterH - beforeH
        let distanceV = afterV - beforeV

        return distanceH + distanceV

        }
    
    estimatedTime (offpeak) {
        //three blocks equals 1 minute
        let time = ''
    
        if (offpeak === true) {
            time = this.blocksTravelled() / 2
            return time
        }
       else {
            return this.blocksTravelled() / 3
       }

    }
    }