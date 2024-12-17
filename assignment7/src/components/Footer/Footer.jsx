import FooterLogo from '../../assets/logo-footer.png';

const Footer = () => {
    return (
        <div className='footer-bg pt-48 relative pb-12'>
            <img className='mx-auto mt-4 mb-8' src={FooterLogo} alt="" />
            <div className='text-white grid grid-cols-3 gap-28 mx-auto max-w-7xl'>
                <div>
                    <h4 className='text-xl'>About Us</h4>
                    <p className='text-gray-500 mt-2'>We are a passionate team dedicated to providing the best services to our customers.</p>
                </div>
                <div className='mx-auto'>
                    <h3 className='text-xl mb-4'>Quick Links</h3>
                    <ul className='flex flex-col justify-center mx-auto text-gray-400 space-y-2'>
                        <li>Home</li>
                        <li>Services</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div>
                    <h2 className='text-xl'>Subscribe</h2>
                    <p className='text-gray-500'>Subscribe to our newsletter for the latest updates.</p>
                    <div className="subscribe-footer flex gap-3 items-center justify-center mt-2">
                        <input type="email" placeholder="Enter your Email" className="input input-bordered w-full max-w-xs h-10 p-2 border border-gray-400 rounded-md" />
                        <button className="text-black button-subscribe">Subscribe</button>
                    </div>
                </div>
            </div>
            <hr className='my-8 text-gray-400'/>
            <p className='text-center text-gray-400'>@2024 Your Company All Rights Reserved.</p>
            <div className="subscribe-bg bg-white my-4 max-w-6xl px-48 text-center py-12">
                <h2 className="text-3xl text-gray-500">Subscribe to our Newsletter</h2>
                <h3 className="text-md my-4">Get the latest updates and news right in your inbox!</h3>
                <div className="flex gap-3 items-center justify-center">
                    <input type="email" placeholder="Enter your Email" className="input input-bordered w-full max-w-xs h-10 p-2 border border-gray-400 rounded-md" />
                    <button className="button-subscribe">Subscribe</button>
                </div>
            </div>
        </div>
    );
};

export default Footer;