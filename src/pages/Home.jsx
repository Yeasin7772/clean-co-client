
import Container from "../components/Layout/ui/Container";


const Home = () => {
    return (
        <Container>
        <div className="flex py-20 gap-16">
          <div className="flex-1 flex flex-col justify-between py-14 ">
            <h1 className="text-7xl font-bold text-start">
              <span>Quality Cleaning</span> <br />{' '}
              <span className="text-primary">for Your Home</span>
            </h1>
            <p className="my-5 max-w-[65ch]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
           
            <div className="divider"></div>
            <div className="flex items-center gap-5">
              <div className="avatar-group -space-x-6">
                <div className="avatar">
                  <div className="w-14">
                    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1964&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-14">
                    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1964&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-14">
                    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1964&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                  </div>
                </div>
              </div>
              <div>
                <p className="font-semibold">Rated 5 out of 5 by our clients</p>
              </div>
            </div>
          </div>
          <div className="h-[600px] w-full bg-green-500 flex-1 rounded-3xl overflow-hidden ">
            <img
              src='https://media.istockphoto.com/id/147256706/photo/window-washer.jpg?s=1024x1024&w=is&k=20&c=JNCZtWESGowAMhiLzJ1p76XCsyiqoh22Vb2EfPj7nuo='
              alt="landing"
              className="w-full h-full object-cover "
            />
          </div>
        </div>
      </Container>
    );
};

export default Home;