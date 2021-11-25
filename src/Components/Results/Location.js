const Location = (props) => {
    
    // Gets today's date in dd/mm/yyyy format.
    function getTodaysDate() {
        const dateToday = new Date();
        const dayNumber = dateToday.getDate().toString();
        const monthNumber = (dateToday.getMonth() + 1).toString();
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

    return (
        <h1>The weather today ({getTodaysDate()}) in {props.city}, {props.country}</h1>
    );
}

export default Location
