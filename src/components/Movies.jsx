function Movies() {
  return (
    <div className='result-container d-flex flex-column justify-content-center m-5'>
      <div className='d-flex flex-column align-items-center '>
        <h2 className=''>The Avengers</h2>
        <p>(2012)</p>
      </div>
      <div className='d-flex justify-content-center w-100'>
        <img
          className='w-25 h-50'
          src='https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg'
          alt=''
        />
      </div>
    </div>
  );
}

export default Movies;
