import noDataImage from '../Item/NoDataFound.jpg';

const NoPage = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <img
        className="card-img-center"
        style={{ width: '40rem', height: '40rem', objectFit: 'scale-down' }}
        src={noDataImage} alt="No Data Found" 
      />
    </div>
  );
};

export default NoPage;
