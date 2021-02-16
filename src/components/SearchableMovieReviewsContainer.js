import React, { Component } from "react";
import "isomorphic-fetch";
import MovieReviews from "./MovieReviews";

const NYT_API_KEY = "dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ";
const URL = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=${NYT_API_KEY}&query=`;

class SearchableMovieReviewsContainer extends Component {
  state = { reviews: [], searchTerm: "" };

  handleSubmit = (event) => {
    event.preventDefault();
    fetch(URL + this.state.searchTerm)
      .then((res) => res.json())
      .then((json) =>
        this.setState(
          {
            reviews: json.results.map((review) => ({
              title: review.display_title,
              summary: review.summary_short,
            })),
          },
          () => console.log(this.state)
        )
      );
  };

  changeInput = (event) => {
    this.setState({ searchTerm: event.target.value });
  };

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="searchTerm" onChange={this.changeInput} />
          <input type="submit" value="Search" />
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }
}

export default SearchableMovieReviewsContainer;
