export const timeStampConverter = function (timeStamp) { 
    const timeDisplay = new Date(timeStamp);

    const dateformat = {   
        month: "2-digit", 
        day: "2-digit", 
        year: "numeric"
    };
    const newTimeDisplay = timeDisplay.toLocaleDateString("en-US", dateformat);
    return newTimeDisplay;
}

