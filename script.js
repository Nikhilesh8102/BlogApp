// let obj = {
//     a: 1,
//     b: { c: 2 },
//     c: { d: { e: { f: 3 } } }
// }

// // obj={
// //     a:1,
// //     b_c:2,
// //     c_d_e_f:3
// // }
// // const newobj = {}
// // function ans(str, obj) {
// //     for (const y in obj) {
// //         if (typeof (obj[y]) === "object") {
// //             str == "" ? ans(y, obj[y]) : ans(str + "_" + y, obj[y]);
// //         } else {
// //             str == "" ? newobj[y] = obj[y] : newobj[str + "_" + y] = obj[y];
// //         }
// //     }
// // }
// // ans("", obj);

// // console.log(newobj);





















// // const newobj = {}
// // function flatNestedProps(prevKey, obj) {
// //     for (const key in obj) {

// //         if (typeof obj[key] === 'object') {
// //             prevKey === "" ? flatNestedProps(key, obj[key]) : flatNestedProps(prevKey + '_' + key, obj[key])
// //         }
// //         else {
// //             prevKey === "" ? newobj[key] = obj[key] : newobj[prevKey + "_" + key] = obj[key]
// //         }
// //     }
// // }
// // flatNestedProps("", obj)
// // console.log(newobj);




// const newobj = {}

// function ans(prevKey, obj) {
//     for (const key in obj) {
//         if (Object.hasOwnProperty.call(obj, key)) {
//             if (typeof obj[key] === 'object') {
//                 prevKey === "" ? ans(key, obj[key]) : ans(prevKey + '_' + key, obj[key])
//             }
//             else {
//                 prevKey === "" ? newobj[key] = obj[key] : newobj[prevKey + '_' + key] = obj[key];
//             }

//         }
//     }
// }

// ans("", obj);
// console.log(newobj)



const obj = { name: 'sumukh', age: 22, address: { state: 'Telangana', pincode: 505505 } }
const deepobj = {}
function deepcopy(obj) {

    for (const key in obj) {
        if (typeof obj[key] !== 'object') {
            deepobj[key] = obj[key]
        }
        else {
            deepobj[key] = deepcopy(obj[key])
        }
    }

}
deepcopy(obj)
console.log(deepobj);

deepobj.name = 'nikhil'
deepobj.address.state = 'delhi'
console.log(deepobj);
console.log(obj);

// for (let key in obj) {
//     console.log(obj[key] == { ...obj[key] });
// }
