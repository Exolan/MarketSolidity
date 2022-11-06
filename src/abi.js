export const abi = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id_shop",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "id_review",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "comment",
				"type": "string"
			}
		],
		"name": "addComment",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "person",
				"type": "address"
			}
		],
		"name": "addNewAdmin",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newShop",
				"type": "address"
			},
			{
				"internalType": "bytes32",
				"name": "password",
				"type": "bytes32"
			},
			{
				"internalType": "string",
				"name": "city",
				"type": "string"
			}
		],
		"name": "addNewShop",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id_shop",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "comment",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "rate",
				"type": "uint256"
			}
		],
		"name": "addReview",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id_shop",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "id_review",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "id_comment",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "score",
				"type": "bool"
			}
		],
		"name": "addScoreComment",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id_shop",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "id_review",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "score",
				"type": "bool"
			}
		],
		"name": "addScoreReview",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id_request",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "answer",
				"type": "uint256"
			}
		],
		"name": "answerToRequest",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "login",
				"type": "address"
			},
			{
				"internalType": "bytes32",
				"name": "password",
				"type": "bytes32"
			}
		],
		"name": "avtorization",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "login",
				"type": "address"
			},
			{
				"internalType": "bytes32",
				"name": "password",
				"type": "bytes32"
			}
		],
		"name": "avtorizationShop",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "changeRoleAdmin",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "changeRoleWorker",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "person",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "newRole",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "id_shop",
				"type": "uint256"
			}
		],
		"name": "changeUserRole",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id_shop",
				"type": "uint256"
			}
		],
		"name": "deleteShop",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "peoples",
		"outputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "login",
				"type": "address"
			},
			{
				"internalType": "bytes32",
				"name": "password",
				"type": "bytes32"
			},
			{
				"internalType": "uint256",
				"name": "role",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "activeRole",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "login",
				"type": "address"
			},
			{
				"internalType": "bytes32",
				"name": "password",
				"type": "bytes32"
			}
		],
		"name": "registration",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id_shop",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "id_review",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "id_comment",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "id_score",
				"type": "uint256"
			}
		],
		"name": "removeScoreComment",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id_shop",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "id_review",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "id_score",
				"type": "uint256"
			}
		],
		"name": "removeScoreReview",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id_shop",
				"type": "uint256"
			}
		],
		"name": "requestToChangeRole",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "requests",
		"outputs": [
			{
				"internalType": "address",
				"name": "requesting",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "haveRole",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "newRole",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "id_shop",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "admin_answer",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "isEnd",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "shops",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "id_shop",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "address_shop",
				"type": "address"
			},
			{
				"internalType": "bytes32",
				"name": "password",
				"type": "bytes32"
			},
			{
				"internalType": "string",
				"name": "city",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id_shop",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "id_review",
				"type": "uint256"
			}
		],
		"name": "viewComments",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "id_review",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "id_comment",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "user",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "comment",
						"type": "string"
					},
					{
						"components": [
							{
								"internalType": "uint256",
								"name": "id_score",
								"type": "uint256"
							},
							{
								"internalType": "address",
								"name": "user",
								"type": "address"
							},
							{
								"internalType": "bool",
								"name": "like",
								"type": "bool"
							}
						],
						"internalType": "struct WebShop.Score[]",
						"name": "scores",
						"type": "tuple[]"
					}
				],
				"internalType": "struct WebShop.Comment[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "person",
				"type": "address"
			}
		],
		"name": "viewPerson",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "login",
						"type": "address"
					},
					{
						"internalType": "bytes32",
						"name": "password",
						"type": "bytes32"
					},
					{
						"internalType": "uint256",
						"name": "role",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "activeRole",
						"type": "uint256"
					}
				],
				"internalType": "struct WebShop.Person",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "viewRequests",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "requesting",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "haveRole",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "newRole",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "id_shop",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "admin_answer",
						"type": "uint256"
					},
					{
						"internalType": "bool",
						"name": "isEnd",
						"type": "bool"
					}
				],
				"internalType": "struct WebShop.Request[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id_shop",
				"type": "uint256"
			}
		],
		"name": "viewReviews",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "id_review",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "id_shop",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "user",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "review",
						"type": "string"
					},
					{
						"components": [
							{
								"internalType": "uint256",
								"name": "id_score",
								"type": "uint256"
							},
							{
								"internalType": "address",
								"name": "user",
								"type": "address"
							},
							{
								"internalType": "bool",
								"name": "like",
								"type": "bool"
							}
						],
						"internalType": "struct WebShop.Score[]",
						"name": "scores",
						"type": "tuple[]"
					},
					{
						"internalType": "uint256",
						"name": "rate",
						"type": "uint256"
					},
					{
						"components": [
							{
								"internalType": "uint256",
								"name": "id_review",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "id_comment",
								"type": "uint256"
							},
							{
								"internalType": "address",
								"name": "user",
								"type": "address"
							},
							{
								"internalType": "string",
								"name": "comment",
								"type": "string"
							},
							{
								"components": [
									{
										"internalType": "uint256",
										"name": "id_score",
										"type": "uint256"
									},
									{
										"internalType": "address",
										"name": "user",
										"type": "address"
									},
									{
										"internalType": "bool",
										"name": "like",
										"type": "bool"
									}
								],
								"internalType": "struct WebShop.Score[]",
								"name": "scores",
								"type": "tuple[]"
							}
						],
						"internalType": "struct WebShop.Comment[]",
						"name": "comments",
						"type": "tuple[]"
					}
				],
				"internalType": "struct WebShop.Review[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "viewShops",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "id_shop",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "address_shop",
						"type": "address"
					},
					{
						"internalType": "bytes32",
						"name": "password",
						"type": "bytes32"
					},
					{
						"internalType": "string",
						"name": "city",
						"type": "string"
					},
					{
						"internalType": "address[]",
						"name": "workers",
						"type": "address[]"
					},
					{
						"components": [
							{
								"internalType": "uint256",
								"name": "id_review",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "id_shop",
								"type": "uint256"
							},
							{
								"internalType": "address",
								"name": "user",
								"type": "address"
							},
							{
								"internalType": "string",
								"name": "review",
								"type": "string"
							},
							{
								"components": [
									{
										"internalType": "uint256",
										"name": "id_score",
										"type": "uint256"
									},
									{
										"internalType": "address",
										"name": "user",
										"type": "address"
									},
									{
										"internalType": "bool",
										"name": "like",
										"type": "bool"
									}
								],
								"internalType": "struct WebShop.Score[]",
								"name": "scores",
								"type": "tuple[]"
							},
							{
								"internalType": "uint256",
								"name": "rate",
								"type": "uint256"
							},
							{
								"components": [
									{
										"internalType": "uint256",
										"name": "id_review",
										"type": "uint256"
									},
									{
										"internalType": "uint256",
										"name": "id_comment",
										"type": "uint256"
									},
									{
										"internalType": "address",
										"name": "user",
										"type": "address"
									},
									{
										"internalType": "string",
										"name": "comment",
										"type": "string"
									},
									{
										"components": [
											{
												"internalType": "uint256",
												"name": "id_score",
												"type": "uint256"
											},
											{
												"internalType": "address",
												"name": "user",
												"type": "address"
											},
											{
												"internalType": "bool",
												"name": "like",
												"type": "bool"
											}
										],
										"internalType": "struct WebShop.Score[]",
										"name": "scores",
										"type": "tuple[]"
									}
								],
								"internalType": "struct WebShop.Comment[]",
								"name": "comments",
								"type": "tuple[]"
							}
						],
						"internalType": "struct WebShop.Review[]",
						"name": "book",
						"type": "tuple[]"
					}
				],
				"internalType": "struct WebShop.Shop[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id_shop",
				"type": "uint256"
			}
		],
		"name": "viewWorkers",
		"outputs": [
			{
				"internalType": "address[]",
				"name": "",
				"type": "address[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]