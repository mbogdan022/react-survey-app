// import React, { useEffect, useState } from 'react';
// import generatePDF, { Resolution, Margin } from "react-to-pdf";
// import { useSelector } from 'react-redux';
// import Sidebar from '../../components/Sidebar/Sidebar';

// const PDFDocument = () => {
//   const activeMainCategory = useSelector(store => store.store.selectedMainCategory)
//   const questionsAndAnswers = useSelector(store => store.store.questionsAndAnswers);
//   const questionsAndAnswersA2 = useSelector(store => store.store.questionsAndAnswersA2)
//   const questionsAndAnswersA5 = useSelector(store => store.store.questionsAndAnswersA5)

//   const options = {
//     filename: "generated-report.pdf",
//     method: "save",
//     resolution: Resolution.MEDIUM,
//     page: {
//       format: "A4",
//     },
//     canvas: {
//       mimeType: "image/jpeg",
//       qualityRatio: 1
//     },
//     overrides: {
//       pdf: {
//         compress: true
//       },
//       canvas: {
//         useCORS: true
//       }
//     }
//   };

//   const getTargetElement = () => document.getElementById("container");

//   const downloadPdf = () => generatePDF(getTargetElement, options);

//   const [numPages, setNumPages] = useState(1)

//   useEffect(() => {
//     const totalQuestions = questionsAndAnswers.length + questionsAndAnswersA5.length + questionsAndAnswersA2.length;
//     const numPagesNeeded = Math.ceil(totalQuestions / 10); // Assuming 25 questions per page
//     setNumPages(numPagesNeeded);
//   }, [questionsAndAnswers, questionsAndAnswersA5, questionsAndAnswersA2]);

//   console.log('numPages: ', numPages)
  

//   return (
//     <>
//       <Sidebar activeMainCategory={activeMainCategory} />
//       <div style={{ marginLeft: '25%', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100vw' }}>
//         <div>
//           <a style={{
//             padding: 20,
//             height: 5,
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center',
//             backgroundColor: '#363740',
//             borderRadius: 12
//           }} onClick={() => downloadPdf()}>
//             <h3 style={{ color: 'white' }}>Generate PDF</h3>
//           </a>
//           {/* Add a container with dynamic height and overflow */}
//           <div id="container" style={{ overflowY: 'auto', maxHeight: 'calc(100vh - 100px)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//             <h1>Generated Report</h1>
//             <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
//               <thead>
//                 <tr>
//                   <th style={{ border: '1px solid black', padding: '8px' }}>Category</th>
//                   <th style={{ border: '1px solid black', padding: '8px' }}>Factor</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {questionsAndAnswers.map((pair, index) => (
//                   <tr style={{ backgroundColor: pair.color }} key={index}>
//                     <td style={{ border: '1px solid black', padding: '8px' }}>{pair.question}</td>
//                     <td style={{ border: '1px solid black', padding: '8px' }}>{pair.answer}</td>
//                   </tr>
//                 ))}
//                 {questionsAndAnswersA5.map((pair, index) => (
//                   <tr style={{ backgroundColor: pair.color }} key={index}>
//                     <td style={{ border: '1px solid black', padding: '8px' }}>{pair.question}</td>
//                     <td style={{ border: '1px solid black', padding: '8px' }}>{pair.answer}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//             <div style={{ marginTop: 50 }}>
//               <h1>Generated Report Memory Category</h1>
//               <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
//                 <thead>
//                   <tr>
//                     <th style={{ border: '1px solid black', padding: '8px' }}>Parent</th>
//                     <th style={{ border: '1px solid black', padding: '8px' }}>Category</th>
//                     <th style={{ border: '1px solid black', padding: '8px' }}>Factor</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {questionsAndAnswersA2.map((pair, index) => {
//                     return (
//                       <tr style={{ backgroundColor: pair.color }} key={index}>
//                         <td style={{ border: '1px solid black', padding: '8px' }}>{pair.parent}</td>
//                         <td style={{ border: '1px solid black', padding: '8px' }}>{pair.question}</td>
//                         <td style={{ border: '1px solid black', padding: '8px' }}>{pair.answer}</td>
//                       </tr>
//                     )
//                   })}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default PDFDocument;


