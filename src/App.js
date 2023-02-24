import './App.css';
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
import Table from './Components/Table';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
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
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <NavScrollExample />
      <Container />
      <header className="App-header">
       <div className='App-logo'>
        <div className='text-white text-center p-5 mb-2'>
          <a className='text-white mx-5'>Products</a>
          <a>Manufacturers</a>
        </div>
        <div className='text-center'>
        <input placeholder='winter clothes for kids' />
        <button ><img src="https://img.alicdn.com/imgextra/i1/O1CN01WaDuwO256WBsSocYY_!!6000000007477-2-tps-48-48.png"></img>
          Search</button>
          <div className=''>
          <a className='text-white mx-2'>clothes</a>
          <a className='text-white mx-2'>gucci shoes</a>
          <a className='text-white mx-2'>vapes 2000 puffs</a>
          <a className='text-white mx-2'>candy</a>
          <a className='text-white mx-2'>used mobile</a>
          <a className='text-white mx-2'>knife hunting</a>
          <a className='text-white mx-2'>sunglasses</a>
    </div></div></div></header>
      
  <div className='container m-5 border rounded w-100vh h-100vh'>
  <div className='row'>
  <div className='col-md-4'>
    <h1 className='fs-5 m-2 p-2'>my markets</h1>
    <hr></hr>
<StackedExample />
    </div>
  <div className='col-md-8 p-4'>
  <DarkVariantExample />
  <div className='home-col-right'>
  <div className='col-right'>
  <div className='text-white p-2 bg-secondary boder rounded '>Sign up to enjoy exciting Buyers Club benefits
  <a className='btn btn-danger px-4 rounded-pill'>Join for free</a>
  <a className='btn btn-light m-1 px-5 rounded-pill'>Sign in</a>
  </div>
  </div>
  <div className='col-right'>
  <div className='text-white p-2 bg-secondary boder rounded '>Buyers Club for all businesses
  <a className='btn btn-dark m-3 px-5 rounded-pill'>Learn more</a>
    </div></div>
    <div className='col-right'>
    <div className='text-white p-2 bg-secondary boder rounded'>US $10 off with a new supplier
  <img src='https://img.alicdn.com/imgextra/i4/O1CN01TJxTjd1m7ufWlgcUQ_!!6000000004908-0-tps-1024-1024.jpg' wigth={52} height={52} />
  </div>
  </div>
  <div className='col-right'>
  <div className='text-white p-2  bg-secondary boder rounded '>RFQ: quotes with supplier preferences
  <img src='https://img.alicdn.com/imgextra/i2/O1CN01ips21L1buUuLEZGW7_!!6000000003525-0-tps-128-128.jpg' wigth={52} height={52} />
  </div></div></div></div></div></div>

  <div className='container'>
<div className='row'>
<div className='col-md-4'>
<div className='border rounded'>
<div className='p-3 m-1'>
<img src='https://img.alicdn.com/tfs/TB1jyqhzy_1gK0jSZFqXXcpaXXa-44-44.png' wigth={16} height={16}/><a>   New arrivals</a>      
</div>
<div className='row text-center boder-center'>
<div className='col-md-6 text-center'>
<img className='border rounded' src='https://s.alicdn.com/@sc04/kf/Hc9a58270b1ee490a85f65bd405dfb8e45.jpg_120x120.jpg' wigth={100}/>   
<p>$9.25</p><p>Trending Now</p>
</div> 
<div className='col-md-6 text-center '>
<img className='border rounded' src='https://s.alicdn.com/@sc04/kf/Hd8d9aa330a81425aa92906025bb95405s.jpg_120x120.jpg' wigth={100}/>   
<p >$0.28</p>
<p>Trending Now</p></div> </div> 
</div>
</div>

<div className='col-md-4'>
<div className='border rounded'>
<div className='p-3 m-1'>
<img src='https://img.alicdn.com/tfs/TB1VsukzuH2gK0jSZJnXXaT1FXa-38-34.png' wigth={16} height={16}/>   <a>Top-ranking</a>      
</div>
<div className='row text-center boder-center'>
<div className='col-md-6 text-center'>
<img className='border rounded' src='https://s.alicdn.com/@sc04/kf/H904278fa0f2b474eb1a2e58c8d5d4208a.jpg_120x120xz.jpg' wigth={100}/>   
<p>$2.50</p><p>40 pieces</p>
</div> 
<div className='col-md-6 text-center '>
<img className='border rounded' src='https://s.alicdn.com/@sc04/kf/Hcf66487abc44479d88fbf70b62c4a245u.jpg_120x120xz.jpg' wigth={100}/>   
<p >$0.01</p>
<p>50 pieces</p></div> </div> 
</div></div>

