import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Container } from 'react-bootstrap';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import capture from './images/capture.png';
import capture1 from './images/capture1.png';
import capture2 from './images/capture2.png';
import capture3 from './images/capture3.png';
import capture4 from './images/capture4.png';
import capture5 from './images/capture5.png';
import capture6 from './images/capture6.png'
import ta5 from './images/ta5.png';
import  NavScrollExample from './Components/navbar';
import StackedExample from './Components/navber1';
import DarkVariantExample from './Components/navbar2';
import BasicExample0 from './Components/card0';
import BasicExample1 from './Components/Card1';
import BasicExample2 from './Components/Card2';
import BasicExample3 from './Components/Card3';
import BasicExample4 from './Components/Card4';
import BasicExample5 from './Components/Card5';
import BasicExample6 from './Components/Card6';
import BasicExample7 from './Components/Card7';
import AlignmentExample from './Components/navbar3';

function App() {
  return (
    <div className="App">
      <NavScrollExample />
      <Container />
        <div className='py-5 text-center'>
          <a className='aa text-dark fs-3 mx-3'>Products</a>
          <a className='a text-dark fs-3'>Manufacturers</a>
        <hr></hr>
        </div>
    <div>
      </div>  
  <div className='row m-2'>
  <div className='col-md-3'>
    <h5>My Markets</h5>
    <hr></hr>
<StackedExample />
    </div>

  <div className='col-md-6'>
  <DarkVariantExample />
  </div>
  
  <div className='col-md-3'>
  <div className='text-dark bg-light border rounded m-2 p-2'>Sign up to enjoy exciting Buyers Club benefits
  <a className='btn btn-danger border rounded-pill'>Join for free</a>
  <a className='btn btn-dark border rounded-pill'>Sign in</a>
  </div>
  <div className='text-dark bg-light border rounded m-2 p-2'>Buyers Club for all businesses
  <a className='text-right btn btn-dark border rounded-pill'>Learn more</a>
    </div>
    <div className='text-dark bg-light border rounded m-2 p-2'>US $10 off with a new supplier
  <img className='text-end border rounded' src='https://img.alicdn.com/imgextra/i4/O1CN01TJxTjd1m7ufWlgcUQ_!!6000000004908-0-tps-1024-1024.jpg' wigth={42} height={42} />
  </div>
  <div className='text-dark bg-light border rounded m-2 p-2'>RFQ: quotes with supplier preferences
  <img  className='text-end border rounded'src='https://img.alicdn.com/imgextra/i2/O1CN01ips21L1buUuLEZGW7_!!6000000003525-0-tps-128-128.jpg' wigth={42} height={42} />
  </div>
  </div></div>

<div className='row m-2'>
<div className='col-md-4'>
<div className='border rounded bg-light m-2'>
<div className='p-3 m-1'>
<img src='https://img.alicdn.com/tfs/TB1jyqhzy_1gK0jSZFqXXcpaXXa-44-44.png' wigth={16} height={16}/><a>   New arrivals</a>      
</div>
<div className='row text-center'>
<div className='col-md-6 text-center'>
<img className='border rounded' src='https://s.alicdn.com/@sc04/kf/Hc9a58270b1ee490a85f65bd405dfb8e45.jpg_120x120.jpg' wigth={100}/>   
<p>$9.25</p><p>Trending Now</p>
</div> 
<div className='col-md-6 text-center '>
<img className='border rounded' src='https://s.alicdn.com/@sc04/kf/Hd8d9aa330a81425aa92906025bb95405s.jpg_120x120.jpg' wigth={100}/>   
<p >$0.28</p>
<p>Trending Now</p>
</div></div></div>
</div>

<div className='col-md-4'>
<div className='border rounded bg-light m-2'>
<div className='p-3 m-1'>
<img src='https://img.alicdn.com/tfs/TB1VsukzuH2gK0jSZJnXXaT1FXa-38-34.png' wigth={16} height={16}/>   <a>Top-ranking</a>      
</div>
<div className='row text-center'>
<div className='col-md-6 text-center'>
<img className='border rounded' src='https://s.alicdn.com/@sc04/kf/H904278fa0f2b474eb1a2e58c8d5d4208a.jpg_120x120xz.jpg' wigth={100}/>   
<p>$2.50</p><p>40 pieces</p>
</div> 
<div className='col-md-6 text-center '>
<img className='border rounded' src='https://s.alicdn.com/@sc04/kf/Hcf66487abc44479d88fbf70b62c4a245u.jpg_120x120xz.jpg' wigth={100}/>   
<p >$0.01</p>
<p>50 pieces</p>
</div></div>
</div>
</div>

<div className='col-md-4'>
<div className='border rounded bg-light m-2'>
<div className='p-3 m-1'>
<img src='https://img.alicdn.com/imgextra/i2/O1CN01m3E6Kp1nx2NbudQJI_!!6000000005155-2-tps-60-60.png' wigth={16} height={16}/>   <a>Personal Protective Equipment</a>      
</div>
<div className='row text-center'>
<div className='col-md-6 text-center'>
<img className='border rounded' src='https://s.alicdn.com/@sc04/kf/H33b294727cb1428ab1d221b9222a83a9n.jpg_120x120xz.jpg' wigth={100}/>   
<p>$14.00</p>
</div> 
<div className='col-md-6 text-center '>
<img className='border rounded' src='https://s.alicdn.com/@sc04/kf/H8c7c5c1e09bd47968bd8c9ccd5f06be46.jpg_120x120xz.jpg' wigth={100}/>   
<p >$18.00</p>
</div></div></div></div>
</div>

<div className='row m-2'>
<div className='col-md-4'>
<div className='border rounded bg-light m-2'>
<div className='p-3 m-1'>
<img src='https://img.alicdn.com/imgextra/i3/O1CN01NRSdOO1N2zv6KFoVV_!!6000000001513-0-tps-42-48.jpg' wigth={16} height={16}/><a>   New arrivals</a>      
</div>
<div className='row text-center'>
<div className='col-md-6 text-center'>
<img className='border rounded' src='https://s.alicdn.com/@sc04/kf/H6936fafb3dc4480a840acdd2e63f273fK.jpg_120x120xz.jpg' wigth={100}/>   
<p>$9.25</p><p>Trending Now</p>
</div> 
<div className='col-md-6 text-center '>
<img className='border rounded' src='https://s.alicdn.com/@sc04/kf/He7b869ecbf1941008503fda5fc5adacah.jpg_120x120xz.jpg' wigth={100}/>   
<p >$0.28</p>
<p>Trending Now</p></div> 
</div></div>
</div>


<div className='col-md-4'>
<div className='border rounded bg-light m-2'>
<div className='p-3 m-1'>
<img src='https://img.alicdn.com/tfs/TB1XEafzAL0gK0jSZFAXXcA9pXa-40-40.png' wigth={16} height={16}/>   <a>Top-ranking</a>      
</div>
<div className='row text-center'>
<div className='col-md-6 text-center'>
<img className='border rounded' src='https://s.alicdn.com/@sc04/kf/H997e54f1f7b74c139f293cf5f9ab36deu.jpg_120x120xz.jpg' wigth={100}/>   
<p>$2.50</p><p>40 pieces</p>
</div> 
<div className='col-md-6 text-center '>
<img className='border rounded' src='https://s.alicdn.com/@sc04/kf/HLB1.pBWXLc3T1VjSZPfq6AWHXXa0.jpg_120x120xz.jpg' wigth={100}/>   
<p >$0.01</p>
<p>50 pieces</p></div> </div> 
</div>
</div>

<div className='col-md-4'>
<div className='border rounded bg-light m-2'>
<div className='p-3 m-1'>
<img src='https://img.alicdn.com/imgextra/i4/O1CN01caWYqW1cVasvCBKJ2_!!6000000003606-0-tps-46-32.jpg' wigth={16} height={16}/>   <a>Personal Protective Equipment</a>      
</div>
<div className='row text-center'>
<div className='col-md-6 text-center'>
<div>
  <span class="video-play-text">
  <img className='mx-1' src='https://s.alicdn.com/@img/imgextra/i4/O1CN01DWnTUf1TSXgriL2jo_!!6000000002381-2-tps-20-20.png' width={10} height={10}/>
  01:36</span>
<img className='border rounded' src='https://s.alicdn.com/@sc04/kf/He3080dc6244d4f4c8fdd68cdf4feb347C.jpg_120x120xz.jpg' wigth={100}/>   
</div><p>$14.00</p>

</div>
<div className='col-md-6 text-center '>
<div>
<span class="video-play-text">
  <img className='mx-1' src='https://s.alicdn.com/@img/imgextra/i4/O1CN01DWnTUf1TSXgriL2jo_!!6000000002381-2-tps-20-20.png' width={10} height={10}/>
  00:39</span>
<img className='border rounded' src='https://s.alicdn.com/@sc04/kf/He7e0263518fb44ebabd8ac126594aba9s.jpg_120x120xz.jpg' wigth={100}/>   
<p >$18.00</p>
</div></div> </div> 
</div></div>
</div>

<div className='row m-2'>
<div className='col-md-6'>
<div className='border rounded m-2'>
  <h3 className='text-center'>Customizable products</h3>
   <p>Provided by 60,000+ experienced manufacturers with design and production capabilities and on-time delivery.</p> 
   <div className='text-end'>
  <span ><img  src='https://img.alicdn.com/tfs/TB1SkTnbcKfxu4jSZPfXXb3dXXa-242-148.jpg' /></span>
</div>
<div className='row'>
<div className='col-md-6'>
<div className='border rounded text-center bg-light m-2'>
<h4>Source from factories</h4>
<div className='row btn'>
<div className='col-md-4 border rounded btn m-1'>
<img src='https://s.alicdn.com/@sc04/kf/H8e2c6ff853f9455ab368b46d6829b6f7Q.jpg_100x100xz.jpg' width={50} height={50}/>
</div>
<div className='col-md-4 border rounded btn m-1'>
<img src='https://s.alicdn.com/@sc04/kf/H983392ef6a3d4925ad1ca800a2c980c0b.jpg_100x100xz.jpg' width={50} height={50}/>
</div>
<div className='col-md-4 border rounded btn m-1'>
<img src='https://s.alicdn.com/@sc04/kf/H8b863b6cb065447280a51de6d6d9dbe8l.jpg_100x100xz.jpg' width={50} height={50}/>
</div>
</div>
</div>
</div>

<div className='col-md-6'>
<div className='border rounded text-center bg-light m-2'>
<h4>Top-ranking supplierss</h4>
<div className='row btn'>
<div className='col-md-4 border rounded btn m-1'>
<img src='https://s.alicdn.com/@sc04/kf/H50cdf34c2f23402197bf9061b30abfa36.jpg_100x100xz.jpg' width={50} height={50}/>
</div>
<div className='col-md-4 border rounded btn m-1'>
<img src='https://s.alicdn.com/@sc04/kf/Hde14fb0c41ca43abbefd9c9a902ba042r.png_100x100xz.jpg' width={50} height={50}/>
</div>
<div className='col-md-4 border rounded btn m-1'>
<img src='https://s.alicdn.com/@sc04/kf/H9b5d85cc9eb84bbea6b61d0ac29c0fce6.jpg_100x100xz.jpg' width={50} height={50}/>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className='col-md-6'>
<div className='border rounded m-2'>
  <h3  className='text-center'>Ready-to-ship products</h3>
  <p>Source from 15 million products that are ready to ship, and leave the facility within 15 days.
  </p>
  <div  className='text-end'>
  <span>
    <img src='https://img.alicdn.com/tfs/TB1F99dzrY1gK0jSZTEXXXDQVXa-221-131.jpg' /></span></div>
  <div className='row'>
<div className='col-md-6'>
<div className='border rounded text-center bg-light m-2'>
<h4>Exclusive discounts</h4>
<div className='row btn'>
<div className='col-md-4 border rounded btn m-1'>
<img src='https://s.alicdn.com/@sc04/kf/Hbcc1fe78c2c74eb1a0f0b7db05d0234d2.jpg_100x100xz.jpg' width={50} height={50}/>
</div>
<div className='col-md-4 border rounded btn m-1'>
<img src='https://s.alicdn.com/@sc04/kf/H6358adc2df8b4b87bc727ea09f0f613fZ.jpg_100x100xz.jpg' width={50} height={50}/>
</div>
<div className='col-md-4 border rounded btn m-1'>
<img src='https://s.alicdn.com/@sc04/kf/Hcb0f153de4ce42c4ae6e883f35e2ebd9b.jpg_100x100xz.jpg' width={50} height={50}/>
</div>
</div>
</div>
</div>
<div className='col-md-6'>
<div className='border rounded text-center bg-light m-2'>
<h4>Weekly deals</h4>
<div className='row btn'>
<div className='col-md-4 border rounded btn m-1'>
<img src='https://s.alicdn.com/@sc04/kf/Hf3e3eb09388a4d40a795495831ec10953.jpg_100x100xz.jpg' width={50} height={50}/>
</div>
<div className='col-md-4 border rounded btn m-1'>
<img src='https://s.alicdn.com/@sc04/kf/H20b092db5b04490299f9d564c837c7d74.png_100x100xz.jpg' width={50} height={50}/>
</div>
<div className='col-md-4 border rounded btn m-1'>
<img src='https://s.alicdn.com/@sc04/kf/Hcc591b34bf8740c0844ffd066596986fU.jpg_100x100xz.jpg' width={50} height={50}/>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div>
<h2>Consumer Electronics</h2>
</div>

<div className='row m-2'>
<div className='col-md-3'>
<div className='pic1 m-2'>
<h4 className='text-white p-5'>Selected novelty products</h4>
<span className='btn btn-light border rounded-pill px-5'>Source now</span>
</div>
</div>
<div className='col-md-3 '>
<div className='border rounded bg-light text-center m-2'><img src='https://img.alicdn.com/tfs/TB1neG1rHj1gK0jSZFOXXc7GpXa-32-32.png' />
  <span className='fs-4'>Top-ranking suppliers</span>
  <p className=' text-start fs-6'> Customization service available</p>
 <p className="certificate border rounded text-center btn" data-spm-anchor-id="a2700.product_home_l0.0.i3.2ce267afMaCg61"><i class="icbu-certificate-icon icbu-certificate-icon-verified"></i>
 <img src='https://s.alicdn.com/@sc04/kf/Ha8300fa2ed514763a65a2b6190b77abc1.jpg_220x220.jpg' height={100}/>
 </p></div>
<div className='border rounded m-2'>
<div className='border rounded bg-light text-center btn'><img src='https://img.alicdn.com/imgextra/i2/O1CN014wPaUL1pd0IbZp3ft_!!6000000005382-2-tps-200-200.png' height={30}/>
  <span className='fs-5'>Shipping and import duties included</span>
  <p className='text-start fs-6'> Customization service available</p>
  
 <div className='border rounded  text-center btn'>
 <img  src='https://s.alicdn.com/@sc04/kf/Hcb596afbefb04f938c88af3d9e5c2a59p.jpg_220x220.jpg' height={100}/>
</div>
</div>
</div></div>
<div className='col-md-3'>
<div className='border rounded bg-light text-center m-2'>
 <img src='https://img.alicdn.com/tfs/TB1WB9WrQP2gK0jSZPxXXacQpXa-32-32.png' height={30}/>
<span className='fs-3'>Top sales</span>
<p className='text-start fs-6'>Mobile Phone & Computer Repair Parts</p>
<p className='border rounded text-center btn'>
<img src='https://s.alicdn.com/@sc04/kf/Hec357054b2864aa09b484aeeafaddfe2g.jpg_220x220.jpg' height={100}/></p>
</div>
  <div>
<div className='border rounded bg-light text-center m-2'>
 <p className='fs-4'> Chargers, Batteries & Power Supplies</p>
 <p className='border rounded text-center btn'>
<img src='https://s.alicdn.com/@sc04/kf/Hca59caabd97144478c7b69679a43c9d2y.jpg_220x220.jpg' height={100}/></p>
</div>
</div>
</div>
<div className='col-md-3'>
<div  className='border rounded bg-light text-center m-2'>
 <p className='fs-4'>Smart Electronics</p> 
<p className='border rounded btn'>
  <img src='https://s.alicdn.com/@sc04/kf/HTB1fhzZeL1H3KVjSZFHq6zKppXax.jpg_220x220.jpg' height={100}/>
</p>
</div>

<div className=' border rounded bg-light text-center m-2'>
 <p className='fs-4'> VR, AR, MR Hardware & Software</p>
<p className='border rounded btn'>
<img src='https://s.alicdn.com/@sc04/kf/Hff2ed7c8377c4b4e9a861d67886a31c4m.jpg_220x220.jpg' height={100}/>
</p>
</div>
</div>
</div>
<div>
<h2>Apparel</h2>
</div>

<div className='row m-2'>
<div className='col-md-3'>
<div className='pic2 m-2'>
<h4 className='text-white p-5'>Discover trending styles</h4>
<span className='btn btn-light border rounded-pill px-5 '>Source now</span>
</div>
</div>
<div className='col-md-3'>
<div className='border rounded bg-light text-center m-2'>
  <img src='https://img.alicdn.com/tfs/TB1neG1rHj1gK0jSZFOXXc7GpXa-32-32.png' />
  <span className='fs-4'>Top-ranking suppliers</span>
  <p className='text-start fs-6'> Customization service available</p>

 <p className="certificate border rounded btn" data-spm-anchor-id="a2700.product_home_l0.0.i3.2ce267afMaCg61"> <i class="icbu-certificate-icon icbu-certificate-icon-verified"></i>
 <img src='https://s.alicdn.com/@sc04/kf/H6345ee4e0f044595b7989b617431f124A.jpg_220x220.jpg' height={90}/>
 </p></div>

<div className='border rounded bg-light text-center m-2'>
<img src='https://img.alicdn.com/imgextra/i2/O1CN014wPaUL1pd0IbZp3ft_!!6000000005382-2-tps-200-200.png' height={30}/>
  <span className='fs-5'>Shipping and import duties included</span>
  <p className='text-start fs-6'> Customization service available</p>
  <p className='border rounded btn' >
 <img src='https://s.alicdn.com/@sc04/kf/Hdce5833196c54dfb8238eee6b514d19dg.jpg_220x220.jpg' height={90}/></p>

</div></div>
<div className='col-md-3'>
<div  className='border rounded bg-light text-center m-2'>
 <img src='https://img.alicdn.com/tfs/TB1WB9WrQP2gK0jSZPxXXacQpXa-32-32.png' height={30}/>
<span className='fs-3'>Top sales</span>
<p className='text-start fs-6'>Mobile Phone & Computer Repair Parts</p>

<p className='border rounded btn'>
<img src='https://s.alicdn.com/@sc04/kf/Hcdd906afb60346dfb2e3de9b6fbe749fk.jpg_220x220.jpg' height={100}/>
</p>
  </div>
<div className='border rounded bg-light text-center m-2'>
<p className='fs-3'>Men's Clothing</p>
<p className='border rounded btn'>
<img src='https://s.alicdn.com/@sc04/kf/HTB1jAKWDQyWBuNjy0Fpq6yssXXaW.jpg_220x220.jpg' height={100}/>
</p></div></div>

<div className='col-md-3'>
<div className='border rounded bg-light text-center m-2'>
<p className='fs-3'> Other Apparel</p> 
<p className='border rounded btn'>
  <img src='https://s.alicdn.com/@sc04/kf/H8b87bfd8a7a64bf391b0548591ffee99v.jpg_220x220.jpg' height={100}/>
</p>
</div>

<div className='border rounded text-center bg-light m-2'>
<p className='fs-4'>Novelty & Special Use</p>
<p className='border rounded btn'>
<img src='https://s.alicdn.com/@sc04/kf/HTB1kE3fJHPpK1RjSZFFq6y5PpXaB.jpg_220x220.jpg' height={100}/></p>
</div></div></div>

<div>
<h2>Vehicle Parts & Accessories</h2>
</div>

<div className='row m-2'>
<div className='col-md-3'>
<div className='pic3 m-2'>
<h4 className='text-white p-5'>Diversified procurement solutions</h4>
<span className='btn btn-light border rounded-pill px-5 '>Source now</span>
</div>
</div>
<div className='col-md-3'>
<div className='border rounded text-center bg-light m-2'>
<img src='https://img.alicdn.com/tfs/TB1neG1rHj1gK0jSZFOXXc7GpXa-32-32.png' />
  <span className='fs-4'>Top-ranking suppliers</span>
  <p className='text-start fs-6'>One-stop services for your store</p>

 <p className="certificate border rounded btn" data-spm-anchor-id="a2700.product_home_l0.0.i3.2ce267afMaCg61"> <i class="icbu-certificate-icon icbu-certificate-icon-verified"></i>
 <img src='https://s.alicdn.com/@sc04/kf/H65300a8f636447cfbd46d8b917179299w.jpg_220x220.jpg' height={90}/>
 </p>
</div>
<div className='border rounded m-2 text-center bg-light'>
  <img src='https://img.alicdn.com/imgextra/i2/O1CN014wPaUL1pd0IbZp3ft_!!6000000005382-2-tps-200-200.png' height={30}/>
  <span className='fs-5'>Shipping and import duties included</span>
  <p className='text-start fs-5'> Customization service available</p>
 <p className='border rounded btn'>
 <img src='https://s.alicdn.com/@sc04/kf/Hfa732daadb7d49feb682b649009993d8k.jpg_220x220.jpg' height={90}/></p>
</div>
</div>
<div className='col-md-3'>
<div className='border rounded text-center m-2 bg-light'>
 <img src='https://img.alicdn.com/tfs/TB1WB9WrQP2gK0jSZPxXXacQpXa-32-32.png' height={30}/>
 <span className='fs-3'>Top sales</span> 
  <p className='text-start fs-5'>Wheels, Tires & Accessories</p>
<p className='border rounded btn'>
 <img src='https://s.alicdn.com/@sc04/kf/H6058ce05ada340d799f1d499217a730cB.jpg_220x220.jpg' height={100}/>
</p>
</div>
<div className='border rounded text-center bg-light m-2'>
<p className='fs-4'>Recovery & Off-road Accessories</p>
<p className='border rounded btn'>
<img src='https://s.alicdn.com/@sc04/kf/Hfd405dac2a72407f99024e47bfb8ffe6Z.jpg_220x220.jpg' height={100}/></p>
</div>
</div>
<div className='col-md-3'>
<div className='border rounded text-center m-2 bg-light'>
<p className='fs-4'>Motorcycle Parts & Accessories</p>
<p className='border rounded btn'>
  <img src='https://s.alicdn.com/@sc04/kf/HTB1CPf.KVzqK1RjSZFoq6zfcXXav.jpg_220x220.jpg' height={100}/>
</p> 
</div>
<div className='border rounded text-center m-2 bg-light'>
<p className='fs-3'>Universal Parts</p>
<p className='border rounded btn'>
<img src='https://s.alicdn.com/@sc04/kf/HTB1D_cgXK6sK1RjSsrbq6xbDXXaY.jpg_220x220.jpg' height={100}/>
</p></div>
</div>
</div>

<div>
<h2>Weekly deals</h2>
</div>

<div className='row m-2' >
<div className='col-md-4'>
<div className='text-center border bg-light m-2 rounded p-2'>
<div className='row'>
<div className='col-md-6'>
<p className='border rounded btn'>
<img src='https://s.alicdn.com/@sc04/kf/Hfe9b07a0448c411ca24b138e1974ab12F.jpg_220x220.jpg' height={100}/></p></div>

<div className='col-md-6'>
<p className='border rounded btn'>
<img src='https://s.alicdn.com/@sc04/kf/H8fe6924b86414360bc8180ff67f0c951F.jpg_220x220.jpg' height={100}/></p></div>
<p>
<button className=' text-white btn btn-danger border rounded-pill px-5'>View more</button>
</p></div>
</div>
</div>

<div className='col-md-4'>
<div className='text-center border bg-light m-2 rounded p-2'>
<div className='row'>
<div className='col-md-6'>
<p className='border rounded btn'>
<img src='https://s.alicdn.com/@sc04/kf/Hd52559c9356446e6aa482c4d7dfb2a7fa.jpg_220x220.jpg' height={100}/></p></div>
<div className='col-md-6'>
<p className='border rounded btn'>
<img src='https://s.alicdn.com/@sc04/kf/H5dcb7ed3ef8d4dda8cfea4f2cc929a30C.jpg_220x220.jpg'height={100}/></p></div>
<p>
<button className='btn btn-danger border rounded-pill px-5 '>View more</button>
</p></div>
</div>
</div>

<div className='col-md-4'>
<div className='text-center border bg-light m-2 rounded p-2'>
<div className='row'>
<div className='col-md-6'>
<p className='border rounded btn'>
<img src='https://s.alicdn.com/@sc04/kf/HTB1Hl.xNZfpK1RjSZFOq6y6nFXaq.jpg_220x220.jpg'height={100}/></p></div>
<div className='col-md-6'>
<p className='border rounded btn'>
<img src='https://s.alicdn.com/@sc04/kf/Hf25410169b0b49d5996f98bb8c8265eeU.jpg_220x220.jpg'height={100}/></p></div>
<p>
<button className='btn btn-danger border rounded-pill px-5 '>View more</button>
</p></div></div></div></div>

<div className='row m-2'>
<div className='col-md-3 m-2'>
  <BasicExample0 />
</div>
<div className='col-md-3 m-2'>
  <BasicExample1 />
</div>
<div className='col-md-3 m-2'>
  <BasicExample2 />
</div>
<div className='col-md-3 m-2'>
  <BasicExample3 />
</div>
</div>


<div className='row m-2'>
<div className='col-md-3 m-2'>
  <BasicExample4 />
</div>
<div className='col-md-3 m-2'>
  <BasicExample5 />
</div>
<div className='col-md-3 m-2'>
  <BasicExample6 />
</div>
<div className='col-md-3 m-2'>
  <BasicExample7 />
    </div>
</div>


<div className='fs-2 fw-bold p-2'>  Trade servicesr
  <span className='fs-5 text-secondary mx-2'>  Alibaba.com's trade services help ensure that your purchases are protected.</span>   
</div>
<div className='row m-2'>
<div className='col-md-6'>
<div class="grid">
<div className='img-w'>
<img className='blur' src={capture1} alt="capture"/>
 <div className='content fade text-white'>
  <h3>Benefits</h3>
  <ul><li>On-time shipping</li><li>Quality protection</li></ul> <a>Learn more→</a>
  </div>
  <div>
<div className='pic5'>
<div className='pic6'>
 <i className='ta'></i>
</div>
  <div className='text1'> 
  <h3>Trade Assurance</h3>
  <p>ORDER PROTECTION</p>
</div></div></div></div></div></div>

<div className='col-md-6'>
<div class="grid">
<div className='img-w'>
<img className='blur' src={capture} alt="capture"/>
 <div className='content fade text-white'>
  <h3>Benefits</h3>
  <ul><li>Production monitoring</li><li>On-site factory check</li><li>Reduced risks in delays and product conformity</li></ul> <a>Learn more→</a>
  </div>

  <div className='pic5'>
<div className='pic6'>
 <i className='ta1'></i>
</div>
  <div className='text1'> 
  <h3>Inspection solution</h3>
  <p>INSPECTION</p>
</div></div></div></div></div></div>

<div className='row m-2'>
<div className='col-md-6'>
<div class="grid">
<div className='img-w'>
<img className='blur' src={capture2} alt="capture"/>
 <div className='content fade text-white'>
  <h3>Benefits</h3>
  <ul><li>On-time shipping</li><li>Quality protection</li></ul> <a>Learn more→</a>
  </div>
  <div className='pic7'>
<div className='pic8'>
 <i className='ta2'  src={ta5}></i>
</div>
  <div className='text2'> 
  <h3>Payment</h3>
  <p>PAYMENT SOLUTION</p>
</div></div></div></div></div>

<div className='col-md-6'>
<div class="grid">
<div className='img-w'>
<img className='blur' src={capture3} alt="capture"/>
 <div className='content fade text-white'>
  <h3>Benefits</h3>
  <ul><li>Production monitoring</li><li>On-site factory check</li><li>Reduced risks in delays and product conformity</li></ul> <a>Learn more→</a>
  </div>
  <div className='pic5'>
<div className='pic6'>
 <i className='ta3'></i>
</div>
  <div className='text1'> 
  <h3>Inspection solution</h3>
  <p>INSPECTION</p>
</div></div></div></div></div></div>

 <h3>Suppliers by country or region</h3> 
  <span className='t6'><img className='t5' src='https://s.alicdn.com/@img/tfs/TB1aUq6cgoQMeJjy0FoXXcShVXa-48-48.png_80x80.jpg'/> japan <img className='t5' src='https://s.alicdn.com/@img/tfs/TB18omIbIrI8KJjy0FhXXbfnpXa-48-48.png_80x80.jpg'/> USA <img className='t5' src='https://s.alicdn.com/@img/tfs/TB1U8_xAeH2gK0jSZJnXXaT1FXa-268-179.jpg_80x80.jpg'/> Italy <img className='t5' src='https://s.alicdn.com/@img/tps/TB1QwGEPFXXXXXUaXXXXXXXXXXX-48-48.png_80x80.jpg'/> Turkey <img className='t5' src='https://s.alicdn.com/@img/tps/TB1tQC4PFXXXXaOXpXXXXXXXXXX-48-48.png_80x80.jpg'/> Malaysia <img className='t5' src='https://s.alicdn.com/@img/tps/TB1WVfXPFXXXXXvXpXXXXXXXXXX-48-48.png_80x80.jpg'/> South Korea <img className='t5' src='https://s.alicdn.com/@img/tps/TB1fky3PFXXXXcuXpXXXXXXXXXX-48-48.png_80x80.jpg'/> Vietnam <img className='t5'src='https://s.alicdn.com/@img/imgextra/i3/O1CN01Sbi1Tm28po6huT3zL_!!6000000007982-2-tps-48-48.png_80x80.jpg'/> Russia <img className='t5'src='https://s.alicdn.com/@img/tps/TB1xQi8PFXXXXaRXpXXXXXXXXXX-48-48.png_80x80.jpg'/> Thailand</span>

<img className='imo' src='https://i.alicdn.com/img/imgextra/i2/O1CN01MKFItD1FWkrP4y3WC_!!6000000000495-2-tps-1500-60.png'/>

<hr className='text-black'></hr>

<div className='row m-2 bg-secondary text-center'>
<div className='col-md-4'>
<div>Download:
<img className='t2 border rounded' src={capture5}/>
<img className='t2 border rounded' src={capture4}/>
 </div></div>

<div className='col-md-4'>
<div>Alibaba Supplier app :
<img className='t2 border rounded' src={capture6}/>
</div></div>

<div className='col-md-4'>
<div>Follow us :
<FacebookIcon className='text-black btn bg-light px-6 border rounded fs-1 p-0' icon="fa-light fa-facebook"/>
<img className='t3' src='//img.alicdn.com/imgextra/i4/O1CN01pN5ZVp1M2FjfZfoAm_!!6000000001376-2-tps-60-60.png'/>
<img className='t3' src='//img.alicdn.com/imgextra/i3/O1CN01fEq1ov1bzXEwzkxBv_!!6000000003536-2-tps-60-60.png'/>
<button className='text-white btn border rounded'>In</button>
<img className='t3' src='//img.alicdn.com/imgextra/i1/O1CN01PprBbh1gpyyZGs4O6_!!6000000004192-2-tps-60-60.png'/>
<TwitterIcon className='text-black btn bg-light px-6 border rounded fs-1 p-0 ' icon="fa-light fa-twitter"/>
</div>
</div>
</div>

<div className='text-center'>
<p>Alibaba.com Site: International - Español - Português - Deutsch - Français - Italiano - हिंदी - Pусский - 한국어 - 日本語 - اللغة العربية - ภาษาไทย - Türk - Nederlands - tiếng Việt - Indonesian - עברית </p>
<p>AliExpress | 1688.com | Tmall Taobao World | Alipay | Lazada</p>
<p>Browse Alphabetically: Onetouch | Showroom | Country Search | Suppliers | Affiliate</p>
<p>Product Listing Policy - Intellectual Property Protection - Privacy Policy - Terms of Use - User Information Legal Enquiry Guide</p>
</div>

<div  className='text-center'>
<img className='t1 ' src='https://img.alicdn.com/tfs/TB1VtZtebH1gK0jSZFwXXc7aXXa-65-70.gif' />
<span> © 1999-2023 Alibaba.com. All rights reserved.</span>
</div>

<div  className='text-center'>
<img className='t1' src='https://img.alicdn.com/tfs/TB1QhYprKT2gK0jSZFvXXXnFXXa-20-20.png' />
   <span> 浙公网安备 33010002000092号 浙B2-20120091-4</span>
</div>
<br></br>
<hr></hr>
<AlignmentExample />
</div>
);};
export default App;
