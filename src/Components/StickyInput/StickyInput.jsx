import { useEffect, useState } from 'react';
import { Button, FloatingLabel, Form, Table } from 'react-bootstrap';
import './StickyInput.css'
// Import other components like FloatingLabel, Form, Button, Table (if needed)
import React from 'react'




const StickyInput = () => {
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
  const [prevIsKeyboardOpen, setPrevIsKeyboardOpen] = useState(false);
  const [stickyTop, setStickyTop] = useState('12%');
  const [textareaHeight, setTextareaHeight] = useState('70px'); 
  const inputRef = React.createRef();
  useEffect(() => {
    const handleResize = () => {
      const screenHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      setIsKeyboardOpen(screenHeight < documentHeight);
    };
    if (prevIsKeyboardOpen !== isKeyboardOpen) {
      handleResize();
      if (isKeyboardOpen) {
        // alert('Keyboard Opened!');
        setStickyTop('40%')
      }else {
        
        setStickyTop('0%'); // Reset top to 0% when keyboard closes
      }
      // setStickyTop('0%')
    }
    
    setPrevIsKeyboardOpen(isKeyboardOpen);

   /* const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 500) {
        setStickyTop('0'); // Set top to 0% when scrolled past 500px
      } else {
        setStickyTop('12%'); // Reset top to 12% otherwise
      }
    };*/

    window.addEventListener('resize', handleResize);
    // window.addEventListener('scroll', handleScroll);
    // window.addEventListener('scroll',handleResize)

    return () => {
      window.removeEventListener('resize', handleResize);
      // window.removeEventListener('scroll', handleScroll);
      // window.addEventListener('scroll',handleResize)

    }; // Cleanup function
  }, [isKeyboardOpen]);

  const handleTextareaFocus = () => {
    setIsKeyboardOpen(true);
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    }, 0);
  };

  const handleTextareaBlur = () => {
    setIsKeyboardOpen(false);
  };

  return (
    <>
      <div 
        className='sticky-zh-fixed'
        style={{
          position: 'sticky',
          // top: isKeyboardOpen ? '0' : stickyTop,
          top:stickyTop,
          backgroundColor: '#fff',
          width: '80vw',
          zIndex: '4',
          // height:'max-content'
        }}
      >
        <Form style={{ display: 'flex', marginBottom: '2px', justifyContent: 'space-between' }}>
          <FloatingLabel controlId="floatingTextarea2" label="الاجابة" style={{ width: '70%', height: '70px' }}>
            <Form.Control
              as="textarea"
              placeholder="Leave a comment here"
              style={{ height: textareaHeight, marginBottom: '40px' }}
              // other props for your textarea
              onFocus={handleTextareaFocus}
              onBlur={handleTextareaBlur}
              ref={inputRef}
            />
          </FloatingLabel>

          <Button className="buttonsend" type="submit" style={{ display: 'block', fontSize: '1.1rem' }}>
            إرسال
          </Button>
        </Form>
      </div>

      <Table
        className='table-Secondary'
        responsive="sm"
        style={{ width: '80vw', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
        striped
        bordered
        hover
        variant="blue"
      >
         <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th >user name</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td style={{width:'50%'}}></td>
        </tr>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td style={{width:'50%'}}></td>
        </tr>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td style={{width:'50%'}}></td>
        </tr>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td style={{width:'50%'}}></td>
        </tr>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td style={{width:'50%'}}></td>
        </tr>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td style={{width:'50%'}}></td>
        </tr>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td style={{width:'50%'}}></td>
        </tr>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td style={{width:'50%'}}></td>
        </tr>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td style={{width:'50%'}}></td>
        </tr>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td style={{width:'50%'}}></td>
        </tr>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td style={{width:'50%'}}></td>
        </tr>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td style={{width:'50%'}}></td>
        </tr>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td style={{width:'50%'}}></td>
        </tr>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td style={{width:'50%'}}></td>
        </tr>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td style={{width:'50%'}}></td>
        </tr>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td style={{width:'50%'}}></td>
        </tr>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td style={{width:'50%'}}></td>
        </tr>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td style={{width:'50%'}}></td>
        </tr>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td style={{width:'50%'}}></td>
        </tr>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td style={{width:'50%'}}></td>
        </tr>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td style={{width:'50%'}}></td>
        </tr>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td style={{width:'50%'}}></td>
        </tr>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td style={{width:'50%'}}></td>
        </tr>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td style={{width:'50%'}}></td>
        </tr>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td style={{width:'50%'}}></td>
        </tr>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td style={{width:'50%'}}></td>
        </tr>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td style={{width:'50%'}}></td>
        </tr>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td style={{width:'50%'}}></td>
        </tr>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td style={{width:'50%'}}></td>
        </tr>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td style={{width:'50%'}}></td>
        </tr>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td style={{width:'50%'}}></td>
        </tr>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td style={{width:'50%'}}></td>
        </tr>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td style={{width:'50%'}}></td>
        </tr>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td style={{width:'50%'}}></td>
        </tr>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td style={{width:'50%'}}></td>
        </tr>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td style={{width:'50%'}}></td>
        </tr>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td style={{width:'50%'}}></td>
        </tr>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td style={{width:'50%'}}></td>
        </tr>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td style={{width:'50%'}}></td>
        </tr>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td style={{width:'50%'}}></td>
        </tr>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td style={{width:'50%'}}></td>
        </tr>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td style={{width:'50%'}}></td>
        </tr>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td style={{width:'50%'}}></td>
        </tr>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td style={{width:'50%'}}></td>
        </tr>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td style={{width:'50%'}}></td>
        </tr>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td style={{width:'50%'}}></td>
        </tr>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td style={{width:'50%'}}></td>
        </tr>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td style={{width:'50%'}}></td>
        </tr>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td style={{width:'50%'}}></td>
        </tr>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td style={{width:'50%'}}></td>
        </tr>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td style={{width:'50%'}}></td>
        </tr>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td style={{width:'50%'}}></td>
        </tr>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td style={{width:'50%'}}></td>
        </tr>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td style={{width:'50%'}}></td>
        </tr>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td style={{width:'50%'}}></td>
        </tr>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td style={{width:'50%'}}></td>
        </tr>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td style={{width:'50%'}}></td>
        </tr>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td style={{width:'50%'}}></td>
        </tr>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td style={{width:'50%'}}></td>
        </tr>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td style={{width:'50%'}}></td>
        </tr>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td style={{width:'50%'}}></td>
        </tr>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td style={{width:'50%'}}></td>
        </tr>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td style={{width:'50%'}}></td>
        </tr>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td style={{width:'50%'}}></td>
        </tr>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td style={{width:'50%'}}></td>
        </tr>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td style={{width:'50%'}}></td>
        </tr>
        
      </tbody>
      </Table>
    </>
  );
};

export default StickyInput