<div className='col-md-4'>
<div className='border rounded'>
<div className='p-3 m-1'>
<img src='https://img.alicdn.com/imgextra/i2/O1CN01m3E6Kp1nx2NbudQJI_!!6000000005155-2-tps-60-60.png' wigth={16} height={16}/>   <a>Personal Protective Equipment</a>      
</div>
<div className='row text-center boder-center'>
<div className='col-md-6 text-center'>
<img className='border rounded' src='https://s.alicdn.com/@sc04/kf/H33b294727cb1428ab1d221b9222a83a9n.jpg_120x120xz.jpg' wigth={100}/>   
<p>$14.00</p>
</div> 
<div className='col-md-6 text-center '>
<img className='border rounded' src='https://s.alicdn.com/@sc04/kf/H8c7c5c1e09bd47968bd8c9ccd5f06be46.jpg_120x120xz.jpg' wigth={100}/>   
<p >$18.00</p></div> </div> 
</div></div>
</div>
</div>

<div className='container m-5'>
<div className='row'>
<div className='col-md-4'>
<div className='border rounded'>
<div className='p-3 m-1'>
<img src='https://img.alicdn.com/imgextra/i3/O1CN01NRSdOO1N2zv6KFoVV_!!6000000001513-0-tps-42-48.jpg' wigth={16} height={16}/><a>   New arrivals</a>      
</div>
<div className='row text-center boder-center'>
<div className='col-md-6 text-center'>
<img className='border rounded' src='https://s.alicdn.com/@sc04/kf/H6936fafb3dc4480a840acdd2e63f273fK.jpg_120x120xz.jpg' wigth={100}/>   
<p>$9.25</p><p>Trending Now</p>
</div> 
<div className='col-md-6 text-center '>
<img className='border rounded' src='https://s.alicdn.com/@sc04/kf/He7b869ecbf1941008503fda5fc5adacah.jpg_120x120xz.jpg' wigth={100}/>   
<p >$0.28</p>
<p>Trending Now</p></div> </div> 
</div>
</div>

<div className='col-md-4'>
<div className='border rounded'>
<div className='p-3 m-1'>
<img src='https://img.alicdn.com/tfs/TB1XEafzAL0gK0jSZFAXXcA9pXa-40-40.png' wigth={16} height={16}/>   <a>Top-ranking</a>      
</div>
<div className='row text-center boder-center'>
<div className='col-md-6 text-center'>
<img className='border rounded' src='https://s.alicdn.com/@sc04/kf/H997e54f1f7b74c139f293cf5f9ab36deu.jpg_120x120xz.jpg' wigth={100}/>   
<p>$2.50</p><p>40 pieces</p>
</div> 
<div className='col-md-6 text-center '>
<img className='border rounded' src='https://s.alicdn.com/@sc04/kf/HLB1.pBWXLc3T1VjSZPfq6AWHXXa0.jpg_120x120xz.jpg' wigth={100}/>   
<p >$0.01</p>
<p>50 pieces</p></div> </div> 
</div></div>

<div className='col-md-4'>
<div className='border rounded'>
<div className='p-3 m-1'>
<img src='https://img.alicdn.com/imgextra/i4/O1CN01caWYqW1cVasvCBKJ2_!!6000000003606-0-tps-46-32.jpg' wigth={16} height={16}/>   <a>Personal Protective Equipment</a>      
</div>
<div className='row text-center boder-center'>
<div className='col-md-6 text-center'>
<img className='border rounded' src='https://s.alicdn.com/@sc04/kf/He3080dc6244d4f4c8fdd68cdf4feb347C.jpg_120x120xz.jpg' wigth={100}/>   
<p>$14.00</p>
<div className='bg-info'>
  <img src='https://s.alicdn.com/@img/imgextra/i4/O1CN01DWnTUf1TSXgriL2jo_!!6000000002381-2-tps-20-20.png' width={10} height={10}/>
