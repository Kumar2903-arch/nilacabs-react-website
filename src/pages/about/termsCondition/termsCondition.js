import './style.css';
import { Link } from 'react-router-dom';

export default function TermsAndCondition() {
  return (
    <section className='wrapper'>
      <h4>TERMS & CONDITIONS</h4>
      <div>
        <p>
          <span>1 .</span> We would charge you a prevailing 5.00% GST on the
          total bill & any other taxes, if any introduced newly payable to the.3
          Govt. of India from time to time.
        </p>
        <p>
          <span>2 .</span> Security Escort Last Drop to office will be charged extra 60% from the slab rate mentioned.
        </p>
        <p>
          <span>3 .</span> Kms & Time will be calculated from Shed to Shed.
        </p>
        <p>
          <span>4 .</span> Inter State Permit charges, car parking, Tollgate
          Charge “Extra “Out of station coverage 250km Shed to Shed.
        </p>
        <p>
          <span>5 .</span> Usage more than 4 hours from the above given
          package will be automatically charged to the next packages (For e.g.,
          more than 6 hours will be calculated as 8hrs/80kms package).
        </p>
      </div>
      <div className='pagination_button'>
      <Link to='/homePage'>
    <button class="custom-btn btn-12"><span>Click!</span><span>Home Page</span></button>
      </Link>
      </div>
    </section>
  );
}
