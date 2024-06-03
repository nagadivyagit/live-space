import React from 'react';
import './Cardcss.css';
import image from './Images/image.avif';
import int1 from './Images/int1.avif';
import int2 from './Images/int2.avif';
import int3 from './Images/int3.avif';
import int4 from './Images/int4.avif';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';

 function App() {
  return (
    <div>
    <div className="container3">
    <div className="row">
        <div className="col">
            <div className="centered-h2">
                <h2>One stop shop for all things interiors</h2>
            </div>
            <p>Be it end-to-end interiors, renovation or modular solutions, we have it all for your <br/> home or office. With a wide range of furniture & decor, we have your back from start to finish </p>
        </div>
    </div>
    </div>
    
    


    <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src={image}
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Modular Interiors</MDBCardTitle>
            <MDBCardText>
              
            </MDBCardText>
          </MDBCardBody>
          
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src={int1}
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              This card has supporting text below as a natural lead-in to additional content.
            </MDBCardText>
          </MDBCardBody>
          <MDBCardFooter>
            <small className='text-muted'>Last updated 3 mins ago</small>
          </MDBCardFooter>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src='https://mdbootstrap.com/img/new/standard/city/042.webp'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              This is a wider card with supporting text below as a natural lead-in to additional content. This
              card has even longer content than the first to show that equal height action.
            </MDBCardText>
          </MDBCardBody>
         
        </MDBCard>
      </MDBCol>
    </MDBRow>
    </div>
  );
}
export default App
