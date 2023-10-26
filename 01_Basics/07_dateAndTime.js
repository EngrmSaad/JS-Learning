let currentDateTime = new Date()

let dateString = currentDateTime.toDateString()
let timeString = currentDateTime.toTimeString()

let formatedDate = currentDateTime.toLocaleString(
    'default',{
        weekday: "narrow"
    }
)

console.table(
    [formatedDate,typeof formatedDate]
)

// console.table(
//     [
//         [
//             currentDateTime, 
//             typeof currentDateTime
//         ],
//         [
//             dateString, 
//             typeof dateString
//         ], 
//         [
//             timeString,
//             typeof timeString
//         ], 
//         [
//             currentDateTime.toLocaleString('default'),
//             typeof currentDateTime.toLocaleString('default')
//         ]
//     ]
// )