<span class="video-play-text">01:36</span>
</div> </div>
<div className='col-md-6 text-center '>
<img className='border rounded' src='https://s.alicdn.com/@sc04/kf/He7e0263518fb44ebabd8ac126594aba9s.jpg_120x120xz.jpg' wigth={100}/>   
<p >$18.00</p></div> </div> 
</div></div>
</div>
</div>

<div className='container m-5'>
<div className='row'>
<div className='col-md-6'>
<div className='border rounded p-2 m-2'>
  <h3>Customizable products</h3>
  <span>Provided by 60,000+ experienced manufacturers with design and production capabilities and on-time delivery.</span>
    <img className='p-5 ' src='https://img.alicdn.com/tfs/TB1SkTnbcKfxu4jSZPfXXb3dXXa-242-148.jpg' />
  <div className='row'>
<div className='col-md-6'>
<div className='border rounded p-3 m-2'>
<h4>Source from factories</h4>
<div className='row'>
<div className='col-md-4 border rounded'>
<img src='https://s.alicdn.com/@sc04/kf/H8e2c6ff853f9455ab368b46d6829b6f7Q.jpg_100x100xz.jpg' width={50} height={50}/>
</div>
<div className='col-md-4 border rounded'>
<img src='https://s.alicdn.com/@sc04/kf/H983392ef6a3d4925ad1ca800a2c980c0b.jpg_100x100xz.jpg' width={50} height={50}/>
</div>
<div className='col-md-4 border rounded'>
<img src='https://s.alicdn.com/@sc04/kf/H8b863b6cb065447280a51de6d6d9dbe8l.jpg_100x100xz.jpg' width={50} height={50}/>
</div>
</div>
</div>
</div>
<div className='col-md-6'>
<div className='border rounded p-3 m-2'>
<h4>Top-ranking supplierss</h4>
<div className='row'>
<div className='col-md-4'>
<img src='https://s.alicdn.com/@sc04/kf/H50cdf34c2f23402197bf9061b30abfa36.jpg_100x100xz.jpg' width={50} height={50}/>
</div>
<div className='col-md-4'>
<img src='https://s.alicdn.com/@sc04/kf/Hde14fb0c41ca43abbefd9c9a902ba042r.png_100x100xz.jpg' width={50} height={50}/>
</div>
<div className='col-md-4'>
<img src='https://s.alicdn.com/@sc04/kf/H9b5d85cc9eb84bbea6b61d0ac29c0fce6.jpg_100x100xz.jpg' width={50} height={50}/>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className='col-md-6'>
<div className='border rounded p-2 m-2'>
  <h3>Ready-to-ship products</h3>
  <span>Source from 15 million products that are ready to ship, and leave the facility within 15 days.
  </span>
    <img className='p-5 m-4' src='https://img.alicdn.com/tfs/TB1F99dzrY1gK0jSZTEXXXDQVXa-221-131.jpg' />
  <div className='row'>
<div className='col-md-6'>
<div className='border rounded  p-3 m-2'>
<h4>Exclusive discounts</h4>
<div className='row'>
<div className='col-md-4'>
<img src='https://s.alicdn.com/@sc04/kf/Hbcc1fe78c2c74eb1a0f0b7db05d0234d2.jpg_100x100xz.jpg' width={50} height={50}/>
</div>
<div className='col-md-4'>
<img src='https://s.alicdn.com/@sc04/kf/H6358adc2df8b4b87bc727ea09f0f613fZ.jpg_100x100xz.jpg' width={50} height={50}/>
</div>
<div className='col-md-4'>
<img src='https://s.alicdn.com/@sc04/kf/Hcb0f153de4ce42c4ae6e883f35e2ebd9b.jpg_100x100xz.jpg' width={50} height={50}/>
</div>
</div>
</div>
</div>
<div className='col-md-6'>
<div className='border rounded p-3 m-2'>
<h4>Weekly deals</h4>
<div className='row'>
<div className='col-md-4'>
<img src='https://s.alicdn.com/@sc04/kf/Hf3e3eb09388a4d40a795495831ec10953.jpg_100x100xz.jpg' width={50} height={50}/>
</div>
<div className='col-md-4'>
<img src='https://s.alicdn.com/@sc04/kf/H20b092db5b04490299f9d564c837c7d74.png_100x100xz.jpg' width={50} height={50}/>
</div>
<div className='col-md-4'>
<img src='https://s.alicdn.com/@sc04/kf/Hcc591b34bf8740c0844ffd066596986fU.jpg_100x100xz.jpg' width={50} height={50}/>
</div>
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
<div className='container'>
<div className='row'>
<div className='col-md-3'>
<div className='pic1'>
<h4 className='text-white p-5'>Selected novelty products</h4>
<span className='btn btn-light boder rounded-pill px-5 '>Source now</span>
</div>
</div>
<div className='col-md-3 boder rounded'>
<h4 className='boder rounded'><img src='https://img.alicdn.com/tfs/TB1neG1rHj1gK0jSZFOXXc7GpXa-32-32.png' />
  <span className='boder rounded'>Top-ranking suppliers</span>
  <div><span> Customization service available</span>
  </div>
