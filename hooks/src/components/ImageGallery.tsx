import React, { useState } from 'react';
import useImageSearchWithPagination from '../hooks/useImageSearchWithPagination';

const ImageGallery: React.FC = () => {
  const [keyword, setKeyword] = useState('');

  const { images, currentPage, goToNextPage, goToPrevPage, isLoading, error } = useImageSearchWithPagination(keyword);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setKeyword(e.currentTarget.keyword.value);
  };

  return (
    <>
      <header>
        <h1>Image Gallery</h1>
      </header>
      <section>
        <div>
          <button onClick={goToPrevPage} disabled={currentPage === 1}>
            Previous Page
          </button>
          <span>Page: {currentPage}</span>
          <button onClick={goToNextPage}>Next Page</button>
        </div>
      </section>
      <section>
        <form onSubmit={handleSubmit}>
          <label htmlFor='searchKeyword'>검색:</label>
          <input type='text' id='searchKeyword' name='keyword' placeholder='키워드 입력' />
          <button type='submit'>Search</button>
        </form>
      </section>
      <section>
        {isLoading && <p>Loading...</p>}
        {error && <p>Error : {error.message}</p>}
        {!isLoading && !error && (
          <>
            {images.length === 0 && <p>No images found.</p>}
            {images.map((image) => (
              <article key={image.id}>
                <img src={image.webformatURL} alt={image.tags} />
                <p>{image.tags}</p>
              </article>
            ))}
          </>
        )}
      </section>
    </>
  );
};

export default ImageGallery;
