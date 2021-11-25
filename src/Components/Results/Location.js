const Location = (props) => {
    
    // Gets today's date in dd/mm/yyyy format.
    function getTodaysDate() {
        const dateToday = new Date();
        let dayNumber = dateToday.getDate().toString();
        let monthNumber = (dateToday.getMonth() + 1).toString();
        const year = dateToday.getFullYear().toString();

        // Adding 0's in front of day and month numbers if necessary to satisfy dd/mm/yyyy format.
        if (dayNumber.length === 1) {
            dayNumber = "0" + dayNumber;
        }

        if (monthNumber.length === 1) {
            monthNumber = "0" + monthNumber;
        }

        return dayNumber + "/" + monthNumber + "/" + year;
    }

    const dateToday = getTodaysDate();

    return (
        <h2>Weather today ({dateToday}) in {props.city}, {props.country}</h2>
    );
}

export default Location
