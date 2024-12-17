const Subscribe = () => {
    return (
        <div className="subscribe-bg mx-auto max-w-4xl my-4 text-center py-12 absolute top-[500px] left-16">
            <h2 className="text-3xl">Subscribe to our Newsletter</h2>
            <h3 className="text-md my-4">Get the latest updates and news right in your inbox!</h3>
            <div className="flex gap-3 items-center justify-center">
                <input type="email" placeholder="Enter your Email" className="input input-bordered w-full max-w-xs" />
                <button className="button-subscribe">Subscribe</button>
            </div>
        </div>
    );
};

export default Subscribe;