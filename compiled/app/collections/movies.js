'use strict';

var db = require('../dbConnection');
var Movie = require('../models/movie');

//create movies collection
var Movies = new db.Collection();
Movies.model = Movie;

module.exports = Movies;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2FwcC9jb2xsZWN0aW9ucy9tb3ZpZXMuanMiXSwibmFtZXMiOlsiZGIiLCJyZXF1aXJlIiwiTW92aWUiLCJNb3ZpZXMiLCJDb2xsZWN0aW9uIiwibW9kZWwiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLEtBQUtDLFFBQVEsaUJBQVIsQ0FBVDtBQUNBLElBQUlDLFFBQVFELFFBQVEsaUJBQVIsQ0FBWjs7QUFFQTtBQUNBLElBQUlFLFNBQVMsSUFBSUgsR0FBR0ksVUFBUCxFQUFiO0FBQ0FELE9BQU9FLEtBQVAsR0FBZUgsS0FBZjs7QUFFQUksT0FBT0MsT0FBUCxHQUFpQkosTUFBakIiLCJmaWxlIjoibW92aWVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGRiID0gcmVxdWlyZSgnLi4vZGJDb25uZWN0aW9uJylcbnZhciBNb3ZpZSA9IHJlcXVpcmUoJy4uL21vZGVscy9tb3ZpZScpO1xuXG4vL2NyZWF0ZSBtb3ZpZXMgY29sbGVjdGlvblxudmFyIE1vdmllcyA9IG5ldyBkYi5Db2xsZWN0aW9uKCk7XG5Nb3ZpZXMubW9kZWwgPSBNb3ZpZTtcblxubW9kdWxlLmV4cG9ydHMgPSBNb3ZpZXM7Il19