var db = require('../fn/mysql-db');

exports.loadAll = function () {
	var sql = 'select * from account';
	return db.load(sql);
}

// exports.loadAllWithDetails = function () {
// 	var sql = `
// 		select c.CatID, c.CatName, count(p.ProID) as num_of_products
// 		from categories c left join products p on c.CatID = p.CatID
// 		group by c.CatID, c.CatName`;
// 	return db.load(sql);
// }

// exports.load = function (id) {
// 	var sql = `select * from categories where CatID = ${id}`;
// 	return db.load(sql);
// }

// exports.add = function (poco) {
// 	// poco = {
// 	// 	CatID: 1,
// 	// 	CatName: 'new name'
// 	// }

// 	var sql = `insert into categories(CatName) values('${poco.CatName}')`;
// 	return db.insert(sql);
// }

// exports.delete = function (id) {
// 	var sql = `delete from categories where CatID = ${id}`;
// 	return db.delete(sql);
// }