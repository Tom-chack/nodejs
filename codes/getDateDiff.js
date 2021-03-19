function getDateDiff( fromDate = '1970-1-1 00:00:00', toDate = '', returnData = 'seconds' ){

    let days = 0;
    let months = 0;
    let yearDays = [31,28,31,30,31,30,31,31,30,31,30,31];

    let start = new Date( fromDate );
    let end = new Date( toDate );

    let startYear = start.getFullYear();
    let startMonth = start.getMonth();
    let startDay = start.getDate();

    let endYear = ( toDate ) ? end.getFullYear() : 0;
    let endMonth = ( toDate ) ? end.getMonth() : 0;
    let endDay = ( toDate ) ? end.getDate() : 0;

    if( toDate ){

        for ( let y = startYear; y <= endYear; y++ ){

            let currentYearDays = yearDays;

            currentYearDays[1] = ( new Date(y, 1, 29).getDate() === 29 ) ? 29 : 28;

            if( y == startYear ){
                currentYearDays = ( startMonth ) ? currentYearDays.slice( startMonth ) : yearDays;
                if( startDay ) { currentYearDays[ 0 ] -= startDay; }
            } else if( y == endYear ){
                currentYearDays = ( endMonth ) ? currentYearDays.slice( 0, (endMonth+1) ) : yearDays;
                if( endDay ) { currentYearDays[ endMonth ] = endDay; }
            } else{
                currentYearDays = yearDays;
            }

            months += currentYearDays.length;
            days += currentYearDays.reduce( (a, b) => a + b, 0 );

        }
    } else {
        yearDays[1] = ( new Date(startYear, 1, 29).getDate() === 29 ) ? 29 : 28;
        months += startYear.length;
        days = yearDays.reduce( (a, b) => a + b, 0 );
    }

    switch ( returnData ) {
        case 'years' :
            return Math.floor( months / 12 );
            break;
        case 'months' :
            return months;
            break;
        case 'days' :
            return days;
            break;
        case 'hours' :
            return days * 24;
            break;
        case 'minutes' :
            return days * 24 * 60;
            break;
        case 'seconds' :
            return days * 24 * 60 * 60;
            break;
        default:
            return days * 24 * 60 * 60 * 1000;
    }

}

let fromDate = new Date(2000, 5, 31);
let toDate = new Date();

console.log( 'From Date: ' + fromDate );
console.log( 'Current Date: ' + toDate );

getDateDiff( fromDate, toDate, 'years' );