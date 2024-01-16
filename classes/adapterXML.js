const convert = require('xml-js');

class Adapter {
    jsonToXml(json) {
        return convert.js2xml(json, {compact: true, ignoreComment: true, spaces: 4});
    }
}

module.exports = Adapter;


// const xml2js = require('xml2js');

// class XmlJsonAdapter {
//   static convert(xmlData) {
//     return new Promise((resolve, reject) => {
//       const parser = new xml2js.Parser({explicitArray : false});
//       parser.parseString(xmlData, (err, result) => {
//         if(err) {
//           reject(err);
//         } else {
//           resolve(result);
//         }
//       });
//     });
//   }
// }

// module.exports = XmlJsonAdapter;

// // const xml2js = require('xml2js');

// // class XmlJsonAdapter {
// //     static convert(xml) {
// //         return new Promise((resolve, reject) => {
// //             xml2js.parseString(xml, { mergeAttrs: true }, (err, result) => {
// //                 if (err) {
// //                     reject(err);
// //                 } else {
// //                     resolve(result);
// //                 }
// //             });
// //         });
// //     }
// // }