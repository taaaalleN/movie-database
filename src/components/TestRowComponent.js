import React, { useState, useEffect } from "react";

// Behöver nog inte ha rader
// TMDB verkar inte ha det

const TestRowComponent = () => {
  const [data, setData] = useState([]);
  let content = [];

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=04885294e995c2b055be7cf3da2429ed&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1"
    )
      .then((res) => res.json())
      .then((data) => setData(data.results));
  }, []);

  const calculateRows = () => {
    data.map((product, i) => {
      if ((i + 1) % 4 == 0) {
        content.push(
          <div className="row" key={product.id}>
            <article key={product.id} className="col-md-3">
              {product.title}
            </article>
          </div>
        );
      } else {
        content.push(
          <article key={product.id} className="col-md-3">
            {product.title}
          </article>
        );
      }
    });
  };
  calculateRows();
  //   const test = data.map((item) => <p key={item.id}>{item.title}</p>);

  return <div>{content}</div>;
};

export default TestRowComponent;
