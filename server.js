const express = require('express');
const fs = require('fs');
const { Parser } = require('json2csv');

const app = express();
const querys = require('./querys.js')

app.get("/question1", async (req, res) => {
	let fileCsv = '';
	let next = false;
	let csv;
	for (var i = 10; i > 0; i--) {
		const response = await querys.question1(next)
		console.log(response)
		const parser = new Parser(response);
		const csv = parser.parse(response.data.search.nodes);
		fileCsv += csv
  		next = response.data.search.pageInfo.endCursor
  		console.log(next)
	}
	fs.writeFile('./csv/question1.csv', fileCsv, function (err) {
	  if (err) return console.log(err);
	  console.log('CSV salvo com sucesso');
	})
});

app.get("/question2", async (req, res) => {
	let fileCsv = '';
	let next = false;
	let csv;
	for (var i = 100; i > 0; i--) {
		let response = await querys.question2(next)
		let parser = new Parser(response);
		if(response.data){
			const csv = parser.parse(response.data.search.nodes);
			fileCsv += csv
	  		next = response.data.search.pageInfo.endCursor
	  		console.log(next)
		}else{
			i++
		}
	}
	fs.writeFile('./csv/question2.csv', fileCsv, function (err) {
	  if (err) return console.log(err);
	  console.log('CSV salvo com sucesso');
	})
});

app.get("/question3", async (req, res) => {
	let fileCsv = '';
	let next = false;
	let csv;
	for (var i = 10; i > 0; i--) {
		const response = await querys.question3(next)
		const parser = new Parser(response);
		const csv = parser.parse(response.data.search.nodes);
		fileCsv += csv
  		next = response.data.search.pageInfo.endCursor
  		console.log(next)
	}
	fs.writeFile('./csv/question3.csv', fileCsv, function (err) {
	  if (err) return console.log(err);
	  console.log('CSV salvo com sucesso');
	})
});

app.get("/question4", async (req, res) => {
	let fileCsv = '';
	let next = false;
	let csv;
	for (var i = 10; i > 0; i--) {
		const response = await querys.question4(next)
		const parser = new Parser(response);
		const csv = parser.parse(response.data.search.nodes);
		fileCsv += csv
  		next = response.data.search.pageInfo.endCursor
  		console.log(next)
	}
	fs.writeFile('./csv/question4.csv', fileCsv, function (err) {
	  if (err) return console.log(err);
	  console.log('CSV salvo com sucesso');
	})
});

app.get("/question5", async (req, res) => {
	let fileCsv = '';
	let next = false;
	let csv;
	for (var i = 10; i > 0; i--) {
		const response = await querys.question5(next)
		const parser = new Parser(response);
		const csv = parser.parse(response.data.search.nodes);
		fileCsv += csv
  		next = response.data.search.pageInfo.endCursor
  		console.log(next)
	}
	fs.writeFile('./csv/question5.csv', fileCsv, function (err) {
	  if (err) return console.log(err);
	  console.log('CSV salvo com sucesso');
	})
});

app.get("/question6", async (req, res) => {
	let fileCsv = '';
	let next = false;
	let csv;
	for (var i = 10; i > 0; i--) {
		const response = await querys.question6(next)
		const parser = new Parser(response);
		const csv = parser.parse(response.data.search.nodes);
		fileCsv += csv
  		next = response.data.search.pageInfo.endCursor
  		console.log(next)
	}
	fs.writeFile('./csv/question6.csv', fileCsv, function (err) {
	  if (err) return console.log(err);
	  console.log('CSV salvo com sucesso');
	})
});


app.listen(3001);

console.log('Running a API server at http://localhost:3001/questions');