import React, { useEffect, useState } from 'react';
import generatePDF, { Resolution } from "react-to-pdf";
import { useSelector } from 'react-redux';
import Sidebar from '../../components/Sidebar/Sidebar';

const PDFDocument = () => {
  const activeMainCategory = useSelector(store => store.store.selectedMainCategory)
  const questionsAndAnswers = useSelector(store => store.store.questionsAndAnswers);
  const questionsAndAnswersA2 = useSelector(store => store.store.questionsAndAnswersA2)
  const questionsAndAnswersA5 = useSelector(store => store.store.questionsAndAnswersA5)

  const options = {
    filename: "generated-report.pdf",
    method: "save",
    resolution: Resolution.MEDIUM,
    page: {
      format: "A4",
    },
    canvas: {
      mimeType: "image/jpeg",
      qualityRatio: 1
    },
    overrides: {
      pdf: {
        compress: true
      },
      canvas: {
        useCORS: true
      }
    }
  };

  const downloadPdf = async () => {
    // Generate PDF only after rendering content
    await new Promise(resolve => setTimeout(resolve, 100)); // Delay for content rendering (adjust if needed)
    generatePDF(getTargetElement, options);
  };

  const [numPages, setNumPages] = useState(1);

  useEffect(() => {
    const totalQuestions = questionsAndAnswers.length + questionsAndAnswersA5.length + questionsAndAnswersA2.length;
    const numPagesNeeded = Math.ceil(totalQuestions / 10); // Assuming 10 questions per page
    setNumPages(numPagesNeeded);
  }, [questionsAndAnswers, questionsAndAnswersA5, questionsAndAnswersA2]);

  const getTargetElement = () => document.getElementById("container");

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'row', height: '100vh', width: '100vw' }}>
        <Sidebar activeMainCategory={activeMainCategory} />
        <div style={{ flex: 1, overflowY: 'auto', marginLeft: '20%', padding: '20px' }}>
          <div id="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h1>Generated Report</h1>
            <div style={{ overflowX: 'auto', width: '100%' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
                <thead>
                  <tr>
                    <th style={{ border: '1px solid black', padding: '8px' }}>Category</th>
                    <th style={{ border: '1px solid black', padding: '8px' }}>Factor</th>
                  </tr>
                </thead>
                <tbody>
                  {questionsAndAnswers.map((pair, index) => (
                    <tr style={{ backgroundColor: pair.color }} key={index}>
                      <td style={{ border: '1px solid black', padding: '8px' }}>{pair.question}</td>
                      <td style={{ border: '1px solid black', padding: '8px' }}>{pair.answer}</td>
                    </tr>
                  ))}
                  {questionsAndAnswersA5.map((pair, index) => (
                    <tr style={{ backgroundColor: pair.color }} key={index}>
                      <td style={{ border: '1px solid black', padding: '8px' }}>{pair.question}</td>
                      <td style={{ border: '1px solid black', padding: '8px' }}>{pair.answer}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div style={{ marginTop: 50, marginBottom: 100 }}>
              <h1>Generated Report Memory Category</h1>
              <div style={{ overflowX: 'auto', width: '100%' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
                  <thead>
                    <tr>
                      <th style={{ border: '1px solid black', padding: '8px' }}>Parent</th>
                      <th style={{ border: '1px solid black', padding: '8px' }}>Category</th>
                      <th style={{ border: '1px solid black', padding: '8px' }}>Factor</th>
                    </tr>
                  </thead>
                  <tbody>
                    {questionsAndAnswersA2.map((pair, index) => (
                      <tr style={{ backgroundColor: pair.color }} key={index}>
                        <td style={{ border: '1px solid black', padding: '8px' }}>{pair.parent}</td>
                        <td style={{ border: '1px solid black', padding: '8px' }}>{pair.question}</td>
                        <td style={{ border: '1px solid black', padding: '8px' }}>{pair.answer}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ position: 'fixed', bottom: 0, backgroundColor: '#363740', padding: '20px', textAlign: 'center', width: '100%' }}>
        <a style={{ padding: 20, backgroundColor: '#363740', borderRadius: 12, color: 'white' }} onClick={downloadPdf}>
          Generate PDF
        </a>
      </div>
    </>
  );
};

export default PDFDocument;
