import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import Table from 'react-bootstrap/Table';

import './App.css'
import StickyInput from './Components/StickyInput/StickyInput'
// import { Alert, Button, FloatingLabel, Form } from 'react-bootstrap';
// import StickyInput from './Components/StickyInput/StickyInput';

function App() {
  return(
  <>
    <StickyInput/>
    {/* <div>
      <p>sdfsdfsdfs</p>
      <p>rrrrrrrr</p>
      <p>fffffd</p>
      <p>ffff</p>
    </div> */}
  </>
  )}
//   const [stickyTop, setStickyTop] = useState('12%');
//   const [textareaHeight, setTextareaHeight] = useState('70px'); // Initial textarea height

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.scrollY;
//       if (scrollTop > 500) {
//         setStickyTop('0'); // Set top to 0% when scrolled past 500px
//       } else {
//         setStickyTop('12%'); // Reset top to 12% otherwise
//       }
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => window.removeEventListener('scroll', handleScroll); // Cleanup function
//   }, []);
//   return (
//     <>
     
//         <div  className='sticky-zh-fixed' style={{ position: 'sticky', top: stickyTop,
//          backgroundColor:'#fff',width:'80vw',zIndex:'4'}}
//          >
//  <Form  style={{ display: 'flex',marginBottom:'2px', justifyContent: 'space-between' }}  >
 
//   <FloatingLabel controlId="floatingTextarea2" label="الاجابة" style={{ width: '70%', height: '70px' }}>
//     <Form.Control
//       as="textarea"
//       placeholder="Leave a comment here"
//       style={{ height: '70px', marginBottom: '40px' }}
//       // value={userAnswer6}
//       // onChange={handleInputChange6}
//       // disabled={isQuestionSubmitted6}
//       id="textarea-answer"
//       // ref={textareaRef}
//         // style={{ height: textareaHeight }}
//     />
//   </FloatingLabel>

  
  
 
//     <Button className="buttonsend" type="submit" style={{ display: 'block' ,fontSize:'1.1rem'}}>
//       إرسال
//     </Button>
  
// </Form>,

// {/* <hr/> */}
// </div>

