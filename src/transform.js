module.exports.groupAdultsByAgeRange = function(array) {
    
    return array.reduce((sorted, currentMan)=> {
        if (currentMan.age < 18) {
            return sorted;
        }
        if (currentMan.age <= 20) {
            if (sorted["20 and younger"] === undefined) {
                sorted["20 and younger"] = [currentMan];
            } else {
                sorted["20 and younger"].push(currentMan);
            }
        }
        if (currentMan.age > 20 && currentMan.age < 31) {
            if (sorted["21-30"] === undefined) {
                sorted["21-30"] = [currentMan];
            } else {
                sorted["21-30"].push(currentMan);
            }
        }
        if (currentMan.age > 30 && currentMan.age < 41) {
            if (sorted["31-40"] === undefined) {
                sorted["31-40"] = [currentMan];
            } else {
                sorted["31-40"].push(currentMan);
            }
        }
        if (currentMan.age > 40 && currentMan.age < 51) {
            if (sorted["41-50"] === undefined) {
                sorted["41-50"] = [currentMan];
            } else {
                sorted["41-50"].push(currentMan);
            }
        } 
        if (currentMan.age > 50) {
            if (sorted["51 and older"] === undefined) {
                sorted["51 and older"] = [currentMan];
            } else {
                sorted["51 and older"].push(currentMan);
            }          
        } 
        
        return sorted;

    }, {})

}