</h4>
 <div className="certificate boder rounded" data-spm-anchor-id="a2700.product_home_l0.0.i3.2ce267afMaCg61"> <i class="icbu-certificate-icon icbu-certificate-icon-verified"></i>
 <img src='https://s.alicdn.com/@sc04/kf/Ha8300fa2ed514763a65a2b6190b77abc1.jpg_220x220.jpg' height={90}/>
 </div>

<div className='boder rounded'>
<h4 className='boder rounded'><img src='https://img.alicdn.com/imgextra/i2/O1CN014wPaUL1pd0IbZp3ft_!!6000000005382-2-tps-200-200.png' height={30}/>
  <span className='boder rounded'>Shipping and import duties included</span>
  <div><span> Customization service available</span>
  </div>
</h4>
 
 <img src='https://s.alicdn.com/@sc04/kf/Hcb596afbefb04f938c88af3d9e5c2a59p.jpg_220x220.jpg' height={90}/>

</div></div>
<div className='col-md-3 boder rounded'>
<h4>Top sales</h4>
 <img src='https://img.alicdn.com/tfs/TB1WB9WrQP2gK0jSZPxXXacQpXa-32-32.png' height={30}/>
<div><span>Mobile Phone & Computer Repair Parts</span>
  </div>

<div className='boder rounded'>
<h4 className='boder rounded'><img src='https://s.alicdn.com/@sc04/kf/Hec357054b2864aa09b484aeeafaddfe2g.jpg_220x220.jpg' height={100}/>
</h4>
</div>
<h4 className='boder rounded'>Chargers, Batteries & Power Supplies</h4>
  <div>
<img src='https://s.alicdn.com/@sc04/kf/Hca59caabd97144478c7b69679a43c9d2y.jpg_220x220.jpg' height={100}/>

</div></div>
<div className='col-md-3 boder rounded'>
<h4>Smart Electronics</h4>
<div className='boder rounded'>
<h3 className='boder rounded'>
  <img src='https://s.alicdn.com/@sc04/kf/HTB1fhzZeL1H3KVjSZFHq6zKppXax.jpg_220x220.jpg' height={100}/>
</h3>
</div>
<h4 className='boder rounded'>VR, AR, MR Hardware & Software</h4>
  <div>
<img src='https://s.alicdn.com/@sc04/kf/Hff2ed7c8377c4b4e9a861d67886a31c4m.jpg_220x220.jpg' height={100}/>

</div></div>
</div>
</div>
<div>
<h2>Apparel</h2>
</div>
<div className='container'>
<div className='row'>
<div className='col-md-3'>
<div className='pic2'>
<h4 className='text-white p-5'>Discover trending styles</h4>
<span className='btn btn-light boder rounded-pill px-5 '>Source now</span>
</div>
</div>
<div className='col-md-3 boder rounded'>
<h4 className='boder rounded'><img src='https://img.alicdn.com/tfs/TB1neG1rHj1gK0jSZFOXXc7GpXa-32-32.png' />
  <span className='boder rounded'>Top-ranking suppliers</span>
  <div><span> Customization service available</span>
  </div>
