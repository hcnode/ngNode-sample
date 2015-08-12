/**
 * Created by harry on 15/4/21.
 */
module.exports = function (mongoose, lodash) {
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
			body: {
				type: String,
				editType: "textarea",
				render: function (data) {
					return data.length > 40 ? data.substring(0, 40) + ".." : data;
				},
				text: "Body"
			},
			date: {
				type: Date,
				sortable: true,
				render: function (data) {
					return data && data.split("T")[0];
				},
				text: "Date"
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
		defaultPageSize: 15
	};
}
