// 1.Արտածել այն ամսաթիվը, որ կլինի ժամանակային հաշվարկի սկզբից 1 միլիարդ վայրկյան հետո:

// let unix = new Date(1e12);
// console.log(unix);

///////////////////////////////////////////////
// 2.Գրել ծրագիր, որը կհաշվի թե քանի վայրկյան է անցել տվյալ օրվա սկզբից մինչև ծրագիրը աշխատացնելը:
// let todayNow = new Date();
// let todayStart = new Date();
// todayStart.setHours(0);
// todayStart.setMinutes(0);
// todayStart.setSeconds(0);
//
// let diff = ( todayNow.getTime() - todayStart.getTime() ) / 1000;
//
// console.log( diff );

//////////////////////////////////////////////
// 3. Ստեղծել օբեկտ : Պատահական գեներացնել օր ամիս տարի 1919 թվականից այս կողմ:
// Oբեկտի համար ստեղծել մեթոդ, որ կհաշվի տվյալ պատահական ամսաթվից քանի տարի է անցել մինչև այսօր,
// ընդ որում հաշվի պետք առնի ամբողջ տարիների քանակը:

/*
* Returns diff of two dates in full years, months, days, hours, minutes, seconds, milliseconds, based on the third arg.
*
* @fromDate :    JavaScript Date Format
* @toDate :      JavaScript Date Format
* @returnData:   'years', 'months', 'days', 'hours', 'minutes', 'seconds'
*
* return :       Number of full years, months, days, hours, minutes or seconds
*
 */
function getDateDiff( fromDate = '1970-1-1', toDate = '', returnData = 'seconds' ){
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
                currentYearDays = ( startMonth ) ? currentYearDays.slice( startMonth ) : currentYearDays;
                if( startDay ) { currentYearDays[ 0 ] -= startDay; }
            } else if( y == endYear ){
                currentYearDays = ( endMonth ) ? currentYearDays.slice( 0, (endMonth+1) ) : currentYearDays;
                if( endDay ) { currentYearDays[ endMonth ] = endDay; }
            } else{
                // Don't do any changes on the currentYearDays array. Just add all months and days as a full year.
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

console.log( getDateDiff( '2021-2-26', '2024-1-1', 'years' ) );
console.log( getDateDiff( '2021-2-26', '2024-1-1', 'months' ) );
console.log( getDateDiff( '2021-2-26', '2024-1-1', 'days' ) );


// let dateCalc = {
//     day: ( Math.random() * 31 ).toFixed(),
//     month: ( Math.random() * 12 ).toFixed(),
//     year: ( Math.random() * (new Date().getFullYear() - 1919) + 1919 ).toFixed(),
//     calcYears: function (){
//         let fromDate = new Date(this.year, this.month, this.day);
//         let toDate = new Date();
//         console.log( 'From Date: ' + fromDate );
//         console.log( 'Current Date: ' + toDate );
//         return getDateDiff( fromDate, toDate, 'years' );
//     }
// }
// console.log( dateCalc.calcYears() );


/////////////////////////////////////////////
// 4.while և for  ցիկլի միջոցով հաշվել 0  մինչև 10 միլիոն թվերի 1000 աստիճանը և  տեսնել ,
// որ ցիկլն է ավելի արագ հաշվում: Արտածել երկուսի հաշվման ժամանակները:

// let startWhile = new Date();
// let w = 0;
// while ( w < 1e6 ) {
//     Math.pow(w, 1000);
//     w++;
// }
// let endWhile = new Date();
// let wTime = endWhile.getTime() - startWhile.getTime();
//
// let startFor = new Date();
// for ( let f = 0; f < 1e6; f++ ) {
//     Math.pow(f, 1000);
// }
// let endFor = new Date();
// let fTime = endFor.getTime() - startFor.getTime()
//
// console.log( `while: ${wTime} ms` );
// console.log( `for: ${fTime} ms` );
//
// console.log( wTime > fTime ? `Result: for() is ${wTime-fTime} ms faster than while()` : `while() is ${fTime-wTime}ms faster than for()` );


/////////////////////////////////////////////
// 5.Ստեղծել ֆունկցիա, որ մեկ վայրկյան պարբերությամբ կարտածի թվեր, այն տիրությում, որին ,
// որպես պարամետրեր տրված կլինի ֆունկցիայում:Օրինանակ printNumbers(5, 10) կարտածի 5,6,7,8,9,10 մեկ վարկյան
// պարբերությամբ:

// function printNumbers(start, end){
//     let numberInterval = setInterval(function (){
//         document.write( start );
//         start++;
//         if( start == end ) {
//             clearInterval(numberInterval);
//             document.write('. Done!')
//         } else {
//             document.write(', ');
//         }
//     }, 1000, start, end);
// }
//
// printNumbers(5, 10);
