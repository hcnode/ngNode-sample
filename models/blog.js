/**
 * Created by harry on 15/4/21.
 */
module.exports = function () {
	return {
		name: "blog",
		schema: {
			title: {
				type: String,
				sortable: true,
				text: "Title"
			},
			author: {
				type: String,
				sortable: true,
				text: "Author"
			},
			content: {
				type: String,
				editType: "textarea",
				render: function (data) {
					return data ? data.length > 40 ? data.substring(0, 40) + ".." : data : "";
				},
				text: "Content"
			},
			createAt: {
				type: Date,
				sortable: true,
				render: function (data) {
					return data && data.split("T")[0];
				},
				text: "createAt"
			},
			createBy: {
				type: String,
				editable: false,
				text: "createBy"
			},
			category: {
				text: "Category",
				type : String,
				editType: ["Mongod", "Express", "Angularjs", "Node"]
			},
			recommend: {
				text: "Recommend",
				type: Boolean,
				render: function (data) {
					return "";
				}
			}
		},
		defSortField: "title",
		queryFields: ["title", "author"],
		defaultPageSize: 15,
		on: {
			"beforeCreate": function (req, res, model, cb) {
				model.createAt = new Date();
				model.err = "xxx";
				cb(model);
			}
		},
		initData: function (mongoose) {
			var Blog = mongoose.model("blog");
			Blog.create({
				title : "what is ngNode?",
				author : "hcnode",
				content : "todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo" +
					" todo todo todo todo todo todo",
				category : "Node",
				recommend : true
			}, function (err, blog) {
				if(err){
					console.log("create blog fail when init model");
				}else {
					console.log("create blog success when init model");
				}
			});
		}
	};
}
