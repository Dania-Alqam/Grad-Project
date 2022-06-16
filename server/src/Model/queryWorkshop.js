const { connect } = require("http2");
var mysql = require("mysql");
const util = require("util");
var dbconfing = require("../Config/dbconfig");
connection = mysql.createConnection(dbconfing);
const execute = util.promisify(connection.query).bind(connection);
var executeQuery = async function (query)  {
  var results = await execute(query);
  return results;

}

module.exports = {execute: executeQuery};