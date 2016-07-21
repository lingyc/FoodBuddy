class MovieListEntry extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      userRating: this.props.movie.score,
      friendAverageRating: this.props.movie.friendAverageRating
    };
    console.log('whattatatat userRating', this.state.userRating);
  }

  componentWillReceiveProps() {
    this.setState({
      userRating: this.props.movie.score,
      friendAverageRating: this.props.movie.friendAverageRating
    });
  }

  onStarClick(event) {
    this.setState({userRating: event.target.value});
    this.updateRating(event.target.value);
  }

  updateRating(value) {
    var movieObj = {
      title: this.props.movie.title, 
      id: this.props.movie.id,
      rating: value
    };
    $.post('http://127.0.0.1:3000/ratemovie', movieObj)
    .done(response => {
      console.log('movie rating updated');
    })
  }

  render() {
  	let movie = this.props.movie;
  	return (
  		<div className='movieEntry'>
  			<img className='moviethumnail' src={movie.poster}/>
  			<h1 className='movieTitle'>{movie.title}</h1>
  			<p className='movieYear'>{movie.release_date}</p>
  			<p className='movieDescription'>{movie.description}</p>
  			<p className='userReview'>{(movie.review === '') ? movie.review : 'you have not review the movie yet'}</p>
  			<p className='imdbRating'>IMDB rating: {movie.imdbRating}</p>
  			<div className='watchRequestButton'>send watch request</div>
        <div className='userRating'>{(this.state.userRating === null) ? 'you have not rated this movie' : 'your rating is ' + this.state.userRating}
          <StarRatingComponent onStarClick={this.onStarClick.bind(this)}/>
        </div>
        <div className='avgFriendRatingBlock'>average friend rating: {(movie.friendAverageRating) ? movie.friendAverageRating : 'no friend ratings' }</div>
      </div>);
	}
}

window.MovieListEntry = MovieListEntry;