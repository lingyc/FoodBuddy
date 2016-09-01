'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SignUp = function (_React$Component) {
  _inherits(SignUp, _React$Component);

  function SignUp(props) {
    _classCallCheck(this, SignUp);

    var _this = _possibleConstructorReturn(this, (SignUp.__proto__ || Object.getPrototypeOf(SignUp)).call(this, props));

    _this.state = {
      username: '',
      password: '',
      firstName: '',
      lastName: '',
      errorMsg: '',
      successMsg: ''
    };
    return _this;
  }

  _createClass(SignUp, [{
    key: 'handleChange',
    value: function handleChange(event) {
      if (event.target.name === 'SignUpName') {
        this.setState({
          username: event.target.value
        });
      } else if (event.target.name === 'SignUpPassword') {
        this.setState({
          password: event.target.value
        });
      } else if (event.target.name === 'SignUpFirstname') {
        this.setState({
          firstName: event.target.value
        });
      } else if (event.target.name === 'SignUpLastname') {
        this.setState({
          lastName: event.target.value
        });
      }
    }
  }, {
    key: 'enterNewUser',
    value: function enterNewUser() {
      if (this.state.username.length === 0) {
        this.setState({
          errorMsg: 'please enter a username'
        });
      } else if (this.state.password.length === 0) {
        this.setState({
          errorMsg: 'please enter a password'
        });
      } else if (this.state.firstName.length === 0) {
        this.setState({
          errorMsg: 'please enter your first name'
        });
      } else if (this.state.lastName.length === 0) {
        this.setState({
          errorMsg: 'please enter your last name'
        });
      } else {
        var userObj = {
          name: this.state.username,
          password: this.state.password,
          firstName: this.state.firstName,
          lastName: this.state.lastName
        };

        var that = this;

        $.post(Url + '/signup', userObj).then(function (reponse) {
          //after signup should prompt user to select their favorite three movies
          that.setState({
            errorMsg: '',
            successMsg: 'new login created'
          });

          that.props.changeViews("Home");
          that.props.setCurrentUser(that.state.username);
        }).catch(function (err) {
          console.log(err);
          that.setState({
            errorMsg: 'username already exist, please use a different username'
          });
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var that = this;
      return React.createElement(
        'div',
        { className: 'landing row' },
        React.createElement(
          'div',
          { className: 'icon-block col s7' },
          React.createElement(
            'h2',
            { className: 'header logo' },
            'Welcome to TheMovieApp'
          ),
          React.createElement(
            'h5',
            { className: 'header col s12 light description' },
            'Lets find your next buddy by your movie taste!'
          )
        ),
        React.createElement(
          'div',
          { className: 'login icon-block' },
          React.createElement(
            'a',
            { className: 'waves-effect waves-light btn', onClick: function onClick() {
                return _this2.props.changeViews('Login');
              } },
            'Go to Log In'
          ),
          React.createElement(
            'div',
            { className: 'or' },
            '---------- OR -----------'
          ),
          React.createElement(
            'div',
            { className: 'loginForm' },
            React.createElement(
              'div',
              { className: 'input-field col s6' },
              React.createElement('input', { placeholder: 'username', id: 'user_name', name: 'SignUpName', type: 'text', className: 'validate', onChange: this.handleChange.bind(this) }),
              React.createElement(
                'label',
                { 'for': 'user_name', className: 'active' },
                'Username'
              )
            ),
            React.createElement(
              'div',
              { className: 'input-field col s6' },
              React.createElement('input', { placeholder: 'password', id: 'password', name: 'SignUpPassword', type: 'password', className: 'validate', onChange: this.handleChange.bind(this) }),
              React.createElement(
                'label',
                { 'for': 'password', className: 'active' },
                'Password'
              )
            ),
            React.createElement(
              'div',
              { className: 'input-field col s6' },
              React.createElement('input', { placeholder: 'first name', id: 'first_name', name: 'SignUpFirstname', type: 'text', className: 'validate', onChange: this.handleChange.bind(this) }),
              React.createElement(
                'label',
                { 'for': 'first_name', className: 'active' },
                'first name'
              )
            ),
            React.createElement(
              'div',
              { className: 'input-field col s6' },
              React.createElement('input', { placeholder: 'last name', id: 'last_name', name: 'SignUpLastname', type: 'text', className: 'validate', onChange: this.handleChange.bind(this) }),
              React.createElement(
                'label',
                { 'for': 'last_name', className: 'active' },
                'last name'
              )
            ),
            React.createElement(
              'div',
              { className: 'errorMsg' },
              this.state.errorMsg
            ),
            React.createElement(
              'a',
              { className: 'waves-effect waves-light btn', onClick: this.enterNewUser.bind(this) },
              'Sign Up!'
            )
          )
        )
      );
    }
  }]);

  return SignUp;
}(React.Component);

window.SignUp = SignUp;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3B1YmxpYy9jb21wb25lbnRzL1NpZ25VcC5qcyJdLCJuYW1lcyI6WyJTaWduVXAiLCJwcm9wcyIsInN0YXRlIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiZXJyb3JNc2ciLCJzdWNjZXNzTXNnIiwiZXZlbnQiLCJ0YXJnZXQiLCJuYW1lIiwic2V0U3RhdGUiLCJ2YWx1ZSIsImxlbmd0aCIsInVzZXJPYmoiLCJ0aGF0IiwiJCIsInBvc3QiLCJVcmwiLCJ0aGVuIiwicmVwb25zZSIsImNoYW5nZVZpZXdzIiwic2V0Q3VycmVudFVzZXIiLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVDaGFuZ2UiLCJiaW5kIiwiZW50ZXJOZXdVc2VyIiwiUmVhY3QiLCJDb21wb25lbnQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsTTs7O0FBRUosa0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxnSEFDWEEsS0FEVzs7QUFHakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGdCQUFVLEVBREM7QUFFWEMsZ0JBQVUsRUFGQztBQUdYQyxpQkFBVyxFQUhBO0FBSVhDLGdCQUFVLEVBSkM7QUFLWEMsZ0JBQVUsRUFMQztBQU1YQyxrQkFBWTtBQU5ELEtBQWI7QUFIaUI7QUFXbEI7Ozs7aUNBRVlDLEssRUFBTztBQUNsQixVQUFJQSxNQUFNQyxNQUFOLENBQWFDLElBQWIsS0FBc0IsWUFBMUIsRUFBd0M7QUFDdEMsYUFBS0MsUUFBTCxDQUFjO0FBQ1pULG9CQUFVTSxNQUFNQyxNQUFOLENBQWFHO0FBRFgsU0FBZDtBQUdELE9BSkQsTUFJTyxJQUFJSixNQUFNQyxNQUFOLENBQWFDLElBQWIsS0FBc0IsZ0JBQTFCLEVBQTRDO0FBQ2pELGFBQUtDLFFBQUwsQ0FBYztBQUNaUixvQkFBVUssTUFBTUMsTUFBTixDQUFhRztBQURYLFNBQWQ7QUFHRCxPQUpNLE1BSUEsSUFBSUosTUFBTUMsTUFBTixDQUFhQyxJQUFiLEtBQXNCLGlCQUExQixFQUE2QztBQUNsRCxhQUFLQyxRQUFMLENBQWM7QUFDWlAscUJBQVdJLE1BQU1DLE1BQU4sQ0FBYUc7QUFEWixTQUFkO0FBR0QsT0FKTSxNQUlBLElBQUlKLE1BQU1DLE1BQU4sQ0FBYUMsSUFBYixLQUFzQixnQkFBMUIsRUFBNEM7QUFDakQsYUFBS0MsUUFBTCxDQUFjO0FBQ1pOLG9CQUFVRyxNQUFNQyxNQUFOLENBQWFHO0FBRFgsU0FBZDtBQUdEO0FBQ0Y7OzttQ0FFYztBQUNiLFVBQUksS0FBS1gsS0FBTCxDQUFXQyxRQUFYLENBQW9CVyxNQUFwQixLQUErQixDQUFuQyxFQUFzQztBQUNwQyxhQUFLRixRQUFMLENBQWM7QUFDWkwsb0JBQVU7QUFERSxTQUFkO0FBR0QsT0FKRCxNQUlPLElBQUksS0FBS0wsS0FBTCxDQUFXRSxRQUFYLENBQW9CVSxNQUFwQixLQUErQixDQUFuQyxFQUFzQztBQUMzQyxhQUFLRixRQUFMLENBQWM7QUFDWkwsb0JBQVU7QUFERSxTQUFkO0FBR0QsT0FKTSxNQUlBLElBQUksS0FBS0wsS0FBTCxDQUFXRyxTQUFYLENBQXFCUyxNQUFyQixLQUFnQyxDQUFwQyxFQUF1QztBQUM1QyxhQUFLRixRQUFMLENBQWM7QUFDWkwsb0JBQVU7QUFERSxTQUFkO0FBR0QsT0FKTSxNQUlBLElBQUksS0FBS0wsS0FBTCxDQUFXSSxRQUFYLENBQW9CUSxNQUFwQixLQUErQixDQUFuQyxFQUFzQztBQUMzQyxhQUFLRixRQUFMLENBQWM7QUFDWkwsb0JBQVU7QUFERSxTQUFkO0FBR0QsT0FKTSxNQUlBO0FBQ0wsWUFBSVEsVUFBVTtBQUNaSixnQkFBTSxLQUFLVCxLQUFMLENBQVdDLFFBREw7QUFFWkMsb0JBQVUsS0FBS0YsS0FBTCxDQUFXRSxRQUZUO0FBR1pDLHFCQUFXLEtBQUtILEtBQUwsQ0FBV0csU0FIVjtBQUlaQyxvQkFBVSxLQUFLSixLQUFMLENBQVdJO0FBSlQsU0FBZDs7QUFPQSxZQUFJVSxPQUFPLElBQVg7O0FBRUFDLFVBQUVDLElBQUYsQ0FBT0MsTUFBTSxTQUFiLEVBQXdCSixPQUF4QixFQUNDSyxJQURELENBQ00sVUFBU0MsT0FBVCxFQUFrQjtBQUN0QjtBQUNBTCxlQUFLSixRQUFMLENBQWM7QUFDWkwsc0JBQVUsRUFERTtBQUVaQyx3QkFBWTtBQUZBLFdBQWQ7O0FBS0FRLGVBQUtmLEtBQUwsQ0FBV3FCLFdBQVgsQ0FBdUIsTUFBdkI7QUFDQU4sZUFBS2YsS0FBTCxDQUFXc0IsY0FBWCxDQUEwQlAsS0FBS2QsS0FBTCxDQUFXQyxRQUFyQztBQUNELFNBVkQsRUFXQ3FCLEtBWEQsQ0FXTyxVQUFTQyxHQUFULEVBQWM7QUFDbkJDLGtCQUFRQyxHQUFSLENBQVlGLEdBQVo7QUFDQVQsZUFBS0osUUFBTCxDQUFjO0FBQ1pMLHNCQUFVO0FBREUsV0FBZDtBQUdELFNBaEJEO0FBaUJEO0FBQ0Y7Ozs2QkFFUTtBQUFBOztBQUNQLFVBQUlTLE9BQU8sSUFBWDtBQUNBLGFBQ0E7QUFBQTtBQUFBLFVBQUssV0FBVSxhQUFmO0FBQ0U7QUFBQTtBQUFBLFlBQUssV0FBVSxtQkFBZjtBQUNFO0FBQUE7QUFBQSxjQUFJLFdBQVUsYUFBZDtBQUFBO0FBQUEsV0FERjtBQUVFO0FBQUE7QUFBQSxjQUFJLFdBQVUsa0NBQWQ7QUFBQTtBQUFBO0FBRkYsU0FERjtBQU9FO0FBQUE7QUFBQSxZQUFLLFdBQVUsa0JBQWY7QUFDRTtBQUFBO0FBQUEsY0FBRyxXQUFVLDhCQUFiLEVBQTRDLFNBQVM7QUFBQSx1QkFBTSxPQUFLZixLQUFMLENBQVdxQixXQUFYLENBQXVCLE9BQXZCLENBQU47QUFBQSxlQUFyRDtBQUFBO0FBQUEsV0FERjtBQUVFO0FBQUE7QUFBQSxjQUFLLFdBQVUsSUFBZjtBQUFBO0FBQUEsV0FGRjtBQUdFO0FBQUE7QUFBQSxjQUFLLFdBQVUsV0FBZjtBQUNFO0FBQUE7QUFBQSxnQkFBSyxXQUFVLG9CQUFmO0FBQ0UsNkNBQU8sYUFBWSxVQUFuQixFQUE4QixJQUFHLFdBQWpDLEVBQTZDLE1BQUssWUFBbEQsRUFBK0QsTUFBSyxNQUFwRSxFQUEyRSxXQUFVLFVBQXJGLEVBQWdHLFVBQVUsS0FBS00sWUFBTCxDQUFrQkMsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBMUcsR0FERjtBQUVFO0FBQUE7QUFBQSxrQkFBTyxPQUFJLFdBQVgsRUFBdUIsV0FBVSxRQUFqQztBQUFBO0FBQUE7QUFGRixhQURGO0FBTUU7QUFBQTtBQUFBLGdCQUFLLFdBQVUsb0JBQWY7QUFDRSw2Q0FBTyxhQUFZLFVBQW5CLEVBQThCLElBQUcsVUFBakMsRUFBNEMsTUFBSyxnQkFBakQsRUFBa0UsTUFBSyxVQUF2RSxFQUFrRixXQUFVLFVBQTVGLEVBQXVHLFVBQVUsS0FBS0QsWUFBTCxDQUFrQkMsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBakgsR0FERjtBQUVFO0FBQUE7QUFBQSxrQkFBTyxPQUFJLFVBQVgsRUFBc0IsV0FBVSxRQUFoQztBQUFBO0FBQUE7QUFGRixhQU5GO0FBV0U7QUFBQTtBQUFBLGdCQUFLLFdBQVUsb0JBQWY7QUFDRSw2Q0FBTyxhQUFZLFlBQW5CLEVBQWdDLElBQUcsWUFBbkMsRUFBZ0QsTUFBSyxpQkFBckQsRUFBdUUsTUFBSyxNQUE1RSxFQUFtRixXQUFVLFVBQTdGLEVBQXdHLFVBQVUsS0FBS0QsWUFBTCxDQUFrQkMsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBbEgsR0FERjtBQUVFO0FBQUE7QUFBQSxrQkFBTyxPQUFJLFlBQVgsRUFBd0IsV0FBVSxRQUFsQztBQUFBO0FBQUE7QUFGRixhQVhGO0FBZ0JFO0FBQUE7QUFBQSxnQkFBSyxXQUFVLG9CQUFmO0FBQ0UsNkNBQU8sYUFBWSxXQUFuQixFQUErQixJQUFHLFdBQWxDLEVBQThDLE1BQUssZ0JBQW5ELEVBQW9FLE1BQUssTUFBekUsRUFBZ0YsV0FBVSxVQUExRixFQUFxRyxVQUFVLEtBQUtELFlBQUwsQ0FBa0JDLElBQWxCLENBQXVCLElBQXZCLENBQS9HLEdBREY7QUFFRTtBQUFBO0FBQUEsa0JBQU8sT0FBSSxXQUFYLEVBQXVCLFdBQVUsUUFBakM7QUFBQTtBQUFBO0FBRkYsYUFoQkY7QUFxQkU7QUFBQTtBQUFBLGdCQUFLLFdBQVUsVUFBZjtBQUEyQixtQkFBSzNCLEtBQUwsQ0FBV0s7QUFBdEMsYUFyQkY7QUFzQkU7QUFBQTtBQUFBLGdCQUFHLFdBQVUsOEJBQWIsRUFBNEMsU0FBUyxLQUFLdUIsWUFBTCxDQUFrQkQsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBckQ7QUFBQTtBQUFBO0FBdEJGO0FBSEY7QUFQRixPQURBO0FBcUNEOzs7O0VBekhrQkUsTUFBTUMsUzs7QUE2SDNCQyxPQUFPakMsTUFBUCxHQUFnQkEsTUFBaEIiLCJmaWxlIjoiU2lnblVwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgU2lnblVwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB1c2VybmFtZTogJycsXG4gICAgICBwYXNzd29yZDogJycsXG4gICAgICBmaXJzdE5hbWU6ICcnLFxuICAgICAgbGFzdE5hbWU6ICcnLFxuICAgICAgZXJyb3JNc2c6ICcnLFxuICAgICAgc3VjY2Vzc01zZzogJydcbiAgICB9O1xuICB9XG5cbiAgaGFuZGxlQ2hhbmdlKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LnRhcmdldC5uYW1lID09PSAnU2lnblVwTmFtZScpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICB1c2VybmFtZTogZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKGV2ZW50LnRhcmdldC5uYW1lID09PSAnU2lnblVwUGFzc3dvcmQnKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgcGFzc3dvcmQ6IGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChldmVudC50YXJnZXQubmFtZSA9PT0gJ1NpZ25VcEZpcnN0bmFtZScpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBmaXJzdE5hbWU6IGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChldmVudC50YXJnZXQubmFtZSA9PT0gJ1NpZ25VcExhc3RuYW1lJykge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGxhc3ROYW1lOiBldmVudC50YXJnZXQudmFsdWVcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGVudGVyTmV3VXNlcigpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS51c2VybmFtZS5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBlcnJvck1zZzogJ3BsZWFzZSBlbnRlciBhIHVzZXJuYW1lJ1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLnBhc3N3b3JkLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGVycm9yTXNnOiAncGxlYXNlIGVudGVyIGEgcGFzc3dvcmQnXG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUuZmlyc3ROYW1lLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGVycm9yTXNnOiAncGxlYXNlIGVudGVyIHlvdXIgZmlyc3QgbmFtZSdcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS5sYXN0TmFtZS5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBlcnJvck1zZzogJ3BsZWFzZSBlbnRlciB5b3VyIGxhc3QgbmFtZSdcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXNlck9iaiA9IHsgXG4gICAgICAgIG5hbWU6IHRoaXMuc3RhdGUudXNlcm5hbWUsXG4gICAgICAgIHBhc3N3b3JkOiB0aGlzLnN0YXRlLnBhc3N3b3JkLFxuICAgICAgICBmaXJzdE5hbWU6IHRoaXMuc3RhdGUuZmlyc3ROYW1lLFxuICAgICAgICBsYXN0TmFtZTogdGhpcy5zdGF0ZS5sYXN0TmFtZVxuICAgICAgfTtcblxuICAgICAgdmFyIHRoYXQgPSB0aGlzO1xuXG4gICAgICAkLnBvc3QoVXJsICsgJy9zaWdudXAnLCB1c2VyT2JqKVxuICAgICAgLnRoZW4oZnVuY3Rpb24ocmVwb25zZSkge1xuICAgICAgICAvL2FmdGVyIHNpZ251cCBzaG91bGQgcHJvbXB0IHVzZXIgdG8gc2VsZWN0IHRoZWlyIGZhdm9yaXRlIHRocmVlIG1vdmllc1xuICAgICAgICB0aGF0LnNldFN0YXRlKHtcbiAgICAgICAgICBlcnJvck1zZzogJycsXG4gICAgICAgICAgc3VjY2Vzc01zZzogJ25ldyBsb2dpbiBjcmVhdGVkJ1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGF0LnByb3BzLmNoYW5nZVZpZXdzKFwiSG9tZVwiKTtcbiAgICAgICAgdGhhdC5wcm9wcy5zZXRDdXJyZW50VXNlcih0aGF0LnN0YXRlLnVzZXJuYW1lKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgIHRoYXQuc2V0U3RhdGUoe1xuICAgICAgICAgIGVycm9yTXNnOiAndXNlcm5hbWUgYWxyZWFkeSBleGlzdCwgcGxlYXNlIHVzZSBhIGRpZmZlcmVudCB1c2VybmFtZSdcbiAgICAgICAgfSk7XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nbGFuZGluZyByb3cnPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2ljb24tYmxvY2sgY29sIHM3Jz5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cImhlYWRlciBsb2dvXCI+V2VsY29tZSB0byBUaGVNb3ZpZUFwcDwvaDI+XG4gICAgICAgIDxoNSBjbGFzc05hbWU9XCJoZWFkZXIgY29sIHMxMiBsaWdodCBkZXNjcmlwdGlvblwiPlxuICAgICAgICAgIExldHMgZmluZCB5b3VyIG5leHQgYnVkZHkgYnkgeW91ciBtb3ZpZSB0YXN0ZSFcbiAgICAgICAgPC9oNT5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2xvZ2luIGljb24tYmxvY2snPlxuICAgICAgICA8YSBjbGFzc05hbWU9XCJ3YXZlcy1lZmZlY3Qgd2F2ZXMtbGlnaHQgYnRuXCIgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5jaGFuZ2VWaWV3cygnTG9naW4nKX0+R28gdG8gTG9nIEluPC9hPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9yXCI+LS0tLS0tLS0tLSBPUiAtLS0tLS0tLS0tLTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbG9naW5Gb3JtJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWZpZWxkIGNvbCBzNlwiPlxuICAgICAgICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPVwidXNlcm5hbWVcIiBpZD1cInVzZXJfbmFtZVwiIG5hbWU9J1NpZ25VcE5hbWUnIHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwidmFsaWRhdGVcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKX0vPlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cInVzZXJfbmFtZVwiIGNsYXNzTmFtZT1cImFjdGl2ZVwiPlVzZXJuYW1lPC9sYWJlbD5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZmllbGQgY29sIHM2XCI+XG4gICAgICAgICAgICA8aW5wdXQgcGxhY2Vob2xkZXI9XCJwYXNzd29yZFwiIGlkPVwicGFzc3dvcmRcIiBuYW1lPSdTaWduVXBQYXNzd29yZCcgdHlwZT1cInBhc3N3b3JkXCIgY2xhc3NOYW1lPVwidmFsaWRhdGVcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKX0vPlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cInBhc3N3b3JkXCIgY2xhc3NOYW1lPVwiYWN0aXZlXCI+UGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1maWVsZCBjb2wgczZcIj5cbiAgICAgICAgICAgIDxpbnB1dCBwbGFjZWhvbGRlcj1cImZpcnN0IG5hbWVcIiBpZD1cImZpcnN0X25hbWVcIiBuYW1lPSdTaWduVXBGaXJzdG5hbWUnIHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwidmFsaWRhdGVcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKX0vPlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImZpcnN0X25hbWVcIiBjbGFzc05hbWU9XCJhY3RpdmVcIj5maXJzdCBuYW1lPC9sYWJlbD5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZmllbGQgY29sIHM2XCI+XG4gICAgICAgICAgICA8aW5wdXQgcGxhY2Vob2xkZXI9XCJsYXN0IG5hbWVcIiBpZD1cImxhc3RfbmFtZVwiIG5hbWU9J1NpZ25VcExhc3RuYW1lJyB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cInZhbGlkYXRlXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyl9Lz5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJsYXN0X25hbWVcIiBjbGFzc05hbWU9XCJhY3RpdmVcIj5sYXN0IG5hbWU8L2xhYmVsPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlcnJvck1zZ1wiPnt0aGlzLnN0YXRlLmVycm9yTXNnfTwvZGl2PlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIndhdmVzLWVmZmVjdCB3YXZlcy1saWdodCBidG5cIiBvbkNsaWNrPXt0aGlzLmVudGVyTmV3VXNlci5iaW5kKHRoaXMpfT5TaWduIFVwITwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj4pXG4gIH1cblxufVxuXG53aW5kb3cuU2lnblVwID0gU2lnblVwOyJdfQ==