</h4>
 <div className="certificate boder rounded" data-spm-anchor-id="a2700.product_home_l0.0.i3.2ce267afMaCg61"> <i class="icbu-certificate-icon icbu-certificate-icon-verified"></i>
 <img src='https://s.alicdn.com/@sc04/kf/H6345ee4e0f044595b7989b617431f124A.jpg_220x220.jpg' height={90}/>
 </div>

<div className='boder rounded'>
<h4 className='boder rounded'><img src='https://img.alicdn.com/imgextra/i2/O1CN014wPaUL1pd0IbZp3ft_!!6000000005382-2-tps-200-200.png' height={30}/>
  <span className='boder rounded'>Shipping and import duties included</span>
  <div><span> Customization service available</span>
  </div>
</h4>
 
 <img src='https://s.alicdn.com/@sc04/kf/Hdce5833196c54dfb8238eee6b514d19dg.jpg_220x220.jpg' height={90}/>

</div></div>
<div className='col-md-3 boder rounded'>
<h4>Top sales</h4>
 <img src='https://img.alicdn.com/tfs/TB1WB9WrQP2gK0jSZPxXXacQpXa-32-32.png' height={30}/>
<div><span>Mobile Phone & Computer Repair Parts</span>
  </div>

<div className='boder rounded'>
<h4 className='boder rounded'><img src='https://s.alicdn.com/@sc04/kf/Hcdd906afb60346dfb2e3de9b6fbe749fk.jpg_220x220.jpg' height={100}/>
</h4>
</div>
<h4 className='boder rounded'>Men's Clothing</h4>
  <div>
<img src='https://s.alicdn.com/@sc04/kf/HTB1jAKWDQyWBuNjy0Fpq6yssXXaW.jpg_220x220.jpg' height={100}/>

</div></div>
<div className='col-md-3 boder rounded'>
<h4>Other Apparel</h4>
<div className='boder rounded'>
<h3 className='boder rounded'>
  <img src='https://s.alicdn.com/@sc04/kf/H8b87bfd8a7a64bf391b0548591ffee99v.jpg_220x220.jpg' height={100}/>
</h3>
</div>
<h4 className='boder rounded'>Novelty & Special Use</h4>
  <div>
<img src='https://s.alicdn.com/@sc04/kf/HTB1kE3fJHPpK1RjSZFFq6y5PpXaB.jpg_220x220.jpg' height={100}/>
</div></div>
</div>
</div>

<div>
<h2>Vehicle Parts & Accessories</h2>
</div>
<div className='container'>
<div className='row'>
<div className='col-md-3'>
<div className='pic3'>
<h4 className='text-white p-5'>Diversified procurement solutions</h4>
<span className='btn btn-light boder rounded-pill px-5 '>Source now</span>
</div>
</div>
<div className='col-md-3 boder rounded'>
<h4 className='boder rounded'><img src='https://img.alicdn.com/tfs/TB1neG1rHj1gK0jSZFOXXc7GpXa-32-32.png' />
  <span className='boder rounded'>Top-ranking suppliers</span>
  <div><span>One-stop services for your store</span>
  </div>
</h4>
 <div className="certificate boder rounded" data-spm-anchor-id="a2700.product_home_l0.0.i3.2ce267afMaCg61"> <i class="icbu-certificate-icon icbu-certificate-icon-verified"></i>
 <img src='https://s.alicdn.com/@sc04/kf/H65300a8f636447cfbd46d8b917179299w.jpg_220x220.jpg' height={90}/>
 </div>

<div className='boder rounded'>
<h4 className='boder rounded'><img src='https://img.alicdn.com/imgextra/i2/O1CN014wPaUL1pd0IbZp3ft_!!6000000005382-2-tps-200-200.png' height={30}/>
  <span className='boder rounded'>Shipping and import duties included</span>
  <div><span> Customization service available</span>
  </div>
</h4>
 
 <img src='https://s.alicdn.com/@sc04/kf/Hfa732daadb7d49feb682b649009993d8k.jpg_220x220.jpg' height={90}/>

</div></div>
<div className='col-md-3 boder rounded'>
<h4>Top sales</h4>
 <img src='https://img.alicdn.com/tfs/TB1WB9WrQP2gK0jSZPxXXacQpXa-32-32.png' height={30}/>
<div><span>Wheels, Tires & Accessories</span>
  </div>

