// Engenharia de Software - Praça da Liberdade
// Nome: Werik Gonçalves de Paula
const fetch = require("node-fetch");
const GITHUBTOKEN = 'b3f15c1430f28eb534b36a9d42d8ed0acd7e88ed'

// RQ 01. Sistemas populares são maduros/antigos?
// Métrica: idade do repositório (calculado a partir da data de sua criação)

exports.question1 = function (next){
	return fetch("https://api.github.com/graphql", {
	    method: "POST",
	    headers: {
	      "Content-Type": "application/json",
	      "Authorization": `Bearer ${GITHUBTOKEN}`
	    },
	    body: JSON.stringify({
	      query: next? (`query question1{
			search(first:100, after:"${next}", query:"stars:>100  ", type:REPOSITORY){
				pageInfo{
					startCursor
					hasNextPage
					endCursor
				}
				nodes{
					... on Repository {
						nameWithOwner
						createdAt
					}
				}
			}
		}`) : (`query question1{
			search(query:"stars:>100  ", type:REPOSITORY, first:100){
				pageInfo{
					startCursor
					hasNextPage
					endCursor
				}
				nodes{
					... on Repository {
						nameWithOwner
						createdAt
					}
				}
			}
		}`) 	
	    })
	  })
	    .then(result => {
	      return result.json();
	    })
	    .then(data => {
	  		return data
	    });
}

// RQ 02. Sistemas populares recebem muita contribuição externa?
// Métrica: total de pull requests aceitas


exports.question2 = function (next){
	return fetch("https://api.github.com/graphql", {
	    method: "POST",
	    headers: {
	      "Content-Type": "application/json",
	      "Authorization": `Bearer ${GITHUBTOKEN}`
	    },
	    body: JSON.stringify({
	      query: next? (`query question2{
				search(first:10, after:"${next}", query:"stars:>100 ", type:REPOSITORY ){
					pageInfo{
						startCursor
						hasNextPage
						endCursor
					}
					nodes{
						... on Repository {
							nameWithOwner
							pullRequests(states: MERGED){
								totalCount
							}
						}
					}
				}
			}`) : (`query question2{
				search(query:"stars:>100 ", type:REPOSITORY, first:10){
					pageInfo{
						startCursor
						hasNextPage
						endCursor
					}
					nodes{
						... on Repository {
							nameWithOwner
							pullRequests(states: MERGED){
								totalCount
							}
						}
					}
				}
			}`) 	
	    })
	  })
	    .then(result => {
	      return result.json();
	    })
	    .then(data => {
	  		return data
	    });
}

// RQ 03. Sistemas populares lançam releases com frequência?
// Métrica: total de releases

exports.question3 = function (next){
	return fetch("https://api.github.com/graphql", {
	    method: "POST",
	    headers: {
	      "Content-Type": "application/json",
	      "Authorization": `Bearer ${GITHUBTOKEN}`
	    },
	    body: JSON.stringify({
	      query: next? (`query question3{
				search(first:100, after:"${next}", query:"stars:>100 ", type:REPOSITORY){
					pageInfo{
						startCursor
						hasNextPage
						endCursor
					}
					nodes{
					... on Repository {
						nameWithOwner
						releases{
								totalCount
							}
						}
					}
				}
			}`) : (`query question3{
				search(query:"stars:>100 ", type:REPOSITORY, first:100){
					pageInfo{
						startCursor
						hasNextPage
						endCursor
					}
					nodes{
					... on Repository {
						nameWithOwner
						releases{
								totalCount
							}
						}
					}
				}
			}`) 	
	    })
	  })
	    .then(result => {
	      return result.json();
	    })
	    .then(data => {
	  		return data
	    });
}

// RQ 04. Sistemas populares são atualizados com frequência?
// Métrica: tempo até a última atualização (calculado a partir da data de última atualização)

exports.question4 = function (next){
	return fetch("https://api.github.com/graphql", {
	    method: "POST",
	    headers: {
	      "Content-Type": "application/json",
	      "Authorization": `Bearer ${GITHUBTOKEN}`
	    },
	    body: JSON.stringify({
	      query: next? (`query question4{
				search(first:100, after:"${next}", query:"stars:>100 ", type:REPOSITORY){
					pageInfo{
						startCursor
						hasNextPage
						endCursor
					}
					nodes{
						... on Repository {
							nameWithOwner
							pushedAt
						}
					}
				}
			}`) : (`query question4{
				search(query:"stars:>100 ", type:REPOSITORY, first:100){
					pageInfo{
						startCursor
						hasNextPage
						endCursor
					}
					nodes{
						... on Repository {
							nameWithOwner
							pushedAt
						}
					}
				}
			}`) 	
	    })
	  })
	    .then(result => {
	      return result.json();
	    })
	    .then(data => {
	  		return data
	    });
}

// RQ 05. Sistemas populares são escritos nas linguagens mais populares?
// Métrica: linguagem primária de cada um desses repositórios

exports.question5 = function (next){
	return fetch("https://api.github.com/graphql", {
	    method: "POST",
	    headers: {
	      "Content-Type": "application/json",
	      "Authorization": `Bearer ${GITHUBTOKEN}`
	    },
	    body: JSON.stringify({
	      query: next? (`query question5{
				search(first:100, after:"${next}", query:"stars:>100 ", type:REPOSITORY){
					pageInfo{
						startCursor
						hasNextPage
						endCursor
					}
					nodes{
						... on Repository {
							nameWithOwner
							primaryLanguage{
								name
							}
						}
					}
				}
			}`) : (`query question5{
				search(query:"stars:>100 ", type:REPOSITORY, first:100){
					pageInfo{
						startCursor
						hasNextPage
						endCursor
					}
					nodes{
						... on Repository {
							nameWithOwner
							primaryLanguage{
								name
							}
						}
					}
				}
			}`) 	
	    })
	  })
	    .then(result => {
	      return result.json();
	    })
	    .then(data => {
	  		return data
	    });
}

// RQ 06. Sistemas populares possuem um alto percentual de issues fechadas?
// Métrica: razão entre número de issues fechadas pelo total de issues

exports.question6 = function (next){
	return fetch("https://api.github.com/graphql", {
	    method: "POST",
	    headers: {
	      "Content-Type": "application/json",
	      "Authorization": `Bearer ${GITHUBTOKEN}`
	    },
	    body: JSON.stringify({
	      query: next? (`query question6{
				search(first:100, after:"${next}", query:"stars:>100 ", type:REPOSITORY){
					pageInfo{
						startCursor
						hasNextPage
						endCursor
					}
					nodes{
						... on Repository {
							nameWithOwner
							closedIssues: issues(states: CLOSED){
								totalCount
							}
							issues{
								totalCount
							}
						}
					}
				}
			}`) : (`query question6{
				search(query:"stars:>100 ", type:REPOSITORY, first:100){
					pageInfo{
						startCursor
						hasNextPage
						endCursor
					}
					nodes{
						... on Repository {
							nameWithOwner
							closedIssues: issues(states: CLOSED){
								totalCount
							}
							issues{
								totalCount
							}
						}
					}
				}
			}`)
	    })
	  })
	    .then(result => {
	      return result.json();
	    })
	    .then(data => {
	  		return data
	    });
}