//     <Table className='table-Secondary' responsive="sm" style={{width:'80vw',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}} striped  bordered hover variant="blue">
//       <thead>
//         <tr>
//           <th>#</th>
//           <th>First Name</th>
//           <th>Last Name</th>
//           <th >user name</th>
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <td>1</td>
//           <td>Mark</td>
//           <td>Otto</td>
//           <td style={{width:'50%'}}></td>
//         </tr>
//         <tr>
//           <td>1</td>
//           <td>Mark</td>
//           <td>Otto</td>
//           <td style={{width:'50%'}}></td>
//         </tr>
//         <tr>
//           <td>1</td>
//           <td>Mark</td>
//           <td>Otto</td>
//           <td style={{width:'50%'}}></td>
//         </tr>
//         <tr>
//           <td>1</td>
//           <td>Mark</td>
//           <td>Otto</td>
//           <td style={{width:'50%'}}></td>
//         </tr>
//         <tr>
//           <td>1</td>
//           <td>Mark</td>
//           <td>Otto</td>
//           <td style={{width:'50%'}}></td>
//         </tr>
//         <tr>
//           <td>1</td>
//           <td>Mark</td>
//           <td>Otto</td>
//           <td style={{width:'50%'}}></td>
//         </tr>
//         <tr>
//           <td>1</td>
//           <td>Mark</td>
//           <td>Otto</td>
//           <td style={{width:'50%'}}></td>
//         </tr>
//         <tr>
//           <td>1</td>
//           <td>Mark</td>
//           <td>Otto</td>
//           <td style={{width:'50%'}}></td>
//         </tr>
//         <tr>
//           <td>1</td>
//           <td>Mark</td>
//           <td>Otto</td>
//           <td style={{width:'50%'}}></td>
//         </tr>
//         <tr>
//           <td>1</td>
//           <td>Mark</td>
//           <td>Otto</td>
//           <td style={{width:'50%'}}></td>
//         </tr>
//         <tr>
//           <td>1</td>
//           <td>Mark</td>
//           <td>Otto</td>
//           <td style={{width:'50%'}}></td>
//         </tr>
//         <tr>
//           <td>1</td>
//           <td>Mark</td>
//           <td>Otto</td>
//           <td style={{width:'50%'}}></td>
//         </tr>
//         <tr>
//           <td>1</td>
//           <td>Mark</td>
//           <td>Otto</td>
//           <td style={{width:'50%'}}></td>
//         </tr>
//         <tr>
//           <td>1</td>
//           <td>Mark</td>
//           <td>Otto</td>
//           <td style={{width:'50%'}}></td>
//         </tr>
//         <tr>
//           <td>1</td>
//           <td>Mark</td>
//           <td>Otto</td>
//           <td style={{width:'50%'}}></td>
//         </tr>
//         <tr>
//           <td>1</td>
//           <td>Mark</td>
//           <td>Otto</td>
//           <td style={{width:'50%'}}></td>
//         </tr>
//         <tr>
//           <td>1</td>
//           <td>Mark</td>
//           <td>Otto</td>
//           <td style={{width:'50%'}}></td>
//         </tr>
//         <tr>
//           <td>1</td>
//           <td>Mark</td>
//           <td>Otto</td>
//           <td style={{width:'50%'}}></td>
//         </tr>
//         <tr>
//           <td>1</td>
//           <td>Mark</td>
//           <td>Otto</td>
//           <td style={{width:'50%'}}></td>
//         </tr>
//         <tr>
//           <td>1</td>
//           <td>Mark</td>
//           <td>Otto</td>
//           <td style={{width:'50%'}}></td>
//         </tr>
//         <tr>
//           <td>1</td>
//           <td>Mark</td>
//           <td>Otto</td>
//           <td style={{width:'50%'}}></td>
//         </tr>
//         <tr>
//           <td>1</td>
//           <td>Mark</td>
//           <td>Otto</td>
//           <td style={{width:'50%'}}></td>
//         </tr>
//         <tr>
//           <td>1</td>
//           <td>Mark</td>
//           <td>Otto</td>
//           <td style={{width:'50%'}}></td>
//         </tr>
//         <tr>
//           <td>1</td>
//           <td>Mark</td>
//           <td>Otto</td>
//           <td style={{width:'50%'}}></td>
//         </tr>
//         <tr>
//           <td>1</td>
//           <td>Mark</td>
//           <td>Otto</td>
//           <td style={{width:'50%'}}></td>
//         </tr>
//         <tr>
//           <td>1</td>
//           <td>Mark</td>
//           <td>Otto</td>
//           <td style={{width:'50%'}}></td>
//         </tr>
//         <tr>
//           <td>1</td>
//           <td>Mark</td>
//           <td>Otto</td>
//           <td style={{width:'50%'}}></td>
//         </tr>
//         <tr>
//           <td>1</td>
//           <td>Mark</td>
//           <td>Otto</td>
//           <td style={{width:'50%'}}></td>
//         </tr>
//         <tr>
//           <td>1</td>
//           <td>Mark</td>
//           <td>Otto</td>
//           <td style={{width:'50%'}}></td>
//         </tr>
//         <tr>
//           <td>1</td>
//           <td>Mark</td>
//           <td>Otto</td>
//           <td style={{width:'50%'}}></td>
//         </tr>
//         <tr>
//           <td>1</td>
//           <td>Mark</td>
//           <td>Otto</td>
//           <td style={{width:'50%'}}></td>
//         </tr>
//         <tr>
//           <td>1</td>
//           <td>Mark</td>
//           <td>Otto</td>
//           <td style={{width:'50%'}}></td>
//         </tr>
//         <tr>
//           <td>1</td>
//           <td>Mark</td>
//           <td>Otto</td>
//           <td style={{width:'50%'}}></td>
//         </tr>
//         <tr>
//           <td>1</td>
//           <td>Mark</td>
//           <td>Otto</td>
//           <td style={{width:'50%'}}></td>
//         </tr>
//         <tr>
//           <td>1</td>
//           <td>Mark</td>
//           <td>Otto</td>
//           <td style={{width:'50%'}}></td>
//         </tr>
//         <tr>
//           <td>1</td>
//           <td>Mark</td>
//           <td>Otto</td>
//           <td style={{width:'50%'}}></td>
//         </tr>
//         <tr>
//           <td>1</td>
//           <td>Mark</td>
//           <td>Otto</td>
//           <td style={{width:'50%'}}></td>
//         </tr>
//         <tr>
//           <td>1</td>
//           <td>Mark</td>
//           <td>Otto</td>
//           <td style={{width:'50%'}}></td>
//         </tr>
//         <tr>
//           <td>1</td>
//           <td>Mark</td>
//           <td>Otto</td>
//           <td style={{width:'50%'}}></td>
//         </tr>
//         <tr>
//           <td>1</td>
//           <td>Mark</td>
//           <td>Otto</td>
//           <td style={{width:'50%'}}></td>
//         </tr>
//         <tr>
//           <td>1</td>
//           <td>Mark</td>
//           <td>Otto</td>
//           <td style={{width:'50%'}}></td>
//         </tr>
//         <tr>
//           <td>1</td>
//           <td>Mark</td>
//           <td>Otto</td>
//           <td style={{width:'50%'}}></td>
//         </tr>
//         <tr>
//           <td>1</td>
//           <td>Mark</td>
//           <td>Otto</td>
//           <td style={{width:'50%'}}></td>
//         </tr>
//         <tr>
//           <td>1</td>
//           <td>Mark</td>
//           <td>Otto</td>
//           <td style={{width:'50%'}}></td>
//         </tr>
//         <tr>
//           <td>1</td>
//           <td>Mark</td>
//           <td>Otto</td>
//           <td style={{width:'50%'}}></td>
//         </tr>
//         <tr>
//           <td>1</td>
//           <td>Mark</td>
//           <td>Otto</td>
//           <td style={{width:'50%'}}></td>
//         </tr>
//         <tr>
//           <td>1</td>
//           <td>Mark</td>
//           <td>Otto</td>
//           <td style={{width:'50%'}}></td>
//         </tr>
//         <tr>
//           <td>1</td>
//           <td>Mark</td>
//           <td>Otto</td>
//           <td style={{width:'50%'}}></td>
//         </tr>
//         <tr>
//           <td>1</td>
//           <td>Mark</td>
//           <td>Otto</td>
//           <td style={{width:'50%'}}></td>
//         </tr>
//         <tr>
//           <td>1</td>
//           <td>Mark</td>
//           <td>Otto</td>
//           <td style={{width:'50%'}}></td>
//         </tr>
//         <tr>
//           <td>1</td>
//           <td>Mark</td>
//           <td>Otto</td>
//           <td style={{width:'50%'}}></td>
//         </tr>
//         <tr>
//           <td>1</td>
//           <td>Mark</td>
//           <td>Otto</td>
//           <td style={{width:'50%'}}></td>
//         </tr>
//         <tr>
//           <td>1</td>
//           <td>Mark</td>
//           <td>Otto</td>
//           <td style={{width:'50%'}}></td>
//         </tr>
//         <tr>
//           <td>1</td>
//           <td>Mark</td>
//           <td>Otto</td>
//           <td style={{width:'50%'}}></td>
//         </tr>
//         <tr>
//           <td>1</td>
//           <td>Mark</td>
//           <td>Otto</td>
//           <td style={{width:'50%'}}></td>
//         </tr>
//         <tr>
//           <td>1</td>
//           <td>Mark</td>
//           <td>Otto</td>
//           <td style={{width:'50%'}}></td>
//         </tr>
//         <tr>
//           <td>1</td>
//           <td>Mark</td>
//           <td>Otto</td>
//           <td style={{width:'50%'}}></td>
//         </tr>
//         <tr>
//           <td>1</td>
//           <td>Mark</td>
//           <td>Otto</td>
//           <td style={{width:'50%'}}></td>
//         </tr>
//         <tr>
//           <td>1</td>
//           <td>Mark</td>
//           <td>Otto</td>
//           <td style={{width:'50%'}}></td>
//         </tr>
//         <tr>
//           <td>1</td>
//           <td>Mark</td>
//           <td>Otto</td>
//           <td style={{width:'50%'}}></td>
//         </tr>
//         <tr>
//           <td>1</td>
//           <td>Mark</td>
//           <td>Otto</td>
//           <td style={{width:'50%'}}></td>
//         </tr>
//         <tr>
//           <td>1</td>
//           <td>Mark</td>
//           <td>Otto</td>
//           <td style={{width:'50%'}}></td>
//         </tr>
//         <tr>
//           <td>1</td>
//           <td>Mark</td>
//           <td>Otto</td>
//           <td style={{width:'50%'}}></td>
//         </tr>
//         <tr>
//           <td>1</td>
//           <td>Mark</td>
//           <td>Otto</td>
//           <td style={{width:'50%'}}></td>
//         </tr>
//         <tr>
//           <td>1</td>
//           <td>Mark</td>
//           <td>Otto</td>
//           <td style={{width:'50%'}}></td>
//         </tr>
//         <tr>
//           <td>1</td>
//           <td>Mark</td>
//           <td>Otto</td>
//           <td style={{width:'50%'}}></td>
//         </tr>
        
//       </tbody>
//     </Table>


      
    // </>


export default App