<div className='boder rounded'>
<h4 className='boder rounded'><img src='https://s.alicdn.com/@sc04/kf/H6058ce05ada340d799f1d499217a730cB.jpg_220x220.jpg' height={100}/>
</h4>
</div>
<h4 className='boder rounded'>Recovery & Off-road Accessories</h4>
  <div>
<img src='https://s.alicdn.com/@sc04/kf/Hfd405dac2a72407f99024e47bfb8ffe6Z.jpg_220x220.jpg' height={100}/>

</div></div>
<div className='col-md-3 boder rounded'>
<h4>Motorcycle Parts & Accessories</h4>
<div className='boder rounded'>
<h3 className='boder rounded'>
  <img src='https://s.alicdn.com/@sc04/kf/HTB1CPf.KVzqK1RjSZFoq6zfcXXav.jpg_220x220.jpg' height={100}/>
</h3>
</div>
<h4 className='boder rounded'>Universal Parts</h4>
  <div>
<img src='https://s.alicdn.com/@sc04/kf/HTB1D_cgXK6sK1RjSsrbq6xbDXXaY.jpg_220x220.jpg' height={100}/>
</div></div>
</div>
</div>

<div>
<h2>Weekly deals</h2>
</div>
<div className='container boder rounded'>
<div className='row' >
<div className='col-md-4 border rounded'>
<img src='https://s.alicdn.com/@sc04/kf/Hfe9b07a0448c411ca24b138e1974ab12F.jpg_220x220.jpg'></img>
<button className='btn btn-danger boder rounded-pill px-5 '>View more</button>
<img src='https://s.alicdn.com/@sc04/kf/H8fe6924b86414360bc8180ff67f0c951F.jpg_220x220.jpg'></img>
</div>
<div className='col-md-4 border rounded'>
<img src='https://s.alicdn.com/@sc04/kf/Hd52559c9356446e6aa482c4d7dfb2a7fa.jpg_220x220.jpg'></img>
<button className='btn btn-danger boder rounded-pill px-5 '>View more</button>
<img src='https://s.alicdn.com/@sc04/kf/H5dcb7ed3ef8d4dda8cfea4f2cc929a30C.jpg_220x220.jpg'></img>
</div>
<div className='col-md-4 border rounded'>
<img src='https://s.alicdn.com/@sc04/kf/HTB1Hl.xNZfpK1RjSZFOq6y6nFXaq.jpg_220x220.jpg'></img>
<button className='btn btn-danger boder rounded-pill px-5 '>View more</button>
<img src='https://s.alicdn.com/@sc04/kf/Hf25410169b0b49d5996f98bb8c8265eeU.jpg_220x220.jpg'></img>
</div>
</div>
</div>


<a>
<img src='https://img.alicdn.com/tfs/TB1BNqtyND1gK0jSZFKXXcJrVXa-96-68.png' width={50}/>
<h2>Request for Quotation</h2>
<span>Quickly get lower prices with one request</span>
</a>
<div className='container py-5'>
<div className='row'>
<div className='col-md-6'>
<div className='pic4 text-white'>
<h3>Global sourcing marketplace</h3>
<div>
<span>2499000 +</span>
</div>
<span>RFQs</span>
    <p>  22h</p>
    <p>Average response time</p>
    <p>156000 +</p>
    <p>Active suppliers</p>
    <p>7400 </p>
    <p>Industries</p>
    </div></div>
<div className='col-md-6 border rounded'>
  <h3>One request, multiple quotes</h3>
</div>
</div>
    </div>
    <div>amir</div>
<div className='container py-5'>
<div className='row'>
<div className='col-md-3 '>
  <BasicExample0 />
</div>
<div className='col-md-3 '>
  <BasicExample1 />
</div>
<div className='col-md-3'>
  <BasicExample2 />
</div>
<div className='col-md-3'>
  <BasicExample3 />
</div>
</div>
  </div>

  <div className='container py-5'>
<div className='row'>
<div className='col-md-3 '>
  <BasicExample4 />
</div>
<div className='col-md-3 '>
  <BasicExample5 />
</div>
<div className='col-md-3'>
  <BasicExample6 />
</div>
<div className='col-md-3'>
  <BasicExample7 />
    </div>
</div>
</div>

