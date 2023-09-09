const ImageGallery = () => {
  return (
    <div className="grid md:griid-col-3 justify-center gap-4 mt-10">
      <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p>Upload by:</p>
        <span>Created on:</span>
      </div>
    </div> 
  );
}

export default ImageGallery;