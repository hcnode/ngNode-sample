/**
 * Created by harry on 15/7/8.
 */
var config = {
	appName : "test",
	mongodConnection : "mongodb://localhost:27017/ngnode",
	on: {
		"beforeCreate": function (req, res, model, cb) {
			model.createBy = req.session.user._id;
			cb(model);
		}
	}
};
require("ngnode")(config);