<div className='fs-2 fw-bold p-2'>  Trade servicesr
  <span className='fs-5 text-secondary mx-2'>  Alibaba.com's trade services help ensure that your purchases are protected.</span>   
</div>
<div className='container'>
<div className='row'>
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
</div>
</div>
</div>

</div>
</div>
</div>

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
</div>
</div>
</div>
 
</div>
</div>
</div>
</div>

<div className='container'>
<div className='row'>
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
</div>
</div>
  

</div>
</div>
</div>

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
</div>
</div>
 
</div>
</div>
</div>

</div>
</div>
<div>
 <h3>Suppliers by country or region</h3> 
  <span className='t6'><img className='t5' src='https://s.alicdn.com/@img/tfs/TB1aUq6cgoQMeJjy0FoXXcShVXa-48-48.png_80x80.jpg'/> japan <img className='t5' src='https://s.alicdn.com/@img/tfs/TB18omIbIrI8KJjy0FhXXbfnpXa-48-48.png_80x80.jpg'/> USA <img className='t5' src='https://s.alicdn.com/@img/tfs/TB1U8_xAeH2gK0jSZJnXXaT1FXa-268-179.jpg_80x80.jpg'/> Italy <img className='t5' src='https://s.alicdn.com/@img/tps/TB1QwGEPFXXXXXUaXXXXXXXXXXX-48-48.png_80x80.jpg'/> Turkey <img className='t5' src='https://s.alicdn.com/@img/tps/TB1tQC4PFXXXXaOXpXXXXXXXXXX-48-48.png_80x80.jpg'/> Malaysia <img className='t5' src='https://s.alicdn.com/@img/tps/TB1WVfXPFXXXXXvXpXXXXXXXXXX-48-48.png_80x80.jpg'/> South Korea <img className='t5' src='https://s.alicdn.com/@img/tps/TB1fky3PFXXXXcuXpXXXXXXXXXX-48-48.png_80x80.jpg'/> Vietnam <img className='t5'src='https://s.alicdn.com/@img/imgextra/i3/O1CN01Sbi1Tm28po6huT3zL_!!6000000007982-2-tps-48-48.png_80x80.jpg'/> Russia <img className='t5'src='https://s.alicdn.com/@img/tps/TB1xQi8PFXXXXaRXpXXXXXXXXXX-48-48.png_80x80.jpg'/> Thailand</span>

</div>
<img className='imo' src='https://i.alicdn.com/img/imgextra/i2/O1CN01MKFItD1FWkrP4y3WC_!!6000000000495-2-tps-1500-60.png'/>

<div className='container m-5 py-5 bg-secondary text-center text-white'>
  <p className='text-center'>Trade Alert - Delivering the latest product trends and industry news straight to your inbox.</p>
<div className='text-center'>
  <input type='text' className='' placeholder='Your email' />
  <input type='button' className='' value="Subscribe"/>
<div className='imo1'>
  We’ll never share your email address with a third-party.
	</div>	
</div>
<div className='row p-2 m-2'>
<div className='col-md-2'>
    <dl>
    <dt> Customer services</dt>
    <dd>Help Center</dd>
    <dd>Report abuse</dd>
    <dd>Open a case</dd>
    <dd>Policies & rules</dd>
    <dd>Get paid for your feedback</dd>
</dl>
</div>
<div className='col-md-2'>
<dl>
    <dt> About us </dt>
    <dd>About Alibaba.com</dd>
    <dd>About Alibaba Group</dd>
    <dd>Alibaba.com Blog</dd>
    <dd>Legal Notice</dd>
   </dl> 
</div>
<div className='col-md-2'>
<dl>
    <dt>Source on Alibaba.com </dt>
    <dd>Resources</dd>
    <dd>All categories</dd>
    <dd>Request for Quotation</dd>
    <dd>Ready to Ship</dd>
    <dd>Buyer partners</dd>
    <dd>Alibaba.com Select</dd>

   </dl> 
</div>
<div className='col-md-2'>
<dl>
    <dt>Sell on Alibaba.com</dt>
    <dd>Supplier memberships</dd>
    <dd>Learning Center</dd>
    <dd>Partner Program</dd>
   </dl> 
