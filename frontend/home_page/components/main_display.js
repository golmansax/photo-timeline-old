import HomePageLayout from './layout';

const HomeMainDisplay = (props) => (
  <HomePageLayout {...props} mobileContentLayout='hide'>
    <div>Check out my photos!</div>
  </HomePageLayout>
);
export default HomeMainDisplay;