</div>
<div className='col-md-2'>
<dl>
    <dt>Trade services</dt>
    <dd>Trade Assurance</dd>
    <dd>Business identity</dd>
    <dd>Logistics services</dd>
    <dd>Production Monitoring & Inspection Services</dd>
    <dd>Letter of Credit</dd>
   </dl> 
</div>

</div>
<hr></hr>
<div className='row'>
<div className='col-md-4'>
  <p>Download:
<img className='t2 border rounded' src={capture5}/>
<img className='t2 border rounded' src={capture4}/>
 </p></div>
<div className='col-md-4'>
  <p>Alibaba Supplier app :
<img className='t2 border rounded' src={capture6}/>
</p></div>
<div className='col-md-4'>
<p>Follow us :
<FacebookIcon icon="fa-light fa-facebook"/>
<img className='t3' src='//img.alicdn.com/imgextra/i4/O1CN01pN5ZVp1M2FjfZfoAm_!!6000000001376-2-tps-60-60.png'/>
<img className='t3' src='//img.alicdn.com/imgextra/i3/O1CN01fEq1ov1bzXEwzkxBv_!!6000000003536-2-tps-60-60.png'/>
<button className='t4 btn-light border rounded'>in</button>
<img className='t3' src='//img.alicdn.com/imgextra/i1/O1CN01PprBbh1gpyyZGs4O6_!!6000000004192-2-tps-60-60.png'/>
<TwitterIcon icon="fa-light fa-twitter"/>
</p></div>
</div>
<div className='text-center'>
<p>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25000 500">
  <path d="M57.7 193l9.4 16.4c8.3 14.5 21.9 25.2 38 29.8L163 255.7c17.2 4.9 29 20.6 29 38.5v39.9c0 11 6.2 21 16 25.9s16 14.9 16 25.9v39c0 15.6 14.9 26.9 29.9 22.6c16.1-4.6 28.6-17.5 32.7-33.8l2.8-11.2c4.2-16.9 15.2-31.4 30.3-40l8.1-4.6c15-8.5 24.2-24.5 24.2-41.7v-8.3c0-12.7-5.1-24.9-14.1-33.9l-3.9-3.9c-9-9-21.2-14.1-33.9-14.1H257c-11.1 0-22.1-2.9-31.8-8.4l-34.5-19.7c-4.3-2.5-7.6-6.5-9.2-11.2c-3.2-9.6 1.1-20 10.2-24.5l5.9-3c6.6-3.3 14.3-3.9 21.3-1.5l23.2 7.7c8.2 2.7 17.2-.4 21.9-7.5c4.7-7 4.2-16.3-1.2-22.8l-13.6-16.3c-10-12-9.9-29.5 .3-41.3l15.7-18.3c8.8-10.3 10.2-25 3.5-36.7l-2.4-4.2c-3.5-.2-6.9-.3-10.4-.3C163.1 48 84.4 108.9 57.7 193zM464 256c0-36.8-9.6-71.4-26.4-101.5L412 164.8c-15.7 6.3-23.8 23.8-18.5 39.8l16.9 50.7c3.5 10.4 12 18.3 22.6 20.9l29.1 7.3c1.2-9 1.8-18.2 1.8-27.5zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"/></svg>
Alibaba.com Site: International - Español - Português - Deutsch - Français - Italiano - हिंदी - Pусский - 한국어 - 日本語 - اللغة العربية - ภาษาไทย - Türk - Nederlands - tiếng Việt - Indonesian - עברית </p>
<p>AliExpress | 1688.com | Tmall Taobao World | Alipay | Lazada</p>
<p>Browse Alphabetically: Onetouch | Showroom | Country Search | Suppliers | Affiliate</p>
<p>Product Listing Policy - Intellectual Property Protection - Privacy Policy - Terms of Use - User Information Legal Enquiry Guide</p>
</div>
<img className='t1' src='https://img.alicdn.com/tfs/TB1VtZtebH1gK0jSZFwXXc7aXXa-65-70.gif' />
<span> © 1999-2023 Alibaba.com. All rights reserved.
</span>

<img className='t1' src='https://img.alicdn.com/tfs/TB1QhYprKT2gK0jSZFvXXXnFXXa-20-20.png' />
   <span> 浙公网安备 33010002000092号 浙B2-20120091-4</span>



</div>

</div>
);};
export default App;
